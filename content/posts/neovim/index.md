---
title: "Switching from JetBrains to Neovim"
date: 2022-02-17T17:23:04+11:00
draft: true
---

```
Q: How can you spot someone who uses vim?
A: Don't worry, they will tell you.
```

Late last year, I made a commitment to move as much of my dev environment to the terminal as possible.
For a long time, I had fumbled my way around `git` and `brew`, but I resolved to face my fears and become a _bona fide keyboard cowboy_ 🤠.
This is my experience switching from GUI to terminal.

## I need to code fast, but GUI is too slow

<!-- speed of text manipulation -->
Neovim is not an IDE -- it is only a text editor, based on the [Vim](https://en.wikipedia.org/wiki/Vim_(text_editor)) text editor originally created by Bram Moolenaar (which was in turn based on [Vi](https://en.wikipedia.org/wiki/Vi) created by Bill Joy).
Neovim and Vim share many of the same features.

With a graphical IDE, you point and click, maybe you select some text. You can even use a few keyboard shortcuts. In Neovim, every interaction is done using the keyboard.

Neovim uses _modes_: keystrokes have a different effect on the editor depending on the current mode. For example, in `INSERT` mode, the user can type freely, and the text is displayed on the screen.

The default mode is `NORMAL`. In this mode, the user can perform _commands_ which are bound to keystrokes. Press `i` to enter `INSERT` mode again, or press `d` twice (`dd`) to **d**elete the current line.
Press `g` twice to move the cursor to the start of the file. Press `Shift + g` (`G`) to move the cursor to the last line of the file.
To move the cursor one line or character at a time, use the arrow keys or `j`, `k`, `l`, `i`.

Here is why believe Neovim, Vim and Vi are really useful: **commands are atomic, and can be chained together or executed in sequence.**

Say you have some code like the following:

```javascript
function sayHello(name) {
  console.log("Hello, " + name = "!");
}
```

To change the function name, `greet`, to something else such as `sayHello`:

1. In `NORMAL` mode, move the cursor to the `g` in `greet`
2. Press `c` for **c**hange, then `e` for **e**nd of word. This removes `greet` and switches to `INSERT` with the cursor just before `(`.
3. Type the new name, `sayHello`.
4. Press `Esc` to return to `NORMAL` mode.

<video width="100%" controls autoplay>
  <source src="neovim-sayHello.webm" type="video/webm" />
</video>

Perhaps this sounds like a lot stuff to learn, compared to point-and-click graphical IDEs. I disagree.

## Performance in a monolith codebase

## Think before you act

## Customisation

