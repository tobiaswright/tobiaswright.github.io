---
layout: '../../layouts/Layout.astro'
title: 'DEMO: Waffle: Bookmarking Utility'
pubDate: 2025-10-03
description: 'Laughing Waffle is the real name'
author: 'Tobias Wright'
tags: ["pinboard", "javascript","browser-extention", "demo", "bookmarks", "serviec"]
---
## DEM0: Waffle: Bookmarking Utility

<img src="/images/waffle.png" />


#### What it is?

An app that sits on top of [Pinboard.in](https://pinboard.in/), a bookmarking service, and offers some utilities not offered in the app. It also downloads a copy of my data. The app is built in Angular.

#### What's it do?

I had a problem.

I use the bookmarking service Pinboard.in. It’s been great for being my source of truth for links, and I try to save and tag every link. Every few years, I go through all the links, prune the dead links, and rediscover links I’ve bookmarked in the past. (Something I could do with a script, but I enjoy the manual process and re-discovery by going through each link.)

I spend a lot of time on my links.

Every so often, Pinboard will come up in a discussion on [Hacker News](https://news.ycombinator.com/), and someone will complain about the lack of improvements or a long-standing maintenance issue. I do pay for Pinboard and will continue to do so if the service is provided, and I still use it. I don’t have any complaints really; it does everything it says it does.

However, that type of talk does make me twitch a little. Losing my data is a long-standing fear of using a service I don’t control. While losing my bookmarks is certainly not the end of the world, it is a problem I could fix! All I wanted was a relatively recent backup just in case Pinboard shuts down or becomes inaccessible for some reason.

#### Ideation

Here are some of the solutions I considered:

-	Downloading is something they do offer on the site, but it’s too many clicks, manual and boring. Plus why not learn something new.
-	I also thought of using AWS Lambdas, I could email myself a copy of my bookmarks, but it’s a bit boring of a solution as well. Plus, I just got my Software Architect certification and didn’t want to see AWS for a while. Plus, I’ve done it before with another project.

Finally, since I wanted to build something in angular (and angular is overkill) this solution seemed ideal, also to practice making http calls to a REST API in angular, and while I’m at it might as well make it easy to copy links for my site and for other things. So, I built Waffle.

Also, as a side quest, I got it running on my Raspberry PI, so it runs locally on raspberrypi.local on my home network. My deployment is manually, but it’s something I’ll figure out another time.
