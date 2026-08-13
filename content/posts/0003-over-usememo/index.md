---
title: "You don't need useMemo"
date: "2026-04-17T12:28:52+10:00" # TODO
author: Arie Oldman
draft: true
hero: hero.jpg
hero_attribution: TODO add attribution
tags:
  - technical
summary: Guidance about React's hungriest hook.
---

{{< draft >}}

What is useMemo? it's a hook which can be used to control when a value gets
re-computed, often to maintain a stable reference and prevent cascading renders.
You pass it a callback, it runs the callback, caches the result, and gives the
result back to you. On subsequent renders of the component, the callback is only
executed again if its dependencies have changed.

this is draft content. it's removed when the post is published.

The dependency array of useMemo uses referential equality. This will become
important.

Misconceptions about useMemo

- It improves performance? Well it's more nuanced than that. You're effectively
  trading CPU cycles for memory, and even then it's not guaranteed.

{{< /draft >}}
