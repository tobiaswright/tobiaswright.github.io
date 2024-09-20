---
layout: '../../layouts/Layout.astro'
title: 'How-to: Alternating table rows colors in tailwind.css'
pubDate: 2024-08-31
description: 'I just knew there had to be able to do alternating colored roles in tailwind.css'
author: 'Tobias Wright'
tags: ["tailwind", "css"]
---

## How-to: Alternating table rows colors in tailwind.css

It took too many clicks (two!) for me to find out how to do alternating table row colors in using tailwind.css.

Straight from the documentaton: [first, last, even and odd](https://tailwindcss.com/docs/hover-focus-and-other-states#first-last-odd-and-even):

```astro
<table>
  <!-- ... -->
  <tbody>
    {#each people as person}
      <!-- Use a white background for odd rows, and slate-50 for even rows -->
      <tr class="odd:bg-white even:bg-slate-50">
        <td>{person.name}</td>
        <td>{person.title}</td>
        <td>{person.email}</td>
      </tr>
    {/each}
  </tbody>
</table>
```

As a side note, although this is buried a bit, overall, tailwind documentation is top-notch.

**Source:**
[https://stackoverflow.com/questions/64460494/what-is-the-correct-way-to-apply-classes-dynamically-to-odd-even-rows-of-table](https://stackoverflow.com/questions/64460494/what-is-the-correct-way-to-apply-classes-dynamically-to-odd-even-rows-of-table)