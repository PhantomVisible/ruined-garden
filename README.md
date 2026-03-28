# The Ruined Garden

A cinematic scrollytelling landing page for a legendary botanical restaurant in the Fes Medina.  
Built as a premium portfolio piece, the site blends narrative pacing, handcrafted visuals, and scroll-linked animation to create an exclusive "fairy tale" dining atmosphere.

## Stack

- SvelteKit 2 + Vite
- Tailwind CSS 4 (custom palette + typography tokens)
- GSAP + ScrollTrigger

## Narrative Chapters

1. The Ruin (hero + origin atmosphere)
2. The Awakening (stone wall cracking to reveal the oasis)
3. Timeless Craftsmanship (rotating zellige artifact)
4. The Feast (single premium CTA)

## Project Structure

```txt
src/
  routes/
    +layout.svelte
    +page.svelte
  lib/
    components/
      GrowingIvy.svelte
      CrumblingWall.svelte
      ZelligeTile.svelte
  assets/
    hero.png
  app.css
```

## Run Locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Notes

- The page is desktop-first with solid mobile fallbacks.
- ScrollTriggers are component-scoped and cleaned up on unmount.
- Critical visual assets are project-managed for deterministic delivery.
