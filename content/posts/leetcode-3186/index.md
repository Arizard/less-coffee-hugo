---
title: "Leetcode 3186: Maximum Total Damage (in Go)"
date: 2025-10-12T21:19:00+11:00
author: Arie Oldman
draft: false
hero: hero.jpg
hero_attribution: Photo by <a href="https://unsplash.com/@rick_rothenberg?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Rick Rothenberg</a> on <a href="https://unsplash.com/photos/an-abstract-purple-background-with-a-circular-design-E4fPxFE5_gg?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
tags:
- technical
---

I failed miserably solving this medium leetcode. Then my submission finally passed. Here's what I learned plus my solution in Go.
<!--more-->

## Problem Description

Imagine you are a wizard who has a list of spells which can be cast. Each spell has a power level corresponding to the damage dealt by that spell. These power levels are represented by the `power []int` argument. For example:

```go
[]int{7, 1, 6, 6}
```

The rules of the battle state that any spell you cast disables spells which are leveled 1 and 2 levels above and 1 and 2 levels below. If you cast a spell with power `5`, then you are unable to cast spells with powers `3`, `4`, `6`, and `7`.

{{< figure src="power-invalidation.png" original=true caption="Casting a spell with power 5 prevents casting spells with power 3, 4, 6, and 7." >}}

