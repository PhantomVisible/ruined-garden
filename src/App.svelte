<script>
  import { onMount } from 'svelte';
  import GrowingIvy from './lib/components/GrowingIvy.svelte';
  import Hero from './lib/components/Hero.svelte';
  import ChapterI from './lib/components/ChapterI.svelte';
  import ChapterII from './lib/components/ChapterII.svelte';
  import ChapterIII from './lib/components/ChapterIII.svelte';
  import Footer from './lib/components/Footer.svelte';
  import { refreshScrollTriggers } from './lib/animations/gsapAnimations.js';

  let mounted = false;

  onMount(() => {
    mounted = true;

    // Refresh scroll triggers after mount
    setTimeout(() => {
      refreshScrollTriggers();
    }, 100);

    // Refresh on window resize
    const handleResize = () => {
      refreshScrollTriggers();
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  });
</script>

<main class="w-full min-h-screen bg-stone-900">
  {#if mounted}
    <GrowingIvy />
  {/if}

  <Hero />
  <ChapterI />
  <ChapterII />
  <ChapterIII />
  <Footer />
</main>

<style>
  :global(html) {
    scroll-behavior: smooth;
  }

  :global(body) {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
  }

  :global(main) {
    position: relative;
    width: 100%;
  }
</style>
