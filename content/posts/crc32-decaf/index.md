---
title: "Implementing CRC-32 in Decaf"
subtitle: "The challenge of implementing bitwise arithmetic in a high-level language without bitwise abstractions."
date: 2021-01-30T19:24:38+11:00
author: Arie Oldman
keywords: ["Arie Oldman", "dexml", "decaf", "deputy", "php", "scripting language"]
draft: false
featured: false
---

CRC-32 is a used to detect data corruption during a transmission -- one example is the use of CRC-32 to provide a CRC hash to the [Frame Check Sequence](https://en.wikipedia.org/wiki/Frame_check_sequence) in Ethernet transmissions.

It is a straightforward algorithm to implement in most languages, and code samples can be easily found online.

The challenge is to implement in a high-level language which does not come with bitwise abstractions!

You may ask, why would I spend time implementing something like this, writing an article to go with it, all in a language nobody will ever use or even hear of? The answer is because I can[^reason]. What are you, the reader, going to do? Call the software police? Call my _boss_? Not likely.

## What is Decaf (DeXML)?

Decaf is a language that is visually similar to [CoffeeScript](https://coffeescript.org), however it is vastly different under the hood. It's actually a scripting language which is executed inside a PHP context. It's how Deputy is able to deliver customer implementations of the product at a high velocity.

Decaf has no `import`, `require` or `include`. There are no custom data types, developers are limited to `number`, `string`, `array` (actually PHP associative arrays), `boolean` and `null`. In Decaf, you cannot pass functions as arguments, so that means no callbacks. You cannot define functions while inside the scope of another function. Most importantly for the following challenge, **Decaf has no bitwise operators**.

The reason for these limitations is that Decaf is first transpiled into XML (or DeXML as it is known within the company). So really, the PHP application is reading XML to execute a series of commands -- this is in contrast to other languages which actually get compiled.

Is it possible to implement a CRC-32 algorithm in Decaf, despite all the limitations of the language? Of course! In the spirit of _Deputy CX Engineering_, some workarounds are required. Read on to find out how.

## Work Around The Limitations

We're going to need some way of converting between an array of bits and base-10 integers.

First, let's build a function which converts integers to binary. The function should take an integer argument and return an array of bits. Each bit is the integer `0` or `1`.

The following function will iterate over each "column" of the binary number (1s, 2s, 4s, 8s etc) and determine whether the column should be `1` or `0`.

First take modulo of the input value and 2 -- this will either be a `0` or `1`. Save this value into the array of bits, in the current position. Finally, subtract the value from the input. Repeat.

_We have assumed we are dealing with 32 bit numbers._

```coffeescript
intToBinary = (intA) ->
  arrBit = []
  intLength = 32
  intIndex = 0

  while intIndex < intLength
    arrBit[intIndex] = 0

    if intA > 0
      intMod = intA % 2
      arrBit[intIndex] = intMod
      intA = (intA - intMod) / 2

    intIndex = intIndex + 1

  arrOut = []
  for intBit in sort({var: arrBit, with: "reverse"})
    arrOut[length({var: arrOut})] = intBit

  return arrOut
```

To write a function which converts binary back into integer, iterate through each column of the binary number, evaluate the expression `b * 2^p`, where `b` is the value in the current position, and `2^p` is the place value (or position) of the bit. This means that the value `p` is actually equal to `log_2(2^p)`. When we loop through the array of bits, `p` initially is `len(bits) - 1` and is finally `0` when the loop completes.

To simplify: Set `p` to be `len(bits) - 1` and then decrement `p` at the end of the loop.

To calculate the base-10 value, sum the expression `b * 2^p` for every value of `b` in `bits` with the corresponding place value `2^p`.

```coffeescript
binaryToInt = (arrBit) ->
  intInt = 0
  intPower = length({var: arrBit}) - 1
  for intBit in arrBit
    intInt = intInt + math({op: "pow", arg1: 2, arg2: intPower}) * intBit
    intPower = intPower - 1

  return intInt

```

## Algorithm Summary

With the workarounds in place, let's get on with the crc32 implementation.

1. Start by generating the _lookup table_ (or _fast table_).
    * Create an array of length 256 to store the _table_.
    * Iterate over each element of the _table_ and note the _index_.
        * Perform logical right shift on the _index_ to get _right shifted index_.
        * (In binary) if the value of the 1s column in the _index_ is 1:
        * Then, perform logical XOR on the _right shifted index_ with the magic value `0xEDB88320` to get the _XORed index_.
        * Update the current element of _table_ with the _XORed index_.
    * Return the filled the 256-element _table_.
    * **Notice that the result of this is constant! It only needs to be generated once. Or not at all, as long as you can find a it on the internet.**
2. Take the _input_ as a string of 8-bit symbols.
3. Set the _crc value_ as 0.
4. For each _symbol_ in the _input_
    * Truncate (mask) the _crc value_ by setting the upper 24 bits to 0 (just like the inverse of a `/8`, if you have a computer networks background).
    * Logical XOR the _symbol_ with the truncated _crc value_.
    * Use this value as the index in the _lookup table_. Get the value.
    * Right shift the original _crc value_ by 8 bits.
    * Set the _crc value_ to be the logical XOR of the _lookup table_ value and the right-shifted original _crc value_.
    * **This way, each _symbol_ changes the _crc value_.**
5. Once all symbols are processed from _input_, return the logical NOT of the _crc value_

Phew! If you're confused at this point, so am I. Stay with me, code samples up next.

### Wait, what's with this "magic value" 0xEDB88320?

The value 0xEDB88320 is actually hexadecimal value for a _generator polynomial_ which was mathematically determined[^determined] to optimise error detection, compatibility with hardware, and performance during calculation of the CRC-32 checksum. 

The procedure above where the _lookup table_ is generated is actually mathematically equivalent taking a polynomial function `g(x)` and calculating the each element of the array as `g(current index)`.

The "magic value" is a way to store this polynomial as a constant, and then generate the values for the _lookup table_ using a set of bitwise operations.

## Implemented in Decaf

Here's the main `crc32` function (with the _lookup table_ truncated for brevity):

```coffeescript
crc32 = (strData) ->
  arrFastTable = [
    0, 1996959894, 3993919788, 
    # ... 250 values omitted ...  
    3272380065, 1510334235, 755167117
  ]

  arrBitZero = intToBinary({intA: 0})
  arrBit24Zeros = [
    0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,
    1,1,1,1,1,1,1,1,
  ]

  arrCRCBit = logicalNot({arrBitA: arrBitZero})
  arrOrd = []
  intLength = length({var: strData})
  intIndex = 0
  while intIndex < intLength
    strChar = string({function: "substr", input: strData, arg1: intIndex, arg2: 1})
    strOrd = string({function: "ord", input: strChar})
    arrOrd[intIndex] = strOrd
    intIndex = intIndex + 1

  for intOrd in arrOrd
    arrOrdBit = intToBinary({intA: intOrd})
    arrCRCBitTruncated = logicalAnd({arrBitA: arrCRCBit, arrBitB: arrBit24Zeros})
    arrCRCXOROrd = logicalXOR({arrBitA: arrOrdBit, arrBitB: arrCRCBitTruncated})
    intCRCXOROrd = binaryToInt({arrBit: arrCRCXOROrd})
    intFastTableValue = arrFastTable[intCRCXOROrd]
    arrFastTableValue = intToBinary({intA: intFastTableValue})
    arrCRCRightShift8 = logicalRightShift({arrBit: arrCRCBit, intShift: 8})
    arrCRCBit = logicalXOR({arrBitA: arrFastTableValue, arrBitB: arrCRCRightShift8})

  arrCRCBit = logicalNot({arrBitA: arrCRCBit})

  return binaryToHex({arrBit: arrCRCBit})
```

You might notice that in order to process integers in binary, they are converted
to arrays of bits. All the "logical" functions will operate on arrays of bits.

* This maintains the correct length for each value.
* This also avoids constant conversion between binary and base-10.

Yes, I also wrote a bunch of bitwise abstractions to go with this, and make the code a bit easier to follow. Will anyone ever need these abstractions? Maybe, for IP addresses or something. If you know any applications of bitwise operations which apply to workforce management, then leave a comment.

### Validation

The following table shows a few validations of crc32.coffee, which has been compared against [crc32.online](https://crc32.online/) which uses the same _magic value_.

| Input | crc32.online | crc32.coffee |
|---|---|---|
|Hello World|4a17b156|4a17b156|
|Arie is epic|def989f5|def989f5|
|[The script of Bee Movie](https://web.njit.edu/~cm395/theBeeMovieScript/)|1ec6c44a (instant)| timeout :( |

This is super slow (>1s)! It has to perform a lot of looping and string splitting. For this reason, it was never used in production.

Still, I had a lot of fun solving this puzzle. Sometimes you just have to do things to see if it's possible.

## Appendix A

**Explanation of each function**

* `crc32(strData)`
  * generate a CRC32 hexadecimal string using input string `strData`.
* `makeFastTable()`
  * generate the polynomial lookup table (256 element array).
  * only need to execute this once, manually - the lookup table is constant. I copied the result inside `crc32` as a constant.
* `intToBinary(intA)`
  * convert integer to an array of bits (integer 0 or 1).
* `binaryToInt(arrBit)`
  * convert array of bits into integer.
* `logicalRightShift(arrBit, intShift)`
  * perform a bitwise right-shift operation on an array of bits `arrBit` by the amount `intShift`.
* `logicalAnd(arrBitA, arrBitB)`
  * perform bitwise AND operation using `arrBitA` and `arrBitB`.
* `logicalXOR(arrBitA, arrBitB)`
  * perform bitwise XOR (exclusive-OR) operation using `arrBitA` and `arrBitB`.
* `logicalNot(arrBitA)`
  * perform bitwise NOT on `arrBitA`.
* `binaryToHex(arrBit)`
  * convert array of bits into hexadecimal number (stored as string).


## Appendix B

**Source code for crc32.coffee**

[View crc32.coffee here](crc32.coffee)

## References

* [CRC-32 (OSDev Wiki)](https://wiki.osdev.org/CRC32)
* [Cyclic Redundancy Check](https://en.wikipedia.org/wiki/Cyclic_redundancy_check)

[^reason]: The original reason for creating this in Decaf was that I needed to hash some environment variable names because the database field only accepted 32 characters. At the time, there was a way to generate an MD5 checksum, but the implementation was broken.

[^determined]: https://en.wikipedia.org/wiki/Cyclic_redundancy_check#Designing_polynomials
