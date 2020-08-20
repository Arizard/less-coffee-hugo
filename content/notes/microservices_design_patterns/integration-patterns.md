---
title: "Integration Patterns"
date: 2020-08-03T12:49:32+10:00
author: "Arie Oldman"
type: "notes"
tags:
  - Notes
draft: false
toc: true
description: "Notes on how to expose services to clients in sustainable ways."
---

## Gateway Pattern

- A facade/proxy to the underlying services and the client needs
- Proxy, mutate or limit calls to services from outsiders

### Mutation Behaviours

- Can simply proxy, restrict access based on credentials, add buffer to internet system
- Can decorate payloads
- Can aggregate (but not apply business logic!)
- Can limit access (e.g. allow/deny or serve different content based on client needs)
- Movement buffer - the underlying services can change while the API contract remains.

### Strategy

- Define contracts
- Expose APIs for those contracts, client-focused
- Adhere to strict version control[^semver], and **passive changes only** (i.e. no functional changes to the contract).
- Implement the gateway to call your services. Implement clients to call the gateway.

## Process Aggregator Pattern

**Problem**

You have several business processes that must be called together and have a composite payload.

- Aggregator provides client a single API to call
- Can introduce its own processing logic.
- Could cause a long, blocking call.

### Aggregator Design

- Determine business processes behind the aggregator
- Determine the processing rules
- Design a consolidated model
- Design an API for the **actions** on that model.
  - Consider **Action Pattern**
- Wire the service and implement the internal processing.
  - Encapsulation prevents changes down the road from causing more problems.

## Edge Pattern

- Another subset of the gateway pattern.
- **Problem 1** - Scaling the gateway for one type of client is wasteful
- **Problem 2** - Client has specific needs
- Focus on isolating calls for different client systems

### Edge Design

- Identify client
- Build contracts
- Implement contracts
- Maintain passivity as long as client is needed

### Gateway vs Edge

- Similar but different.
- Edge targets clients - better design focus on the client system.
- Edge is more scalable based on client system type load.
- Edge is more flexible for new clients.
- Gateway has less moving parts. Lower complexity and better maintainability.

[^semver]: Semantic Versioning
