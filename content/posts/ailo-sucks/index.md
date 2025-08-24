---
title: "Ailo: didn't ask, don't want, don't need."
subtitle: "Property agents and UI dark patterns, together at last."
description: "Arie Oldman analyzes Ailo property management software, exposing dark patterns and questionable business practices affecting Australian renters and property managers."
keywords: ["Arie Oldman", "Ailo", "property management", "dark patterns", "SaaS", "rental software", "Australia", "user experience", "product critique"]
date: 2023-09-10T10:05:40+10:00
author: Arie Oldman
draft: false
hero: hero.png
featured: false
---

A few weeks ago, my partner and I (renters) were ushered onto our property manager's new property management software [Ailo](https://www.smh.com.au/national/nsw/tenants-feel-forced-onto-fee-charging-rent-payment-apps-20230707-p5dmi8.html). I was optimistic at first (it aims to make communication with property managers easier) but I would soon learn of the dark patterns and nepotism that propelled Ailo to where it is today.

Because I too work for a SaaS company (and I know someone who left for a role at Ailo) I figured I would perform my due dilligence and find out who really benefits from this product.

## Ailo is for you!

No, not really.

You may have to take deep breaths to help with the nausea caused by the sickening corporate doublespeak on the website:

> AILO IS FOR ME

> Ailo is the app for renters who want their house to feel like a home, and not just like someone’s investment

Can you believe they really said that?

### Who is it really for?

While Ailo markets themselves as "a payments and communications platform", dig a little bit deeper into Ben White's (ex-Ray White director, CEO Ailo) [LinkedIn profile](https://au.linkedin.com/in/benbwhite) and you will notice that he has described Ailo _slightly_ more accurately:

> Ailo is a world-first **risk prediction software** and **customer intimacy platform** designed for the property management industry.

Ray White, formerly affiliated with director Ben White, now forcing tenants onto founder Ben White's platform? _Nothing fishy here_.

Based on the [Ailo website](https://ailo.io/), there are three overarching user personas, each with a value proposition.

1. Property Investor
    - See upcoming cash flow (rent, repairs, expenses)
    - Receive rent payment sooner (marketed as "pay off your mortgage sooner")
    - "Threads" for conversations with property managers (real time chat)
2. Tenant
    - Pay with automated direct debit, debit card or credit card (you pay for the privilege!)
    - Rent and bill notifications (thanks, because I didn't realise I was meant to pay rent every week)
    - Real time chat with property manager
3. Property Manager
    - **Offer higher quality of service to "customers" (property investors). Win the deal, lock in listings, drive growth.**
    - **Data insights on your team's performance.**
    - **Reduce dependency on your trust account (financial term) so you can focus on customer relationships.**

Wait a minute. That sounds like a [Customer Relationship Management](https://en.wikipedia.org/wiki/Customer_relationship_management) system! Remember, the customer is the property investor. The [demo risk report](https://s3-ap-southeast-2.amazonaws.com/ailo-assets/pdfs/demo+protect+report.pdf) seems to support this theory -- Ailo is used primarily to manage investor relationships.

{{< figure src="demo-risk-report.png" class="portrait" caption="Screenshot from the demo risk report" >}}

## UX Dark Patterns that cost renters money

I have a personal gripe related to this topic.

{{< figure src="ailo-service-fee.png" class="portrait" caption="This is a payment being made using saved bank details" >}}

**Ailo will charge you a service fee to store your banking details**. By law, property agencies must provide tenants one fee-free way to pay rent. However the law does not prevent agencies from making it require a great deal of effort. Ailo will charge you a service fee for payments made using saved bank details, **but you can avoid the service fee by making one-off payments and typing your bank details each week**. This is how they have squirmed around the law.

Add this to the long list of scumbag tactics employed by many property management agencies (not just Ray White).

Many users have left reviews regarding this on the app store, and Ailo has conveniently ignored that specific part of their review. Hold on to the contents of your stomach.

{{< figure src="reviews.jpg" caption="reviews from the app store." >}}

Just a reminder that "customer intimacy" is not referring to you, the tenant.

## Closing thoughts

Can you tell I really don't like Ailo? This is one SaaS company I will refuse any employment offers from (along with AWS and Nine Entertainment, but that's another rabbit hole). Not that I'll be applying to open roles any time soon. I wonder if my former coworker looked into this as much as I did.

A SaaS company needs engineers, so I hope that I can make that one fewer engineer available. I would clean toilets before I worked for this company.

Have a good week!

* [Tenant's Union (NSW)](https://www.tenants.org.au/)
* [Tenants Queensland](https://tenantsqld.org.au/)
* [Tenants Victoria](https://tenantsvic.org.au/)
