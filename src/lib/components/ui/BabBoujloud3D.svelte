<script>
  import { browser } from '$app/environment';
  import { Canvas } from '@threlte/core';
  import BabBoujloudGateScene from './BabBoujloudGateScene.svelte';

  let isInteracting = false;
</script>

<div class="canvas-container group relative">
  {#if browser}
    <Canvas>
      <BabBoujloudGateScene bind:isInteracting />
    </Canvas>
  {/if}

  <div class="absolute inset-x-0 bottom-0 pointer-events-none flex items-end justify-center pb-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
    <p class="text-[0.65rem] uppercase tracking-[0.4em] text-gold-400 font-sans backdrop-blur-sm bg-forest-900/40 px-4 py-2 rounded-full border border-gold-900/20 shadow-2xl">
      Drag to Explore the Gateway
    </p>
  </div>
</div>

<style>
  .canvas-container {
    width: 100%;
    height: 500px;
    background: radial-gradient(circle at center, #1b3a24 0%, #0f1f18 100%);
    border-radius: 1.5rem;
    overflow: hidden;
    cursor: grab;
    box-shadow: 
      0 25px 50px -12px rgba(0, 0, 0, 0.5),
      inset 0 0 100px rgba(0, 0, 0, 0.2);
    border: 1px solid rgba(192, 178, 131, 0.15);
  }

  .canvas-container:active {
    cursor: grabbing;
  }
</style>
