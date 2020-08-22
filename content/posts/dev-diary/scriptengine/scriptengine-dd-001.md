---
title: "ScriptEngine Developer Diary #001"
description: "The first entry in the ScriptEngine Developer Diary."
date: 2020-08-20T13:21:46+10:00
author: "Arie Oldman"
type: "post"
tags:
  - Software Engineering
draft: true
hero_image: ""
hero_image_attribution: ""
hero_image_attribution_text: ""
toc: true
---

## What Am I Building?

ScriptEngine is a web application for Les Mills instructors that simplifies
preparation of scripts for Les Mills classes. An MVP of this application has
existed for some time (since August 2019) and can be accessed at
[react.less.coffee](http://react.less.coffee).

### Existing Implementation

The MVP uses a React frontend (served static) and Firebase as a backend
(Authentication, Database), with a single Go service running on Google App
Engine, which exposes an API for simple CRUD operations.

### Alternatives and Competitors

ScriptEngine should provide a simplified workflow to create scripts for Les Mills
classes, based on _outcome based scripting_. A user could do something similar with
the following software:

* Microsoft Word, Google Docs, Note taking apps or another word processor
    * A user may not want to use a full-fledged word processor due to licensing 
    fees, heavy-weight of the software, and **difficulty of creating layouts**.
    Word processors are aimed at documents and print media, while the user
    experience when writing scripts is much better on a digital platform
    (adjustable width, infinite scroll, responsive layouts).
* Microsoft Excel, Google Sheets etc. may provide a better grid-based layout
    * Again, as above, the software may be heavyweight, and to paraphrase the above,
    this software is not specifically targeted towards the same use cases as ScriptEngine
    is. **User Stories coming soon!**
* Pen and Paper
    * Physical media has the drawback of being difficult to back up/distribute,
    **a fixed layout**, and mental/emotional overhead of manually scribbling the
    layout for each page.
    * ScriptEngine will empower Les Mills instructors using technology.

- Alternatives/Competitors
- High-level tech-spec
- High-level func-spec

## Why Build It?

- Learn more fullstack frameworks and tools
- Practice working on fullstack projects
  - Web
  - JavaScript
  - Authentication
  - Data Storage
  - UI/UX
- Provide value to other Les Mills instructors who are note-takers, like myself.
- Down the track, monetise and have passive income.
  - prefer not to have ads.
  - voluntary donations are an option that I like.
  - Freemium model with optional subscription.
  - Endorsement by les mills.
  - Let's build this in a flexible way so we can defer these decisions.

### Personal Objectives

### Project Objectives

1. Proficiency at building AWS Amplify applications by the end of the project.
2. Proficiency at using Figma to mock up front end designs by the end of the project.

## Why Keep A Diary?

- Make sure I justify technical decisions
- Provide self-evaluation and feedback on technical decision making
- Hold myself accountable
- Solidify the thread of thought throughout the project
- Have something to put on less.coffee
