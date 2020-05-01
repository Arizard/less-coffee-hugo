---
title: Precaf
date: 2020-04-24T15:13:34.000+00:00
tags:
- Deep Dive
- Precaf
- Project
- Deputy
- Dexml
- Decaf
- Go
- AWS
tech:
- Dexml
- Decaf
- Go
- AWS
menu:
  main:
    parent: projects
hero_image: /uploads/fabian-grohs-dC6Pb2JdAqs-unsplash.jpg
hero_image_attribution: https://unsplash.com/@grohsfabian?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText
hero_image_attribution_text: Photo by @grohsfabian on Unsplash
type: project
---

_Precaf_ is a build-and-deploy tool used internally at Deputy. It provides a means for Decaf developers to standardise and automate the re-use of code snippets among teams. _Precaf_ was developed for the _2020_ _Love Bugs Hackathon_ at Deputy.

**Contributors**: Arie Oldman

**Source Code**: Private Repository

<div class="callout success">

**Precaf reduces repetition and increases re-use.**

</div>

## Technology

**Programming Languages**

* Go

**Libraries**

* [Golang Glog](https://github.com/golang/glog "Golang Glog Repo")
* [CLI by urfave](https://github.com/urfave/cli)
* [Fasttemplate by valyala](https://github.com/valyala/fasttemplate)

**Tools**

* Git + Github
* Jetbrains GoLand IDE

## Problem Statement

### Decaf and DeXML

**DeXML** is a scripting language layered on top of the Deputy core product (written in PHP). This feature enables custom behaviour to be implemented on a per-account basis. This professional service is carried out by the Customer Experience (CX) teams within each region.

<img width="100%" src="/uploads/deputy-dexml (1).jpg" />

Some things can be customised with varying complexity using DeXML scripting:

* Award interpretation for industry awards (GRIA, HIGA, etc.)
* Payroll integration with external systems
* Leave policies for staff
* Scheduling rules

**Decaf** is another scripting language which looks like CoffeeScript. Under the hood, the following transpilation occurs:

* Decaf to DeXML
* DeXML to PHP

Decaf was developed because DeXML is difficult for humans to read and write. All scripts at Deputy are written in Decaf.

### Limitations

The main limitation that motivated this project was the **lack of language features**. In Decaf, there is no `import`, `require` or `include` statement available. In the past, when code was shared between scripts, the following approach was taken:

1. Copy-paste the code from the other script.
2. Use the `runscript` language feature to execute another script on the current account, with all variable and procedure* declarations made in the scope of the calling script.

These two approaches have a high risk of introducing errors. Number 2 is extremely hard to debug.

A secondary limitation which motivated Precaf was the **lack of standardised deployment approaches**. The accepted procedure in the CX team is to copy-paste the code into the UI editor inside the account.

### Solution with Precaf

Precaf solves the lack of language features by introducing a preliminary template rendering step which occurs before deploying the code to the account. This way, there is one source of truth for a re-usable code snippet, which automatically gets included when Precaf is executed.

Precaf provides deployment functionality using the `codeupdate` API (Deputy core product feature). Theoretically, with one command you can update the same script on multiple accounts.

## Usage

Examine the directory structure:

    common:
    	- someDependencyProcedure.coffee
    shift-pay_calculation:
    	calculate_overtime:
        	- calculate_overtime.coffee
            - prod.coffee

Inside `calculate_overtime.coffee` there is this line:

    `% include ../../common/someDependencyProcedure.coffee %`

Now the developer executes Precaf like so:

    calculate_overtime $ cx-precaf calculate_overtime.coffee

This results in the creation of the new file:

    common:
    	- someDependencyProcedure.coffee
    shift-pay_calculation:
    	calculate_overtime:
        	- calculate_overtime.coffee
            - prod.coffee
            
            - build_calculate_overtime.coffee

Inside the new file, the `include` statement above has been substituted for the contents of `someDependencyProcedure.coffee`.

Similar operations can be performed on an account-specific basis using a config file such as `prod.coffee`. The config file can contain variables which will be substituted using the following syntax:

    `% var someConfigVariable %`

While running the following command:

    calculate_overtime $ cx-precaf -c prod.json calculate_overtime.coffee

You can think of Precaf as a templating tool for Decaf.

For **deployment**, the developer defines the **account subdomain, OAuth token, script ID** and optionally the **script label**. Then, they deploy like this:

    calculate_overtime $ cx-precaf -d -c prod.json calculate_overtime.coffee

This triggers Precaf to POST the script contents to the `codeupdate` API endpoint.

## Retrospective

**What went well?**

* The application was received well by the business. 
* It solves old problems in a new way.

**What went poorly?**

* Precaf has not been widely adopted, despite being accepted by the engineers.
* Codebase is messy.
* No installation method or package manager support.
* Creating a new precaf script is a manual process.

**What to change for next time?**

* Determine a clear design for the codebase before implementing anything.
* Integrate with a package manager (e.g. `brew`)
* Implement a `$ cx-precaf new` command which creates a blank script and config files in the current directory.
