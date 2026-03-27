<script>
  import { onMount } from 'svelte';
  import { MapPin, Phone, Mail } from 'lucide-svelte';

  let footerElement;

  onMount(() => {
    if (footerElement) {
      // Add fade-in animation to footer
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('animate-fade-in');
            }
          });
        },
        { threshold: 0.1 }
      );

      observer.observe(footerElement);
    }
  });
</script>

<footer
  bind:this={footerElement}
  id="contact"
  class="relative w-full bg-forest-900 py-16 md:py-24 px-4 md:px-8 border-t border-stone-700"
>
  <!-- Decorative background -->
  <div class="absolute inset-0 opacity-10">
    <div
      class="absolute inset-0 bg-gradient-to-t from-forest-900 via-transparent to-transparent"
    ></div>
  </div>

  <div class="relative z-10 max-w-5xl mx-auto">
    <!-- Main footer content -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 mb-16 md:mb-24">
      <!-- About -->
      <div>
        <h3 class="font-display text-2xl text-gold-400 mb-4 font-light">
          The Ruined Garden
        </h3>
        <p class="text-stone-300 font-light leading-relaxed text-sm">
          A sanctuary where nature reclaims history, and every meal is a journey through time. Located in the heart of Fes's ancient Medina.
        </p>
      </div>

      <!-- Contact -->
      <div>
        <h4 class="font-display text-lg text-gold-400 mb-6 font-light">Contact</h4>
        <div class="space-y-4">
          <div class="flex items-start gap-3">
            <MapPin class="w-5 h-5 text-gold-600 flex-shrink-0 mt-0.5" />
            <p class="text-stone-300 font-light text-sm">
              Medina, Fes 30000<br />Morocco
            </p>
          </div>
          <div class="flex items-center gap-3">
            <Phone class="w-5 h-5 text-gold-600 flex-shrink-0" />
            <a
              href="tel:+212535123456"
              class="text-stone-300 hover:text-gold-400 font-light text-sm transition-colors"
            >
              +212 5 35 12 34 56
            </a>
          </div>
          <div class="flex items-center gap-3">
            <Mail class="w-5 h-5 text-gold-600 flex-shrink-0" />
            <a
              href="mailto:hello@theruinedgarden.com"
              class="text-stone-300 hover:text-gold-400 font-light text-sm transition-colors"
            >
              hello@theruinedgarden.com
            </a>
          </div>
        </div>
      </div>

      <!-- Hours -->
      <div>
        <h4 class="font-display text-lg text-gold-400 mb-6 font-light">Hours</h4>
        <div class="space-y-2 text-stone-300 font-light text-sm">
          <p>Tuesday – Thursday</p>
          <p class="text-stone-400">6:00 PM – 11:00 PM</p>

          <p class="mt-4">Friday – Saturday</p>
          <p class="text-stone-400">6:00 PM – 12:00 AM</p>

          <p class="mt-4">Sunday – Monday</p>
          <p class="text-stone-400">Closed</p>
        </div>
      </div>
    </div>

    <!-- Social links -->
    <div class="border-t border-stone-700 pt-12 md:pt-16">
      <div class="flex items-center justify-between flex-col md:flex-row gap-8">
        <p class="text-stone-400 font-light text-sm">
          Follow our journey through the seasons
        </p>
        <div class="flex gap-6">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            class="text-stone-400 hover:text-gold-400 transition-colors text-sm font-light"
          >
            Instagram
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            class="text-stone-400 hover:text-gold-400 transition-colors text-sm font-light"
          >
            Facebook
          </a>
        </div>
      </div>
    </div>

    <!-- Copyright -->
    <div class="border-t border-stone-700 mt-12 md:mt-16 pt-8">
      <p class="text-center text-stone-500 font-light text-xs">
        © 2026 The Ruined Garden. All rights reserved. Crafted with reverence for the ancient and the living.
      </p>
    </div>
  </div>
</footer>

<style>
  footer {
    position: relative;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  :global(.animate-fade-in) {
    animation: fadeIn 0.8s ease-out;
  }
</style>
