<script>
  import { onMount } from 'svelte';
  import { initScrollReveal, initParallax } from '../animations/gsapAnimations.js';

  let chapterContent;
  let parallaxElement;

  onMount(() => {
    if (chapterContent) {
      initScrollReveal(chapterContent, {
        duration: 0.8,
        stagger: 0.1,
        start: 'top 75%',
        end: 'top 25%',
      });
    }

    if (parallaxElement) {
      initParallax(parallaxElement, 0.3);
    }
  });
</script>

<section
  id="chapter-i"
  class="relative w-full py-32 md:py-48 px-4 md:px-8 bg-stone-900"
>
  <!-- Decorative background -->
  <div class="absolute inset-0 opacity-10">
    <div
      class="absolute top-0 right-0 w-96 h-96 bg-terracotta-800 rounded-full blur-3xl"
    ></div>
  </div>

  <div class="relative z-10 max-w-4xl mx-auto">
    <!-- Chapter header -->
    <div class="mb-16 md:mb-24">
      <span class="text-gold-600 font-display text-sm tracking-widest uppercase">
        Chapter I
      </span>
      <h2 class="font-display text-5xl md:text-7xl text-gold-400 mt-2 mb-8 leading-tight">
        The Ruin
      </h2>
      <div class="w-16 h-1 bg-gradient-to-r from-gold-600 to-transparent"></div>
    </div>

    <!-- Main content -->
    <div bind:this={chapterContent} class="space-y-8">
      <p
        class="text-lg md:text-xl text-stone-300 font-light leading-relaxed"
        data-reveal
      >
        In the heart of Fes's ancient Medina, where centuries of footsteps have worn the stone pathways smooth, there exists a place forgotten by time. A restaurant born from the bones of a crumbling palace, where walls once echoed with the voices of sultans now whisper secrets to the vines that claim them.
      </p>

      <p
        class="text-lg md:text-xl text-stone-300 font-light leading-relaxed"
        data-reveal
      >
        The Ruined Garden is not merely a dining establishment. It is a sanctuary where nature and history dance in an eternal waltz. Devil's Ivy creeps across weathered arches. Terracotta tiles, worn and cracked, tell stories of dynasties past. Every corner holds a fragment of memory, every shadow a whisper of what once was.
      </p>

      <p
        class="text-lg md:text-xl text-stone-300 font-light leading-relaxed"
        data-reveal
      >
        Here, the distinction between ruin and renewal blurs. The decay is not an ending, but a beginning. In the spaces between the broken stones, life finds a way. And in those spaces, we invite you to discover something extraordinary.
      </p>
    </div>

    <!-- Decorative quote -->
    <div
      bind:this={parallaxElement}
      class="mt-16 md:mt-24 p-8 md:p-12 border-l-4 border-gold-600 bg-forest-900 bg-opacity-50 backdrop-blur-sm"
    >
      <p class="text-xl md:text-2xl font-display text-gold-400 italic font-light">
        "In the garden of time, even ruins bloom with beauty."
      </p>
      <p class="text-sm text-stone-400 mt-4 font-light">— Moroccan Proverb</p>
    </div>
  </div>
</section>

<style>
  section {
    position: relative;
  }
</style>
