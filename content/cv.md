---
title: "Arie Oldman - CV"
draft: false
author: Arie Oldman
toc: false
---

<style>

h3 {
  display: flex;
  justify-content: space-between;
}

</style>

<span class="resume-cv">

<span id="contact-details">

<strong>Contact</strong>

* 🏡 Sydney, NSW
* 📧 arie.oldman@vhs7.tv
* 🌏 [Arizard on GitHub](https://github.com/Arizard)

</span>

<span class="has-text-centered">

A Sydney-based software engineer experienced in discovery, design and
implementation of service oriented architecture projects.

</span>

## Professional Experience

### <span>Software Engineer - Implementations at Deputy</span> <span>Sep 2019 -- present</span> {#deputy}

Provide professional services to Deputy enterprise customers. Custom engineering 
work within the Deputy application, bug fixes, and response to support 
incidents.

* Design and build the _Bunnings - Bank Of Hours_ and _Bunnings - Public Holiday Not Worked_ Deputy implementation.
* Improved account security and implementation testability with the _Environment Variables Custom App_.
* Improved developer productivity by developing the [Precaf](#precaf) command line tool.
* Developed Deputy integrations using _AWS Lambda_ and _Go_ (refer to Projects section).
* Technical advisory, solution design and implementation engineer for Qantas GroundStar integration and Compass Australia Employee Sync.
* Elicit requirements and customer pain points for Compass Australia engineering support.
* Implemented solutions with vanilla JS, Vue or Go, often hosted in AWS.

[Visit Deputy](https://deputy.com)

### <span>Junior Platform Developer at Spriggy</span> <span>Mar 2019 -- Jul 2019</span> {#spriggy}

* Reduced technical debt and improved maintainability of the Spriggy platform by 
  designing modular and testable code based on the Clean Architecture model and 
  Domain Driven Design.
* Improved stability and uptime of the Spriggy platform by writing a Python 
  daemon which rate-limited the number of transactions processed per minute.
* Improved the end user experience for Spriggy users by fixing 5XX errors in the 
  Spriggy platform.
* Implemented platform features in Python.

[Visit Spriggy](https://spriggy.com.au/)

### <span>Macquarie University Cadet Engineer at Singtel Optus</span> <span>Jul 2015 -- Mar 2019</span> {#optus}

Completed two rotations per year in 
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

### <span>Deputy Export Aggregator</span> <span>Deputy, 2020 -- 2021</span>

A service which periodically collects data from one or more Deputy 
instances and then collates and combines the data into a single file. The file 
is submitted via SFTP to a configurable destination server.

Original use case is aggregating schedule data across multiple Qantas accounts,
then submitting the file to Qantas via SFTP to be consumed by GroundStar 
RealTime.

Considerations made to account for future extension and re-use with other
accounts.

Created with Go, AWS Lambda and AWS CloudWatch.

### <span>Deputy Environment Variables Custom App</span> <span>Deputy, 2020</span>

A Deputy custom app to provide a configuration GUI for account-scoped variables 
used within Decaf/DeXML scripts.

A repeated anti-pattern within the CX team is the practice of including
account-specific configuration in scripts. This project provides a standard
approach to avoiding this anti-pattern.

Solution consultants can change configuration variables as frequently as the
customer's requirements change.

Created with Vue and Decaf.

### <span>Bunnings AU 2013 EBA</span> <span>Deputy, 2020</span> {#bunnings}

Designed and implemented _Bunnings - Bank Of Hours_ features in the Bunnings
Australia account.

* Engineer a solution to keep a ledger recording the difference between 
  worked and contracted hours per employee per 52-week period.
* Design award interpretation for _Bank Of Hours_. Ensure employees are paid
  correctly based on the discrepancy between worked and contracted hours 
  (a.k.a Overtime)
* Build graphical interfaces in Vue to manage, report, export, and view 
  _Bank Of Hours_ information.
* Build HTTP endpoints to allow Bunnings to import historic _Bank Of Hours_ 
  data.

Designed and implemented _Bunnings - Public Holiday Not Worked_ features in
the Bunnings Australia account:

* Engineer a solution to allow employees to receive conditional pay for 
  public holidays which they were not rostered.
* Build HTTP endpoints to allow Bunnings to import historic work data (Work
  istory) which drives the conditional Public Holiday Not Worked pay.

### <span>Precaf</span> <span>Deputy, 2020</span> {#precaf}

Precaf is a command line tool to automate bundling and deployment of Decaf
scripts. 

As part of this project, a library of common functions was co-developed for
the team to use (similar to a Standard Library).

Created with Go.

### <span>Less Coffee</span> <span>2020 -- present</span>

Less Coffee is a personal website used to publish a web resumé and a project
portfolio. It is a static site hosted on S3, served over HTTPS using CloudFront.
It is deployed automatically via a GitHub Action which executes on any commit
to the master git branch.

### <span>Tetra</span> <span>Deputy, 2019</span> {#tetra}

Tetra is a service to pre-process incoming CSV files using a sequence of
standard transformations, such as slice rows, apply title case, convert date 
format, or merge two columns.

### <span>ScriptEngine 1 and 2</span> <span>2019</span>

An online platform for instructors to organise group fitness class 
plans (scripts) by following a specific format.

* Implemented the user interface using React with the blueprintjs component 
  library, with Firebase as the authentication provider.
* Implemented the application middleware using Go and Cloud Firestore as the 
  database provider.
* Rewrite from scratch using TypeScript in V2, adding improvements to appearance 
  and drag-and-drop using react-beautiful-dnd.

### <span>Video Game Modding</span> <span>2016 -- 2018</span> {#gmod}

Created and published Deathrun Neue, RedactedHub, bodyGroupr, PerkShop, doorSkin 
and doorHandle addons for Garry’s Mod. Written in Lua, available on GitHub and 
[GmodStore](https://www.gmodstore.com/teams/18/addons).

## Education

### <span>Bachelor of Engineering (Honours) in Telecommunications Engineering</span> <span>2015 -- 2018</span> {#degree}

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
