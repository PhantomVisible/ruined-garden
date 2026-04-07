<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import { Motion, useTransform, useSpring, useViewportScroll, useMotionValue } from 'svelte-motion';
  import gsap from 'gsap';
  import ProductCard from './ProductCard.svelte';

  export let products: {
    title: string;
    link: string;
    thumbnail: string;
  }[];

  // --- Fisher-Yates Shuffle & Visual Tripling ---
  const shuffleArray = (array: any[]) => {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  };

  // Give each row a unique random order of ALL products
  $: firstRowBase  = shuffleArray(products);
  $: secondRowBase = shuffleArray(products);
  $: thirdRowBase  = shuffleArray(products);

  // Triple each row so the wrap reset is never visible
  $: firstRow  = [...firstRowBase,  ...firstRowBase,  ...firstRowBase];
  $: secondRow = [...secondRowBase, ...secondRowBase, ...secondRowBase];
  $: thirdRow  = [...thirdRowBase,  ...thirdRowBase,  ...thirdRowBase];

  // --- Scroll-driven base parallax (unchanged behaviour) ---
  const { scrollYProgress } = useViewportScroll();
  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const scrollX        = useSpring(useTransform(scrollYProgress, [0, 1], [0,  1000]), springConfig);
  const scrollXReverse = useSpring(useTransform(scrollYProgress, [0, 1], [0, -1000]), springConfig);
  const rotateX        = useSpring(useTransform(scrollYProgress, [0, 0.2], [15,    0]), springConfig);
  const opacity        = useSpring(useTransform(scrollYProgress, [0, 0.2], [0.2,   1]), springConfig);
  const rotateZ        = useSpring(useTransform(scrollYProgress, [0, 0.2], [20,    0]), springConfig);
  const translateY     = useSpring(useTransform(scrollYProgress, [0, 0.2], [-700, 300]), springConfig);

  // --- Continuous auto-scroll via gsap.ticker + useMotionValue ---
  // Wrap limit: ~560px per card × total items in one base row
  $: WRAP_PX = 560 * products.length;
  
  const SPEED_1 = 0.4;
  const SPEED_2 = 0.45;
  const SPEED_3 = 0.5;

  // Raw MotionValues for the continuous offset
  const auto1 = useMotionValue(0);
  const auto2 = useMotionValue(0);
  const auto3 = useMotionValue(0);

  // Combined: scroll + continuous + initial "head start" offset
  const translateX1 = useTransform([scrollX, auto1], ([s, a]: number[]) => -1500 + s + a);
  const translateX2 = useTransform([scrollXReverse, auto2], ([s, a]: number[]) => s + a);
  const translateX3 = useTransform([scrollX, auto3], ([s, a]: number[]) => -1800 + s + a);

  // Apply spring smoothing to the combined values
  const translateX1Spring = useSpring(translateX1, springConfig);
  const translateX2Spring = useSpring(translateX2, springConfig);
  const translateX3Spring = useSpring(translateX3, springConfig);

  let ticker: (() => void) | null = null;

  onMount(() => {
    let offset1 = 0;
    let offset2 = 0;
    let offset3 = 0;
    ticker = () => {
      offset1 = (offset1 + SPEED_1) % WRAP_PX;
      offset2 = (offset2 - SPEED_2 + WRAP_PX) % WRAP_PX;
      offset3 = (offset3 + SPEED_3) % WRAP_PX;
      
      auto1.set(offset1);
      auto2.set(-offset2); // drifts left
      auto3.set(offset3);
    };
    gsap.ticker.add(ticker);
  });

  onDestroy(() => {
    if (ticker) gsap.ticker.remove(ticker);
  });
</script>

<div
  class="relative flex h-[220vh] flex-col self-auto overflow-hidden py-4 antialiased [perspective:1000px] [transform-style:preserve-3d] bg-stone-50"
>
  <div class="relative left-0 top-0 mx-auto w-full max-w-7xl px-4 py-8 md:py-40 z-20 pointer-events-auto">
    <slot />
  </div>

  <Motion let:motion style={{ rotateX, rotateZ, translateY, opacity }}>
    <div use:motion class="pointer-events-none pb-10">

      <!-- Row 1: forward (right) drift -->
      <div class="mb-20 flex flex-row flex-nowrap whitespace-nowrap w-max space-x-20 pointer-events-auto">
        {#each firstRow as product, i (i)}
          <ProductCard {product} translate={translateX1Spring} />
        {/each}
      </div>

      <!-- Row 2: reverse (left) drift -->
      <div class="mb-20 flex flex-row flex-nowrap whitespace-nowrap w-max space-x-20 pointer-events-auto">
        {#each secondRow as product, i (i)}
          <ProductCard {product} translate={translateX2Spring} />
        {/each}
      </div>

      <!-- Row 3: forward (right) drift -->
      <div class="flex flex-row flex-nowrap whitespace-nowrap w-max space-x-20 pointer-events-auto">
        {#each thirdRow as product, i (i)}
          <ProductCard {product} translate={translateX3Spring} />
        {/each}
      </div>

    </div>
  </Motion>
</div>
