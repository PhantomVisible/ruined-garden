<script>
  import { onMount, onDestroy } from 'svelte';
  import gsap from 'gsap';



  let ivyPath;
  let leafPaths = [];
  let ctx;

  onMount(async () => {
    const { ScrollTrigger } = await import('gsap/dist/ScrollTrigger');
    gsap.registerPlugin(ScrollTrigger);

    ctx = gsap.context(() => {
      if (!ivyPath) return;
      const length = ivyPath.getTotalLength();
      gsap.set(ivyPath, { strokeDasharray: length, strokeDashoffset: length });
      
      leafPaths.forEach(leaf => {
        if (leaf) gsap.set(leaf, { scale: 0, transformOrigin: 'center center', opacity: 0 });
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: document.body,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 0.5
        }
      });

      tl.to(ivyPath, {
        strokeDashoffset: 0,
        ease: 'none',
        duration: 1
      }, 0);

      // Staggered leaf scaling mapped to scroll progress
      leafPaths.forEach((leaf, i) => {
        if (leaf) {
          tl.to(leaf, {
            scale: 1,
            opacity: 1,
            ease: 'back.out(1.5)',
            duration: 0.1
          }, (i + 1) * (1 / (leafPaths.length + 1)));
        }
      });
    });
  });

  onDestroy(() => {
    if (ctx) ctx.revert();
  });
</script>

<div class="fixed top-0 left-0 lg:left-8 w-16 h-screen pointer-events-none z-50 mix-blend-multiply" aria-hidden="true">
  <svg width="100%" height="100%" viewBox="0 0 100 1000" preserveAspectRatio="none">
    <!-- The main vine -->
    <path 
      bind:this={ivyPath}
      d="M50,0 Q80,100 50,200 T50,400 T50,600 T50,800 T50,1000"
      stroke="#1B3A24"
      stroke-width="4"
      fill="none"
      stroke-linecap="round"
      style="will-change: stroke-dashoffset;"
    />
    
    <!-- Leaves -->
    <path bind:this={leafPaths[0]} d="M50,150 Q70,140 80,160 Q60,170 50,150" fill="#2a4a3f" />
    <path bind:this={leafPaths[1]} d="M50,250 Q30,240 20,260 Q40,270 50,250" fill="#3a5f52" />
    <path bind:this={leafPaths[2]} d="M50,350 Q75,340 85,360 Q65,370 50,350" fill="#1B3A24" />
    <path bind:this={leafPaths[3]} d="M50,450 Q25,440 15,460 Q35,470 50,450" fill="#2a4a3f" />
    <path bind:this={leafPaths[4]} d="M50,550 Q70,540 80,560 Q60,570 50,550" fill="#3a5f52" />
    <path bind:this={leafPaths[5]} d="M50,700 Q30,690 20,710 Q40,720 50,700" fill="#1B3A24" />
    <path bind:this={leafPaths[6]} d="M50,850 Q70,840 80,860 Q60,870 50,850" fill="#2a4a3f" />
  </svg>
</div>
