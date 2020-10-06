---
title: "Stuff I learned from the boook \"Advent of Go Microservices\" by Tit Petric"
description: ""
date: 2020-10-02T21:04:55+10:00
author: "Arie Oldman"
type: "post"
tags:
- Software Engineering
- Microservices
- Go
hero_image: "nick-karvounis-SmIM3m8f3Pw-unsplash.jpg"
hero_image_attribution: "https://unsplash.com/@nickkarvounis?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
hero_image_attribution_text: Image of Container Boat House by Nick Karvounis
toc: true
---

I've been working through the book [Advent of Go Microservices](https://leanpub.com/go-microservices) by
Tit Petric, and I've written down the things that I was surprised to learn - most of these
are to do with building enterprise-grade applications.

## Generating the Code for API Contracts

In a microservices architecture, it is crucial to clearly define the way two services
should communicate, and this is done by agreeing upon an API contract. I'm referring
to the specific API that one service exposes to other services. 

**Code generation** allows developers to define an API contract in a dedicated language,
which can then be used to generate client API implementation for many different languages.

The service defines its own contracts, and other services can implement this contract using
the generated client API code. 

The API contract is defined in a single place, so changes to the API contract are
consumed by the implementing services. This helps to achieve **loose coupling** between services
as the dependency between two services is more indirect.

At scale, this makes a lot of sense - consider an architecture composed of thousands
of services, with multiple languages - imagine updating the API client implementation for
all of these by hand!

This is a way to define interfaces between services, separate to the service business logic.

## Docker

Docker is really cool software which allows developers to be very specific about the runtime environment of their application (aka **containerisation**). In this context, it's used to define a build environment, but also to mock out services like an SQL database, using a **docker image** of a SQL server, which simply works "out of the box".

It's awesome because it means the application can be made to run on many different hardwares and creates a **consistent runtime environment**.

## `make` and Makefiles 

Turns out that `make` is an extremely useful tool if you need to run multiple build steps involving more than one tool. For example:

1. Generate protobuf code (`protoc-gen-go`)
2. Embed database migrations into application source (`envsubst`)
3. Compile application to static binary (`go build`)

## CI Tools

In the book, we used Drone CI. In brief, this spins up a bunch of services from docker images (including one as the build environment), builds the application, and then it can be configured to run automated tests. So far, the only "testing" is making sure the database migrations are able to apply correctly to a clean database.

The benefit: a more consistent build environment, and a way to define a test environment in code.

## Embedding files into Go

The book demonstrates how to embed files into Go. In this case, database migration logic is contained in the same project. Each migration is defined as a `*.sql` file.

Using `envsubst` we generate a migrations key-value pair as a Go data structure (`map[string]string`). Then when a migration is performed, this data structure is read in order to execute each migration in sequence.

This means the database migrations are deployed alongside the application. Imagine deploying the service to a prodtest environment - the service and the database are updated at the same time. This is beneficial from a devops perspective as the developer clearly defines database migrations through code. Deploying the service to a new environment (a "blank slate") means it will immediately be brought up to date with the latest behaviour, just without any user data.

## Conclusion

* Generate code when you need contracts consistent across multiple projects and languages
* Automate the build + test process
* Each service manages its own database.[^private-database]

That's as far as I've made it through the book. Next up is more database stuff, **dependency injection using Wire** and implementation. Tune in next time!

[^private-database]: Question: does this mean it's usually best practice to have one DB per microservice? What about when you scale horizontally - do multiple identical services all access the same database?
