---
title: "Mind-Numbing Technical Debt"
description: Wrestled with modules after modules with spaghetti imports, and now my current branch has 497 files changed
image: scaffolding
image-attrib: Ayo Ayco
image-alt: Wooden scaffolding, concrete hollow-blocks and metal brackets in a dim construction site
image-attrib-url: https://photos.app.goo.gl/nSnUH5fATXQxkq3w7
category: technology
permalink: /:title/
---

As I begin to write this, I'm waiting for a re-run of all the [end-to-end tests](https://www.browserstack.com/guide/end-to-end-testing) for a frontend project to finish.

I fixed the obvious stuff and all the unit tests look stable. Green checks pop-up one at a time to reassure that the application still behaves as expected.

I sigh in relief.

I just wrestled with modules after modules with spaghetti imports, and now my current branch has **497 files changed**.

While waiting for the run to finish, I have some time to breathe and consider this gigantic task I've taken up to myself: organize a codebase that didn't follow any style guide or rules for the structure.

It's not something I wake up and look forward to do, but it is necessary when joining a project in the middle of its life and you reach a point of confidence degradation.

Okay, now the tests are done. All passed, all green checks. I just have to make sure the branch is synced with the development branch... and, *voila!* 30+ files of merge conflicts.

More things to fix due to another [PR](https://thecodebytes.com/what-is-a-pr-pull-request-in-software-development/) we merged recently.

I kind of expected this. Big changes are always difficult.

## This Could've Been Avoided, Could It?

In the summer of 1985, [Back to the Future](https://en.wikipedia.org/wiki/Back_to_the_Future) hit the cinemas and became the highest-grossing film of the year. Everyone dreamed of somehow being able to fix their bad status quo by traveling to the past and maybe tweaking small details of their life. I still wasn't alive back then, but I sure still liked the movie after I watched it recently--and the core concept behind it really makes one think...

What if I was at the beginning of this project? What could have I done to prevent this codebase from giving my future self all this trouble?

The idealistic developers will say *the business requirements should have been gathered first and that should guide the technical decisions*. Sure but, being from the future, we know that business requirements will also change.

Other developers might say *just build with the recommended frameworks to keep the codebase flexible and scalable*. But, still, because we are from the future, we now know that the frameworks (and tooling) of the past didn't really mean projects will just chug on like well-oiled machines.

"Could this have been avoided?" -- That's not a simple question to answer. Business requirements and available technologies have changed and will continue to change.

## There Was an Attempt

It's not hard to see the attempts to remedy the situation in the history of the project. I wear my frontend detective hat, and Git provides clues about previous efforts to implement a structure apart from the humongous single directory with no organization.

However, the usual hyper-agility of enterprise software development often put inexperienced developers in this difficult spot...

Should they do it right even though it will take some additional time to research and plan the work and possibly risk the humiliation of not being able to finish the assigned task within the estimated time within this sprint?

Or should they mash everything together as fast as possible and get everyone's nod of approval?

If we *always* reward speed and not careful thinking, the result often builds up toward technical debt.

## What Now?

If you've reached the tipping point, and find you can no longer push features and fixes without getting so stressed that maybe this is the last push before everything explodes... it is probably a good time to reconsider some way of working.

Can you get some breather from the usual features and fixes to focus on reorganizing the code-base?

Is there a way to integrate a regular "health check" on the team to see how the devs are honestly feeling about the code?

I don't mind being that guy who stops the chug chug of the software development machine, if it means a more maintainable codebase for the years to come... and more sane developers.

The worst thing that could happen is you have a couple of sprints without new features.

The alternative is you've built something up to a point that it is hard to maintain and no one wants to touch it... or is even capable of touching it.