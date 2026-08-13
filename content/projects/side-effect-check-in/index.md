---
title: "Reducing side-effect-related support tickets by 63%"
date: 2025-06-30T09:00:00+10:00
author: Arie Oldman
summary: An in-app side-effect check-in questionnaire.
class: essay
---

> [!WARNING] Already over word count
>
> Gotta make this more succinct... Aim for 125 words per Context, Action, Result, Learnings (give or take) Maybe could bias to Learnings: 100 100 100 200?

## Key Points

1. 20% of patient cancellations could be attributed to either “didn’t get the support I needed” or “I’m experiencing side effects”.
2. I was responsible for coordinating myself and two other engineers to implement an in-app side effect questionnaire. This feature would address the shortcomings of the existing way of reporting side effects by switching to a weekly check in cadence, using in-app screens instead of navigating to Zendesk on the mobile browser, and automatically handling low-risk patients by providing self-management options.
3. This reduced side effect-related support tickets by 63% in the weeks following launch because low-severity reports deliberately point patients towards the self-management option (often the underlying issue stems from anxiety around having injected the medication incorrectly, so reassurance that their side effects are normal helps calm people down). This effectively raised the threshold for submitting a side effect-related ticket, so the support team could now focus on the patients who had a much higher churn risk.
4. Reflecting on the process: the first cut of the architecture was quite complex and handled a variety of edge cases which were presented by the initial requirements. It involved two new microservices and a flexible cadence configuration. After getting feedback from other engineers, I negotiated with the product manager and reasoned that if we could limit the system to a single cadence (weekly) and treat the questionnaire options as static, we could shorten the time to release and simplify the architecture dramatically.

## Context

Juniper is a telehealth clinic. We ship GLP-1s (a popular class of weight loss medications) to patients on a monthly subscription. We also provide a companion mobile app.

Since revenue is driven by the subscription model, we're very interested in ways to improve patient retention because it improves the long-term value of each patient. My product manager had discovered that about 20% of patient cancellations could be attributed to either “didn’t get the support I needed” or “I’m experiencing side effects”. It was hypothesised that

1. The existing bi-weekly check ins were not frequent enough, since patients titrate up on their dose on a weekly basis.
2. Self-reporting side effects was high friction since it takes patients to a Zendesk form in their mobile browser.
3. Patients have to wait for medical support to respond.

Instead, we would prompt patients to complete an in-app side effect check in questionnare on a weekly cadence. Patients who report low-risk symptoms would be reassured that these are self-manageable, while patients with high-risk symptoms are automatically routed to med support with pre-filled high priority ticket.

## Action

Mobile designs were provided by our squad’s designer. The requirements had been captured by our product manager. My responsibility was to lead the engineering work for myself and 2 of my engineer colleagues.

We needed some way to show a reminder once a week, and we needed a new questionnaire in the mobile app to navigate to. The questionnaire answers would need to be recorded somewhere, and some logic needed to be run to triage the patient and optionally create a support ticket for them.

I started with a very thorough architecture which covered a lot of different use cases. However, when I floated this with the team, we agreed that it would be wise to simplify the design where possible, to reduce the risk of over-building and speed up the release.

Instead of supporting arbitrary check-in cadences for multiple different purposes, I worked with the product manager to determine that, right now, we only really need weekly cadences, specifically for this new questionnaire. We could avoid building an entire additional service just by making that change.

We have an existing "quiz" architecture which we could extend, but it presented similar over-build risks: the quizzes were dynamic and customisable, so building on this existing architecture would incur a huge complexity cost. I checked with the product manager, and he confirmed that the medical team had reviewed the proposed questionnaire thoroughly and there was no requirement for customisation whatsoever. In this case, building a new, boring, CRUD-y service for this purpose was less complex than trying to extend the monolithic quiz architecture.

---

I had initially designed an elaborate system which generalised the "check in" concept so that it could recur on a weekly or fortnightly cadence. I floated this to the team for feedback. After collaborating with other engineers and the product manager, we agreed that the system could be greatly simplified if we only supported weekly cadences. This meant we could release this in less time and lowered the risk of over-building. In hindsight this was a very good idea, since we kept this architecture for the next 12 months until it was superseded by the Treatment Engagement Loop.

It was clear that this functionality didn't quite fit into any of our existing services. We try to make sure services contain a cohesive set of capabilities: Offerings service manages purchasing (but not pricing), Orders service manages orders and consignments, for example. I would spin up a new service for side effect reports.

To implement a questionnaire that allows users to submit reports, I started by designing the contracts of the overall system: Postgres schema, Protobuf definitions, and GraphQL schema.

I deliberately chose a simplistic approach for the database columns: a `report` table with one column per selectable option. This design flowed through to the Protobuf contract as the same fields on a `Report` message. At the graph, a `SideEffectReport` type was exposed

---

At the time, the convention was to write a TSD (technical specification document) which describes what I intended to build. This document captured the system architecture, schemas for GraphQL, gRPC, and Postgres, frontend screens and components, security concerns, and any downstream analytics events.

To prompt the user once a week, I leveraged the existing _plan actions_ system (which I also helped build but didn't feature-lead) to schedule a plan action to appear on the app homepage on specific dates. When the questionnaire was submitted, this published a message to a pubsub topic which was subscribed to by a _plan driver_ which would mark the current active plan action as completed. Then it would schedule the next plan action for the following week, unless the patient had submitted three consecutive "no side effects" questionnaires. This gave the desired recurrence behaviour.

When a questionnaire was submitted, the patient's answers would be handled by triage logic: anything "severe" would immediately create a zendesk ticket, anything "moderate" would create a zendesk ticket if the previous report was also "moderate", and any time the patient entered something into the free-text "other" field would create a zendesk ticket as well. "mild" severity would intentionally not create a support ticket.

The user could also change their check in date. When this happened, we would publish a message to a pubsub topic, subscribed by the plan driver, which then discards all the incomplete plan actions for that user and schedules a new one on the next check in day. If the new check in day was within three days from the last questionnaire submission, we added another week to make it ten days after.

One final thing to address was the titration problem—patients who titrate tend to experience side effects more prominently. What we had already was a service responsible for creating a _scheduled dose_ for the customer's treatment. The dosage schedule service published a message to pubsub whenever a new scheduled dose was created (this was driven periodically by Cloud Scheduler) so the side effects service would subscribe to that and schedule a new plan action for the week which the patient would titrate up.

At first I went with an elaborate solution which involved two new microservices: one to manage the recurrence of check ins, and one to record side effect reports. These had been separated because I was thinking that check ins are used for more than just the side effect questionnaire. After some feedback from my colleagues I condensed the changes down into a single new service responsible for both, since there really was only one kind of check in, for now. I had also tried to parameterise the check in cadence, since that as a co-requirement of other check-in kinds, but now that could be converted to an implicit assumption which greatly simplified the implementation.

After some rounds of feedback I had designed a single new microservice with several synchronous and asynchronous interactions. svc.core.sideeffects would be responsible for side effect reports, which were created when the user submits the questionnaire. Depending on the severity of their

## Result

## Learnings

- Don't overcomplicate things. Also known as YAGNI. It made a lot of sense to keep this narrow in order to build something that can be released quickly for a tighter feedback loop.
- Define the problem space really clearly, even when the PM provides lots of requirements. I had misinterpreted some requirements at first which caused me to architect for edge cases that didn't exist.
-
