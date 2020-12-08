---
title: "Arie Oldman - CV"
subtitle: ""
date: 2020-12-08T13:48:21+11:00
author: "Arie Oldman"
type: "post"
toc: true
---

{{< callout info >}}

This page is a complete professional history. For a condensed version, visit
[Resumé](/resume).

{{< /callout >}}
<br/>

## Professional Experience

{{< annotatedH3 Deputy "Ultimo, September 2019 to present" >}}

{{< resumeTagGroup "CoffeeScript (Decaf)" Go AWS Vue "Solutions Design" >}}

Software Engineer (Implementations) within Customer Experience (CX).

In Deputy CX, I provided professional services to Deputy enterprise customers.
This was in the form of custom engineering work within the Deputy
application, bug fixes, and response to support incidents.

* Designed and built the _Bunnings[^bunnings] - Bank Of Hours_[^boh] Deputy implementation.
* Designed and built the _Bunnings - Public Holiday Not Worked_[^phnw] Deputy implementation.
* Improved team productivity by developing [Precaf](#precaf)[^precaf].
* Improved security and testability with the _Environment Variables Custom App_[^evca] Deputy implementation.
* Developed Deputy integrations for _AAP_ and _NRMA Marine_ using _AWS Lambda_ and _AWS API Gateway_.
* Conducted stakeholder, solution design and engineering requirements meetings.

[Visit Deputy](https://deputy.com)

{{< annotatedH3 Spriggy "Sydney CBD, March 2019 to July 2019" >}}
{{< resumeTagGroup Python "PostgreSQL" "Financial Software Infrastructure" >}}

Junior platform developer working on the Spriggy Pocket Money microservices.

* Reduced technical debt and improved maintainability of the Spriggy platform by designing modular and testable code based on the Clean Architecture model and Domain Driven Design.
* Improved stability and uptime of the Spriggy platform by writing a Python daemon which rate-limited the number of transactions processed per minute.
* Improved the end user experience for Spriggy users by fixing 5XX errors in the Spriggy platform.

[Visit Spriggy](https://spriggy.com.au/)

{{< annotatedH3 "Singtel Optus" "Macquarie Park, July 2015 to March 2019" >}}
{{< resumeTagGroup "Computer Networks" "Mobile Networks" "Python" >}}

Macquarie University Cadet Engineer. Completed two rotations per year in different teams within Optus Networks.

* Visualised network topology by building an interactive network telemetry web application using Flask and React.
* Fast-tracked the mobile handset approval process by automating the extraction of mobile handset information from device capability logs.
* Deployed Samsung J5 Pro mobile handset to Optus Business customers by coordinating third-party hardware and software tests and performing basic test cases.
* Identified suburban areas with an increased rate of call drops by collecting drive test data and visualising the distribution of mobile call dropouts using R.

[Visit Optus](https://optus.com.au)


## Projects

{{< annotatedH3 "Bunnings AU 2013 EBA Features" "Deputy, 2020 to present" >}}
{{< resumeTagGroup "Deputy" "CoffeeScript (Decaf)" >}}

* Designed and implemented _Bunnings - Bank Of Hours_ features in the Bunnings
  Australia account:
    * Engineer a solution to keep a ledger recording the difference between 
      worked and contracted hours per employee per 52-week period.
    * Design award interpretation for _Bank Of Hours_. Ensure employees are paid
      correctly based on the discrepancy between worked and contracted hours 
      (a.k.a Overtime)
    * Build graphical interfaces in **Vue** to manage, report, export, and view 
      _Bank Of Hours_ information.
    * Build HTTP endpoints to allow Bunnings to import historic _Bank Of Hours_ 
      data.
* Designed and implemented _Bunnings - Public Holiday Not Worked_ features in
  the Bunnings Australia account:
    * Engineer a solution to allow employees to receive conditional pay for 
      public holidays which they were not rostered.
    * Build HTTP endpoints to allow Bunnings to import historic work data (Work
      History) which drives the conditional Public Holiday Not Worked pay.
* Ongoing professional services engineering work and support engineering work:
    * Compass Group Australia, Compass Group New Zealand (Hospitality)
    * NRMA Marine, NRMA Parks and Resorts (Hospitality)
    * Challenger (Cleaning)
    * Living My Way (Disability Support)
    * Sealink (Maritime Services)
    * Everlight Radiology (Tele-medicine)
    * Moët Hennessy Louis Vitton Hong Kong (Luxury Retail)

{{< annotatedH3 "Precaf" "Deputy, 2020 to present" >}}
{{< resumeTagGroup "Go" "CoffeeScript (Decaf)" "Hackathon" >}}

* Created the Precaf[^precaf] developer tool using **Go**.
* Co-developed a new standard library for CX Engineering.
* Overcame many issues that exist in using Decaf[^decaf] as the main programming language for customer scripts (code reuse, standard library, manual deployment to instance, code readability, code review).
* Create documentation for Precaf and standard library.

[Read more about Precaf, Decaf and DeXML]({{< ref "projects/precaf.md" >}})

{{< annotatedH3 "Less Coffee" "2020 to present" >}}
{{< resumeTagGroup "Hugo" "AWS" "Web" >}}

* Created Less Coffee - a personal website built with Hugo to publish a resumé and occasional articles.
* Implemented an automatic deployment pipeline using GitHub Actions and AWS S3.
* Secured static website with HTTPS using AWS CloudFront and Route 53.

{{< annotatedH3 "Tetra" "Deputy, 2019" >}}
{{< resumeTagGroup "Go" "AWS Lambda" "Integration" >}}

* Created a **Lambda** application to pre-process incoming CSV files using a series of transformations (e.g. slice rows, apply titlecase to column, merge two columns, omit a row depending on value)
* Overcame a drawback with Tesseract[^tesseract] integration from external HR systems (e.g. _Frontier Chris21_). Incoming CSV files were incompatible with Tesseract until they were transformed using Tetra.
* Overcame an issue with the development agility of Tesseract by separating Tetra features into an independent service.

[Tetra on GitHub](https://github.com/Arizard/tetra)[^tetra-processor-private]

{{< annotatedH3 "ScriptEngine 1 and 2" "2019 to present" >}}
{{< resumeTagGroup "JavaScript" "React" "TypeScript" >}}

* Created an online platform for instructors to organise group fitness class plans (scripts) by following a specific format.
* Implemented the user interface using **React** with the `blueprintjs` component library, with Firebase as the authentication provider.
* Implemented the application middleware using **Go** and Cloud Firestore as the database provider.
* Rewrite from scratch using **TypeScript** in V2, adding improvements to appearance and drag-and-drop using `react-beautiful-dnd`.

{{< annotatedH3 "Video Game Modding" "2016 to 2018" >}}
{{< resumeTagGroup "Lua" "Garry's Mod" "Video Games" >}}

* Created and published Deathrun Neue, RedactedHub, bodyGroupr, PerkShop, doorSkin and doorHandle addons for Garry’s Mod. Written in Lua, available on GitHub and [GmodStore](https://www.gmodstore.com/teams/18/addons).

---
