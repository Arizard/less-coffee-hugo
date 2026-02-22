---
title: "Where are the Teaching Resources?"
date: 2026-02-21T16:44:22+11:00
author: Arie Oldman
draft: false
tags:
    - technical
summary: The value of internal education in a technology organisation.
---

<!-- is this a case for teaching resources, or knowledge sharing in general? -->
A business case exists for the creation of "teaching resources": tutorials, guides, presentations, and articles which explain technical concepts in your engineering organisation. This is distinct from technical specifications, requirements documents, or <abbr title="Request for comment">RFC</abbr>s. However, they are indigestible by design—thorough, dense, and overflowing with jargon. Good teaching resources are, on the other hand, digestible.

Good resources have _outcomes_ and _intended audiences_. There is some idea of "who" should know "what" after consuming the material.

For example:

1. _Software Engineers, <abbr title="Product Manager">PMs</abbr>, and <abbr title="Product Designer">PDs</abbr> understand the motivation behind building Feature X and how Feature X looks on the user's device._
2. _Software Engineers understand basic configuration of Feature X._
3. _PMs understand the data model for Feature X in an analytics context._

The author must anticipate their audience fairly well, to provide an appropriate level of depth. Concepts are introduced at a steady pace. Existing knowledge is not introduced as if it's completely new, and irrelevant information is not introduced at all. The author is thinking: what's the minimum amount of information that achieves the desired outcome?

And it's not just for new starters, in the same way <abbr title="Accessibility">a11y</abbr> is not just for screen readers. A library of high quality teaching resources in a technology organisation benefit everyone, just like how web accessibility standards improve web browsing for everyone.

It upskills other engineers on siloed domain knowledge, lowering the barriers to providing meaningful code review and avoiding dependency on a small handful of team members. These resources also upskill non-engineers, reducing inbound queries to your team, protecting their precious focus.

It doesn't over-index on infrequent events. You _don't_ want one engineer or one team being the bottleneck when you're trying to ship fast without breaking things.

Humans bias towards a path of lesser resistance, even if it's not the optimal solution. When submitting a lazy PR is easier than reading dense technical documents, your code reviewers become stretched thin. Active effort must be made to create a lower-resistance path.

When documentation is indigestible, the problem space is not navigable. You don't know what you don't know. We need some kind of abstraction over the complex underlying topic, to make obvious the extent (or limits) of our own knowledge.
