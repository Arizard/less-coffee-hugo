---
title: "Arie Oldman"
date: 2020-12-22
draft: false
author: Arie Oldman
toc: false
---

<style>
h1 {
  text-align: center;
}

.contact-details a:after {
  display: none;
}

</style>

<span class="resume-cv">

<span id="contact-details">

* 🏡 Sydney, NSW
* 📧 arie.oldman@vhs7.tv
* 🌏 [Arizard on GitHub](https://github.com/Arizard)

</span>

<span class="has-text-centered">

A Sydney based software engineer who has 1.5 years of experience in a software engineering role
and 4 years of experience working in telecommunications.

</span>

&nbsp;

## Professional Experience

### <span>Deputy</span> <span>Sep 2019 to present</span> {#deputy}

Software Engineer (Implementations) within Customer Experience (CX).

Provide professional services to Deputy enterprise customers. Custom engineering 
work within the Deputy application, bug fixes, and response to support 
incidents.

* Design and build the _Bunnings - Bank Of Hours_ and _Bunnings - Public Holiday Not Worked_ Deputy implementation.
* Improved account security and implementation testability with the _Environment Variables Custom App_.
* Improved developer productivity by developing the [Precaf](#precaf) command line tool.
* Developed Deputy integrations using _AWS Lambda_ and _Go_.
* Technical advisory, solution design and implementation engineer for Qantas GroundStar integration and Compass Australia Employee Sync.
* Elicit customer pain points and requirements for Compass Australia engineering support.

[Visit Deputy](https://deputy.com)

### <span>Spriggy</span> <span>Mar 2019 to Jul 2019</span> {#spriggy}

Junior platform developer working on the Spriggy Pocket Money microservices.

* Reduced technical debt and improved maintainability of the Spriggy platform by 
  designing modular and testable code based on the Clean Architecture model and 
  Domain Driven Design.
* Improved stability and uptime of the Spriggy platform by writing a Python 
  daemon which rate-limited the number of transactions processed per minute.
* Improved the end user experience for Spriggy users by fixing 5XX errors in the 
  Spriggy platform.

[Visit Spriggy](https://spriggy.com.au/)

### <span>Singtel Optus</span> <span>Jul 2015 to Mar 2019</span> {#optus}

Macquarie University Cadet Engineer. Completed two rotations per year in 
different teams within Optus Networks.

* Visualised network topology by building an interactive network telemetry web 
  application using Flask and React.
* Fast-tracked the mobile handset approval process by automating the extraction 
  of mobile handset information from device capability logs.
* Deployed Samsung J5 Pro mobile handset to Optus Business customers by 
  coordinating third-party hardware and software tests and performing basic test cases.
* Identified suburban areas with an increased rate of call drops by collecting 
  drive test data and visualising the distribution of mobile call dropouts using 
  R.

[Visit Optus](https://optus.com.au)

## Projects

### <span>Bunnings AU 2013 EBA Features</span> <span>Deputy, 2020 to present</span> {#bunnings}

Designed and implemented _Bunnings - Bank Of Hours_ features in the Bunnings
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
      
Designed and implemented _Bunnings - Public Holiday Not Worked_ features in
the Bunnings Australia account:
    
  * Engineer a solution to allow employees to receive conditional pay for 
    public holidays which they were not rostered.
  * Build HTTP endpoints to allow Bunnings to import historic work data (Work
    History) which drives the conditional Public Holiday Not Worked pay.
    
Ongoing professional services engineering work and support engineering work:
    
  * Compass Group Australia, Compass Group New Zealand (Hospitality)
  * NRMA Marine, NRMA Parks and Resorts (Hospitality)
  * Challenger (Cleaning)
  * Living My Way (Disability Support)
  * Sealink (Maritime Services)
  * Everlight Radiology (Tele-medicine)
  * Moët Hennessy Louis Vitton Hong Kong (Luxury Retail)

### <span>Precaf</span> <span>Deputy, 2020 to present</span> {#precaf}

* Created the Precaf developer tool using **Go**.
* Co-developed a new standard library for CX Engineering.
* Overcame many issues that exist in using Decaf as the main programming language for customer scripts (code reuse, standard library, manual deployment to instance, code readability, code review).
* Create documentation for Precaf and standard library.

[Read more about Precaf, Decaf and DeXML]({{< ref "projects/precaf.md" >}})

### <span>Less Coffee</span> <span>2020 to present</span>

* Created Less Coffee - a personal website built with Hugo to publish a resumé and occasional articles.
* Implemented an automatic deployment pipeline using GitHub Actions and AWS S3.
* Secured static website with HTTPS using AWS CloudFront and Route 53.

### <span>Tetra</span> <span>Deputy, 2019</span> {#tetra}

* Created a **Lambda** application to pre-process incoming CSV files using a series of transformations (e.g. slice rows, apply titlecase to column, merge two columns, omit a row depending on value)
* Overcame a drawback with Tesseract integration from external HR systems (e.g. _Frontier Chris21_). Incoming CSV files were incompatible with Tesseract until they were transformed using Tetra.
* Overcame an issue with the development agility of Tesseract by separating Tetra features into an independent service.

[Tetra on GitHub](https://github.com/Arizard/tetra)[^tetra-processor-private]

### <span>ScriptEngine 1 and 2</span> <span>2019 to present</span>

* Created an online platform for instructors to organise group fitness class plans (scripts) by following a specific format.
* Implemented the user interface using **React** with the `blueprintjs` component library, with Firebase as the authentication provider.
* Implemented the application middleware using **Go** and Cloud Firestore as the database provider.
* Rewrite from scratch using **TypeScript** in V2, adding improvements to appearance and drag-and-drop using `react-beautiful-dnd`.

### <span>Video Game Modding</span> <span>2016 to 2018</span> {#gmod}

Created and published Deathrun Neue, RedactedHub, bodyGroupr, PerkShop, doorSkin and doorHandle addons for Garry’s Mod. Written in Lua, available on GitHub and [GmodStore](https://www.gmodstore.com/teams/18/addons).

## Education

### <span>Bachelor of Engineering (Honours)</span> <span>2019, Major in Telecommunications Engineering</span> {#degree}


**Inline DDoS Detection for SMB**

Protected a simulated network against denial of service attacks by writing an SDN controller middleware with Python to integrate Openflow and the Bro Intrusion Detection System.

<!--
[^tesseract]: Tesseract is a suite of automated Lambda services which enable Deputy integration with external HR systems using a CSV file. Tesseract is used when performance with Decaf becomes an issue due to a large number of rows in the CSV.
[^decaf]: Decaf is a programming language which resembles CoffeeScript. It is used inside a Deputy instance to provide scripting functionality. Internally, it is transpiled into DeXML and then interpreted using PHP.
[^precaf]: Precaf is a Decaf developer tool which renders a code template and then deploys the code to a Deputy instance.
[^tetra-processor-private]: The Lambda service, _Tetra Processor_ is a private repository.
[^example-awards-nsw]: See the following for an example of the industry and occupation awards listed by Fair Work NSW: https://www.fairwork.gov.au/awards-and-agreements/awards/list-of-awards
[^boh]: The Bank Of Hours is a process used within Bunnings which aims to provide flexible working arrangements to staff while maintaining a required number of contract hours per year. Staff can enter "debt" or "surplus" for their Bank Of Hours balance, which is then either paid to the employee at the end of the Bank Of Hours year (as overtime) or deducted from the employee's pay.
[^phnw]: Certain staff members at Bunnings are eligible to be paid for public holidays where they are not rostered on.
[^evca]: The Environment Variables Custom App provides a means of accessing account-scoped variables within Decaf/DeXML scripts. The values of these variables can be configured through the Environment Variables Custom App. This allows non-technical staff at Deputy to configure the account in ways they could not before.
[^bunnings]: The Bunnings account is a Deputy Enterprise account with over 50,000 active users.
-->
</span>
