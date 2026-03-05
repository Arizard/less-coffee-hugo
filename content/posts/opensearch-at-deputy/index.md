---
title: "OpenSearch Serverless at Deputy"
date: 2026-02-17T21:25:57+11:00
author: Arie Oldman
draft: false
tags:
    - technical
summary: The most egregiously over-engineered solution I have ever been a part of.
---

At Deputy, a dozen engineers—myself included—spent 18 months attempting to index all timesheets as documents in OpenSearch Serverless. The business needed to boost revenue from mid-market, AWS had a compelling pitch, and we ended up committing to a solution that ran well over scope.

The first show-stopper was that OSS has a propagation delay when indexing a document. Even after committing timesheet approvals to our MySQL database, there was a variable delay before they showed up in search results due to how AWS decouples query compute from indexing compute. This took 30 seconds under load.

We "solved" this by wasting months of dev time building out an optimistically-updated user interface, which was *more* confusing for the user, added *more* complexity to our codebase, and felt *less* responsive than the decade-old legacy frontend. Perhaps we were victims of the sunk cost fallacy. Fumble of the year?

OSS's query performance and auto-scaling also fell short of the marketing. Then we discovered, quite late, that we needed joins for things like employee and location names. In the end, we _re-hydrated the search results anyway by making multiple service-to-service RPCs_.

This was the most egregious example of an over-engineered solution I have ever been a part of.

The _actual_ solution to this problem was a lot simpler. Keep the whole system strongly consistent and address the root cause of the performance issues: poorly written PHP, poorly optimised SQL, over-reliance on unmaintained ORMs, and no agency over the infrastructure[^lack-of-agency].

[^lack-of-agency]: Very few engineers at Deputy had control over the infrastructure. You aren't allowed to "create a table" or "add a column". You couldn't configure your own message queues, you had to use "background jobs", etc. Principals were risk-averse; they insisted on packaging up any modern technology (for our multi-tenant architecture), hamstringing engineering teams in the process.
