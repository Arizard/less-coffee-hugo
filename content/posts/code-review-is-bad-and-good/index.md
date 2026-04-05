---
title: Code Review is Bad and Good?
date: 2026-04-05
author: Arie Oldman
draft: false
tags:
    - technical
summary: On people and code quality.
---

After an interaction at work, I'm torn between two opposing views:

1. Code review is where quality gets enforced, and bad quality leads to unhappy users.
2. Code review is only a proxy for happy users, code quality is not an indication of user satisfaction.

I suppose both can be true, and there exists some chain of reasoning which reconciles these statements. If we are using code review as proxy for satisfied users, at what point does this proxy fall apart?

Well, code review is not a measure of how satisfied a user will be. Plenty of bad quality code satisfies users, and plenty of good quality code flops. Therefore there is only a weak correlation between code quality and user satisfaction.

What if we worked backwards from the user? Say the user can't do what they want to do with the product. One of the following has happened:

- we released the feature and it's not working (bug)
- the product itself has suddenly stopped working (incident)
- the feature is not built yet (roadmap)

To continue satisfying the user we need to fix bugs, resolve incidents, and add new features as the needs of the users change. We need a stable foundation to do that with high confidence: a consistent codebase with shared understanding. As we let the quality bar drop (such as if we stopped enforcing code conventions) then the codebase becomes inconsistent. Your team will exhaust their mental energy just figuring out what the hell is going on, rather than the important part of the job: solving the user's problem.

Hand-written and agent-generated code alike declines into disorder. We are locked in a constant battle against entropy. Aside from keeping users happy, our job as software engineers is to defend against the inconsistency which destabilises our foundations. If we lower our standards, safe code changes become impossible and the user churns to a competitor.

Code review _is_ where quality gets enforced, _and_ bad quality leads to unhappy users, _but_ its importance is only as a heuristic. It's the long-term impact of code changes that need to be factored in, rather than short-term cost of time spent reviewing.

Your code will outlive your presence, so go ahead and request changes.

{{< dinkus >}}

> [!NOTE] AI Disclaimer
> Just to let you know, I used Claude to give me feedback on this one. It's not generating actual content, instead it's used as a "rubber duck" by asking it to summarise key points, so that I can see whether it makes sense from a perspective other than my own.
