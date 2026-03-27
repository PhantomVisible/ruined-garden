<script>
  import { onMount } from 'svelte';
  import { initScrollReveal, initMenuHover } from '../animations/gsapAnimations.js';

  let chapterContent;
  let menuItems = [];

  onMount(() => {
    if (chapterContent) {
      initScrollReveal(chapterContent, {
        duration: 0.8,
        stagger: 0.1,
        start: 'top 75%',
        end: 'top 25%',
      });
    }

    // Initialize hover effects for menu items
    const items = document.querySelectorAll('[data-menu-item]');
    items.forEach((item) => {
      initMenuHover(item);
    });
  });

  const menu = [
    {
      course: 'Appetizers',
      items: [
        {
          name: 'Zaalouk',
          description: 'Roasted eggplant and tomato salad with preserved lemon',
          price: '12 DH',
        },
        {
          name: 'Pastilla aux Légumes',
          description: 'Crispy phyllo with seasonal vegetables and herbs',
          price: '18 DH',
        },
        {
          name: 'Cigares de Fes',
          description: 'Traditional fried rolls with spinach and ricotta',
          price: '15 DH',
        },
      ],
    },
    {
      course: 'Main Courses',
      items: [
        {
          name: 'Tagine de Poulet aux Olives',
          description: 'Slow-braised chicken with green olives and preserved lemon',
          price: '85 DH',
        },
        {
          name: 'Couscous Royal',
          description: 'Seven-vegetable couscous with lamb and chickpeas',
          price: '95 DH',
        },
        {
          name: 'Brochettes de l\'Oasis',
          description: 'Grilled lamb skewers with pomegranate glaze',
          price: '88 DH',
        },
      ],
    },
    {
      course: 'Desserts',
      items: [
        {
          name: 'Baklava aux Pistaches',
          description: 'Honey-soaked pastry with pistachios and rose water',
          price: '22 DH',
        },
        {
          name: 'Tarte aux Figues',
          description: 'Fresh figs with almond cream and dark chocolate',
          price: '20 DH',
        },
        {
          name: 'Mint Tea & Dates',
          description: 'Traditional Moroccan mint tea with Medjool dates',
          price: '16 DH',
        },
      ],
    },
  ];
</script>

<section
  id="chapter-iii"
  class="relative w-full py-32 md:py-48 px-4 md:px-8 bg-stone-900"
>
  <!-- Decorative background -->
  <div class="absolute inset-0 opacity-10">
    <div
      class="absolute bottom-0 left-0 w-96 h-96 bg-forest-800 rounded-full blur-3xl"
    ></div>
  </div>

  <div class="relative z-10 max-w-5xl mx-auto">
    <!-- Chapter header -->
    <div class="mb-16 md:mb-24">
      <span class="text-gold-600 font-display text-sm tracking-widest uppercase">
        Chapter III
      </span>
      <h2 class="font-display text-5xl md:text-7xl text-gold-400 mt-2 mb-8 leading-tight">
        The Feast
      </h2>
      <div class="w-16 h-1 bg-gradient-to-r from-gold-600 to-transparent"></div>
    </div>

    <!-- Introduction -->
    <div bind:this={chapterContent} class="mb-16 md:mb-24">
      <p
        class="text-lg md:text-xl text-stone-300 font-light leading-relaxed mb-6"
        data-reveal
      >
        Welcome to our culinary sanctuary. Each dish is a chapter in the story of Morocco—a narrative written in spices, textures, and time-honored traditions. Our menu is a journal of discovery, where every course invites you to venture deeper into the heart of Fes.
      </p>
    </div>

    <!-- Menu Journal -->
    <div class="space-y-16 md:space-y-24">
      {#each menu as course, idx}
        <div class="border-t border-stone-700 pt-12 md:pt-16">
          <h3 class="font-display text-3xl md:text-4xl text-gold-400 mb-8 tracking-wide">
            {course.course}
          </h3>

          <div class="space-y-6">
            {#each course.items as item, itemIdx}
              <div
                data-menu-item
                class="group p-6 md:p-8 border-l-2 border-transparent hover:border-gold-600 transition-colors duration-300 cursor-pointer"
              >
                <div class="flex items-start justify-between mb-2">
                  <h4 class="font-display text-xl md:text-2xl text-stone-100 group-hover:text-gold-400 transition-colors duration-300">
                    {item.name}
                  </h4>
                  <span
                    class="text-gold-600 font-display text-lg font-light ml-4 whitespace-nowrap"
                  >
                    {item.price}
                  </span>
                </div>
                <p class="text-stone-400 font-light text-base md:text-lg leading-relaxed">
                  {item.description}
                </p>

                <!-- Leaf sprout on hover -->
                <div
                  data-leaf
                  class="inline-block mt-3 text-gold-600 opacity-0 scale-50 transition-all duration-300"
                >
                  🌿
                </div>
              </div>
            {/each}
          </div>
        </div>
      {/each}
    </div>

    <!-- Closing statement -->
    <div class="mt-16 md:mt-24 pt-12 md:pt-16 border-t border-stone-700">
      <p class="text-lg md:text-xl text-stone-300 font-light leading-relaxed italic">
        "Every meal at The Ruined Garden is an act of reverence—to the land that provides, to the hands that prepare, and to the moments we share together."
      </p>
      <p class="text-sm text-stone-500 mt-4 font-light">
        — Chef's Philosophy
      </p>
    </div>

    <!-- Call to action -->
    <div class="mt-16 md:mt-24 text-center">
      <p class="text-stone-400 font-light mb-6">
        Ready to embark on your culinary journey?
      </p>
      <a
        href="#contact"
        class="inline-flex items-center justify-center px-8 py-4 border-2 border-gold-600 text-gold-400 hover:text-forest-900 hover:bg-gold-600 transition-all duration-300 ease-out font-display text-lg font-light tracking-wide"
      >
        Reserve Your Table
      </a>
    </div>
  </div>
</section>

<style>
  [data-menu-item] {
    transition: all 0.3s ease;
  }

  [data-menu-item]:hover {
    background: rgba(192, 178, 131, 0.05);
  }
</style>
