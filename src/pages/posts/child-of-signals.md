---
layout: '../../layouts/Layout.astro'
title: 'I am a child of Angular signals'
pubDate: 2024-09-06
description: 'Should I even learn the old way?'
author: 'Tobias Wright'
tags: ["angular", "signals"]
---

## I am a child of Angular signals

A few years ago, I started re-learning Angular by diving into various tutorials and building projects. My biggest side project was [Awareness Color](http://awarenesscolor.com/), which I built using Angular 14.

Over the summer, after wrapping up a work project, I felt it was time to re-re-learn Angular and began with the tutorials again. If you're considering this path, I highly recommend [Maximilian Scharzmeller](https://maximilian-schwarzmueller.com/). Wow, what a difference a few versions make! I'm looking at you, signals.

Since signals were introduced in the latest version, here are some insights I gained while trying to understand them better:

1. The best and most up-to-date documentation about signals is the official [Angular documentation](https://angular.dev/guide/signals). Many articles discussing signals are based on the preview version. Some methods, notably `mutate`, were not promoted to production (it appears `compute` is the preferred alternative).

2. I realize I'll need to learn more about [observables](https://stackoverflow.com/questions/51520584/what-is-observable-observer-and-subscribe-in-angular) one day, probably sooner rather than later, as most of the people I work with are slow to upgrade. Observables are still considered the most flexible way, or so they tell me, but I am through and through a child of signals. I'll resist looking backward until my job depends on it.

3. Upgrading AwarenessColor.com from Angular 14 to 17 was not trivial. It may be because the project is a bit of a mess, but I eventually gave up and started fresh. I'm kind of glad I did, as it gave me the opportunity to revisit some data structures, apply new concepts I've learned, and switch out several architectural directives.

4. [Deborah Kurata](https://www.youtube.com/@deborah_kurata) has a good series on signals.

In conclusion, upgrade to the newest angular! Please.
