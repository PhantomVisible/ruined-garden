<script>
  import { onMount } from 'svelte';
  import { initScrollReveal } from '../animations/gsapAnimations.js';

  let chapterContent;

  onMount(() => {
    if (chapterContent) {
      initScrollReveal(chapterContent, {
        duration: 0.8,
        stagger: 0.1,
        start: 'top 75%',
        end: 'top 25%',
      });
    }
  });
</script>

<section
  id="chapter-iii"
  class="relative w-full py-32 md:py-48 px-4 md:px-8 bg-stone-900"
>
  <!-- Decorative background -->
  <div class="absolute inset-0 opacity-10">
    <div
      class="absolute bottom-0 left-0 w-96 h-96 bg-forest-800 rounded-full blur-3xl"
    ></div>
  </div>

  <div class="relative z-10 max-w-5xl mx-auto">
    <!-- Chapter header -->
    <div class="mb-16 md:mb-24">
      <span class="text-gold-600 font-display text-sm tracking-widest uppercase">
        Chapter III
      </span>
      <h2 class="font-display text-5xl md:text-7xl text-gold-400 mt-2 mb-8 leading-tight">
        The Guardians of the Medina
      </h2>
      <div class="w-16 h-1 bg-gradient-to-r from-gold-600 to-transparent"></div>
    </div>

    <!-- Introduction -->
    <div bind:this={chapterContent} class="mb-16 md:mb-24">
      <p
        class="text-lg md:text-xl text-stone-300 font-light leading-relaxed mb-6"
        data-reveal
      >
        Behind the crumbling stone and winding vines, the true heartbeat of the Medina lives in its residents—both the seen and the unseen.
      </p>
    </div>

    <!-- Content Placeholder -->
    <div class="space-y-16 md:space-y-24">
      <div class="border-t border-stone-700 pt-12 md:pt-16">
        <p class="text-stone-400 font-light text-base md:text-lg leading-relaxed italic">
          [Chapter content curated from the depths of the Medina...]
        </p>
      </div>
    </div>

    <!-- Closing statement -->
    <div class="mt-16 md:mt-24 pt-12 md:pt-16 border-t border-stone-700">
      <p class="text-lg md:text-xl text-stone-300 font-light leading-relaxed italic">
        "Every path through the garden is guarded by those who have called these ruins home for generations."
      </p>
    </div>

    <!-- Call to action -->
    <div class="mt-16 md:mt-24 text-center">
      <p class="text-stone-400 font-light mb-6">
        Want to know more about our family?
      </p>
      <a
        href="#contact"
        class="inline-flex items-center justify-center px-8 py-4 border-2 border-gold-600 text-gold-400 hover:text-forest-900 hover:bg-gold-600 transition-all duration-300 ease-out font-display text-lg font-light tracking-wide"
      >
        Meet the Team
      </a>
    </div>
  </div>
</section>

<style>
  section {
    position: relative;
  }
</style>

