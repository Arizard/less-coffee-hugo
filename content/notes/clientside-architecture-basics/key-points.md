---
title: "Client Side Architecture Basics - Design Principles"
date: 2020-08-21T15:15:01+10:00
author: "Arie Oldman"
type: "notes"
tags:
- Notes
draft: false
---

## Command-Query Separation (CQS)

Basic definition: 
* Commands are procedures that change state and return void (side effects).
* Queries are procedures that return information and leave state unchanged (no side effects).

**It's possible to separate procedures into the `command` and `query` components.** 
This makes the code easier to reason about, easier to test, and easier to debug.

{{< callout success >}}
Enforce the principle of Command-Query Separation in future code.
Every function is either a **command** or a **query**.
{{< /callout >}}
