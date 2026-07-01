---
title: "Creating a test user"
date: "2026-05-21T00:00:00+10:00"
author: Arie Oldman
class: essay
---

{{< draft >}}

> idea: remove meta-commentary like "my next task was"... just let it be a
> thought-stream or internal monologue

It took me 4 hours to create the test user I wanted. It started with trying to
use engbot to create a test user, but it turns out that the default offering
that gets purchased by the test user contains health assessments, which
invalidates my test. I can’t add another purchase, because that would create
another order for the test user, which also invalidates my test. That means my
next task was to modify the code for engbot so that it didn’t assign that
offering. First I tried to change the offering that was purchased by engbot by
specifying an offering ID at the command line. That worked, but our system sees
that a user has purchased an offering with a sequence which doesn’t match the
_prescribed sequence_ on the test user’s initial consultation. That means the
next fix is to update the prescribed sequence logic to select a sequence from
the offering I’m specifying. I finally had a user with a prescribed sequence
from that offering. Wait… now this user is on weight maintenance, not weight
loss, that also invalidates my test. So I made sure that the code which selects
the sequence checks the sequence tags to ensure it doesn’t contain
“maintenance”. That worked, so I removed the code which affected the test user’s
purchasing step. It doesn’t work. Fuck! It turns out that if you leave it to
chance, the graph layer finds _any_ offering which references the prescribed
sequence. So it would end up picking a _different_ offering which again
contained health assessments and invalidated my test. So I needed both those
changes: one to pick a sequence from the offering as the prescribed sequence,
and another to purchase the particular offering and avoid fallback to default.
Add the change back to the purchase step. Eureka! Finally, I had a test user
with exactly one order, for a purchased offering that had RX only, no health
assessments, and not on weight maintenance.

{{< /draft >}}

I need a test user. Simple, I'll use eng-bot. This will certainly not consume
the next two hours. Oh, the default configuration makes the test user purchase
an offering with a health assessment. My feature specifically excludes users
with health assessments. I'll add another purchase. Nevermind—that creates a new
order, and the users of this feature are only allowed to have one order. I guess
I'll modify the code for eng-bot. I clone the repo. Neat, I can run it locally.
Let's hack something together. I'll add a command-line argument to specify an
offering ID for the test user. Hm. That almost worked, but the system cancelled
the purchase and re-purchased a different offering. I'll check Slack. It's
because we've prescribed a sequence to the user several steps back, and if the
sequence is not on the offering we selected, that purchase gets cancelled and
replaced by a purchase for the correct offering. Right. New plan. Before we
prescribe the sequence, take the offering ID, retrieve the offering, find the
prescribable sequence on that offering, select that as the sequence. Damn it—the
graph schema for prescribers doesn't have a way to retrieve a single offering,
but I can retrieve a list of all offerings. I don't want to make a schema change
for this. I pull all offerings and loop through to find the one that matches.
It's ugly, but now I can find the prescribable sequence. Got it. Testing... it
works! Wait, this user is on weight maintenance. My feature specifically
excludes users on weight maintenance. Where the hell is weight maintenance
defined? Oh, medical record. Medical record gets this information from... the
sequence? The sequence tags. Right. Back to my changes. Filter sequences which
are tagged maintenance. Now that my code selects a specific sequence, I should
be able to remove the earlier code which purchases the offering from the command
line argument. Fuck! I actually needed that, now it's choosing whichever
offering fits that prescribed sequence... and it chose an offering with health
assessments again. I'll add the changes back. Now my changes are figuring out
the correct prescribed sequence, then having the test user purchase the correct
offering at a later step, so that they only have one order created and are not
on weight maintenance. Eureka! I finally have a test user. Why is my feature
still not working? The order's sole consignment is being fulfilled via Netsuite.
My feature specifically excludes users with consignments fulfilled via Netsuite.
I'm leaving for lunch.
