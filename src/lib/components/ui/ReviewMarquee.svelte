<script>
  const reviews = [
    { text: "Sooo... I needed a bit of peace and quiet on my own on a rainy day – met the loveliest people, had excellent, hearty food and drinks – had time to journal and enjoyed the amazing food", author: "Ujammiugaq M", location: "Odense, Danemark" },
    { text: "A family-friendly restaurant with exceptional food and a relaxed setting for dining al fresco or indoors. The service is outstanding", author: "MJWT123", location: "San Diego, Californie" },
    { text: "A cool spot in a ‘not-so-run-down garden’. Book a table in a prime spot. The staff are really friendly and accommodating! The chicken pastilla is delicious and they serve rice :)", author: "Brian D", location: "New York, USA" },
    { text: "a timeless spot. I highly recommend it. I came here three times in a row for a drink because I’d booked a lovely place to stay at Khadouge, which is just a minute’s walk away\n\nI loved it", author: "Glamy C", location: "Paris, France" },
    { text: "An absolutely incredible experience. The riad we’d booked didn’t have our reservation. I turned up at The Ruined Garden and they went out of their way to accommodate us for two nights. The staff were so friendly, the atmosphere in the restaurant and the rooms were lovely, and the food was incredible! What started as a couple of stressful days in Fez was completely turned around by the hospitality of the owner and staff.", author: "chelsie e", location: "Melbourne, Australie" }
  ];
</script>

<div 
  class="relative flex w-full overflow-hidden bg-forest-900 py-20" 
  style="mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent); -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);"
>
  <div class="flex w-max animate-marquee hover:[animation-play-state:paused]">
    {#each [...reviews, ...reviews] as review, i (i)}
      <div class="w-80 md:w-96 p-6 md:p-8 rounded-2xl bg-stone-900/40 border border-stone-500/20 backdrop-blur-[6px] flex-shrink-0 mx-4 flex flex-col justify-between shadow-2xl transition-all duration-300">
        <div>
          <!-- Gold SVG Stars -->
          <div class="flex space-x-[2px] mb-6 text-gold-600">
            {#each Array(5) as _}
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
            {/each}
          </div>
          <p class="font-display text-stone-200 italic text-lg md:text-xl leading-relaxed mb-8 whitespace-pre-wrap">"{review.text}"</p>
        </div>
        <div>
          <div class="w-8 h-px bg-gold-600/30 mb-4"></div>
          <p class="font-sans text-gold-600 uppercase text-xs tracking-[0.2em] font-semibold">{review.author}</p>
          <p class="font-sans text-stone-400 text-xs tracking-wider mt-1.5">{review.location}</p>
        </div>
      </div>
    {/each}
  </div>
</div>
