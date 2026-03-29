<script>
  import { onMount, onDestroy } from 'svelte';
  import gsap from 'gsap';
  import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
  import GrowingIvy from '$lib/components/GrowingIvy.svelte';
  import CrumblingWall from '$lib/components/CrumblingWall.svelte';
  import ZelligeTile from '$lib/components/ZelligeTile.svelte';
  import Hero from '$lib/components/Hero.svelte';

  const heroImage = '/assets/the-garden-early-evening.webp';
  const feastImage = '/assets/the-garden-at-night-photo.webp';

  if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
  }

  let rootEl;
  let catEgg;
  let ctx;

  onMount(() => {
    ctx = gsap.context(() => {
      const storyBlocks = rootEl.querySelectorAll('[data-story-block]');
      const highlightWords = rootEl.querySelectorAll('.practical-word');

      storyBlocks.forEach((block) => {
        const sentences = block.querySelectorAll('.story-sentence');

        gsap.fromTo(
          sentences,
          { opacity: 0, y: 22 },
          {
            opacity: 1,
            y: 0,
            ease: 'power2.out',
            duration: 0.45,
            stagger: 0.28,
            scrollTrigger: {
              trigger: block,
              start: 'top 78%',
              end: 'bottom 45%',
              scrub: 0.7
            }
          }
        );
      });

      highlightWords.forEach((word) => {
        gsap.to(word, {
          color: '#C0B283',
          textShadow: '0 0 18px rgba(192, 178, 131, 0.55)',
          ease: 'power1.inOut',
          scrollTrigger: {
            trigger: word,
            start: 'top 86%',
            end: 'bottom 58%',
            scrub: 0.45
          }
        });
      });

      gsap.fromTo(
        catEgg,
        { opacity: 0, x: -14, scale: 0.86 },
        {
          opacity: 0.8,
          x: 0,
          scale: 1,
          duration: 0.45,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '#guardians',
            start: 'top 63%',
            toggleActions: 'play none none reverse',
            onEnter: () => {
              gsap.to(catEgg, { opacity: 0, delay: 1.2, duration: 0.55, ease: 'power1.inOut' });
            },
            onEnterBack: () => {
              gsap.to(catEgg, { opacity: 0.8, duration: 0.25 });
              gsap.to(catEgg, { opacity: 0, delay: 1, duration: 0.45 });
            }
          }
        }
      );
    }, rootEl);
  });

  onDestroy(() => {
    if (ctx) ctx.revert();
  });
</script>

<svelte:head>
  <title>The Ruined Garden | Fes</title>
</svelte:head>

<!-- Global Vine (Scrollytelling spine) -->
<GrowingIvy />

