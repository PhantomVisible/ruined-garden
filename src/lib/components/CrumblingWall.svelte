<script>
  import { onMount, onDestroy } from 'svelte';
  import gsap from 'gsap';
  import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

  const crumblingWallImage = '/assets/the-fountain-old-and.webp';
  const hiddenOasisImage = '/assets/table-in-the-bushes-photo.webp';

  if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
  }

  let wrapper;
  let wallEl;
  let ctx;
  let timeline;

  onMount(() => {
    ctx = gsap.context(() => {
      // Single source of truth for wall clip-path progression.
      timeline = gsap.timeline({
        scrollTrigger: {
          trigger: wrapper,
          start: 'top 70%',
          end: 'bottom 35%',
          scrub: 0.8
        },
      });

      timeline
        .set(wallEl, {
          clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)'
        })
        .to(wallEl, {
          clipPath: 'polygon(0% 0%, 48% 0%, 48% 100%, 0% 100%, 0% 0%, 100% 0%, 100% 100%, 52% 100%, 52% 44%, 100% 44%)',
          ease: 'power1.inOut',
          duration: 0.5
        })
        .to(wallEl, {
          clipPath: 'polygon(0% 0%, 18% 0%, 18% 100%, 0% 100%, 0% 0%, 100% 0%, 100% 100%, 82% 100%, 82% 18%, 100% 18%)',
          ease: 'power2.out',
          duration: 0.5
        });
    });
  });

  onDestroy(() => {
    if (timeline) timeline.kill();
    if (ctx) ctx.revert();
  });
</script>

<div bind:this={wrapper} class="relative w-full h-screen overflow-hidden group py-12">
  <!-- The Lush Greenery Background -->
  <div class="absolute inset-0 bg-gradient-to-b from-forest-700 via-forest-800 to-forest-900 gpu-layer" style="will-change: transform">
    <img class="absolute inset-0 h-full w-full object-cover" src={hiddenOasisImage} alt="Hidden Oasis" />
    <div class="absolute inset-0 bg-forest-900/55"></div>
    <div class="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 max-w-4xl mx-auto">
      <h2 id="chapter-history" class="font-display text-4xl md:text-6xl text-gold-300 mb-6 drop-shadow-lg">A Hidden Oasis</h2>
      <p class="font-sans text-stone-100 text-lg leading-relaxed max-w-2xl mx-auto">
        Beneath the ruins lies a flourishing garden. Life persisting amidst the stones, waiting to be discovered by those who dare to seek.
      </p>
      <p class="font-sans text-stone-200/90 text-sm md:text-base uppercase tracking-[0.15em] mt-8">
        The invitation is near.
      </p>
    </div>
  </div>

  <!-- The Crumbling Stone Wall (Foreground that gets clipped) -->
  <div 
    bind:this={wallEl} 
    class="absolute inset-0 bg-stone-500 transition-all duration-300"
    style="will-change: clip-path"
  >
    <img
      class="absolute inset-0 h-full w-full object-cover gpu-layer"
      src={crumblingWallImage}
      alt=""
      loading="lazy"
      decoding="async"
      sizes="100vw"
    />
    <div class="absolute inset-0 bg-stone-800/80"></div>
    <div class="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
      <h3 class="font-display text-4xl md:text-6xl text-stone-200 mb-6">The History</h3>
      <p class="font-sans text-stone-400 text-lg max-w-xl mx-auto">
        Millennia of history etched into cold stone.
      </p>
    </div>
  </div>
</div>
