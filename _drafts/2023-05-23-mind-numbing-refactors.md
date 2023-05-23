---
title: "Mind-Numbing Refactors"
description: "A description of the blog"
category: technology
permalink: /:title/
---

Currently, I'm re-running all the e2e tests we've written for a frontend project after I fixed the obvious stuff and all the unit tests look stable. Green checks pop-up one at a time to reassure that the application behaviors are still working as expected.

I sigh in relief. I just wrestled with modules after modules with spaghetti imports, and now my current branch has **497 files changed**.<!--more-->

While waiting for the run to finish, I have some time to breathe after this gigantic task I've taken up to myself: organize a codebase that didn't follow any style guide or rules for the structure. Not something I wake up and look forward to do, but it is necessary when joining a project in the middle of its life and you reach a point of confidence degradation.

Okay, now the tests are done. All passed, all green checks. I just have to make sure the branch is synced with the development branch... and, voila! More things to fix due to another [PR](https://thecodebytes.com/what-is-a-pr-pull-request-in-software-development/) we merged recently.

I kind of expected this. Big changes are always difficult, and in this blog I will write the reasons that make it so... (after I fix the merge conflicts. 🥲)

## This Could Have Been Avoided

All the serious development teams understand the necessity of having an agreement for how to work. 