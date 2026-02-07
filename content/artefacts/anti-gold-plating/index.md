---
title: "Anti-Gold-Plating Checklist"
date: 2026-02-07T19:01:00+11:00
author: Claude & Arie Oldman
draft: false
summary: How to avoid over-cooking.
---

A quick checklist to help engineers _get to simple_ when designing a product feature. AI code generation tools are lifting the burden of execution, which means engineers must be even more careful in deciding _what_ to execute on.

## Core Checklist


| Category | Questions |
|----------|-----------|
| **Sufficiency Test** | • Does the basic version actually solve the problem?<br>• Would users pay/use it without the extra polish?<br>• Can you ship it today and add polish later based on feedback? |
| **Polish vs. Core** | • Is this feature core functionality or nice-to-have UX?<br>• Will 90% of users even notice this refinement?<br>• Does removing this change the value proposition? |
| **Timing** | • Are you polishing before validating product-market fit?<br>• Could you be learning from users instead of perfecting in isolation? |
| **Scope Creep Signals** | • Did this requirement emerge during build, not before?<br>• Are you solving hypothetical future problems?<br>• Is "while we're at it..." driving decisions? |
| **Ego Check** | • Are you building for your portfolio or for users?<br>• Would you be embarrassed to ship the simpler version?<br>• Are you over-engineering because it's more fun? |
| **Hard Rules** | • Ship the ugliest version that works<br>• No edge cases until the main case is validated<br>• No "delight" features until core problem is solved<br>• Stop when it works, not when it's perfect |

## Additional Checks (Based on Experience)

Not mentioned above, but stuff I have noticed on the job.

- Do we already do this elsewhere?
- Is it sensible to build on the foundations we're proposing?
- Does it require a lot of time commitment but have comparatively _low conviction_?
- Is there a **hackier** way to achieve this in the short term?

