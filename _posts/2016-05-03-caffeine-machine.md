---
title: "Caffeine Machine Game"
date: 2016-04-06 15:39:49 -0800
image: caffeine-machine/caffeine_machine@2x.png
---
I've got this [exercise](https://www.thumbtack.com/challenges/slot-machine "Web game - Caffeine Machine") as a part of interview process at  [Thumbtack](https://www.thumbtack.com/). There was no design provided, I was absolutely free to build whatever I want. I wanted to use CSS 3D transform, use as little images as possible, make it to look good and fun to play.

Here's the final [game](/web-library/caffeine-machine/):

[![Caffeine machine]({{ site.blog_assets }}/caffeine-machine/caffeine_machine@2x.png)](/web-library/caffeine-machine/ "Web game - Caffeine Machine")

#### About the process

I did a research about slot machines and how they typically look like. To be fair, I never played with slot machines :)
I come up with an idea about the look and started writing code to make 3 slots with a start button.

In a first draft there was just 3 sides on each reel, which wasn't a good idea, but I got the concept about 3d transforms.

[![Slots first draft]({{ site.blog_assets }}/caffeine-machine/slots-draft.png)](/web-library/caffeine-machine/slots-draft/ "Slots first draft")

Next I worked on the entire body of the slot machine and as a result moved to this:

![Caffeine Machine draft]({{ site.blog_assets }}/caffeine-machine/slot-machine-draft.png)

Than I realized that reel definitely needs more then 3 sides and that I hate the design I made.
Here's the next version of the game:

![Caffeine Machine draft2]({{ site.blog_assets }}/caffeine-machine/slot-machine-draft2.png)

If you win, the machine gives you a drink, but if you lose there was no indication of that. I decided to add a row of bulbs as a status bar:

![Caffeine Machine with status bar]({{ site.blog_assets }}/caffeine-machine/caffeine_machine5.png)

Next I finished up the rewards presentation. The machine can reward you with 3 drink options: tea, espresso or coffee.

![Caffeine Machine - tea reward]({{ site.blog_assets }}/caffeine-machine/caffeine_machine@2x.png)

![Caffeine Machine - espresso reward]({{ site.blog_assets }}/caffeine-machine/caffeine_machine2.png)

![Caffeine Machine - coffee reward]({{ site.blog_assets }}/caffeine-machine/caffeine_machine3.png)

I showed the game to my husband for feedback. And he gave a very valid point: it frustrating to click on a start button again and again before you get a reward.
The ratio of win to loses is 1:27 (3 x 3 x 3). So simple random number generating didn't work in terms of gamer experience. Because of that I've modified my javascript logic, so I can set the maximum number of back to back loses. If user doesn't win naturally within a limit I set up, the algorithm forced to give a reward on a next spin.

[Demo]({{ site.base_url }}/web-library/caffeine-machine/)

P.S.: Thumbtack decided not to continue interview process after I submitted my solution :(. But I enjoyed working on this exercise an want to say thank you to Thumbtack team.