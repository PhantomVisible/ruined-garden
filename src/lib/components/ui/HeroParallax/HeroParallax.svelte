<script lang="ts">
  import { Motion, useTransform, useSpring, useViewportScroll } from 'svelte-motion';
  import ProductCard from './ProductCard.svelte';

  export let products: {
    title: string;
    link: string;
    thumbnail: string;
  }[];

  // Distribute items into three rows
  $: oneThird = Math.max(1, Math.floor(products.length / 3));
  $: firstRow = products.slice(0, oneThird);
  $: secondRow = products.slice(oneThird, oneThird * 2);
  $: thirdRow = products.slice(oneThird * 2);

  let ref;
  const { scrollYProgress } = useViewportScroll();
  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };
  const translateX = useSpring(useTransform(scrollYProgress, [0, 1], [0, 1000]), springConfig);
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(useTransform(scrollYProgress, [0, 0.2], [15, 0]), springConfig);
  const opacity = useSpring(useTransform(scrollYProgress, [0, 0.2], [0.2, 1]), springConfig);
  const rotateZ = useSpring(useTransform(scrollYProgress, [0, 0.2], [20, 0]), springConfig);
  const translateY = useSpring(useTransform(scrollYProgress, [0, 0.2], [-700, 300]), springConfig);
</script>

<div
  bind:this={ref}
  class="relative flex h-[300vh] flex-col self-auto overflow-hidden py-4 antialiased [perspective:1000px] [transform-style:preserve-3d] bg-stone-50"
>
  <div class="relative left-0 top-0 mx-auto w-full max-w-7xl px-4 py-8 md:py-40 z-20 pointer-events-auto">
    <!-- Our custom slot for the actual Ruined Garden Headings -->
    <slot />
  </div>

  <Motion let:motion style={{ rotateX, rotateZ, translateY, opacity }}>
    <div use:motion class="pointer-events-none pb-40">
      <Motion let:motion>
        <div use:motion class="mb-20 flex flex-row-reverse space-x-20 space-x-reverse pointer-events-auto">
          {#each firstRow as product, i (product.thumbnail + i)}
            <ProductCard {product} translate={translateX} />
          {/each}
        </div>
      </Motion>

      <Motion let:motion>
        <div use:motion class="mb-20 flex flex-row space-x-20 pointer-events-auto">
          {#each secondRow as product, i (product.thumbnail + i)}
            <ProductCard {product} translate={translateXReverse} />
          {/each}
        </div>
      </Motion>

      <Motion let:motion>
        <div use:motion class="flex flex-row-reverse space-x-20 space-x-reverse pointer-events-auto">
          {#each thirdRow as product, i (product.thumbnail + i)}
            <ProductCard {product} translate={translateX} />
          {/each}
        </div>
      </Motion>
    </div>
  </Motion>
</div>
