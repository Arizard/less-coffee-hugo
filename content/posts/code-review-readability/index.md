---
title: "Three Ways to Make Your PRs (And Repos) more Readable"
summary: "Even in the age of AI, you should still write code for humans."
description: "Arie Oldman shares three practical strategies to improve pull request readability, reduce reviewer cognitive load, and ship better code faster. Learn techniques used at Eucalyptus."
keywords: ["Arie Oldman", "pull request", "code review", "software engineering", "readability", "team collaboration", "PR best practices", "Eucalyptus"]
tags: ["software-engineering", "career"]
date: 2025-08-23T13:10:30+10:00
author: Arie Oldman
draft: false
---

Making your PRs easier to review enables your team to ship fast while maintaining quality. In this post I'll explain three ways to improve PR readability and why it works.
<!--more-->

## Reduce Backtracking

Every time you refactor some code block into a new function, the reviewer needs to jump back and forth between files to understand what the code is doing. This gets tiresome and increases cognitive load for the reviewer, and that causes critical issues to be overlooked. Instead, most logic can be written inline, which is a lot easier to reason about, and makes quality more obvious.

Sometimes you do need to create abstractions to reduce code duplication. Try to be absolutely sure that the code is truly duplicated — code blocks often look the same, but evolve differently over time.

My advice: default to inlining your new code, until you have a really good sense of how it will be re-used and evolve. An example would be a class that encapsulates API calls to a third party. It’s obvious that if the third party were to change their API contract, all future calls should match that change, therefore it makes sense to deduplicate this code.

**Think about what it would be like to follow the code changes from start to finish. Would the reviewer be able to read the PR top-to-bottom, or would they frequently need to backtrack?**

## Simplify Mutable State

It can quickly become difficult to keep track of how values change as you step through code in a PR. In my experience, variables are easier to follow if they are assigned once and then never updated again. When you update an existing variable, especially conditionally, it’s easy to lose track of what that value should be during execution.

There are scenarios where it makes more sense to update a variable. For example, looping over a list of objects and updating a `latestThing` variable:

```go
var latestThing Thing = things[0]
for _, t := range things {
	if t.CreatedAt > latestThing.CreatedAt {
		latestThing = t
	}
}
```

In this case it’s not a problem because all the mutation happens within a few lines, and the variable is never updated again. Notice how there’s no need for the reviewer to backtrack — a reasonably competent programmer can understand the purpose of this loop.

To simplify mutable state, first try to avoid it. If you can’t reasonably avoid it, then my suggestion is to keep the mutations clustered together. The following example is my preferred code layout, which is somewhat counter-intuitive:

```go
var latestThing Thing = things[0]
for _, t := range things {
	if t.CreatedAt > latestThing.CreatedAt {
		latestThing = t
	}
}

var oldestThing Thing = things[0]
for _, t := range things {
	if t.CreatedAt < oldestThing.CreatedAt {
		oldestThing = t
	}
}

var bestThing Thing = things[0]
for _, t := range things {
	if t.Rank > bestThing.Rank {
		bestThing = t
	}
}
```

At first glance, there appears to be code duplication. However, having three separate loops rather than one big loop helps to reduce interleaved mutable state. Each code block can be examined in isolation, reducing cognitive load for the reviewer.

**Avoiding mutable state and simplifying that which you can't avoid will make code review easier.**

## Manage Mnemonic Overhead

My last tip is that poor naming creates extra work for code reviewers. The tricky part? It’s hard to pin down a set of blanket rules for naming. Short names such as `t`, `a`, `svc` are useful when they are unambiguous, used sparsely, and in close proximity to where they were first assigned. Longer names are more descriptive and are useful when trying to communicate the programmer’s intent, and help to shape how the codebase evolves.

This example used previously has a mixture of these naming approaches:

```go
var bestThing Thing = things[0]
for _, t := range things {
	if t.Rank > bestThing.Rank {
		bestThing = t
	}
}
```

We have `bestThing`, which is a longer name, suggests to the reviewer that this variable is a `Thing` which is considered “best” (highest `Rank` property). Throughout the rest of the file or function, the purpose of `bestThing` is a bit more obvious.

We also have `t` as the element of `things` which is easy enough to keep track of because it’s used immediately on the following two lines. There is nothing special about `t`, and we don’t need to encode specifics into the name; it currently has no identity or purpose other than to be an element of this `things` array.

This section was mostly about name length, but content matters as well. Try to encode simple, useful information in the name: `bestThing`, `svcToken`, `user`. This reduces ambiguity, especially in cases where initialisms could have multiple meanings: `ts` could be “timesheet” (Deputy example) or “timestamp”, or `dt` could mean “date and time” or “delta time”. An example of better names would be to name timestamps and datetimes after an event or an intent, such as `createdAt` or `updatedAt`, timesheets should just be `timesheet`, and “delta time” could be `tickIntervalMS`.

**Good naming is really hard. You’ll have to find a balance between succinctness and verbosity, often on a case-by-case basis.**

## Good Code Is about Human Comprehension

Even in the age of AI, you should still write code for humans. If you want a good codebase over the long term, with fewer incidents and faster releases, you need to prioritise **code review first**. It’s the number one priority if your goal is code quality and velocity.

Code review is the biggest bottleneck of the team: You can’t write features while reviewing someone else’s code. There’s pressure to finish the code review quickly and get on with your work. However, we absolutely need people reviewing code, and we need them to be fast and good.

Reducing backtracking, simplifying mutable state, and managing mnemonic overhead may seem to be only three out of an infinite number of suggestions, but these are what stood out to me during my first six months at Eucalyptus. It’s something that I wish I had known during my time at Deputy.

Did you find this article useful, or perhaps you used it to [train an AI coding agent](https://github.com/anthropics/claude-code)? Maybe you disagree strongly—just let me know in the comments!
