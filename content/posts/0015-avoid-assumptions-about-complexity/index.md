---
title: "0015 Avoid Assumptions About Complexity"
date: "2026-08-13T20:59:51+10:00" # TODO
author: Arie Oldman
draft: true
summary: A lesson learned from my last project.
---

{{< draft >}}

## Avoid Assumptions About Complexity

> The hardest part about a two-week project is the first four weeks.

Estimates are not hard deadlines, but inaccurate estimates result in nasty surprises later on. Divide the work into tasks, and estimate the difficulty of each task. Always try and verify—don't assume anything about the system complexity.

A good spot to end up in is one where you can visualise the code changes without actually making them. You could use pseudocode, or even plain English: _here on line 123, the code makes this assumption about XYZ, but that's changing now, therefore we need to wrap this in a switch-case..._

### Subscribe & Save at Eucalyptus

My most recent feature-lead opportunity was making subscription purchases available in the Juniper mobile shop. This is a problem that platforms like Shopify have already solved, but we've got an in-house shop experience, likely due to the aforementioned pattern (_get to simple_). I made the incorrect assumption that: we need subscription management screens, and we already have treatment management screens and components, and treatments are a kind of subscription, therefore we can re-use a lot of existing code. I estimated two weeks.

I soon learned that the hardest part about a two-week project is the first four weeks. The level of technical debt and tight coupling was unprecedented. These components—which we thought would be re-usable—were tightly coupled to _treatments_, which are tightly coupled with _prescriptions_, which requires a lot of tightly coupled business logic and much technical debt in the form of assumptions about the data.

In retrospect, I would not have been able to explain, in plain english, exactly _why_ I thought it was possible to re-use these components.

## Keep Stakeholders in the Loop

I know, it happens. You get lost in the sauce (or source) and forget to reply on Slack. You should still summarise your progress on some kind of cadence.

Avoid radio silence when executing—I call this _disappearing into the bunker_. Frequency of status updates can depend on many factors. If things move fast in the business, you might need to compete for attention by providing near-daily status updates. Generally, higher frequency and higher uncertainty go hand-in-hand.

Delivering progress updates on a cadence makes others perceive you as reliable. Conversely, sporadic progress updates and raising risks late will cause you to appear unreliable. The most obvious thing to do is to summarise your project's progress once per week _at minimum_. Dot points only. Don't be afraid to share a mid-week update as well as the end-of-week update.

Speaking of risks: _raise risks often and early_. Don't hesitate[^dont-hesitate] to raise _anything_ which affects the delivery timeline—bias towards over-communicating. Your EM can't help you if you don't communicate.

[^dont-hesitate]:  Assuming your engineering manager creates a psychologically safe work environment.

{{< /draft >}}
