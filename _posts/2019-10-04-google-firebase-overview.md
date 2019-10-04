---
title: "Choosing Backend Tech in 2019 and Why I Like Google Firebase"
permalink: "/google-firebase-overview"
description: "Let's discuss what Google Firebase has to offer for app development in 2019."
keywords: ""
image: "firebase"
image-attrib: "https://firebase.google.com"
---

<span class="first-letter">R</span>cently, I've been looking into some of the latest ways we can quickly spin up a backend system for an app prototype.

I didn't really expect it to be so hard but, to my surprise, the sheer number of available options can really be overwhelming.

In this post, let's go through my considerations for choosing the backend tech for my future projects and why I eventually chose Google Firebase.<!--more-->

## My Considerations for Choosing the Backend Tech For My Future Projects

I understand that not all apps will have the same requirements but since it doesn't make sense to have a monolithic architecture for most modern web projects today, I always make sure that my projects have a backend that is separate and is accessed by frontend client apps through APIs.

To guide in our decision, let's list some things we actually want our backend to have.

**1. Authentication** - We want users to easily be able to get access to our app without sacrificing security. Having integration with third-party providers is ideal especially for users who do not want to sign up to yet another system.

**2. Database** - We want a database system that is flexible in  data structures and is capable of handling real time transactions, as we expect growth in the number of active users doing huge numbers of transactions daily.

**3. Serverless Cloud Functions** - We want to save time in operations by not having to worry about setting up and maintaining servers for the backend

**4. Low Cost** - We want to be able to test and run a prototype with minimal costs. Pricing increase must also be reasonable as our usage grows in production.

As I said earlier, there are so many options available now if you want to spin up a backend server. I don't want to go through everything here so I will just classify the different backend technologies you can mix and match. But I will do that in another post.

For now, considering the requirements we listed above, I have found that though there are many options out there, one platform stands above the rest.

Let's look into why I like Google Firebase.

## Why I Like Google Firebase

I want to make it clear that I am not paid in anyway to promote Google Firebase. I am sharing this because the technology basically addresses all of the features I am looking for for my backend. Let's go through my list again and see what Firebase has to offer for each.

**1. Authentication**

In Firebase, authentication is a breeze with many (and I mean *many*) providers for logging in such as Facebook, Google, Twitter, and others.

<div class="embed-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/8sGY55yxicA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

**2. Database**

With **Cloud Firestore** as the database, flexibility and scaling is never a problem and you are always sure that your data is in sync across all your client apps --be it in mobile, web, or some server application.

<div class="embed-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/QcsAb2RR52c" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

**3. Serverless Cloud Functions**

**Cloud Functions** for Firebase let you run backend logic in response to events triggered by HTTPS requests or some other Firebase features, deployed in Google's cloud and fully managed environment. This frees us up from the responsibility of setting up, maintaining, and scaling our backend manually.

<div class="embed-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/vr0Gfvp5v1A" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

**4. Low Cost**

Lastly, I find the [Firebase pricing plans](https://firebase.google.com/pricing) are very reasonable. I am sure the free tier covers a lot of my needs, and I don't have to worry about testing prototypes. I even think *some* light-weight production apps may work with the free tier.

## Summary

Choosing technologies to build your backend in 2019 is no joke. There are a lot of options out there, and so it is absolutely necessary that you know what you want. I find that for most of my needs, Google Firebase offers awesome features... and more.

In my next post, I will go through what exactly is Firebase and some reasons why it might be a good fit for your project and some reasons why you might not want to choose it.
