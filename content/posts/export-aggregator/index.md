---
title: "The Deputy Export Aggregator"
date: 2022-02-19T09:51:53+11:00
draft: false
---


<!--

workflowmax.com

Write about your recent project
- process you took ("roadmap")
- challenges encountered + solution
- end result

-->

The _Export Aggregator_ is an online service which combines exported data from
multiple Deputy businesses into one file. It works by triggering the exports
via API call and then consolidating the results in memory. To retrieve the
result, the service can be configured to upload the output via SFTP or managed
file transfer.

In this blog post, I'll briefly cover the process we (the implementation
consultant Jack, and myself) took to build this, the challenges we encountered along
the way, and the end result.

## Takeoff

Well-known Australian Airline[^airline] (I will refer to this company as Airline)
makes heavy use of Deputy within its ground teams --
technicians, engineers, cleaners, and other staff essential to the safe
operation of aircraft.

The earliest engineering work that I produced for Airline was the
_GroundStar RealTime Roster Export_ in 2019. In brief terms, this was a button on the
_Schedule_ tab of Deputy which would download a formatted
plain text file containing the data for all the shifts in the upcoming week.
This text file could be imported into GroundStar RealTime (scheduling system) in order to sync the
schedules[^2-systems].

Airline were reportedly very happy with the end result. It performed exactly how
they wanted.

They were so happy that after a few months of using this feature, they asked for more.

## Scaling Out

> We would like to use this across the rest of our Deputy accounts.

The above quote is paraphrased, but it sums it up well.
Airline has multiple accounts, each for a different division of their ground
teams. Simple enough, we could just install it in each account. Low complexity.

> We also want automate it, so that we don't have someone performing
> this procedure multiple times per day.

Okay, a bit more engineering work, but we can do it.

> Then we want all the exports to end up in our managed file transfer (MFT)
> server.

Right, getting a bit more complex now.

> Also, each account has some combination of Ports (i.e. Cities), and we want
> only one file for each port, containing the data from each port in all
> accounts.

All right! Now we're talking. This is not your typical implementation.
Finally, something juicy to sink my teeth in to.

> By the way, the result needs to be encrypted with our PGP public key.

## Brainstorming the Design

Jack and I discussed the requirements for this implementation, and came up with
something like the following.

* Needs to run arbitrarily frequently (frequency was not determined)
* Creates a single file from exporting the same Port in multiple accounts.
* Creates a single file for each Port, e.g. SYD, BNE, MEL, PER.
* Submits each file to a specific directory in Airline's managed file transfer,
  QMFT.

From my experience (or perhaps inexperience, you be the judge!) I suggested we
implement the following:

* The logic for combining exports, submitting results and interacting with
  multiple Deputy accounts couldn't be stored in a single account with DeXML
  (this was the typical approach in CX for single-account customers). We will
  move the logic out of the account and into the cloud using **AWS Lambda**.
  This service was easy to rapidly deploy and test. CX had free reign over its
  Lambdas and there were few restrictions in place from the Infrastructure
  team.
* The Lambda would be implemented in Go, because I was the only developer, and
  it was the most familiar Lambda-supported language I knew at the time. I had
  experience writing Go from working on Tesseract (another CX service) and
  [Precaf]({{< ref "precaf" >}}).
* To configure arbitrary periodic execution, we would use **AWS CloudWatch**,
  because this let us trigger the Lambda at regular scheduled intervals.
* To collect the export data from multiple accounts, each account would have a
  Decaf script installed which could be triggered via HTTP API. This script was
  parametric so that the caller could select a particular Port.
* To submit the data to QMFT, we would use the QMFT API.

{{< figure src="export-aggregator.png" caption="Sketch of the Export Aggregator architecture" >}}

### Over-Engineering for Other Use Cases

In CX, it is discouraged to write code which can only be used by a single
customer. It's preferable to write code which leans towards generic,
covering a particular domain, while allowing configuration changes for specific
customers.

For this reason, the following design decisions were made:

* The Lambda would be configured using a combination of Lambda environment
  variables and JSON configuration. The JSON configuration was to be stored in
  **AWS S3**. The environment variables contained the path to the configuration
  file.
* The JSON config file would contain all the details: which exports to run,
  what parameters to use, which endpoints to call, where to send the result,
  and all authentication and encryption data necessary.
* Making use of **Lambda versioning**, we could "snapshot" the
  environment variables for one customer. Therefore we could have two customers
  on the same Lambda, but different versions. We could also test the latest
  changes without disturbing the existing configuration.


Thanks to these decisions, we were able to adapt the system for an American
customer, [Au Bon Pain](https://en.wikipedia.org/wiki/Au_Bon_Pain).

These decisions were partially inspired by the [12-factor app methodology](https://12factor.net/): Store config in the environment, Execute as stateless process.

## Implementation

The engineering work went mostly smoothly. I was able to apply what I already
knew about Go. I also learnt a lot about Lambda, S3, and CloudWatch.

Using ideas from [SOLID](), [The Clean Architecture](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html)
and also [12-factor applications](https://12factor.net/) allowed rapid
development by explicitly isolating and mocking dependencies.

The system can be thought of as 4 interfaces, where the implementations are
determined at runtime:

1. The _Config Loader_, which loads configuration files. In production, this is
   using S3 via the AWS SDK. In development, this can be substituted for a
   different concrete implementation which reads from the local directory.
2. The _Event Listener_, which is responsible for beginning the export procedure.
   In production, the implementation starts a listener for CloudWatch triggers.
   In development, it starts immediately.
3. The _Export Generator_, which is responsible for executing API calls to the
   Deputy accounts and combining the results. This component is typically the
   same in production and development, because in Airline's case, the export
   script on the account is read-only, and there are no consequences.
4. The _Export Submitter_ is responsible for taking the output of the Export
   Generator and sending the result somewhere. For production, this would be to
   submit via API to QMFT[^abp-sftp]. In development, it would write to the local
   directory. This component also handles the encryption of the output file!

{{< figure src="components.png" caption="White: interface, green: development environment implementation, amber: production implementation" >}}

The impact of this decision was I could test one component in isolation by
selecting the development implementations for the other components.

## Landing

Overall, the project was a success. As of writing this post, Airline is still
using this system to export 4 Ports spread across 3 accounts. The trigger is
set to execute the Lambda every hour on the half hour, 24/7 -- way better than
having a manager trigger this manually.

As mentioned before, the Export Aggregator was easily adapted to support
another customer asking for similar (yet simpler) behaviour.

I had a lot of fun designing and building this with Jack. I felt that I learned
a lot and grew as an engineer from this experience.

There is only one factor I can't control. Occasionally, QMFT will fail for no
known reason. It's confirmed it's not on Deputy's side.

Can't win them all, I guess!

[^2-systems]: Why have two systems? The reason is that GroundStar RealTime
is their preferred system to handle scheduling for multiple months in
advance, while Deputy is preferred for handling last-minute schedule changes. By blending the two
systems together, Airline ground teams had the benefits of far-in-advance
scheduling and short-notice schedule changes.
[^abp-sftp]: After launching this service for Airline, another implementation of the Export
Submitter was built in order to upload files via SFTP for Au Bon Pain.
Amazingly, the implementation was straightforward, since this dependency was
well isolated!
