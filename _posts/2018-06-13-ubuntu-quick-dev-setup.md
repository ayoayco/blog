---
title: "3 Steps How To Quickly Setup Ubuntu for Development"
permalink: "/ubuntu-dev-setup"
description: "In this post I go through how I quickly setup an Ubuntu machine for development"
keywords: ""
image: "ubuntu-dev-setup"
image-attrib: ""
---

<span class="first-letter">W</span>henever I get a new Ubuntu machine I intend to use for development, I go through so many articles around the Web just so I can install everything I need. This is because I work on several projects using different technologies.

So I decided to write this article for quickly setting up all I need on a new Ubuntu. Following these steps will enable you to quickly setup Node.js, Python, and Ruby (for Jekyll). <!--more-->

If you need instructions on how to setup the technologies separately, this article is not for you. Feel free to come back later to check for the separate posts I will be writing for Node.js, Python, and Ruby.

## 3 Steps: Quickly Setup Node.js, Python, and Ruby on Your New Ubuntu Machine



1. Open a terminal, and type the following to download the .deb installer of Node.js 8
```bash
curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
```

1. Update your repositories. The terminal may have to ask your password before it proceeds.
```bash
sudo apt-get update
```

2. Install packages for development using nodejs, ruby, and python. This may take a while to finish (depending on your Internet connection speed).
```bash
sudo apt-get install -y nodejs ruby ruby-dev build-essential dh-autoreconf make python3-pip libssl-dev libffi-dev python3-dev virtualenv python3-venv
```

When the install finishes, you now have Node.js, Python, and Ruby installed. To verify if they are successfully installed and check for each of their versions, type the following on your terminal.
```bash
# to check for Node.js version
node --version
# this will also work
node -v
```

```bash
# to check for Python version
python --version
```

```bash
# to check for Ruby version
ruby --version
```

Of course, this is not yet totally complete because I still have to setup Angular CLI next, or React.js, or other frameworks/tools. But after these 3 steps, I will have all the package management tools I need to proceed with all other setups.

## Bonus: Here's How You Can Setup Ubuntu for Jekyll Development
[Jekyll](https://jekyllrb.com) is a technology that will "Transform your plain text into static websites and blogs." It's like **blogging for hackers**, and I use it for this very blog, hosted for free on Github Pages. When all you need is a quick way to put content online, you can never go wrong with it, believe me.

I will write more about Jekyll and Github Pages later, but for now, here's how I set it up.
1. Open a text editor, then add the following two lines at the end of the file ```~/.bashrc```:
```bash
export GEM_HOME=$HOME/gems
export PATH=$HOME/gems/bin:$PATH
```

2. On your terminal, run the following to reflect the changes:
```bash
source ~/.bashrc
```

3. Then, proceed to install necessary Ruby Gems:
```bash
sudo gem update
gem install jekyll bundler
```

4. Go to jekyll project directory (if you already have one) or generate a new Jekyll, then install the dependencies:
```bash
# create new jekyll project
jekyll new my-awesome-site
# go to directory
cd my-awesome-site
# install dependencies
bundle install
```

5. After installing the dependencies, you may now start the Jekyll server:
```bash
bundle exec jekyll serve
```

Your website will be accessible at ```http://localhost:4000``` by default.


