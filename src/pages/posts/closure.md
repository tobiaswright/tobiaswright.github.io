---
layout: '../../layouts/Layout.astro'
title: 'Closure in javascript'
pubDate: 2024-11-01
description: 'Closures are cool'
author: 'Tobias Wright'
tags: ["closure", "javascript"]
---

## Closure in Javascript

Closure in javascript is kinda like gravity. It’s this big defining thing that effects everything, and because it’s going to work like it’s going to work it’s easier to know what we can’t do (fly un-aided) versus what we can do (slingshot around the sun and go back in time like in Star Trek IV, The Voyage Home) so let’s talk about closures.

Let’s start with a definition:

[A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment)](https://dev.to/catwebdev/understanding-closure-in-javascript-3akg).

In other words, a function retains the knowledge of it’s outer scope, so doesn’t break when or where the function is run.

### But why?

The above definition gets you the job. Knowing why makes you cool.

1. Those module things in ES6 and node? Closure is what makes your api still work even though it most likely uses variable created in the module
2.	In functions when returning a function, with closures, it makes variables declared in the initial function private. 
3.	Currying functions, Memorization and Functional programming are all on the table.

I'm creating an npm using the pinboard.in api Here's a simpified pseudo snippet of how I approached it originally

```javascript
let update = "https://api.pinboard.in/v1/posts/update";
let delete_post = "https://api.pinboard.in/v1/posts/delete";
let add = "https://api.pinboard.in/v1/posts/add";

async function getAPIData( reqURL, reqOptions = {}) {

    const defualtRequestOptions = {
        method: "GET",
        redirect: "follow"
    }

    let options = { ...defualtRequestOptions, ...reqOptions }

    try {
        let response = await fetch( reqURL, options);
        return response
    } catch (error) {
        console.error("error:" + error);
    }
}

let data = await getAPIData(update);
let delete = await getAPIData(delete_post);
let add = await getAPIData( add, {method: "POST"})
```

Here's the same code with a dash of intentional closure ( ...because the above snippet uses closure!)


```javascript
let update = "https://api.pinboard.in/v1/posts/update";
let delete_post = "https://api.pinboard.in/v1/posts/delete";
let add = "https://api.pinboard.in/v1/posts/add";

function setEndpoint( url ) {
    const defualtRequestOptions = {
        method: "GET",
        redirect: "follow"
    }

    // Here is the function we are returnig. the variable
    // url and the variable defualtRequestOptions will be enclosed
    // in the returned function
    async function getRequestOptions( parameterRequestOptions = {} ) {
        const options = {...defualtRequestOptions, ...parameterRequestOptions}

        try {
            let response = await fetch( url, options);
            return response
        } catch (error) {
            console.error("error:" + error);
        }
    }
    return getRequestOptions
}

let getAPIUpdayeData = setEndpoint( update );
let deleteAPIData = setEndpoint( delete_post );
let addAPIData = setEndpoint( add )

let data = await getAPIUpdayeData();
let delete = await deleteAPIData();
let add = await addAPIData({method: "POST"})
```
A litte more verbose and works the same! So use closure.