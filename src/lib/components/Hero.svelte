<script>
  import { onMount } from 'svelte';
  import gsap from 'gsap';
  import { ChevronDown } from 'lucide-svelte';

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

    // Floating animation for chevron
    const chevron = ctaButton?.querySelector('svg');
    if (chevron) {
      gsap.to(chevron, {
        duration: 1.5,
        y: 8,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    }
  });

  const scrollToChapterI = () => {
    const chapterI = document.getElementById('chapter-i');
    if (chapterI) {
      chapterI.scrollIntoView({ behavior: 'smooth' });
    }
  };
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
    <h1
      bind:this={titleElement}
      class="font-display font-light text-6xl md:text-8xl text-gold-400 mb-6 tracking-wider leading-tight"
    >
      The Garden<br />That Time<br />Forgot
    </h1>

    <p class="text-lg md:text-xl text-stone-300 mb-12 font-light tracking-wide max-w-2xl mx-auto">
      Discover a secret oasis hidden within the ancient Medina of Fes. Where nature reclaims the ruins, and every meal is a journey through time.
    </p>

    <button
      bind:this={ctaButton}
      on:click={scrollToChapterI}
      class="group relative inline-flex items-center justify-center px-8 py-4 border-2 border-gold-600 text-gold-400 hover:text-forest-900 hover:bg-gold-600 transition-all duration-300 ease-out"
    >
      <span class="font-display text-lg font-light tracking-wide">Discover the Secret</span>
      <ChevronDown class="ml-3 w-5 h-5 group-hover:translate-y-1 transition-transform" />
    </button>
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
