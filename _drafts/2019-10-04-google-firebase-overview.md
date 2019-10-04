---
title: "Choosing a Backend Tech Stack for Apps in 2019 and an Overview of Google Firebase"
permalink: "/google-firebase-overview"
description: "Let's discuss what Google Firebas has to offer for app development in 2019."
keywords: ""
image: "firebase"
image-attrib: "https://firebase.google.com"
---

<span class="first-letter">R</span>cently, I've been looking into some of the latest ways we can quickly spin up a backend system for an app prototype.

I didn't really expect it to be so hard but, to my surprise, the sheer number of available options can really be overwhelming.

In this post, let's go through my considerations for choosing the backend teck stach for my future apps and why I eventually chose Google Firebase.<!--more-->

I understand that not all apps will have the same requirements but since it doesn't make sense to have monolithic architecture for most modern web projects today, I will just assume that my future projects will need a backend that is a separate component of the architecture being accessed by frontend client apps through APIs.

Now, to guide in our decision, let's list some things we actually want our backend to have.

**1. Authentication** - We want users to easily be able to get access to our app without sacrificing security. Having integration with 3rd party networks is ideal especially for users who do not want to sign up to yet another system.

**2. Database** - We want a database system that is flexible in  data structures and is capable of handling real time transactions, as we expect growth in the number of active users doing huge numbers of transactions daily.

**3. Serverless Cloud Functions** - We want to save time in operations by not having to worry about setting up and maintaining servers for the backend

**4. Low Cost** - We want to be able to test and run a prototype with minimal costs. Pricing increase must also be reasonable as our usage grows.

As I said earlier, there are so many options available now for us to spin up a backend server. I don't want to go through everything here so I will just classify the different backend technologies you can mix and match in another post.

Now, considering the features we listed above, I found that though there are many options out there right now, one platform stood above the rest.

## What is Google Firebase

Google Firebase, first and foremost, is a platform. You can think of it as a suite of services for all your backend needs. It offers all the basic features we listed earlier and more. It comes with SDKs, tools, helpers, and an active community to support your backend development.

We can't go through everything here, but let's go through some of the reasons why I think Google Firebase is one of the best (if not the actual best) choice right now for backend.

## Why Choose Google Firebase

Among the other choices out there right now, I decided to test out Google Firebase for several reasons. Let's go through some of them here.

### 1. Apps will be performant, secure, and easily integrated

### 2. Authentication as a service

### 3. Awesome file storage

### 4. Automatic database backups

### 5. Automatic scaling

### 6. FREE tier enough for even light production apps


## Why Not to Choose Google Firebase

Of course, despite all the sweet deals Firebase has to offer, it is not a perfect platform. Primarily I can think of three reasons why you might not want to go with Firebase for your app's backend.

### 1. It has limited SDKs

### 2. It offers limited queries

### 3. It is a NoSQL database


## Other Things to Note

Aside from the things I previously mentioned, here are some things worth knowing before choosing Google Firebase.

### 1. You don't hold your data

### 2. You will use JavaScript (JSON)

### 3. Firebase Console is constantly evolving


## Summary

So that's pretty much how we choose the backend tech stack for app development and a quite a *loooong* list of Google Firebase features.

If you are interested in more detailed posts on how to use Firebase, be sure to check back here in the coming days. I will probably write more posts about Google Firebase as I learn it.

Also, if you think there is another tech I should look into, please feel free to comment here or message me.
