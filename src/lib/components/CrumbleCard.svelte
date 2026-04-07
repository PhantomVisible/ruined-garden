<script>
  import { onMount, onDestroy } from "svelte";
  import gsap from "gsap";
  import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

  let mainContainer;
  let coverEl;
  let overlayEl;
  let flowerLeft;
  let flowerRight;
  let bricks = []; // Array to hold references to our brick divs
  export let hasCrumbled = false;
  
  const rows = 8; // Number of brick rows
  const cols = 6; // Number of brick columns
  const crumblingWallImage = '/assets/crumbling-wall.webp';
  let st; // ScrollTrigger instance

  const crumble = () => {
    if (hasCrumbled) return;

    const tl = gsap.timeline({
      onComplete: () => {
        hasCrumbled = true;
      },
    });

    // 1. Fade out the dark overlay immediately
    if (overlayEl) {
      gsap.to(overlayEl, { opacity: 0, duration: 0.3, ease: 'power2.out' });
    }

    // 2. Shatter the Bricks
    tl.to(bricks, {
      y: 600,            // Gravity: fall down
      x: "random(-100, 100)", // Explosion: push slightly left/right
      rotation: "random(-90, 90)", // Tumble
      opacity: 0,        // Fade out as they hit the "ground"
      scale: 0.8,
      duration: 1.5,
      stagger: {
        amount: 0.4,     // Bricks fall at slightly different times
        from: "center"   // Start "breaking" from where the user clicked
      },
      ease: "power2.in"
    });

    // 2. Botanical Growth
    tl.fromTo(
      [flowerLeft, flowerRight],
      { opacity: 0, scale: 0, rotation: -45, transformOrigin: "center" },
      {
        opacity: 0.8,
        scale: 1.2,
        rotation: 0,
        duration: 2,
        ease: "elastic.out(1, 0.5)",
        stagger: 0.3,
      },
      0.3,
    );
  };

  onMount(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    st = ScrollTrigger.create({
      trigger: mainContainer,
      start: "top 75%", // Triggers when the top of the card hits 75% down the viewport
      onEnter: crumble,
      once: true
    });
  });

  onDestroy(() => {
    if (st) st.kill();
  });
</script>

<div bind:this={mainContainer} class="relative block w-full outline-none">
  <!-- Emerging Flowers (Placeholders SVG) -->
  <div
    bind:this={flowerLeft}
    class="absolute -left-16 -top-12 z-0 pointer-events-none opacity-0 drop-shadow-xl saturate-150"
  >
    <!-- Detailed placeholder vine/leaf -->
    <svg
      width="140"
      height="140"
      viewBox="0 0 24 24"
      fill="none"
      class="text-forest-600 sm:w-36 sm:h-36 mix-blend-multiply opacity-80"
    >
      <path
        d="M5 22s-2-8 3-12c5-4 11-5 11-5s1 6-4 11c-5 5-10 6-10 6Z"
        fill="currentColor"
      />
      <path
        d="M22 6c-3 0-8 2-12 6s-6 10-6 10"
        stroke="#0f1f18"
        stroke-width="0.5"
        stroke-linecap="round"
      />
      <circle cx="15" cy="8" r="3" fill="#C0B283" />
    </svg>
  </div>

  <div
    bind:this={flowerRight}
    class="absolute -right-12 -bottom-14 z-0 pointer-events-none opacity-0 drop-shadow-xl saturate-150"
  >
    <svg
      width="160"
      height="160"
      viewBox="0 0 24 24"
      fill="none"
      class="text-terracotta-700 sm:w-40 sm:h-40 mix-blend-multiply opacity-80"
    >
      <path
        d="M19 22s2-8-3-12c-5-4-11-5-11-5s-1 6 4 11c5 5 10 6 10 6Z"
        fill="currentColor"
      />
      <path
        d="M2 6c3 0 8 2 12 6s6 10 6 10"
        stroke="#823c2a"
        stroke-width="0.5"
        stroke-linecap="round"
      />
      <circle cx="9" cy="8" r="3" fill="#C0B283" />
    </svg>
  </div>

  <!-- The Main Story Card Content (Text) -->
  <div class="relative z-10 crumble-content bg-transparent opacity-100 pointer-events-auto">
    <slot />
  </div>

  <!-- The Crumbling Wall Cover Overlay -->
  {#if !hasCrumbled}
    <div
      bind:this={coverEl}
      class="absolute inset-x-0 inset-y-0 z-20 grid overflow-hidden shadow-2xl transition-transform duration-300"
      style={`grid-template-columns: repeat(${cols}, 1fr); grid-template-rows: repeat(${rows}, 1fr);`}
    >
      {#each Array(rows * cols) as _, i}
        <div
          bind:this={bricks[i]}
          class="relative w-full h-full bg-cover"
          style="
            background-image: url({crumblingWallImage});
            background-size: {cols * 100}% {rows * 100}%;
            background-position: {(i % cols) * (100 / (cols - 1))}% {Math.floor(i / cols) * (100 / (rows - 1))}%;
            border: 0.5px solid rgba(0,0,0,0.1);
          "
        ></div>
      {/each}

      <div
        bind:this={overlayEl}
        class="absolute inset-0 bg-stone-900/40 mix-blend-multiply flex flex-col items-center justify-center border-2 border-stone-500/20 m-2 pointer-events-none"
      >
      </div>
    </div>
  {/if}
</div>
