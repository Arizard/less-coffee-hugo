---
title: "Resumé"
date: 2020-05-12T08:18:56+0000
draft: false
menu:
  main:
    weight: 1
---
<div class="resume-contact">

* 👨‍💻 Arie Oldman
* 🏡 Sydney, NSW
* 📞 +61 432 934 970
* 📧 arie.oldman@vhs7.tv
* 🌏 [Arizard on GitHub](https://github.com/Arizard)

</div>

----
## Professional Experience

{{< annotatedH3 Deputy "Ultimo, September 2019 to present" >}}

{{< resumeTagGroup "CoffeeScript (Decaf)" Go AWS Vue "Solutions Design" >}}

Software Engineer (Implementations) within APAC Customer Experience.

- Designed and built the _Bunnings - Bank Of Hours_[^boh] Deputy implementation, a single account with over 50,000 users.
- Designed and built the _Bunnings - Public Holiday Not Worked_[^phnw] Deputy implementation.
- Improved team productivity by developing [Precaf](#precaf)[^precaf].
- Improved security and testability with the _Environment Variables Custom App_[^evca] Deputy implementation.
- Developed Deputy integrations for _AAP_ and _NRMA Marine_ using _AWS Lambda_ and _AWS API Gateway_.
- Conducted stakeholder, design and engineering requirements meetings.

[Visit Deputy](https://deputy.com)

{{< annotatedH3 Spriggy "Sydney CBD, March 2019 to July 2019" >}}
{{< resumeTagGroup Python "PostgreSQL" "Financial Software Infrastructure" >}}

Junior platform developer working on the Spriggy Pocket Money microservices.

-   Reduced technical debt and improved maintainability of the Spriggy platform by designing modular and testable code based on the Clean Architecture model and Domain Driven Design.
-   Improved stability and uptime of the Spriggy platform by writing a Python daemon which rate-limited the number of transactions processed per minute.
-   Improved the end user experience for Spriggy users by fixing 5XX errors in the Spriggy platform.

[Visit Spriggy](https://spriggy.com.au/)

{{< annotatedH3 "Singtel Optus" "Macquarie Park, July 2015 to March 2019" >}}
{{< resumeTagGroup "Computer Networks" "Mobile Networks" "Python" >}}

Macquarie University Cadet Engineer. Completed two rotations per year in different teams within Optus Networks.

-   Visualised network topology by building an interactive network telemetry web application using Flask and React.
-   Fast-tracked the mobile handset approval process by automating the extraction of mobile handset information from device capability logs.
-   Deployed Samsung J5 Pro mobile handset to Optus Business customers by coordinating third-party hardware and software tests and performing basic test cases.
-   Identified suburban areas with an increased rate of call drops by collecting drive test data and visualising the distribution of mobile call dropouts using R.

[Visit Optus](https://optus.com.au)

----
## Projects

{{< annotatedH3 "Precaf" "Deputy, 2020 to present" >}}
{{< resumeTagGroup "Go" "CoffeeScript (Decaf)" "Hackathon" >}}

- Created the Precaf[^precaf] developer tool using Go.
- Co-developed a new standard library of common procedures for CX Engineering.
- Overcame many issues that exist in using Decaf[^decaf] as the main programming language for customer scripts (code reuse, standard library of procedures, manual deployment to instance, code readability, code review).
- Create quick start guides and documentation for Precaf and standard procedures.

[Read more about Precaf, Decaf and DeXML]({{< ref "projects/precaf.md" >}})

{{< annotatedH3 "Less Coffee" "2020 to present" >}}
{{< resumeTagGroup "Hugo" "AWS" "Web" >}}

- Created Less Coffee - a personal website built with Hugo to publish a resumé and occasional articles.
- Implemented an automatic deployment pipeline using GitHub Actions and AWS S3.
- Secured static website with HTTPS using AWS CloudFront and Route 53.

{{< annotatedH3 "Tetra" "Deputy, 2019" >}}
{{< resumeTagGroup "Go" "AWS Lambda" "Integration" >}}

- Created a Lambda application to pre-process incoming CSV files using a series of transformations (e.g. slice rows, apply titlecase to column, merge two columns, omit a row depending on value)
- Overcame a drawback with Tesseract[^tesseract] integration from external HR systems (e.g. _Frontier Chris21_). Incoming CSV files were incompatible with Tesseract until they were transformed using Tetra.
- Overcame an issue with the development agility of Tesseract by separating Tetra features into an independent service.

[Tetra on GitHub](https://github.com/Arizard/tetra)[^tetra-processor-private]

{{< annotatedH3 "ScriptEngine 1 and 2" "2019 to present" >}}
{{< resumeTagGroup "JavaScript" "React" "TypeScript" >}}

-   Created an online platform for instructors to organise group fitness class plans (scripts) by following a specific format.
-   Implemented the user interface using React with the `blueprintjs` component library, with Firebase as the authentication provider.
-   Implemented the application middleware using Go and Cloud Firestore as the database provider.
- Rewrite from scratch using TypeScript in V2, adding improvements to appearance and drag-and-drop using `react-beautiful-dnd`.

{{< annotatedH3 "Video Game Modding" "2016 to 2018" >}}
{{< resumeTagGroup "Lua" "Garry's Mod" "Video Games" >}}

-   Created and published Deathrun Neue, RedactedHub, bodyGroupr, PerkShop doorSkin and doorHandle addons for Garry’s Mod. Written in Lua, available on GitHub and [GmodStore](https://www.gmodstore.com/teams/18/addons).

----
## Education


{{< annotatedH3 "Bachelor of Engineering (Honours)" "2019, Major in Telecommunications Engineering" >}}
{{< resumeTagGroup "Software Defined Networks" "Python" "Openflow" >}}

#### Inline DDoS Detection for SMB

Protected a simulated network against denial of service attacks by writing an SDN controller middleware with Python to integrate Openflow and the Bro Intrusion Detection System.

----
## Training

-   Presenting With Impact (Black Isle, 2017)
-   Optus IPv6 In Practice (Singtel Optus, 2017)
-   Optus TCP/IP In Practice (Singtel Optus, 2015)

[^tesseract]: Tesseract is a suite of automated Lambda services which enable Deputy integration with external HR systems using a CSV file. Tesseract is used when performance with Decaf becomes an issue due to a large number of rows in the CSV.

[^decaf]: Decaf is a programming language which resembles CoffeeScript. It is used inside a Deputy instance to provide scripting functionality. Internally, it is transpiled into DeXML and then interpreted using PHP.

[^precaf]: Precaf is a Decaf developer tool which renders a code template and then deploys the code to a Deputy instance.

[^tetra-processor-private]: The Lambda service, _Tetra Processor_ is a private repository.

[^example-awards-nsw]: See the following for an example of the industry and occupation awards listed by Fair Work NSW: https://www.fairwork.gov.au/awards-and-agreements/awards/list-of-awards

[^boh]: The Bank Of Hours is a process used within Bunnings which aims to provide flexible working arrangements to staff while maintaining a required number of contract hours per year. Staff can enter "debt" or "surplus" for their Bank Of Hours balance, which is then either paid to the employee at the end of the Bank Of Hours year (as overtime) or deducted from the employee's pay.

[^phnw]: Certain staff members at Bunnings are eligible to be paid for public holidays where they are not rostered on.

[^evca]: The Environment Variables Custom App provides a means of accessing account-scoped variables within Decaf/DeXML scripts. The values of these variables can be configured through the Environment Variables Custom App. This allows non-technical staff at Deputy to configure the account in ways they could not before.
