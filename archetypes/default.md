---
title: "{{ replace .Name "-" " " | title }}"
subtitle: "bottom text"
hero: hero.jpg
date: {{ .Date }}
author: {{ .Site.Params.defaultAuthor }}
draft: true
---

{{< figure src="image-example-500px.jpg" caption="example image" >}}

<!-- tip: don't start the article with a heading -->
