---
title: Why The Portfolio Looks Like This
date: 2026-04-10
ref: LOG_002
tag: DESIGN
readTime: 4 min
excerpt: Thick borders, uppercase display type, hard shadows. A short defense of brutalist design on a personal site — and why soft gradients would have been the wrong call.
---

## The Brief I Gave Myself

When I started on this site, I knew two things I didn't want:

- Another slick, minimal, "clean" portfolio that blurs into the next one
- A flashy scroll-jacked hero that takes three seconds to show a job title

I wanted the page to feel like a **briefing document**. Something you could print out, classified stamp and all. That framing made most of the design decisions for me.

## Rules I Followed

### 1. Borders do the work

Everything important has a border. Thick, black, non-negotiable:

```css
border: 4px solid #000;
box-shadow: 8px 8px 0 0 #000;
```

Hard shadows instead of drop shadows. No blur, no soft edges. Either a thing is a thing, or it isn't.

### 2. One accent color

A single blue — `#034694` — does all the highlighting. No gradient systems. No five-shade palettes. Blue is for emphasis; black is for structure; everything else is neutral grey.

Constraints compound. When you only have one accent color, you have to use it well.

### 3. Type as hierarchy

- **Display**: Space Grotesk, bold, uppercase, heavy negative tracking
- **Data**: Roboto Mono, small caps feel, letter-spacing stretched out
- **Code**: JetBrains Mono for anything that feels mechanical

Size and weight do the work of color. Headings aren't underlined — they're *loud*.

### 4. Motion is rare and cheap

No page transitions. No scroll-linked parallax. The only animations are:

1. Lenis smooth scroll (imperceptible, but nicer on the wheel)
2. Card hover: the shadow grows from `8px` to `12px`. That's it.

When almost nothing moves, the things that do feel intentional.

## What I Traded Away

Brutalism isn't neutral. It's loud, it's opinionated, it's a personality. A recruiter expecting a polished enterprise aesthetic might bounce. That's a real cost — and I chose to eat it.

> If your site looks like every other site, it has to be the best version of that site. If your site looks like nothing else, it just has to *work*.

I'd rather be memorable than safe.

## The Parts I'd Redo

Honest list:

- The missions page is doing too much at once. Filter tabs plus three layouts plus two modal flows — it wants to be simpler.
- Some of the card variants drifted. The blog cards and mission cards share DNA but not a component. I should probably fix that.
- Accessibility passes have been light. That's next.

---

That's the design brief, after the fact. Not a manifesto — just a record of what I was aiming at when I made the choices.

&gt; EOF
