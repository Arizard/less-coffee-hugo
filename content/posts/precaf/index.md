---
title: "Precaf"
date: 2022-02-19T09:09:56+11:00
draft: false
---

_Precaf_ is a build-and-deploy tool used internally at Deputy. It provides a means for Decaf developers to standardise and automate the re-use of code snippets among teams. _Precaf_ was developed for the _2020_ _Love Bugs Hackathon_ at Deputy.

A quick overview of what Precaf does:

* Substitute values in Decaf scripts for values in a config file.
* Share common code between multiple Decaf scripts.
* Deploy code into Deputy accounts, from the terminal.
* Deploy the same code into multiple accounts, parameterised using a config for each account.

## Technology

**Programming Languages**

* Go

**Libraries**

* [Golang Glog](https://github.com/golang/glog "Golang Glog Repo")
* [CLI by urfave](https://github.com/urfave/cli)
* [Fasttemplate by valyala](https://github.com/valyala/fasttemplate)

## Problem Statement

### Decaf and DeXML

**DeXML** is a scripting language layered on top of the Deputy core product. This feature enables custom behaviour to be implemented on a per-account basis. This work is carried out by the Customer Experience (CX) teams within each region.

Some things can be customised with varying complexity using DeXML scripting:

* Award interpretation for industry awards (GRIA, HIGA, etc.)
* Payroll integration with external systems
* Leave policies for staff
* Scheduling rules

DeXML is hard to read and write. **Decaf** is another scripting language which looks a lot like CoffeeScript. Under the hood, Decaf is first transpiled to DeXML, then the DeXML is parsed by PHP.

### Limitations

The main limitation that motivated this project was the **lack of language features**. In Decaf, there is no `import`, `require` or `include` statement available. In the past, when code was shared between scripts, the following approach was taken:

1. Copy-paste the code from the other script.
2. Use the `runscript` language feature to execute another script on the current account, with all variable and procedure* declarations made in the scope of the calling script.

These two approaches have a high risk of introducing errors. Number 2 is extremely hard to debug.

A secondary limitation which motivated Precaf was the **lack of standardised deployment approaches**. The accepted procedure in the CX team is to copy-paste the code into the UI editor inside the account. Yes, by hand!

### Solution with Precaf

Precaf solves the lack of language features by introducing a preliminary template rendering step which occurs before deploying the code to the account. This way, there is one source of truth for a re-usable code snippet, which automatically gets included when Precaf is executed.

## Usage

Examine the directory structure:

```
/common
  - someDependencyProcedure.coffee
/shift-pay_calculation
  /calculate_overtime
    - calculate_overtime.coffee
    - prod.coffee
```
Inside `calculate_overtime.coffee` there is this line:

```coffeescript
`% include ../../common/someDependencyProcedure.coffee %`
```

Now the developer executes Precaf like so:

```
precaf calculate_overtime.coffee
```

This results in the creation of the new file:

```
/common
  - someDependencyProcedure.coffee
/shift-pay_calculation:
  /calculate_overtime:
    - calculate_overtime.coffee
    - prod.coffee

    - build_calculate_overtime.coffee
```

Inside the new file, the `include` statement above has been substituted for the contents of `someDependencyProcedure.coffee`.

Similar operations can be performed on an account-specific basis using a config file such as `prod.coffee`. The config file can contain variables which will be substituted using the following syntax:

```coffee
`% var someConfigVariable %`
```

While running the following command:

```
precaf -c prod.json calculate_overtime.coffee
```

You can think of Precaf as a templating tool for Decaf.

For **deployment**, the developer defines the **account subdomain, OAuth token, script ID** and optionally the **script label**. Then, they deploy like this:

```
precaf -d -c prod.json calculate_overtime.coffee
```

This triggers Precaf to POST the script contents to the `codeupdate` API endpoint.

## Retrospective

**What went well?**

* The application was received well by the business. 
* It solves old problems in a new way.

**What went poorly?**

* Precaf did not have any early adopters other than myself. _Now in 2022, as new engineers have joined CX, adoption has improved._
* Codebase is messy. _Update 2022: I cleaned it up._
* No installation method or package manager support. _Update 2022: We have an install and uninstall script._
* Creating a new precaf script is a manual process. 

**What to change for next time?**

* Determine a clear design for the codebase before implementing anything.
* Integrate with a package manager (e.g. `brew`)
* Implement a `$ precaf new` command which creates a blank script and config files in the current directory.

## 2022 Updates

New features:

* Install and uninstall shell script
* Store account auth tokens locally, so that they won't be committed to the repo.
  * `precaf -A <subdomain> <token>` to store a token
  * `precaf -D <subdomain>` to delete a stored token
  * Deployments with `precaf -d` no longer require the auth token to be stores in the config.
* You can now deploy **Custom Applications** and **Reports** using Precaf!
