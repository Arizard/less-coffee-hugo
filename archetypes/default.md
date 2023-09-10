---
title: "{{ replace .Name "-" " " | title }}"
subtitle: "bottom text"
date: {{ .Date }}
author: {{ .Site.Params.defaultAuthor }}
draft: true
---

{{< figure src="image-example-500px.jpg" caption="example image" >}}

