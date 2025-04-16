---
layout: '../../layouts/Layout.astro'
title: 'Setting up Auth with firebase and AngularFire'
pubDate: 2024-04-14
description: 'Settign up auth with Firebase and AngularFire'
author: 'Tobias Wright'
tags: ["angular", "angularfire", "firebase", "auth", "Howto"]
---

## Setting up Auth with firebase and AngularFire

Here’s how to set up auth in firebase with angular using  angularfire, I had to jump around to connect the dots, so this guide will save you time.

This is a set up for a single user (me), I used the Email/Password sign-in method and hard-coded authencation inside my code (I'll be the only user)

I encourage you to use this as a point of departure to learn more about setting up security rules in Firebase. Security is important and they offer tons of things so you don’t have to deal with user management.

This article assumes you have:
-	Firebase firestore set up
-	Your angular project set up with angularfire

Here are the steps:
1.	Setup authencation in the firebase console. 
<img class="mb-10 -mt-10" src="/images/auth-screenshot.png" />
2. I added myself as a user using Email/Password as the Sign-in method
3. Import and [Inject auth into your app](https://github.com/angular/angularfire/blob/main/docs/auth.md)

<div class="ml-10">

```javascript
import { Component, inject} from '@angular/core';
import { Auth } from '@angular/fire/auth';

@Component({ ... })
export class LoginComponent {
  private auth = inject(Auth);
  ...
}
```
</div>

4.	Import and send in [credentials using Email/Password as the Sign-in method](https://firebase.google.com/docs/auth/web/password-auth#sign_in_a_user_with_an_email_address_and_password)

<div class="ml-10">

```javascript
import { signInWithEmailAndPassword } from "firebase/auth";

// The auth variable here is the variable from above, you won't
// need to import getAuth.
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });

```
</div>

6. And finally here is my rules setup in firebase.
<div class="ml-10">

```javascript
rules_version = '2';

service cloud.firestore {
  match /databases/{database}/documents {
      match /{document=**} {
        allow read, write: if request.auth != null;
    }
  }
}
```

</div>