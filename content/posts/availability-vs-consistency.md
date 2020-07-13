---
title: How are Availability and Consistency Related?
author: Arie Oldman
date: 2020-04-25T09:08:14.000+00:00
description: Explain how availability and consistency are related concepts in system
  design.
draft: true
hero_image: "https://camo.githubusercontent.com/13719354da7dcd34cd79ff5f8b6306a67bc18261/687474703a2f2f692e696d6775722e636f6d2f62674c4d4932752e706e67"
type: post
tags:
- Systems Design
---
Availability and consistency are fundamental concepts in systems design. This
article outlines how the two are related, with plain english examples.

## Availability

A system's availability (in abstract terms) is determined by what percentage of 
actions yield a result.

For example, consider a postal system you have designed that allows you to send a 
letter to The Prime Minister, and get a response. 

If you guarantee 100% availability of your system, The Prime Minister receives 
100% of the letters that are sent to him via your system and each sender
receives a reply.

What about when The Prime Minister is on holiday and you can't deliver letters?

The availability of your system is compromised, and you can no longer guarantee
that 100% of letters sent to The Prime Minister will be delivered.

## Consistency

A system's consistency depends on how "up to date" the results of actions are.

Imagine your postal system again. 

If the system has strong consistency then The Prime
Minister will read each letter in the order that they were sent. 

Consider this scenario: 

You think The Prime Minister would be interested in a yacht catalogue that you 
came across, so you put it in an envelope and send it off in to your system. 

Oh crap! You didn't actually provide any context for this
letter!

You send a follow-up letter providing the context: Do they think leather 
upholstery on a yacht is a good idea?

Unfortunately, the system unintentionally changes the order of the letters you
sent.

The Prime Minister receives your second letter - they respond, confused about
your question regarding yacht upholstery.

In this case, the system was inconsistent because The Prime Minister received
your letters in the wrong order, therefore the information he had was not up
to date and he was puzzled by your question.
