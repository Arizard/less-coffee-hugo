---
title: "Hugo Commenting Systems: A Comparison of Open-Source Options"
subtitle: "bottom text"
date: 2024-12-31T16:31:17+11:00
author: Arie Oldman
draft: true
---

<!-- {{< figure src="image-example-500px.jpg" caption="example image" >}} -->

I love using Hugo to generate static sites quickly and deploy them cheaply. If you’re like me, then you also want to add comments to your Hugo site, but there are so many open source options that it’s a bit overwhelming to choose a single one.

You’d rather not use a commercial system for a small project — perhaps for privacy reasons, costs, or just for fun — so *Disqus*, *Emote* and *ReplyBox* are ruled out.

Allow me to make it a little bit easier for you with a quick overview of a few open-source commenting systems, graded on features, simplicity, ease of integration, and deployability.

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

## Comentario

Website: https://demo.comentario.app/

Comentario is intuitive to use, provides rich-text capabilities via markdown formatting (as most alternatives do), and is actively maintained.

One awesome feature is the Admin UI which provides a web interface for configuring the Comentario server.

The architecture is fairly simple: you need a compute instance and a database (they could be the same machine).

Don’t let the simplicity of the installation fool you: Comentario is a good user-friendly all-rounder option, with [lots of features](https://docs.comentario.app/en/about/features/#features-in-a-nutshell) and an architecture that is easy to understand. Just be mindful that you’re going to have to manage the infrastructure yourself!

{{< figure src="comentario-01.png" caption="Screenshot of Comentario demo." >}}

### Key Benefits

- [Active development team](https://gitlab.com/comentario/comentario/-/commits/dev) (it’s written in Go if you’d like to contribute!)
- Social login + any generic OpenID Connect provider (e.g. LinkedIn)
- You can use SQLite for small projects and PostgreSQL for big projects.
- Supports “Extensions” to integrate with third-party content filtering such as [Akismet](https://docs.comentario.app/en/configuration/frontend/domain/extensions/akismet/), [APILayer](https://docs.comentario.app/en/configuration/frontend/domain/extensions/api-layer-spam-checker/), and [Perspective](https://docs.comentario.app/en/configuration/frontend/domain/extensions/perspective/).
- Existing Hugo integration for quick start
- Private (no tracking scripts, pixels etc.)
- Has Admin dashboard
- Supports SSO
- Supports i18n out-of-the-box

### Drawbacks

- Requires self-hosting (docker image available)
- Understanding of SQLite or PostgreSQL required
