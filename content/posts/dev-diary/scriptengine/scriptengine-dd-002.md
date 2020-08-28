---
title: "ScriptEngine Developer Diary #002"
description: "Working with EditorJS"
date: 2020-08-26T20:11:39+10:00
author: "Arie Oldman"
type: "post"
tags:
  - Software Engineering
draft: false
hero_image: ""
hero_image_attribution: "#"
hero_image_attribution_text: ""
---

I came across a javascript library called [Editor.js](https://editorjs.io) - it's a block-based
text editor library which exposes a flexible API for creating your own custom inline blocks.

This is a promising candidate for the core editor of ScriptEngine. I followed the tutorial in the
Editor.js docs - pretty intuitive and simple so far. Concerns are very well separated
and I can focus on writing an aesthetically pleasing, functional, editable inline block.

The library is pretty lightweight too, it doesn't require a frontent framework,
so that's also a big performance plus.

Saving and loading is super simple. Saving returns a promise which resolves the contents of the editor.
Loading is done by passing a property `data` to the constructor.

See my quick demo here: [Editor.js Demo](/notes/editorjs)

## Next Steps

Experiment with writing an _outcomes block_:

| **Cell Name ->**     | Counts                                    | Move Name        | Outcome                       | Related Cues                     |
| -------------------- | ----------------------------------------- | ---------------- | ----------------------------- | -------------------------------- |
| **Cell Contents ->** | Num. counts the move or sequence goes for | Name of the move | Coaching outcome for the move | Coaching cues to achieve outcome |

## Update 27/08

Check the demo for an example of the Outcomes Block. What I really like about Editor.js
is the included support for Ctrl+C and Ctrl+V on custom blocks! Big win for UX.


