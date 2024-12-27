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

## Business owners are time-poor

The primary goal of this project was to encourage buy-in to Deputy's _Hire_ product by automating the content creation for a business' careers page, thereby creating a more compelling value proposition for _Hire_. We believed that if we could decrease the work involved when adding information to the careers page, that users would be more likely to begin using _Hire_, and more likely to continue using _Hire_ -- improving signups and reducing churn.

{{< figure src="03.jpg" caption="The default careers page only contains generic information and generic images. What if we could auto-fill this content?" >}}
{{< figure src="05.jpg" caption="It takes users an average of 23 days to begin editing their careers page, and only 8% of users actually edit it at all!" >}}

> When we think about the user journey: First the user has to be a Deputy HR subscriber (or trial) to even access the careers page. Once they become a subscriber, the user has to perform the time-consuming task of creating some copy and finding some images which are appropriate for the business.
>
> -- Natasha, Product Manager (paraphrased)

## A rough idea begins to form...

We want to demonstrate the value of the _Hire_ product even if the user is not subscribed. We'll call the user "prospect" since we aim to drive conversion.

To do this, we came up with the idea that the prospect could provide some information about their business (industry, number of employees, location, name) and our system could generate their careers page instantly. However, that would require collecting information via a form, which introduces additional friction. We were concerned that this could potentially impact conversion.

Next we brainstormed other ways to acquire enough information on the prospect's business.

We considered finding this information via search engines, but we realised we can't ensure that the correct business was selected -- many businesses may share a single name, especially franchised businesses. This also can't be applied to new prospects, since we would still be asking for business name.

It was becoming clear that we need to ask the prospect for _something_, but we had to minimise the amount of information collected in order to minimise friction.

Finally we came up with the idea that we would simply ask for the business website. We decided that we would limit our target market to prospects that already have a website for their business[^target-market-no-data].

[^target-market-no-data]: We don't have any data to quantify that. We are just crossing our fingers.

The desired journey looked like this:

1. Prospect can access the "careers page generator" via the public-facing `deputy.com` website.
2. Prospect submits their business website URL into the generator.
3. We display their custom careers page (via iframe) with a call-to-action encouraging signing up.

## Is generative AI a good fit?

While generative AI is powerful and is advancing at a breakneck pace, I still believe it should not be trusted to make decisions where a lot is at stake. Therefore, good use cases for generative AI will save a human time by making them more productive, instead of completely replacing a person.

In my opinion, our use case is a good fit: it doesn't require 100% correctness, it will always have human oversight, and the end goal is not to replace a person, but rather to show the prospect the potential value they could unlock from our _Hire_ product.

Also, as you will read about below, it will automate a _mundane_ task which would have been difficult to achieve without a language model.

**Any new technology (Gen AI, Blockchain, etc.) is only worth using if you can't achieve the same outcome without it.**

## Retrieval-Augmented Generation (RAG) and why we don't use it

