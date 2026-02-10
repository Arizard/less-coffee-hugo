---
title: "Anti-Gold-Plating Checklist"
date: 2026-02-07T19:01:00+11:00
author: Claude & Arie Oldman
draft: false
summary: How to avoid over-cooking.
---

A quick checklist to help engineers _get to simple_ when designing a product feature. AI code generation tools are lifting the burden of execution, which means engineers must be even more careful in deciding _what_ to execute on.

## Core Checklist

<div class="table-container">
<table>
    <thead>
        <tr>
            <th style="text-align: center">Category</th>
            <th style="text-align: center">Questions</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td style="text-align: center"><strong>Sufficiency Test</strong></td>
            <td>
                <ul>
                    <li>Does the basic version actually solve the problem?</li>
                    <li>Would users pay/use it without the extra polish?</li>
                    <li>Can you ship it today and add polish later based on feedback?</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td style="text-align: center"><strong>Polish vs. Core</strong></td>
            <td>
                <ul>
                    <li>Is this feature core functionality or nice-to-have UX?</li>
                    <li>Will 90% of users even notice this refinement?</li>
                    <li>Does removing this change the value proposition?</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td style="text-align: center"><strong>Timing</strong></td>
            <td>
                <ul>
                    <li>Are you polishing before validating product-market fit?</li>
                    <li>Could you be learning from users instead of perfecting in isolation?</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td style="text-align: center"><strong>Scope Creep Signals</strong></td>
            <td>
                <ul>
                    <li>Did this requirement emerge during build, not before?</li>
                    <li>Are you solving hypothetical future problems?</li>
                    <li>Is "while we're at it..." driving decisions?</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td style="text-align: center"><strong>Ego Check</strong></td>
            <td>
                <ul>
                    <li>Are you building for your portfolio or for users?</li>
                    <li>Would you be embarrassed to ship the simpler version?</li>
                    <li>Are you over-engineering because it's more fun?</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td style="text-align: center"><strong>Hard Rules</strong></td>
            <td>
                <ul>
                    <li>Ship the ugliest version that works</li>
                    <li>No edge cases until the main case is validated</li>
                    <li>No "delight" features until core problem is solved</li>
                    <li>Stop when it works, not when it's perfect</li>
                </ul>
            </td>
        </tr>
    </tbody>
</table>
</div>


## Additional Checks (Based on Experience)

Not mentioned above, but stuff I have noticed on the job.

- Do we already do this elsewhere?
- Is it sensible to build on the foundations we're proposing?
- Does it require a lot of time commitment but have comparatively _low conviction_?
- Is there a **hackier** way to achieve this in the short term?

