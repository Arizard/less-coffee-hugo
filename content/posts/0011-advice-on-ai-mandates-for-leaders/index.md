---
title: You can do better than adoption targets
date: "2026-06-10T21:00:02+10:00"
author: Arie Oldman
hero: hero.jpeg
hero_attribution: Photo by Arie.
tags:
    - career
summary: How I would sensibly approach AI usage targets.
unlisted: true
class: essay
---

Imagine you're in charge of a team. You've just been told by your boss that you need to drive AI usage. They're anxious that the business is being left behind. I suppose AI psychosis is a powerful thing. They're setting an "adoption target" of 100% of employees using AI for their daily work. After some quiet grumbling and eye rolls, and letting off some steam to your peers, you resolve to find a meaningful way to meet this target. Here's how I'd do it.

By now you should be familiar with Goodhart's Law: any measure that becomes a target ceases to become a good measure. If we pass this target on to our teams as-is, then we risk creating a perverse incentive. Team members could, hypothetically, say "good morning" to Claude each day as a box-ticking exercise, or (my favourite technique) ask Claude to recite the alphabet until their usage quota is met. The usage target _tells_ employees to use the tool, but doesn't _show_ them the value upfront. Now they have to juggle both their day job and AI experimentation. You've added another responsibility to their role. Usage targets, adoption targets, token targets, whatever you're calling it, they are a spectacularly bad idea.

Adoption of a new tool requires a change to "the way it has always been". You change the culture by demonstrating the value in a new way of working[^morgadas]. I'd find a business objective first—a good objective would be one which has a fifty-percent chance of being met because it's not a given. I would create a "market demand" for productive tooling: ask yourself "how can the objective be more ambitious?". Find the bar and raise it.

Then I would roll out new AI tools to any employee who wants to make use of them. There will be early adopters, so find them and elevate their voice, social proof is the best kind of proof. Identify your team's pain-points as opportunities to try new techniques with AI. And once you've found some concrete use cases, expect to invest more resources: good tooling is not just one-and-done, you need to maintain it by assembling a team around it. Find a use case for AI which is so valuable to the business that becomes a part of the infrastructure. That's how you'll hit 100% adoption in a meaningful way.

100% adoption is impossible to achieve through direct instruction. The change needs to be cultural (people see the value of the new way to work) and structural (AI is reliable enough and productive enough to use every day). It's the kind of change which sneaks up on you, and once it has taken root you forget how it was before. People tend to be stubborn and resistant to change (like me!) so follow the existing culture first, finding ways to solve real problems with AI, and then _prove_ that this new technology is worth the initial discomfort. Lead by example, and deliver key results using the thing you're trying to introduce, otherwise your mandate is purely speculative.

[^morgadas]: [Do not start by changing the culture to drive the improvements, follow it first (Morgadas, 2025)](https://learnings.aleixmorgadas.dev/p/do-not-start-by-changing-the-culture)

{{< draft >}}
1. First, I'd find some key business objective that my team is responsible for. I'd treat this as a _product experiment_ rather than a mandate. I'd explain to the team that I believe we can raise our ambition and overshoot this business objective by introducing AI into the workflow. Perhaps this will be met with skepticism, but it's the polite thing to do[^nemawashi]. For an engineering team, an example might be to target 25% faster incident MTTR or 25% longer MTBF[^arie01]. We put the customer first, and we know that faster incident resolution and fewer incidents is a better customer experience, and hard to fake.

[^nemawashi]: Nemawashi
[^arie01]: note that delivering roadmap is not a business objective :)
{{< /draft >}}

{{< draft >}}

I used to teach Les Mills classes in a few gyms around Sydney. As an instructor, you learn a bit about what motivates people. Setting a usage target (with or without leaderboards and other gamification) does not motivate people how you might expect, and will not drive AI adoption in any meaningful way. It's a form of extrinsic motivation, which is susceptible to negative reinforcement loops: people will fake the metric to avoid consequence. It's easier to do that, because the metric doesn't express how AI is being used. Learning a new tool is hard, and learning a new way to do your job is harder, so the incentive is to fake the usage rather than reinvent your workflow.

[Usage targets are flawed](https://en.wikipedia.org/wiki/Goodhart%27s_law), but we can act as a sensibility layer between the ill-informed leadership and the people conducting the labour. Instead of plain usage targets, let's set goals for something we actually care about, and create an environment where AI adoption can grow organically. It's better to identify a commercial need which reflects the supposed AI productivity gains. For example, an engineering team might commit to delivering an ambitious roadmap. Instead of employees optimising for number of tokens consumed, they are optimising for commercial impact... which is exactly what businesses are supposed to do. Indeed, if AI usage improves productivity, then you should expect your talented employees to find ways to leverage it. Share your hypothesis that AI tools are the way to achieve this new goal, and support and encourage them while they experiment. With a goal to work towards, a demand for productive tools has been created.

Next, you need to make these AI tools easily accessible. Humans give up easily. If it takes too long to access the new tools, or your IT systems interrupt their flow with the _Okta Dance™_, they will give up and revert to the old way of doing things. Your team wants to see clear value upfront, and it's impossible to do that when they spend time making access requests. It needs to be just as easy—if not easier—to access the new tools than it is to use the old tools.

Something that stands out about Les Mills classes is that the instructor demonstrates the moves in-time with the music and participants. Coaching, athleticism, and performance are all beautifully combined to motivate and entertain. It's part of why Les Mills was (still is?) such a popular fitness product. You need to think of your AI tools as a product to be sold, not a mandate to be enforced. You've created a real use case where the new tool can serve a purpose, and you've reduced friction to access, so now you have to _sell_. Give them value upfront by identifying specific problems your team is having and demonstrating how AI can be a solution. Better yet, you likely have an early-adopter in the team already—elevate their voice, make their work visible, the social proof really is powerful.

{{< /draft >}}

{{< draft >}}

Problems with AI mandates:

- often does not set targets against meaningful measures (95% "adoption"). People will prioritise this metric over getting their job done on-time and with high-quality.
    leaderboards need a mention

- if you want LLMs used as a generalised tool (as-is Cowork, Claude chat, etc), then every company has access to that, so there's no competitive advantage.
- if you want LLMs used to solve specific business problems, you're asking to take on an engineering project. Specialised tools need specialised attention.

Solutions:

- Business-oriented OKRs that reflect the ambitious productivity gain you expect. If LLMs are actually productive, then you should expect your talented employees to find ways to achieve your OKRs using them. Unless you don't trust your own staff? Oof. If you're reading this as an employee at a company and you've been mandated, sorry buddy but your leadership doesn't trust you. Hopefully that's not news.
- Lower the friction to accessing LLMs. Humans will give up easily, if it takes too long to get access to these tools, then they won't waste their time without seeing clear value upfront. If I have to do the _Okta Dance_ and then submit a software access request, wait for a human to approve it, I'm losing interest. That being said...
- Show clear value upfront. You need to pitch your product. Find a real problem that your team experiences and show them how to use LLMs to work around it.
- Be prepared to invest resources into _building a product for your specific problem

It's as if product businesses have forgotten how products work. Take a step back and treat it like a B2C product that you're trying to sell to your team. Create market demand (ambitious OKR), provide a solution (LLMs with easy access), and get buy-in by _showing_ them how it can solve their problem, rather than telling them that they must use it. Early adopters already exist in your team—find them and elevate their voice as social proof. A mandate is like shouting "I know better than you, especially about your own job!". You can't force someone to buy your widgets, so why force your employees to buy your tools?

{{< /draft >}}