[Retrieval-Augmented Generation](https://aws.amazon.com/what-is/retrieval-augmented-generation/) is an optimisation for Large Language Models which improves accuracy of the output for particular domains without re-training the model. One example might be a chatbot support agent which can reference articles from its company's knowledge base.

For our project we considered using Amazon Bedrock's [Knowledge Bases](https://aws.amazon.com/bedrock/knowledge-bases/), which is a managed solution that provides out-of-the-box web crawling. However, when we experimented with this, we discovered that web crawling takes a long time. For large websites it would recursively scrape all the pages on the website by following any hyperlinks it could find. This could take hours, and we would have to do it for every prospect's website that uses the service.

With this outcome, we revised our approach. After some discussion and experimentation with the language models available in Bedrock, we determined that we can actually generate enough content for a compelling careers page by scraping a single home page or about page of the prospect's website. Thanks to this breakthrough, we revised the implementation to provide the source code of the webpage in the prompt sent to the language model.

## Building the proof-of-concept

### Which foundation model to use?

Amazon Bedrock offers a multitude of foundation models for our purposes, however after some experimentation, the best results (fewest mistakes) were achieved with _Anthropic Claude 3.5 Sonnet_. It was able to respond correctly to our prompts pretty much every time, and never had an issue generating responses in JSON format.

We would prompt Claude using Amazon Bedrock Runtime via API.

{{< figure src="claude-3-5-sonnet.png" caption="(Courtesy of Anthropic)" >}}

### How do we work around the prompt latency?

We started with the API contracts. We would have an asynchronous execution approach -- we expected that the scraping and prompting would be slower than instantaneous. We identified two endpoints to build:
1. `POST /begin`: user can submit the scrape URL, and this results in a "job" being created. It would return the job ID.
2. `GET /poll?id={job-id}`: the client can call this endpoint to check the status of the job: `PENDING`, `DONE`, or `FAILED`. When the job is `DONE`, there will be additional information attached to the response: the content to render the careers page with.

For the actual careers page, we would make some slight modifications to the existing public careers page frontend and deploy this to a dummy instance (a fake business). These modifications allow the careers page to retrieve the content needed from the `/poll` endpoint, instead of reading from the tenant database.

Finally, on the `deputy.com` website, we would display a page allowing the submission of the scrape URL. This page would then poll at regular intervals until the job had completed, then display the careers page from the dummy instance within an iframe.

### How can we handle dynamic and static websites?

The simple answer was to use a headless Chromium browser to execute the javascript required for dynamic webpages. We achieved this using Puppeteer. However, this increased the memory and CPU usage of the Lambda, and added an extra 10s to the crawling time.

### The fastest time-to-market

We used Lambda as the compute, because it allows fast iteration and offers out-of-the-box _Function URLs_. For storage, we used S3 because of simplicity; we only need to read and write one known object at a time. S3 also allows us to set up an a trigger upon object creation, which starts the Lambda's prompting stage.

Where possible, we used existing Deputy architecture. Whichever approach would take the least time to achieve our goals, we would choose -- resulting in us building the Lambda-side from scratch while re-using the Deputy website and the dummy instance.

{{< figure src="poc-gen-ai-careers.jpg" caption="Architecture diagram for the proof-of-concept" >}}

## What we learned

We learned a lot, but the main 3 takeaways are:

1. **Anthropic Claude 3.5 Sonnet** produces impressive results, remarkably quickly:
    * It can extract information from complex varied data, such as webpage source HTML
    * It can create valid JSON objects, even with complex nested structures.
    * Prompting in plain english allows incredibly fast prototyping.
2. **Efficient Data Retrieval**: Direct HTML fetching is faster than web crawling for knowledge base updates.
3. **Puppeteer** enables effective scraping of dynamic, client-side rendered websites. E.g. Merivale's site.

## Outcome

By the 4th day, we had a working system - albeit without any security, rate limiting, or ability to scale (it was a prototype after all). It took around 30 seconds to generate a personalised careers page.

{{< figure src="submit-form.png" caption="From this page, the prospect submits their website URL.">}}
{{< figure src="result-page.png" caption="After a short wait, we show them the personalised careers page.">}}

### Sample careers pages

The following screenshots show careers pages that were generated entirely from the business' website.

{{< figure src="merivale.png" caption="Merivale's auto-generated careers page." >}}
{{< figure src="trafalgar-st-espresso.png" caption="Trafalgar Street Espresso's auto-generated careers page." >}}

## Acknowledgements

I am grateful for my hackathon team at Deputy:

* **Natasha** and **Paula** for their product- and customer-conscious input, data collection, and for the visual cohesion of the final presentation (which is featured in the slides of this article).
* **Yooshin** and **Toby** for their teamwork and collaboration on the engineering side, thanks to them we could bring it all together.

## Appendix
### Lambda source code

[View the gist here](https://gist.github.com/Arizard/f245949f576952412a6dc5324139a397)