[Click here to go to the leetcode description.](https://leetcode.com/problems/maximum-total-damage-with-spell-casting/description/)
**What is the maximum damage you can deal in the battle?**

Let's look at a simple example: `[]int{7, 1, 6, 6}`.

If you were to cast `7`, then you'd have to exclude both `6`. Then, you can only cast `1`, resulting in a total damage of `8`.

If you were to instead cast `1`, and then cast both `6`, you would have a total damage of `1 + 6 + 6 = 13`, which is the maximum possible damage with this list of spells.

It seems difficult to solve at first because each spell you cast affects future options.

Let's take a look at the solution.

### Strategy Overview

Let's re-write the rules more concretely.

Given some `power []int` containing positive integers, select a set of integers that maximises the sum of that set of integers. For all possible pairs of integers `a` and `b` in the selection, **at least one** of following expressions are true:
- `a > b+2`
- `a < b-2`
- `a == b`

**Sorting, dynamic programming, and memoisation** will solve our problem, and here's why:

1. Sorting the `power` slice groups spells of the same power level into a contiguous block.

    Casting any spell means the spells at the same power level should also be cast. The excluded spells will all be positioned contiguously around that spell's power group, avoiding a full `O(n)` linear search or `O(log n)` binary search.

    {{< figure src="sorting-power.png" caption="Sorting groups constrained spells together." original=true >}}

3. For each spell, we can either cast it or skip it. Casting a spell will limit our options for the next cast.

     We won't know whether we have found the maximum possible damage until we've checked every spell in the list. We need to use **recursion** to perform depth-first enumeration of all possible combinations.

     Every sorted slice of spells has exactly one maximum damage value.
4. Recursion can quickly result in `O(2^n)` time complexity if we're not careful. We need to [memoise](https://en.wikipedia.org/wiki/Memoization#Overview) the recursive function. If we already know the maximum damage for any subset of the spells, then we need not recurse that subset twice.

### Pseudocode Solution

First, sort the slice and consider both options for the first spell `1`:

- Cast `1`
- Skip `1`

```
power = [7 1 6 6]
power (sorted) = [1 6 6 7]

mtd([1 6 6 7]):
    cast 1s:
        1, 2, and 3 now unusable
        1 + mtd([6 6 7]) = 1 + 12 = 13
    skip 1s:
        1 is unusable
        0 + mtd([6 6 7]) = 0 + 12 = 12

    cast 1s > skip 1s, return 13
```

Now, we have an overlapping sub-problem: what's the maximum total damage of `[6 6 7]` i.e. `mtd([6 6 7])`?

Again, consider what happens if we cast or skip the `6s`. We should always cast duplicate powers because we know equal powers aren't invalidated by each other.

```
mtd([6 6 7]):
    cast 6s:
        6, 7, and 8 now unusable
        6 + 6 + mtd([]) = 12 + 0 = 12
    skip 6s
        6 is unusable
        0 + mtd([7]) = 0 + 7 = 7

    cast 6s > skip 6s, return 12
```

We can easily terminate the recursion at `mtd([])` because the maximum total damage with no spells is always `0`.

```
mtd([]):
    return 0 (no spells)
```

Now we can evaluate the overlapping sub-problem `mtd([7])`:

```
mtd([7]):
    cast 7s:
        7, 8, and 9 now unusable
        7 + mtd([]) = 7 + 0 = 7
    skip 7s:
        7 is unusable
        0 + mtd([]) = 0 + 0 = 0

    cast 7s > skip 7s, return 7
```

Notice that we had to evaluate `mtd([])` thrice and `mtd([6 6 7])` twice? For memoisation, we would have the following cache:

```
mtd([])        = 0
mtd([7])       = 7
mtd([6 6 7])   = 12
mtd([1 6 6 7]) = 13
```

Next, we'll look at how I implemented this in Go.

## Solution (in Go)

Get the boilerplate out of the way: we'll need to import the `slices` package for sorting and implement the `maximumTotalDamage` function as a wrapper to set up our recursion.

```go
import (
	"slices"
)

var cache []int64

func maximumTotalDamage(power []int) int64 {
	cache = make([]int64, len(power))
	slices.Sort(power)

	return mtd(power, 0)
}
```

I've initialised a `cache` which will help with memoisation, and sorted the `power` slice in-place.

The `cache` has the type `[]int64`. More on how I'll use that later.

The sorting happens in-place to avoid over-using memory due to re-allocation of large slices. Leetcode tested me with a test case containing millions of integers.

Next, the recursive `mtd` function.

```go
// mtd takes a sorted (ascending) `power` slice and an integer index `start`
func mtd(power []int, start int) int64 {
	if !(start < len(power)) { // no spells, no damage
		return 0
	}

	// `power` never changes, any recursion with `start = 5` will always
	// have the same result, regardless of which branch it came from.
	cacheKey := start
	if r := cache[cacheKey]; r > 0 {
		return r
	}

	dCast := int64(0) // damage if we choose to cast
	tailSkipStart := 0 // the idx of the next spell if we skip this one
	tailCastStart := 0 // the idx of the next spell if we cast this one
	for i := start; i < len(power); i++ {
		d := power[i]
		if d == power[start] { // spells with power same as power[start]
			dCast = dCast + int64(d)
			tailSkipStart = i + 1
			tailCastStart = i + 1
		} else if d <= power[start]+2 { // spells excluded by casting power[start]
			tailCastStart = i + 1
		} else {
			break // stops looping when we have tailCastStart
		}
	}

	// add dCast to the max. total damage of the remaining spells
	dCast = dCast + mtd(power, tailCastStart)

	// dSkip is the max. total damage of the remaining spells,
	// including spells which casting would have made invalid.
	dSkip := mtd(power, tailSkipStart)


	// now return the biggest number.
	if dCast > dSkip {
		cache[cacheKey] = dCast
		return dCast
	}
	cache[cacheKey] = dSkip
	return dSkip
}
```

Go ahead, rip it to shreds. I can take it.

## Key Learnings

### Identify overlapping sub-problems

Casting a spell excludes itself and some other spells from the set of available spells. **When one step of your solution leaves behind a subset of the original input it's a strong signal for an overlapping sub-problem**. 

> Dynamic programming is an algorithmic optimization technique that breaks down a complicated problem into smaller overlapping sub-problems in a recursive manner and uses solutions to the sub-problems to construct a solution to the original problem.
>
> https://algo.monster/problems/dynamic_programming_intro

### Sorting can make things easier

Sorting the input exposes new approaches. It preserves important information (each spell's power) while making it easier to apply the constraint. The excluded spells will always be contiguous in the sorted array, and will be immediately following the current spell if present. This significantly reduces the time complexity and prevents timeout.

### Explore special cases

Exploring special cases can reveal useful information. For example: spells with the same damage can always be used together.

If we are maximising the total damage, intuition tells us that if one spell is used and duplicate values are always usable, then the maximum total damage for a cast that includes that spell must also use all of that spell’s duplicates.

You *could* take all duplicates, therefore you *should* take all duplicates, because the constraint allows it.

### Memoisation can be done without hashing

Dynamic programming problems almost always require memoisation. For this problem, think about what happens when you skip a spell--it may still be able to get cast in future. Many branches of your recursive algorithm may try to follow this “path” involving this spell, but it was already calculated before!

For very big `power` arrays, the sorted power array also assists with memoisation. Hashing the array at each step is not needed for a cache key, instead we keep track of where the current subset occurs in the original array (since we know that the subset is contiguous) and use that index as the cache key. In other words, given that the usable spells begins at some index `i`, all recursion calls which are passed the subset beginning at `i` will have the same result.

### Filtering wasn't needed

Spells are sorted and constraints are range-based. We only need to update the slice index to point to the _next_ valid spell.

### Don't waste iterations

I was hit with Time Limit Exceeded after Time Limit Exceeded because I accidentally iterated over the entire input array each recursion, even though **I could stop iterating once I had found the next cast-able spell**.

### Slices using contiguous memory might be better

[Slices use contiguous memory](https://go.dev/doc/effective_go#arrays), so building a cache using a slice may be a bit better than using a map.

## Conclusion

I struggled for 2 hours before giving up and looking up a solution, then spent another 2 hours struggling to implement it myself. If I were asked this in an interview, I would definitely bomb. I'm glad I took the time to figure it out, because I learned something along the way--I hope you did too, by reading this article.

If you found this interesting, or want to criticise my coding, leave a comment! I read every one.
