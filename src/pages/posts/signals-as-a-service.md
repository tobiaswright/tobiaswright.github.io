---
layout: '../../layouts/Layout.astro'
title: 'Signals as a Service'
pubDate: 2024-09-17
description: 'Signals as a service'
author: 'Tobias Wright'
tags: ["angular", "signals"]
---

I’m a huge fan of Signals in Angular. I recently rewrote color awareness using signals and it has been an absolute joy. Awarenes color is a simple site that list the various causes and the associated colors identified with that cause. Think Yellow for deployed troops or blue for Autism.

Before I continue stanning for Signals let’s start with a ChatGPT definition:

In Angular, signals optimize state management and rendering updates within an application. A signal acts as a wrapper around a value, notifying interested consumers whenever that value changes. This allows Angular to precisely track where the state is used and its dependencies, ensuring efficient updates. Signals can contain any type of value, from simple primitives to complex data structures, and can be either writable or read-only12. By leveraging signals, developers can create more responsive and performant applications.

In my scenario, I decided to make a data service the single point of truth for the state of the display of the list. Right now there are two events that cause the list of causes to change: a button that will reverse the list and a drop down that will sort the list by color.

Here is a diagram

The two events are pretty dumb. The color dropdown passes the target color and the list order toggle executes a method.

Here is the code.

On the service side, the cause list is a computed signal that manages the two events. The service only has two exposed APIs, the computed list and a static object for the color dropdown.

In a future state, the sort button will be in another components what will have other list controls, display only cause that start with a particular letter.

Additionally, this service does two things, it prepares the data from a json file, and it manages state. It probable does one thing too many, and the data and the state should be two different services.
