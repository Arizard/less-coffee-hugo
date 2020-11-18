---
title: "ScriptEngine Developer Diary #003"
description: "Starting a new Vue project."
date: 2020-08-28T17:47:25+10:00
author: "Arie Oldman"
type: "post"
tags:
- Software Engineering
draft: false
hero_image: "Screen Shot 2020-08-28 at 7.00.58 pm.png"
hero_image_attribution: "#"
hero_image_attribution_text: ""
---

## Technical Decisions

### Using Vue

I decided to use Vue for these reasons:
 * We use it at Deputy.
 * It's a bit faster (performance) than React.
 * It holds my hand a bit more, and it's easier to separate concerns. This means I can
 focus on actually implementing features.
 * It appears to play well with non-framework libraries like editorjs.
 * I find it simpler than React.
 * The reactive data binding is awesome, and so is the templating.
 
### Boilerplate: TailwindCSS

I picked this because it has a lot of features, but I haven't committed to this decision yet.
Can always change this down the track.

### Storybook

It is necessary to have a "sandbox" of sorts to test and debug components, so I've
chosen storybookjs for popularity and support.

#### Usage with Vue

You need to modify `.storybook/main.js` to get imports working with Vue. By default, the `@` directive
does not resolve properly. See snippet below for a fix:

{{< highlight javascript >}}
const path = require('path');

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  // Add this snippet to get the @ directive working for imports
  webpackFinal: async (config, {configType}) => {
    config.resolve.alias = {
      'vue$': 'vue/dist/vue.esm.js',
      '@': path.resolve(__dirname, '../src'),
    };

    return config;
  }
};
{{< /highlight >}}

### EditorJS

The core editor will be built atop EditorJS - it's a flexible, block-based text editor library.
It has great docs and does not rely on any external framework.

## Progress

I'm working in Storybook and building out the core editor. I've got the outcomes block so far.

* Added outcomes block
* Added placeholders
* Added a louder/softer toggle for each outcome block

{{< articleImage "Screen Shot 2020-08-28 at 10.06.40 pm.png" >}}

### Next Steps

* Editor needs to accept an `onSave` callback which receives the `data` object as the first argument.
* Then, the editor can auto-save ~1sec after any changes and call `onSave`.
* Build some common UI components using tailwindcss styles.

