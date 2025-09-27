---
title: "Arie Oldman, Senior Software Engineer"
draft: false
nocomment: true
nobottomnav: true
---

<style>
  .article-after {
    display: none !important;
  }

  .font-weight-bold {
    font-weight: bold;
  }

  @media screen {
    .show-on-print {
      display: none;
    }
  }

  @media print {
    footer, nav#banner { display: none !important; }
    body {
      color: black !important;
      margin: 0;
    }

    article {
        text-align: justify;
        text-wrap: pretty;
        hyphens: auto;
    }

    main#content {
        margin: 0;
    }

    .hide-on-print {
      display: none;
    }

    main#content p {
        color: black !important;
    }
  }
</style>

<p class="show-on-print font-weight-bold">Sydney, Australia • +61 432 934 970 • arie.oldman@vhs7.tv</p>

Software engineer with 6 years of experience, working across modern and legacy code. I'm most interested in feature-leading projects which solve complex problems and have a clear business impact.

<!-- TODO: re-write this from a work experience perspective https://www.beamjobs.com/resume-help/how-to-define-job-responsibilities -->

<!-- ## Technical Skills -->

<!-- * Programming languages: **PHP, Javascript, Go**. -->
<!-- * Build and maintain distributed systems with **AWS, Docker, Linux, MySQL, Elasticsearch**. -->
<!-- * Design major features according to **SOLID, domain-driven design (DDD), 12-factor**. -->
<!-- * **Unit testing**, test-driven development (**TDD**). -->
<!-- * **Refactoring and optimisation** of legacy code. -->
<!-- * Create APIs with **gRPC and Protobuf**. -->
<!-- * Create web front-ends with **Vue and Javascript**. -->

<!-- ## Interpersonal Skills -->

<!-- * **Communication**, knowledge sharing, deliver technical presentations, write RFCs. -->
<!-- * **Agile** (scrum, kanban, stand-ups, retros). -->
<!-- * **Mentoring** intern and junior engineers, pair programming, code review. -->
<!-- * **Project Planning**, breaking down work into tasks and assigning tasks to team members based on individual strengths. -->

<!-- * Code review (frontend and backend). -->
<!-- * Documentation (guides, tutorials, references, READMEs) and RFCs. -->
<!-- * Professional feedback. -->

<!-- TODO more information about management style (agile, scrum etc.) -->
<!-- TODO more specific services, libraries, packages, platforms etc. -->
<!-- TODO include mentions of soft skills (e.g., “worked cross-functionally with product managers and business stakeholders,” “facilitated team retrospectives” or “resolved production issues under tight deadlines”) -->

## Professional Experience

{{< heading-with-sub-label level="3" heading="Senior Software Engineer I at Eucalyptus" label="February 2025 — present" >}}

**Feature lead** for Juniper _Side Effect Check-In_, where I directed a team of 3 engineers (including myself) and worked with a product manager to implement a new side effect questionnaire which surfaces only when appropriate and intelligently triages patients to connect them with practitioners, improving the patient outcomes for medicated weight loss.
<!-- what's special about it?:
    working within microservices architecture -- RPC and Pubsub,
    technical specification document + review process and iteration,
    patients often feel unsupported when they get side effects from wegovy/mounjaro,
    observability with tracing, logging, etc.
    a few different boundaries: patients, admins, support/practitioners,
    estimation, capacity, forecasting
    complex requirements:
        patients don't need it if they report no side effects 2 weeks in a row
        questionnaire begin to show up again if they titrate-up their treatment
        questionnaire dissapears on pause treatment and re-appears on resume.
        questionnaire
-->

{{< heading-with-sub-label level="3" heading="Senior Software Engineer at Deputy" label="October 2022 — February 2025" >}}

**Directed** and developed the implementation of a new asynchronous _Timesheet Actions_ backend (PHP, MySQL), for which I coordinated a team of 5 other backend engineers, 1 product manager and 1 UX designer, scrum-style. This project was crucial in business objective to acquire a strategic partner, enabling delivery of over $3m USD in additional ARR.

**Directed** and developed the _Operations API_ project (PHP, Redis) to enable teams to manage state for long-running asynchronous tasks, improving system performance by maximising parallelisation and unifying the approach across the organisation.

**Directed** and developed the _Distributed Mutex_ project (PHP, Redis) to enable teams to synchronise procedures across different system processes and user sessions, improving quality by reducing deadlocks and data races, at the same time unifying the approach across the organisation.

**Developed** a new _Timesheet_ search engine (Opensearch, Go, MySQL), which played a critical role in the business objective of acquiring new strategic partners.

