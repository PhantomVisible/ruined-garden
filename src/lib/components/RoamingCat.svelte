<script>
  import { onMount, onDestroy } from 'svelte';
  import gsap from 'gsap';
  import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

  // Each entry describes one cat instance:
  // - trigger: a CSS selector for the section that "owns" this cat
  // - side: 'left' | 'right' – which edge the cat peeks from
  // - top: vertical offset inside the section (as a CSS string)
  // - rotation: slight tilt so it feels organic
  // - size: width in px
  const placements = [
    { trigger: '[aria-labelledby="chapter-ruin"]',      side: 'right', top: '38%',  rotation: -8,  size: 90  },
    { trigger: '[aria-labelledby="chapter-ruin"]',      side: 'left',  top: '72%',  rotation: 12,  size: 75  },
    { trigger: '[aria-labelledby="chapter-gateway"]', side: 'right', top: '22%',  rotation: -5,  size: 85  },
    { trigger: '[aria-labelledby="chapter-guardians"]', side: 'left',  top: '55%',  rotation: 10,  size: 80  },
    { trigger: '[aria-labelledby="chapter-feast"]',     side: 'right', top: '60%',  rotation: -12, size: 95  },
  ];

  let cats = [];      // array of bound DOM elements
  let triggers = [];  // keep track of ScrollTrigger instances

  onMount(() => {
    if (typeof window === 'undefined') return;
    gsap.registerPlugin(ScrollTrigger);

    placements.forEach((p, i) => {
      const el = cats[i];
      if (!el) return;

      const section = document.querySelector(p.trigger);
      if (!section) return;

      triggers.push(
        ScrollTrigger.create({
          trigger: section,
          start: 'top 70%',
          end:   'bottom 30%',
          onEnter:      () => showCat(el, p.side),
          onLeave:      () => hideCat(el, p.side),
          onEnterBack:  () => showCat(el, p.side),
          onLeaveBack:  () => hideCat(el, p.side),
        })
      );
    });
  });

  onDestroy(() => {
    triggers.forEach(t => t.kill());
  });

  function showCat(el, side) {
    const fromX = side === 'right' ? 60 : -60;
    gsap.fromTo(el,
      { opacity: 0, x: fromX, scale: 0.8 },
      { opacity: 1, x: 0,     scale: 1,
        duration: 0.6, ease: 'back.out(1.4)' }
    );
  }

  function hideCat(el, side) {
    const toX = side === 'right' ? 60 : -60;
    gsap.to(el, { opacity: 0, x: toX, scale: 0.8, duration: 0.4, ease: 'power2.in' });
  }
</script>

{#each placements as p, i}
  <div
    bind:this={cats[i]}
    class="fixed z-30 pointer-events-none opacity-0"
    style="
      {p.side === 'right' ? 'right: 1.5rem;' : 'left: 1.5rem;'}
      top: {p.top};
      width: {p.size}px;
      transform: rotate({p.rotation}deg);
      mix-blend-mode: normal;
    "
    aria-hidden="true"
  >
    <img
      src="/assets/sleeping-cat.png"
      alt=""
      width={p.size}
      height={p.size}
      class="w-full h-auto drop-shadow-xl"
      style="filter: invert(1) opacity(0.55);"
    />
  </div>
{/each}
