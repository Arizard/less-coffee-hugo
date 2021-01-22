---
title: "Arie Oldman - Resume"
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

## Professional Projects

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
