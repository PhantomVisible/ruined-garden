<script>
  import { onMount } from 'svelte';
  import gsap from 'gsap';

  let cardEl;
  let coverEl;
  let flowerLeft;
  let flowerRight;
  let displacementMap;
  export let hasCrumbled = false;
  
  // Changing the placeholder from a fountain to an actual textured crumbling stone wall with vines
  const crumblingWallImage = 'https://images.unsplash.com/photo-1516089851613-2fc8cbaae8eb?auto=format&fit=crop&q=80&w=1200';
  
  // Unique filter ID for multiple instances on the same page
  const filterId = 'crush-filter-' + Math.random().toString(36).substr(2, 9);

  const crumble = () => {
    if (hasCrumbled) return;

    const tl = gsap.timeline({
      onComplete: () => {
        hasCrumbled = true;
      }
    });

    // Animate the SVG displacement map to "crumble" the image
    tl.to(displacementMap, {
      attr: { scale: 200 },
      duration: 1.4,
      ease: 'power2.in',
    }, 0);

    // Fade and slightly scale the wall as it breaks apart
    tl.to(coverEl, {
      opacity: 0,
      scale: 1.05,
      filter: 'blur(8px)',
      duration: 1.4,
      ease: 'power2.inOut',
    }, 0);

    // Fade in text content concurrently
    tl.to('.crumble-content', {
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: 'power2.out',
    }, 0.5);

    // Vines/Flowers grow out from behind
    tl.fromTo(
      [flowerLeft, flowerRight],
      { opacity: 0, scale: 0, rotation: -30, transformOrigin: 'center' },
      { opacity: 1, scale: 1, rotation: 0, duration: 1.5, ease: 'elastic.out(1, 0.75)', stagger: 0.2 },
      0.6
    );
  };
</script>

<!-- SVG Filters for organic distortion -->
<svg class="absolute w-0 h-0 pointer-events-none" aria-hidden="true">
  <filter id={filterId}>
    <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="4" result="noise" />
    <feDisplacementMap 
      bind:this={displacementMap}
      in="SourceGraphic" 
      in2="noise" 
      scale="0" 
      xChannelSelector="R" 
      yChannelSelector="G" 
    />
  </filter>
</svg>

<div 
  bind:this={cardEl} 
  class="relative block w-full outline-none transform transition-transform duration-300 {hasCrumbled ? '' : 'hover:scale-[1.01] cursor-pointer'}"
  on:click={crumble}
  on:keydown={(e) => e.key === 'Enter' && crumble()}
  tabindex="0"
  role="button"
  aria-expanded={hasCrumbled}
>
  
  <!-- Emerging Flowers (Placeholders SVG) -->
  <div bind:this={flowerLeft} class="absolute -left-16 -top-12 z-0 pointer-events-none opacity-0 drop-shadow-xl saturate-150">
    <!-- Detailed placeholder vine/leaf -->
    <svg width="140" height="140" viewBox="0 0 24 24" fill="none" class="text-forest-600 sm:w-36 sm:h-36 mix-blend-multiply opacity-80">
      <path d="M5 22s-2-8 3-12c5-4 11-5 11-5s1 6-4 11c-5 5-10 6-10 6Z" fill="currentColor" />
      <path d="M22 6c-3 0-8 2-12 6s-6 10-6 10" stroke="#0f1f18" stroke-width="0.5" stroke-linecap="round"/>
      <circle cx="15" cy="8" r="3" fill="#C0B283"/>
    </svg>
  </div>
  
  <div bind:this={flowerRight} class="absolute -right-12 -bottom-14 z-0 pointer-events-none opacity-0 drop-shadow-xl saturate-150">
    <svg width="160" height="160" viewBox="0 0 24 24" fill="none" class="text-terracotta-700 sm:w-40 sm:h-40 mix-blend-multiply opacity-80">
      <path d="M19 22s2-8-3-12c-5-4-11-5-11-5s-1 6 4 11c5 5 10 6 10 6Z" fill="currentColor" />
      <path d="M2 6c3 0 8 2 12 6s6 10 6 10" stroke="#823c2a" stroke-width="0.5" stroke-linecap="round"/>
      <circle cx="9" cy="8" r="3" fill="#C0B283"/>
    </svg>
  </div>

  <!-- The Main Story Card Content (Text) -->
  <div class="relative z-10 crumble-content bg-transparent transition-opacity duration-300 {hasCrumbled ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} pointer-events-auto">
    <slot />
  </div>

  <!-- The Crumbling Wall Cover Overlay -->
  {#if !hasCrumbled}
    <div 
      bind:this={coverEl} 
      class="absolute inset-x-0 inset-y-0 z-20 overflow-hidden shadow-2xl transition-all duration-300 pointer-events-none"
      style={`filter: url(#${filterId})`}
    >
      <img src={crumblingWallImage} alt="" class="absolute inset-0 w-full h-full object-cover origin-center opacity-90 saturate-50" />
      <div class="absolute inset-0 bg-stone-900/60 mix-blend-multiply flex flex-col items-center justify-center border-2 border-stone-500/20 m-2">
        <span class="font-display text-gold-400 text-3xl mb-2 tracking-wide drop-shadow-lg">Discover</span>
        <span class="font-sans text-stone-300 uppercase tracking-[0.3em] text-[0.7rem] animate-pulse">Click to Reveal</span>
      </div>
    </div>
  {/if}

</div>
