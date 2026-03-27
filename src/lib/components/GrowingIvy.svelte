<script>
  import { onMount } from 'svelte';
  import { initGrowingIvy } from '../animations/gsapAnimations.js';

  let ivyPath;
  let svgContainer;

  onMount(() => {
    if (ivyPath) {
      initGrowingIvy(ivyPath);
    }

    // Handle window resize to refresh animations
    const handleResize = () => {
      // Refresh scroll triggers on resize
      if (window.gsap?.ScrollTrigger) {
        window.gsap.ScrollTrigger.refresh();
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  });
</script>

<svg
  bind:this={svgContainer}
  class="fixed left-0 top-0 w-full h-full pointer-events-none z-10"
  viewBox="0 0 100 {window.innerHeight || 1000}"
  preserveAspectRatio="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <!-- Define the ivy path with organic curves -->
  <defs>
    <filter id="ivy-blur">
      <feGaussianBlur in="SourceGraphic" stdDeviation="0.5" />
    </filter>
  </defs>

  <!-- Main ivy vine - grows down the left side -->
  <path
    bind:this={ivyPath}
    d="M 15 0 Q 10 100 15 200 Q 20 300 12 400 Q 8 500 18 600 Q 22 700 10 800 Q 5 900 15 1000 Q 20 1100 12 1200 Q 8 1300 18 1400 Q 22 1500 10 1600 Q 5 1700 15 1800 Q 20 1900 12 2000"
    stroke="#3a5f52"
    stroke-width="2"
    fill="none"
    stroke-linecap="round"
    stroke-linejoin="round"
    filter="url(#ivy-blur)"
    opacity="0.8"
  />

  <!-- Secondary ivy tendrils -->
  <path
    d="M 15 300 Q 25 320 35 310"
    stroke="#3a5f52"
    stroke-width="1.5"
    fill="none"
    stroke-linecap="round"
    opacity="0.6"
  />
  <path
    d="M 15 600 Q 5 620 -5 610"
    stroke="#3a5f52"
    stroke-width="1.5"
    fill="none"
    stroke-linecap="round"
    opacity="0.6"
  />
  <path
    d="M 15 900 Q 30 920 40 910"
    stroke="#3a5f52"
    stroke-width="1.5"
    fill="none"
    stroke-linecap="round"
    opacity="0.6"
  />
  <path
    d="M 15 1200 Q 5 1220 -5 1210"
    stroke="#3a5f52"
    stroke-width="1.5"
    fill="none"
    stroke-linecap="round"
    opacity="0.6"
  />
  <path
    d="M 15 1500 Q 25 1520 35 1510"
    stroke="#3a5f52"
    stroke-width="1.5"
    fill="none"
    stroke-linecap="round"
    opacity="0.6"
  />

  <!-- Decorative leaves along the vine -->
  <g opacity="0.5">
    <ellipse cx="18" cy="250" rx="4" ry="6" fill="#3a5f52" transform="rotate(45 18 250)" />
    <ellipse cx="12" cy="550" rx="4" ry="6" fill="#3a5f52" transform="rotate(-30 12 550)" />
    <ellipse cx="20" cy="850" rx="4" ry="6" fill="#3a5f52" transform="rotate(60 20 850)" />
    <ellipse cx="10" cy="1150" rx="4" ry="6" fill="#3a5f52" transform="rotate(-45 10 1150)" />
    <ellipse cx="18" cy="1450" rx="4" ry="6" fill="#3a5f52" transform="rotate(30 18 1450)" />
    <ellipse cx="12" cy="1750" rx="4" ry="6" fill="#3a5f52" transform="rotate(-60 12 1750)" />
  </g>
</svg>

<style>
  :global(svg) {
    will-change: stroke-dashoffset;
  }
</style>
