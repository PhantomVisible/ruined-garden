<script>
  import { onMount } from 'svelte';
  import gsap from 'gsap';
  import HeroParallax from './ui/HeroParallax/HeroParallax.svelte';

  const webpFiles = [
    'aziz-najia-cooking.webp',
    'beef-meatballs-cardamon.webp',
    'chicken-volubilis.webp',
    'fresh-sardine-tagine.webp',
    'interior-of-ruined-garden.webp',
    'photo0jpg (1).webp',
    'photo0jpg.webp',
    'photo1jpg.webp',
    'photo2jpg (1).webp',
    'photo2jpg.webp',
    'sardine-sweet-onion-terine.webp',
    'table-in-the-bushes-photo.webp',
    'tapas-caliente-makuda.webp',
    'the-fountain-old-and.webp',
    'the-front-entrance-on.webp',
    'the-garden-at-night-photo.webp',
    'the-garden-early-evening.webp',
    'the-ruined-garden.webp',
    'vegetable-b-stella-photo.webp',
    'view-toward-the-rear.webp'
  ];

  const formatTitle = (filename) => {
    let name = filename.replace('.webp', '');
    name = name.replace(/-/g, ' ');
    name = name.replace(/jpg/g, '');
    name = name.replace(/\(\d+\)/g, '');
    return name.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ').replace(/\s+/g, ' ').trim();
  };

  const products = webpFiles.map(file => ({
    title: formatTitle(file) || 'Ruined Garden',
    link: `#`, 
    thumbnail: `/assets/${file}`
  }));

  // Duplicate a few to ensure grid looks super full
  const fullProducts = [...products, ...products.slice(0, 5)];

  let titleElement;
  let ctaButton;

  onMount(() => {
    // Fade in title on load
    if (titleElement) {
      gsap.from(titleElement, {
        duration: 1.2,
        opacity: 0,
        y: 40,
        ease: 'power2.out',
      });
    }

    // Fade in CTA button
    if (ctaButton) {
      gsap.from(ctaButton, {
        duration: 1.2,
        opacity: 0,
        y: 20,
        delay: 0.4,
        ease: 'power2.out',
      });
    }
  });
</script>

<HeroParallax products={fullProducts}>
  <div class="relative z-10 text-center px-4 md:px-8 max-w-4xl mx-auto my-auto mt-12 md:mt-24 pointer-events-auto">
    <p class="chapter-eyebrow text-forest-800/80 mb-6 tracking-[0.3em] font-sans font-bold">Welcome to</p>
    <h1
      bind:this={titleElement}
      class="font-display font-light text-6xl md:text-8xl text-forest-900 mb-8 tracking-wider leading-tight drop-shadow-xl"
    >
      The Ruined<br />Garden
    </h1>

    <p class="text-lg md:text-xl text-stone-100 mb-12 font-medium tracking-wide max-w-2xl mx-auto drop-shadow-sm bg-forest-900/80 p-6 rounded-sm shadow-2xl border border-gold-300/30">
      Discover a secret oasis hidden within the ancient Medina of Fes. Where nature reclaims the ruins, and every meal is a journey through time.
    </p>

    <a
      bind:this={ctaButton}
      href="https://www.google.com/maps/search/?api=1&query=The+Ruined+Garden+Fes"
      target="_blank"
      rel="noopener noreferrer"
      class="group relative inline-flex items-center justify-center px-8 py-4 border-2 border-forest-900 bg-forest-900 text-gold-300 hover:text-stone-100 hover:bg-forest-800 transition-all duration-500 ease-out shadow-xl rounded-sm"
    >
      <span class="font-sans font-bold text-[0.95rem] tracking-[0.15em] uppercase">Come Visit Us</span>
    </a>
  </div>
</HeroParallax>
