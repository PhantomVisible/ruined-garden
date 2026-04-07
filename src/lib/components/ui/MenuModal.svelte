<script>
  import { onDestroy } from 'svelte';
  import gsap from 'gsap';

  export let isOpen = false;

  const menuData = [
    {
      category: 'Starters',
      items: [
        { name: 'Smoked Eggplants And Cheese', price: '80,00 dh' },
        { name: 'Moroccan Trio Salade', price: '80,00 dh' },
        { name: 'Moroccan Green Salade', price: '30,00 dh' },
        { name: 'Sardines With Fresh Salade', price: '90,00 dh' },
        { name: 'Briwat Trio — Chicken / Veg / Beef', price: '80,00 dh' },
      ],
    },
    {
      category: 'Soups',
      items: [
        { name: 'Harira', price: '50,00 dh' },
        { name: 'Besara', price: '50,00 dh' },
        { name: 'Soup Of The Day', price: '50,00 dh' },
      ],
    },
    {
      category: 'Stews',
      items: [
        { name: 'Seffa With Caramelized Onions And Raisins', price: '60,00 dh' },
        { name: 'White Beans Stew', price: '50,00 dh' },
        { name: 'Lentils Stew', price: '50,00 dh' },
        { name: '+ Add Egg', price: '10,00 dh' },
      ],
    },
    {
      category: 'Main Courses',
      items: [
        { name: 'Chicken Pastilla', price: '160,00 dh' },
        { name: 'Vegetarian Pastilla', price: '130,00 dh' },
        { name: 'Vegetarian Tajine', price: '100,00 dh' },
        { name: 'Lamb Tajine', price: '150,00 dh', description: 'Lamb with caramelized onions, prunes, and apricots' },
        { name: 'Chicken Refissa', price: '150,00 dh', description: 'Steamed pastry with lentils, chicken, eggs, and fenugreek' },
        { name: 'Chicken Daghmira', price: '150,00 dh', description: 'Chicken with caramelized onions, preserved lemon, and olives' },
        { name: 'Sardines Tajine', price: '130,00 dh', description: 'Cooked sardines with tomato sauce and bell pepper' },
        { name: 'Kefta Tajine', price: '130,00 dh', description: 'Beef meatballs with tomato sauce and eggs' },
      ],
    },
    {
      category: 'Special Dishes — Pre-Order',
      items: [
        { name: 'Pigeon Pastilla', price: '350,00 dh' },
        { name: 'Saphardic Chicken', price: '400,00 dh', description: 'Poached with beef stuffing, saffron, eggs, and chickpeas' },
        { name: '7 Hours Lamb Mechoui', price: '500,00 dh', description: '1 kg fresh lamb with vegetarian tajine — each additional kilo 250 dh' },
      ],
    },
    {
      category: 'Water',
      items: [
        { name: 'Still Mineral Water', price: '10,00 dh', description: '0,5 l | 1,5 l' },
        { name: 'Sparkling Water', price: '15,00 dh', description: '0,5 l | 1 l' },
      ],
    },
    {
      category: 'Infusions',
      items: [
        { name: 'Iced Mint Tea', price: '30,00 dh' },
        { name: 'Lemon Verbena', price: '30,00 dh' },
        { name: 'Moroccan Mint Tea', price: '30,00 dh' },
        { name: 'Lipton / Earl Grey / English Breakfast', price: '30,00 dh' },
      ],
    },
    {
      category: 'Juice',
      items: [
        { name: 'Lemonade Sour With Mint', price: '30,00 dh' },
        { name: 'Fresh Orange Juice', price: '30,00 dh' },
        { name: 'Dates & Orange Blossom Milk', price: '40,00 dh' },
        { name: 'Juice Of The Day', price: '40,00 dh' },
      ],
    },
    {
      category: 'Soda',
      items: [
        { name: 'Coca Cola / Sprite / Tonic / Coca Cola Zero / Salty Preserved Lemon With Sprite', price: '30,00 dh' },
      ],
    },
    {
      category: 'Coffee & Chocolate',
      items: [
        { name: 'Espresso', price: '30,00 dh' },
        { name: 'Macchiato', price: '30,00 dh' },
        { name: 'Americano', price: '30,00 dh' },
        { name: 'Cappuccino', price: '30,00 dh' },
        { name: 'Nus Nus', price: '30,00 dh' },
        { name: 'Hot Chocolate', price: '30,00 dh' },
        { name: 'Iced Coffee', price: '30,00 dh' },
        { name: 'Iced Latte', price: '30,00 dh' },
      ],
    },
    {
      category: 'Desserts',
      items: [
        { name: 'Fig & Dates Cake', price: '60,00 dh' },
        { name: 'Crème Brûlée With Saffron And Dates', price: '70,00 dh' },
        { name: 'Chocolate Cake With Prunes And Apricots', price: '60,00 dh' },
        { name: 'Dark Chocolate Mousse With Ras El Hanout', price: '70,00 dh' },
      ],
    },
  ];

  let overlayEl;
  let contentEl;
  let ctx;

  // Reactive: animate in when isOpen becomes true
  $: if (isOpen && typeof window !== 'undefined') {
    document.body.style.overflow = 'hidden';
    // Wait one tick for the DOM to mount the overlay
    requestAnimationFrame(() => {
      if (!overlayEl || !contentEl) return;
      ctx = gsap.context(() => {
        const tl = gsap.timeline();
        tl.fromTo(
          overlayEl,
          { opacity: 0 },
          { opacity: 1, duration: 0.4, ease: 'power2.out' }
        ).fromTo(
          contentEl.querySelectorAll('.menu-category'),
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.55, stagger: 0.07, ease: 'power3.out' },
          '-=0.1'
        );
      }, overlayEl);
    });
  }

  $: if (!isOpen && typeof window !== 'undefined') {
    if (document.body) document.body.style.overflow = '';
  }

  function close() {
    if (ctx) ctx.revert();
    gsap.to(overlayEl, {
      opacity: 0,
      duration: 0.3,
      ease: 'power2.in',
      onComplete: () => { isOpen = false; },
    });
  }

  function handleKeydown(e) {
    if (e.key === 'Escape' && isOpen) close();
  }

  onDestroy(() => {
    if (ctx) ctx.revert();
    if (typeof window !== 'undefined' && document.body) {
      document.body.style.overflow = '';
    }
  });
