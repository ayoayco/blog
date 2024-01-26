---
title: "Notes on Upgrading Mastodon"
permalink: /:title/
description: "Some gotchas I experienced upgrading my Mastodon instance"
category: technology
fedi-url: https://social.ayco.io/@ayo/111758693535566456
---

Back in December 2022, I went through the process of hosting my own [instance of Mastodon](https://social.ayco.io) which I [documented](https://fosstodon.org/@ayo/109545132022543467) as I work on it. 

But like a lot of software products out there, setting it up once is not enough... maintainers of servers in this federated social network need to upgrade every once in a while.

Here, I put some notes as I recently did it; so the future me will thank me... because the current me hates the past me for not doing so the few times I did it.

> [!Note] It's not that difficult, except for the rare times you have to jump between major & minor releases.

## Mastodon Administration 101

Here are some basic knowledge about Mastodon servers.

The [Mastodon project](https://github.com/mastodon/mastodon) is maintained in a git repository which has a git branch for each version. Hence, moving between versions (upgrading / rolling back) is just a `git checkout` run.

The Mastodon web app follows the usual decoupled backend-frontend architecture, with the backend using ruby (gems) and the frontend using javascript (node modules). Hence, we use [bundler](https://bundler.io/) and [yarn](https://yarnpkg.com/) package managers respectively.

There are three "services" or "process" that are constantly running in order for a Mastodon server to work: `mastodon-web`, `mastodon-streaming`, and `mastodon-sidekiq`.

Mastodon also provides a [CLI](https://docs.joinmastodon.org/admin/tootctl/) `tootctl` for common administration tasks.

Alright, now that we have the basics down, let's go through how to upgrade a Mastodon server.

## How to Upgrade a Mastodon server

They mostly put out [release pages](https://github.com/mastodon/mastodon/releases) with sufficient information like what is included and what are the steps you need to take to upgrade.

So because the steps might differ across releases, I will not strictly write down here the steps I took but just a general guide and some gotchas. Let's go.

First step is to determine the version you want to upgrade to in the project's [releases page](https://github.com/mastodon/mastodon/releases).

If you are going for just a few patches away, the steps in the release page is usually enough.

But if your current version is one minor version away from the version you want to upgrade to (e.g, 4.1.x going to 4.2.x), you *can* directly checkout the target version branch but it is important that you read through the first minor release page (i.e., 4.2.0 for our example). Normally, they will have an important step for migrating between minor releases. More so, if you are jumping between major versions.

If you have a small server with limited resource, running the build (or precompile) scripts might hit your memory (RAM) limits... it helps to stop the processes first--remember the three process mentioned in [Mastodon Administration 101](#mastodon-administration-101)? In my case, because I'm on Ubuntu I can use `systemctl stop` to do this.

However, note that this is going to cause a downtime which of course is not recommended if you are a bigger server with massive user base -- but if you are, you shouldn't listen to me, you know what you're doing better than me.

Sometimes, even after running the steps in their release notes and starting the three processes again, you may find that the server is not really back up.

There is a "precompile" script which may have failed but does not show any error... it is likely that a previous run failed and now the script thinks it doesn't have to do anything. Likely you hit the memory limit.

Don't worry, you are not alone. Follow the steps on this [issue comment](https://github.com/mastodon/mastodon/issues/11135#issuecomment-1331793973) if you have the same issue.

## Upgrading is Worth It

The process of self-hosting and maintaining a Mastodon (or any decentralized platform) may present different challenges, but I assure you this is the better alternative to being locked-in to proprietary solutions out there.

Every upgrade to Mastodon shows the love and hard work our community has put into this revolutionary software evidenced by the improvements that keep pouring in.

Every issue, PR, post, like, boost, and whatever interaction makes me hopeful for a more free and open web.