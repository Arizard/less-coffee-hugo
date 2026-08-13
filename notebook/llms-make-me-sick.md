I've had a mostly sensible and measured interaction with LLMs so far. Some colleagues even consider me something of a luddite. I'm definitely a skeptic. I don't think LLMs can replace software engineers in any meaningful way. They have decent success with some applications: I use it as a kind of "test amplifier"; I prefer not writing utility methods in my unit tests, which means a lot of repetition, but IMO it's a lot better than having to refactor that utility method when a new requirement comes through. The downside is a lot of touchpoints to update if a core functionality changes. THe LLM does a good job of intelligently repeating my change to the mock against 50 different tests. Another use case is code review, it does a decent first-pass of my changes and identifies the occasional logic failure. Finally, I've used it to summarise postmortems at scale using the Datadog MCP.

But why does the thought of this make me sick? It's vertigo. I'm nauseated at this whole pandora's box we've opened.

I'm anxious about how heavily our tokens are subsidised. Our employers are funding our usage, which is itself discounted by Anthropic et al. What happens when they finally decide to take a profit? Will Claude go the way of AirBnB and Uber? Saturate the market until there's a dependency/no competition (while operating at a loss) and then strike by raising prices? We'll have very little choice in the matter if we are truly dependent on this technology. Coding used to be a skill we could train, and then make a living from that experience. The capitalists have found yet another way monetise something that was once freely available. And they call it "democratising" the skill. Once they pull the rug on us, will programming tutorials still exist? Could the next generation learn programming for free like we could? I fear for them, and for us.

What's going to happen to the quality of our products? In my opinion, too many orgs are comfortable releasing buggy code in the name of "agile" or whatever, because they're not constrained by the old physical distribution models. Many apps are online-only, if you've got a bug, it's an automated deployment away from fixing, or an OTA app update. Perhaps this is a problem for web companies, I have no idea what it's like working on desktop products. A company can be thought of as a collection of individuals who each understand a fraction of how the organisation works, and they all work together to hopefully form a functional whole. What happens when your engineers are vibe coding, your non-engineering staff are generating their reports, their communications, and even offloading their decision making to Anthropic? It's like we've decided knowledge gaps are suddenly okay? Those fractions start to dissapear until you no longer have a functioning org (unless you pay the masters).

It's also the environmental impacts. I feel like it's not clear exactly what the environmental impact of this technology is.. how much electricity we need, how much land we need for datacentres, water usage, chip shortage... it's dizzying. What's more is the information we do have is likely understated and I'm almost certain the truth is being suppressed. Why wouldn't it be? There's billions of dollars at stake. Nobody reading this will ever see that kind of money in their lifetime. And if you do, stop sitting idle and do something about it! In my whole 29 years I've never felt more dread about the future than now. Even though I'm pretty sure I'll be okay, there are billions of people who will be worse off.

How can these sycophants on linkedin continue brown nosing these megacorps? I'm watching a train wreck in slow motion and the tech bros are cheering. The tech bros who, by the way, give off energy that they're somehow peers with Altman etc. It's insanity. Mass hysteria.

I'm chicken little and the sky is falling. But the farm animals are cheering.

By the way I'm in good mental health and have no suicidal thoughts whatsoever.


https://www.vatican.va/content/leo-xiv/en/encyclicals/documents/20260515-magnifica-humanitas.html

https://www.amnesty.org/en/documents/pol40/0996/2026/en/

"HUMAN RIGHTS INCOMPATIBILITY OF CURRENT GENERATIVE AI SYSTEMS BASED ON DATA PIPELINE"

- Generative AI is trained using web-scraped data, which inevitably contains personal information, which means that AI companies are collecting and organising personal information without consent or knowledge of the individual. They have _your_ personal information.


VOCABULARY: **AI Psychosis**

---

> inspired by maria's rant

