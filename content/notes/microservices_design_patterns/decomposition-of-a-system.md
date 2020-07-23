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

