---
title: "Hugo Commenting Systems: A Comparison of Open-Source Options"
summary: "Which comment system should you use for your static site?"
keywords: ["Arie Oldman", "Hugo", "commenting systems", "static site", "open source", "web development", "blog comments", "static site generator"]
tags: ["technical"]
date: 2024-12-31T16:31:17+11:00
author: Arie Oldman
draft: false
hero: hero.png
---

I love using Hugo to generate static sites quickly and deploy them cheaply. If you’re like me, then you also want to add comments to your Hugo site, but there are so many open source options that it’s a bit overwhelming to choose a single one.

You’d rather not use a commercial system for a small project — perhaps for privacy reasons, costs, or just for fun — so *Disqus*, *Emote* and *ReplyBox* are ruled out.

Allow me to make it a little bit easier for you with a quick overview of a few open-source commenting systems, graded on features, simplicity, ease of integration, and deployability.

> [!TIP]+ Update March 2026
> You can try [_Gomments_ on this very page](#gomments-container). It's my own basic commenting system which uses SQLite, so all you need is some spare compute. You can also check out the project [on github](https://github.com/Arizard/gomments).

> [!NOTE]+ Isso is my personal favorite
> My favorite out of this list is Isso, but I had trouble with running it behind an nginx path, it doesn't seem to have a way to specific a base URL.

**Quick Navigation**

Standalone Comment Systems

* [Comentario](#comentario)
* [Comma](#comma)
* [Isso](#isso)
* [Remark42](#remark42)
* [Talkyard](#talkyard)
* [Commento](#commento)

Self-hosting optional

* [Cactus Comments](#cactus-comments)
* [Giscus](#giscus)
* [Utterances](#utterances)

Forum software

* [Discourse](#discourse)

Completely static sites

* [Staticman](#staticman)

## Comentario

Website: https://demo.comentario.app/

Comentario is intuitive to use, provides rich-text capabilities via markdown formatting (as most alternatives do), and is actively maintained.

One awesome feature is the Admin UI which provides a web interface for configuring the Comentario server.

### Key Benefits

- [Active development team](https://gitlab.com/comentario/comentario/-/commits/dev) (it’s written in Go if you’d like to contribute!)
- Social login + any generic OpenID Connect provider (e.g. LinkedIn)
- You can use SQLite for small projects and PostgreSQL for big projects.
- Supports “Extensions” to integrate with third-party content filtering such as [Akismet](https://docs.comentario.app/en/configuration/frontend/domain/extensions/akismet/), [APILayer](https://docs.comentario.app/en/configuration/frontend/domain/extensions/api-layer-spam-checker/), and [Perspective](https://docs.comentario.app/en/configuration/frontend/domain/extensions/perspective/).
- Existing Hugo integration for quick start
- Has Admin dashboard
- Supports SSO
- Supports i18n out-of-the-box

### Drawbacks

- Requires self-hosting (docker image available)
- Understanding of SQLite or PostgreSQL required
- Since it needs compute + database, it has a non-trivial resource footprint.

{{< figure src="comentario-01.png" caption="Screenshot of Comentario demo." >}}

## Comma

Website: https://github.com/Dieterbe/comma/

Super lightweight and simple, uses XML instead of database. Very basic features.

This option weighs in at less than 270 lines of Go code. It has no authentication, no spam filtering, just a “human check” to prevent bots. This option is perfect if you want to offer comments without requiring signup. The avatars are provided by Gravatar, assuming the user supplies the optional email address.

### Key Benefits

- Simplicity — this is a “no frills” implementation of comments. It doesn’t get simpler than this.
- Small amount of additional javascript results in faster page load.
- Small resource footprint.

### Drawbacks

- [More code required to integrate](https://github.com/Dieterbe/dieterblog/blob/master/layouts/partials/comments.html) — no “shim” available.
- No authentication may concern some authors.
- No moderation tools or spam filtering. You have to go delete XML files manually.
- No comment replies.
- No rich text (no markdown).

{{< figure src="Screenshot 2025-01-01 at 12.56.51 AM.png" >}}

## Isso

Website: https://isso-comments.de/

Isso is intended to be similar to Disqus in usage and appearance, but it’s much more lightweight. It appears to be actively maintained. While Disqus is now forum software, Isso remains a standalone commenting system.

Because it’s a standalone comment system which uses SQLite, you can deploy it with a reasonably small resource footprint.

### Key Benefits

- Simple to use but pleasant appearance out-of-the-box.
- Very familiar to Disqus users but has a smaller resource footprint.
- Straightforward to deploy on a single compute instance using Docker.

### Drawbacks

- No authentication, just asks for name and email.
- Very basic admin interface.

{{< figure src="Screenshot 2025-01-01 at 12.39.42 PM.png" >}}

## Remark42

Website: https://remark42.com/

Seems to be a great all-rounder standalone comments system. This project goes beyond simply “leaving messages” and introduces email, telegram and slack notifications. Compare this to Isso and Comma.

### Key Benefits

- Social login with optional email login or anonmyous access
- Image upload (drag and drop)
- Integrates with email and Telegram for notifications
- Easy to deploy (fully dockerised or self-contained executable)

### Drawbacks

- More complex to configure than Isso or Comma, but has more features.
- Limited moderation tools.
- Some anti-spam tools.

{{< figure src="Screenshot 2025-01-01 at 1.05.40 PM.png" >}}

## Talkyard

Website: https://blog-comments.talkyard.io/

Another great all-rounder standalone comments system, with social login and email integration. Compare this to Isso, Comma, and Remark42.

The styling seems to be more opinionated than other options.

### Key Benefits

- Deployment instructions are thorough and consider production workloads with high availability.
- Supports Social login and guest comments
- Supports email integration.

### Drawbacks

- Bigger resource footprint, they suggest 2GB RAM. However, this allows you to host many sites.
- Self-hosting guide intended audience appears to be professionals rather than hobbyists.

{{< figure src="talkyard-01.png" caption="Courtesy of talkyard.io" >}}

## Commento

Website: https://commento.io/

Does not appear to be maintained any longer but repo is still available. Eventually it was forked and replaced by Comentario.

You can still use [Commento.io](http://Commento.io) as a commercial version, but this article is only concerned with open source.

## Cactus Comments

Website: https://cactus.chat/

Cactus comments is a *federated* comments system based on the [Matrix protocol](https://matrix.org/docs/older/faq/).

If you (like me) did not understand what the hell that previous sentence meant, I’ll try and save some time for you.

First, think back to email: you and your friends can have different email providers: `@gmail.com`, `@icloud.com` , `@yahoo.com.au` and so on. The email providers *inter-operate* to allow everyone to send emails to each other.

Matrix is a little bit like email, in the sense that it’s a decentralised communication system. It has an [established ecosytem](https://matrix.org/ecosystem/) that makes it an incredibly useful foundation for building rich real-time and asynchronous communication apps. On top of Matrix you can build instant messaging, audio and video calls, IoT communication, and, of course, comment systems.

As far as features go, Cactus Comments supports any [moderation tools available on Matrix](https://matrix.org/docs/communities/moderation/) thanks to the Matrix open standard. This includes the [Mjolnir](https://github.com/matrix-org/mjolnir) tool (with many administrators now switching to [Draupnir](https://github.com/the-draupnir-project/Draupnir)).

### Key Benefits

- No self-hosting required
- Existing Hugo integration for quick start

### Drawbacks

- Poorly maintained — GitLab issues don’t get responses, last commit was July 2023 (18 months ago at time of writing), and CDN is provided via Cloudflare IPFS but the DNS record points to the [now-defunct](https://blog.cloudflare.com/cloudflares-public-ipfs-gateways-and-supporting-interplanetary-shipyard/#what-happens-next) `cloudflare-ipfs.com` domain:

    ```plain
    ;; ANSWER SECTION:
    latest.cactus.chat.	60	IN	CNAME	cloudflare-ipfs.com.
    ```

    This means you’ll have to serve the javascript and style sheet yourself. The files can be found [under Releases here](https://gitlab.com/cactus-comments/cactus-client/-/releases).

    Following the existing _Quick Start_ guide results in the following console error: `Uncaught ReferenceError: initComments is not defined`.

## Giscus

Website: https://giscus.app/

A commenting system powered by GitHub Discussions. When the page loads, the comments are found by retrieving the discussion associated with the page. If none is found, a new discussion is created upon first comment.

To make comments, visitors must authenticate via GitHub and allow the Giscus app to post on their behalf.

Since it’s built on GitHub Discussions, you’ll have an entire forum as well. If you need to provide a community forum where users can create their own posts as well as commenting on your articles, then this would be a good option. However, because you need a GitHub account, it’s better suited to developers.

### Key Benefits

- Built on top of GitHub Discussions, so if you have a repo then you have hosting.
- Can easily moderate comments via GitHub.
- No self-hosting needed (but you could if you wanted to — [click here for instructions](https://github.com/giscus/giscus/blob/main/SELF-HOSTING.md)).

### Drawbacks

- GitHub Discussions is still under active development, so there may be breaking changes in the future.
- Requires GitHub account to comment.
- May be more than what you need, if you just want comments on articles.

{{< figure src="Screenshot 2025-01-01 at 12.33.11 PM.png" >}}

## Utterances

Website: https://utteranc.es/

Works in the same way as Giscus (it was based on Utterances) except it uses GitHub Issues instead of GitHub Discussions.

### Key Benefits

- Built on top of GitHub Issues, so if you have a repo then you have hosting.
- Can easily moderate comments via GitHub.

### Drawbacks

- Requires GitHub account to comment.
- May be more than what you need, if you just want comments on articles.
- Issues are flat threads so you can’t have comment replies.

{{< figure src="Screenshot 2025-01-01 at 1.01.54 PM.png" >}}

## Discourse

Website: https://meta.discourse.org/t/embed-discourse-comments-on-another-website-via-javascript/31963

Discourse is actually a kind of forum software. Instead of being an standalone comment system, you would actually embed the comments of a forum post. This means the user will have to actually visit the forum post (and log in) to begin commenting.

If you need to provide a community forum where users can create their own posts as well as commenting on your articles, then this would be a good option.

It’s possible to [self-host Discourse](https://github.com/discourse/discourse/blob/main/docs/INSTALL-cloud.md). Since it’s an entire forum system with lots of features, you can expect a fair amount of resource usage.

### Key Benefits

- Big feature set and “batteries-included” approach - you get an entire forum system. [Read more about Discourse here](https://www.discourse.org/features).
- Users can create their own discussions as well as commenting on your articles.
- Possible to integrate with AI tools (summarise, related posts, explain, question/answer, search) via [Discourse AI](https://www.discourse.org/ai).

### Drawbacks

- Big resource footprint because it’s a whole forum system results in higher costs.
- May be more than what you need, if you just want to add comments.
- More complicated to self-host and maintain.

{{< figure src="Screenshot 2025-01-01 at 1.19.31 AM.png" caption="Example of a comment on Discourse." >}}

## Staticman

Website: https://staticman.net/

Staticman takes a different approach to a typical comment system. It’s actually a general tool which allows user-generated content to be added to static sites via creating pull requests in the GitHub repo.

To implement this, you’d have to add a form field which submits the comment data to the Staticman instance. Then, the Staticman instance will open a PR on a GitHub repository to merge a new file containing the comment data.

Once the PR is merged (via CI/CD or manually), the static site is regenerated and the content shows up on the page.

### Key Benefits

- Your static site remains fully static with no javascript needed.
- You control all the data for the user generated content.
- Moderation via PR review, Akismet, and reCaptcha challenge.

### Drawbacks

- Your website (or some part of it) goes through the entire build process every time a comment gets made.
- You have to implement the form and the comment rendering yourself.

## Conclusion

There are many different options to suit your needs, whether that be a standalone comments system, a fully fledged forum package, or developer-focused GitHub-bound discussions.

Have I missed some popular options, or perhaps you’ve just created one? Let me know at arie@less.coffee or leave a comment.
