---
title: "Arie Oldman - Resumé"
date: 2020-12-08
draft: false
author: Arie Oldman
toc: false
---

{{< callout info >}}
**Contact**

* 👨‍💻 Arie Oldman
* 🏡 Sydney, NSW
* 📧 arie.oldman@vhs7.tv
* 🌏 [Arizard on GitHub](https://github.com/Arizard)

{{< /callout >}}

## Summary

A Sydney based software engineer who has 1.5 years of experience in a software engineering role
and 4 years of experience working in telecommunications.

### Key Skills and Technologies

* **Programming Languages**: Go, Javascript, Typescript, Python
* **Frameworks**: Vue, React
* **Technologies**: Docker
* **Platforms**: Amazon Web Services (Lambda, Cloudfront, EC2, S3)
* **Operating Systems**: macOS, Linux (Debian, Alpine, Arch, Amazon Linux)

### Professional Interests

I'd like to gain experience in the following areas:

* Object-oriented software design
* Microservices
* Frontend Development
* DevOps
* Automation

---

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

---

## Education

{{< annotatedH3 "Bachelor of Engineering (Honours)" "2019, Major in Telecommunications Engineering" >}}
{{< resumeTagGroup "Software Defined Networks" "Python" "Openflow" >}}

**Inline DDoS Detection for SMB**

Protected a simulated network against denial of service attacks by writing an SDN controller middleware with Python to integrate Openflow and the Bro Intrusion Detection System.

[^tesseract]: Tesseract is a suite of automated Lambda services which enable Deputy integration with external HR systems using a CSV file. Tesseract is used when performance with Decaf becomes an issue due to a large number of rows in the CSV.
[^decaf]: Decaf is a programming language which resembles CoffeeScript. It is used inside a Deputy instance to provide scripting functionality. Internally, it is transpiled into DeXML and then interpreted using PHP.
[^precaf]: Precaf is a Decaf developer tool which renders a code template and then deploys the code to a Deputy instance.
[^tetra-processor-private]: The Lambda service, _Tetra Processor_ is a private repository.
[^example-awards-nsw]: See the following for an example of the industry and occupation awards listed by Fair Work NSW: https://www.fairwork.gov.au/awards-and-agreements/awards/list-of-awards
[^boh]: The Bank Of Hours is a process used within Bunnings which aims to provide flexible working arrangements to staff while maintaining a required number of contract hours per year. Staff can enter "debt" or "surplus" for their Bank Of Hours balance, which is then either paid to the employee at the end of the Bank Of Hours year (as overtime) or deducted from the employee's pay.
[^phnw]: Certain staff members at Bunnings are eligible to be paid for public holidays where they are not rostered on.
[^evca]: The Environment Variables Custom App provides a means of accessing account-scoped variables within Decaf/DeXML scripts. The values of these variables can be configured through the Environment Variables Custom App. This allows non-technical staff at Deputy to configure the account in ways they could not before.
[^bunnings]: The Bunnings account is a Deputy Enterprise account with over 50,000 active users.
