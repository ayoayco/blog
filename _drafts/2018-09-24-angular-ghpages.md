---
title: "For Developers: How To Deploy Your Angular App on the Web for Free Using Github Pages"
permalink: "/deploy-angular-ghpages/"
description: "Did you know you can host your Angular App on Github Pages for free? Perfect for deploying prototypes and simple web apps"
keywords: ""
image: "ubuntu-dev-setup"
image-attrib: ""
---

Today, as a learning exercise, I deployed a very simple [Angular app on the Web](https://fullhacker.com/cartph). This setup is perfect for when you just want to deploy your web app in a production environment but does not want to invest in a full-blown paid hosting service.

Yep, this is free.<!--more-->

This is how it works:
- All the code for the app is stored in a [Github repository](https://github.com/ayoayco/myapp) which has a dedicated branch for the production build of the app.
- The web app is automatically deployed and hosted by [Github Pages](https://pages.github.com) who listens to any changes made in this dedicated production branch.

That's it!

Here are the steps to setup an Angular project that you will deploy in Github Pages.

## Create a new Angular project on your computer

Before you can dream of having an Angular app deployed on the web, you first need to create it on your local machine. Angular CLI is the perfect tool to do this, as it automatically scaffolds a very basic Angular project which you can then hack to your heart's content.

Here's how you do that:

If you don't have Node.js and NPM yet, install them first.

After installing Node.js with NPM, we need to install Angular CLI globally. Open a terminal and type in:
```bash
npm i -g @angular/cli
```

Next, we use Angular CLI to generate a new project, and then navigate inside the directory:
```bash
ng new myapp
cd myapp
```

Then, install all necessary node modules for the project. Make sure you are inside the project directory before typing in this command:
```bash
npm i
```

After installing the required node modules, you now have a fully working Angular app on your machin. To debug and see it on your browser, just run the angular-cli local server:
```bash
ng serve
```
After this, you may browse to [http://localhost:4200](http://localhost:4200) to see the basic Angular app that angular-cli scaffolded for you.


{% include image.html url="assets/images/screenshots/github/HelloMyApp.png" description="A very basic Angular app build with Angular CLI" %}

For more information on Angular CLI and how it works, read up on the documentations in [their website](https://cli.angular.io).

## Create a new repository at Github

Now that you have a working Angular project on your local machine, you need to create a new Github repository that will hold all your project's files. This repository will contain the *production branch* which will contain the build files for your deployed production app.

Here's what you need to do.

If you don't have a Github account yet, head [over there](https://github.com) and  create one now. Here's a previous post on [why every developer needs to do this anyway](/git-and-github).
{% include image.html url="assets/images/screenshots/github/Home.png" description="Github is built for developers. It's the world's leading software development platform." %}

Next, create the repository for your Angular project.

Just click the plus icon "+" in your Github dashboard, then click the "New repository" in the menu that pops up.
{% include image.html url="assets/images/screenshots/github/NewRepo.png" description="Your personal Github dashboard shows general information on your Github activities" %}

This will then lead you to a page where you need to input the details for your new Github repository. 
{% include image.html url="assets/images/screenshots/github/NewRepoDetails.png" description="The creation of a new Github repository" %}

Put the repository name you want and an optional description for the project.

Then, just leave the checkbox "Initialize this repository with a README" unchecked.

When you are satisfied with the details, click the "Create repository" button.

Now that you have created a new Github repository, we can now upload your Angular project.

Just make sure your computer is authorized to do so. :smile:

This only needs to be done once for every computer so if your Github account is not new and you already authorized your computer to push codes to your Github account, you don't need to do this now.

Here's a good [document](https://help.github.com/articles/adding-a-new-ssh-key-to-your-github-account/) on how to authorize your computer to upload to your Github account's repositories.

## Upload your Angular project to your new Github repository

Right after you create the Github repository, a page will detail some options on how to fill up the new repository with files:

{% include image.html url="assets/images/screenshots/github/UploadToRepo.png" %}

We will do the steps under the third option: **push an existing repository from the command line**

In your terminal, inside the project directory, type in the commands under the third option. It should be something like:
```bash
git remote add origin git@github.com:<username>/<repository_name>.git
git push -u master
```

After doing the commands, you may now refresh the Github repository page and find your files listed there.

{% include image.html url="assets/images/screenshots/github/RepoFiles.png" %}

With your files now up in your repository, it's now time to setup your project's Github Pages.

## Setup Github Pages for your Angular project



