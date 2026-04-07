<script>
  import { onMount } from 'svelte';
  import { initCrumblingWallReveal, initScrollReveal } from '../animations/gsapAnimations.js';
  import gsap from 'gsap';
  import { ScrollTrigger } from 'gsap/ScrollTrigger';
  import MenuModal from './ui/MenuModal.svelte';

  if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
  }

  let isMenuOpen = false;

  let maskElement;
  let contentElement;
  let chapterContent;

  onMount(() => {
    if (maskElement && contentElement) {
      initCrumblingWallReveal(maskElement, contentElement);
    }

    if (chapterContent) {
      initScrollReveal(chapterContent, {
        duration: 0.8,
        stagger: 0.1,
        start: 'top 75%',
        end: 'top 25%',
      });
    }

    // Animate the stone texture
    const stoneTexture = document.querySelector('[data-stone-texture]');
    if (stoneTexture) {
      gsap.to(stoneTexture, {
        opacity: 0,
        scrollTrigger: {
          trigger: stoneTexture,
          start: 'top 60%',
          end: 'center 30%',
          scrub: 1,
        },
      });
    }
  });
</script>

<section
  id="chapter-ii"
  class="relative w-full py-32 md:py-48 px-4 md:px-8 bg-stone-900 overflow-hidden"
>
  <!-- Crumbling wall background -->
  <div class="absolute inset-0 opacity-30">
    <div
      class="absolute inset-0 bg-gradient-to-b from-forest-900 via-terracotta-900 to-stone-900"
    ></div>
    <div
      data-stone-texture
      class="absolute inset-0 bg-repeat opacity-20"
      style="background-image: url('data:image/svg+xml,%3Csvg width=%22200%22 height=%22200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%225%22 result=%22noise%22 /%3E%3C/filter%3E%3Crect width=%22200%22 height=%22200%22 fill=%22%23000%22 filter=%22url(%23noise)%22 opacity=%220.3%22/%3E%3C/svg%3E')"
    ></div>
  </div>

  <div class="relative z-10 max-w-4xl mx-auto">
    <!-- Crumbling wall mask effect -->
    <div
      bind:this={maskElement}
      class="crumbling-wall mb-16 md:mb-24 p-8 md:p-12 border-2 border-terracotta-700 bg-forest-900 bg-opacity-40 backdrop-blur-sm"
    >
      <span class="text-terracotta-600 font-display text-sm tracking-widest uppercase">
        Chapter II
      </span>
      <h2 class="font-display text-5xl md:text-7xl text-terracotta-400 mt-2 mb-4 leading-tight">
        The Awakening
      </h2>
      <p class="text-stone-400 font-light">
        As the ivy grows, the walls crack and reveal what lies beneath...
      </p>
    </div>

    <!-- Hidden content revealed by mask -->
    <div
      bind:this={contentElement}
      class="opacity-0 transition-opacity duration-1000"
    >
      <div bind:this={chapterContent} class="space-y-8">
        <p
          class="text-lg md:text-xl text-stone-300 font-light leading-relaxed"
          data-reveal
        >
          The transformation begins not with demolition, but with revelation. Our culinary philosophy mirrors the essence of this sacred space: we do not create from nothing, but rather uncover the extraordinary that already exists within the simplest ingredients.
        </p>

        <p
          class="text-lg md:text-xl text-stone-300 font-light leading-relaxed"
          data-reveal
        >
          Each dish is a conversation between past and present. We honor the ancient spice routes that once connected Morocco to the world, infusing them with contemporary technique and reverence for the land. Our kitchen is a laboratory of memory, where every flavor tells a story.
        </p>

        <p
          class="text-lg md:text-xl text-stone-300 font-light leading-relaxed"
          data-reveal
        >
          The Devil's Ivy that adorns our walls is not mere decoration—it is a metaphor. Resilient, adaptive, ever-growing, it reminds us that beauty thrives in unexpected places. Just as the vine transforms the ruin into something alive, we transform humble ingredients into moments of transcendence.
        </p>

        <!-- Featured elements -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 pt-12 border-t border-stone-700">
          <div class="text-center">
            <div class="text-4xl font-display text-gold-600 mb-2">🌿</div>
            <h3 class="font-display text-xl text-gold-400 mb-2">Organic Sourcing</h3>
            <p class="text-stone-400 font-light text-sm">
              Every ingredient sourced from local Moroccan artisans and farmers.
            </p>
          </div>
          <div class="text-center">
            <div class="text-4xl font-display text-gold-600 mb-2">🔥</div>
            <h3 class="font-display text-xl text-gold-400 mb-2">Ancient Techniques</h3>
            <p class="text-stone-400 font-light text-sm">
              Traditional methods passed down through generations of Moroccan cuisine.
            </p>
          </div>
          <div class="text-center">
            <div class="text-4xl font-display text-gold-600 mb-2">✨</div>
            <h3 class="font-display text-xl text-gold-400 mb-2">Culinary Poetry</h3>
            <p class="text-stone-400 font-light text-sm">
              Each plate is a work of art, a moment frozen in time and flavor.
            </p>
          </div>
        </div>

        <!-- CTA: View the Menu -->
        <div class="mt-12 pt-10 border-t border-stone-700 text-center">
          <button
            on:click={() => (isMenuOpen = true)}
            class="inline-flex items-center justify-center px-8 py-4 border border-[#C0B283]/60 text-[#C0B283] hover:bg-[#C0B283]/10 hover:border-[#C0B283] transition-all duration-300 font-sans text-xs md:text-sm tracking-[0.2em] uppercase rounded-sm"
          >
            View the Menu
          </button>
        </div>
      </div>
    </div>
  </div>
</section>

<MenuModal bind:isOpen={isMenuOpen} />

<style>
  .crumbling-wall {
    position: relative;
    background: linear-gradient(135deg, rgba(27, 58, 36, 0.6) 0%, rgba(166, 94, 70, 0.3) 100%);
  }

  .crumbling-wall::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' result='noise' /%3E%3C/filter%3E%3Crect width='100' height='100' fill='%23000' filter='url(%23noise)' opacity='0.05'/%3E%3C/svg%3E");
    opacity: 0.3;
    pointer-events: none;
  }
</style>
