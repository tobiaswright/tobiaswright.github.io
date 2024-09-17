---
layout: '../../layouts/Layout.astro'
title: 'Set Composition in Javascript'
pubDate: 2024-05-19
description: 'All about Set Composition'
author: 'Tobias Wright'
image:
    url: 'https://docs.astro.build/assets/full-logo-light.png'
    alt: 'The full Astro logo.'
tags: ["javascript"]
---

## Set Composition in Javascript

Learned about Set composition today. Now I’m just looking for the problem this will solve.

In JavaScript, the Set is a built-in object that allows you to store unique values of any type, whether they are primitive values or object references. Here are the key points about Sets:

- **Uniqueness**: A value in a Set can only occur once; it is unique within the Set’s collection.
- **Insertion Order**: You can iterate through the elements of a Set in insertion order.
- **Value Equality**: The equality comparison for values in a Set is based on the SameValueZero algorithm.

This means that NaN is considered the same as NaN, and all other values are compared using the semantics of the === operator.

Plus it has a lot of great methods. I’ve really seen it mostly used to remove duplicates from an array like so.

What is new to me is Set composition, right from the MDN site

<img src="/images/set-composition-methods.png" />

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set">Read all about Sets</a>
