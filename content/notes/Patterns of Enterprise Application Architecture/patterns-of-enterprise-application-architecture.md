+++
author = "Arie Oldman"
date = 2020-07-30T14:00:00Z
description = "Notes from the Martin Fowler book"
draft = true
tags = ["Software Engineering"]
title = "Patterns of Enterprise Application Architecture"

+++
{{< callout info >}}

Assorted notes sourced from the book _Patterns of Enterprise Application Architecture_ by Martin Fowler

{{< /callout >}}

## The Domain Model

A domain model is an object which models the business area you are working in.
* Some models mimic the data in the business.
* Some models capture business processes and rules.

A **rich domain model** is better for more complex logic, but harder to map to a database. Rich domain models will employ the *Data Mapper* pattern.

{{< callout info >}}

Fowler makes an interesting point when explaining how to deal with usage-specific behaviour in domain models, which I found counter-intuitive. He states that separating usage-specific behaviour from the domain model results in code duplication - it's harder to find, and developers will re-implement it themselves. His advice is to not split usage-specific behaviour, and put it in the object that is the best fit - fix bloating when and if it becomes a problem.

{{< /callout >}}