<script>
  import { onMount } from 'svelte';
  import gsap from 'gsap';

  let heroSection;
  let titleElement;
  let ctaButton;

  onMount(() => {
    // Fade in title on load
    if (titleElement) {
      gsap.from(titleElement, {
        duration: 1.2,
        opacity: 0,
        y: 30,
        ease: 'power2.out',
      });
    }

    // Fade in CTA button
    if (ctaButton) {
      gsap.from(ctaButton, {
        duration: 1.2,
        opacity: 0,
        y: 20,
        delay: 0.3,
        ease: 'power2.out',
      });
    }
  });
</script>

<section
  bind:this={heroSection}
  class="vignette relative w-full h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-stone-900 via-forest-900 to-stone-900"
>
  <!-- Background decorative elements -->
  <div class="absolute inset-0 opacity-20">
    <div
      class="absolute top-1/4 left-1/4 w-96 h-96 bg-forest-800 rounded-full blur-3xl"
    ></div>
    <div
      class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-terracotta-800 rounded-full blur-3xl"
    ></div>
  </div>

  <!-- Content -->
  <div class="relative z-10 text-center px-4 md:px-8 max-w-4xl">
    <p class="chapter-eyebrow text-gold-400/80 mb-6 tracking-[0.3em]">Welcome to</p>
    <h1
      bind:this={titleElement}
      class="font-display font-light text-6xl md:text-8xl text-gold-400 mb-6 tracking-wider leading-tight drop-shadow-lg"
    >
      The Ruined<br />Garden
    </h1>

    <p class="text-lg md:text-xl text-stone-300 mb-12 font-light tracking-wide max-w-2xl mx-auto drop-shadow-md">
      Discover a secret oasis hidden within the ancient Medina of Fes. Where nature reclaims the ruins, and every meal is a journey through time.
    </p>

    <a
      bind:this={ctaButton}
      href="https://www.google.com/maps/search/?api=1&query=The+Ruined+Garden+Fes"
      target="_blank"
      rel="noopener noreferrer"
      class="group relative inline-flex items-center justify-center px-8 py-4 border border-gold-600/50 bg-gold-600/10 text-gold-300 hover:text-forest-900 hover:bg-gold-500 hover:border-gold-500 transition-all duration-500 ease-out backdrop-blur-sm rounded-sm"
    >
      <span class="font-sans font-medium text-[0.95rem] tracking-[0.15em] uppercase">Come Visit Us</span>
    </a>
  </div>

  <!-- Scroll indicator -->
  <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
    <div class="w-6 h-10 border-2 border-gold-600 rounded-full flex items-start justify-center p-2">
      <div class="w-1 h-2 bg-gold-600 rounded-full animate-pulse"></div>
    </div>
  </div>
</section>

<style>
  :global(.vignette::after) {
    background: radial-gradient(
      ellipse at center,
      transparent 0%,
      rgba(0, 0, 0, 0.5) 100%
    );
  }
</style>
