---
title: "Vernacular of Microservices"
date: 2020-07-22T14:15:10+10:00
author: "Arie Oldman"
type: "notes"
tags:
  - Notes
draft: false
---

## Service Types

- Data Services - A service which provides access to some data source. Can be a database or some other data store technology.
- Business Service - Performs business logic. One example is an ordering system which has multiple steps and crosses multiple domain boundaries: Receive order, charge user, dispatch product, decrement inventory.
- Translation Service - Abstract an external service under the domain's own desired facade.
- Edge Service - Handle delivery of payload from the platform to the user. This also performs transformations to the payload, e.g. compression of images for slow connections.

## Platform

- The runtime for your services - bare metal, virtual machine, or container.
- Ancillary services - services that are included in the platform runtime. Some examples are message queues, cache services, authorisation services.
- Operational components - log aggregators, shippers, metric aggregators. These enable the organisation to maintain operational integrity.
- Diagnostic components - any software that allows you to perform diagnostic operations inside the runtime itself, to diagnose and troubleshoot or improve system performance.