On the topic of "AI mandates" where companies aim for "95% AI adoption". I'm not sure what the leadership expects from this. Seems like part of the AI psychosis is FOMO—leaders think that the business is ignoring a huge productivity opportunity, therefore everyone should jump on this new technology. I can only interpret the vision of massive productivity boost is as pure speculation (at least any sort of productivity boost which justifies the costs of licences).

"Just try it", "engage with it and see what it does", these platitudes make it painfully clear that leaders don't understand what technology they're pushing onto their employees. If I had to guess, the angle is that LLMs are a natural-language interface to a generalisable automation tool—by now we've all seen how quickly it can do everything from drafting documents and writing passable code to triaging bug reports and customer support tickets. We've seen the evangelists on LinkedIn boast about their OpenClaw stacks which book flights and accomodation on their behalf. It's no wonder leaders want "in", because organisations have been motivated to automate difficult tasks for a long time. Deputy is a product that does exactly that—it automates the tedium of timesheets, rostering, and payroll. But leaders, please understand this: the difference between a product like Deputy and your IC in the Customer Support team is that Deputy has an entire engineering team keeping things running. No matter how hard you wish otherwise, any tool you create will require ongoing upkeep, you will not get a specialised tool which can 10x your productivity for free.

Let's say, hypothetically, you _do_ find some use case which shows modest improvement in productivity, and you want to squeeze more utility out of it. Now a human has to go and write contexts, evals, monitor failure rates, set up cost and latency controls, figure out where the human-in-the-loop gates are... you are taking on an engineering project. Then there's risk management: models are trained on data selected by biased individuals, how do you _know_ that your "customer support triage agent" (an example) is not discriminating against customers based on race, language, location, or topic?

My advice for leaders: if you want to pursue productivity gains, you actually need to build a _product team_ around the problem. A product team will have the responsibility of figuring out _what_ to automate, restructure, change, and build. They'll figure out _how_ LLMs can help your organisation. Select this team with deliberation, because your existing team won't always want a role change.

Leaders pushing "adoption" of AI instead of "impact" using AI are settling for second-best. Cowork et al is table stakes; if everyone has access to this then it's not giving you a competitive advantage. Think about the specific business problems you can solve with AI, then form a team around that problem, _that's_ where how you get an edge.

----

Problems with AI mandates:

- often does not set targets against meaningful measures (95% "adoption"). People will prioritise this metric over getting their job done on-time and with high-quality.
- if you want LLMs used as a generalised tool (as-is Cowork, Claude chat, etc), then every company has access to that, so there's no competitive advantage.
- if you want LLMs used to solve specific business problems, you're asking to take on an engineering project. Specialised tools need specialised attention.

Solutions:

- Business-oriented OKRs that reflect the ambitious productivity gain you expect. If LLMs are actually productive, then you should expect your talented employees to find ways to achieve your OKRs using them. Unless you don't trust your own staff? Oof. If you're reading this as an employee at a company and you've been mandated, sorry buddy but your leadership doesn't trust you. Hopefully that's not news.
- Lower the friction to accessing LLMs. Humans will give up easily, if it takes too long to get access to these tools, then they won't waste their time without seeing clear value upfront. If I have to do the _Okta Dance_ and then submit a software access request, wait for a human to approve it, I'm losing interest. That being said...
- Show clear value upfront. You need to pitch your product. Find a real problem that your team experiences and show them how to use LLMs to work around it.
- Be prepared to invest resources into _building a product for your specific problem_.

It's as if product businesses have forgotten how products work. Take a step back and treat it like a B2C product that you're trying to sell to your team. Create market demand (ambitious OKR), provide a solution (LLMs with easy access), and get buy-in by _showing_ them how it can solve their problem, rather than telling them that they must use it. Early adopters already exist in your team—find them and elevate their voice as social proof. A mandate is like shouting "I know better than you, especially about your own job!". You can't force someone to buy your widgets, so why force your employees to buy your tools?


