---
layout: '../../layouts/Layout.astro'
title: 'Building a Minecraft Journal with AWS, Firebase, and Email'
pubDate: 2026-10-20
description: 'Yes, this is over engineered.'
author: 'Tobias Wright'
tags: ["minecraft", "AWS", "firebase","email"]
---
##  Building a Minecraft Journal with AWS, Firebase, and Email

I started playing Minecraft a couple of years ago after watching the movie, and I haven't really stopped since.

I'd tried Minecraft before, but I never truly got it. Every time I logged in, I found myself wondering what I was supposed to do. There weren't any clear objectives, quests, or directions. Eventually, though, I realized that's exactly the point. Minecraft gives you complete freedom. You can build, explore, collect resources, automate farms, or simply wander around looking for your next project. The possibilities are practically endless.

As I spent more time in the game, I came across two pieces of advice that stuck with me:

Anytime you think of something you'd like to do in Minecraft, write it down.
Keep a Minecraft journal.

Both suggestions make a lot of sense once your world starts growing. It's easy to forget where you found a village, what materials you need for your next build, or that clever project idea you had while mining. Minecraft can quickly become a collection of unfinished ideas and half-completed projects if you don't have a way to keep track of them.

### Several Versions of a Journal

My Minecraft journal went through several incarnations.

At first, it was simply a written notebook. That worked for a while, but I found it difficult to search through old entries.

Next, I moved to my reMarkable tablet. This gave me a digital format while preserving the feel of handwriting. It was definitely an improvement, but I still found myself wanting something a little more connected and easier to access from anywhere.

Eventually, I decided I wanted a simple digital solution that was mostly free and easy to maintain. This wasn't a project that needed to scale to millions of users. It just needed to work for me.

As a software developer, that's often the most fun kind of project.

### Choosing the Technology

I knew I would probably use Firebase Realtime Database for storage.

I've always liked Firebase for small projects. The API is straightforward, setup is quick, and I didn't need to worry about managing infrastructure. For a lightweight journal application, it felt like the right choice.

The next challenge was deciding how I wanted to enter journal entries.

I considered building a custom interface immediately, but then I thought about how I actually capture ideas throughout the day. Sometimes I'm at my desk, sometimes I'm on my phone, and sometimes I'm nowhere near Minecraft.

Email seemed like the perfect input mechanism.

It's available everywhere, it requires almost no effort, and I can quickly send myself a note whenever I think of something I want to build or explore later.

That left me with one question:

How do I get an email into Firebase?

### Building the Pipeline

My first thought was to use an automation platform such as IFTTT or Zapier. Both could have solved the problem quickly.

But I'm the type of person who likes to build their own lightsaber when given the opportunity.

So I turned to AWS.

The architecture ended up being surprisingly straightforward:

1. Amazon SES receives incoming emails.
1. SES stores the raw email in an S3 bucket.
1. The S3 upload triggers an AWS Lambda function.
1. The Lambda function processes the email and extracts the journal information.
1. The processed entry is written to Firebase Realtime Database.

[https://gist.github.com/tobiaswright/e121c3bac64ff6c50f30da59783e9a7a](The Lambda function is written in Python). It parses the email content and creates a structured journal entry. In addition to the journal text itself, I store Minecraft coordinates so I can associate entries with specific locations in my world.

This allows me to keep notes such as:

> Found a village near the desert biome. Coordinates: X: 1420, Y: -350

Or:

> Need to return here with more iron and build a rail connection.

Every email becomes a searchable journal entry linked to a location in the game.

Why I Like This Approach

What I love most about this setup is how frictionless it feels.

Whenever I think of something while playing, I can simply send an email. A few moments later, that entry is stored in Firebase and available in my journal application.

There's no complex UI, no forms to fill out, and no extra software to install.

The process fits naturally into how I already work.

And honestly, that's what many personal projects should strive for. The goal isn't always to build the most sophisticated solution. Sometimes the best project is one that removes just enough friction to make a habit stick.

### The Journal Page

Once the backend was working, I built a [simple page to display the journal entries](../minecraft) and their associated coordinates.

It's not designed to be a social platform or a polished SaaS product. It's simply a tool that helps me remember what I wanted to do the next time I load into my Minecraft world.

Sometimes the most useful software is software you build for an audience of one.