---
layout: '../../layouts/Layout.astro'
title: 'How-to: Change the font inline in tailwind'
pubDate: 2024-09-22
description: 'Change that font'
author: 'Tobias Wright'
tags: ["tailwind", "css"]
---
## How to: How to set a custom font with tailwind

With [tailwind](https://tailwindcss.com/) it’s pretty easy to set the size of type, but the tailwind default font defaults to the generic serif and sans fonts. In tailwind you can set up for example, [google font](https://fonts.google.com/), through the config. There is also a way to do it inline.

First import the font in the head as usual.

Next, where you need to font to appear you can use a snippet like the one below. Change the font name to the one you imported.

With this import, I'm importing the Banger font and comic Neue, the fonts I use on this site. Not that for fonts two or more words, you'll need to add replace the space with an underscore

```html
    <h1 class="font-['Bangers'] text-4xl">This is my text!</h1>
    <h2 class="font-['Comic_Neue'] text-1xl">I'm text too!</h2>
```

Which will generate this:

<h1 class="font-['Bangers'] text-4xl">This is my text!</h1>
<h2 class="font-['Comic_Neue'] text-1xl">I'm text too!</h2>

