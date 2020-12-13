# Syknapse Blog

This is my developer blog. I write about career change and front end development.

It was built with Next.js and deployed with Netlify based on [this great project](https://github.com/cassidoo/next-netlify-blog-starter) by [Cassidy Williams](https://twitter.com/cassidoo) which creates and deploys the project with a single click.

A detailed tutorial of how to build this can be found in this [tutorial blog post](https://url.netlify.com/ByVW0bCF8).

## Dev

To work on the project locally, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

### Posts

New blog posts are added to the `posts` directory in Markdown.

### Pages

New pages are added to the `pages` directory.

### Styling

Style is created with [styled-jsx](https://github.com/zeit/styled-jsx), which is included out of the box with Next.js. Because this uses Next.js 9.3, there's also built-in Sass support and CSS Module support.

The font used is [Inter](https://fonts.google.com/specimen/Inter).

### Hero images

To include an optional hero image in a post put the images in `public/static/`, and then include in the blog .md file metadata:

```
---
title: 'Post title'
author: 'Post author'
date: '2020-04-27'
hero_image: ../static/example.jpg
---
```

## Hosting

Hosted on `blog` subdomain of `sykhoudeib.com`. More info on subdomain hosting [here](https://dev.to/chiangs/host-your-projects-on-subdomains-59m3), and different repos for different subdomains on Netlify [here](https://www.freecodecamp.org/news/how-to-host-a-git-repository-on-a-subdomain-with-netlify-b8afb5fca96e/)

## Import to Markdown

### From Medium

Use [mediumexporter](https://www.npmjs.com/package/mediumexporter) to import Medium articles and transform to compatible markdown.

```bash
$ mediumexporter <medium post url> > <new-file-name>.md
```

For Example

```bash
 ~/Documents/GitHub/blog-syk-houdeib
 $ mediumexporter https://medium.com/free-code-camp/how-i-switched-careers-and-got-a-developer-job-in-10-months-a-true-story-b8895e855a8b > posts/career-switch.md
```

Further options with:

```bash
$ mediumexporter -h
```

For embeddable elements like tweets, insert an empty image `![embed]()` into the markdown, and add the embed html to the the frontmatter header. The `replaceElement()` method in `/posts/[postname].js` will find the embed image tag and replace it with the embed html.

### From others

Use [clipboard2markdown](https://euangoddard.github.io/clipboard2markdown/).  
Copy the page (not the URL) and paste to get the markdown.

From Google Docs use [docs to markdown](https://gsuite.google.com/marketplace/app/docs_to_markdown/700168918607) add-on
