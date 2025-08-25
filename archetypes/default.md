---
title: "{{ replace .Name "-" " " | title }}"
subtitle: "bottom text"
description: "{{ .Site.Params.defaultAuthor }} writes about [topic]. [Brief description of the post content and key takeaways]."
keywords: ["{{ .Site.Params.defaultAuthor }}", "keyword1", "keyword2", "keyword3"]
hero: hero.jpg
date: {{ .Date }}
author: {{ .Site.Params.defaultAuthor }}
draft: true
---

{{< figure src="image-example-500px.jpg" caption="example image" >}}

<!-- tip: don't start the article with a heading -->