**Headed** backend development for the AI-TRACT Hackathon Project using AWS Bedrock, in collaboration with a product manager, UX designer, and 2 frontend engineers, with the business objective to support lead generation for Deputy's Recruitment product offering.

**Continuously iterated** the product offering according to user feedback, in collaboration with product managers, UX designers, and frontend engineers.

**Aligned team and facilitated collaboration** related to complex domain-specific business logic by summarisation into easy-to-understand shared reference material. Collaborated with other engineers in the team to conduct tradeoff analysis of different software designs, recording decisions in shared project documentation.
<!-- * **Wrote RFCs** for architectural changes and paradigm shifts to Deputy's backend, taking a previously synchronous product and making it asynchronous in order to scale users and data volume. -->
<!-- * **Designed high-volume bulk actions** that allow users to process up to 10,000 timesheets in one command. -->
<!-- * **Modernised** Deputy's Timesheet feature by creating a timesheet search engine, using AWS OpenSearch. -->
<!-- * **Coordinated project delivery** for a team of 10 engineers. -->

{{< heading-with-sub-label level="3" heading="Software Engineer at Deputy" label="September 2019 — October 2022" >}}

<!-- * **Pay Comparison**: -->
<!-- * **Enterprise Employee Profile**: --> 
<!-- * **Agreed Hours**: -->
<!-- * **Export Aggregator**: -->
<!-- * **Precaf**: -->
<!-- * **Environment Variables Custom App**: -->

<!-- * **Built major compliance product offerings** on Deputy's PHP, Vue and Go stack, much of which is legacy code (10+ years old). <!-1- enterprise profile, pay comparison, svc-compliance -1-> -->
<!-- * **Responsible for planning and executing** projects as part of a cross-functional team. <!-1- export aggr, bunnings, enterprise profile, pay comparison -1-> -->
<!-- * **Delivered technical workshops**, guides, and documentation to software engineers. -->

**Planned and delivered** the backend APIs (PHP, MySQL) of the _Pay Comparison_ feature with a team of 6 engineers, 1 product manager and 1 designer to bolster Deputy's compliance offering by providing tools for the _Better Off Overall Test_ (BOOT). This supported the business objectives of targeting mid-market accounts and contract renewals for strategic partners.

**Mentored** two interns, guiding them through their 3-month intern projects into permanent positions at Deputy, using pair programming, 1-1s and code review.

**Improved maintainability** of the Enterprise Employee Profile by refactoring the PHP backend.

**Planned and executed** the _Export Aggregator_ project -- a Go service on the AWS Lambda runtime -- which translated to $25k in billable work for Deputy.

**Pioneered** automation of time-consuming manual tasks by creating an internal Go command line tool called _Precaf_. <!-- precaf, common funcs, pay comparison scripts -->

{{< heading-with-sub-label level="3" heading="Junior Software Developer at Spriggy" label="March 2019 — July 2019" >}}


**Maintain quality** by fixing bugs in Spriggy backend.

**Reduce** situations of system overload by implementing rate-limiting functionality.

**Support cross-functional teams** by adding analytics tracing code into Spriggy backend.

{{< heading-with-sub-label level="3" heading="Cadet Engineer (Networks) at Singtel Optus" label="July 2015 — March 2019" >}}


**Improve internal productivity** by creating data visualisation software for national IP network topology and mobile network connectivity data using Python and Javascript.

**Improve internal productivity** by launching internal web utilities to assist device testing and zero-rating using PHP and Python.

**Reduce manual work** by automating legacy IP network data cleanup using Perl.

**Coordinate** mobile site upgrades to deliver improved 4G coverage.

{{< heading-with-sub-label level="3" heading="Self Employed & Side Projects" label="since 2015" >}}

Creator of open-source project Deathrun Neue (61 stars, 18 contributors), a gamemode for Garry's Mod.

Create and sell addon products for Garry's Mod servers to enrich the player's online experience, written in the Lua programming language (4805 units sold).

Manage sales, promotions and marketing media using the _gmodstore_ marketplace platform.

## Education

{{< heading-with-sub-label level="3" heading="BEng (Honours) in Telecommunications Engineering at Macquarie University" label="2015 — 2018" >}}

**Published undergrad thesis** _Inline DDoS Detection for Small to Medium Businesses_, which examines software-defined networking approaches to intrusion detection and mitigation on the small (home) to medium (small business) scale.

Systems engineering, physics, linear algebra, calculus, electronics, engineering statistics, computer networks, signal processing.


