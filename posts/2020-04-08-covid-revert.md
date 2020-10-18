---
title: 'Lessons We Can Learn from Git Revert in Our Fight with COVID-19'
author: 'Syk Houdeib'
date: '2020-04-08'
long_date: 'Apr 8, 2020'
hero_image: ../static/covid-revert.jfif
canonical:
  {
    title: 'FreeCodeCamp News',
    url: 'https://www.freecodecamp.org/news/what-we-can-learn-from-git-revert-in-our-fight-against-covid19/',
  }
---

In this article, I’ll discuss how a small tech team found itself in the middle of a national emergency in Spain. And what their use of git revert can teach us about dealing with COVID-19 in our personal lives.

## Intro

It was late in the afternoon of Wednesday 11th of March 2020. There were a few of us left in the office in the centre of Madrid as we got notified to take our laptops with us home today. Starting the day after we were to work remotely until further notice.

Two days earlier the government had closed all schools and universities because of the Coronavirus emergency. There was a lot of uncertainty, and things were changing at a fast pace. None of us really knew what was going to happen next.

The mood became sombre as we packed our stuff. We started making grim predictions about how long it would be before we came back. Little did we know that we were a few days away from a declaration of a nation-wide state of emergency. And that at the time of writing we are still weeks away from going back to that office in the centre of Madrid.

I want to share with you this article in two sections. The first a quick tour of how my team found itself at the centre of this national emergency. To give you an idea about how we reacted.

But in essence, I’m sharing this with you because I found a valuable lesson in that response for my personal life. And I’m hoping you too might find some value in it as we all deal with this worsening COVID-19 crisis and the changing world around us.

At the heart of all of this is a little checkbox titled “Revert”.

