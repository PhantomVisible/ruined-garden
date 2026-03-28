<script>
  import { onMount, onDestroy } from 'svelte';
  import gsap from 'gsap';
  import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

  if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
  }

  let tileContainer;
  let tileFaceFront;
  let tileFaceBack;
  let ctx;

  onMount(() => {
    ctx = gsap.context(() => {
      // Rotate the 3D tile based on scroll
      gsap.to([tileFaceFront, tileFaceBack], {
        rotationY: '+=360',
        rotationX: '+=180',
        scrollTrigger: {
          trigger: tileContainer,
          start: 'top 85%',
          end: 'bottom 20%',
          scrub: 0.9
        },
        ease: 'none'
      });
    }, tileContainer);
  });

  onDestroy(() => {
    if (ctx) ctx.revert();
  });
</script>

<div bind:this={tileContainer} class="w-full flex justify-center items-center py-24" style="perspective: 1000px">
  <div class="relative w-48 h-48 zellige-group transition-transform duration-100 ease-in-out scene-3d" style="will-change: transform; transform: rotateX(20deg) rotateY(20deg);">
    <!-- A 3D constructed Zellige tile using CSS -->
    <!-- Front Face -->
    <div bind:this={tileFaceFront} class="absolute inset-0 bg-terracotta-600 border-2 border-gold-500 flex items-center justify-center zellige-side rotate-0 gpu-layer" style="transform: translateZ(1rem); backface-visibility: hidden;">
      <div class="w-32 h-32 bg-forest-700 rotate-45 border border-gold-300 shadow-inner">
        <div class="w-full h-full border border-gold-400/50 scale-75"></div>
      </div>
    </div>
    <!-- Back Face -->
    <div bind:this={tileFaceBack} class="absolute inset-0 bg-terracotta-800 border-2 border-gold-700 flex items-center justify-center zellige-side gpu-layer" style="transform: translateZ(-1rem) rotateX(180deg); backface-visibility: hidden;">
      <div class="w-32 h-32 bg-forest-900 rotate-45 border border-gold-600/50"></div>
    </div>
  </div>
</div>
