---
title: 'Become a Better Programmer: Take Notes'
subtitle: 'Why we need to take notes, how it helps to develop your skills, what tools are available, and the types of things you should be documenting'
author: 'Syk Houdeib'
date: '2020-12-13'
long_date: 'December 13, 2020'
canonical: { title: '.cult by Honeypot', url: '' }
---

Developing and growing a skillset takes time, it doesn’t come overnight but with years of practice. In saying that, there are ways to improve and fast-track how you learn and grow as a programmer. Getting in the habit of taking notes and documenting, I believe, is a sure-fire way to creating immediate impact in your career as a developer.

In this article we will talk about why we need to take notes, how it helps to develop your skills, what tools are available, and the types of things you should be documenting.

## Intro

As a junior dev lacking experience, I was quickly overwhelmed by the number of things I had to keep track of. There was so much that was new and unfamiliar. And this wasn't just about code. It was much more about everything else around it; environments, deployments, git flow, commands and so much more.

It was impossible to remember and keep track of all that stuff. I often found myself needing help to get past obstacles that had little to do with my coding skills. And the worst part was realising sometimes I had been in a particular situation before and now was asking for help a second or third time as I’d forgotten the initial process!

The solution was obvious. I had to take notes and document everything that I was learning. I wish I started doing this from the very first day. So if you are a junior, heed my words: **document everything**. Take notes and organise them well.

While this article will likely benefit junior developers particularly —developers of any level or those switching to new roles will find this useful too.

**_A quick disclaimer. This article is not about how to document technical projects. This is about personal documentation and note-taking._**

## Why we need to document

There are many reasons why we should document. For example, it's evident from my anecdote above that our memories are not reliable. Especially when it comes to complex and abstract sequences that we are not familiar with. We also might be working on a new or existing project where there is limited, disorganised or simply non-existing documentation.

It's also important to document because projects are complex and have an ecosystem of tools and processes around them that you must understand and master to be able to work confidently. Whether it's a new project or an established one you will soon realise that there is a lot of complexity that goes beyond the code itself.

Whatever the need we have for documenting, the reason it’s important is it helps us organise our learning and solidify it, become more independent in a new job, avoid repeating mistakes or asking the same question twice, and improving the overall speed we can complete a task.

## How to take notes

People have vastly different learning styles. Everything here reflects my specific learning style but can serve as a foundation for all sorts of styles and methods of documenting and organising. Some people write highly detailed notes. Some prefer concise bullet points. Some people are good at taking notes while listening to explanations, others prefer to write pointers and flesh them out later. Some use blocks of text, some organise in columns and tables, while others prefer visual aids like diagrams and charts.

Whatever your style is, make sure you are aware of two things. First Don't waste time documenting in a style and with a method that doesn't work for you. You must find your notes accessible, inviting, and comfortable to use. It's no use dedicating hours writing very detailed notes if later when you need them only to find large overwhelming blocks of text staring back at you!

Secondly, do not reproduce patterns that failed you in the past. Most of us learn note-taking at some point in our formal education where we might have learnt an enforced style. If this method never worked for you in the past, it is not going to work for you now. It's easy to fall back on the method you have been shown. But it's a much better investment of your time, in the long run, to figure out what works for you. These notes are yours and only yours therefore only usefulness and legibility are the priority.

So we know why and we know how, but WHAT exactly should we document?

## What to document

**You should document anything and everything that you find useful.** There are no limits. Here's my list of some of the things I document regularly to give you some ideas.

- Document the **things you are learning**. This is the big one. And it deserves a full article of its own. But whatever things you are learning that you need a quick reference to will be useful here. Just don't rewrite MDN docs! That’s already available to you online.

- **Local development environment**. How to run the project. What port it uses, what URL, the commands you need, steps to take.

- **How deploys are done**in each one of the projects you work in. What tools are used, what commands you need, tips on how it works, troubleshooting.

- **The Git flow your team uses**. How to branch, where to develop, where to merge, how PRs work, how a release works.

- **The different environments** you have in a project. Production, pre-production, and staging for instance. What their uses are. How to point your local development at one or the other and when to do it.

- **Common commands** that you want handy and in one place. Frequent console commands, Git commands, commands you use for the project or the environments.

- **Shortcuts**. Add new keyboard shortcuts you are learning so you can refer back to them and use them often to memorise them. Like shortcuts for your IDE, OS, your Git host, and your frequently used browsers.

- **Useful data for your project** to test things. For example, valid or invalid postal codes and phone numbers for registration, test credit card numbers and any other useful information.

- **Code snippets**. Things you use often you regularly find yourself looking up.

- **Code blocks**. Larger chunks of code to document how something is done.

- **How-tos**. Things you need to do regularly that you might forget how to do. How to run a local dev environment on your phone or how to test an error in a network request for example.

- **Things you do very occasionally**. Things that you will do once when you set up your machine or clone the project and then completely forget about until a year later when you have to do it again.

- **Common debugging strategies** in your project. Have you deleted node modules before reinstalling? Have you downloaded the translation files?

- **The application you are working on itself.** What should happen when the URL is entered, What is the flow, what sequence of requests take place, what are the different use cases, diagrams, flow charts, and the like.

These are only some ideas to get you thinking. Each project and person will have their own set of needs and info to document and organise.

