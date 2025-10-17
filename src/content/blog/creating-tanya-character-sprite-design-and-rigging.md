---
title: Creating Tanya - Character Sprite Design and Rigging 🐱
isDraft: false
excerpt: Discover how Tanya — the mysterious cat girl from 'The Book of Tornaluna Cats' — was brought to life through 2D rigging in Godot. From layered sprites to digital bones, here’s how we made her move naturally. ✨
publishDate: 2025-02-27
author: edo
image: /image/tanya_rig.png
prev: join-the-closed-alpha-test-of-tornaluna-cats
---

I’d like to share some progress on **The Book of Tornaluna Cats**!  
Today, I’ll show you how the main character’s sprite — **Tanya** — looks and moves. 🐾

---

## Who Is Tanya?

As players, we don’t know much about Tanya at first. One day, you find her near your farm — lost, confused, and with no memory of who she is or where she came from.  

She appears to be a young girl with white hair and pale skin, but something about her stands out… she has **cat ears** and a **tail**. And no, they’re not cosplay — they look completely real.

![Tanya illustration](/image/tanya_cg_hd.png)

---

## Character Sprite and Rigging 🎨

Before talking about rigging itself, let’s start with the sprite.  
To make a **2D rig**, we first need to **draw the character** and separate every “movable” part into different layers.  

For example, if we want the hair to move, the hair must be drawn on its own layer. The same goes for arms, legs, eyes, and even smaller parts like pupils or clothing details.

![Tanya sprite](/image/tanya_sprite_screenshot.png)

Each element that can move is placed on a **unique layer**.  
Even the eyes are divided — left and right, sclera and pupils — all separate to allow precise control later in animation.

![Tanya sprite 2](/image/tanya_sprite_screenshot_2.png)

This structure is essential because, during rigging, we assign each part a **“bone”** — an object that lets us move it easily.  
All these bones connect to form a **skeleton**, which becomes the foundation for smooth, natural character animations.

![Tanya skeleton](/image/tanya_rig.png)

Here’s the skeleton we built for Tanya’s sprite. It includes around **50 bones**, allowing movement in her legs, hands, body, chest, eyes, and hair.  
This approach not only makes animation easier but also more **realistic**, since we can apply **physics** to simulate subtle effects like hair sway or body balance.

---

## Rig in Action 🎬

Here’s a short demo showing Tanya’s rig in motion:

<iframe class="yt-iframe" src="https://www.youtube.com/embed/nMLQGi499RM" title="Godot 2D rigging test." frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

In the video, you can also see how animations are managed through a **state machine** — a common technique in game development used to handle complex animation logic.  
I might write a dedicated post about this system in the future!

---

## In-Game Test 🕹️

And here’s Tanya’s rig running inside the actual game engine:

<iframe class="yt-iframe" src="https://www.youtube.com/embed/1KM1vSrWUa8" title="Tanya in-game animation test." frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

From my experience, **animating with skeletons** is far more efficient — and visually pleasing — than creating frame-by-frame animations. The results look smoother, more expressive, and much easier to adjust later.

---

That’s all for now!  
I’ll share more updates soon — maybe next time we’ll talk about **gameplay**, and you’ll get a glimpse of a **playable prototype**. Stay tuned! ✨
