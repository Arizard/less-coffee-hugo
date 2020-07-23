---
title: "Decomposition Patterns"
date: 2020-07-22T14:38:30+10:00
author: "Arie Oldman"
type: "notes"
tags:
- Notes
draft: false
---

## Decomposition of a System

### Functional Use Patterns

* Domain based - first area to attack when breaking down a system.
* Business process based - divide system into loosely coupled business process.
* **Atomic Transaction** based - "eventual consistency" is not acceptable. Decomposition must be performed around the atomic transaction.

### Decomposition Strategies

* Strangler Pattern - common, breaking down monolith instead of greenfield.
* Sidecar Pattern - offload functions into separate functional components.

## Domain-based Microservices

### Data Domains

* Small, focused services
* Driven by the data domain model itself
* Only concerned with logic within the domain
* Underlying schema is unimportant, focus is on the data patterns[^data-patterns] in the domain.

## Data Domain Design

* Domain driven design (DDD)
* **START** with the model, NOT the datastore (implementation)
* Evaluate actions on the data
* Build the service **contract-first**. Working down towards the lower-level concrete stuff.

{{< callout success >}}
**A High Level Design Process**

1. Define the model
2. Define the actions
3. Implement the datastore
{{< /callout >}}

## Business Process-Based Microservices

### Business Process Domains

* Provide higher level abstraction written around specific business functionality.
* Encapsulate related domains **while allowing the encapsulated domains to be accessed independently**.
* They **do not provide datasource access** - [Command-Query Separation](https://en.wikipedia.org/wiki/Command%E2%80%93query_separation#:~:text=Command%E2%80%93query%20separation%20(CQS),the%20caller%2C%20but%20not%20both.)
* Distinct functional uses.

### Business Process Domain Design

* Identify process - spend significant time gathering requirements to ensure you have the data you need before you start.
* Identify domains
* Define API - focus on the contract and the *actual process*. Further reading: Action Pattern[^action-pattern]
* Wire the service to the client. Encapsulate business process code into it's on module/package.

## Atomic Transaction Microservices

* Guarantee ACID transactions across domains
* Provide failure domains and rollbacks - in the event the process fails partially.
* Force blocking until commit - the client needs the guarantee that the call succeeded in order to continue.
* Don't use distributed transactions

### Designing Atomic Services

* Ensure you *MUST* have the atomic service. Stakeholders need to understand the complexity and constraints this places on the system.
* Domains must be in a shared database.
* The transaction must be clearly defined - put this in README or Confluence and have it proofed by stakeholders.
* Implement the service as normal, with fast-fail and rollback.

{{< callout "danger" >}}
Try to avoid atomic services as much as possible. 
They "muddy the waters" of distributed systems as a whole. 
Scalability and availability is compromised. 
Performance becomes compromised.
You can't avoid network congestion.
**Do your best to consider eventual consistency or rollbacks**
{{< /callout >}}

## Strangler Pattern

* Break up a monolith by "strangling" the dependency on it.
    1. Move specific endpoint into microservices
    2. Start pointing dependencies to the new service
    3. Eventually deprecate the original functionality in the monolith.
* Can be top-down - shard out the API first, then move the database behind the API
* Can be bottom-up - start at the datastore, move the domains out, traverse up the tree to business processes.
* Essentially, carve out functionality and replace it with a carefully crafter microservice.

{{< callout info "todo: add a picture of bocconcini being made" >}}

1. Pull out one data domain into its own service
2. Move client's dependency to new service
3. Once all data is moved over and all usage is moved over, remove data from monolith.
4. Repeat
5. Build out business process domain as service which consumes multiple data domain services
6. Move client dependencies to the BPD service.
7. Remove calls from client to monolith.
8. Deprecate functionality in monolith.

## Sidecar Pattern and Design

* Offload repetitive code to a service - e.g. logging.
* Must be specific enough for immediate need, and generic enough for future needs.
* Determine the process
* Build the sidecar process[^sidecar]

{{< callout success >}}
**The Sidecar Process**





[^sidecar]: [O'Reilly Sidecar Pattern](https://www.oreilly.com/library/view/designing-distributed-systems/9781491983638/ch02.html#:~:text=The%20sidecar%20pattern%20is%20a,there%20is%20a%20sidecar%20container.)
[^action-pattern]: Refers to RESTful Action Pattern.
[^data-patterns]: A data pattern defines the way in which the data collected (semi-structured data) can be structured, indexed, and made available for searching. One of the primary functions of creating a data pattern is to specify fields that must be extracted from the data collected. [Managing Data Patterns](https://docs.bmc.com/docs/display/public/bmcitda10/Managing+data+patterns#:~:text=A%20data%20pattern%20defines%20the,extracted%20from%20the%20data%20collected.)
