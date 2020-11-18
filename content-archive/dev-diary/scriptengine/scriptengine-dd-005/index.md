---
title: "ScriptEngine Developer Diary #005"
description: "Designing the Document Browser"
date: 2020-08-31T16:59:39+10:00
author: "Arie Oldman"
type: "post"
tags:
- Software Engineering
draft: false
hero_image: ""
hero_image_attribution: "#"
hero_image_attribution_text: Image of Object by Photographer
---

## The Document Browser

This is a Vue component which will be rendered at the route `/editor`. It is
to list all the documents available to the current user.

Each document is shown as a row in a list. Clicking the document once makes it _selected_.

A _selected_ document displays two buttons: Open (primary) and "..." (ellipsis/more/secondary).

_Open_ takes the user to `/editor/:id`. _..._ takes opens a menu where the user can:
 * duplicate the document
 * delete the document
 
Documents are sorted by title in alphabetical order. The title is stored in the `title` property
of the document object.

## Validating the Concept of ScriptEngine

Starting to think about ways I could validate the demand for this project. Tempted to
do something along the lines of this (based on a reddit post I read - I forgot where).

1. Take a screenshot of a beautifully laid out, readable, coherent script inside ScriptEngine
2. Post screenshot to related communities (facebook group) with caption:
> I built an app for desktop and mobile to make it easier to script for classes. Who would be interested in using something like this?
3. Gather feedback/demand insights??? _how does this even work_

I think this has room for improvement - I think with some iteration I could come up with something really
engaging which gets people interacting with the post.
