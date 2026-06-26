---
title: "The Adaption Gap"
date: "2026-05-09T00:00:00+10:00"
author: Arie Oldman
draft: true
summary: Why human adaptability beats word-guessing.
---

AI-evangelists will attempt to convince you that LLMs are more capable than they
truly are. While the technology is impressive, it still falls well short of what
the human mind is capable of. Many limitations of LLMs—non-determinism, need for
guardrails, over-fitting, and hallucination—can be traced back to what I call
the _adaption gap_.

The term _adaption gap_ is my attempt to summarise why LLMs feel fundamentally
different to work with compared to humans.

## Your brain re-wires itself

LLMs differ from brains by the way they handle new information: brains can be
re-wired on-the-fly. This is more commonly referred to as _neuroplasticity_.

To understand neuroplasticity, it can be helpful to understand the brain's
architecture: your brain contains billions of cells called neurons, each which
communicate with thousands of other neurons via junctions called synapses. These
interconnections form a fantastically complex network of communication pathways.
The strength and efficiency of these connections determine how information is
processed. Synapses can become stronger or weaker, and new synapses can form.
The structure of your brain is actually changing in light of new
information.[^sciencenewstoday]

[^sciencenewstoday]:
    https://www.sciencenewstoday.org/what-is-neuroplasticity-how-the-brain-rewires-itself

Learning Vim rewired my brain. Initially from a VSCode background (prior to
that, Sublime Text 2) the concept of a modal text editor was completely new. For
the first two weeks, I kept a cheatsheet open in a browser tab, and referred to
it frequently so that I didn't get stuck. It was a new way to navigate and edit
source code, and checking a cheatsheet every five minutes was really slow. After
some time, using Vim felt completely natural, no cheatsheet was needed, and I
had memorised all the features that I used such that I'm not consciously
thinking about it anymore.

Teaching group fitness[^les-mills] rewired my brain. I had to learn two very
unnatural things: speaking and exercising in time to music, and reversing left
with right. At first, everything was a conscious decision—I would deliberate
over words, timings, and demonstrating movements. There was very little brain
power left for anything else, resulting in unremarkable, clunky, and monotone
delivery. However, after 1 year of teaching, it was the most natural thing in
the world. Stuff which previously hogged my brain capacity (like some
resource-hungry Electron app) now barely crossed my mind.

[^les-mills]: Specifically, Les Mills.

## LLMs are hard-wired

LLMs are stateless, pre-trained systems. In other words, they suffer from
amnesia. If you want it to reverse left and right, you have to remind it every
time, via context. By design, it does not adapt, and it does not learn. The
context might contain the history of the conversation, but that's not even close
to how the human brain works.

You can see this play out on social media. Vibe-coders will proclaim "I just
launched an app in 3 days" and "The time from idea to implementation is
astonishing". When you go and dig around for blog posts about people actually
trying to use it on an ongoing basis, you’ll find that the cost of maintenance
far outweighs the savings of the initial implementation[^meiklejohn]. The LLM
doesn't really "know" the project, it has to be reminded every time, either via
context or tools. It's as if each week you fired your engineer and hired a new
one. If you have to onboard the agent for every ticket, you will encounter
new-starter mistakes on every ticket. That's the impact of the _adaption gap_.

[^meiklejohn]:
    https://christophermeiklejohn.com/ai/zabriskie/reliability/2026/04/03/the-feature-that-has-never-worked.html#:~:text=AI%20agents%20can,the%20same%20function.

## Agents limit your learning

A hypothetical opposing argument might sound like this:

> If a human is driving the LLM (such as in the case of agentic coding) then the
> human closes the adaption gap, since they're still in control!

I disagree.

Yes, your brain adapts to new information, but said information (the source
code) is being hidden under an imperfect abstraction (the LLM). In this sense,
the human is optimising for the prompting loop (limited by the capabilities of
the LLM, which are fixed in place), rather than the engineering loop (limited by
the human brain, which grows over time).

## Conclusion

In my head-canon, neuroplasticity is the reason that learning can feel so
uncomfortable. Your brain is literally restructuring itself to adapt to new
information, like how your body physically adapts to new exercises.

Your brain runs on carbohydrates and caffeine, whereas LLM training is
unfathomably costly, just to integrate new information[^arxiv], and each
individual user probably cares about 1% of that information, or less.

[^arxiv]:
    Not many good sources, but likely close to $1bn USD to train a frontier
    model. Interestingly, not all of the cost is from compute, because it also
    costs money to label the training data. https://arxiv.org/abs/2405.21015

Humans start out as novices and optimise via persistence and repetition to
become masters (often motivated by spirit, but that's another topic). LLMs start
out as a kind of encyclopedia that you can talk to, but don't optimise for tasks
over time and are therefore fundamentally limited in their capabilities.
