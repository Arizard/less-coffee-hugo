---
title: "Personalised Careers Pages Made With Generative AI"
subtitle: "Our hackathon project, built with Anthropic Claude, powered by AWS."
date: 2024-12-26T10:29:16+11:00
author: Arie Oldman
draft: true
---

{{< figure src="01.jpg" caption="(Courtesy of Natasha)" >}}

In December 2024, myself and 4 other Deputies participated in the internal "AI Hackathon", where teams competed to find ways to innovate the Deputy product using AI.

Our project, _AI-Tract_, was developed to automate the process of setting up a business's careers page within Deputy's _Hire_ product.

In the following article, I'll cover the problem space we identified, our initial solution, and then how we iterated the idea to get to our final implementation in just 5 days.

<!-- key ideas: the decisions we made and _why_ we made them -->

<!-- * explain the problem space and how we narrowed it down. quantify the problem -->
<!-- * how did we decide to scrape a website instead of asking for information via form data -->
<!-- * why did we build with: lambda, s3, bedrock, javascript, puppeteer, vue. -->
<!-- * how did we arrive at the final implementation -->
<!--     * knowledge base vs DIY web-scrape -->

## Business Owners Are Time-Poor

The primary goal of this project was to encourage buy-in to Deputy's _Hire_ product by automating the content creation for a business' careers page, thereby creating a more compelling value proposition for _Hire_. We believed that if we could decrease the work involved when adding information to the careers page, that users would be more likely to begin using _Hire_, and more likely to continue using _Hire_ -- improving signups and reducing churn.

{{< figure src="03.jpg" caption="The default careers page only contains generic information and generic images. What if we could auto-fill this content?" >}}

> When we think about the user journey: First the user has to be a Deputy HR subscriber (or trial) to even access the careers page. Once they become a subscriber, the user has to perform the time-consuming task of creating some copy and finding some images which are appropriate for the business.
>
> -- Natasha, Product Manager (paraphrased)

## Auto-filling the Careers Page Content

### Text Generation Use Case

### Why We Didn't Use RAG

### Architecture

### source code examples

## Outcome

## Acknowledgements

I am grateful for my hackathon team at Deputy:

* **Natasha** and **Paula** for their product- and customer-conscious input, data collection, and for the visual cohesion of the final presentation (which is featured in the slides of this article).
* **Yooshin** and **Toby** for their teamwork and collaboration on the engineering side, thanks to them we could bring it all together.
