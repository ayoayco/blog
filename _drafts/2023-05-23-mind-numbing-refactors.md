---
title: "Mind-Numbing Technical Debt"
description: "A description of the blog"
category: technology
permalink: /:title/
---

As I write this, I'm waiting for a re-run of all the e2e tests for a frontend project. I fixed the obvious stuff and all the unit tests look stable. Green checks pop-up one at a time to reassure that the application behaviors are still working as expected.

I sigh in relief.

I just wrestled with modules after modules with spaghetti imports, and now my current branch has **497 files changed**.<!--more-->

While waiting for the run to finish, I have some time to breathe after this gigantic task I've taken up to myself: organize a codebase that didn't follow any style guide or rules for the structure.

Not something I wake up and look forward to do, but it is necessary when joining a project in the middle of its life and you reach a point of confidence degradation.

Okay, now the tests are done. All passed, all green checks. I just have to make sure the branch is synced with the development branch... and, *voila!* 30+ files of merge conflicts. More things to fix due to another [PR](https://thecodebytes.com/what-is-a-pr-pull-request-in-software-development/) we merged recently.

I kind of expected this. Big changes are always difficult. So in this blog I will write the reasons that make it necessarily so... (after I fix the merge conflicts and run the tests again. 🥲)

## This Could've Been Avoided, Could It?

Now that the conflicts on my branch are gone and tests are running again (🤣) -- oooh Lunch Time already?! -- Let's talk about the first reason this undertaking is such a pain in the a**les (ankles) while I eat a sandwich.

In the summer of 1985, [Back to the Future](https://en.wikipedia.org/wiki/Back_to_the_Future) hit the cinemas and became the highest-grossing film of the year. Everyone dreamed of somehow being able to fix their bad status quo by traveling to the past and maybe tweaking small details of their life. I still wasn't alive back then, but I sure still liked the movie after I watched it recently--and the core concept behind it really makes one think...

What if I was at the beginning of this project? What could have I done to prevent this codebase from giving my future self all this trouble?

The idealistic developers will say *the business requirements should have been gathered first and that should guide the technical decisions*. Sure but, being from the future, we know that business requirements will also change.

Other developers might say *just build with the recommended frameworks to keep the codebase flexible and scalable*. But, still, because we are from the future, we now know that the frameworks (and tooling) of the past didn't really mean projects will just chug on like well-oiled machines.

"Could this have been avoided?" -- That's not a simple question to answer. Business requirements and available technologies have changed and will continue to change. In fact, everything in the software development industry cannot be trusted due to their tendency to change.

Right?

Actually, no. That's not entirely true.

Let's talk about things in software development that we could always count on.

## Style Guides, Design Patterns, and Standards