<script lang="ts">
  import { Motion, type MotionValue } from 'svelte-motion';

  export let product: {
    title: string;
    link: string;
    thumbnail: string;
  };
  export let translate: MotionValue<number>;
</script>

<Motion let:motion style={{ x: translate }} whileHover={{ y: -20 }}>
  <div use:motion class="group/product relative h-96 w-[20rem] sm:w-[30rem] flex-shrink-0 cursor-pointer">
    <a href={product.link} class="block group-hover/product:shadow-2xl h-full w-full">
      <img
        src={product.thumbnail}
        loading="lazy"
        class="absolute inset-0 h-full w-full object-cover object-center rounded-sm shadow-xl"
        alt={product.title}
      />
    </a>
    <div
      class="pointer-events-none absolute inset-0 h-full w-full bg-forest-900 opacity-0 group-hover/product:opacity-60 transition-opacity duration-300 rounded-sm"
    ></div>
    <h2 class="font-display absolute bottom-6 left-6 text-gold-300 text-2xl opacity-0 group-hover/product:opacity-100 transition-opacity duration-300 drop-shadow-md">
      {product.title}
    </h2>
  </div>
</Motion>
