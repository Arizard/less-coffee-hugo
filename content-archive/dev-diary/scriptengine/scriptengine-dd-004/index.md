---
title: "ScriptEngine Developer Diary #004"
description: "Storage patterns"
date: 2020-08-30T07:35:35+10:00
author: "Arie Oldman"
type: "post"
tags:
- Software Engineering
draft: false
hero_image: "Screen Shot 2020-08-29 at 11.03.24 pm.png"
hero_image_attribution: "#"
hero_image_attribution_text: Early prototype styles for the outcomes block.
---

{{< articleImage "localhost_8080_ (1).png" "" "Progress screenshot on the UI" >}}

For good UX, ScriptEngine needs to save data using a method that works regardless of
internet connection. We need to define an asynchronous storage contract for the
Vue application to interact with.

## Requirements

* Must store data while online and offline.
    * When online, it should sync data with an external database via a database service.
    * When offline, it should save changes locally, in preparation for a sync when an internet connection is established.
* Must be easily substitutable so that the application can be built with different storage providers.
 (local, staging, production environments).
* Always returns a `Promise` when getting or putting data.
* It needs to follow CQS as a good design practice.

## Contract `DocumentAsyncStorage`

Some basic CRUD operations are all we need, since it's just document storage.
All operations return `Promise` which can resolve or reject based on the success
of the operation[^cqs01].

* `get(id: string): Promise<Object<Document>>`
    * Retrieve a document by the `id`.
* `put(id:string, document: Object<Document>): Promise`
    * Store and overwrite the document with id `id`.
* `find(findArgs: Object<FindArgs>): Promise<[]Object<Document>>`
    * Based on `findArgs`, return a promise that resolves a collection of `Document`.
* `delete(id: string): Promise`
    * Delete the document with id `id`.
    
The **concrete** implementations of this will need a `constructor` which takes a `config` object:

* `constructor(config: Object<DocumentAsyncStorageConfig>): void`
    * In production, the `config` will need details about the user's account (e.g. an auth token)
    which will be passed to the database service to apply data access restrictions.

[^cqs01]: Commands do not return data in the Promise, because this violates CQS. The promise however,
can still `resolve` or `reject` and this will indicate success/failure - this is implementation-specific
to asynchronous programming languages.
