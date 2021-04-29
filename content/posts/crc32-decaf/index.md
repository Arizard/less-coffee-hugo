---
title: "Implementing CRC-32 (in Decaf, so that I suffer)"
date: 2021-01-30T19:24:38+11:00
draft: true
---

CRC-32 is an extremely common hashing algorithm, usually used to detect data corruption during a transmission -- one example is the use of CRC-32 to provide a CRC hash to the [Frame Check Sequence](https://en.wikipedia.org/wiki/Frame_check_sequence) in Ethernet transmissions.

It is a straightforward algorithm to implement in most languages, and code samples can be easily found online.

## You Haven't Heard of Decaf?

Decaf is a language similar to [CoffeeScript](https://coffeescript.org), however it is vastly different under the hood. It's actually a scripting language which is executed inside a PHP context. It's how Deputy is able to deliver customer implementations of the product at a high velocity.

Decaf has no `import`, `require` or `include`. There are no custom data types, developers are limited to `number`, `string`, `array` (actually PHP associative arrays), `boolean` and `null`. In Decaf, you cannot pass functions as arguments, so that means no callbacks. You cannot define functions while inside the scope of another function. Most importantly for the following challenge, **Decaf has no bitwise operators**.

The reason for these limitations is that Decaf is first transpiled into XML (or DeXML as it is known within the company). So really, the PHP application is reading XML to execute a series of commands -- this is in contrast to other languages which actually get compiled.

Is it possible to implement a CRC-32 algorithm in Decaf, despite all the limitations of the language? Of course! In the spirit of _Deputy CX Engineering_, some workarounds are required. Read on to find out how.

## Algorithm Summary


## Start With a Readable Example

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

## Bring It All Together

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

[View crc32.coffee here]({{< relref crc32-source >}})