Now we have a good idea about the kind of things we want to document, what are the best tools and ideas we can use to get this job done?

## Tools and tips

Here are my favourite tools and tips to make note-taking easy and more enjoyable.

1. **Learn markdown**

A junior is always presented with a million things they should learn right away to succeed at programming. It can be overwhelming. But Markdown is really a base skill that will come in handy and be useful from the earliest stages of learning.

The good news is if you are familiar with the common HTML tags [learning Markdown](https://wesbos.com/mastering-markdown) is something that can be done in a few hours. Of course mastering, it takes longer. But getting enough basics to be able to use it and take advantage of it is not time-consuming. It is what every readme file is written in. It takes HTML tags and replaces them with simple symbols. For example, the h1 tag becomes #, and h2 is ##. You wrap a text with underscores to make it italic, and so on. You can even create tables and most things that can be done with HTML.

Once you are familiar with this you will be more inclined to write readmes and then once you get used to the system you can start using it for your own note-taking and documentation. It's fast, it's efficient. And best of all, you never have to leave your text editor or IDE to write or read Markdown files.

2. **Readmes**

As mentioned above, readmes are always the first port of call for documentation. Whether it's an established project you are joining or starting your own from scratch it — there should always be a readme with as much useful information as possible. And you should contribute to this as much as you can!

For your own projects make it a habit to document everything that could be potentially important or useful. Imagine someone else picking up this project in your absence — document everything they will need to be able to run it, develop, and figure out its specific idiosyncrasies. More often than not the person picking this project up will be you a few months later when you’ve totally forgotten why something is done the way it’s done or how to do that thing that seemed obvious the first time.

If it is a new project —at work or collaborating— check with the team and then take it upon yourself to add missing bits that you are encountering. If you had to ask for the command to run the project and it wasn't in a prominent place in the readme, you can add it so the next person doesn't have to ask.

Project readmes are always going to be technical, about the specifics of the project, and public for everyone who has access to the repo. Therefore, we need a more personal space to keep _our_ notes.

3. **Markdown files and notes repos**

We've learnt markdown, we use readmes for projects. Now we can take this one step further. If you are using GitHub (or any other Git hosting service) it's already the best place to store and use notes about coding. I have a repo called [My Learning Tracker](https://github.com/Syknapse/My-Learning-Tracker) where I keep track of my learning. In it, I have a directory called notebooks where I have many Markdown notes. This is where I make notes about things I'm learning, things that confuse me, things that I need to refer to often.

Anything to do with coding that I know will come in handy again is stored in my learning tracker. The best thing about having it in GitHub is that this is where I'm working most of the time and I have access to these notes whenever I need them without changing context.

4. **AFK notebooks**

Yes, I'm referring to physical notebooks made of paper. I always have one on my desk and in my bag. The best thing about them is that they give you the perfect excuse to buy pens, pencils, and other retro tools that we hardly have a need for these days. The worst thing about it, well it's not a great way to organise, fix errors, or search. So I generally prefer digital media. But it's still a useful thing to have around for short term note-taking before moving them to a more permanent place. And you can always use it for sketching and thinking about your code.

5. **Keep**

When I say “Keep” I can be referring to any number of simple note-taking tools which are similar. Personally, I ended up using Keep because I'm already working within the Google ecosystem and it’s simpler to access, use, and sync my notes.

[Keep](https://keep.google.com/) is a very simple tool. It doesn't have many bells and whistles. It allows simple note-taking. You can add a checklist. You can add a label. And you can colour code the notes. And that's the main part of it. But that simplicity is in fact it's strength. You are not going to spend any time setting up or figuring out how to organise things. You can get on with note-taking immediately. You'd be surprised how far you can get with something as simple as this. I used Keep for a long time without a hitch. It provided all I needed.

Eventually, though, your collection of notes is going to grow and you are going to need a more versatile solution, one that gives you more options and feels more permanent.

6. **Notion**

Disclaimer, I'm not sponsored by [Notion](https://www.notion.so/), but if anyone from Notion HQ reads this, you should consider sponsoring me because I preach for Notion every day!

You can tell I'm a fan of Notion. Once I picked it up and got past the short learning curve, I was hooked. It does require a little bit of time and thought into how to set it up and organise it. Notion is tremendously flexible. But it hits that mythical sweet spot. It's flexible enough to adapt to whatever you could throw at it. Yet not so flexible to overwhelm you with infinite options.

Once I came up with a basic structure of how to organise all my notes it quickly mushroomed and took over almost all my note-taking world. Everything ended up there. There was a suitable format for every use I could think of. Bullet points, checklists, tables, code snippets, images, embedded links, pages, subcategories. It can do it all.

Best of all, I use it. I have it on all my devices, and it's pretty much open by default on my browsers now. I can't tell you the number of times I went through the effort of setting up a note-taking or organisation tool, spent ages organising it, used it enthusiastically for a couple of days, and never again opened it. This one works. It's a breeze to add a quick note, a delight to add thorough and detailed documentation, and enjoyable to access and find what you need again.

## Outro

I hope you found this article useful and that it encourages you to start taking notes and documenting all those new things you are encountering. I leave you with this link of a [Notion template](https://www.notion.so/9f534bccacdd4cf288282d596c211f09?v=6268e83051a046eb94b29bae0db69c15) example of how I organise my notes to help you get started. Happy note-taking!
