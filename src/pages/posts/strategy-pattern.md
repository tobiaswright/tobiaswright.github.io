---
layout: '../../layouts/Layout.astro'
title: 'Strategy Design Pattern in Typescript'
pubDate: 2024-08-01
description: 'Strategy Design Pattern'
author: 'Tobias Wright'
tags: ["typescript"]
---

## Design Pattern: Strategy

### Scenario
I have an old idea for a program that will send me saved bookmarks from the different bookmarking apps that I used, which at the time was bit.ly, Pocket and Pinboard (before that it was Delicious) 

I went as far as even creating a couple of NPMs of the services I was planning on using.

### Definition
Strategy Pattern could be one solution, below is the CHATgpt definition:

The Strategy Design Pattern is a behavioral design pattern that allows you to define a family of algorithms, encapsulate each one, and make them interchangeable. [This pattern enables the selection of an algorithm at runtime, allowing the behavior of an object to be changed dynamically without altering its code structure](https://www.geeksforgeeks.org/strategy-pattern-set-1/).

#### Key Components:
1.	Context: Holds a reference to a strategy object and delegates the task to it.
2.	Strategy Interface: Defines a set of methods that all concrete strategies must implement.
3.	Concrete Strategies: Implement the strategy interface, each encapsulating a specific algorithm or behavior.

#### Benefits:
- Flexibility: Easily switch between different algorithms at runtime.
- Modularity: Encapsulate behaviors in separate classes, making the system more maintainable.
- Reusability: Use the same strategy in different contexts without code duplication.

In my scenario, the concrete strategies are my different services, and leaves me open to add other services as they  become more popular, without supposedly having to touch the existing classes.

My example tightly couples the concrete strategies, but I’m sure there is a way to abstract it out.

Here are some resources I uses to help me better understand the strategy pattern:
[Strategy - Refactor Guru](https://refactoring.guru/design-patterns/strategy)
[Strategy in TypeScript - Refactor Guru](https://refactoring.guru/design-patterns/strategy/typescript/example)
[Design Patterns with Typescript: Strategy](https://medium.com/@gabriel_avila/design-patterns-with-typescript-strategy-35007cbcd57a)
[How to correctly implement strategy design pattern](https://stackoverflow.com/questions/60107761/how-to-correctly-implement-strategy-design-pattern)
