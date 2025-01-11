---
layout: '../../layouts/Layout.astro'
title: 'My Favorite Objects Operations'
pubDate: 2025-01-11
description: 'I like objects'
author: 'Tobias Wright'
tags: ["javascript", "objects"]
---

## My Favorite Objects Operations

JavaScript is often said to treat nearly everything as an object. However, JavaScript primarily uses a prototypal inheritance model rather than classical inheritance, which has led some to argue that object-oriented programming (OOP) was not a primary focus in early JavaScript development. 

With the introduction of ECMAScript 6 (ES6) in 2015, JavaScript gained a significant enhancement in the form of the `class` keyword. This new syntax provides a more familiar, class-based approach to OOP for developers, essentially serving as syntactic sugar over JavaScript's existing prototype-based inheritance. As a result, working with objects and creating class-like structures became much more intuitive and streamlined, making the language more accessible and easier to use for developers accustomed to classical OOP languages like Java or C++.

### 5. Object.entries, Object.keys, Object.values
These methods are used to work with the properties of objects.

- **`Object.entries()`** returns an array of a given object's own enumerable property `[key, value]` pairs.

```javascript
const obj = { a: 1, b: 2, c: 3 };
console.log(Object.entries(obj)); 
// Output: [['a', 1], ['b', 2], ['c', 3]]
```

- **`Object.keys()`** returns an array of a given object's own enumerable property names.

```javascript
const obj = { a: 1, b: 2, c: 3 };
console.log(Object.keys(obj)); 
// Output: ['a', 'b', 'c']
```

- **`Object.values()`** returns an array of a given object's own enumerable property values.

```javascript
const obj = { a: 1, b: 2, c: 3 };
console.log(Object.values(obj)); 
// Output: [1, 2, 3]
```

### 4. Object Spread
The spread operator (`...`) allows you to create a new object by copying properties from another object.

```javascript
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const mergedObj = { ...obj1, ...obj2 };
console.log(mergedObj); 
// Output: { a: 1, b: 2, c: 3, d: 4 }
```

### 3. Destructuring
Destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays or properties from objects into distinct variables.

```javascript
const obj = { a: 1, b: 2, c: 3 };
const { a, b } = obj;
console.log(a, b); 
// Output: 1 2
```

### 2. Conditional Property
You can add properties to an object conditionally using the spread operator and the ternary operator.

```javascript
const condition = true;
const obj = {
  a: 1,
  ...(condition && { b: 2 })
};
console.log(obj); 
// Output: { a: 1, b: 2 }
```

### 1. Concise Methods
In ES6, you can define methods in object literals using a concise syntax.

```javascript
const obj = {
  a: 1,
  b: 2,
  sum() {
    return this.a + this.b;
  }
};
console.log(obj.sum()); 
// Output: 3
```
While javascript is not quite have all the trappings of an OOO language, like pverloading and polymophism, it's well on it's way to becoming a member in good standing amoungst other object oriented languages.