![Photo by [Martin Sanchez](https://unsplash.com/@martinsanchez?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/s/photos/corona?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)](https://cdn-images-1.medium.com/max/12000/1*wbMVNc7rRd2WGCs4Spg3gQ.jpeg)_Photo by [Martin Sanchez](https://unsplash.com/@martinsanchez?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/s/photos/corona?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)_

## In the eye of the hurricane

I’m a front-end developer at Lola Market. It’s a Spanish startup based in Madrid. Our business is offering a platform for online grocery shopping. Users can do their grocery shopping online from a wide selection of markets and supermarkets. Their orders then get sent to shoppers who can deliver it to their doorstep within an hour.

This has suddenly become an essential service right now. If you are reading this and you are one of the millions that are currently on lockdown because of the coronavirus I don’t need to explain to you why. But for posterity, I will. Believe it or not, this will all soon pass, and there will come a moment when it’s not as evident as it is now.

Once the Spanish government declared the state of emergency the entire country went into lockdown. People were no longer allowed to leave their homes except for essentials.

Certain groups were in total quarantine which doesn’t allow them to leave the house at all. This includes people who have any COVID-19 symptoms. Those who had contact with anyone who tested positive. Or people in high-risk groups.

In light of all this, getting shopping ordered online and delivered to the home stopped being a convenience. It was now a necessity for many people.

Lola Market, on the eve of the declaration of the state of emergency, was still a small startup. I have been there for nearly two years during which time we have seen steady and impressive growth.

We had changed offices a year ago and almost doubled in number. But we were still barely 40 people in total. The tech team is made up of 11 people, 8 of whom are developers. Our customer care team is even smaller.

The CEO only a few weeks earlier was talking about getting ready for the moment of exponential growth that we were working towards. But we had no idea that a worldwide pandemic was going to catapult us there so soon at this vertiginous speed.

## The flood

Once the state of emergency was declared, we instantly started breaking all sorts of records. We watched as the number of orders exploded.

At first, all went well. But the numbers kept growing and growing. By the second week of the lockdown, the demand had exceeded everything that could be handled.

Customer care department was overwhelmed with thousands of emails and calls. Operations were struggling as supermarkets suffered serious shortages, long lines, early closures, and a lot of restrictions. As well as not having enough shoppers to cover the demand.

And our tech infrastructure started to suffer under a pressure that wasn’t just coming from a huge increase in traffic. But also because the tools we had were being used in an atypical manner that didn’t follow what we were used to with our usual user before the emergency. The entire country was stressed and under pressure. Everyone needed to cover their essentials.

One has to count their blessings though. Personally I was grateful to be in this situation. All around me people were losing their jobs in a blink of an eye.

And it wasn’t just that we had a job to go to, it was that our job gave us the sensation that we are contributing to relief in a state of emergency. Even if it was in the smallest way possible. It gave us a purpose and made what we are doing worthwhile. And that’s more than one could ask for in a dire situation like this.

## The shift

Pretty early on, we had a meeting and our CTO told us how we needed to shift our priorities and respond to the sudden change.

We were in the middle of an important sprint finishing off the last projects of the quarter. But most of those projects were no longer a priority. The sprint needed to be suspended as we started dealing with the more urgent matters coming up.

In the first week, we needed to figure out ways to help out the rest of the team in other departments to deal with the great volume they were facing.

Even something as simple as moving a menu in an internal tool to be easily accessible could save hours of work when you are dealing with so much sudden demand. But by the second week, we had even more serious issues to deal with to be able to absorb and control the surge in demand on our infrastructure.

## The changes

Over these last few weeks, we’ve had to implement a lot of changes on the fly to deal with this ever-changing situation. Some of the things entrusted to the tech team to solve include:

- Showing dynamic and clearer information to our users about the situation and about the state of their orders.

- Simplifying and automating parts of the process of onboarding new shoppers to speed up the process and help meet the demand.

- Trying to show a more realistic availability of delivery time slots.

- Big improvements and optimisations of infrastructure, performance, customer care tools, operations tools, and the shopper app.

- Automation of many internal tasks, especially those that have become repetitive.

- Making the API load lighter.

_Disclaimer: This is a personal article and not an official statement from the company. At the time of writing, we are still in the thick of it. Some changes are already deployed. Others we are still implementing. And the situation is constantly changing._

![Photo by [Glenn Carstens-Peters](https://unsplash.com/@glenncarstenspeters?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/s/photos/checklist?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)](https://cdn-images-1.medium.com/max/8512/1*4yQ0m3Gy6vaw5OTYyImtjg.jpeg)_Photo by [Glenn Carstens-Peters](https://unsplash.com/@glenncarstenspeters?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/s/photos/checklist?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)_

## The emergency list

You can imagine that working in such circumstances is a challenge for any team, let alone a team of such a small size. It has been stressful and exhilarating in equal parts.

But I’m lucky to work with such a positive team. Especially the 4-person back end squad who dealt stoically with moments of complete meltdown and figured out solutions at an astonishing speed.

This brings me to the element that connects the two sections of this article: the emergency list.

To deal with all these tasks, and the constant shifts, we created an emergency list. It’s a simple list of tasks in a Notion table. As the situation evolved the list kept on growing and the tasks kept altering in priority.

The most important part of that list for our story here is the column titled “Revert”. The column contains a checkbox next to each task. It is this little checkbox that resonated with me and gave me an idea about how I should be dealing with this crisis on a personal level too.

## Revert

We use the “Revert” checkbox to indicate clearly if this is a task that should be reverted once this is all over or not.

If the revert checkbox is checked it means it’s a task that we are doing now to solve a specific problem that, once the crisis is over and we’re back to normal, we’ll need to revert.

This is something that only has value in this emergency and its context. It serves a purpose now, but will no longer be needed later. Many of these changes will, in fact, be downright harmful once the emergency passes.

If this checkbox is unchecked, it means that whatever we are changing is staying after the crisis is over. It’s something that we knew all along we needed to do but hadn’t come around doing it. But because of this situation has become a priority.

Or it’s something we didn’t see and it’s become obvious now. These are things to help us scale better, and improve our service in general. They are things that are settling a technical debt that has become vital to pay. They are improvements to our codebase, our infrastructure, or our processes that are beneficial in the long run and not just for now.

What we are doing is we are thinking of the future, of what happens once all this passes. Because it will. And life will go back to its natural course. We will be changed, and the world around us too. But life will carry on.

A pandemic that most of us weren’t prepared to face created havoc in our lives and our businesses. But we cannot permit this crisis to create total chaos in our lives afterward too. We should be prepared for the time it all passes.

## Applying the revert to our personal lives

So how does any of this relate to our lives as we deal with this COVID-19 world we’re living in and its aftermath?

Simply put, we all need a revert checkbox. We need it next to the many changes we are applying to our lives. Changes we are applying to deal with the virus, with our jobs, with our families and the world at large as we navigate this unprecedented situation.

For me, I’m keeping a similar kind of list for my personal life. We can all have a list like this one. Document it the way you know best. Whether it’s a written list, a mental list, or any other type of documenting you usually use. It doesn’t matter. What matters is to have that “Revert” checkbox.

As we all grapple with this extraordinary situation and all the fear, hardship, uncertainty, and even tragedy it brings with it. We all have a list of things we are doing born out of this emergency.

We need to keep clear what needs to be reverted later and what needs to stay. We are very quick to form habits. Many of us have already spent a month indoors. Many more will follow suit soon as this thing keeps spreading. We can’t even tell how long we are going to be in this situation.

So we need to keep that revert checkbox as prominent as possible.

We need to examine the list of changes that we are applying to our new reality.

If it’s something that is improving us and our lives, keep that checkbox clear. Maybe you realised you should call your Mum more often. Or nurture your old friendships. Or spend more time with your kids. Or never take for granted the hugs you can give to your grandparents.

Maybe it’s something as simple as being thankful that you can have a beer with your friends. Or listening to a busker on a busy street corner on your way back from work.

Mark those as habits to keep. Things to continue working on and improving after this passes.

But for anything else, all those things that will not be helpful after. We need to check the “Revert” box.

All the things that are helping us survive an ordeal, helping us cope with this, deal with it. All the fears that are important to keeping us on our toes and staying safe. All the extra precautions. The distancing. The little things we are allowing ourselves. The indulgences. The excesses. All those things that will quickly become harmful to us in a life after COVID-19.

For those make sure you check the “Revert” checkbox with a big fat green marker. ✅

Once this is over, it’ll be time to revert. Time to undo all that and move forward.

## Outro

Thank you for reading. I hope you and your loved ones stay safe and that life returns to normal for all of us very soon.

And good luck with your revert checkboxes.
