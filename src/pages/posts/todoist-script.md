---
layout: '../../layouts/Layout.astro'
title: 'DEM0: Respawn task in Todoist by label'
pubDate: 2024-10-06
description: 'Let me introduce ToRedo'
author: 'Tobias Wright'
tags: ["todoist", "javascript","browser-extention", "demo", "SPIKE", "ReTodo"]
---
## DEM0: Respawn task in Todoist by label

#### What it is?

Intrducing ToRedo. This is the a javascript script that will "respawn" a closed task in [Todoist](https://www.todoist.com). It is a vanilla .js file that has to be run manually.

#### Where can I get it?
[Right here](https://gist.github.com/tobiaswright/82e398e155251fb127f3cbacc8041a10)

#### What's it do?

This script takes the last thirty completed task, filters by label, and creates new tasks with all the same attributes.

#### Why do I need it?

This is for long ongoing task. For example if you have a task to read "A Game Of Thrones", but progress is not tied to a date. You can create a new task under it's parent: "Read Next Chapter", and add a "respawn" label. WhenEVER you complete that chapter, you can complete it, and the next time you run the script, will create a brand new "Read Next Chapter" task with all the same atrributes (including the "respawn" label)

#### How do I run it?

I've posted as a [gist](https://gist.github.com/tobiaswright/82e398e155251fb127f3cbacc8041a10), you'll need to supply you Todoist API Key and the label to filter by. It can  be run in your browser.

#### What's the back story?

I had a problem.

I use [Todoist](https://www.todoist.com) for productivity and for the most part it check most needs. The Todoist team has been doing a pretty good job lately of building out features that people have been asking for. For me though, I think my brain is wired to use a less feature-rich Todoist and don't use a lot of the new features.

The one feature I've recently been wanting though is a respawn feature, but not by due date, but as a next action. Due dates work okay, but I find myself having to advance these "Next Action" to a new date if I don't get it on the due day. It also leave my due dates for things that are actually tied to a date. Also, it's a bit of a bummer, and becomes a list of things I didn't het to that day.

My first version was a js script I ran from VS Code. I'd add task by ID manually, and run the script manually everyday. I was using the Todoist API.

My second version, I looked at the extentions in the Todoist Library. I should have started here. I'm a big fan of finding someone else who has solved my problem first. No one fit the bill.

Next, I tired [IFTTT](https://ifttt.com/explore), again, almost, but no cigar. I find IFTTT a little clumsy, but it's definitly a nice little automation tool.

I return to the script solution, which is where  I landed. I moved from using the API to Todoist's Sync API. My only gript with the API is that it takes me a couple more calls to the API then I'd like to get the label information thay I'm filter by.

At some point I'll drop this behing a web page or create an extension.