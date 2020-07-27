---
title: "Pug Go Doro"
description: "Pomodoro, but in your terminal!"
date: 2020-07-11T00:04:42+10:00
draft: false
author: "Arie Oldman"
tags:
- Organisation
- Terminal
- Work From Home
tech:
- Go
type: project
hero_image: charles-deluvio-ieEv01cucy0-unsplash.jpg
hero_image_attribution_text: Photo by Charles Deluvio on Unsplash
hero_image_attribution: https://unsplash.com/wallpapers/cute/pug?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText
---

I started working from home halfway through March 2020 - our CEO released an email on a Friday, ordering us to work from home and to take with us any office supplies we needed to continue our work.

In the first week, it took me some time to adjust to the new BAU.

In the first month, I was tracking rather well with tickets and projects - it felt good!

3 months in is where things started getting prickly.

## Discovering Burnout

_Burnout_ is a term often used to describe being mentally and physically exhausted as a result of long periods of work or focus. It's a very broad term - a person who burns out might not even be doing something productive - burnout is a state of mind which manifests as frustration, irritability, apathy, and a low mood.

_Burnout_ is when you're doing too much at once, but not getting very far. Spinning the tyres, so to speak.

That's me. I was _burning out_.

After a a very brief Google search to find ways to avoid burnout, all results had one thing in common: **take short, frequent breaks**.

In the office, we have coworkers to pull us away from our desks. We can stand up and walk over to a coworker to have a conversation. At home, we are glued to our screens.

## Pomodoro

This is when I learned about the [Pomodoro Technique](https://en.wikipedia.org/wiki/Pomodoro_Technique) from [this YouTube video by Socratica](https://www.youtube.com/watch?v=TxdLBxNMbtw). To summarise: **Work for 25 minutes, then drop everything and take a 5 minute break. Repeat.**

Fast forward to June. Our CEO announced that the following Friday will be a "Mental Health Day" for all employees, and we can take the whole day off. I decided to experiment with some Go libraries and see if I could build a pomodoro app that runs in the terminal.

Pug Go Doro is the result: It's a pomodoro app which is rendered as a [text-based user interface](https://en.wikipedia.org/wiki/Text-based_user_interface) in the user's terminal. Why? My plan was to run it in the JetBrains IDE embedded terminal. Also, text-based user interfaces are cool and retro 😎. Why is it named after pugs? Why not! They are very cute dogs. I would know. I have two.

To create the interface, I used [gocui](https://github.com/jroimartin/gocui). To render the timer digits I used [go-figure](https://github.com/common-nighthawk/go-figure) and to push native notifications I used [notify](https://github.com/martinlindhe/notify).

{{< articleImage puggodoro.png >}}

[GitHub Repository](https://github.com/Arizard/pug-go-doro)