<main bind:this={rootEl} class="site-shell bg-stone-50 text-stone-900 overflow-x-hidden selection:bg-gold-300 selection:text-forest-900">
  
  <Hero />

  <!-- Chapter I: The Sanctuary Found -->
  <section aria-labelledby="chapter-ruin" class="relative min-h-screen flex flex-col items-center justify-center text-center px-4 py-20 overflow-hidden chapter-shell">
    <img
      class="absolute inset-0 h-full w-full object-cover fixed-parallax gpu-layer"
      src={heroImage}
      alt=""
      loading="eager"
      fetchpriority="high"
      decoding="async"
      sizes="100vw"
    />
    <div class="absolute inset-0 bg-stone-100/80"></div>
    <div class="grain-overlay"></div>
    <div class="max-w-5xl mx-auto z-10 relative animate-fade-in animate-slide-up story-panel">
      <p class="chapter-eyebrow">Chapter I: The Sanctuary Found</p>
      <h1 id="chapter-ruin" class="font-display text-5xl md:text-7xl lg:text-8xl text-forest-800 mb-6 leading-tight chapter-title">
        A Secret Map to the Soul of Fes.
      </h1>
      <div class="luxury-divider mx-auto mb-12"></div>
      <div data-story-block class="font-sans text-xl text-stone-700 leading-relaxed max-w-3xl mx-auto drop-shadow-sm font-medium text-left md:text-center space-y-4">
        <p class="story-sentence">Five minutes from the chaos of Talaa Seghira, time begins to slow.</p>
        <p class="story-sentence">Follow the hand-painted signs through the labyrinth of the Medina until the stone gives way to a hidden gate.</p>
        <p class="story-sentence">Here, a 14th-century merchant’s palace has been reclaimed by the earth.</p>
        <p class="story-sentence">We are a ruin, yes, but a living one.</p>
        <p class="story-sentence">Whether you find us by the light of a log fire in the winter salon or under the wide-brimmed shade of a summer sun hat, the garden is always waiting.</p>
      </div>
    </div>
  </section>

  <!-- Chapter II: The Alchemist’s Table -->
  <section id="history" aria-labelledby="chapter-history" class="relative">
    <CrumblingWall />
    <div class="absolute inset-x-0 bottom-0 z-20 px-4 pb-14">
      <div class="max-w-4xl mx-auto chapter-card p-6 md:p-10">
        <p class="chapter-eyebrow text-center">Chapter II: The Alchemist's Table</p>
        <h2 class="font-display text-4xl md:text-6xl text-terracotta-800 mb-6 text-center chapter-title">Of Fire and Slow Time.</h2>
        <div class="luxury-divider mx-auto mb-8"></div>
        <div data-story-block class="font-sans text-stone-700 text-lg md:text-xl leading-relaxed space-y-4">
          <p class="story-sentence">Our kitchen breathes with the seasons.</p>
          <p class="story-sentence">At midday, we serve the vibrant pulse of the street, tapas and pastries dusted with sugar and history.</p>
          <p class="story-sentence">But as the shadows lengthen across the Zellige, the real magic begins.</p>
          <p class="story-sentence">This is the home of the <span class="practical-word">7-hour lamb</span>, a dish that cannot be rushed, only coaxed into perfection.</p>
          <p class="story-sentence">Sip on chilled milk infused with date and orange blossom, or a sharp cucumber-mint tonic.</p>
          <p class="story-sentence">We serve no spirits here; the garden provides all the intoxication you require.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Chapter III: The Guardians of the Medina -->
  <section id="guardians" aria-labelledby="chapter-guardians" class="relative min-h-screen bg-stone-100 py-32 flex flex-col items-center justify-center chapter-shell">
    <div class="max-w-4xl mx-auto px-4 text-center z-10 mb-12 story-panel relative">
      <div bind:this={catEgg} class="cat-easter-egg" aria-hidden="true">
        <img 
          src="/assets/sleeping-cat.svg" 
          alt="Sleeping Cat" 
          width="84" 
          height="84" 
          class="opacity-90 mix-blend-multiply drop-shadow-sm"
        />
      </div>
      <p class="chapter-eyebrow mb-8">Chapter III: The Guardians of the Medina</p>
      <h2 id="chapter-guardians" class="font-display text-5xl md:text-7xl text-terracotta-800 mb-8 chapter-title">Shadows in the Garden.</h2>
      <div class="luxury-divider mx-auto mb-8"></div>
      <div data-story-block class="font-sans text-stone-700 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto space-y-4">
        <p class="story-sentence">You may see them, the silent, amber-eyed watchers of the Medina.</p>
        <p class="story-sentence">The stray cats of Fes are our ancient pest-control and our companions.</p>
        <p class="story-sentence">While we feed them at the gates and keep their water bowls full, we ask that you let them remain wild within our walls.</p>
        <p class="story-sentence">Behind the scenes, our human family works with the same quiet grace.</p>
        <p class="story-sentence">At The Ruined Garden, every gratuity goes directly to the hands that prepared your tea and the hearts that tend the hearth.</p>
      </div>
    </div>
    
    <ZelligeTile />
    
  </section>

  <!-- Chapter IV: The Guided Return -->
  <section id="feast" aria-labelledby="chapter-feast" class="relative min-h-[90vh] bg-forest-900 text-stone-100 flex flex-col justify-center items-center text-center px-4 py-32 shadow-[inset_0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden">
    <img
      class="absolute inset-0 h-full w-full object-cover fixed-parallax gpu-layer opacity-30"
      src={feastImage}
      alt=""
      loading="lazy"
      decoding="async"
      sizes="100vw"
    />
    <div class="grain-overlay"></div>
    <div class="relative z-10 max-w-3xl mx-auto story-panel-dark">
      <p class="chapter-eyebrow text-gold-100/80 mb-7">Chapter IV: The Guided Return</p>
      <h2 id="chapter-feast" class="font-display text-5xl md:text-8xl text-gold-400 mb-8 glow-effect chapter-title">The Way Home.</h2>
      <div class="luxury-divider mx-auto mb-10"></div>
      <div data-story-block class="font-sans text-xl md:text-2xl text-stone-200 leading-relaxed mb-16 space-y-5">
        <p class="story-sentence">The Medina is a beautiful maze, but you need never feel lost.</p>
        <p class="story-sentence">For a few dirhams, our <span class="practical-word">Escort Service</span> will meet you at your riad and guide you through the starlit alleys to our door.</p>
        <p class="story-sentence">And when the feast is done, we make sure you return safely.</p>
        <p class="story-sentence">During the high seasons of light and bloom, our tables fill quickly. Secure your place in the story before the garden closes its gates for the night.</p>
      </div>
      <button class="cta-luxury focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-300 focus-visible:ring-offset-2 focus-visible:ring-offset-forest-900">
        Reserve Your Table
      </button>
    </div>
  </section>
  
  <footer class="bg-[#0f1f18] text-stone-500 py-16 text-center font-sans tracking-wide border-t border-gold-900/40">
    <p class="text-sm uppercase mb-4 text-gold-600/50 hover:text-gold-400 transition-colors cursor-pointer">Built with SvelteKit & GSAP</p>
    <p>&copy; 2026 The Ruined Garden. All rights reserved.</p>
  </footer>
</main>
