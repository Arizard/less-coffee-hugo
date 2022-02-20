---
title: "The Deputy Export Aggregator"
date: 2022-02-19T09:51:53+11:00
draft: true
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

In this blog post, I'll briefly cover the process we took to build this, the
challenges we encountered along the way, and the end result.

## Project Kick-off

The airline company Qantas makes heavy use of Deputy within its ground teams --
technicians, engineers, cleaners, and other staff essential to the safe
operation of Qantas aircraft.

The earliest engineering work that I produced for Qantas was called the
_GroundStar RealTime Roster Export_ in 2019. In brief terms, this was a button on the
_Schedule_ tab of Deputy which a manager could use to download a formatted
plain text file containing the data for all the shifts in the upcoming week.
This text file could be imported into GroundStar RealTime in order to sync the
schedules between the two systems[^2-systems].

Qantas were reportedly very happy with the end result. It performed exactly how
they wanted.

They were so happy that after a few months of using this feature, they asked
(via the implementation consultant, Jack) for more.

## Scaling Out

> We would like to use this across the rest of our Deputy accounts.

The above quote is paraphrased, but it sums it up well.
Qantas has multiple accounts, each for a different division of their ground
teams. Simple enough, we could just install it in each account. Low complexity.

> We also want automate it, so that we don't have to have someone performing
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
* Submits each file to a specific directory in Qantas' managed file transfer,
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
customer. Its preferred to write code which leans towards more generic,
covering a particular domain, while allowing configuration changes for specific
customers.

For this reason, the following design decisions were made:

* The Lambda would be configured using a combination of lambda environment
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
* 

[^2-systems]: Why have two systems? The reason is that GroundStar RealTime
is their preferred system to handle scheduling for multiple months in
advance, while Deputy is preferred for handling last-minute schedule changes. By blending the two
systems together, Qantas ground teams had the benefits of far-in-advance
scheduling and short-notice schedule changes.
