---
title: ScriptEngine
date: 2019-08-08T12:15:55+10:00
tags:
- Deep Dive
- Scriptengine
- Project
- Go
- React
- JavaScript
- Les Mills
menu:
  main:
    parent: projects
type: project
hero_image: /uploads/ar_46-calorie-burn-960x540.jpg
hero_image_attribution: https://www.lesmills.com/
hero_image_attribution_text: "From Les Mills International"
---

<div style="display: none">
    A web application to help group fitness instructors deliver life-changing fitness experiences.
</div>

<img src="/uploads/scriptengine/2019-08-08-12-57.png" width="100%" />

# Motivation

The Les Mills AIM2 module introduces instructors to an assortment of new, useful coaching and scripting tools. 

With practice, these tools can help connect you to the people in front of you and deliver a life changing fitness experience.

One problem I faced when trying to implement these tools was the amount of paper I wasted scribbling down outcomes for each move or pose.

Typing these up in a document was an improvement, but still didn't help - I needed a digital tool which worked synergistically with the outcome-based scripting model from AIM2. 

The tool needed to store a considerable amount of information (**Track focus and objectives, D.I.S.C cues, Connection/Relevance cues, Layers 1-3, 5 Key Elements**), but have the ability to display it concisely and in a readable manner - useful when practicing and following the music.

I couldn't find something like this available online - at least not something which was tailored to Les Mills instructors and the Les Mills coaching and scripting models.

So I decided to build my own tool: [ScriptEngine](http://react.less.coffee), using a React frontend, Go backend, and Firebase for all the non-core functions such as authentication and data persistence.

# How to use ScriptEngine for immediate results

1.  Enter an email address and password (this is not stored as in Firebase and will never be shared).
2. Click *Sign Up*. It should transfer you to the **My Documents** page.
3. Click *New Document* to start a new script.
4. Click on a field to edit. Click on the pencil icon on the right to add, re-arrange or delete rows.
5. Follow the outcome-based scripting approach taught in AIM2. Each row is one move or pose:
   1. Counts: The number of counts the move goes for.
   2. Move Name: Name of the pose or move.
   3. Outcome: What should be achieved by your coaching during this move? (e.g. Correct Alignment, Safe Execution, Motivation)
   4. Relevant cues: What are you going to say to achieve the outcome? Typically you will need 1-2 cues.

6. Click the pencil on the right, and select *Insert heading after* for the next track when you're done!

## Bonus round: Track Focus and Objective

Sometimes you'll want to add a section to outline the track focus or the track objective. Follow these steps:

1. Click the pencil on the right of the track Heading.
2. Select *Insert paragraph after*.
3. Type your track focus, track objective or both in the text box. You can add multiple lines in the one text box.

# Ongoing Development

The project is very early in development, and is currently taking on as much feedback as possible. Right now, nothing is set in stone.

I'm interested in feedback from instructors of all experience levels. If you'd like to submit feedback you can reach me at *arie.oldman@mq.edu.au* or instagram DM *@arieoldman* . Let me know if you would or wouldn't use this, what kind of features you would like, or how you'd like it to be laid out.

# Planned Features

This is a list of planned features for ScriptEngine, which might be completed in no particular order:

* ~~As a user, I would like to know if my document successfuly saved or if there was an error.~~
* As a user, I would like to have an autocomplete or a suggestion helper for the Move Name, Move Outcome and Relevant Cues field to speed up the scripting process for new releases and reduce how often I have to repeat myself.
* As a user, I would like to toggle the visibility of each column in the script - for example, I may want to only display the *Move Name* and the *Relevant Cues* fields while practicing.
* As a user, I want to "tag" a row with D, I, S or C if the relevant cues are targeted towards a specific D.I.S.C profile. This is so I can evaluate which profiles I am teaching to the most and identify profiles which are being left out.
* As a user, I want to "compose" a new script using track from existing scripts, for the case where I am creating a script for a mix of old tracks. This saves re-typing the same information into a new document.
