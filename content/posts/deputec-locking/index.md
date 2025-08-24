---
title: "Deputec Locking and Timesheet Concurrency Problems"
subtitle: "Implementing bulk actions into Deputy presents synchronisation challenges."
description: "Arie Oldman explains how Deputy tackles timesheet concurrency issues when implementing bulk actions. Deep dive into optimistic locking and synchronization challenges."
keywords: ["Arie Oldman", "Deputy", "concurrency", "timesheet", "bulk actions", "optimistic locking", "synchronization", "software engineering"]
date: 2023-06-19T16:19:00+1000
draft: false
author: Arie Oldman
---

At Deputy, we are starting to introduce bulk actions for timesheets: bulk approve, bulk discard, and so on.
Previously we have only exposed single-timesheet actions to users. With bulk actions we introduce more opportunities
for concurrency issues. While a bulk action is in progress, resources (Timesheets) may be accessed or modified by
multiple users or processes.

### Current Approach: Optimistic Locking

In Deputy we use “optimistic locking” by checking the `Modified` column in the database.

> Before committing, each transaction verifies that no other transaction has modified the data it has read. If the
check reveals conflicting modifications, the committing transaction rolls back and can be restarted.
>
> source: [Wikipedia](https://en.wikipedia.org/wiki/Optimistic_concurrency_control)


An example of this would be two users (Alice and Bob) working on the same timesheet.

1. Alice and Bob both load the timesheet approval page in their own browsers.
2. Alice then clicks “Approve Time” for the timesheet.
3. During the brief delay between clicking the approve button and the timesheet being saved, Bob updates the
   operational unit of the timesheet.
4. Bob’s request succeeds and the timesheet is updated.
5. When Alice’s approval completes, the timesheet can’t be saved because it was modified after the approval began.

From here we have two options:

1. **Try to repeat the failed approval straight away.**

    This option is not ideal for timesheets in particular, because Alice has clicked “Approve” after comparing some
    business criteria with the state of the timesheet. Now that the timesheet is different, she should review it again.

2. **Give up, inform user that approval failed and they should try again.**

    This option makes more sense for sensitive tasks like approval, because we prompt Alice to review the timesheet
    again.

One limitation is that in a *high data contention* system (many users accessing a single resource), slow actions
such as Approval will fail repeatedly. The slower the action, the more likely it is that another user modifies the
resource. Currently Deputy is a *low data contention* system so we don’t have this problem, but this should be kept
in mind when adding or changing the user experience.

### Alternative Approach: Pessimistic Locking

In a system with pessimistic locking, we “acquire” a lock on a Timesheet. Other users can’t modify a Timesheet unless
they acquire a lock, and only one user can acquire a lock at any time.

This means that in a high data contention system, users might have to wait longer to modify a Timesheet (compared to
Optimistic Locking); they are waiting to acquire a lock on the Timesheet from the other users.

There is a middle ground between these two locking types: just use both.

For simple changes like start time, operational unit, breaks, etc. use optimistic locking. These simple actions are so
quick that the risk of interruption is low.

For complex operations like approval, we can use pessimistic locking: block all modifications to the timesheet from
the time approval begins to the time approval ends. This way, the approver gets priority over other modifications.

### Pessimistic Locking UX Considerations

If a timesheet is “locked” by approval, then we need to inform all other users that the timesheet is not available for
editing.

In the backend we can return an error, but we would rather not make the user attempt a modification, then tell them
that they did something wrong. The user should know ahead of time that the timesheet is locked.

Issues can arise if we don’t cleanly release the lock after approval completes. We don’t want perma-locked timesheets.

## Bulk Actions: Failure Tolerance

Bulk actions will be built to handle actions on quantities of 10,000 timesheets (ball park). With this kind of
operation, there are plenty of things that can (and will) go wrong.

We currently don’t have a tidy way of informing the user that some (potentially thousands) of timesheets couldn’t be
actioned.

Some feature of usability for this feature might be:

- Ability to see a list of timesheets that couldn’t be actioned for a particular bulk action.
- Ability to “retry” the bulk action for the timesheets that couldn’t be actioned.

## Conclusion

For timesheet bulk actions, because we are working in a high data contention system the users are better off with
optimistic locking. Longer actions are at risk of being interrupted by shorter actions, and this is a drawback.

However, I think this is acceptable for our use case: it is not a typical user behaviour to have two users modifying
the same timesheet. When this does happen, we would prefer the longer action be interrupted, because timesheet actions
are typically initiated based on what the user can see as the current timesheet state.

Given that the action can be interrupted, we need to keep a record of all the interruptions and show this to the user.

There is business case to be made for optimistic locking: it's already implemented at the ORM level, so we can get to
market a lot faster. We avoid additional complexity.
