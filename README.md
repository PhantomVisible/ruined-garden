# The Ruined Garden

A cinematic, high-performance scrollytelling landing page for a botanical restaurant in Fes, Morocco. This project showcases an immersive digital experience with organic animations, crumbling wall effects, and a luxury menu journal.

## Vision

Create a "Fairy Tale" digital experience where an organic Devil's Ivy vine grows down the page as users scroll, interacting with a "crumbling wall" aesthetic to feel like a discovery of a secret oasis within the Medina.

## Technical Stack

- **Framework**: Svelte + Vite (for zero-runtime performance)
- **Styling**: Tailwind CSS with custom palette
  - Deep Forest Green: `#1B3A24`
  - Burnt Terracotta: `#A65E46`
  - Faded Gold: `#C0B283`
- **Animation Engine**: GSAP + ScrollTrigger
- **Icons**: Lucide-Svelte
- **Typography**: Cormorant Garamond (display) + Inter (body)

## Key Features

### 1. **Immersive Hero Section**
- Centered, elegant serif title with vignette fade
- "Discover the Secret" CTA with smooth scroll trigger
- Animated scroll indicator

### 2. **Growing Ivy Animation**
- Global SVG component with GSAP DrawSVG
- Stroke-dashoffset animation tied 1:1 to scroll progress
- Organic leaf sprouts triggered during scroll
- Performance-optimized with GPU acceleration

### 3. **Crumbling Wall Section**
- Scroll-driven mask reveal effect
- Text appears carved into stone
- Ivy "cracks" the wall as it passes
- Reveals the "Garden" layer underneath

### 4. **Menu Journal**
- Minimalist, high-end layout using Cormorant Garamond
- Organic hover effects with leaf sprouts
- Soft glows on interaction
- Three-course structure: Appetizers, Main Courses, Desserts

### 5. **Chapter Structure**
- **Chapter I: The Ruin** - Storytelling and atmosphere
- **Chapter II: The Awakening** - Culinary philosophy with reveal effect
- **Chapter III: The Feast** - Menu journal with organic interactions

### 6. **Performance Optimization**
- All animations are GPU-accelerated
- Zero-runtime overhead with Svelte
- Optimized build with Vite
- Target: 99+ Lighthouse Performance score

## Installation

```bash
# Clone the repository
git clone https://github.com/PhantomVisible/ruined-garden.git
cd ruined-garden

# Install dependencies
pnpm install

# Start development server
pnpm run dev

# Build for production
pnpm run build

# Preview production build
pnpm run preview
```

## Project Structure

```
src/
├── App.svelte                 # Main layout
├── app.css                    # Global styles with Tailwind
├── main.js                    # Entry point with GSAP initialization
└── lib/
    ├── animations/
    │   └── gsapAnimations.js  # GSAP utilities and scroll effects
    ├── components/
    │   ├── GrowingIvy.svelte  # Animated ivy SVG component
    │   ├── Hero.svelte        # Chapter 0: Hero section
    │   ├── ChapterI.svelte    # Chapter I: The Ruin
    │   ├── ChapterII.svelte   # Chapter II: The Awakening
    │   ├── ChapterIII.svelte  # Chapter III: The Feast
    │   └── Footer.svelte      # Footer with contact info
    └── utils/                 # Utility functions
```

## Development

The project uses Vite for fast development and hot module replacement. GSAP ScrollTrigger is configured for smooth scroll-based animations.

### Key Animation Functions

- `initGrowingIvy()` - Initialize the main ivy path animation
- `initScrollReveal()` - Text reveal on scroll
- `initParallax()` - Parallax scroll effects
- `initCrumblingWallReveal()` - Mask reveal animation
- `initMenuHover()` - Menu item hover effects
- `refreshScrollTriggers()` - Refresh animations on resize

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari 14+, Chrome Android)

## Deployment

The project is optimized for static hosting:

```bash
# Build the production bundle
pnpm run build

# Output is in the 'dist' directory
# Deploy to Netlify, Vercel, GitHub Pages, etc.
```

## License

© 2026 The Ruined Garden. All rights reserved.

---

*"In the garden of time, even ruins bloom with beauty."*