</script>

<svelte:window on:keydown={handleKeydown} />

{#if isOpen}
  <!-- Backdrop -->
  <div
    bind:this={overlayEl}
    class="fixed inset-0 z-50 bg-[#0f1f18]/95 backdrop-blur-md overflow-y-auto"
    role="dialog"
    aria-modal="true"
    aria-label="Restaurant Menu"
  >
    <!-- Close button -->
    <button
      on:click={close}
      class="fixed top-6 right-6 z-10 w-12 h-12 flex items-center justify-center rounded-full border border-[#C0B283]/40 text-[#C0B283] hover:border-[#C0B283] hover:bg-[#C0B283]/10 transition-all duration-300 text-2xl leading-none"
      aria-label="Close menu"
    >
      ✕
    </button>

    <!-- Menu content -->
    <div
      bind:this={contentEl}
      class="max-w-3xl mx-auto px-6 py-24 md:px-8 md:py-32"
    >
      <!-- Header -->
      <div class="text-center mb-16 md:mb-20">
        <p class="font-sans text-[0.65rem] tracking-[0.25em] text-[#C0B283]/60 uppercase mb-3">The Ruined Garden · Fes</p>
        <h2 class="font-serif text-5xl md:text-7xl text-[#C0B283] leading-tight">The Menu</h2>
        <div class="w-16 h-px bg-gradient-to-r from-transparent via-[#C0B283]/50 to-transparent mx-auto mt-6"></div>
      </div>

      <!-- Categories -->
      <div class="space-y-14 md:space-y-20">
        {#each menuData as section (section.category)}
          <div class="menu-category">
            <!-- Category title -->
            <div class="mb-6 pb-3 border-b border-[#C0B283]/20 text-center">
              <h3 class="font-serif text-2xl md:text-3xl text-[#C0B283] tracking-wide">
                {section.category}
              </h3>
            </div>

            <!-- Items -->
            <ul class="space-y-4">
              {#each section.items as item}
                <li class="flex items-start gap-4">
                  <!-- Name + description -->
                  <div class="flex-1 min-w-0">
                    <span class="font-serif text-lg md:text-xl text-stone-200 leading-snug">{item.name}</span>
                    {#if item.description}
                      <p class="font-sans text-xs text-stone-400 italic mt-0.5 leading-relaxed">{item.description}</p>
                    {/if}
                  </div>
                  <!-- Dotted spacer -->
                  <div class="flex-shrink-0 flex items-center pt-[0.4rem]">
                    <span class="hidden sm:block w-16 border-b border-dotted border-[#C0B283]/25 mx-2"></span>
                  </div>
                  <!-- Price -->
                  <span class="font-sans text-sm text-[#C0B283] whitespace-nowrap pt-0.5 flex-shrink-0">{item.price}</span>
                </li>
              {/each}
            </ul>
          </div>
        {/each}
      </div>

      <!-- Footer note -->
      <div class="mt-20 text-center">
        <div class="w-16 h-px bg-gradient-to-r from-transparent via-[#C0B283]/30 to-transparent mx-auto mb-6"></div>
        <p class="font-sans text-xs text-stone-500 tracking-widest uppercase">All prices include taxes · Special dishes require pre-order</p>
      </div>
    </div>
  </div>
{/if}
