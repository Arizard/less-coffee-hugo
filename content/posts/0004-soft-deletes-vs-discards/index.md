---
title: "Soft Delete, Hard Delete, and Discard"
date: "2026-04-17T17:57:37+10:00" # TODO
author: Arie Oldman
draft: true
hero: hero.jpg
hero_attribution: TODO add attribution
tags:
  - misc
summary: How should you trash your entities?
---

{{< draft >}} "Soft delete" is when your persistence layer records a flag to
indicate that an entity was deleted. In a postgres table this might be a
`deleted_at timestamptz` column. This is set in lieu of a "hard delete" which
would be removing that entity from persistence completely.

When you soft delete something, it still exists on disk. Applications should
treat soft-deleted entities as non-existent. This means they are excluded from
database indexing, filtered out from database queries, and never passed through
the application as if the entity still existed. The application code should
never be able to access these soft-deleted entities, otherwise they aren't
really deleted. It's as if they were hard-deleted. In the postgres example, this
would be adding `where deleted_at is null` to all reads and joins.

There are sometimes situations where you want the user to perceive a deletion,
but really the application has a copy of the data it can restore at any time. In
that case, deletion is better modeled as what I like to call a "discard" (a
holdover from Deputy terminology). At Deputy, we modeled this with a boolean
`discarded` column on the `deputec_timesheet` table. At Euc, we use postgres and
love enums, so this pattern emerges as a `status` column on the ledger such as
`status: active | inactive`.

Think of it like this:

- Hard deletes: simplest but destructive. Hard to debug if the data is gone
  completely.
- Soft deletes: a bit more work to implement than a hard delete, but
  non-destructive. Debugging is a bit easier because there's no data lost.
- Discards: when you want to surface the "deletion" concept to the application
  layer, distinct from the concept of soft- or hard-delete.

Generally if your application needs to know "did this entity exist at some point
in the past?" I think you should use Discards. If your application is simpler
and just needs to check the existence _right now_, soft deletes work just fine.

Another way to differentiate between the use cases: delete vs discard. Will I
ever need to pass a deleted entity around in memory long after it's been
deleted? If yes, then use discard instead.

But actually discards and soft deletes are kinda the same thing. It's a matter
of convention as to whether you consider `deleted_at` to constitute an actual
deletion or a discard. In my opinion, if you're calling it `deleted_at` you are
implying it's a deletion operation, and deleted data shouldn't be accessible by
the application. Both soft delete and hard delete belong to the same family of
"delete".

It is a very fine line. My suggestion to reduce confusion is to treat `delete`
as "destroy", i.e. the application can no longer see it. If the entity can be
accessed long after so-called "deletion" then you should actually call this a
"discard".

In Magic the Gathering, a player can "discard their hand" which means pitching
all cards in your hand to the graveyard at once. These cards aren't destroyed
(deleted). The word "delete" comes from the Latin _delere_ which means to
destroy or obliterate.

The way I think of it is a "status" column (in the Discarded pattern) models the
entity as a state machine (domain layer concern), while the `deleted_at` column
is a persistence layer concern.

Another way to think of it is "contextual". With a deletion, all connections to
the database should pretend that this entity no longer exists. While with a
"discard", some users might have a "view discarded items" permission, while
others don't.

The problem actually arises when your organisation has multiple conventions for
deletion.

If some teams consider "deleted" to be hidden from all applications, while
another team considers "deleted" as user-facing, then it leads to a few things:

- teams are too confused to contribute to other team's codebases, introducing
  silos, or
- teams are too confident with contributing to other team's codebases,
  introducing errors due to failed assumptions about deletion behaviour

This is because over time, that team's engineers are working on shared
load-bearing assumptions about deletion behaviour. When it starts to get
polluted by other teams, those assumptions no longer hold, and you're forced to
deal with that technical debt.

Or if you had a `user` table. Yes you can delete users, but you probably don't
want to do that.

Next steps: I realised that it's not clear cut, but it's possible to define
specific situations where each approach makes sense. I think it will be good to
give examples on where to use each. What's interesting is that this is a
fundamental aspect of schema design—how to handle deletes? It's not something I
really thought about before.

Soft deleted rows and discarded rows can be joined by foreign key, but now you
have to _carefully_ write queries such that any nth-order join should ensure
that it's not joining any deleted rows. This increases join complexity, but
you'd probably be doing it anyway. The tradeoff of not having data destruction
is probably worth it.

I think i'm not done yet. But i seem to be coming up with the same scenarios.

- hard delete is simple to implement but destructive
- soft delete is more work to implement, but preserves data. dev has to be
  mindful of the schema (but they already should be). deletion should be treated
  conventionally as a persistence layer concern, and therefore deleted entities
  should not be accessible in your domain layer.
- discard is a pattern for when you want to model the concept of a delete as a
  domain layer concern. It's not soft deletion, it's a "state" of your entity,
  such as "discarded" or "archived". These entities can continue to be passed
  around the domain layer long after this operation is applied.

discarding is the one I want to focus on. I think it's really interesting to
model the concept of "discarding" while not actually deleting the entity.

I think discarding is orthogonal to soft-delete. You might want to discard an
entity, e.g. show the entity only to the user who owns it. Or you might want to
soft-delete, as in make the whole system treat the entity as non-existent (incl.
DB indexing and constraints).

It can be difficult to keep these conceptually separate. Is it worth it?

{{< /draft >}}
