<script>
  import { onMount, onDestroy, tick } from 'svelte';
  import { gsap } from 'gsap';

  export let isOpen = false;

  const questions = [
    {
      question: "How are you travelling?",
      options: ["Just the two of us", "Honeymoon", "Small group (4–8)", "Solo but sociable", "Family"]
    },
    {
      question: "How long do you have?",
      options: ["4–5 nights", "7 nights", "10–12 nights", "Two weeks+", "Flexible"]
    },
    {
      question: "What pulls you most?",
      options: ["Ancient medinas & culture", "Desert silence", "Atlantic coast & surf", "Mountains & villages", "All of it"]
    }
  ];

  let currentStep = 0;
  let answers = [];
  let selectedOption = null;
  let isAnimating = false;
  let isCurating = true;
  let isSubmitting = false;
  let isSubmitted = false;

  let overlayEl;
  let containerElement;
  let ctx;

  let prevOpen = false;
  $: if (isOpen !== prevOpen) {
    prevOpen = isOpen;

    if (isOpen && typeof window !== 'undefined') {
      document.body.style.overflow = 'hidden';

      // Reset state only when freshly opening
      currentStep = 0;
      answers = [];
      isCurating = true;
      selectedOption = null;
      isSubmitting = false;
      isSubmitted = false;

      requestAnimationFrame(() => {
        if (!overlayEl || !containerElement) return;
        ctx = gsap.context(() => {
          const tl = gsap.timeline();
          tl.fromTo(overlayEl, { opacity: 0 }, { opacity: 1, duration: 0.4, ease: 'power2.out' })
            .fromTo(containerElement, { opacity: 0, y: 30, scale: 0.95 }, { opacity: 1, y: 0, scale: 1, duration: 0.5, ease: 'power3.out' }, '-=0.2');
        }, overlayEl);
      });
    } else if (!isOpen && typeof window !== 'undefined') {
      if (document.body) document.body.style.overflow = '';
    }
  }

  function close() {
    if (ctx) ctx.revert();
    gsap.to(overlayEl, {
      opacity: 0,
      duration: 0.3,
      ease: 'power2.in',
      onComplete: () => { isOpen = false; }
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

  const handleOptionClick = (option) => {
    if (isAnimating) return;
    
    selectedOption = option;
    answers[currentStep] = option;
    
    setTimeout(() => {
      goToNextStep();
    }, 400);
  };

  const goToNextStep = async () => {
    if (isAnimating) return;
    isAnimating = true;

    ctx.add(() => {
      gsap.to('.anim-container', {
        y: -15,
        opacity: 0,
        duration: 0.4,
        ease: 'power2.in',
        onComplete: async () => {
          currentStep += 1;
          selectedOption = null;
          await tick();

          if (currentStep < questions.length) {
            gsap.fromTo('.anim-container', 
              { y: 15, opacity: 0 },
              { y: 0, opacity: 1, duration: 0.4, ease: 'power2.out', onComplete: () => { isAnimating = false; } }
            );
          } else {
            // Animating into final loading state
            gsap.fromTo('.anim-loading', 
              { y: 15, opacity: 0 },
              { y: 0, opacity: 1, duration: 0.4, ease: 'power2.out', onComplete: () => { 
                isAnimating = false; 
                setTimeout(revealContactForm, 2000);
              } }
            );
          }
        }
      });
    });
  };

  const revealContactForm = async () => {
    ctx.add(() => {
      gsap.to('.anim-loading', {
        y: -15,
        opacity: 0,
        duration: 0.4,
        ease: 'power2.in',
        onComplete: async () => {
          isCurating = false;
          await tick();
          gsap.fromTo('.anim-form', 
            { y: 15, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.4, ease: 'power2.out' }
          );
        }
      });
    });
  };

  const handleSubmit = async () => {
    if (isSubmitting || isSubmitted) return;
    
    // Animate button push
    isSubmitting = true;
    
    // Simulate API call
    setTimeout(async () => {
      ctx.add(() => {
        gsap.to('.anim-form', {
          y: -15,
          opacity: 0,
          duration: 0.4,
          ease: 'power2.in',
          onComplete: async () => {
            isSubmitting = false;
            isSubmitted = true;
            await tick();
            
            gsap.fromTo('.anim-success',
              { scale: 0.9, opacity: 0 },
              { scale: 1, opacity: 1, duration: 0.5, ease: 'back.out(1.5)' }
            );
            
            // Auto-close after reading success message
            setTimeout(close, 4000);
          }
        });
      });
    }, 1200);
  };
</script>

<svelte:window on:keydown={handleKeydown} />

{#if isOpen}
  <!-- Backdrop -->
  <div
    bind:this={overlayEl}
    class="fixed inset-0 z-[60] bg-[#0f1f18]/95 backdrop-blur-md overflow-y-auto flex items-center justify-center p-4"
    role="dialog"
    aria-modal="true"
  >
    <!-- Close button -->
    <button
      on:click={close}
      class="fixed top-6 right-6 z-[70] w-12 h-12 flex items-center justify-center rounded-full border border-stone-400 text-stone-200 hover:border-gold-300 hover:text-gold-300 hover:bg-gold-300/10 transition-all duration-300 text-2xl leading-none"
      aria-label="Close modal"
    >
      ✕
    </button>

    <div class="w-full max-w-lg mx-auto bg-stone-100/95 backdrop-blur-sm rounded-xl shadow-[0_0_50px_rgba(0,0,0,0.5)] p-8 lg:p-10 relative z-10" bind:this={containerElement}>
      
      {#if currentStep < questions.length}
        <!-- Progress Indicator -->
        <div class="flex flex-col items-center mb-10">
          <div class="flex space-x-2 w-full max-w-[200px] mb-4">
            {#each questions as _, i}
              <div class="h-[3px] flex-1 rounded-full transition-colors duration-500 {i <= currentStep ? 'bg-[#A65E46]' : 'bg-gray-300'}"></div>
            {/each}
          </div>
          <p class="font-sans text-[0.65rem] tracking-[0.2em] text-gray-500 uppercase">Question {currentStep + 1} of {questions.length}</p>
        </div>

        <!-- Question Content -->
        <div class="anim-container">
          <h2 class="font-serif text-3xl md:text-3xl text-center text-gray-900 mb-8 leading-tight">
            {questions[currentStep].question}
          </h2>

          <div class="flex flex-col space-y-3">
            {#each questions[currentStep].options as option (option)}
              <button 
                type="button"
                class="group w-full px-6 py-4 text-left border rounded-lg transition-all duration-300 font-sans text-sm md:text-base text-gray-700
                      {selectedOption === option 
                        ? 'border-[#A65E46] bg-[#A65E46]/5 text-gray-900 shadow-sm' 
                        : 'border-gray-300/80 hover:border-[#A65E46]/60 hover:bg-[#A65E46]/5 hover:text-gray-900'}"
                on:click={() => handleOptionClick(option)}
              >
                {option}
              </button>
            {/each}
          </div>
        </div>
      {:else}
        <!-- Final State -->
        {#if isCurating}
          <div class="anim-loading flex flex-col items-center justify-center py-16">
            <!-- Terracotta spinner -->
            <div class="relative w-12 h-12 mb-8">
              <div class="absolute inset-0 rounded-full border-4 border-gray-200"></div>
              <div class="absolute inset-0 rounded-full border-4 border-[#A65E46] border-t-transparent animate-spin"></div>
            </div>
            <h2 class="font-serif text-2xl md:text-3xl text-gray-900 text-center">Curating your journey...</h2>
          </div>
        {:else if !isSubmitted}
          <div class="anim-form">
            <div class="text-center mb-8">
              <h2 class="font-serif text-3xl md:text-4xl text-gray-900 mb-4">Your Journey Awaits</h2>
              <p class="font-sans text-sm md:text-base text-gray-600 leading-relaxed max-w-sm mx-auto">
                Based on your preferences, we have shaped a bespoke itinerary. Connect with our concierge to refine the details.
              </p>
            </div>
            
            <div class="space-y-4">
              <input type="text" placeholder="Your Name" class="w-full px-6 py-4 rounded-lg border border-gray-300/80 font-sans text-gray-800 placeholder-gray-500 focus:outline-none focus:border-[#A65E46] focus:ring-1 focus:ring-[#A65E46] transition-all bg-transparent disabled:opacity-50" disabled={isSubmitting} />
              <input type="email" placeholder="Your Email" class="w-full px-6 py-4 rounded-lg border border-gray-300/80 font-sans text-gray-800 placeholder-gray-500 focus:outline-none focus:border-[#A65E46] focus:ring-1 focus:ring-[#A65E46] transition-all bg-transparent disabled:opacity-50" disabled={isSubmitting} />
              <button 
                type="button" 
                on:click={handleSubmit}
                disabled={isSubmitting}
                class="relative overflow-hidden w-full bg-[#A65E46] text-white py-4 mt-2 rounded-lg font-sans tracking-widest uppercase text-[0.75rem] font-medium hover:bg-[#8F513C] transition-colors shadow-lg shadow-[#A65E46]/20 disabled:opacity-80 disabled:cursor-wait"
              >
                {#if isSubmitting}
                  <span class="inline-block animate-pulse">Sending...</span>
                {:else}
                  Request Itinerary
                {/if}
              </button>
              
              <p class="text-center font-sans text-xs text-gray-500 mt-4">
                Prefer to write directly? <a href="mailto:concierge@theruinedgarden.com" class="text-[#A65E46] hover:underline transition-all">concierge@theruinedgarden.com</a>
              </p>
            </div>
          </div>
        {:else}
          <div class="anim-success flex flex-col items-center justify-center py-10 text-center">
            <div class="w-16 h-16 rounded-full bg-[#A65E46]/10 flex items-center justify-center mb-6 text-[#A65E46]">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" class="animate-[bounce_1s_ease-out]">
                <path d="M20 6L9 17L4 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <h2 class="font-serif text-3xl md:text-4xl text-gray-900 mb-4">Request Sent</h2>
            <p class="font-sans text-sm md:text-base text-gray-600 leading-relaxed max-w-sm mx-auto">
              Our concierge will review your preferences and reach out shortly to finalize your bespoke experience.
            </p>
          </div>
        {/if}
      {/if}

    </div>
  </div>
{/if}
