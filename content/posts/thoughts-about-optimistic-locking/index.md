---
title: "Passing Thoughts about Optimistic Locking"
description: "Arie Oldman explores optimistic locking patterns with Postgres read replicas, covering race condition prevention for MFA rate limiting and distributed database considerations."
keywords: ["Arie Oldman", "optimistic locking", "Postgres", "read replicas", "race conditions", "database concurrency", "MFA", "rate limiting"]
tags: ["technical"]
date: 2025-09-03T21:53:57+10:00
author: Arie Oldman
draft: false
---

I was working on a microservice that used a monotonically increasing `version` column as an optimistic lock. After a conversation with my coworker, I discovered something interesting.
<!--more-->

He suggested that the `SELECT` queries all go via the Postgres replica.

At first I thought this doesn't make sense, since I need to call `INSERT` later. Then it clicked: my line of reasoning only makes sense in the context of transactional databases, where I had been spending most of my time. It turns out that optimistic locking (in theory) works even when your reader node is asynchronously replicated from your writer node. Since the lock isn't explicit, if your `SELECT` returns slightly old data, that's not appreciably different to having called that `SELECT` further in the past.

My use case is to generate and record one-time passcodes for MFA in an append-only table, and we also want to apply strict rate limiting of five codes per five-minute sliding window. This means we need to prevent race conditions that would allow a user to bypass rate limiting:

> If the user has four codes generated and they send the fifth and sixth requests at the same time, only the fifth request should succeed.

For the above example, we had also explored other methods:
1. Postgres transactions, but they didn't protect against concurrent `INSERT`.
2. [Postgres advisory locks](https://www.postgresql.org/docs/17/explicit-locking.html#ADVISORY-LOCKS), but they risk a deadlock scenario.

Our use case has low lock contention and short execution time, which means that it's suited to optimistic locking, making use of our Postgres read replicas.

