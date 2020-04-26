---
title: Less Coffee
date: 2020-04-26T12:00:00.000+10:00
tags:
- Hugo
- Deep Dive
- Website
menu:
  main:
    parent: projects
type: project
hero_image: /uploads/shaah-shahidh--subrrYxv8A-unsplash.jpg
hero_image_attribution: https://unsplash.com/@shaahshahidh?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText
hero_image_attribution_text: Photo by Shaah Shahidh on Unsplash
---

<div style="display: none">
    Technical details on how this website (less.coffee) is managed using Hugo, GitHub and AWS.
</div>


[less.coffee](http://less.coffee) is a static website generated with Hugo, hosted on Amazon S3.

**Source Code**: [GitHub](https://github.com/arizard/less-coffee-hugo)

## System Map

<img width="100%" src="/uploads/less-coffee-map.svg" />

**Legend**

  1. Local `staging` branch of `less-coffee-hugo`
  2. [forestry.io](https://forestry.io) site
  3. Remote `master` branch of `less-coffee-hugo`
  4. Remote `staging` branch of `less-coffee-hugo`
  5. Remote `forestry` branch of `less-coffee-hugo`
  6. GitHub git repository `arizard/less-coffee-hugo`
  7. "Deploy Hugo To S3" workflow
  8. `less.coffee` S3 bucket.
  9. DNS alias A record for less.coffee.
  
## Content Management

Content can be managed using **forestry.io** or by cloning the staging branch locally.

Changes on forestry.io are pushed via git to the `forestry` branch in the repo. Live previews are available using the forestry.io live preview feature.

Changes can also be committed to a local `staging` branch and then pushed to `origin/staging`. Previews are generated using `hugo serve -D` locally.

To publish changes to the live site, a pull request is opened to merge from `forestry` into `staging`. Once the PR is merged, a second PR is opened to merge `staging` into `master`.

Any push to `master` triggers a GitHub action workflow which builds and deploys the site to S3.

## GitHub Workflow

On any push to `master`, a GitHub workflow is triggered:

1. The `master` branch is checked out
2. **Hugo** is installed.
3. Hugo builds the site into the `public` directory.
3. The **AWS CLI** is installed.
4. The contents of `public` are uploaded to the less.coffee S3 bucket.

{{< gist Arizard a125e6d8ab4c9c8848bd2ffe7ecf38d0 >}}

## AWS

The less.coffee S3 bucket is configured to serve a static website.

Route 53 is used to manage DNS records which point the less.coffee address at the S3 bucket using an alias A record.
