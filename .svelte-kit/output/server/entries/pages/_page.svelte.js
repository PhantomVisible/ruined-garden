import { i as __require, n as onDestroy, r as tick } from "../../chunks/index-server.js";
import { A as get, D as escape_html, E as attr, M as writable, a as ensure_array_like, b as setContext, c as rest_props, ct as invalid_default_snippet, d as store_get, f as stringify, j as readable, k as derived, l as sanitize_props, n as attr_style, o as head, p as unsubscribe_stores, pt as fallback, r as bind_props, t as attr_class, u as slot, v as getContext } from "../../chunks/server.js";
import "../../chunks/index-server2.js";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import sync, { cancelSync, flushSync, getFrameData } from "framesync";
import { animate, anticipate, backIn, backInOut, backOut, bounceIn, bounceInOut, bounceOut, circIn, circInOut, circOut, clamp, cubicBezier, distance, easeIn, easeInOut, easeOut, inertia, interpolate, linear, mix, pipe, progress, velocityPerSecond } from "popmotion";
import { __read, __rest, __spreadArray } from "tslib";
import { alpha, color, complex, degrees, filter, number, percent, progressPercentage, px, scale, vh, vw } from "style-value-types";
import { invariant, warning } from "hey-listen";
//#region src/lib/components/GrowingIvy.svelte
function GrowingIvy($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);
		onDestroy(() => {});
		$$renderer.push(`<div class="fixed top-0 left-0 lg:left-8 w-16 h-screen pointer-events-none z-50 mix-blend-multiply" aria-hidden="true"><svg width="100%" height="100%" viewBox="0 0 100 1000" preserveAspectRatio="none"><path d="M50,0 Q80,100 50,200 T50,400 T50,600 T50,800 T50,1000" stroke="#1B3A24" stroke-width="4" fill="none" stroke-linecap="round" style="will-change: stroke-dashoffset;"></path><path d="M50,150 Q70,140 80,160 Q60,170 50,150" fill="#2a4a3f"></path><path d="M50,250 Q30,240 20,260 Q40,270 50,250" fill="#3a5f52"></path><path d="M50,350 Q75,340 85,360 Q65,370 50,350" fill="#1B3A24"></path><path d="M50,450 Q25,440 15,460 Q35,470 50,450" fill="#2a4a3f"></path><path d="M50,550 Q70,540 80,560 Q60,570 50,550" fill="#3a5f52"></path><path d="M50,700 Q30,690 20,710 Q40,720 50,700" fill="#1B3A24"></path><path d="M50,850 Q70,840 80,860 Q60,870 50,850" fill="#2a4a3f"></path></svg></div>`);
	});
}
//#endregion
//#region src/lib/components/ui/ExperienceQuestionnaire.svelte
function ExperienceQuestionnaire($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let isOpen = fallback($$props["isOpen"], false);
		const questions = [
			{
				question: "How are you travelling?",
				options: [
					"Just the two of us",
					"Honeymoon",
					"Small group (4–8)",
					"Solo but sociable",
					"Family"
				]
			},
			{
				question: "How long do you have?",
				options: [
					"4–5 nights",
					"7 nights",
					"10–12 nights",
					"Two weeks+",
					"Flexible"
				]
			},
			{
				question: "What pulls you most?",
				options: [
					"Ancient medinas & culture",
					"Desert silence",
					"Atlantic coast & surf",
					"Mountains & villages",
					"All of it"
				]
			}
		];
		let currentStep = 0;
		let selectedOption = null;
		let isCurating = true;
		let isSubmitting = false;
		let isSubmitted = false;
		let prevOpen = false;
		onDestroy(() => {
			if (typeof window !== "undefined" && document.body) document.body.style.overflow = "";
		});
		$: if (isOpen !== prevOpen) {
			prevOpen = isOpen;
			if (isOpen && typeof window !== "undefined") {
				document.body.style.overflow = "hidden";
				currentStep = 0;
				isCurating = true;
				selectedOption = null;
				isSubmitting = false;
				isSubmitted = false;
				requestAnimationFrame(() => {});
			} else if (!isOpen && typeof window !== "undefined") {
				if (document.body) document.body.style.overflow = "";
			}
		}
		if (isOpen) {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<div class="fixed inset-0 z-[60] bg-[#0f1f18]/95 backdrop-blur-md overflow-y-auto flex items-center justify-center p-4" role="dialog" aria-modal="true"><button class="fixed top-6 right-6 z-[70] w-12 h-12 flex items-center justify-center rounded-full border border-stone-400 text-stone-200 hover:border-gold-300 hover:text-gold-300 hover:bg-gold-300/10 transition-all duration-300 text-2xl leading-none" aria-label="Close modal">✕</button> <div class="w-full max-w-lg mx-auto bg-stone-100/95 backdrop-blur-sm rounded-xl shadow-[0_0_50px_rgba(0,0,0,0.5)] p-8 lg:p-10 relative z-10">`);
			if (currentStep < questions.length) {
				$$renderer.push("<!--[0-->");
				$$renderer.push(`<div class="flex flex-col items-center mb-10"><div class="flex space-x-2 w-full max-w-[200px] mb-4"><!--[-->`);
				const each_array = ensure_array_like(questions);
				for (let i = 0, $$length = each_array.length; i < $$length; i++) {
					each_array[i];
					$$renderer.push(`<div${attr_class(`h-[3px] flex-1 rounded-full transition-colors duration-500 ${stringify(i <= currentStep ? "bg-[#A65E46]" : "bg-gray-300")}`)}></div>`);
				}
				$$renderer.push(`<!--]--></div> <p class="font-sans text-[0.65rem] tracking-[0.2em] text-gray-500 uppercase">Question ${escape_html(currentStep + 1)} of ${escape_html(questions.length)}</p></div> <div class="anim-container"><h2 class="font-serif text-3xl md:text-3xl text-center text-gray-900 mb-8 leading-tight">${escape_html(questions[currentStep].question)}</h2> <div class="flex flex-col space-y-3"><!--[-->`);
				const each_array_1 = ensure_array_like(questions[currentStep].options);
				for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
					let option = each_array_1[$$index_1];
					$$renderer.push(`<button type="button"${attr_class(`group w-full px-6 py-4 text-left border rounded-lg transition-all duration-300 font-sans text-sm md:text-base text-gray-700 ${stringify(selectedOption === option ? "border-[#A65E46] bg-[#A65E46]/5 text-gray-900 shadow-sm" : "border-gray-300/80 hover:border-[#A65E46]/60 hover:bg-[#A65E46]/5 hover:text-gray-900")}`)}>${escape_html(option)}</button>`);
				}
				$$renderer.push(`<!--]--></div></div>`);
			} else {
				$$renderer.push("<!--[-1-->");
				if (isCurating) {
					$$renderer.push("<!--[0-->");
					$$renderer.push(`<div class="anim-loading flex flex-col items-center justify-center py-16"><div class="relative w-12 h-12 mb-8"><div class="absolute inset-0 rounded-full border-4 border-gray-200"></div> <div class="absolute inset-0 rounded-full border-4 border-[#A65E46] border-t-transparent animate-spin"></div></div> <h2 class="font-serif text-2xl md:text-3xl text-gray-900 text-center">Curating your journey...</h2></div>`);
				} else if (!isSubmitted) {
					$$renderer.push("<!--[1-->");
					$$renderer.push(`<div class="anim-form"><div class="text-center mb-8"><h2 class="font-serif text-3xl md:text-4xl text-gray-900 mb-4">Your Journey Awaits</h2> <p class="font-sans text-sm md:text-base text-gray-600 leading-relaxed max-w-sm mx-auto">Based on your preferences, we have shaped a bespoke itinerary. Connect with our concierge to refine the details.</p></div> <div class="space-y-4"><input type="text" placeholder="Your Name" class="w-full px-6 py-4 rounded-lg border border-gray-300/80 font-sans text-gray-800 placeholder-gray-500 focus:outline-none focus:border-[#A65E46] focus:ring-1 focus:ring-[#A65E46] transition-all bg-transparent disabled:opacity-50"${attr("disabled", isSubmitting, true)}/> <input type="email" placeholder="Your Email" class="w-full px-6 py-4 rounded-lg border border-gray-300/80 font-sans text-gray-800 placeholder-gray-500 focus:outline-none focus:border-[#A65E46] focus:ring-1 focus:ring-[#A65E46] transition-all bg-transparent disabled:opacity-50"${attr("disabled", isSubmitting, true)}/> <button type="button"${attr("disabled", isSubmitting, true)} class="relative overflow-hidden w-full bg-[#A65E46] text-white py-4 mt-2 rounded-lg font-sans tracking-widest uppercase text-[0.75rem] font-medium hover:bg-[#8F513C] transition-colors shadow-lg shadow-[#A65E46]/20 disabled:opacity-80 disabled:cursor-wait">`);
					if (isSubmitting) {
						$$renderer.push("<!--[0-->");
						$$renderer.push(`<span class="inline-block animate-pulse">Sending...</span>`);
					} else {
						$$renderer.push("<!--[-1-->");
						$$renderer.push(`Request Itinerary`);
					}
					$$renderer.push(`<!--]--></button> <p class="text-center font-sans text-xs text-gray-500 mt-4">Prefer to write directly? <a href="mailto:concierge@theruinedgarden.com" class="text-[#A65E46] hover:underline transition-all">concierge@theruinedgarden.com</a></p></div></div>`);
				} else {
					$$renderer.push("<!--[-1-->");
					$$renderer.push(`<div class="anim-success flex flex-col items-center justify-center py-10 text-center"><div class="w-16 h-16 rounded-full bg-[#A65E46]/10 flex items-center justify-center mb-6 text-[#A65E46]"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" class="animate-[bounce_1s_ease-out]"><path d="M20 6L9 17L4 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></div> <h2 class="font-serif text-3xl md:text-4xl text-gray-900 mb-4">Request Sent</h2> <p class="font-sans text-sm md:text-base text-gray-600 leading-relaxed max-w-sm mx-auto">Our concierge will review your preferences and reach out shortly to finalize your bespoke experience.</p></div>`);
				}
				$$renderer.push(`<!--]-->`);
			}
			$$renderer.push(`<!--]--></div></div>`);
		} else $$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]-->`);
		bind_props($$props, { isOpen });
	});
}
//#endregion
//#region src/lib/components/ui/MenuModal.svelte
function MenuModal($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let isOpen = fallback($$props["isOpen"], false);
		const menuData = [
			{
				category: "Starters",
				items: [
					{
						name: "Smoked Eggplants And Cheese",
						price: "80,00 dh"
					},
					{
						name: "Moroccan Trio Salade",
						price: "80,00 dh"
					},
					{
						name: "Moroccan Green Salade",
						price: "30,00 dh"
					},
					{
						name: "Sardines With Fresh Salade",
						price: "90,00 dh"
					},
					{
						name: "Briwat Trio — Chicken / Veg / Beef",
						price: "80,00 dh"
					}
				]
			},
			{
				category: "Soups",
				items: [
					{
						name: "Harira",
						price: "50,00 dh"
					},
					{
						name: "Besara",
						price: "50,00 dh"
					},
					{
						name: "Soup Of The Day",
						price: "50,00 dh"
					}
				]
			},
			{
				category: "Stews",
				items: [
					{
						name: "Seffa With Caramelized Onions And Raisins",
						price: "60,00 dh"
					},
					{
						name: "White Beans Stew",
						price: "50,00 dh"
					},
					{
						name: "Lentils Stew",
						price: "50,00 dh"
					},
					{
						name: "+ Add Egg",
						price: "10,00 dh"
					}
				]
			},
			{
				category: "Main Courses",
				items: [
					{
						name: "Chicken Pastilla",
						price: "160,00 dh"
					},
					{
						name: "Vegetarian Pastilla",
						price: "130,00 dh"
					},
					{
						name: "Vegetarian Tajine",
						price: "100,00 dh"
					},
					{
						name: "Lamb Tajine",
						price: "150,00 dh",
						description: "Lamb with caramelized onions, prunes, and apricots"
					},
					{
						name: "Chicken Refissa",
						price: "150,00 dh",
						description: "Steamed pastry with lentils, chicken, eggs, and fenugreek"
					},
					{
						name: "Chicken Daghmira",
						price: "150,00 dh",
						description: "Chicken with caramelized onions, preserved lemon, and olives"
					},
					{
						name: "Sardines Tajine",
						price: "130,00 dh",
						description: "Cooked sardines with tomato sauce and bell pepper"
					},
					{
						name: "Kefta Tajine",
						price: "130,00 dh",
						description: "Beef meatballs with tomato sauce and eggs"
					}
				]
			},
			{
				category: "Special Dishes — Pre-Order",
				items: [
					{
						name: "Pigeon Pastilla",
						price: "350,00 dh"
					},
					{
						name: "Saphardic Chicken",
						price: "400,00 dh",
						description: "Poached with beef stuffing, saffron, eggs, and chickpeas"
					},
					{
						name: "7 Hours Lamb Mechoui",
						price: "500,00 dh",
						description: "1 kg fresh lamb with vegetarian tajine — each additional kilo 250 dh"
					}
				]
			},
			{
				category: "Water",
				items: [{
					name: "Still Mineral Water",
					price: "10,00 dh",
					description: "0,5 l | 1,5 l"
				}, {
					name: "Sparkling Water",
					price: "15,00 dh",
					description: "0,5 l | 1 l"
				}]
			},
			{
				category: "Infusions",
				items: [
					{
						name: "Iced Mint Tea",
						price: "30,00 dh"
					},
					{
						name: "Lemon Verbena",
						price: "30,00 dh"
					},
					{
						name: "Moroccan Mint Tea",
						price: "30,00 dh"
					},
					{
						name: "Lipton / Earl Grey / English Breakfast",
						price: "30,00 dh"
					}
				]
			},
			{
				category: "Juice",
				items: [
					{
						name: "Lemonade Sour With Mint",
						price: "30,00 dh"
					},
					{
						name: "Fresh Orange Juice",
						price: "30,00 dh"
					},
					{
						name: "Dates & Orange Blossom Milk",
						price: "40,00 dh"
					},
					{
						name: "Juice Of The Day",
						price: "40,00 dh"
					}
				]
			},
			{
				category: "Soda",
				items: [{
					name: "Coca Cola / Sprite / Tonic / Coca Cola Zero / Salty Preserved Lemon With Sprite",
					price: "30,00 dh"
				}]
			},
			{
				category: "Coffee & Chocolate",
				items: [
					{
						name: "Espresso",
						price: "30,00 dh"
					},
					{
						name: "Macchiato",
						price: "30,00 dh"
					},
					{
						name: "Americano",
						price: "30,00 dh"
					},
					{
						name: "Cappuccino",
						price: "30,00 dh"
					},
					{
						name: "Nus Nus",
						price: "30,00 dh"
					},
					{
						name: "Hot Chocolate",
						price: "30,00 dh"
					},
					{
						name: "Iced Coffee",
						price: "30,00 dh"
					},
					{
						name: "Iced Latte",
						price: "30,00 dh"
					}
				]
			},
			{
				category: "Desserts",
				items: [
					{
						name: "Fig & Dates Cake",
						price: "60,00 dh"
					},
					{
						name: "Crème Brûlée With Saffron And Dates",
						price: "70,00 dh"
					},
					{
						name: "Chocolate Cake With Prunes And Apricots",
						price: "60,00 dh"
					},
					{
						name: "Dark Chocolate Mousse With Ras El Hanout",
						price: "70,00 dh"
					}
				]
			}
		];
		onDestroy(() => {
			if (typeof window !== "undefined" && document.body) document.body.style.overflow = "";
		});
		$: if (isOpen && typeof window !== "undefined") {
			document.body.style.overflow = "hidden";
			requestAnimationFrame(() => {});
		}
		$: if (!isOpen && typeof window !== "undefined") {
			if (document.body) document.body.style.overflow = "";
		}
		if (isOpen) {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<div class="fixed inset-0 z-50 bg-[#0f1f18]/95 backdrop-blur-md overflow-y-auto" role="dialog" aria-modal="true" aria-label="Restaurant Menu"><button class="fixed top-6 right-6 z-10 w-12 h-12 flex items-center justify-center rounded-full border border-[#C0B283]/40 text-[#C0B283] hover:border-[#C0B283] hover:bg-[#C0B283]/10 transition-all duration-300 text-2xl leading-none" aria-label="Close menu">✕</button> <div class="max-w-3xl mx-auto px-6 py-24 md:px-8 md:py-32"><div class="text-center mb-16 md:mb-20"><p class="font-sans text-[0.65rem] tracking-[0.25em] text-[#C0B283]/60 uppercase mb-3">The Ruined Garden · Fes</p> <h2 class="font-serif text-5xl md:text-7xl text-[#C0B283] leading-tight">The Menu</h2> <div class="w-16 h-px bg-gradient-to-r from-transparent via-[#C0B283]/50 to-transparent mx-auto mt-6"></div></div> <div class="space-y-14 md:space-y-20"><!--[-->`);
			const each_array = ensure_array_like(menuData);
			for (let $$index_1 = 0, $$length = each_array.length; $$index_1 < $$length; $$index_1++) {
				let section = each_array[$$index_1];
				$$renderer.push(`<div class="menu-category"><div class="mb-6 pb-3 border-b border-[#C0B283]/20 text-center"><h3 class="font-serif text-2xl md:text-3xl text-[#C0B283] tracking-wide">${escape_html(section.category)}</h3></div> <ul class="space-y-4"><!--[-->`);
				const each_array_1 = ensure_array_like(section.items);
				for (let $$index = 0, $$length = each_array_1.length; $$index < $$length; $$index++) {
					let item = each_array_1[$$index];
					$$renderer.push(`<li class="flex items-start gap-4"><div class="flex-1 min-w-0"><span class="font-serif text-lg md:text-xl text-stone-200 leading-snug">${escape_html(item.name)}</span> `);
					if (item.description) {
						$$renderer.push("<!--[0-->");
						$$renderer.push(`<p class="font-sans text-xs text-stone-400 italic mt-0.5 leading-relaxed">${escape_html(item.description)}</p>`);
					} else $$renderer.push("<!--[-1-->");
					$$renderer.push(`<!--]--></div> <div class="flex-shrink-0 flex items-center pt-[0.4rem]"><span class="hidden sm:block w-16 border-b border-dotted border-[#C0B283]/25 mx-2"></span></div> <span class="font-sans text-sm text-[#C0B283] whitespace-nowrap pt-0.5 flex-shrink-0">${escape_html(item.price)}</span></li>`);
				}
				$$renderer.push(`<!--]--></ul></div>`);
			}
			$$renderer.push(`<!--]--></div> <div class="mt-20 text-center"><div class="w-16 h-px bg-gradient-to-r from-transparent via-[#C0B283]/30 to-transparent mx-auto mb-6"></div> <p class="font-sans text-xs text-stone-500 tracking-widest uppercase">All prices include taxes · Special dishes require pre-order</p></div></div></div>`);
		} else $$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]-->`);
		bind_props($$props, { isOpen });
	});
}
//#endregion
//#region src/lib/components/ui/ReviewMarquee.svelte
function ReviewMarquee($$renderer) {
	const reviews = [
		{
			text: "Sooo... I needed a bit of peace and quiet on my own on a rainy day – met the loveliest people, had excellent, hearty food and drinks – had time to journal and enjoyed the amazing food",
			author: "Ujammiugaq M",
			location: "Odense, Danemark"
		},
		{
			text: "A family-friendly restaurant with exceptional food and a relaxed setting for dining al fresco or indoors. The service is outstanding",
			author: "MJWT123",
			location: "San Diego, Californie"
		},
		{
			text: "A cool spot in a ‘not-so-run-down garden’. Book a table in a prime spot. The staff are really friendly and accommodating! The chicken pastilla is delicious and they serve rice :)",
			author: "Brian D",
			location: "New York, USA"
		},
		{
			text: "a timeless spot. I highly recommend it. I came here three times in a row for a drink because I’d booked a lovely place to stay at Khadouge, which is just a minute’s walk away\n\nI loved it",
			author: "Glamy C",
			location: "Paris, France"
		},
		{
			text: "An absolutely incredible experience. The riad we’d booked didn’t have our reservation. I turned up at The Ruined Garden and they went out of their way to accommodate us for two nights. The staff were so friendly, the atmosphere in the restaurant and the rooms were lovely, and the food was incredible! What started as a couple of stressful days in Fez was completely turned around by the hospitality of the owner and staff.",
			author: "chelsie e",
			location: "Melbourne, Australie"
		}
	];
	$$renderer.push(`<div class="relative flex w-full overflow-hidden bg-forest-900 py-20" style="mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent); -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);"><div class="flex w-max animate-marquee hover:[animation-play-state:paused]"><!--[-->`);
	const each_array = ensure_array_like([...reviews, ...reviews]);
	for (let i = 0, $$length = each_array.length; i < $$length; i++) {
		let review = each_array[i];
		$$renderer.push(`<div class="w-80 md:w-96 p-6 md:p-8 rounded-2xl bg-stone-900/40 border border-stone-500/20 backdrop-blur-[6px] flex-shrink-0 mx-4 flex flex-col justify-between shadow-2xl transition-all duration-300"><div><div class="flex space-x-[2px] mb-6 text-gold-600"><!--[-->`);
		const each_array_1 = ensure_array_like(Array(5));
		for (let $$index = 0, $$length = each_array_1.length; $$index < $$length; $$index++) {
			each_array_1[$$index];
			$$renderer.push(`<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>`);
		}
		$$renderer.push(`<!--]--></div> <p class="font-display text-stone-200 italic text-lg md:text-xl leading-relaxed mb-8 whitespace-pre-wrap">"${escape_html(review.text)}"</p></div> <div><div class="w-8 h-px bg-gold-600/30 mb-4"></div> <p class="font-sans text-gold-600 uppercase text-xs tracking-[0.2em] font-semibold">${escape_html(review.author)}</p> <p class="font-sans text-stone-400 text-xs tracking-wider mt-1.5">${escape_html(review.location)}</p></div></div>`);
	}
	$$renderer.push(`<!--]--></div></div>`);
}
//#endregion
//#region node_modules/svelte-motion/src/components/AnimateSharedLayout/types.js
/** 
based on framer-motion@4.0.3,
Copyright (c) 2018 Framer B.V.
*/
/**
* @public
*/
var Presence;
(function(Presence) {
	Presence[Presence["Entering"] = 0] = "Entering";
	Presence[Presence["Present"] = 1] = "Present";
	Presence[Presence["Exiting"] = 2] = "Exiting";
})(Presence || (Presence = {}));
/**
* @public
*/
var VisibilityAction$1;
(function(VisibilityAction) {
	VisibilityAction[VisibilityAction["Hide"] = 0] = "Hide";
	VisibilityAction[VisibilityAction["Show"] = 1] = "Show";
})(VisibilityAction$1 || (VisibilityAction$1 = {}));
//#endregion
//#region node_modules/svelte-motion/src/utils/array.js
/** 
based on framer-motion@4.0.3,
Copyright (c) 2018 Framer B.V.
*/
function addUniqueItem(arr, item) {
	arr.indexOf(item) === -1 && arr.push(item);
}
function removeItem(arr, item) {
	var index = arr.indexOf(item);
	index > -1 && arr.splice(index, 1);
}
//#endregion
//#region node_modules/svelte-motion/src/utils/subscription-manager.js
/** 
based on framer-motion@4.0.3,
Copyright (c) 2018 Framer B.V.
*/
var SubscriptionManager = function() {
	function SubscriptionManager() {
		this.subscriptions = [];
	}
	SubscriptionManager.prototype.add = function(handler) {
		var _this = this;
		addUniqueItem(this.subscriptions, handler);
		return function() {
			return removeItem(_this.subscriptions, handler);
		};
	};
	SubscriptionManager.prototype.notify = function(a, b, c) {
		var numSubscriptions = this.subscriptions.length;
		if (!numSubscriptions) return;
		if (numSubscriptions === 1)
 /**
		* If there's only a single handler we can just call it without invoking a loop.
		*/
		this.subscriptions[0](a, b, c);
		else for (var i = 0; i < numSubscriptions; i++) {
			/**
			* Check whether the handler exists before firing as it's possible
			* the subscriptions were modified during this loop running.
			*/
			var handler = this.subscriptions[i];
			handler && handler(a, b, c);
		}
	};
	SubscriptionManager.prototype.getSize = function() {
		return this.subscriptions.length;
	};
	SubscriptionManager.prototype.clear = function() {
		this.subscriptions.length = 0;
	};
	return SubscriptionManager;
}();
//#endregion
//#region node_modules/svelte-motion/src/value/index.js
var isFloat = function(value) {
	return !isNaN(parseFloat(value));
};
/**
* `MotionValue` is used to track the state and velocity of motion values.
*
* @public
*/
var MotionValue = function() {
	/**
	* @param init - The initiating value
	* @param config - Optional configuration options
	*
	* -  `transformer`: A function to transform incoming values with.
	*
	* @internal
	*/
	function MotionValue(init, startStopNotifier) {
		var _this = this;
		/**
		* Duration, in milliseconds, since last updating frame.
		*
		* @internal
		*/
		this.timeDelta = 0;
		/**
		* Timestamp of the last time this `MotionValue` was updated.
		*
		* @internal
		*/
		this.lastUpdated = 0;
		/**
		* Functions to notify when the `MotionValue` updates.
		*
		* @internal
		*/
		this.updateSubscribers = new SubscriptionManager();
		/**
		* Functions to notify when the velocity updates.
		*
		* @internal
		*/
		this.velocityUpdateSubscribers = new SubscriptionManager();
		/**
		* Functions to notify when the `MotionValue` updates and `render` is set to `true`.
		*
		* @internal
		*/
		this.renderSubscribers = new SubscriptionManager();
		/**
		* Tracks whether this value can output a velocity. Currently this is only true
		* if the value is numerical, but we might be able to widen the scope here and support
		* other value types.
		*
		* @internal
		*/
		this.canTrackVelocity = false;
		this.updateAndNotify = function(v, render) {
			if (render === void 0) render = true;
			_this.prev = _this.current;
			_this.current = v;
			var _a = getFrameData(), delta = _a.delta, timestamp = _a.timestamp;
			if (_this.lastUpdated !== timestamp) {
				_this.timeDelta = delta;
				_this.lastUpdated = timestamp;
				sync.postRender(_this.scheduleVelocityCheck);
			}
			if (_this.prev !== _this.current) _this.updateSubscribers.notify(_this.current);
			if (_this.velocityUpdateSubscribers.getSize()) _this.velocityUpdateSubscribers.notify(_this.getVelocity());
			if (render) _this.renderSubscribers.notify(_this.current);
		};
		/**
		* Schedule a velocity check for the next frame.
		*
		* This is an instanced and bound function to prevent generating a new
		* function once per frame.
		*
		* @internal
		*/
		this.scheduleVelocityCheck = function() {
			return sync.postRender(_this.velocityCheck);
		};
		/**
		* Updates `prev` with `current` if the value hasn't been updated this frame.
		* This ensures velocity calculations return `0`.
		*
		* This is an instanced and bound function to prevent generating a new
		* function once per frame.
		*
		* @internal
		*/
		this.velocityCheck = function(_a) {
			if (_a.timestamp !== _this.lastUpdated) {
				_this.prev = _this.current;
				_this.velocityUpdateSubscribers.notify(_this.getVelocity());
			}
		};
		this.hasAnimated = false;
		this.prev = this.current = init;
		this.canTrackVelocity = isFloat(this.current);
		this.onSubscription = () => {};
		this.onUnsubscription = () => {};
		if (startStopNotifier) this.onSubscription = () => {
			if (this.updateSubscribers.getSize() + this.velocityUpdateSubscribers.getSize() + this.renderSubscribers.getSize() === 0) {
				const unsub = startStopNotifier();
				this.onUnsubscription = () => {};
				if (unsub) this.onUnsubscription = () => {
					if (this.updateSubscribers.getSize() + this.velocityUpdateSubscribers.getSize() + this.renderSubscribers.getSize() === 0) unsub();
				};
			}
		};
	}
	/**
	* Adds a function that will be notified when the `MotionValue` is updated.
	*
	* It returns a function that, when called, will cancel the subscription.
	*
	* When calling `onChange` inside a React component, it should be wrapped with the
	* `useEffect` hook. As it returns an unsubscribe function, this should be returned
	* from the `useEffect` function to ensure you don't add duplicate subscribers..
	*
	* @motion
	*
	* ```jsx
	* export const MyComponent = () => {
	*   const x = useMotionValue(0)
	*   const y = useMotionValue(0)
	*   const opacity = useMotionValue(1)
	*
	*   useEffect(() => {
	*     function updateOpacity() {
	*       const maxXY = Math.max(x.get(), y.get())
	*       const newOpacity = transform(maxXY, [0, 100], [1, 0])
	*       opacity.set(newOpacity)
	*     }
	*
	*     const unsubscribeX = x.onChange(updateOpacity)
	*     const unsubscribeY = y.onChange(updateOpacity)
	*
	*     return () => {
	*       unsubscribeX()
	*       unsubscribeY()
	*     }
	*   }, [])
	*
	*   return <MotionDiv style={{ x }} />
	* }
	* ```
	*
	* @internalremarks
	*
	* We could look into a `useOnChange` hook if the above lifecycle management proves confusing.
	*
	* ```jsx
	* useOnChange(x, () => {})
	* ```
	*
	* @param subscriber - A function that receives the latest value.
	* @returns A function that, when called, will cancel this subscription.
	*
	* @public
	*/
	MotionValue.prototype.onChange = function(subscription) {
		this.onSubscription();
		const unsub = this.updateSubscribers.add(subscription);
		return () => {
			unsub();
			this.onUnsubscription();
		};
	};
	/** Add subscribe method for Svelte store interface */
	MotionValue.prototype.subscribe = function(subscription) {
		return this.onChange(subscription);
	};
	MotionValue.prototype.clearListeners = function() {
		this.updateSubscribers.clear();
		this.onUnsubscription();
	};
	/**
	* Adds a function that will be notified when the `MotionValue` requests a render.
	*
	* @param subscriber - A function that's provided the latest value.
	* @returns A function that, when called, will cancel this subscription.
	*
	* @internal
	*/
	MotionValue.prototype.onRenderRequest = function(subscription) {
		this.onSubscription();
		subscription(this.get());
		const unsub = this.renderSubscribers.add(subscription);
		return () => {
			unsub();
			this.onUnsubscription();
		};
	};
	/**
	* Attaches a passive effect to the `MotionValue`.
	*
	* @internal
	*/
	MotionValue.prototype.attach = function(passiveEffect) {
		this.passiveEffect = passiveEffect;
	};
	/**
	* Sets the state of the `MotionValue`.
	*
	* @remarks
	*
	* ```jsx
	* const x = useMotionValue(0)
	* x.set(10)
	* ```
	*
	* @param latest - Latest value to set.
	* @param render - Whether to notify render subscribers. Defaults to `true`
	*
	* @public
	*/
	MotionValue.prototype.set = function(v, render) {
		if (render === void 0) render = true;
		if (!render || !this.passiveEffect) this.updateAndNotify(v, render);
		else this.passiveEffect(v, this.updateAndNotify);
	};
	/** Add update method for Svelte Store behavior */
	MotionValue.prototype.update = function(v) {
		this.set(v(this.get()));
	};
	/**
	* Returns the latest state of `MotionValue`
	*
	* @returns - The latest state of `MotionValue`
	*
	* @public
	*/
	MotionValue.prototype.get = function() {
		this.onSubscription();
		const curr = this.current;
		this.onUnsubscription();
		return curr;
	};
	/**
	* @public
	*/
	MotionValue.prototype.getPrevious = function() {
		return this.prev;
	};
	/**
	* Returns the latest velocity of `MotionValue`
	*
	* @returns - The latest velocity of `MotionValue`. Returns `0` if the state is non-numerical.
	*
	* @public
	*/
	MotionValue.prototype.getVelocity = function() {
		this.onSubscription();
		const vel = this.canTrackVelocity ? velocityPerSecond(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta) : 0;
		this.onUnsubscription();
		return vel;
	};
	/**
	* Registers a new animation to control this `MotionValue`. Only one
	* animation can drive a `MotionValue` at one time.
	*
	* ```jsx
	* value.start()
	* ```
	*
	* @param animation - A function that starts the provided animation
	*
	* @internal
	*/
	MotionValue.prototype.start = function(animation) {
		var _this = this;
		this.stop();
		return new Promise(function(resolve) {
			_this.hasAnimated = true;
			_this.stopAnimation = animation(resolve);
		}).then(function() {
			return _this.clearAnimation();
		});
	};
	/**
	* Stop the currently active animation.
	*
	* @public
	*/
	MotionValue.prototype.stop = function() {
		if (this.stopAnimation) this.stopAnimation();
		this.clearAnimation();
	};
	/**
	* Returns `true` if this value is currently animating.
	*
	* @public
	*/
	MotionValue.prototype.isAnimating = function() {
		return !!this.stopAnimation;
	};
	MotionValue.prototype.clearAnimation = function() {
		this.stopAnimation = null;
	};
	/**
	* Destroy and clean up subscribers to this `MotionValue`.
	*
	* The `MotionValue` hooks like `useMotionValue` and `useTransform` automatically
	* handle the lifecycle of the returned `MotionValue`, so this method is only necessary if you've manually
	* created a `MotionValue` via the `motionValue` function.
	*
	* @public
	*/
	MotionValue.prototype.destroy = function() {
		this.updateSubscribers.clear();
		this.renderSubscribers.clear();
		this.stop();
		this.onUnsubscription();
	};
	return MotionValue;
}();
/**
* @internal
*/
function motionValue(init, startStopNotifier) {
	return new MotionValue(init, startStopNotifier);
}
//#endregion
//#region node_modules/svelte-motion/src/context/DOMcontext.js
var getDomContext = (name, el) => {
	if (!el || !window) return;
	let par = el;
	while (par = par.parentNode) if (par.motionDomContext && par.motionDomContext.has(name)) return par.motionDomContext.get(name);
};
var setDomContext = (name, el, value) => {
	if (el && window) {
		if (!el.motionDomContext) el.motionDomContext = /* @__PURE__ */ new Map();
		el.motionDomContext.set(name, value);
	}
};
//#endregion
//#region node_modules/svelte-motion/src/context/MotionConfigContext.js
/**
* @public
*/
var MotionConfigContext = (c) => getDomContext("MotionConfig", c) || writable({
	transformPagePoint: function(p) {
		return p;
	},
	isStatic: false
});
//#endregion
//#region node_modules/svelte-motion/src/context/ScaleCorrectionProvider.svelte
var ScaleCorrectionContext = (isCustom) => getDomContext("ScaleCorrection", isCustom) || writable([]);
var ScaleCorrectionParentContext = () => writable([]);
var provideScaleCorrection = (isCustom) => {
	const fromParent = getContext(ScaleCorrectionContext) || ScaleCorrectionContext(isCustom);
	const ctx = ScaleCorrectionContext();
	setContext(ScaleCorrectionContext, ctx);
	setDomContext("ScaleCorrection", isCustom, ctx);
	setContext(ScaleCorrectionParentContext, fromParent);
};
function ScaleCorrectionProvider($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let isCustom = $$props["isCustom"];
		provideScaleCorrection(isCustom);
		$$renderer.push(`<!--[-->`);
		slot($$renderer, $$props, "default", {}, null);
		$$renderer.push(`<!--]-->`);
		bind_props($$props, { isCustom });
	});
}
//#endregion
//#region node_modules/svelte-motion/src/utils/time-conversion.js
/** 
based on framer-motion@4.0.3,
Copyright (c) 2018 Framer B.V.
*/
/**
* Converts seconds to milliseconds
*
* @param seconds - Time in seconds.
* @return milliseconds - Converted time in milliseconds.
*/
var secondsToMilliseconds = function(seconds) {
	return seconds * 1e3;
};
//#endregion
//#region node_modules/svelte-motion/src/animation/utils/easing.js
var easingLookup = {
	linear,
	easeIn,
	easeInOut,
	easeOut,
	circIn,
	circInOut,
	circOut,
	backIn,
	backInOut,
	backOut,
	anticipate,
	bounceIn,
	bounceInOut,
	bounceOut
};
var easingDefinitionToFunction = function(definition) {
	if (Array.isArray(definition)) {
		var _a = __read(definition, 4), x1 = _a[0], y1 = _a[1], x2 = _a[2], y2 = _a[3];
		return cubicBezier(x1, y1, x2, y2);
	} else if (typeof definition === "string") return easingLookup[definition];
	return definition;
};
var isEasingArray = function(ease) {
	return Array.isArray(ease) && typeof ease[0] !== "number";
};
//#endregion
//#region node_modules/svelte-motion/src/animation/utils/is-animatable.js
/**
* Check if a value is animatable. Examples:
*
* ✅: 100, "100px", "#fff"
* ❌: "block", "url(2.jpg)"
* @param value
*
* @internal
*/
var isAnimatable = function(key, value) {
	if (key === "zIndex") return false;
	if (typeof value === "number" || Array.isArray(value)) return true;
	if (typeof value === "string" && complex.test(value) && !value.startsWith("url(")) return true;
	return false;
};
//#endregion
//#region node_modules/svelte-motion/src/animation/utils/is-keyframes-target.js
/** 
based on framer-motion@4.0.3,
Copyright (c) 2018 Framer B.V.
*/
var isKeyframesTarget = function(v) {
	return Array.isArray(v);
};
//#endregion
//#region node_modules/svelte-motion/src/animation/utils/default-transitions.js
/** 
based on framer-motion@4.0.3,
Copyright (c) 2018 Framer B.V.
*/
var underDampedSpring = function() {
	return {
		type: "spring",
		stiffness: 500,
		damping: 25,
		restDelta: .5,
		restSpeed: 10
	};
};
var criticallyDampedSpring = function(to) {
	return {
		type: "spring",
		stiffness: 550,
		damping: to === 0 ? 2 * Math.sqrt(550) : 30,
		restDelta: .01,
		restSpeed: 10
	};
};
var linearTween = function() {
	return {
		type: "keyframes",
		ease: "linear",
		duration: .3
	};
};
var keyframes = function(values) {
	return {
		type: "keyframes",
		duration: .8,
		values
	};
};
var defaultTransitions = {
	x: underDampedSpring,
	y: underDampedSpring,
	z: underDampedSpring,
	rotate: underDampedSpring,
	rotateX: underDampedSpring,
	rotateY: underDampedSpring,
	rotateZ: underDampedSpring,
	scaleX: criticallyDampedSpring,
	scaleY: criticallyDampedSpring,
	scale: criticallyDampedSpring,
	opacity: linearTween,
	backgroundColor: linearTween,
	color: linearTween,
	default: criticallyDampedSpring
};
var getDefaultTransition = function(valueKey, to) {
	var transitionFactory;
	if (isKeyframesTarget(to)) transitionFactory = keyframes;
	else transitionFactory = defaultTransitions[valueKey] || defaultTransitions.default;
	return Object.assign({ to }, transitionFactory(to));
};
//#endregion
//#region node_modules/svelte-motion/src/render/dom/value-types/type-int.js
var int = Object.assign(Object.assign({}, number), { transform: Math.round });
//#endregion
//#region node_modules/svelte-motion/src/render/dom/value-types/number.js
var numberValueTypes = {
	borderWidth: px,
	borderTopWidth: px,
	borderRightWidth: px,
	borderBottomWidth: px,
	borderLeftWidth: px,
	borderRadius: px,
	radius: px,
	borderTopLeftRadius: px,
	borderTopRightRadius: px,
	borderBottomRightRadius: px,
	borderBottomLeftRadius: px,
	width: px,
	maxWidth: px,
	height: px,
	maxHeight: px,
	size: px,
	top: px,
	right: px,
	bottom: px,
	left: px,
	padding: px,
	paddingTop: px,
	paddingRight: px,
	paddingBottom: px,
	paddingLeft: px,
	margin: px,
	marginTop: px,
	marginRight: px,
	marginBottom: px,
	marginLeft: px,
	rotate: degrees,
	rotateX: degrees,
	rotateY: degrees,
	rotateZ: degrees,
	scale,
	scaleX: scale,
	scaleY: scale,
	scaleZ: scale,
	skew: degrees,
	skewX: degrees,
	skewY: degrees,
	distance: px,
	translateX: px,
	translateY: px,
	translateZ: px,
	x: px,
	y: px,
	z: px,
	perspective: px,
	transformPerspective: px,
	opacity: alpha,
	originX: progressPercentage,
	originY: progressPercentage,
	originZ: px,
	zIndex: int,
	fillOpacity: alpha,
	strokeOpacity: alpha,
	numOctaves: int
};
//#endregion
//#region node_modules/svelte-motion/src/render/dom/value-types/defaults.js
/**
* A map of default value types for common values
*/
var defaultValueTypes = Object.assign(Object.assign({}, numberValueTypes), {
	color,
	backgroundColor: color,
	outlineColor: color,
	fill: color,
	stroke: color,
	borderColor: color,
	borderTopColor: color,
	borderRightColor: color,
	borderBottomColor: color,
	borderLeftColor: color,
	filter,
	WebkitFilter: filter
});
/**
* Gets the default ValueType for the provided value key
*/
var getDefaultValueType = function(key) {
	return defaultValueTypes[key];
};
//#endregion
//#region node_modules/svelte-motion/src/render/dom/value-types/animatable-none.js
function getAnimatableNone(key, value) {
	var _a;
	var defaultValueType = getDefaultValueType(key);
	if (defaultValueType !== filter) defaultValueType = complex;
	return (_a = defaultValueType.getAnimatableNone) === null || _a === void 0 ? void 0 : _a.call(defaultValueType, value);
}
//#endregion
//#region node_modules/svelte-motion/src/animation/utils/transitions.js
/**
* Decide whether a transition is defined on a given Transition.
* This filters out orchestration options and returns true
* if any options are left.
*/
function isTransitionDefined(_a) {
	_a.when;
	_a.delay;
	_a.delayChildren;
	_a.staggerChildren;
	_a.staggerDirection;
	_a.repeat;
	_a.repeatType;
	_a.repeatDelay;
	_a.from;
	var transition = __rest(_a, [
		"when",
		"delay",
		"delayChildren",
		"staggerChildren",
		"staggerDirection",
		"repeat",
		"repeatType",
		"repeatDelay",
		"from"
	]);
	return !!Object.keys(transition).length;
}
var legacyRepeatWarning = false;
/**
* Convert Framer Motion's Transition type into Popmotion-compatible options.
*/
function convertTransitionToAnimationOptions(_a) {
	var ease = _a.ease, times = _a.times, yoyo = _a.yoyo, flip = _a.flip, loop = _a.loop, transition = __rest(_a, [
		"ease",
		"times",
		"yoyo",
		"flip",
		"loop"
	]);
	var options = Object.assign({}, transition);
	if (times) options["offset"] = times;
	/**
	* Convert any existing durations from seconds to milliseconds
	*/
	if (transition.duration) options["duration"] = secondsToMilliseconds(transition.duration);
	if (transition.repeatDelay) options.repeatDelay = secondsToMilliseconds(transition.repeatDelay);
	/**
	* Map easing names to Popmotion's easing functions
	*/
	if (ease) options["ease"] = isEasingArray(ease) ? ease.map(easingDefinitionToFunction) : easingDefinitionToFunction(ease);
	/**
	* Support legacy transition API
	*/
	if (transition.type === "tween") options.type = "keyframes";
	/**
	* TODO: These options are officially removed from the API.
	*/
	if (yoyo || loop || flip) {
		warning(!legacyRepeatWarning, "yoyo, loop and flip have been removed from the API. Replace with repeat and repeatType options.");
		legacyRepeatWarning = true;
		if (yoyo) options.repeatType = "reverse";
		else if (loop) options.repeatType = "loop";
		else if (flip) options.repeatType = "mirror";
		options.repeat = loop || yoyo || flip || transition.repeat;
	}
	/**
	* TODO: Popmotion 9 has the ability to automatically detect whether to use
	* a keyframes or spring animation, but does so by detecting velocity and other spring options.
	* It'd be good to introduce a similar thing here.
	*/
	if (transition.type !== "spring") options.type = "keyframes";
	return options;
}
/**
* Get the delay for a value by checking Transition with decreasing specificity.
*/
function getDelayFromTransition(transition, key) {
	var _a;
	return (_a = (getValueTransition(transition, key) || {}).delay) !== null && _a !== void 0 ? _a : 0;
}
function hydrateKeyframes(options) {
	if (Array.isArray(options.to) && options.to[0] === null) {
		options.to = __spreadArray([], __read(options.to));
		options.to[0] = options.from;
	}
	return options;
}
function getPopmotionAnimationOptions(transition, options, key) {
	var _a;
	if (Array.isArray(options.to)) (_a = transition.duration) !== null && _a !== void 0 || (transition.duration = .8);
	hydrateKeyframes(options);
	/**
	* Get a default transition if none is determined to be defined.
	*/
	if (!isTransitionDefined(transition)) transition = Object.assign(Object.assign({}, transition), getDefaultTransition(key, options.to));
	return Object.assign(Object.assign({}, options), convertTransitionToAnimationOptions(transition));
}
/**
*
*/
function getAnimation(key, value, target, transition, onComplete) {
	var _a;
	var valueTransition = getValueTransition(transition, key);
	var origin = (_a = valueTransition.from) !== null && _a !== void 0 ? _a : value.get();
	var isTargetAnimatable = isAnimatable(key, target);
	if (origin === "none" && isTargetAnimatable && typeof target === "string")
 /**
	* If we're trying to animate from "none", try and get an animatable version
	* of the target. This could be improved to work both ways.
	*/
	origin = getAnimatableNone(key, target);
	else if (isZero(origin) && typeof target === "string") origin = getZeroUnit(target);
	else if (!Array.isArray(target) && isZero(target) && typeof origin === "string") target = getZeroUnit(origin);
	var isOriginAnimatable = isAnimatable(key, origin);
	warning(isOriginAnimatable === isTargetAnimatable, "You are trying to animate " + key + " from \"" + origin + "\" to \"" + target + "\". " + origin + " is not an animatable value - to enable this animation set " + origin + " to a value animatable to " + target + " via the `style` property.");
	function start() {
		var options = {
			from: origin,
			to: target,
			velocity: value.getVelocity(),
			onComplete,
			onUpdate: function(v) {
				return value.set(v);
			}
		};
		return valueTransition.type === "inertia" || valueTransition.type === "decay" ? inertia(Object.assign(Object.assign({}, options), valueTransition)) : animate(Object.assign(Object.assign({}, getPopmotionAnimationOptions(valueTransition, options, key)), {
			onUpdate: function(v) {
				var _a;
				options.onUpdate(v);
				(_a = valueTransition.onUpdate) === null || _a === void 0 || _a.call(valueTransition, v);
			},
			onComplete: function() {
				var _a;
				options.onComplete();
				(_a = valueTransition.onComplete) === null || _a === void 0 || _a.call(valueTransition);
			}
		}));
	}
	function set() {
		var _a;
		value.set(target);
		onComplete();
		(_a = valueTransition === null || valueTransition === void 0 ? void 0 : valueTransition.onComplete) === null || _a === void 0 || _a.call(valueTransition);
		return { stop: function() {} };
	}
	return !isOriginAnimatable || !isTargetAnimatable || valueTransition.type === false ? set : start;
}
function isZero(value) {
	return value === 0 || typeof value === "string" && parseFloat(value) === 0 && value.indexOf(" ") === -1;
}
function getZeroUnit(potentialUnitType) {
	return typeof potentialUnitType === "number" ? 0 : getAnimatableNone("", potentialUnitType);
}
function getValueTransition(transition, key) {
	return transition[key] || transition["default"] || transition;
}
/**
* Start animation on a MotionValue. This function is an interface between
* Framer Motion and Popmotion
*
* @internal
*/
function startAnimation(key, value, target, transition) {
	if (transition === void 0) transition = {};
	return value.start(function(onComplete) {
		var delayTimer;
		var controls;
		var animation = getAnimation(key, value, target, transition, onComplete);
		var delay = getDelayFromTransition(transition, key);
		var start = function() {
			return controls = animation();
		};
		if (delay) delayTimer = setTimeout(start, secondsToMilliseconds(delay));
		else start();
		return function() {
			clearTimeout(delayTimer);
			controls === null || controls === void 0 || controls.stop();
		};
	});
}
//#endregion
//#region node_modules/svelte-motion/src/utils/is-numerical-string.js
/** 
based on framer-motion@4.0.3,
Copyright (c) 2018 Framer B.V.
*/
/**
* Check if value is a numerical string, ie a string that is purely a number eg "100" or "-100.1"
*/
var isNumericalString = function(v) {
	return /^\-?\d*\.?\d+$/.test(v);
};
//#endregion
//#region node_modules/svelte-motion/src/utils/resolve-value.js
/** 
based on framer-motion@4.0.3,
Copyright (c) 2018 Framer B.V.
*/
var isCustomValue = function(v) {
	return Boolean(v && typeof v === "object" && v.mix && v.toValue);
};
var resolveFinalValueInKeyframes = function(v) {
	return isKeyframesTarget(v) ? v[v.length - 1] || 0 : v;
};
//#endregion
//#region node_modules/svelte-motion/src/render/dom/value-types/test.js
/** 
based on framer-motion@4.0.3,
Copyright (c) 2018 Framer B.V.
*/
/**
* Tests a provided value against a ValueType
*/
var testValueType = function(v) {
	return function(type) {
		return type.test(v);
	};
};
//#endregion
//#region node_modules/svelte-motion/src/render/dom/value-types/dimensions.js
/**
* A list of value types commonly used for dimensions
*/
var dimensionValueTypes = [
	number,
	px,
	percent,
	degrees,
	vw,
	vh,
	{
		test: function(v) {
			return v === "auto";
		},
		parse: function(v) {
			return v;
		}
	}
];
/**
* Tests a dimensional value against the list of dimension ValueTypes
*/
var findDimensionValueType = function(v) {
	return dimensionValueTypes.find(testValueType(v));
};
//#endregion
//#region node_modules/svelte-motion/src/render/dom/value-types/find.js
/**
* A list of all ValueTypes
*/
var valueTypes = __spreadArray(__spreadArray([], __read(dimensionValueTypes)), [color, complex]);
/**
* Tests a value against the list of ValueTypes
*/
var findValueType = function(v) {
	return valueTypes.find(testValueType(v));
};
//#endregion
//#region node_modules/svelte-motion/src/render/utils/variants.js
/** 
based on framer-motion@4.0.3,
Copyright (c) 2018 Framer B.V.
*/
/**
* Decides if the supplied variable is an array of variant labels
*/
function isVariantLabels(v) {
	return Array.isArray(v);
}
/**
* Decides if the supplied variable is variant label
*/
function isVariantLabel(v) {
	return typeof v === "string" || isVariantLabels(v);
}
/**
* Creates an object containing the latest state of every MotionValue on a VisualElement
*/
function getCurrent(visualElement) {
	var current = {};
	visualElement.forEachValue(function(value, key) {
		return current[key] = value.get();
	});
	return current;
}
/**
* Creates an object containing the latest velocity of every MotionValue on a VisualElement
*/
function getVelocity$1(visualElement) {
	var velocity = {};
	visualElement.forEachValue(function(value, key) {
		return velocity[key] = value.getVelocity();
	});
	return velocity;
}
function resolveVariantFromProps(props, definition, custom, currentValues, currentVelocity) {
	var _a;
	if (currentValues === void 0) currentValues = {};
	if (currentVelocity === void 0) currentVelocity = {};
	if (typeof definition === "string") definition = (_a = props.variants) === null || _a === void 0 ? void 0 : _a[definition];
	return typeof definition === "function" ? definition(custom !== null && custom !== void 0 ? custom : props.custom, currentValues, currentVelocity) : definition;
}
function resolveVariant(visualElement, definition, custom) {
	var props = visualElement.getProps();
	return resolveVariantFromProps(props, definition, custom !== null && custom !== void 0 ? custom : props.custom, getCurrent(visualElement), getVelocity$1(visualElement));
}
function checkIfControllingVariants(props) {
	var _a;
	return typeof ((_a = props.animate) === null || _a === void 0 ? void 0 : _a.start) === "function" || isVariantLabel(props.initial) || isVariantLabel(props.animate) || isVariantLabel(props.whileHover) || isVariantLabel(props.whileDrag) || isVariantLabel(props.whileTap) || isVariantLabel(props.whileFocus) || isVariantLabel(props.exit);
}
function checkIfVariantNode(props) {
	return Boolean(checkIfControllingVariants(props) || props.variants);
}
//#endregion
//#region node_modules/svelte-motion/src/render/utils/setters.js
/**
* Set VisualElement's MotionValue, creating a new MotionValue for it if
* it doesn't exist.
*/
function setMotionValue(visualElement, key, value) {
	if (visualElement.hasValue(key)) visualElement.getValue(key).set(value);
	else visualElement.addValue(key, motionValue(value));
}
function setTarget(visualElement, definition) {
	var resolved = resolveVariant(visualElement, definition);
	var _a = resolved ? visualElement.makeTargetAnimatable(resolved, false) : {}, _b = _a.transitionEnd, transitionEnd = _b === void 0 ? {} : _b;
	_a.transition;
	var target = __rest(_a, ["transitionEnd", "transition"]);
	target = Object.assign(Object.assign({}, target), transitionEnd);
	for (var key in target) setMotionValue(visualElement, key, resolveFinalValueInKeyframes(target[key]));
}
function checkTargetForNewValues(visualElement, target, origin) {
	var _a, _b, _c;
	var _d;
	var newValueKeys = Object.keys(target).filter(function(key) {
		return !visualElement.hasValue(key);
	});
	var numNewValues = newValueKeys.length;
	if (!numNewValues) return;
	for (var i = 0; i < numNewValues; i++) {
		var key = newValueKeys[i];
		var targetValue = target[key];
		var value = null;
		/**
		* If the target is a series of keyframes, we can use the first value
		* in the array. If this first value is null, we'll still need to read from the DOM.
		*/
		if (Array.isArray(targetValue)) value = targetValue[0];
		/**
		* If the target isn't keyframes, or the first keyframe was null, we need to
		* first check if an origin value was explicitly defined in the transition as "from",
		* if not read the value from the DOM. As an absolute fallback, take the defined target value.
		*/
		if (value === null) value = (_b = (_a = origin[key]) !== null && _a !== void 0 ? _a : visualElement.readValue(key)) !== null && _b !== void 0 ? _b : target[key];
		/**
		* If value is still undefined or null, ignore it. Preferably this would throw,
		* but this was causing issues in Framer.
		*/
		if (value === void 0 || value === null) continue;
		if (typeof value === "string" && isNumericalString(value)) value = parseFloat(value);
		else if (!findValueType(value) && complex.test(targetValue)) value = getAnimatableNone(key, targetValue);
		visualElement.addValue(key, motionValue(value));
		(_c = (_d = origin)[key]) !== null && _c !== void 0 || (_d[key] = value);
		visualElement.setBaseTarget(key, value);
	}
}
function getOriginFromTransition(key, transition) {
	if (!transition) return;
	return (transition[key] || transition["default"] || transition).from;
}
function getOrigin(target, transition, visualElement) {
	var _a, _b;
	var origin = {};
	for (var key in target) origin[key] = (_a = getOriginFromTransition(key, transition)) !== null && _a !== void 0 ? _a : (_b = visualElement.getValue(key)) === null || _b === void 0 ? void 0 : _b.get();
	return origin;
}
//#endregion
//#region node_modules/svelte-motion/src/render/utils/animation.js
/** 
based on framer-motion@4.0.3,
Copyright (c) 2018 Framer B.V.
*/
/**
* @internal
*/
function animateVisualElement(visualElement, definition, options) {
	if (options === void 0) options = {};
	visualElement.notifyAnimationStart();
	var animation;
	if (Array.isArray(definition)) {
		var animations = definition.map(function(variant) {
			return animateVariant(visualElement, variant, options);
		});
		animation = Promise.all(animations);
	} else if (typeof definition === "string") animation = animateVariant(visualElement, definition, options);
	else animation = animateTarget(visualElement, typeof definition === "function" ? resolveVariant(visualElement, definition, options.custom) : definition, options);
	return animation.then(function() {
		return visualElement.notifyAnimationComplete(definition);
	});
}
function animateVariant(visualElement, variant, options) {
	var _a;
	if (options === void 0) options = {};
	var resolved = resolveVariant(visualElement, variant, options.custom);
	var _b = (resolved || {}).transition, transition = _b === void 0 ? visualElement.getDefaultTransition() || {} : _b;
	if (options.transitionOverride) transition = options.transitionOverride;
	/**
	* If we have a variant, create a callback that runs it as an animation.
	* Otherwise, we resolve a Promise immediately for a composable no-op.
	*/
	var getAnimation = resolved ? function() {
		return animateTarget(visualElement, resolved, options);
	} : function() {
		return Promise.resolve();
	};
	/**
	* If we have children, create a callback that runs all their animations.
	* Otherwise, we resolve a Promise immediately for a composable no-op.
	*/
	var getChildAnimations = ((_a = visualElement.variantChildren) === null || _a === void 0 ? void 0 : _a.size) ? function(forwardDelay) {
		if (forwardDelay === void 0) forwardDelay = 0;
		var _a = transition.delayChildren, delayChildren = _a === void 0 ? 0 : _a, staggerChildren = transition.staggerChildren, staggerDirection = transition.staggerDirection;
		return animateChildren(visualElement, variant, delayChildren + forwardDelay, staggerChildren, staggerDirection, options);
	} : function() {
		return Promise.resolve();
	};
	/**
	* If the transition explicitly defines a "when" option, we need to resolve either
	* this animation or all children animations before playing the other.
	*/
	var when = transition.when;
	if (when) {
		var _c = __read(when === "beforeChildren" ? [getAnimation, getChildAnimations] : [getChildAnimations, getAnimation], 2), first = _c[0], last = _c[1];
		return first().then(last);
	} else return Promise.all([getAnimation(), getChildAnimations(options.delay)]);
}
/**
* @internal
*/
function animateTarget(visualElement, definition, _a) {
	var _b;
	var _c = _a === void 0 ? {} : _a, _d = _c.delay, delay = _d === void 0 ? 0 : _d, transitionOverride = _c.transitionOverride, type = _c.type;
	var _e = visualElement.makeTargetAnimatable(definition), _f = _e.transition, transition = _f === void 0 ? visualElement.getDefaultTransition() : _f, transitionEnd = _e.transitionEnd, target = __rest(_e, ["transition", "transitionEnd"]);
	if (transitionOverride) transition = transitionOverride;
	var animations = [];
	var animationTypeState = type && ((_b = visualElement.animationState) === null || _b === void 0 ? void 0 : _b.getState()[type]);
	for (var key in target) {
		var value = visualElement.getValue(key);
		var valueTarget = target[key];
		if (!value || valueTarget === void 0 || animationTypeState && shouldBlockAnimation(animationTypeState, key)) continue;
		var animation = startAnimation(key, value, valueTarget, Object.assign({ delay }, transition));
		animations.push(animation);
	}
	return Promise.all(animations).then(function() {
		transitionEnd && setTarget(visualElement, transitionEnd);
	});
}
function animateChildren(visualElement, variant, delayChildren, staggerChildren, staggerDirection, options) {
	if (delayChildren === void 0) delayChildren = 0;
	if (staggerChildren === void 0) staggerChildren = 0;
	if (staggerDirection === void 0) staggerDirection = 1;
	var animations = [];
	var maxStaggerDuration = (visualElement.variantChildren.size - 1) * staggerChildren;
	var generateStaggerDuration = staggerDirection === 1 ? function(i) {
		if (i === void 0) i = 0;
		return i * staggerChildren;
	} : function(i) {
		if (i === void 0) i = 0;
		return maxStaggerDuration - i * staggerChildren;
	};
	Array.from(visualElement.variantChildren).sort(sortByTreeOrder).forEach(function(child, i) {
		animations.push(animateVariant(child, variant, Object.assign(Object.assign({}, options), { delay: delayChildren + generateStaggerDuration(i) })).then(function() {
			return child.notifyAnimationComplete(variant);
		}));
	});
	return Promise.all(animations);
}
function sortByTreeOrder(a, b) {
	return a.sortNodePosition(b);
}
/**
* Decide whether we should block this animation. Previously, we achieved this
* just by checking whether the key was listed in protectedKeys, but this
* posed problems if an animation was triggered by afterChildren and protectedKeys
* had been set to true in the meantime.
*/
function shouldBlockAnimation(_a, key) {
	var protectedKeys = _a.protectedKeys, needsAnimating = _a.needsAnimating;
	var shouldBlock = protectedKeys.hasOwnProperty(key) && needsAnimating[key] !== true;
	needsAnimating[key] = false;
	return shouldBlock;
}
//#endregion
//#region node_modules/svelte-motion/src/render/dom/projection/scale-correction.js
/** 
based on framer-motion@4.0.3,
Copyright (c) 2018 Framer B.V.
*/
var valueScaleCorrection = {};
//#endregion
//#region node_modules/svelte-motion/src/utils/each-axis.js
/** 
based on framer-motion@4.0.3,
Copyright (c) 2018 Framer B.V.
*/
function eachAxis(handler) {
	return [handler("x"), handler("y")];
}
//#endregion
//#region node_modules/svelte-motion/src/utils/noop.js
/** 
based on framer-motion@4.0.3,
Copyright (c) 2018 Framer B.V.
*/
function noop(any) {
	return any;
}
//#endregion
//#region node_modules/svelte-motion/src/utils/geometry/index.js
/** 
based on framer-motion@4.1.15,
Copyright (c) 2018 Framer B.V.
*/
/**
* Bounding boxes tend to be defined as top, left, right, bottom. For various operations
* it's easier to consider each axis individually. This function returns a bounding box
* as a map of single-axis min/max values.
*/
function convertBoundingBoxToAxisBox(_a) {
	var top = _a.top, left = _a.left, right = _a.right, bottom = _a.bottom;
	return {
		x: {
			min: left,
			max: right
		},
		y: {
			min: top,
			max: bottom
		}
	};
}
function convertAxisBoxToBoundingBox(_a) {
	var x = _a.x, y = _a.y;
	return {
		top: y.min,
		bottom: y.max,
		left: x.min,
		right: x.max
	};
}
/**
* Applies a TransformPoint function to a bounding box. TransformPoint is usually a function
* provided by Framer to allow measured points to be corrected for device scaling. This is used
* when measuring DOM elements and DOM event points.
*/
function transformBoundingBox(_a, transformPoint) {
	var top = _a.top, left = _a.left, bottom = _a.bottom, right = _a.right;
	if (transformPoint === void 0) transformPoint = noop;
	var topLeft = transformPoint({
		x: left,
		y: top
	});
	var bottomRight = transformPoint({
		x: right,
		y: bottom
	});
	return {
		top: topLeft.y,
		left: topLeft.x,
		bottom: bottomRight.y,
		right: bottomRight.x
	};
}
/**
* Create an empty axis box of zero size
*/
function axisBox() {
	return {
		x: {
			min: 0,
			max: 1
		},
		y: {
			min: 0,
			max: 1
		}
	};
}
function copyAxisBox(box) {
	return {
		x: Object.assign({}, box.x),
		y: Object.assign({}, box.y)
	};
}
/**
* Create an empty box delta
*/
var zeroDelta = {
	translate: 0,
	scale: 1,
	origin: 0,
	originPoint: 0
};
function delta() {
	return {
		x: Object.assign({}, zeroDelta),
		y: Object.assign({}, zeroDelta)
	};
}
//#endregion
//#region node_modules/svelte-motion/src/render/utils/is-draggable.js
/** 
based on framer-motion@4.1.11,
Copyright (c) 2018 Framer B.V.
*/
function isDraggable(visualElement) {
	var _a = visualElement.getProps(), drag = _a.drag, _dragX = _a._dragX;
	return drag && !_dragX;
}
//#endregion
//#region node_modules/svelte-motion/src/utils/geometry/delta-apply.js
/**
* Reset an axis to the provided origin box.
*
* This is a mutative operation.
*/
function resetAxis(axis, originAxis) {
	axis.min = originAxis.min;
	axis.max = originAxis.max;
}
/**
* Reset a box to the provided origin box.
*
* This is a mutative operation.
*/
function resetBox(box, originBox) {
	resetAxis(box.x, originBox.x);
	resetAxis(box.y, originBox.y);
}
/**
* Scales a point based on a factor and an originPoint
*/
function scalePoint(point, scale, originPoint) {
	return originPoint + scale * (point - originPoint);
}
/**
* Applies a translate/scale delta to a point
*/
function applyPointDelta(point, translate, scale, originPoint, boxScale) {
	if (boxScale !== void 0) point = scalePoint(point, boxScale, originPoint);
	return scalePoint(point, scale, originPoint) + translate;
}
/**
* Applies a translate/scale delta to an axis
*/
function applyAxisDelta(axis, translate, scale, originPoint, boxScale) {
	if (translate === void 0) translate = 0;
	if (scale === void 0) scale = 1;
	axis.min = applyPointDelta(axis.min, translate, scale, originPoint, boxScale);
	axis.max = applyPointDelta(axis.max, translate, scale, originPoint, boxScale);
}
/**
* Applies a translate/scale delta to a box
*/
function applyBoxDelta(box, _a) {
	var x = _a.x, y = _a.y;
	applyAxisDelta(box.x, x.translate, x.scale, x.originPoint);
	applyAxisDelta(box.y, y.translate, y.scale, y.originPoint);
}
/**
* Apply a transform to an axis from the latest resolved motion values.
* This function basically acts as a bridge between a flat motion value map
* and applyAxisDelta
*/
function applyAxisTransforms(final, axis, transforms, _a) {
	var _b = __read(_a, 3), key = _b[0], scaleKey = _b[1], originKey = _b[2];
	final.min = axis.min;
	final.max = axis.max;
	var axisOrigin = transforms[originKey] !== void 0 ? transforms[originKey] : .5;
	var originPoint = mix(axis.min, axis.max, axisOrigin);
	applyAxisDelta(final, transforms[key], transforms[scaleKey], originPoint, transforms.scale);
}
/**
* The names of the motion values we want to apply as translation, scale and origin.
*/
var xKeys = [
	"x",
	"scaleX",
	"originX"
];
var yKeys = [
	"y",
	"scaleY",
	"originY"
];
/**
* Apply a transform to a box from the latest resolved motion values.
*/
function applyBoxTransforms(finalBox, box, transforms) {
	applyAxisTransforms(finalBox.x, box.x, transforms, xKeys);
	applyAxisTransforms(finalBox.y, box.y, transforms, yKeys);
}
/**
* Remove a delta from a point. This is essentially the steps of applyPointDelta in reverse
*/
function removePointDelta(point, translate, scale, originPoint, boxScale) {
	point -= translate;
	point = scalePoint(point, 1 / scale, originPoint);
	if (boxScale !== void 0) point = scalePoint(point, 1 / boxScale, originPoint);
	return point;
}
/**
* Remove a delta from an axis. This is essentially the steps of applyAxisDelta in reverse
*/
function removeAxisDelta(axis, translate, scale, origin, boxScale) {
	if (translate === void 0) translate = 0;
	if (scale === void 0) scale = 1;
	if (origin === void 0) origin = .5;
	var originPoint = mix(axis.min, axis.max, origin) - translate;
	axis.min = removePointDelta(axis.min, translate, scale, originPoint, boxScale);
	axis.max = removePointDelta(axis.max, translate, scale, originPoint, boxScale);
}
/**
* Remove a transforms from an axis. This is essentially the steps of applyAxisTransforms in reverse
* and acts as a bridge between motion values and removeAxisDelta
*/
function removeAxisTransforms(axis, transforms, _a) {
	var _b = __read(_a, 3), key = _b[0], scaleKey = _b[1], originKey = _b[2];
	removeAxisDelta(axis, transforms[key], transforms[scaleKey], transforms[originKey], transforms.scale);
}
/**
* Remove a transforms from an box. This is essentially the steps of applyAxisBox in reverse
* and acts as a bridge between motion values and removeAxisDelta
*/
function removeBoxTransforms(box, transforms) {
	removeAxisTransforms(box.x, transforms, xKeys);
	removeAxisTransforms(box.y, transforms, yKeys);
}
/**
* Apply a tree of deltas to a box. We do this to calculate the effect of all the transforms
* in a tree upon our box before then calculating how to project it into our desired viewport-relative box
*
* This is the final nested loop within updateLayoutDelta for future refactoring
*/
function applyTreeDeltas(box, treeScale, treePath) {
	var treeLength = treePath.length;
	if (!treeLength) return;
	treeScale.x = treeScale.y = 1;
	var node;
	var delta;
	for (var i = 0; i < treeLength; i++) {
		node = treePath[i];
		delta = node.getLayoutState().delta;
		treeScale.x *= delta.x.scale;
		treeScale.y *= delta.y.scale;
		applyBoxDelta(box, delta);
		if (isDraggable(node)) applyBoxTransforms(box, box, node.getLatestValues());
	}
}
//#endregion
//#region node_modules/svelte-motion/src/utils/geometry/delta-calc.js
var clampProgress = function(v) {
	return clamp(0, 1, v);
};
/**
* Returns true if the provided value is within maxDistance of the provided target
*/
function isNear(value, target, maxDistance) {
	if (target === void 0) target = 0;
	if (maxDistance === void 0) maxDistance = .01;
	return distance(value, target) < maxDistance;
}
function calcLength(axis) {
	return axis.max - axis.min;
}
/**
* Calculate a transform origin relative to the source axis, between 0-1, that results
* in an asthetically pleasing scale/transform needed to project from source to target.
*/
function calcOrigin$1(source, target) {
	var origin = .5;
	var sourceLength = calcLength(source);
	var targetLength = calcLength(target);
	if (targetLength > sourceLength) origin = progress(target.min, target.max - sourceLength, source.min);
	else if (sourceLength > targetLength) origin = progress(source.min, source.max - targetLength, target.min);
	return clampProgress(origin);
}
/**
* Update the AxisDelta with a transform that projects source into target.
*
* The transform `origin` is optional. If not provided, it'll be automatically
* calculated based on the relative positions of the two bounding boxes.
*/
function updateAxisDelta(delta, source, target, origin) {
	if (origin === void 0) origin = .5;
	delta.origin = origin;
	delta.originPoint = mix(source.min, source.max, delta.origin);
	delta.scale = calcLength(target) / calcLength(source);
	if (isNear(delta.scale, 1, 1e-4)) delta.scale = 1;
	delta.translate = mix(target.min, target.max, delta.origin) - delta.originPoint;
	if (isNear(delta.translate)) delta.translate = 0;
}
/**
* Update the BoxDelta with a transform that projects the source into the target.
*
* The transform `origin` is optional. If not provided, it'll be automatically
* calculated based on the relative positions of the two bounding boxes.
*/
function updateBoxDelta(delta, source, target, origin) {
	updateAxisDelta(delta.x, source.x, target.x, defaultOrigin(origin.originX));
	updateAxisDelta(delta.y, source.y, target.y, defaultOrigin(origin.originY));
}
/**
* Currently this only accepts numerical origins, measured as 0-1, but could
* accept pixel values by comparing to the target axis.
*/
function defaultOrigin(origin) {
	return typeof origin === "number" ? origin : .5;
}
function calcRelativeAxis(target, relative, parent) {
	target.min = parent.min + relative.min;
	target.max = target.min + calcLength(relative);
}
function calcRelativeBox(projection, parentProjection) {
	calcRelativeAxis(projection.target.x, projection.relativeTarget.x, parentProjection.target.x);
	calcRelativeAxis(projection.target.y, projection.relativeTarget.y, parentProjection.target.y);
}
//#endregion
//#region node_modules/svelte-motion/src/value/utils/is-motion-value.js
/** 
based on framer-motion@4.0.3,
Copyright (c) 2018 Framer B.V.
*/
var isMotionValue = function(value) {
	return value !== null && typeof value === "object" && value.getVelocity;
};
//#endregion
//#region node_modules/svelte-motion/src/render/utils/state.js
/** 
based on framer-motion@4.0.3,
Copyright (c) 2018 Framer B.V.
*/
var createProjectionState = function() {
	return {
		isEnabled: false,
		isTargetLocked: false,
		target: axisBox(),
		targetFinal: axisBox()
	};
};
function createLayoutState() {
	return {
		isHydrated: false,
		layout: axisBox(),
		layoutCorrected: axisBox(),
		treeScale: {
			x: 1,
			y: 1
		},
		delta: delta(),
		deltaFinal: delta(),
		deltaTransform: ""
	};
}
var zeroLayout = createLayoutState();
//#endregion
//#region node_modules/svelte-motion/src/render/html/utils/build-projection-transform.js
/** 
based on framer-motion@4.0.3,
Copyright (c) 2018 Framer B.V.
*/
/**
* Build a transform style that takes a calculated delta between the element's current
* space on screen and projects it into the desired space.
*/
function buildLayoutProjectionTransform(_a, treeScale, latestTransform) {
	var x = _a.x, y = _a.y;
	/**
	* The translations we use to calculate are always relative to the viewport coordinate space.
	* But when we apply scales, we also scale the coordinate space of an element and its children.
	* For instance if we have a treeScale (the culmination of all parent scales) of 0.5 and we need
	* to move an element 100 pixels, we actually need to move it 200 in within that scaled space.
	*/
	var xTranslate = x.translate / treeScale.x;
	var yTranslate = y.translate / treeScale.y;
	var transform = "translate3d(" + xTranslate + "px, " + yTranslate + "px, 0) ";
	if (latestTransform) {
		var rotate = latestTransform.rotate, rotateX = latestTransform.rotateX, rotateY = latestTransform.rotateY;
		if (rotate) transform += "rotate(" + rotate + ") ";
		if (rotateX) transform += "rotateX(" + rotateX + ") ";
		if (rotateY) transform += "rotateY(" + rotateY + ") ";
	}
	transform += "scale(" + x.scale + ", " + y.scale + ")";
	return !latestTransform && transform === identityProjection ? "" : transform;
}
/**
* Take the calculated delta origin and apply it as a transform string.
*/
function buildLayoutProjectionTransformOrigin(_a) {
	var deltaFinal = _a.deltaFinal;
	return deltaFinal.x.origin * 100 + "% " + deltaFinal.y.origin * 100 + "% 0";
}
var identityProjection = buildLayoutProjectionTransform(zeroLayout.delta, zeroLayout.treeScale, {
	x: 1,
	y: 1
});
//#endregion
//#region node_modules/svelte-motion/src/animation/utils/is-animation-controls.js
/** 
based on framer-motion@4.0.3,
Copyright (c) 2018 Framer B.V.
*/
var isAnimationControls = function(v) {
	return typeof v === "object" && typeof v.start === "function";
};
//#endregion
//#region node_modules/svelte-motion/src/utils/shallow-compare.js
/** 
based on framer-motion@4.0.3,
Copyright (c) 2018 Framer B.V.
*/
function shallowCompare(next, prev) {
	if (!Array.isArray(prev)) return false;
	var prevLength = prev.length;
	if (prevLength !== next.length) return false;
	for (var i = 0; i < prevLength; i++) if (prev[i] !== next[i]) return false;
	return true;
}
//#endregion
//#region node_modules/svelte-motion/src/render/utils/types.js
/** 
based on framer-motion@4.0.3,
Copyright (c) 2018 Framer B.V.
*/
var AnimationType;
(function(AnimationType) {
	AnimationType["Animate"] = "animate";
	AnimationType["Hover"] = "whileHover";
	AnimationType["Tap"] = "whileTap";
	AnimationType["Drag"] = "whileDrag";
	AnimationType["Focus"] = "whileFocus";
	AnimationType["Exit"] = "exit";
})(AnimationType || (AnimationType = {}));
//#endregion
//#region node_modules/svelte-motion/src/render/utils/animation-state.js
/** 
based on framer-motion@4.0.3,
Copyright (c) 2018 Framer B.V.
*/
var variantPriorityOrder = [
	AnimationType.Animate,
	AnimationType.Hover,
	AnimationType.Tap,
	AnimationType.Drag,
	AnimationType.Focus,
	AnimationType.Exit
];
var reversePriorityOrder = __spreadArray([], __read(variantPriorityOrder)).reverse();
var numAnimationTypes = variantPriorityOrder.length;
function animateList(visualElement) {
	return function(animations) {
		return Promise.all(animations.map(function(_a) {
			var animation = _a.animation, options = _a.options;
			return animateVisualElement(visualElement, animation, options);
		}));
	};
}
function createAnimationState(visualElement) {
	var animate = animateList(visualElement);
	var state = createState();
	var allAnimatedKeys = {};
	var isInitialRender = true;
	/**
	* This function will be used to reduce the animation definitions for
	* each active animation type into an object of resolved values for it.
	*/
	var buildResolvedTypeValues = function(acc, definition) {
		var resolved = resolveVariant(visualElement, definition);
		if (resolved) {
			resolved.transition;
			var transitionEnd = resolved.transitionEnd, target = __rest(resolved, ["transition", "transitionEnd"]);
			acc = Object.assign(Object.assign(Object.assign({}, acc), target), transitionEnd);
		}
		return acc;
	};
	function isAnimated(key) {
		return allAnimatedKeys[key] !== void 0;
	}
	/**
	* This just allows us to inject mocked animation functions
	* @internal
	*/
	function setAnimateFunction(makeAnimator) {
		animate = makeAnimator(visualElement);
	}
	/**
	* When we receive new props, we need to:
	* 1. Create a list of protected keys for each type. This is a directory of
	*    value keys that are currently being "handled" by types of a higher priority
	*    so that whenever an animation is played of a given type, these values are
	*    protected from being animated.
	* 2. Determine if an animation type needs animating.
	* 3. Determine if any values have been removed from a type and figure out
	*    what to animate those to.
	*/
	function animateChanges(options, changedActiveType) {
		var _a;
		var props = visualElement.getProps();
		var context = visualElement.getVariantContext(true) || {};
		/**
		* A list of animations that we'll build into as we iterate through the animation
		* types. This will get executed at the end of the function.
		*/
		var animations = [];
		/**
		* Keep track of which values have been removed. Then, as we hit lower priority
		* animation types, we can check if they contain removed values and animate to that.
		*/
		var removedKeys = /* @__PURE__ */ new Set();
		/**
		* A dictionary of all encountered keys. This is an object to let us build into and
		* copy it without iteration. Each time we hit an animation type we set its protected
		* keys - the keys its not allowed to animate - to the latest version of this object.
		*/
		var encounteredKeys = {};
		/**
		* If a variant has been removed at a given index, and this component is controlling
		* variant animations, we want to ensure lower-priority variants are forced to animate.
		*/
		var removedVariantIndex = Infinity;
		var _loop_1 = function(i) {
			var type = reversePriorityOrder[i];
			var typeState = state[type];
			var prop = (_a = props[type]) !== null && _a !== void 0 ? _a : context[type];
			var propIsVariant = isVariantLabel(prop);
			/**
			* If this type has *just* changed isActive status, set activeDelta
			* to that status. Otherwise set to null.
			*/
			var activeDelta = type === changedActiveType ? typeState.isActive : null;
			if (activeDelta === false) removedVariantIndex = i;
			/**
			* If this prop is an inherited variant, rather than been set directly on the
			* component itself, we want to make sure we allow the parent to trigger animations.
			*
			* TODO: Can probably change this to a !isControllingVariants check
			*/
			var isInherited = prop === context[type] && prop !== props[type] && propIsVariant;
			/**
			*
			*/
			if (isInherited && isInitialRender && visualElement.manuallyAnimateOnMount) isInherited = false;
			/**
			* Set all encountered keys so far as the protected keys for this type. This will
			* be any key that has been animated or otherwise handled by active, higher-priortiy types.
			*/
			typeState.protectedKeys = Object.assign({}, encounteredKeys);
			if (!typeState.isActive && activeDelta === null || !prop && !typeState.prevProp || isAnimationControls(prop) || typeof prop === "boolean") return "continue";
			/**
			* As we go look through the values defined on this type, if we detect
			* a changed value or a value that was removed in a higher priority, we set
			* this to true and add this prop to the animation list.
			*/
			var shouldAnimateType = variantsHaveChanged(typeState.prevProp, prop) || type === changedActiveType && typeState.isActive && !isInherited && propIsVariant || i > removedVariantIndex && propIsVariant;
			/**
			* As animations can be set as variant lists, variants or target objects, we
			* coerce everything to an array if it isn't one already
			*/
			var definitionList = Array.isArray(prop) ? prop : [prop];
			/**
			* Build an object of all the resolved values. We'll use this in the subsequent
			* animateChanges calls to determine whether a value has changed.
			*/
			var resolvedValues = definitionList.reduce(buildResolvedTypeValues, {});
			if (activeDelta === false) resolvedValues = {};
			/**
			* Now we need to loop through all the keys in the prev prop and this prop,
			* and decide:
			* 1. If the value has changed, and needs animating
			* 2. If it has been removed, and needs adding to the removedKeys set
			* 3. If it has been removed in a higher priority type and needs animating
			* 4. If it hasn't been removed in a higher priority but hasn't changed, and
			*    needs adding to the type's protectedKeys list.
			*/
			var _b = typeState.prevResolvedValues, prevResolvedValues = _b === void 0 ? {} : _b;
			var allKeys = Object.assign(Object.assign({}, prevResolvedValues), resolvedValues);
			var markToAnimate = function(key) {
				shouldAnimateType = true;
				removedKeys.delete(key);
				typeState.needsAnimating[key] = true;
			};
			for (var key in allKeys) {
				var next = resolvedValues[key];
				var prev = prevResolvedValues[key];
				if (encounteredKeys.hasOwnProperty(key)) continue;
				/**
				* If the value has changed, we probably want to animate it.
				*/
				if (next !== prev)
 /**
				* If both values are keyframes, we need to shallow compare them to
				* detect whether any value has changed. If it has, we animate it.
				*/
				if (isKeyframesTarget(next) && isKeyframesTarget(prev)) if (!shallowCompare(next, prev)) markToAnimate(key);
				else
 /**
				* If it hasn't changed, we want to ensure it doesn't animate by
				* adding it to the list of protected keys.
				*/
				typeState.protectedKeys[key] = true;
				else if (next !== void 0) markToAnimate(key);
				else removedKeys.add(key);
				else if (next !== void 0 && removedKeys.has(key))
 /**
				* If next hasn't changed and it isn't undefined, we want to check if it's
				* been removed by a higher priority
				*/
				markToAnimate(key);
				else
 /**
				* If it hasn't changed, we add it to the list of protected values
				* to ensure it doesn't get animated.
				*/
				typeState.protectedKeys[key] = true;
			}
			/**
			* Update the typeState so next time animateChanges is called we can compare the
			* latest prop and resolvedValues to these.
			*/
			typeState.prevProp = prop;
			typeState.prevResolvedValues = resolvedValues;
			/**
			*
			*/
			if (typeState.isActive) encounteredKeys = Object.assign(Object.assign({}, encounteredKeys), resolvedValues);
			if (isInitialRender && visualElement.blockInitialAnimation) shouldAnimateType = false;
			/**
			* If this is an inherited prop we want to hard-block animations
			* TODO: Test as this should probably still handle animations triggered
			* by removed values?
			*/
			if (shouldAnimateType && !isInherited) animations.push.apply(animations, __spreadArray([], __read(definitionList.map(function(animation) {
				return {
					animation,
					options: Object.assign({ type }, options)
				};
			}))));
		};
		/**
		* Iterate through all animation types in reverse priority order. For each, we want to
		* detect which values it's handling and whether or not they've changed (and therefore
		* need to be animated). If any values have been removed, we want to detect those in
		* lower priority props and flag for animation.
		*/
		for (var i = 0; i < numAnimationTypes; i++) _loop_1(i);
		allAnimatedKeys = Object.assign({}, encounteredKeys);
		/**
		* If there are some removed value that haven't been dealt with,
		* we need to create a new animation that falls back either to the value
		* defined in the style prop, or the last read value.
		*/
		if (removedKeys.size) {
			var fallbackAnimation_1 = {};
			removedKeys.forEach(function(key) {
				var fallbackTarget = visualElement.getBaseTarget(key);
				if (fallbackTarget !== void 0) fallbackAnimation_1[key] = fallbackTarget;
			});
			animations.push({ animation: fallbackAnimation_1 });
		}
		var shouldAnimate = Boolean(animations.length);
		if (isInitialRender && props.initial === false && !visualElement.manuallyAnimateOnMount) shouldAnimate = false;
		isInitialRender = false;
		return shouldAnimate ? animate(animations) : Promise.resolve();
	}
	/**
	* Change whether a certain animation type is active.
	*/
	function setActive(type, isActive, options) {
		var _a;
		if (state[type].isActive === isActive) return Promise.resolve();
		(_a = visualElement.variantChildren) === null || _a === void 0 || _a.forEach(function(child) {
			var _a;
			return (_a = child.animationState) === null || _a === void 0 ? void 0 : _a.setActive(type, isActive);
		});
		state[type].isActive = isActive;
		return animateChanges(options, type);
	}
	return {
		isAnimated,
		animateChanges,
		setActive,
		setAnimateFunction,
		getState: function() {
			return state;
		}
	};
}
function variantsHaveChanged(prev, next) {
	if (typeof next === "string") return next !== prev;
	else if (isVariantLabels(next)) return !shallowCompare(next, prev);
	return false;
}
function createTypeState(isActive) {
	if (isActive === void 0) isActive = false;
	return {
		isActive,
		protectedKeys: {},
		needsAnimating: {},
		prevResolvedValues: {}
	};
}
function createState() {
	var _a;
	return _a = {}, _a[AnimationType.Animate] = createTypeState(true), _a[AnimationType.Hover] = createTypeState(), _a[AnimationType.Tap] = createTypeState(), _a[AnimationType.Drag] = createTypeState(), _a[AnimationType.Focus] = createTypeState(), _a[AnimationType.Exit] = createTypeState(), _a;
}
//#endregion
//#region node_modules/svelte-motion/src/render/utils/lifecycles.js
/** 
based on framer-motion@4.0.3,
Copyright (c) 2018 Framer B.V.
*/
var names = [
	"LayoutMeasure",
	"BeforeLayoutMeasure",
	"LayoutUpdate",
	"ViewportBoxUpdate",
	"Update",
	"Render",
	"AnimationComplete",
	"LayoutAnimationComplete",
	"AnimationStart",
	"SetAxisTarget",
	"Unmount"
];
function createLifecycles() {
	var managers = names.map(function() {
		return new SubscriptionManager();
	});
	var propSubscriptions = {};
	var lifecycles = {
		clearAllListeners: function() {
			return managers.forEach(function(manager) {
				return manager.clear();
			});
		},
		updatePropListeners: function(props) {
			return names.forEach(function(name) {
				var _a;
				(_a = propSubscriptions[name]) === null || _a === void 0 || _a.call(propSubscriptions);
				var on = "on" + name;
				var propListener = props[on];
				if (propListener) propSubscriptions[name] = lifecycles[on](propListener);
			});
		}
	};
	managers.forEach(function(manager, i) {
		lifecycles["on" + names[i]] = function(handler) {
			return manager.add(handler);
		};
		lifecycles["notify" + names[i]] = function() {
			var args = [];
			for (var _i = 0; _i < arguments.length; _i++) args[_i] = arguments[_i];
			return manager.notify.apply(manager, __spreadArray([], __read(args)));
		};
	});
	return lifecycles;
}
//#endregion
//#region node_modules/svelte-motion/src/render/utils/motion-values.js
/** 
based on framer-motion@4.0.3,
Copyright (c) 2018 Framer B.V.
*/
function updateMotionValuesFromProps(element, next, prev) {
	var _a;
	for (var key in next) {
		var nextValue = next[key];
		var prevValue = prev[key];
		if (isMotionValue(nextValue))
 /**
		* If this is a motion value found in props or style, we want to add it
		* to our visual element's motion value map.
		*/
		element.addValue(key, nextValue);
		else if (isMotionValue(prevValue))
 /**
		* If we're swapping to a new motion value, create a new motion value
		* from that
		*/
		element.addValue(key, motionValue(nextValue));
		else if (prevValue !== nextValue)
 /**
		* If this is a flat value that has changed, update the motion value
		* or create one if it doesn't exist. We only want to do this if we're
		* not handling the value with our animation state.
		*/
		if (element.hasValue(key)) {
			var existingValue = element.getValue(key);
			!existingValue.hasAnimated && existingValue.set(nextValue);
		} else element.addValue(key, motionValue((_a = element.getStaticValue(key)) !== null && _a !== void 0 ? _a : nextValue));
	}
	for (var key in prev) if (next[key] === void 0) element.removeValue(key);
	return next;
}
//#endregion
//#region node_modules/svelte-motion/src/render/utils/projection.js
/** 
based on framer-motion@4.0.3,
Copyright (c) 2018 Framer B.V.
*/
function updateLayoutDeltas(_a, _b, treePath, transformOrigin) {
	var delta = _a.delta, layout = _a.layout, layoutCorrected = _a.layoutCorrected, treeScale = _a.treeScale;
	var target = _b.target;
	/**
	* Reset the corrected box with the latest values from box, as we're then going
	* to perform mutative operations on it.
	*/
	resetBox(layoutCorrected, layout);
	/**
	* Apply all the parent deltas to this box to produce the corrected box. This
	* is the layout box, as it will appear on screen as a result of the transforms of its parents.
	*/
	applyTreeDeltas(layoutCorrected, treeScale, treePath);
	/**
	* Update the delta between the corrected box and the target box before user-set transforms were applied.
	* This will allow us to calculate the corrected borderRadius and boxShadow to compensate
	* for our layout reprojection, but still allow them to be scaled correctly by the user.
	* It might be that to simplify this we may want to accept that user-set scale1 is also corrected
	* and we wouldn't have to keep and calc both deltas, OR we could support a user setting
	* to allow people to choose whether these styles are corrected based on just the
	* layout reprojection or the final bounding box.
	*/
	updateBoxDelta(delta, layoutCorrected, target, transformOrigin);
}
//#endregion
//#region node_modules/svelte-motion/src/render/utils/compare-by-depth.js
/** 
based on framer-motion@4.0.3,
Copyright (c) 2018 Framer B.V.
*/
var compareByDepth = function(a, b) {
	return a.depth - b.depth;
};
//#endregion
//#region node_modules/svelte-motion/src/render/utils/flat-tree.js
/** 
based on framer-motion@4.0.3,
Copyright (c) 2018 Framer B.V.
*/
var FlatTree = function() {
	function FlatTree() {
		this.children = [];
		this.isDirty = false;
	}
	FlatTree.prototype.add = function(child) {
		addUniqueItem(this.children, child);
		this.isDirty = true;
	};
	FlatTree.prototype.remove = function(child) {
		removeItem(this.children, child);
		this.isDirty = true;
	};
	FlatTree.prototype.forEach = function(callback) {
		this.isDirty && this.children.sort(compareByDepth);
		var numChildren = this.children.length;
		for (var i = 0; i < numChildren; i++) callback(this.children[i]);
	};
	return FlatTree;
}();
function calcRelativeOffsetAxis(parent, child) {
	return {
		min: child.min - parent.min,
		max: child.max - parent.min
	};
}
function calcRelativeOffset(parent, child) {
	return {
		x: calcRelativeOffsetAxis(parent.x, child.x),
		y: calcRelativeOffsetAxis(parent.y, child.y)
	};
}
//#endregion
//#region node_modules/svelte-motion/src/render/dom/projection/relative-set.js
/** 
based on framer-motion@4.1.11,
Copyright (c) 2018 Framer B.V.
*/
function setCurrentViewportBox(visualElement) {
	var projectionParent = visualElement.getProjectionParent();
	if (!projectionParent) {
		visualElement.rebaseProjectionTarget();
		return;
	}
	var relativeOffset = calcRelativeOffset(projectionParent.getLayoutState().layout, visualElement.getLayoutState().layout);
	eachAxis(function(axis) {
		visualElement.setProjectionTargetAxis(axis, relativeOffset[axis].min, relativeOffset[axis].max, true);
	});
}
//#endregion
//#region node_modules/svelte-motion/src/render/index.js
var visualElement = function(_a) {
	var _b = _a.treeType, treeType = _b === void 0 ? "" : _b, build = _a.build, getBaseTarget = _a.getBaseTarget, makeTargetAnimatable = _a.makeTargetAnimatable, measureViewportBox = _a.measureViewportBox, renderInstance = _a.render, readValueFromInstance = _a.readValueFromInstance, resetTransform = _a.resetTransform, restoreTransform = _a.restoreTransform, removeValueFromRenderState = _a.removeValueFromRenderState, sortNodePosition = _a.sortNodePosition, scrapeMotionValuesFromProps = _a.scrapeMotionValuesFromProps;
	return function(_a, options) {
		var parent = _a.parent, props = _a.props, presenceId = _a.presenceId, blockInitialAnimation = _a.blockInitialAnimation, visualState = _a.visualState;
		if (options === void 0) options = {};
		var latestValues = visualState.latestValues, renderState = visualState.renderState;
		/**
		* The instance of the render-specific node that will be hydrated by the
		* exposed React ref. So for example, this visual element can host a
		* HTMLElement, plain object, or Three.js object. The functions provided
		* in VisualElementConfig allow us to interface with this instance.
		*/
		var instance;
		/**
		* Manages the subscriptions for a visual element's lifecycle, for instance
		* onRender and onViewportBoxUpdate.
		*/
		var lifecycles = createLifecycles();
		/**
		*
		*/
		var projection = createProjectionState();
		/**
		* A reference to the nearest projecting parent. This is either
		* undefined if we haven't looked for the nearest projecting parent,
		* false if there is no parent performing layout projection, or a reference
		* to the projecting parent.
		*/
		var projectionParent;
		/**
		* This is a reference to the visual state of the "lead" visual element.
		* Usually, this will be this visual element. But if it shares a layoutId
		* with other visual elements, only one of them will be designated lead by
		* AnimateSharedLayout. All the other visual elements will take on the visual
		* appearance of the lead while they crossfade to it.
		*/
		var leadProjection = projection;
		var leadLatestValues = latestValues;
		var unsubscribeFromLeadVisualElement;
		/**
		* The latest layout measurements and calculated projections. This
		* is seperate from the target projection data in visualState as
		* many visual elements might point to the same piece of visualState as
		* a target, whereas they might each have different layouts and thus
		* projection calculations needed to project into the same viewport box.
		*/
		var layoutState = createLayoutState();
		/**
		*
		*/
		var crossfader;
		/**
		* Keep track of whether the viewport box has been updated since the
		* last time the layout projection was re-calculated.
		*/
		var hasViewportBoxUpdated = false;
		/**
		* A map of all motion values attached to this visual element. Motion
		* values are source of truth for any given animated value. A motion
		* value might be provided externally by the component via props.
		*/
		var values = /* @__PURE__ */ new Map();
		/**
		* A map of every subscription that binds the provided or generated
		* motion values onChange listeners to this visual element.
		*/
		var valueSubscriptions = /* @__PURE__ */ new Map();
		/**
		* A reference to the previously-provided motion values as returned
		* from scrapeMotionValuesFromProps. We use the keys in here to determine
		* if any motion values need to be removed after props are updated.
		*/
		var prevMotionValues = {};
		/**
		* x/y motion values that track the progress of initiated layout
		* animations.
		*
		* TODO: Target for removal
		*/
		var projectionTargetProgress;
		/**
		* When values are removed from all animation props we need to search
		* for a fallback value to animate to. These values are tracked in baseTarget.
		*/
		var baseTarget = Object.assign({}, latestValues);
		/**
		* On mount, this will be hydrated with a callback to disconnect
		* this visual element from its parent on unmount.
		*/
		var removeFromVariantTree;
		/**
		*
		*/
		function render() {
			if (!instance) return;
			if (element.isProjectionReady()) {
				/**
				* Apply the latest user-set transforms to the targetBox to produce the targetBoxFinal.
				* This is the final box that we will then project into by calculating a transform delta and
				* applying it to the corrected box.
				*/
				applyBoxTransforms(leadProjection.targetFinal, leadProjection.target, leadLatestValues);
				/**
				* Update the delta between the corrected box and the final target box, after
				* user-set transforms are applied to it. This will be used by the renderer to
				* create a transform style that will reproject the element from its actual layout
				* into the desired bounding box.
				*/
				updateBoxDelta(layoutState.deltaFinal, layoutState.layoutCorrected, leadProjection.targetFinal, latestValues);
			}
			triggerBuild();
			renderInstance(instance, renderState);
		}
		function triggerBuild() {
			var valuesToRender = latestValues;
			if (crossfader && crossfader.isActive()) {
				var crossfadedValues = crossfader.getCrossfadeState(element);
				if (crossfadedValues) valuesToRender = crossfadedValues;
			}
			build(element, renderState, valuesToRender, leadProjection, layoutState, options, props);
		}
		function update() {
			lifecycles.notifyUpdate(latestValues);
		}
		function updateLayoutProjection() {
			if (!element.isProjectionReady()) return;
			var delta = layoutState.delta, treeScale = layoutState.treeScale;
			var prevTreeScaleX = treeScale.x;
			var prevTreeScaleY = treeScale.y;
			var prevDeltaTransform = layoutState.deltaTransform;
			updateLayoutDeltas(layoutState, leadProjection, element.path, latestValues);
			hasViewportBoxUpdated && element.notifyViewportBoxUpdate(leadProjection.target, delta);
			hasViewportBoxUpdated = false;
			var deltaTransform = buildLayoutProjectionTransform(delta, treeScale);
			if (deltaTransform !== prevDeltaTransform || prevTreeScaleX !== treeScale.x || prevTreeScaleY !== treeScale.y) element.scheduleRender();
			layoutState.deltaTransform = deltaTransform;
		}
		function updateTreeLayoutProjection() {
			element.layoutTree.forEach(fireUpdateLayoutProjection);
		}
		/**
		*
		*/
		function bindToMotionValue(key, value) {
			var removeOnChange = value.onChange(function(latestValue) {
				latestValues[key] = latestValue;
				props.onUpdate && sync.update(update, false, true);
			});
			var removeOnRenderRequest = value.onRenderRequest(element.scheduleRender);
			valueSubscriptions.set(key, function() {
				removeOnChange();
				removeOnRenderRequest();
			});
		}
		/**
		* Any motion values that are provided to the element when created
		* aren't yet bound to the element, as this would technically be impure.
		* However, we iterate through the motion values and set them to the
		* initial values for this component.
		*
		* TODO: This is impure and we should look at changing this to run on mount.
		* Doing so will break some tests but this isn't neccessarily a breaking change,
		* more a reflection of the test.
		*/
		var initialMotionValues = scrapeMotionValuesFromProps(props);
		for (var key in initialMotionValues) {
			var value = initialMotionValues[key];
			if (latestValues[key] !== void 0 && isMotionValue(value)) value.set(latestValues[key], false);
		}
		/**
		* Determine what role this visual element should take in the variant tree.
		*/
		var isControllingVariants = checkIfControllingVariants(props);
		var isVariantNode = checkIfVariantNode(props);
		var element = Object.assign(Object.assign({
			treeType,
			current: null,
			depth: parent ? parent.depth + 1 : 0,
			parent,
			children: /* @__PURE__ */ new Set(),
			path: parent ? __spreadArray(__spreadArray([], __read(parent.path)), [parent]) : [],
			layoutTree: parent ? parent.layoutTree : new FlatTree(),
			presenceId,
			projection,
			variantChildren: isVariantNode ? /* @__PURE__ */ new Set() : void 0,
			isVisible: void 0,
			manuallyAnimateOnMount: Boolean(parent === null || parent === void 0 ? void 0 : parent.isMounted()),
			blockInitialAnimation,
			isMounted: function() {
				return Boolean(instance);
			},
			mount: function(newInstance) {
				instance = element.current = newInstance;
				element.pointTo(element);
				if (isVariantNode && parent && !isControllingVariants) removeFromVariantTree = parent === null || parent === void 0 ? void 0 : parent.addVariantChild(element);
				parent === null || parent === void 0 || parent.children.add(element);
			},
			unmount: function() {
				cancelSync.update(update);
				cancelSync.render(render);
				cancelSync.preRender(element.updateLayoutProjection);
				valueSubscriptions.forEach(function(remove) {
					return remove();
				});
				element.stopLayoutAnimation();
				element.layoutTree.remove(element);
				removeFromVariantTree === null || removeFromVariantTree === void 0 || removeFromVariantTree();
				parent === null || parent === void 0 || parent.children.delete(element);
				unsubscribeFromLeadVisualElement === null || unsubscribeFromLeadVisualElement === void 0 || unsubscribeFromLeadVisualElement();
				lifecycles.clearAllListeners();
			},
			addVariantChild: function(child) {
				var _a;
				var closestVariantNode = element.getClosestVariantNode();
				if (closestVariantNode) {
					(_a = closestVariantNode.variantChildren) === null || _a === void 0 || _a.add(child);
					return function() {
						return closestVariantNode.variantChildren.delete(child);
					};
				}
			},
			sortNodePosition: function(other) {
				/**
				* If these nodes aren't even of the same type we can't compare their depth.
				*/
				if (!sortNodePosition || treeType !== other.treeType) return 0;
				return sortNodePosition(element.getInstance(), other.getInstance());
			},
			getClosestVariantNode: function() {
				return isVariantNode ? element : parent === null || parent === void 0 ? void 0 : parent.getClosestVariantNode();
			},
			scheduleUpdateLayoutProjection: parent ? parent.scheduleUpdateLayoutProjection : function() {
				return sync.preRender(element.updateTreeLayoutProjection, false, true);
			},
			getLayoutId: function() {
				return props.layoutId;
			},
			getInstance: function() {
				return instance;
			},
			getStaticValue: function(key) {
				return latestValues[key];
			},
			setStaticValue: function(key, value) {
				return latestValues[key] = value;
			},
			getLatestValues: function() {
				return latestValues;
			},
			setVisibility: function(visibility) {
				if (element.isVisible === visibility) return;
				element.isVisible = visibility;
				element.scheduleRender();
			},
			makeTargetAnimatable: function(target, canMutate) {
				if (canMutate === void 0) canMutate = true;
				return makeTargetAnimatable(element, target, props, canMutate);
			},
			addValue: function(key, value) {
				if (element.hasValue(key)) element.removeValue(key);
				values.set(key, value);
				latestValues[key] = value.get();
				bindToMotionValue(key, value);
			},
			removeValue: function(key) {
				var _a;
				values.delete(key);
				(_a = valueSubscriptions.get(key)) === null || _a === void 0 || _a();
				valueSubscriptions.delete(key);
				delete latestValues[key];
				removeValueFromRenderState(key, renderState);
			},
			hasValue: function(key) {
				return values.has(key);
			},
			getValue: function(key, defaultValue) {
				var value = values.get(key);
				if (value === void 0 && defaultValue !== void 0) {
					value = motionValue(defaultValue);
					element.addValue(key, value);
				}
				return value;
			},
			forEachValue: function(callback) {
				return values.forEach(callback);
			},
			readValue: function(key) {
				var _a;
				return (_a = latestValues[key]) !== null && _a !== void 0 ? _a : readValueFromInstance(instance, key, options);
			},
			setBaseTarget: function(key, value) {
				baseTarget[key] = value;
			},
			getBaseTarget: function(key) {
				if (getBaseTarget) {
					var target = getBaseTarget(props, key);
					if (target !== void 0 && !isMotionValue(target)) return target;
				}
				return baseTarget[key];
			}
		}, lifecycles), {
			build: function() {
				triggerBuild();
				return renderState;
			},
			scheduleRender: function() {
				sync.render(render, false, true);
			},
			syncRender: render,
			setProps: function(newProps) {
				props = newProps;
				lifecycles.updatePropListeners(newProps);
				prevMotionValues = updateMotionValuesFromProps(element, scrapeMotionValuesFromProps(props), prevMotionValues);
			},
			getProps: function() {
				return props;
			},
			getVariant: function(name) {
				var _a;
				return (_a = props.variants) === null || _a === void 0 ? void 0 : _a[name];
			},
			getDefaultTransition: function() {
				return props.transition;
			},
			getVariantContext: function(startAtParent) {
				if (startAtParent === void 0) startAtParent = false;
				if (startAtParent) return parent === null || parent === void 0 ? void 0 : parent.getVariantContext();
				if (!isControllingVariants) {
					var context_1 = (parent === null || parent === void 0 ? void 0 : parent.getVariantContext()) || {};
					if (props.initial !== void 0) context_1.initial = props.initial;
					return context_1;
				}
				var context = {};
				for (var i = 0; i < numVariantProps; i++) {
					var name_1 = variantProps[i];
					var prop = props[name_1];
					if (isVariantLabel(prop) || prop === false) context[name_1] = prop;
				}
				return context;
			},
			enableLayoutProjection: function() {
				projection.isEnabled = true;
				element.layoutTree.add(element);
			},
			lockProjectionTarget: function() {
				projection.isTargetLocked = true;
			},
			unlockProjectionTarget: function() {
				element.stopLayoutAnimation();
				projection.isTargetLocked = false;
			},
			getLayoutState: function() {
				return layoutState;
			},
			setCrossfader: function(newCrossfader) {
				crossfader = newCrossfader;
			},
			isProjectionReady: function() {
				return projection.isEnabled && projection.isHydrated && layoutState.isHydrated;
			},
			startLayoutAnimation: function(axis, transition, isRelative) {
				if (isRelative === void 0) isRelative = false;
				var progress = element.getProjectionAnimationProgress()[axis];
				var _a = isRelative ? projection.relativeTarget[axis] : projection.target[axis], min = _a.min;
				var length = _a.max - min;
				progress.clearListeners();
				progress.set(min);
				progress.set(min);
				progress.onChange(function(v) {
					element.setProjectionTargetAxis(axis, v, v + length, isRelative);
				});
				return element.animateMotionValue(axis, progress, 0, transition);
			},
			stopLayoutAnimation: function() {
				eachAxis(function(axis) {
					return element.getProjectionAnimationProgress()[axis].stop();
				});
			},
			measureViewportBox: function(withTransform) {
				if (withTransform === void 0) withTransform = true;
				var viewportBox = measureViewportBox(instance, options);
				if (!withTransform) removeBoxTransforms(viewportBox, latestValues);
				return viewportBox;
			},
			getProjectionAnimationProgress: function() {
				projectionTargetProgress || (projectionTargetProgress = {
					x: motionValue(0),
					y: motionValue(0)
				});
				return projectionTargetProgress;
			},
			setProjectionTargetAxis: function(axis, min, max, isRelative) {
				if (isRelative === void 0) isRelative = false;
				var target;
				if (isRelative) {
					if (!projection.relativeTarget) projection.relativeTarget = axisBox();
					target = projection.relativeTarget[axis];
				} else {
					projection.relativeTarget = void 0;
					target = projection.target[axis];
				}
				projection.isHydrated = true;
				target.min = min;
				target.max = max;
				hasViewportBoxUpdated = true;
				lifecycles.notifySetAxisTarget();
			},
			rebaseProjectionTarget: function(force, box) {
				if (box === void 0) box = layoutState.layout;
				var _a = element.getProjectionAnimationProgress(), x = _a.x, y = _a.y;
				var shouldRebase = !projection.relativeTarget && !projection.isTargetLocked && !x.isAnimating() && !y.isAnimating();
				if (force || shouldRebase) eachAxis(function(axis) {
					var _a = box[axis], min = _a.min, max = _a.max;
					element.setProjectionTargetAxis(axis, min, max);
				});
			},
			notifyLayoutReady: function(config) {
				setCurrentViewportBox(element);
				element.notifyLayoutUpdate(layoutState.layout, element.prevViewportBox || layoutState.layout, config);
			},
			resetTransform: function() {
				return resetTransform(element, instance, props);
			},
			restoreTransform: function() {
				return restoreTransform(instance, renderState);
			},
			updateLayoutProjection,
			updateTreeLayoutProjection: function() {
				element.layoutTree.forEach(fireResolveRelativeTargetBox);
				/**
				* Schedule the projection updates at the end of the current preRender
				* step. This will ensure that all layout trees will first resolve
				* relative projection boxes into viewport boxes, and *then*
				* update projections.
				*/
				sync.preRender(updateTreeLayoutProjection, false, true);
			},
			getProjectionParent: function() {
				if (projectionParent === void 0) {
					var foundParent = false;
					for (var i = element.path.length - 1; i >= 0; i--) {
						var ancestor = element.path[i];
						if (ancestor.projection.isEnabled) {
							foundParent = ancestor;
							break;
						}
					}
					projectionParent = foundParent;
				}
				return projectionParent;
			},
			resolveRelativeTargetBox: function() {
				var relativeParent = element.getProjectionParent();
				if (!projection.relativeTarget || !relativeParent) return;
				calcRelativeBox(projection, relativeParent.projection);
				if (isDraggable(relativeParent)) {
					var target = projection.target;
					applyBoxTransforms(target, target, relativeParent.getLatestValues());
				}
			},
			shouldResetTransform: function() {
				return Boolean(props._layoutResetTransform);
			},
			pointTo: function(newLead) {
				leadProjection = newLead.projection;
				leadLatestValues = newLead.getLatestValues();
				/**
				* Subscribe to lead component's layout animations
				*/
				unsubscribeFromLeadVisualElement === null || unsubscribeFromLeadVisualElement === void 0 || unsubscribeFromLeadVisualElement();
				unsubscribeFromLeadVisualElement = pipe(newLead.onSetAxisTarget(element.scheduleUpdateLayoutProjection), newLead.onLayoutAnimationComplete(function() {
					var _a;
					if (element.isPresent) element.presence = Presence.Present;
					else (_a = element.layoutSafeToRemove) === null || _a === void 0 || _a.call(element);
				}));
			},
			isPresent: true,
			presence: Presence.Entering
		});
		return element;
	};
};
function fireResolveRelativeTargetBox(child) {
	child.resolveRelativeTargetBox();
}
function fireUpdateLayoutProjection(child) {
	child.updateLayoutProjection();
}
var variantProps = __spreadArray(["initial"], __read(variantPriorityOrder));
var numVariantProps = variantProps.length;
//#endregion
//#region node_modules/svelte-motion/src/motion/utils/valid-prop.js
/** 
based on framer-motion@4.0.3,
Copyright (c) 2018 Framer B.V.
*/
/**
* A list of all valid MotionProps.
*
* @internalremarks
* This doesn't throw if a `MotionProp` name is missing - it should.
*/
var validMotionProps = new Set([
	"initial",
	"animate",
	"exit",
	"style",
	"variants",
	"transition",
	"transformTemplate",
	"transformValues",
	"custom",
	"inherit",
	"layout",
	"layoutId",
	"onLayoutAnimationComplete",
	"onViewportBoxUpdate",
	"onLayoutMeasure",
	"onBeforeLayoutMeasure",
	"onAnimationStart",
	"onAnimationComplete",
	"onUpdate",
	"onDragStart",
	"onDrag",
	"onDragEnd",
	"onMeasureDragConstraints",
	"onDirectionLock",
	"onDragTransitionEnd",
	"drag",
	"dragControls",
	"dragListener",
	"dragConstraints",
	"dragDirectionLock",
	"_dragX",
	"_dragY",
	"dragElastic",
	"dragMomentum",
	"dragPropagation",
	"dragTransition",
	"whileDrag",
	"onPan",
	"onPanStart",
	"onPanEnd",
	"onPanSessionStart",
	"onTap",
	"onTapStart",
	"onTapCancel",
	"onHoverStart",
	"onHoverEnd",
	"whileFocus",
	"whileTap",
	"whileHover"
]);
/**
* Check whether a prop name is a valid `MotionProp` key.
*
* @param key - Name of the property to check
* @returns `true` is key is a valid `MotionProp`.
*
* @public
*/
function isValidMotionProp(key) {
	return validMotionProps.has(key);
}
//#endregion
//#region node_modules/svelte-motion/src/context/PresenceContext.js
/**
* @public
*/
var PresenceContext = (c) => getDomContext("Presence", c) || writable(null);
//#endregion
//#region node_modules/svelte-motion/src/components/AnimatePresence/use-presence.js
/** 
based on framer-motion@4.0.3,
Copyright (c) 2018 Framer B.V.
*/
var counter = 0;
var incrementId = () => counter++;
function isPresent(context) {
	return context === null ? true : context.isPresent;
}
var usePresence = (isCustom = false) => {
	const context = getContext(PresenceContext) || PresenceContext(isCustom);
	const id = get(context) === null ? void 0 : incrementId();
	if (get(context) === null) return readable([true, null]);
	return derived(context, ($v) => !$v.isPresent && $v.onExitComplete ? [false, () => $v.onExitComplete?.(id)] : [true]);
};
//#endregion
//#region node_modules/svelte-motion/src/context/LayoutGroupContext.js
/**
* @internal
*/
var LayoutGroupContext = (c) => getDomContext("LayoutGroup", c) || writable(null);
//#endregion
//#region node_modules/svelte-motion/src/render/dom/projection/utils.js
/** 
based on framer-motion@4.1.11,
Copyright (c) 2018 Framer B.V.
*/
function isProjecting(visualElement) {
	return visualElement.projection.isEnabled || visualElement.shouldResetTransform();
}
function collectProjectingAncestors(visualElement, ancestors) {
	if (ancestors === void 0) ancestors = [];
	var parent = visualElement.parent;
	if (parent) collectProjectingAncestors(parent, ancestors);
	if (isProjecting(visualElement)) ancestors.push(visualElement);
	return ancestors;
}
function collectProjectingChildren(visualElement) {
	var children = [];
	var addChild = function(child) {
		if (isProjecting(child)) children.push(child);
		child.children.forEach(addChild);
	};
	visualElement.children.forEach(addChild);
	return children.sort(compareByDepth);
}
/**
* Update the layoutState by measuring the DOM layout. This
* should be called after resetting any layout-affecting transforms.
*/
function updateLayoutMeasurement(visualElement) {
	if (visualElement.shouldResetTransform()) return;
	var layoutState = visualElement.getLayoutState();
	visualElement.notifyBeforeLayoutMeasure(layoutState.layout);
	layoutState.isHydrated = true;
	layoutState.layout = visualElement.measureViewportBox();
	layoutState.layoutCorrected = copyAxisBox(layoutState.layout);
	visualElement.notifyLayoutMeasure(layoutState.layout, visualElement.prevViewportBox || layoutState.layout);
	sync.update(function() {
		return visualElement.rebaseProjectionTarget();
	});
}
/**
* Record the viewport box as it was before an expected mutation/re-render
*/
function snapshotViewportBox(visualElement, nc) {
	if (visualElement.shouldResetTransform()) return;
	if (!nc) visualElement.prevViewportBox = visualElement.measureViewportBox(false);
	/**
	* Update targetBox to match the prevViewportBox. This is just to ensure
	* that targetBox is affected by scroll in the same way as the measured box
	*/
	visualElement.rebaseProjectionTarget(false, visualElement.prevViewportBox);
}
//#endregion
//#region node_modules/svelte-motion/src/render/dom/utils/batch-layout.js
/** 
based on framer-motion@4.1.15,
Copyright (c) 2018 Framer B.V.
*/
var unresolvedJobs = /* @__PURE__ */ new Set();
var layoutState = { isMeasuringLayout: false };
function pushJob(stack, job, pointer) {
	if (!stack[pointer]) stack[pointer] = [];
	stack[pointer].push(job);
}
function batchLayout(callback) {
	unresolvedJobs.add(callback);
	return function() {
		return unresolvedJobs.delete(callback);
	};
}
function flushLayout() {
	if (!unresolvedJobs.size) return;
	var pointer = 0;
	var reads = [[]];
	var writes = [];
	var setRead = function(job) {
		return pushJob(reads, job, pointer);
	};
	var setWrite = function(job) {
		pushJob(writes, job, pointer);
		pointer++;
	};
	/**
	* Resolve jobs into their array stacks
	*/
	unresolvedJobs.forEach(function(callback) {
		callback(setRead, setWrite);
		pointer = 0;
	});
	unresolvedJobs.clear();
	/**
	* Mark that we're currently measuring layouts. This allows us to, for instance, ignore
	* hover events that might be triggered as a result of resetting transforms.
	*
	* The postRender/setTimeout combo seems like an odd bit of scheduling but what it's saying
	* is *after* the next render, wait 10ms before re-enabling hover events. Waiting until the
	* next frame completely will result in missed, valid hover events. But events seem to
	* be fired async from their actual action, so setting this to false too soon can still
	* trigger events from layout measurements.
	*
	* Note: If we figure out a way of measuring layout while transforms remain applied, this can be removed.
	* I have attempted unregistering event listeners and setting CSS to pointer-events: none
	* but neither seem to work as expected.
	*/
	layoutState.isMeasuringLayout = true;
	sync.postRender(function() {
		setTimeout(function() {
			return layoutState.isMeasuringLayout = false;
		}, 10);
	});
	/**
	* Execute jobs
	*/
	var numStacks = writes.length;
	for (var i = 0; i <= numStacks; i++) {
		reads[i] && reads[i].forEach(executeJob);
		writes[i] && writes[i].forEach(executeJob);
	}
}
var executeJob = function(job) {
	return job();
};
//#endregion
//#region node_modules/svelte-motion/src/components/AnimateSharedLayout/utils/batcher.js
/** 
based on framer-motion@4.1.15,
Copyright (c) 2018 Framer B.V.
*/
/**
* Default handlers for batching VisualElements
*/
var defaultHandler = { layoutReady: function(child) {
	return child.notifyLayoutReady();
} };
/**
* Create a batcher to process VisualElements
*/
function createBatcher() {
	var queue = /* @__PURE__ */ new Set();
	return {
		add: function(child) {
			return queue.add(child);
		},
		flush: function(_a) {
			var _b = _a === void 0 ? defaultHandler : _a, layoutReady = _b.layoutReady, parent = _b.parent;
			batchLayout(function(read, write) {
				var order = Array.from(queue).sort(compareByDepth);
				var ancestors = parent ? collectProjectingAncestors(parent) : [];
				write(function() {
					__spreadArray(__spreadArray([], __read(ancestors)), __read(order)).forEach(function(element) {
						return element.resetTransform();
					});
				});
				read(function() {
					order.forEach(updateLayoutMeasurement);
				});
				write(function() {
					ancestors.forEach(function(element) {
						return element.restoreTransform();
					});
					order.forEach(layoutReady);
				});
				read(function() {
					/**
					* After all children have started animating, ensure any Entering components are set to Present.
					* If we add deferred animations (set up all animations and then start them in two loops) this
					* could be moved to the start loop. But it needs to happen after all the animations configs
					* are generated in AnimateSharedLayout as this relies on presence data
					*/
					order.forEach(function(child) {
						if (child.isPresent) child.presence = Presence.Present;
					});
				});
				write(function() {
					/**
					* Starting these animations will have queued jobs on the frame loop. In some situations,
					* like when removing an element, these will be processed too late after the DOM is manipulated,
					* leaving a flash of incorrectly-projected content. By manually flushing these jobs
					* we ensure there's no flash.
					*/
					flushSync.preRender();
					flushSync.render();
				});
				read(function() {
					/**
					* Schedule a callback at the end of the following frame to assign the latest projection
					* box to the prevViewportBox snapshot. Once global batching is in place this could be run
					* synchronously. But for now it ensures that if any nested `AnimateSharedLayout` top-level
					* child attempts to calculate its previous relative position against a prevViewportBox
					* it will be against its latest projection box instead, as the snapshot is useless beyond this
					* render.
					*/
					sync.postRender(function() {
						return order.forEach(assignProjectionToSnapshot);
					});
					queue.clear();
				});
			});
			flushLayout();
		}
	};
}
function assignProjectionToSnapshot(child) {
	child.prevViewportBox = child.projection.target;
}
//#endregion
//#region node_modules/svelte-motion/src/context/SharedLayoutContext.js
/** 
based on framer-motion@4.0.3,
Copyright (c) 2018 Framer B.V.
*/
var SharedLayoutContext = (custom) => getDomContext("SharedLayout", custom) || writable(createBatcher());
/**
* @internal
*/
var FramerTreeLayoutContext = () => writable(createBatcher());
function isSharedLayout(context) {
	return !!context.forceUpdate;
}
//#endregion
//#region node_modules/svelte-motion/src/context/LazyContext.js
var LazyContext = (c) => getDomContext("Lazy", c) || writable({ strict: false });
//#endregion
//#region node_modules/svelte-motion/src/context/MotionContext/MotionContext.svelte
var MotionContext = (c) => getDomContext("Motion", c) || writable({});
//#endregion
//#region node_modules/svelte-motion/src/motion/utils/UseVisualElement.svelte
function UseVisualElement($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		var $$store_subs;
		let createVisualElement = fallback($$props["createVisualElement"], void 0);
		let props = $$props["props"];
		let Component = $$props["Component"];
		let visualState = $$props["visualState"];
		let isCustom = $$props["isCustom"];
		const config = getContext(MotionConfigContext) || MotionConfigContext(isCustom);
		const presenceContext = getContext(PresenceContext) || PresenceContext(isCustom);
		const lazyContext = getContext(LazyContext) || LazyContext(isCustom);
		const mc = getContext(MotionContext) || MotionContext(isCustom);
		let parent = get(mc).visualElement;
		const layoutGroupId = getContext(LayoutGroupContext) || LayoutGroupContext(isCustom);
		let layoutId = store_get($$store_subs ??= {}, "$layoutGroupId", layoutGroupId) && props.layoutId !== void 0 ? store_get($$store_subs ??= {}, "$layoutGroupId", layoutGroupId) + "-" + props.layoutId : props.layoutId;
		let visualElementRef = void 0;
		/**
		* If we haven't preloaded a renderer, check to see if we have one lazy-loaded
		*/
		if (!createVisualElement) createVisualElement = store_get($$store_subs ??= {}, "$lazyContext", lazyContext).renderer;
		let visualElement = visualElementRef;
		onDestroy(() => {
			visualElement?.notifyUnmount();
		});
		$: parent = store_get($$store_subs ??= {}, "$mc", mc).visualElement;
		$: layoutId = store_get($$store_subs ??= {}, "$layoutGroupId", layoutGroupId) && props.layoutId !== void 0 ? store_get($$store_subs ??= {}, "$layoutGroupId", layoutGroupId) + "-" + props.layoutId : props.layoutId;
		$: if (!visualElementRef && createVisualElement) visualElementRef = createVisualElement(Component, {
			visualState,
			parent,
			props: {
				...props,
				layoutId
			},
			presenceId: store_get($$store_subs ??= {}, "$presenceContext", presenceContext)?.id,
			blockInitialAnimation: store_get($$store_subs ??= {}, "$presenceContext", presenceContext)?.initial === false
		});
		$: visualElement = visualElementRef;
		$: if (visualElement) {
			visualElement.setProps({
				...store_get($$store_subs ??= {}, "$config", config),
				...props,
				layoutId
			});
			visualElement.isPresent = isPresent(store_get($$store_subs ??= {}, "$presenceContext", presenceContext));
			visualElement.isPresenceRoot = !parent || parent.presenceId !== store_get($$store_subs ??= {}, "$presenceContext", presenceContext)?.id;
			/**
			* Fire a render to ensure the latest state is reflected on-screen.
			*/
			visualElement.syncRender();
		}
		$$renderer.push(`<!--[-->`);
		slot($$renderer, $$props, "default", { visualElement }, null);
		$$renderer.push(`<!--]-->`);
		if ($$store_subs) unsubscribe_stores($$store_subs);
		bind_props($$props, {
			createVisualElement,
			props,
			Component,
			visualState,
			isCustom
		});
	});
}
//#endregion
//#region node_modules/svelte-motion/src/motion/features/definitions.js
/** 
based on framer-motion@4.0.3,
Copyright (c) 2018 Framer B.V.
*/
var createDefinition = function(propNames) {
	return { isEnabled: function(props) {
		return propNames.some(function(name) {
			return !!props[name];
		});
	} };
};
var featureDefinitions = {
	measureLayout: createDefinition([
		"layout",
		"layoutId",
		"drag"
	]),
	animation: createDefinition([
		"animate",
		"exit",
		"variants",
		"whileHover",
		"whileTap",
		"whileFocus",
		"whileDrag"
	]),
	exit: createDefinition(["exit"]),
	drag: createDefinition(["drag", "dragControls"]),
	focus: createDefinition(["whileFocus"]),
	hover: createDefinition([
		"whileHover",
		"onHoverStart",
		"onHoverEnd"
	]),
	tap: createDefinition([
		"whileTap",
		"onTap",
		"onTapStart",
		"onTapCancel"
	]),
	pan: createDefinition([
		"onPan",
		"onPanStart",
		"onPanSessionStart",
		"onPanEnd"
	]),
	layoutAnimation: createDefinition(["layout", "layoutId"])
};
function loadFeatures(features) {
	for (var key in features) {
		var Component = features[key];
		if (Component !== null) featureDefinitions[key].Component = Component;
	}
}
//#endregion
//#region node_modules/svelte-motion/src/motion/features/UseFeatures.svelte
function UseFeatures($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		/** 
		based on framer-motion@4.0.3,
		Copyright (c) 2018 Framer B.V.
		*/
		const featureNames = Object.keys(featureDefinitions);
		const numFeatures = featureNames.length;
		let visualElement = $$props["visualElement"];
		let props = $$props["props"];
		let features = [];
		$: {
			features = [];
			for (let i = 0; i < numFeatures; i++) {
				const name = featureNames[i];
				const { isEnabled, Component } = featureDefinitions[name];
				/**
				* It might be possible in the future to use this moment to
				* dynamically request functionality. In initial tests this
				* was producing a lot of duplication amongst bundles.
				*/
				if (isEnabled(props) && Component) features.push({
					Component,
					key: name,
					props,
					visualElement
				});
			}
		}
		if (visualElement) {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<!--[-->`);
			slot($$renderer, $$props, "default", { features }, null);
			$$renderer.push(`<!--]-->`);
		} else $$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]-->`);
		bind_props($$props, {
			visualElement,
			props
		});
	});
}
//#endregion
//#region node_modules/svelte-motion/src/context/MotionContext/MotionContextProvider.svelte
function MotionContextProvider($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let value = $$props["value"];
		let isCustom = $$props["isCustom"];
		let store = writable(value);
		setContext(MotionContext, store);
		setDomContext("Motion", isCustom, store);
		onDestroy(() => {
			value?.visualElement?.unmount();
		});
		$: store.set(value);
		$$renderer.push(`<!--[-->`);
		slot($$renderer, $$props, "default", {}, null);
		$$renderer.push(`<!--]-->`);
		bind_props($$props, {
			value,
			isCustom
		});
	});
}
//#endregion
//#region node_modules/svelte-motion/src/render/html/utils/create-render-state.js
/** 
based on framer-motion@4.0.3,
Copyright (c) 2018 Framer B.V.
*/
var createHtmlRenderState = function() {
	return {
		style: {},
		transform: {},
		transformKeys: [],
		transformOrigin: {},
		vars: {}
	};
};
//#endregion
//#region node_modules/svelte-motion/src/render/svg/utils/create-render-state.js
/** 
based on framer-motion@4.0.3,
Copyright (c) 2018 Framer B.V.
*/
var createSvgRenderState = function() {
	return Object.assign(Object.assign({}, createHtmlRenderState()), { attrs: {} });
};
//#endregion
//#region node_modules/svelte-motion/src/render/html/utils/transform.js
/** 
based on framer-motion@4.0.3,
Copyright (c) 2018 Framer B.V.
*/
/**
* A list of all transformable axes. We'll use this list to generated a version
* of each axes for each transform.
*/
var transformAxes = [
	"",
	"X",
	"Y",
	"Z"
];
/**
* An ordered array of each transformable value. By default, transform values
* will be sorted to this order.
*/
var order = [
	"translate",
	"scale",
	"rotate",
	"skew"
];
/**
* Generate a list of every possible transform key.
*/
var transformProps = [
	"transformPerspective",
	"x",
	"y",
	"z"
];
order.forEach(function(operationKey) {
	return transformAxes.forEach(function(axesKey) {
		return transformProps.push(operationKey + axesKey);
	});
});
/**
* A function to use with Array.sort to sort transform keys by their default order.
*/
function sortTransformProps(a, b) {
	return transformProps.indexOf(a) - transformProps.indexOf(b);
}
/**
* A quick lookup for transform props.
*/
var transformPropSet = new Set(transformProps);
function isTransformProp(key) {
	return transformPropSet.has(key);
}
/**
* A quick lookup for transform origin props
*/
var transformOriginProps = new Set([
	"originX",
	"originY",
	"originZ"
]);
function isTransformOriginProp(key) {
	return transformOriginProps.has(key);
}
//#endregion
//#region node_modules/svelte-motion/src/motion/utils/is-forced-motion-value.js
/** 
based on framer-motion@4.0.3,
Copyright (c) 2018 Framer B.V.
*/
function isForcedMotionValue(key, _a) {
	var layout = _a.layout, layoutId = _a.layoutId;
	return isTransformProp(key) || isTransformOriginProp(key) || (layout || layoutId !== void 0) && !!valueScaleCorrection[key];
}
//#endregion
//#region node_modules/svelte-motion/src/render/html/utils/build-transform.js
/** 
based on framer-motion@4.0.3,
Copyright (c) 2018 Framer B.V.
*/
var translateAlias = {
	x: "translateX",
	y: "translateY",
	z: "translateZ",
	transformPerspective: "perspective"
};
/**
* Build a CSS transform style from individual x/y/scale etc properties.
*
* This outputs with a default order of transforms/scales/rotations, this can be customised by
* providing a transformTemplate function.
*/
function buildTransform(_a, _b, transformIsDefault, transformTemplate) {
	var transform = _a.transform, transformKeys = _a.transformKeys;
	var _c = _b.enableHardwareAcceleration, enableHardwareAcceleration = _c === void 0 ? true : _c, _d = _b.allowTransformNone, allowTransformNone = _d === void 0 ? true : _d;
	var transformString = "";
	transformKeys.sort(sortTransformProps);
	var transformHasZ = false;
	var numTransformKeys = transformKeys.length;
	for (var i = 0; i < numTransformKeys; i++) {
		var key = transformKeys[i];
		transformString += (translateAlias[key] || key) + "(" + transform[key] + ") ";
		if (key === "z") transformHasZ = true;
	}
	if (!transformHasZ && enableHardwareAcceleration) transformString += "translateZ(0)";
	else transformString = transformString.trim();
	if (transformTemplate) transformString = transformTemplate(transform, transformIsDefault ? "" : transformString);
	else if (allowTransformNone && transformIsDefault) transformString = "none";
	return transformString;
}
/**
* Build a transformOrigin style. Uses the same defaults as the browser for
* undefined origins.
*/
function buildTransformOrigin(_a) {
	var _b = _a.originX, originX = _b === void 0 ? "50%" : _b, _c = _a.originY, originY = _c === void 0 ? "50%" : _c, _d = _a.originZ, originZ = _d === void 0 ? 0 : _d;
	return originX + " " + originY + " " + originZ;
}
//#endregion
//#region node_modules/svelte-motion/src/render/dom/utils/is-css-variable.js
/** 
based on framer-motion@4.0.3,
Copyright (c) 2018 Framer B.V.
*/
/**
* Returns true if the provided key is a CSS variable
*/
function isCSSVariable$1(key) {
	return key.startsWith("--");
}
//#endregion
//#region node_modules/svelte-motion/src/render/dom/value-types/get-as-type.js
/** 
based on framer-motion@4.0.3,
Copyright (c) 2018 Framer B.V.
*/
/**
* Provided a value and a ValueType, returns the value as that value type.
*/
var getValueAsType = function(value, type) {
	return type && typeof value === "number" ? type.transform(value) : value;
};
//#endregion
//#region node_modules/svelte-motion/src/render/html/utils/build-styles.js
/** 
based on framer-motion@4.0.3,
Copyright (c) 2018 Framer B.V.
*/
function buildHTMLStyles(state, latestValues, projection, layoutState, options, transformTemplate, buildProjectionTransform, buildProjectionTransformOrigin) {
	var _a;
	var style = state.style, vars = state.vars, transform = state.transform, transformKeys = state.transformKeys, transformOrigin = state.transformOrigin;
	transformKeys.length = 0;
	var hasTransform = false;
	var hasTransformOrigin = false;
	var transformIsNone = true;
	/**
	* Loop over all our latest animated values and decide whether to handle them
	* as a style or CSS variable.
	*
	* Transforms and transform origins are kept seperately for further processing.
	*/
	for (var key in latestValues) {
		var value = latestValues[key];
		/**
		* If this is a CSS variable we don't do any further processing.
		*/
		if (isCSSVariable$1(key)) {
			vars[key] = value;
			continue;
		}
		var valueType = numberValueTypes[key];
		var valueAsType = getValueAsType(value, valueType);
		if (isTransformProp(key)) {
			hasTransform = true;
			transform[key] = valueAsType;
			transformKeys.push(key);
			if (!transformIsNone) continue;
			if (value !== ((_a = valueType.default) !== null && _a !== void 0 ? _a : 0)) transformIsNone = false;
		} else if (isTransformOriginProp(key)) {
			transformOrigin[key] = valueAsType;
			hasTransformOrigin = true;
		} else if (layoutState && projection && layoutState.isHydrated && valueScaleCorrection[key]) {
			var correctedValue = valueScaleCorrection[key].process(value, layoutState, projection);
			/**
			* Scale-correctable values can define a number of other values to break
			* down into. For instance borderRadius needs applying to borderBottomLeftRadius etc
			*/
			var applyTo = valueScaleCorrection[key].applyTo;
			if (applyTo) {
				var num = applyTo.length;
				for (var i = 0; i < num; i++) style[applyTo[i]] = correctedValue;
			} else style[key] = correctedValue;
		} else style[key] = valueAsType;
	}
	if (layoutState && projection && buildProjectionTransform && buildProjectionTransformOrigin) {
		style.transform = buildProjectionTransform(layoutState.deltaFinal, layoutState.treeScale, hasTransform ? transform : void 0);
		if (transformTemplate) style.transform = transformTemplate(transform, style.transform);
		style.transformOrigin = buildProjectionTransformOrigin(layoutState);
	} else {
		if (hasTransform) style.transform = buildTransform(state, options, transformIsNone, transformTemplate);
		if (hasTransformOrigin) style.transformOrigin = buildTransformOrigin(transformOrigin);
	}
}
//#endregion
//#region node_modules/svelte-motion/src/render/html/UseInitialMotionValues.svelte
function UseInitialMotionValues($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let styles;
		let visualState = $$props["visualState"];
		let isStatic = $$props["isStatic"];
		let props = $$props["props"];
		const memo = () => {
			let state = createHtmlRenderState();
			buildHTMLStyles(state, visualState, void 0, void 0, { enableHardwareAcceleration: !isStatic }, props.transformTemplate);
			const { vars, style } = state;
			return {
				...vars,
				...style
			};
		};
		$: styles = memo(visualState);
		$$renderer.push(`<!--[-->`);
		slot($$renderer, $$props, "default", { styles }, null);
		$$renderer.push(`<!--]-->`);
		bind_props($$props, {
			visualState,
			isStatic,
			props
		});
	});
}
//#endregion
//#region node_modules/svelte-motion/src/render/html/UseStyle.svelte
function copyRawValuesOnly(target, source, props) {
	for (const key in source) if (!isMotionValue(source[key]) && !isForcedMotionValue(key, props)) target[key] = source[key];
}
function UseStyle($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let styleProp;
		let visualState = $$props["visualState"];
		let props = $$props["props"];
		let isStatic = $$props["isStatic"];
		let style = {};
		/**
		* Copy non-Motion Values straight into style
		*/
		const cRVO = copyRawValuesOnly;
		const toStyle = (s1) => {
			Object.assign(style, s1);
			if (props.transformValues) style = props.transformValues(style);
			return style;
		};
		$: styleProp = props.style || {};
		$: cRVO(style, styleProp, props);
		UseInitialMotionValues($$renderer, {
			props,
			visualState,
			isStatic,
			children: invalid_default_snippet,
			$$slots: { default: ($$renderer, { styles: s1 }) => {
				$$renderer.push(`<!--[-->`);
				slot($$renderer, $$props, "default", { styles: toStyle(s1, props, style) }, null);
				$$renderer.push(`<!--]-->`);
			} }
		});
		bind_props($$props, {
			visualState,
			props,
			isStatic
		});
	});
}
//#endregion
//#region node_modules/svelte-motion/src/render/html/UseHTMLProps.svelte
function UseHTMLProps($$renderer, $$props) {
	let props = $$props["props"];
	let visualState = $$props["visualState"];
	let isStatic = $$props["isStatic"];
	const getHTMLProps = (style, props) => {
		let htmlProps = {};
		if (Boolean(props.drag)) {
			htmlProps.draggable = false;
			style.userSelect = style.WebkitUserSelect = style.WebkitTouchCallout = "none";
			style.touchAction = props.drag === true ? "none" : `pan-${props.drag === "x" ? "y" : "x"}`;
		}
		htmlProps.style = style;
		return htmlProps;
	};
	UseStyle($$renderer, {
		visualState,
		props,
		isStatic,
		children: invalid_default_snippet,
		$$slots: { default: ($$renderer, { styles }) => {
			$$renderer.push(`<!--[-->`);
			slot($$renderer, $$props, "default", { visualProps: getHTMLProps(styles, props) }, null);
			$$renderer.push(`<!--]-->`);
		} }
	});
	bind_props($$props, {
		props,
		visualState,
		isStatic
	});
}
//#endregion
//#region node_modules/svelte-motion/src/render/svg/utils/transform-origin.js
function calcOrigin(origin, offset, size) {
	return typeof origin === "string" ? origin : px.transform(offset + size * origin);
}
/**
* The SVG transform origin defaults are different to CSS and is less intuitive,
* so we use the measured dimensions of the SVG to reconcile these.
*/
function calcSVGTransformOrigin(dimensions, originX, originY) {
	var pxOriginX = calcOrigin(originX, dimensions.x, dimensions.width);
	var pxOriginY = calcOrigin(originY, dimensions.y, dimensions.height);
	return pxOriginX + " " + pxOriginY;
}
//#endregion
//#region node_modules/svelte-motion/src/render/svg/utils/path.js
var progressToPixels = function(progress, length) {
	return px.transform(progress * length);
};
var dashKeys = {
	offset: "stroke-dashoffset",
	array: "stroke-dasharray"
};
var camelKeys = {
	offset: "strokeDashoffset",
	array: "strokeDasharray"
};
/**
* Build SVG path properties. Uses the path's measured length to convert
* our custom pathLength, pathSpacing and pathOffset into stroke-dashoffset
* and stroke-dasharray attributes.
*
* This function is mutative to reduce per-frame GC.
*/
function buildSVGPath(attrs, totalLength, length, spacing, offset, useDashCase) {
	if (spacing === void 0) spacing = 1;
	if (offset === void 0) offset = 0;
	if (useDashCase === void 0) useDashCase = true;
	var keys = useDashCase ? dashKeys : camelKeys;
	attrs[keys.offset] = progressToPixels(-offset, totalLength);
	var pathLength = progressToPixels(length, totalLength);
	var pathSpacing = progressToPixels(spacing, totalLength);
	attrs[keys.array] = pathLength + " " + pathSpacing;
}
//#endregion
//#region node_modules/svelte-motion/src/render/svg/utils/build-attrs.js
/** 
based on framer-motion@4.0.3,
Copyright (c) 2018 Framer B.V.
*/
/**
* Build SVG visual attrbutes, like cx and style.transform
*/
function buildSVGAttrs(state, _a, projection, layoutState, options, transformTemplate, buildProjectionTransform, buildProjectionTransformOrigin) {
	var attrX = _a.attrX, attrY = _a.attrY, originX = _a.originX, originY = _a.originY, pathLength = _a.pathLength, _b = _a.pathSpacing, pathSpacing = _b === void 0 ? 1 : _b, _c = _a.pathOffset, pathOffset = _c === void 0 ? 0 : _c;
	buildHTMLStyles(state, __rest(_a, [
		"attrX",
		"attrY",
		"originX",
		"originY",
		"pathLength",
		"pathSpacing",
		"pathOffset"
	]), projection, layoutState, options, transformTemplate, buildProjectionTransform, buildProjectionTransformOrigin);
	state.attrs = state.style;
	state.style = {};
	var attrs = state.attrs, style = state.style, dimensions = state.dimensions, totalPathLength = state.totalPathLength;
	/**
	* However, we apply transforms as CSS transforms. So if we detect a transform we take it from attrs
	* and copy it into style.
	*/
	if (attrs.transform) {
		if (dimensions) style.transform = attrs.transform;
		delete attrs.transform;
	}
	if (dimensions && (originX !== void 0 || originY !== void 0 || style.transform)) style.transformOrigin = calcSVGTransformOrigin(dimensions, originX !== void 0 ? originX : .5, originY !== void 0 ? originY : .5);
	if (attrX !== void 0) attrs.x = attrX;
	if (attrY !== void 0) attrs.y = attrY;
	if (totalPathLength !== void 0 && pathLength !== void 0) buildSVGPath(attrs, totalPathLength, pathLength, pathSpacing, pathOffset, false);
}
//#endregion
//#region node_modules/svelte-motion/src/render/svg/UseSVGProps.svelte
function UseSVGProps($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let visualProps;
		let visualState = $$props["visualState"];
		let props = $$props["props"];
		let memo = () => {
			const state = createSvgRenderState();
			buildSVGAttrs(state, visualState, void 0, void 0, { enableHardwareAcceleration: false }, props.transformTemplate);
			return {
				...state.attrs,
				style: { ...state.style }
			};
		};
		$: visualProps = memo(visualState);
		$: if (props.style) {
			const rawStyles = {};
			copyRawValuesOnly(rawStyles, props.style, props);
			visualProps.style = {
				...rawStyles,
				...visualProps.style
			};
		}
		$$renderer.push(`<!--[-->`);
		slot($$renderer, $$props, "default", { visualProps }, null);
		$$renderer.push(`<!--]-->`);
		bind_props($$props, {
			visualState,
			props
		});
	});
}
//#endregion
//#region node_modules/svelte-motion/src/render/dom/utils/filter-props.js
/** 
based on framer-motion@4.0.3,
Copyright (c) 2018 Framer B.V.
*/
var shouldForward = function(key) {
	return !isValidMotionProp(key);
};
/**
* Emotion and Styled Components both allow users to pass through arbitrary props to their components
* to dynamically generate CSS. They both use the `@emotion/is-prop-valid` package to determine which
* of these should be passed to the underlying DOM node.
*
* However, when styling a Motion component `styled(MotionDiv)`, both packages pass through *all* props
* as it's seen as an arbitrary component rather than a DOM node. Motion only allows arbitrary props
* passed through the `custom` prop so it doesn't *need* the payload or computational overhead of
* `@emotion/is-prop-valid`, however to fix this problem we need to use it.
*
* By making it an optionalDependency we can offer this functionality only in the situations where it's
* actually required.
*/
try {
	var emotionIsPropValid_1 = __require("@emotion/is-prop-valid").default;
	shouldForward = function(key) {
		if (key.startsWith("on")) return !isValidMotionProp(key);
		else return emotionIsPropValid_1(key);
	};
} catch (_a) {}
function filterProps(props, isDom, forwardMotionProps) {
	var filteredProps = {};
	for (var key in props) if (shouldForward(key) || forwardMotionProps === true && isValidMotionProp(key) || !isDom && !isValidMotionProp(key)) filteredProps[key] = props[key];
	return filteredProps;
}
//#endregion
//#region node_modules/svelte-motion/src/render/dom/UseRender.svelte
function UseRender($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let filteredProps;
		let props = $$props["props"];
		let visualState = $$props["visualState"];
		let Component = $$props["Component"];
		let forwardMotionProps = fallback($$props["forwardMotionProps"], false);
		let isStatic = $$props["isStatic"];
		let ref = $$props["ref"];
		let targetEl = fallback($$props["targetEl"], void 0);
		const motion = (node) => {
			ref(node);
		};
		$: filteredProps = filterProps(props, typeof Component === "string", forwardMotionProps);
		$: if (targetEl) motion(targetEl);
		if (Component === "SVG" ? UseSVGProps : UseHTMLProps) {
			$$renderer.push("<!--[-->");
			(Component === "SVG" ? UseSVGProps : UseHTMLProps)($$renderer, {
				visualState,
				isStatic,
				props,
				children: invalid_default_snippet,
				$$slots: { default: ($$renderer, { visualProps }) => {
					$$renderer.push(`<!--[-->`);
					slot($$renderer, $$props, "default", {
						motion,
						props: {
							...filteredProps,
							...visualProps
						}
					}, null);
					$$renderer.push(`<!--]-->`);
				} }
			});
			$$renderer.push("<!--]-->");
		} else {
			$$renderer.push("<!--[!-->");
			$$renderer.push("<!--]-->");
		}
		bind_props($$props, {
			props,
			visualState,
			Component,
			forwardMotionProps,
			isStatic,
			ref,
			targetEl
		});
	});
}
//#endregion
//#region node_modules/svelte-motion/src/render/dom/projection/measure.js
/** 
based on framer-motion@4.0.3,
Copyright (c) 2018 Framer B.V.
*/
/**
* Measure and return the element bounding box.
*
* We convert the box into an AxisBox2D to make it easier to work with each axis
* individually and programmatically.
*
* This function optionally accepts a transformPagePoint function which allows us to compensate
* for, for instance, measuring the element within a scaled plane like a Framer devivce preview component.
*/
function getBoundingBox(element, transformPagePoint) {
	return convertBoundingBoxToAxisBox(transformBoundingBox(element.getBoundingClientRect(), transformPagePoint));
}
//#endregion
//#region node_modules/svelte-motion/src/render/dom/utils/css-variables-conversion.js
/** 
based on framer-motion@4.0.3,
Copyright (c) 2018 Framer B.V.
*/
function isCSSVariable(value) {
	return typeof value === "string" && value.startsWith("var(--");
}
/**
* Parse Framer's special CSS variable format into a CSS token and a fallback.
*
* ```
* `var(--foo, #fff)` => [`--foo`, '#fff']
* ```
*
* @param current
*/
var cssVariableRegex = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
function parseCSSVariable(current) {
	var match = cssVariableRegex.exec(current);
	if (!match) return [,];
	var _a = __read(match, 3);
	return [_a[1], _a[2]];
}
function getVariableValue(current, element, depth) {
	if (depth === void 0) depth = 1;
	var _a = __read(parseCSSVariable(current), 2), token = _a[0], fallback = _a[1];
	if (!token) return;
	var resolved = window.getComputedStyle(element).getPropertyValue(token);
	if (resolved) return resolved.trim();
	else if (isCSSVariable(fallback)) return getVariableValue(fallback, element, depth + 1);
	else return fallback;
}
/**
* Resolve CSS variables from
*
* @internal
*/
function resolveCSSVariables(visualElement, _a, transitionEnd) {
	var _b;
	var target = __rest(_a, []);
	var element = visualElement.getInstance();
	if (!(element instanceof HTMLElement)) return {
		target,
		transitionEnd
	};
	if (transitionEnd) transitionEnd = Object.assign({}, transitionEnd);
	visualElement.forEachValue(function(value) {
		var current = value.get();
		if (!isCSSVariable(current)) return;
		var resolved = getVariableValue(current, element);
		if (resolved) value.set(resolved);
	});
	for (var key in target) {
		var current = target[key];
		if (!isCSSVariable(current)) continue;
		var resolved = getVariableValue(current, element);
		if (!resolved) continue;
		target[key] = resolved;
		if (transitionEnd) (_b = transitionEnd[key]) !== null && _b !== void 0 || (transitionEnd[key] = current);
	}
	return {
		target,
		transitionEnd
	};
}
//#endregion
//#region node_modules/svelte-motion/src/render/dom/utils/unit-conversion.js
var positionalKeys = new Set([
	"width",
	"height",
	"top",
	"left",
	"right",
	"bottom",
	"x",
	"y"
]);
var isPositionalKey = function(key) {
	return positionalKeys.has(key);
};
var hasPositionalKey = function(target) {
	return Object.keys(target).some(isPositionalKey);
};
var setAndResetVelocity = function(value, to) {
	value.set(to, false);
	value.set(to);
};
var isNumOrPxType = function(v) {
	return v === number || v === px;
};
var BoundingBoxDimension;
(function(BoundingBoxDimension) {
	BoundingBoxDimension["width"] = "width";
	BoundingBoxDimension["height"] = "height";
	BoundingBoxDimension["left"] = "left";
	BoundingBoxDimension["right"] = "right";
	BoundingBoxDimension["top"] = "top";
	BoundingBoxDimension["bottom"] = "bottom";
})(BoundingBoxDimension || (BoundingBoxDimension = {}));
var getPosFromMatrix = function(matrix, pos) {
	return parseFloat(matrix.split(", ")[pos]);
};
var getTranslateFromMatrix = function(pos2, pos3) {
	return function(_bbox, _a) {
		var transform = _a.transform;
		if (transform === "none" || !transform) return 0;
		var matrix3d = transform.match(/^matrix3d\((.+)\)$/);
		if (matrix3d) return getPosFromMatrix(matrix3d[1], pos3);
		else {
			var matrix = transform.match(/^matrix\((.+)\)$/);
			if (matrix) return getPosFromMatrix(matrix[1], pos2);
			else return 0;
		}
	};
};
var transformKeys = new Set([
	"x",
	"y",
	"z"
]);
var nonTranslationalTransformKeys = transformProps.filter(function(key) {
	return !transformKeys.has(key);
});
function removeNonTranslationalTransform(visualElement) {
	var removedTransforms = [];
	nonTranslationalTransformKeys.forEach(function(key) {
		var value = visualElement.getValue(key);
		if (value !== void 0) {
			removedTransforms.push([key, value.get()]);
			value.set(key.startsWith("scale") ? 1 : 0);
		}
	});
	if (removedTransforms.length) visualElement.syncRender();
	return removedTransforms;
}
var positionalValues = {
	width: function(_a) {
		var x = _a.x;
		return x.max - x.min;
	},
	height: function(_a) {
		var y = _a.y;
		return y.max - y.min;
	},
	top: function(_bbox, _a) {
		var top = _a.top;
		return parseFloat(top);
	},
	left: function(_bbox, _a) {
		var left = _a.left;
		return parseFloat(left);
	},
	bottom: function(_a, _b) {
		var y = _a.y;
		var top = _b.top;
		return parseFloat(top) + (y.max - y.min);
	},
	right: function(_a, _b) {
		var x = _a.x;
		var left = _b.left;
		return parseFloat(left) + (x.max - x.min);
	},
	x: getTranslateFromMatrix(4, 13),
	y: getTranslateFromMatrix(5, 14)
};
var convertChangedValueTypes = function(target, visualElement, changedKeys) {
	var originBbox = visualElement.measureViewportBox();
	var element = visualElement.getInstance();
	var elementComputedStyle = getComputedStyle(element);
	var display = elementComputedStyle.display;
	var originComputedStyle = {
		top: elementComputedStyle.top,
		left: elementComputedStyle.left,
		bottom: elementComputedStyle.bottom,
		right: elementComputedStyle.right,
		transform: elementComputedStyle.transform
	};
	if (display === "none") visualElement.setStaticValue("display", target.display || "block");
	visualElement.syncRender();
	var targetBbox = visualElement.measureViewportBox();
	changedKeys.forEach(function(key) {
		setAndResetVelocity(visualElement.getValue(key), positionalValues[key](originBbox, originComputedStyle));
		target[key] = positionalValues[key](targetBbox, elementComputedStyle);
	});
	return target;
};
var checkAndConvertChangedValueTypes = function(visualElement, target, origin, transitionEnd) {
	if (origin === void 0) origin = {};
	if (transitionEnd === void 0) transitionEnd = {};
	target = Object.assign({}, target);
	transitionEnd = Object.assign({}, transitionEnd);
	var targetPositionalKeys = Object.keys(target).filter(isPositionalKey);
	var removedTransformValues = [];
	var hasAttemptedToRemoveTransformValues = false;
	var changedValueTypeKeys = [];
	targetPositionalKeys.forEach(function(key) {
		var value = visualElement.getValue(key);
		if (!visualElement.hasValue(key)) return;
		var from = origin[key];
		var to = target[key];
		var fromType = findDimensionValueType(from);
		var toType;
		if (isKeyframesTarget(to)) {
			var numKeyframes = to.length;
			for (var i = to[0] === null ? 1 : 0; i < numKeyframes; i++) if (!toType) toType = findDimensionValueType(to[i]);
		} else toType = findDimensionValueType(to);
		if (fromType !== toType) if (isNumOrPxType(fromType) && isNumOrPxType(toType)) {
			var current = value.get();
			if (typeof current === "string") value.set(parseFloat(current));
			if (typeof to === "string") target[key] = parseFloat(to);
			else if (Array.isArray(to) && toType === px) target[key] = to.map(parseFloat);
		} else if ((fromType === null || fromType === void 0 ? void 0 : fromType.transform) && (toType === null || toType === void 0 ? void 0 : toType.transform) && (from === 0 || to === 0)) if (from === 0) value.set(toType.transform(from));
		else target[key] = fromType.transform(to);
		else {
			if (!hasAttemptedToRemoveTransformValues) {
				removedTransformValues = removeNonTranslationalTransform(visualElement);
				hasAttemptedToRemoveTransformValues = true;
			}
			changedValueTypeKeys.push(key);
			transitionEnd[key] = transitionEnd[key] !== void 0 ? transitionEnd[key] : target[key];
			setAndResetVelocity(value, to);
		}
	});
	if (changedValueTypeKeys.length) {
		var convertedTarget = convertChangedValueTypes(target, visualElement, changedValueTypeKeys);
		if (removedTransformValues.length) removedTransformValues.forEach(function(_a) {
			var _b = __read(_a, 2), key = _b[0], value = _b[1];
			visualElement.getValue(key).set(value);
		});
		visualElement.syncRender();
		return {
			target: convertedTarget,
			transitionEnd
		};
	} else return {
		target,
		transitionEnd
	};
};
/**
* Convert value types for x/y/width/height/top/left/bottom/right
*
* Allows animation between `'auto'` -> `'100%'` or `0` -> `'calc(50% - 10vw)'`
*
* @internal
*/
function unitConversion(visualElement, target, origin, transitionEnd) {
	return hasPositionalKey(target) ? checkAndConvertChangedValueTypes(visualElement, target, origin, transitionEnd) : {
		target,
		transitionEnd
	};
}
//#endregion
//#region node_modules/svelte-motion/src/render/dom/utils/parse-dom-variant.js
/** 
based on framer-motion@4.0.3,
Copyright (c) 2018 Framer B.V.
*/
/**
* Parse a DOM variant to make it animatable. This involves resolving CSS variables
* and ensuring animations like "20%" => "calc(50vw)" are performed in pixels.
*/
var parseDomVariant = function(visualElement, target, origin, transitionEnd) {
	var resolved = resolveCSSVariables(visualElement, target, transitionEnd);
	target = resolved.target;
	transitionEnd = resolved.transitionEnd;
	return unitConversion(visualElement, target, origin, transitionEnd);
};
//#endregion
//#region node_modules/svelte-motion/src/render/html/utils/scrape-motion-values.js
/** 
based on framer-motion@4.0.3,
Copyright (c) 2018 Framer B.V.
*/
function scrapeMotionValuesFromProps$1(props) {
	var style = props.style;
	var newValues = {};
	for (var key in style) if (isMotionValue(style[key]) || isForcedMotionValue(key, props)) newValues[key] = style[key];
	return newValues;
}
//#endregion
//#region node_modules/svelte-motion/src/render/html/utils/render.js
/** 
based on framer-motion@4.0.3,
Copyright (c) 2018 Framer B.V.
*/
function renderHTML(element, _a) {
	var style = _a.style, vars = _a.vars;
	Object.assign(element.style, style);
	for (var key in vars) element.style.setProperty(key, vars[key]);
}
//#endregion
//#region node_modules/svelte-motion/src/render/html/visual-element.js
/** 
based on framer-motion@4.1.15,
Copyright (c) 2018 Framer B.V.
*/
function getComputedStyle$1(element) {
	return window.getComputedStyle(element);
}
var htmlConfig = {
	treeType: "dom",
	readValueFromInstance: function(domElement, key) {
		if (isTransformProp(key)) {
			var defaultType = getDefaultValueType(key);
			return defaultType ? defaultType.default || 0 : 0;
		} else {
			var computedStyle = getComputedStyle$1(domElement);
			return (isCSSVariable$1(key) ? computedStyle.getPropertyValue(key) : computedStyle[key]) || 0;
		}
	},
	sortNodePosition: function(a, b) {
		/**
		* compareDocumentPosition returns a bitmask, by using the bitwise &
		* we're returning true if 2 in that bitmask is set to true. 2 is set
		* to true if b preceeds a.
		*/
		return a.compareDocumentPosition(b) & 2 ? 1 : -1;
	},
	getBaseTarget: function(props, key) {
		var _a;
		return (_a = props.style) === null || _a === void 0 ? void 0 : _a[key];
	},
	measureViewportBox: function(element, _a) {
		var transformPagePoint = _a.transformPagePoint;
		return getBoundingBox(element, transformPagePoint);
	},
	resetTransform: function(element, domElement, props) {
		var transformTemplate = props.transformTemplate;
		domElement.style.transform = transformTemplate ? transformTemplate({}, "") : "none";
		element.scheduleRender();
	},
	restoreTransform: function(instance, mutableState) {
		instance.style.transform = mutableState.style.transform;
	},
	removeValueFromRenderState: function(key, _a) {
		var vars = _a.vars, style = _a.style;
		delete vars[key];
		delete style[key];
	},
	makeTargetAnimatable: function(element, _a, _b, isMounted) {
		var transformValues = _b.transformValues;
		if (isMounted === void 0) isMounted = true;
		var transition = _a.transition, transitionEnd = _a.transitionEnd, target = __rest(_a, ["transition", "transitionEnd"]);
		var origin = getOrigin(target, transition || {}, element);
		/**
		* If Framer has provided a function to convert `Color` etc value types, convert them
		*/
		if (transformValues) {
			if (transitionEnd) transitionEnd = transformValues(transitionEnd);
			if (target) target = transformValues(target);
			if (origin) origin = transformValues(origin);
		}
		if (isMounted) {
			checkTargetForNewValues(element, target, origin);
			var parsed = parseDomVariant(element, target, origin, transitionEnd);
			transitionEnd = parsed.transitionEnd;
			target = parsed.target;
		}
		return Object.assign({
			transition,
			transitionEnd
		}, target);
	},
	scrapeMotionValuesFromProps: scrapeMotionValuesFromProps$1,
	build: function(element, renderState, latestValues, projection, layoutState, options, props) {
		if (element.isVisible !== void 0) renderState.style.visibility = element.isVisible ? "visible" : "hidden";
		var isProjectionTranform = projection.isEnabled && layoutState.isHydrated;
		buildHTMLStyles(renderState, latestValues, projection, layoutState, options, props.transformTemplate, isProjectionTranform ? buildLayoutProjectionTransform : void 0, isProjectionTranform ? buildLayoutProjectionTransformOrigin : void 0);
	},
	render: renderHTML
};
var htmlVisualElement = visualElement(htmlConfig);
//#endregion
//#region node_modules/svelte-motion/src/render/svg/utils/scrape-motion-values.js
/** 
based on framer-motion@4.0.3,
Copyright (c) 2018 Framer B.V.
*/
function scrapeMotionValuesFromProps(props) {
	var newValues = scrapeMotionValuesFromProps$1(props);
	for (var key in props) if (isMotionValue(props[key])) {
		var targetKey = key === "x" || key === "y" ? "attr" + key.toUpperCase() : key;
		newValues[targetKey] = props[key];
	}
	return newValues;
}
//#endregion
//#region node_modules/svelte-motion/src/render/dom/utils/camel-to-dash.js
/** 
based on framer-motion@4.0.3,
Copyright (c) 2018 Framer B.V.
*/
var CAMEL_CASE_PATTERN = /([a-z])([A-Z])/g;
var REPLACE_TEMPLATE = "$1-$2";
/**
* Convert camelCase to dash-case properties.
*/
var camelToDash = function(str) {
	return str.replace(CAMEL_CASE_PATTERN, REPLACE_TEMPLATE).toLowerCase();
};
//#endregion
//#region node_modules/svelte-motion/src/render/svg/utils/camel-case-attrs.js
/** 
based on framer-motion@4.0.3,
Copyright (c) 2018 Framer B.V.
*/
/**
* A set of attribute names that are always read/written as camel case.
*/
var camelCaseAttributes = new Set([
	"baseFrequency",
	"diffuseConstant",
	"kernelMatrix",
	"kernelUnitLength",
	"keySplines",
	"keyTimes",
	"limitingConeAngle",
	"markerHeight",
	"markerWidth",
	"numOctaves",
	"targetX",
	"targetY",
	"surfaceScale",
	"specularConstant",
	"specularExponent",
	"stdDeviation",
	"tableValues",
	"viewBox"
]);
//#endregion
//#region node_modules/svelte-motion/src/render/svg/utils/render.js
/** 
based on framer-motion@4.0.3,
Copyright (c) 2018 Framer B.V.
*/
function renderSVG(element, renderState) {
	renderHTML(element, renderState);
	for (var key in renderState.attrs) element.setAttribute(!camelCaseAttributes.has(key) ? camelToDash(key) : key, renderState.attrs[key]);
}
//#endregion
//#region node_modules/svelte-motion/src/render/svg/visual-element.js
/** 
based on framer-motion@4.0.3,
Copyright (c) 2018 Framer B.V.
*/
var svgVisualElement = visualElement(Object.assign(Object.assign({}, htmlConfig), {
	getBaseTarget: function(props, key) {
		return props[key];
	},
	readValueFromInstance: function(domElement, key) {
		var _a;
		if (isTransformProp(key)) return ((_a = getDefaultValueType(key)) === null || _a === void 0 ? void 0 : _a.default) || 0;
		key = !camelCaseAttributes.has(key) ? camelToDash(key) : key;
		return domElement.getAttribute(key);
	},
	scrapeMotionValuesFromProps,
	build: function(_element, renderState, latestValues, projection, layoutState, options, props) {
		var isProjectionTranform = projection.isEnabled && layoutState.isHydrated;
		buildSVGAttrs(renderState, latestValues, projection, layoutState, options, props.transformTemplate, isProjectionTranform ? buildLayoutProjectionTransform : void 0, isProjectionTranform ? buildLayoutProjectionTransformOrigin : void 0);
	},
	render: renderSVG
}));
//#endregion
//#region node_modules/svelte-motion/src/render/dom/create-visual-element.js
/** 
based on framer-motion@4.0.3,
Copyright (c) 2018 Framer B.V.
*/
var createDomVisualElement = function(Component, options) {
	return Component === "SVG" ? svgVisualElement(options, { enableHardwareAcceleration: false }) : htmlVisualElement(options, { enableHardwareAcceleration: true });
};
//#endregion
//#region node_modules/svelte-motion/src/render/svg/config-motion.js
/** 
based on framer-motion@4.0.3,
Copyright (c) 2018 Framer B.V.
*/
var svgMotionConfig = {
	scrapeMotionValuesFromProps,
	createRenderState: createSvgRenderState,
	onMount: function(props, instance, _a) {
		var renderState = _a.renderState, latestValues = _a.latestValues;
		try {
			renderState.dimensions = typeof instance.getBBox === "function" ? instance.getBBox() : instance.getBoundingClientRect();
		} catch (e) {
			renderState.dimensions = {
				x: 0,
				y: 0,
				width: 0,
				height: 0
			};
		}
		if (isPath(instance)) renderState.totalPathLength = instance.getTotalLength();
		buildSVGAttrs(renderState, latestValues, void 0, void 0, { enableHardwareAcceleration: false }, props.transformTemplate);
		renderSVG(instance, renderState);
	}
};
function isPath(element) {
	return element.tagName === "path";
}
//#endregion
//#region node_modules/svelte-motion/src/render/html/config-motion.js
/** 
based on framer-motion@4.0.3,
Copyright (c) 2018 Framer B.V.
*/
var htmlMotionConfig = {
	scrapeMotionValuesFromProps: scrapeMotionValuesFromProps$1,
	createRenderState: createHtmlRenderState
};
//#endregion
//#region node_modules/svelte-motion/src/context/MotionContext/utils.js
/** 
based on framer-motion@4.0.3,
Copyright (c) 2018 Framer B.V.
*/
function getCurrentTreeVariants(props, context) {
	if (checkIfControllingVariants(props)) {
		var initial = props.initial, animate = props.animate;
		return {
			initial: initial === false || isVariantLabel(initial) ? initial : void 0,
			animate: isVariantLabel(animate) ? animate : void 0
		};
	}
	return props.inherit !== false ? context || {} : {};
}
//#endregion
//#region node_modules/svelte-motion/src/context/MotionContext/UseCreateMotionContext.svelte
function UseCreateMotionContext($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		var $$store_subs;
		let props = $$props["props"];
		let isStatic = $$props["isStatic"];
		let isCustom = $$props["isCustom"];
		let mc = getContext(MotionContext) || MotionContext(isCustom);
		let tmp = getCurrentTreeVariants(props, get(mc)), initial = tmp.initial, animate = tmp.animate;
		const variantLabelsAsDependency = (prop) => {
			return Array.isArray(prop) ? prop.join(" ") : prop;
		};
		const memo = () => {
			return {
				initial,
				animate
			};
		};
		/**
		* Only break memoisation in static mode
		*/
		let value = memo();
		$: ({initial, animate} = getCurrentTreeVariants(props, store_get($$store_subs ??= {}, "$mc", mc)));
		$: if (isStatic) value = memo(variantLabelsAsDependency(initial), variantLabelsAsDependency(animate));
		$$renderer.push(`<!--[-->`);
		slot($$renderer, $$props, "default", { value }, null);
		$$renderer.push(`<!--]-->`);
		if ($$store_subs) unsubscribe_stores($$store_subs);
		bind_props($$props, {
			props,
			isStatic,
			isCustom
		});
	});
}
//#endregion
//#region node_modules/svelte-motion/src/value/utils/resolve-motion-value.js
/** 
based on framer-motion@4.0.3,
Copyright (c) 2018 Framer B.V.
*/
/**
* If the provided value is a MotionValue, this returns the actual value, otherwise just the value itself
*
* TODO: Remove and move to library
*
* @internal
*/
function resolveMotionValue(value) {
	var unwrappedValue = isMotionValue(value) ? value.get() : value;
	return isCustomValue(unwrappedValue) ? unwrappedValue.toValue() : unwrappedValue;
}
//#endregion
//#region node_modules/svelte-motion/src/motion/utils/UseVisualState.svelte
var makeState = ({ scrapeMotionValuesFromProps, createRenderState, onMount }, props, context, presenceContext) => {
	const state = {
		latestValues: makeLatestValues(props, context, presenceContext, scrapeMotionValuesFromProps),
		renderState: createRenderState()
	};
	if (onMount) state.mount = (instance) => onMount(props, instance, state);
	return state;
};
function makeLatestValues(props, context, presenceContext, scrapeMotionValues) {
	const values = {};
	const blockInitialAnimation = presenceContext?.initial === false;
	const motionValues = scrapeMotionValues(props);
	for (const key in motionValues) values[key] = resolveMotionValue(motionValues[key]);
	let { initial, animate } = props;
	const isControllingVariants = checkIfControllingVariants(props);
	const isVariantNode = checkIfVariantNode(props);
	if (context && isVariantNode && !isControllingVariants && props.inherit !== false) {
		initial !== null && initial !== void 0 || (initial = context.initial);
		animate !== null && animate !== void 0 || (animate = context.animate);
	}
	const variantToSet = blockInitialAnimation || initial === false ? animate : initial;
	if (variantToSet && typeof variantToSet !== "boolean" && !isAnimationControls(variantToSet)) (Array.isArray(variantToSet) ? variantToSet : [variantToSet]).forEach((definition) => {
		const resolved = resolveVariantFromProps(props, definition);
		if (!resolved) return;
		const { transitionEnd, transition, ...target } = resolved;
		for (const key in target) values[key] = target[key];
		for (const key in transitionEnd) values[key] = transitionEnd[key];
	});
	return values;
}
function UseVisualState($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		var $$store_subs;
		let config = $$props["config"];
		let props = $$props["props"];
		let isStatic = $$props["isStatic"];
		let isCustom = $$props["isCustom"];
		const context = getContext(MotionContext) || MotionContext(isCustom);
		const presenceContext = getContext(PresenceContext) || PresenceContext(isCustom);
		let state = makeState(config, props, get(context), get(presenceContext));
		const ms = makeState;
		$: if (isStatic) state = ms(config, props, store_get($$store_subs ??= {}, "$context", context), store_get($$store_subs ??= {}, "$presenceContext", presenceContext));
		$$renderer.push(`<!--[-->`);
		slot($$renderer, $$props, "default", { state }, null);
		$$renderer.push(`<!--]-->`);
		if ($$store_subs) unsubscribe_stores($$store_subs);
		bind_props($$props, {
			config,
			props,
			isStatic,
			isCustom
		});
	});
}
//#endregion
//#region node_modules/svelte-motion/src/utils/is-ref-object.js
/** 
based on framer-motion@4.0.3,
Copyright (c) 2018 Framer B.V.
*/
function isRefObject(ref) {
	return typeof ref === "object" && Object.prototype.hasOwnProperty.call(ref, "current");
}
//#endregion
//#region node_modules/svelte-motion/src/motion/utils/use-motion-ref.js
/** 
based on framer-motion@4.0.3,
Copyright (c) 2018 Framer B.V.
*/
/**
* Creates a ref function that, when called, hydrates the provided
* external ref and VisualElement.
*/
function useMotionRef(visualState, visualElement, externalRef) {
	return function(instance) {
		var _a;
		instance && ((_a = visualState.mount) === null || _a === void 0 || _a.call(visualState, instance));
		if (visualElement) instance ? visualElement.mount(instance) : visualElement.unmount();
		if (externalRef) {
			if (typeof externalRef === "function") externalRef(instance);
			else if (isRefObject(externalRef)) externalRef.current = instance;
		}
	};
}
//#endregion
//#region node_modules/svelte-motion/src/motion/Motion.svelte
function Motion($$renderer, $$props) {
	const $$restProps = rest_props(sanitize_props($$props), [
		"isSVG",
		"forwardMotionProps",
		"externalRef",
		"targetEl"
	]);
	$$renderer.component(($$renderer) => {
		var $$store_subs;
		let motionProps, isStatic;
		let isSVG = fallback($$props["isSVG"], false);
		let forwardMotionProps = fallback($$props["forwardMotionProps"], false);
		let externalRef = fallback($$props["externalRef"], void 0);
		let targetEl = fallback($$props["targetEl"], void 0);
		const isCustom = targetEl;
		let Component = isSVG ? "SVG" : "DOM";
		let createVisualElement = createDomVisualElement;
		let visualStateConfig = isSVG ? svgMotionConfig : htmlMotionConfig;
		const a = getContext(MotionConfigContext) || MotionConfigContext(isCustom);
		const setContext = (c, v) => {
			c.visualElement = v;
			return v;
		};
		$: motionProps = $$restProps;
		$: ({isStatic} = store_get($$store_subs ??= {}, "$a", a) || {});
		ScaleCorrectionProvider($$renderer, {
			isCustom,
			children: ($$renderer) => {
				UseCreateMotionContext($$renderer, {
					props: motionProps,
					isStatic,
					isCustom,
					children: invalid_default_snippet,
					$$slots: { default: ($$renderer, { value: context }) => {
						UseVisualState($$renderer, {
							config: visualStateConfig,
							props: motionProps,
							isStatic,
							isCustom,
							children: invalid_default_snippet,
							$$slots: { default: ($$renderer, { state: visualState }) => {
								UseVisualElement($$renderer, {
									Component,
									visualState,
									createVisualElement,
									props: motionProps,
									isCustom,
									children: invalid_default_snippet,
									$$slots: { default: ($$renderer, { visualElement }) => {
										UseFeatures($$renderer, {
											visualElement: setContext(context, visualElement),
											props: motionProps,
											children: invalid_default_snippet,
											$$slots: { default: ($$renderer, { features: _features }) => {
												MotionContextProvider($$renderer, {
													value: context,
													isCustom,
													children: ($$renderer) => {
														UseRender($$renderer, {
															Component,
															props: motionProps,
															ref: useMotionRef(visualState, context.visualElement, externalRef),
															visualState,
															isStatic,
															forwardMotionProps,
															children: invalid_default_snippet,
															$$slots: { default: ($$renderer, { motion, props: renderProps }) => {
																$$renderer.push(`<!--[-->`);
																slot($$renderer, $$props, "default", {
																	motion,
																	props: renderProps
																}, null);
																$$renderer.push(`<!--]-->`);
															} }
														});
													},
													$$slots: { default: true }
												});
												$$renderer.push(`<!----> `);
												$$renderer.push("<!--[-1-->");
												$$renderer.push(`<!--]-->`);
											} }
										});
									} }
								});
							} }
						});
					} }
				});
			},
			$$slots: { default: true }
		});
		if ($$store_subs) unsubscribe_stores($$store_subs);
		bind_props($$props, {
			isSVG,
			forwardMotionProps,
			externalRef,
			targetEl
		});
	});
}
//#endregion
//#region node_modules/svelte-motion/src/events/UseDomEvent.svelte
function addDomEvent(target, eventName, handler, options) {
	target.addEventListener(eventName, handler, options);
	return function() {
		return target.removeEventListener(eventName, handler, options);
	};
}
function UseDomEvent($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let ref = $$props["ref"];
		let eventName = $$props["eventName"];
		let handler = fallback($$props["handler"], void 0);
		let options = fallback($$props["options"], void 0);
		let cleanup = () => {};
		const effect = () => {
			cleanup();
			if (!ref) return () => {};
			const element = ref.current;
			if (handler && element) return addDomEvent(element, eventName, handler, options);
			return () => {};
		};
		onDestroy(cleanup);
		$: cleanup = effect(ref, eventName, handler, options);
		$$renderer.push(`<!--[-->`);
		slot($$renderer, $$props, "default", {}, null);
		$$renderer.push(`<!--]-->`);
		bind_props($$props, {
			ref,
			eventName,
			handler,
			options
		});
	});
}
//#endregion
//#region node_modules/svelte-motion/src/gestures/utils/event-type.js
/** 
based on framer-motion@4.0.3,
Copyright (c) 2018 Framer B.V.
*/
function isMouseEvent(event) {
	if (typeof PointerEvent !== "undefined" && event instanceof PointerEvent) return !!(event.pointerType === "mouse");
	return event instanceof MouseEvent;
}
function isTouchEvent(event) {
	return !!event.touches;
}
//#endregion
//#region node_modules/svelte-motion/src/events/event-info.js
/** 
based on framer-motion@4.0.3,
Copyright (c) 2018 Framer B.V.
*/
/**
* Filters out events not attached to the primary pointer (currently left mouse button)
* @param eventHandler
*/
function filterPrimaryPointer(eventHandler) {
	return function(event) {
		var isMouseEvent = event instanceof MouseEvent;
		if (!isMouseEvent || isMouseEvent && event.button === 0) eventHandler(event);
	};
}
var defaultPagePoint = {
	pageX: 0,
	pageY: 0
};
function pointFromTouch(e, pointType) {
	if (pointType === void 0) pointType = "page";
	var point = e.touches[0] || e.changedTouches[0] || defaultPagePoint;
	return {
		x: point[pointType + "X"],
		y: point[pointType + "Y"]
	};
}
function pointFromMouse(point, pointType) {
	if (pointType === void 0) pointType = "page";
	return {
		x: point[pointType + "X"],
		y: point[pointType + "Y"]
	};
}
function extractEventInfo(event, pointType) {
	if (pointType === void 0) pointType = "page";
	return { point: isTouchEvent(event) ? pointFromTouch(event, pointType) : pointFromMouse(event, pointType) };
}
function getViewportPointFromEvent(event) {
	return extractEventInfo(event, "client");
}
var wrapHandler = function(handler, shouldFilterPrimaryPointer) {
	if (shouldFilterPrimaryPointer === void 0) shouldFilterPrimaryPointer = false;
	var listener = function(event) {
		return handler(event, extractEventInfo(event));
	};
	return shouldFilterPrimaryPointer ? filterPrimaryPointer(listener) : listener;
};
//#endregion
//#region node_modules/svelte-motion/src/utils/is-browser.js
/** 
based on framer-motion@4.0.3,
Copyright (c) 2018 Framer B.V.
*/
var isBrowser = typeof window !== "undefined";
//#endregion
//#region node_modules/svelte-motion/src/events/utils.js
/** 
based on framer-motion@4.0.3,
Copyright (c) 2018 Framer B.V.
*/
var supportsPointerEvents = function() {
	return isBrowser && window.onpointerdown === null;
};
var supportsTouchEvents = function() {
	return isBrowser && window.ontouchstart === null;
};
var supportsMouseEvents = function() {
	return isBrowser && window.onmousedown === null;
};
//#endregion
//#region node_modules/svelte-motion/src/events/UsePointerEvent.svelte
var mouseEventNames = {
	pointerdown: "mousedown",
	pointermove: "mousemove",
	pointerup: "mouseup",
	pointercancel: "mousecancel",
	pointerover: "mouseover",
	pointerout: "mouseout",
	pointerenter: "mouseenter",
	pointerleave: "mouseleave"
};
var touchEventNames = {
	pointerdown: "touchstart",
	pointermove: "touchmove",
	pointerup: "touchend",
	pointercancel: "touchcancel"
};
function getPointerEventName(name) {
	if (supportsPointerEvents()) return name;
	else if (supportsTouchEvents()) return touchEventNames[name];
	else if (supportsMouseEvents()) return mouseEventNames[name];
	return name;
}
function addPointerEvent(target, eventName, handler, options) {
	return addDomEvent(target, getPointerEventName(eventName), wrapHandler(handler, eventName === "pointerdown"), options);
}
function UsePointerEvent($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let ref = $$props["ref"];
		let eventName = $$props["eventName"];
		let handler = fallback($$props["handler"], void 0);
		let options = fallback($$props["options"], void 0);
		UseDomEvent($$renderer, {
			ref,
			eventName: getPointerEventName(eventName),
			handler: handler && wrapHandler(handler, eventName === "pointerdown"),
			options,
			children: ($$renderer) => {
				$$renderer.push(`<!--[-->`);
				slot($$renderer, $$props, "default", {}, null);
				$$renderer.push(`<!--]-->`);
			},
			$$slots: { default: true }
		});
		bind_props($$props, {
			ref,
			eventName,
			handler,
			options
		});
	});
}
//#endregion
//#region node_modules/svelte-motion/src/gestures/PanSession.js
/**
* @internal
*/
var PanSession = function() {
	function PanSession(event, handlers, _a) {
		var _this = this;
		var transformPagePoint = (_a === void 0 ? {} : _a).transformPagePoint;
		/**
		* @internal
		*/
		this.startEvent = null;
		/**
		* @internal
		*/
		this.lastMoveEvent = null;
		/**
		* @internal
		*/
		this.lastMoveEventInfo = null;
		/**
		* @internal
		*/
		this.handlers = {};
		this.updatePoint = function() {
			if (!(_this.lastMoveEvent && _this.lastMoveEventInfo)) return;
			var info = getPanInfo(_this.lastMoveEventInfo, _this.history);
			var isPanStarted = _this.startEvent !== null;
			var isDistancePastThreshold = distance(info.offset, {
				x: 0,
				y: 0
			}) >= 3;
			if (!isPanStarted && !isDistancePastThreshold) return;
			var point = info.point;
			var timestamp = getFrameData().timestamp;
			_this.history.push(Object.assign(Object.assign({}, point), { timestamp }));
			var _a = _this.handlers, onStart = _a.onStart, onMove = _a.onMove;
			if (!isPanStarted) {
				onStart && onStart(_this.lastMoveEvent, info);
				_this.startEvent = _this.lastMoveEvent;
			}
			onMove && onMove(_this.lastMoveEvent, info);
		};
		this.handlePointerMove = function(event, info) {
			_this.lastMoveEvent = event;
			_this.lastMoveEventInfo = transformPoint(info, _this.transformPagePoint);
			if (isMouseEvent(event) && event.buttons === 0) {
				_this.handlePointerUp(event, info);
				return;
			}
			sync.update(_this.updatePoint, true);
		};
		this.handlePointerUp = function(event, info) {
			_this.end();
			var _a = _this.handlers, onEnd = _a.onEnd, onSessionEnd = _a.onSessionEnd;
			var panInfo = getPanInfo(transformPoint(info, _this.transformPagePoint), _this.history);
			if (_this.startEvent && onEnd) onEnd(event, panInfo);
			onSessionEnd && onSessionEnd(event, panInfo);
		};
		if (isTouchEvent(event) && event.touches.length > 1) return;
		this.handlers = handlers;
		this.transformPagePoint = transformPagePoint;
		var initialInfo = transformPoint(extractEventInfo(event), this.transformPagePoint);
		var point = initialInfo.point;
		var timestamp = getFrameData().timestamp;
		this.history = [Object.assign(Object.assign({}, point), { timestamp })];
		var onSessionStart = handlers.onSessionStart;
		onSessionStart && onSessionStart(event, getPanInfo(initialInfo, this.history));
		this.removeListeners = pipe(addPointerEvent(window, "pointermove", this.handlePointerMove), addPointerEvent(window, "pointerup", this.handlePointerUp), addPointerEvent(window, "pointercancel", this.handlePointerUp));
	}
	PanSession.prototype.updateHandlers = function(handlers) {
		this.handlers = handlers;
	};
	PanSession.prototype.end = function() {
		this.removeListeners && this.removeListeners();
		cancelSync.update(this.updatePoint);
	};
	return PanSession;
}();
function transformPoint(info, transformPagePoint) {
	return transformPagePoint ? { point: transformPagePoint(info.point) } : info;
}
function subtractPoint(a, b) {
	return {
		x: a.x - b.x,
		y: a.y - b.y
	};
}
function getPanInfo(_a, history) {
	var point = _a.point;
	return {
		point,
		delta: subtractPoint(point, lastDevicePoint(history)),
		offset: subtractPoint(point, startDevicePoint(history)),
		velocity: getVelocity(history, .1)
	};
}
function startDevicePoint(history) {
	return history[0];
}
function lastDevicePoint(history) {
	return history[history.length - 1];
}
function getVelocity(history, timeDelta) {
	if (history.length < 2) return {
		x: 0,
		y: 0
	};
	var i = history.length - 1;
	var timestampedPoint = null;
	var lastPoint = lastDevicePoint(history);
	while (i >= 0) {
		timestampedPoint = history[i];
		if (lastPoint.timestamp - timestampedPoint.timestamp > secondsToMilliseconds(timeDelta)) break;
		i--;
	}
	if (!timestampedPoint) return {
		x: 0,
		y: 0
	};
	var time = (lastPoint.timestamp - timestampedPoint.timestamp) / 1e3;
	if (time === 0) return {
		x: 0,
		y: 0
	};
	var currentVelocity = {
		x: (lastPoint.x - timestampedPoint.x) / time,
		y: (lastPoint.y - timestampedPoint.y) / time
	};
	if (currentVelocity.x === Infinity) currentVelocity.x = 0;
	if (currentVelocity.y === Infinity) currentVelocity.y = 0;
	return currentVelocity;
}
//#endregion
//#region node_modules/svelte-motion/src/gestures/UsePanGesture.svelte
function UsePanGesture($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		var $$store_subs;
		let hasPanEvents;
		let props = $$props["props"];
		let visualElement = $$props["visualElement"];
		let isCustom = $$props["isCustom"];
		let tmp = props, onPan = tmp.onPan, onPanStart = tmp.onPanStart, onPanEnd = tmp.onPanEnd, onPanSessionStart = tmp.onPanSessionStart;
		let panSession = null;
		const mcc = getContext(MotionConfigContext) || MotionConfigContext(isCustom);
		let transformPagePoint = get(mcc).transformPagePoint;
		let handlers = {
			onSessionStart: onPanSessionStart,
			onStart: onPanStart,
			onMove: onPan,
			onEnd: (event, info) => {
				panSession = null;
				onPanEnd && onPanEnd(event, info);
			}
		};
		function onPointerDown(event) {
			panSession = new PanSession(event, handlers, { transformPagePoint });
		}
		onDestroy(() => panSession && panSession.end());
		$: ({onPan, onPanStart, onPanEnd, onPanSessionStart} = props);
		$: hasPanEvents = onPan || onPanStart || onPanEnd || onPanSessionStart;
		$: ({transformPagePoint} = store_get($$store_subs ??= {}, "$mcc", mcc));
		$: handlers = {
			onSessionStart: onPanSessionStart,
			onStart: onPanStart,
			onMove: onPan,
			onEnd: (event, info) => {
				panSession = null;
				onPanEnd && onPanEnd(event, info);
			}
		};
		UsePointerEvent($$renderer, {
			ref: visualElement,
			eventName: "pointerdown",
			handler: hasPanEvents && onPointerDown,
			children: ($$renderer) => {
				$$renderer.push(`<!--[-->`);
				slot($$renderer, $$props, "default", {}, null);
				$$renderer.push(`<!--]-->`);
			},
			$$slots: { default: true }
		});
		if ($$store_subs) unsubscribe_stores($$store_subs);
		bind_props($$props, {
			props,
			visualElement,
			isCustom
		});
	});
}
//#endregion
//#region node_modules/svelte-motion/src/gestures/utils/is-node-or-child.js
/** 
based on framer-motion@4.0.3,
Copyright (c) 2018 Framer B.V.
*/
/**
* Recursively traverse up the tree to check whether the provided child node
* is the parent or a descendant of it.
*
* @param parent - Element to find
* @param child - Element to test against parent
*/
var isNodeOrChild = function(parent, child) {
	if (!child) return false;
	else if (parent === child) return true;
	else return isNodeOrChild(parent, child.parentElement);
};
//#endregion
//#region node_modules/svelte-motion/src/gestures/drag/utils/lock.js
/** 
based on framer-motion@4.1.17,
Copyright (c) 2018 Framer B.V.
*/
function createLock(name) {
	var lock = null;
	return function() {
		var openLock = function() {
			lock = null;
		};
		if (lock === null) {
			lock = name;
			return openLock;
		}
		return false;
	};
}
var globalHorizontalLock = createLock("dragHorizontal");
var globalVerticalLock = createLock("dragVertical");
function getGlobalLock(drag) {
	var lock = false;
	if (drag === "y") lock = globalVerticalLock();
	else if (drag === "x") lock = globalHorizontalLock();
	else {
		var openHorizontal_1 = globalHorizontalLock();
		var openVertical_1 = globalVerticalLock();
		if (openHorizontal_1 && openVertical_1) lock = function() {
			openHorizontal_1();
			openVertical_1();
		};
		else {
			if (openHorizontal_1) openHorizontal_1();
			if (openVertical_1) openVertical_1();
		}
	}
	return lock;
}
function isDragActive() {
	var openGestureLock = getGlobalLock(true);
	if (!openGestureLock) return true;
	openGestureLock();
	return false;
}
//#endregion
//#region node_modules/svelte-motion/src/gestures/UseTapGesture.svelte
function UseTapGesture($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let onTap, onTapStart, onTapCancel, whileTap, hasPressListeners;
		let props = $$props["props"];
		let visualElement = $$props["visualElement"];
		let isPressing = false;
		let cancelPointerEndListeners = null;
		function removePointerEndListener() {
			cancelPointerEndListeners?.();
			cancelPointerEndListeners = null;
		}
		function checkPointerEnd() {
			removePointerEndListener();
			isPressing = false;
			visualElement.animationState?.setActive(AnimationType.Tap, false);
			return !isDragActive();
		}
		function onPointerUp(event, info) {
			if (!checkPointerEnd()) return;
			/**
			* We only count this as a tap gesture if the event.target is the same
			* as, or a child of, this component's element
			*/
			!isNodeOrChild(visualElement.getInstance(), event.target) ? onTapCancel?.(event, info) : onTap?.(event, info);
		}
		function onPointerCancel(event, info) {
			if (!checkPointerEnd()) return;
			onTapCancel?.(event, info);
		}
		function onPointerDown(event, info) {
			if (isPressing) return;
			removePointerEndListener();
			isPressing = true;
			cancelPointerEndListeners = pipe(addPointerEvent(window, "pointerup", onPointerUp), addPointerEvent(window, "pointercancel", onPointerCancel));
			onTapStart?.(event, info);
			visualElement.animationState?.setActive(AnimationType.Tap, true);
		}
		onDestroy(removePointerEndListener);
		$: ({onTap, onTapStart, onTapCancel, whileTap} = props);
		$: hasPressListeners = onTap || onTapStart || onTapCancel || whileTap;
		UsePointerEvent($$renderer, {
			ref: visualElement,
			eventName: "pointerdown",
			handler: hasPressListeners ? onPointerDown : void 0,
			children: ($$renderer) => {
				$$renderer.push(`<!--[-->`);
				slot($$renderer, $$props, "default", {}, null);
				$$renderer.push(`<!--]-->`);
			},
			$$slots: { default: true }
		});
		bind_props($$props, {
			props,
			visualElement
		});
	});
}
//#endregion
//#region node_modules/svelte-motion/src/gestures/UseHoverGesture.svelte
function createHoverEvent(visualElement, isActive, callback) {
	return (event, info) => {
		if (!isMouseEvent(event) || isDragActive()) return;
		callback?.(event, info);
		visualElement.animationState?.setActive(AnimationType.Hover, isActive);
	};
}
function UseHoverGesture($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let props = $$props["props"];
		let visualElement = $$props["visualElement"];
		let tmp = props, onHoverStart = tmp.onHoverStart, onHoverEnd = tmp.onHoverEnd, whileHover = tmp.whileHover;
		$: ({onHoverStart, onHoverEnd, whileHover} = props);
		UsePointerEvent($$renderer, {
			ref: visualElement,
			eventName: "pointerenter",
			handler: onHoverStart || whileHover ? createHoverEvent(visualElement, true, onHoverStart) : void 0
		});
		$$renderer.push(`<!----> `);
		UsePointerEvent($$renderer, {
			ref: visualElement,
			eventName: "pointerleave",
			handler: onHoverEnd || whileHover ? createHoverEvent(visualElement, false, onHoverEnd) : void 0
		});
		$$renderer.push(`<!----> <!--[-->`);
		slot($$renderer, $$props, "default", {}, null);
		$$renderer.push(`<!--]-->`);
		bind_props($$props, {
			props,
			visualElement
		});
	});
}
//#endregion
//#region node_modules/svelte-motion/src/gestures/UseFocusGesture.svelte
function UseFocusGesture($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let whileFocus;
		let props = $$props["props"];
		let visualElement = $$props["visualElement"];
		const onFocus = () => {
			visualElement.animationState?.setActive(AnimationType.Focus, true);
		};
		const onBlur = () => {
			visualElement.animationState?.setActive(AnimationType.Focus, false);
		};
		$: ({whileFocus} = props);
		UseDomEvent($$renderer, {
			ref: visualElement,
			eventName: "focus",
			handler: whileFocus ? onFocus : void 0,
			children: ($$renderer) => {
				UseDomEvent($$renderer, {
					ref: visualElement,
					eventName: "blur",
					handler: whileFocus ? onBlur : void 0,
					children: ($$renderer) => {
						$$renderer.push(`<!--[-->`);
						slot($$renderer, $$props, "default", {}, null);
						$$renderer.push(`<!--]-->`);
					},
					$$slots: { default: true }
				});
			},
			$$slots: { default: true }
		});
		bind_props($$props, {
			props,
			visualElement
		});
	});
}
//#endregion
//#region node_modules/svelte-motion/src/render/dom/create-motion-class.js
/** 
based on framer-motion@4.0.3,
Copyright (c) 2018 Framer B.V.
*/
var createMotionClass = (features) => {
	features && loadFeatures(features);
	return Motion;
};
//#endregion
//#region node_modules/svelte-motion/src/motion/features/gestures.js
/** 
based on framer-motion@4.0.3,
Copyright (c) 2018 Framer B.V.
*/
/**
* @public
*/
var gestureAnimations = {
	tap: UseTapGesture,
	focus: UseFocusGesture,
	hover: UseHoverGesture
};
//#endregion
//#region node_modules/svelte-motion/src/gestures/drag/utils/constraints.js
/**
* Apply constraints to a point. These constraints are both physical along an
* axis, and an elastic factor that determines how much to constrain the point
* by if it does lie outside the defined parameters.
*/
function applyConstraints(point, _a, elastic) {
	var min = _a.min, max = _a.max;
	if (min !== void 0 && point < min) point = elastic ? mix(min, point, elastic.min) : Math.max(point, min);
	else if (max !== void 0 && point > max) point = elastic ? mix(max, point, elastic.max) : Math.min(point, max);
	return point;
}
/**
* Calculates a min projection point based on a pointer, pointer progress
* within the drag target, and constraints.
*
* For instance if an element was 100px width, we were dragging from 0.25
* along this axis, the pointer is at 200px, and there were no constraints,
* we would calculate a min projection point of 175px.
*/
function calcConstrainedMinPoint(point, length, progress, constraints, elastic) {
	var min = point - length * progress;
	return constraints ? applyConstraints(min, constraints, elastic) : min;
}
/**
* Calculate constraints in terms of the viewport when defined relatively to the
* measured axis. This is measured from the nearest edge, so a max constraint of 200
* on an axis with a max value of 300 would return a constraint of 500 - axis length
*/
function calcRelativeAxisConstraints(axis, min, max) {
	return {
		min: min !== void 0 ? axis.min + min : void 0,
		max: max !== void 0 ? axis.max + max - (axis.max - axis.min) : void 0
	};
}
/**
* Calculate constraints in terms of the viewport when
* defined relatively to the measured bounding box.
*/
function calcRelativeConstraints(layoutBox, _a) {
	var top = _a.top, left = _a.left, bottom = _a.bottom, right = _a.right;
	return {
		x: calcRelativeAxisConstraints(layoutBox.x, left, right),
		y: calcRelativeAxisConstraints(layoutBox.y, top, bottom)
	};
}
/**
* Calculate viewport constraints when defined as another viewport-relative axis
*/
function calcViewportAxisConstraints(layoutAxis, constraintsAxis) {
	var _a;
	var min = constraintsAxis.min - layoutAxis.min;
	var max = constraintsAxis.max - layoutAxis.max;
	if (constraintsAxis.max - constraintsAxis.min < layoutAxis.max - layoutAxis.min) _a = __read([max, min], 2), min = _a[0], max = _a[1];
	return {
		min: layoutAxis.min + min,
		max: layoutAxis.min + max
	};
}
/**
* Calculate viewport constraints when defined as another viewport-relative box
*/
function calcViewportConstraints(layoutBox, constraintsBox) {
	return {
		x: calcViewportAxisConstraints(layoutBox.x, constraintsBox.x),
		y: calcViewportAxisConstraints(layoutBox.y, constraintsBox.y)
	};
}
/**
* Calculate the an axis position based on two axes and a progress value.
*/
function calcPositionFromProgress(axis, constraints, progress) {
	var axisLength = axis.max - axis.min;
	var min = mix(constraints.min, constraints.max - axisLength, progress);
	return {
		min,
		max: min + axisLength
	};
}
/**
* Rebase the calculated viewport constraints relative to the layout.min point.
*/
function rebaseAxisConstraints(layout, constraints) {
	var relativeConstraints = {};
	if (constraints.min !== void 0) relativeConstraints.min = constraints.min - layout.min;
	if (constraints.max !== void 0) relativeConstraints.max = constraints.max - layout.min;
	return relativeConstraints;
}
var defaultElastic = .35;
/**
* Accepts a dragElastic prop and returns resolved elastic values for each axis.
*/
function resolveDragElastic(dragElastic) {
	if (dragElastic === false) dragElastic = 0;
	else if (dragElastic === true) dragElastic = defaultElastic;
	return {
		x: resolveAxisElastic(dragElastic, "left", "right"),
		y: resolveAxisElastic(dragElastic, "top", "bottom")
	};
}
function resolveAxisElastic(dragElastic, minLabel, maxLabel) {
	return {
		min: resolvePointElastic(dragElastic, minLabel),
		max: resolvePointElastic(dragElastic, maxLabel)
	};
}
function resolvePointElastic(dragElastic, label) {
	var _a;
	return typeof dragElastic === "number" ? dragElastic : (_a = dragElastic[label]) !== null && _a !== void 0 ? _a : 0;
}
//#endregion
//#region node_modules/svelte-motion/src/render/dom/projection/convert-to-relative.js
/** 
based on framer-motion@4.1.11,
Copyright (c) 2018 Framer B.V.
*/
/**
* Returns a boolean stating whether or not we converted the projection
* to relative projection.
*/
function convertToRelativeProjection(visualElement, isLayoutDrag) {
	if (isLayoutDrag === void 0) isLayoutDrag = true;
	var projectionParent = visualElement.getProjectionParent();
	if (!projectionParent) return false;
	var offset;
	if (isLayoutDrag) {
		offset = calcRelativeOffset(projectionParent.projection.target, visualElement.projection.target);
		removeBoxTransforms(offset, projectionParent.getLatestValues());
	} else offset = calcRelativeOffset(projectionParent.getLayoutState().layout, visualElement.getLayoutState().layout);
	eachAxis(function(axis) {
		return visualElement.setProjectionTargetAxis(axis, offset[axis].min, offset[axis].max, true);
	});
	return true;
}
//#endregion
//#region node_modules/svelte-motion/src/gestures/drag/VisualElementDragControls.js
var elementDragControls = /* @__PURE__ */ new WeakMap();
/**
*
*/
var lastPointerEvent;
var VisualElementDragControls = function() {
	function VisualElementDragControls(_a) {
		var visualElement = _a.visualElement;
		/**
		* Track whether we're currently dragging.
		*
		* @internal
		*/
		this.isDragging = false;
		/**
		* The current direction of drag, or `null` if both.
		*
		* @internal
		*/
		this.currentDirection = null;
		/**
		* The permitted boundaries of travel, in pixels.
		*
		* @internal
		*/
		this.constraints = false;
		/**
		* The per-axis resolved elastic values.
		*
		* @internal
		*/
		this.elastic = axisBox();
		/**
		* A reference to the host component's latest props.
		*
		* @internal
		*/
		this.props = {};
		/**
		* @internal
		*/
		this.hasMutatedConstraints = false;
		/**
		* Track the initial position of the cursor relative to the dragging element
		* when dragging starts as a value of 0-1 on each axis. We then use this to calculate
		* an ideal bounding box for the VisualElement renderer to project into every frame.
		*
		* @internal
		*/
		this.cursorProgress = {
			x: .5,
			y: .5
		};
		this.originPoint = {};
		this.openGlobalLock = null;
		/**
		* @internal
		*/
		this.panSession = null;
		this.visualElement = visualElement;
		this.visualElement.enableLayoutProjection();
		elementDragControls.set(visualElement, this);
	}
	/**
	* Instantiate a PanSession for the drag gesture
	*
	* @public
	*/
	VisualElementDragControls.prototype.start = function(originEvent, _a) {
		var _this = this;
		var _b = _a === void 0 ? {} : _a, _c = _b.snapToCursor, snapToCursor = _c === void 0 ? false : _c, cursorProgress = _b.cursorProgress;
		var onSessionStart = function(event) {
			var _a;
			_this.stopMotion();
			/**
			* Save the initial point. We'll use this to calculate the pointer's position rather
			* than the one we receive when the gesture actually starts. By then, the pointer will
			* have already moved, and the perception will be of the pointer "slipping" across the element
			*/
			var initialPoint = getViewportPointFromEvent(event).point;
			(_a = _this.cancelLayout) === null || _a === void 0 || _a.call(_this);
			_this.cancelLayout = batchLayout(function(read, write) {
				var ancestors = collectProjectingAncestors(_this.visualElement);
				var children = collectProjectingChildren(_this.visualElement);
				var tree = __spreadArray(__spreadArray([], __read(ancestors)), __read(children));
				var hasManuallySetCursorOrigin = false;
				/**
				* Apply a simple lock to the projection target. This ensures no animations
				* can run on the projection box while this lock is active.
				*/
				_this.isLayoutDrag() && _this.visualElement.lockProjectionTarget();
				write(function() {
					tree.forEach(function(element) {
						return element.resetTransform();
					});
				});
				read(function() {
					updateLayoutMeasurement(_this.visualElement);
					children.forEach(updateLayoutMeasurement);
				});
				write(function() {
					tree.forEach(function(element) {
						return element.restoreTransform();
					});
					if (snapToCursor) hasManuallySetCursorOrigin = _this.snapToCursor(initialPoint);
				});
				read(function() {
					if (!Boolean(_this.getAxisMotionValue("x") && !_this.isExternalDrag())) _this.visualElement.rebaseProjectionTarget(true, _this.visualElement.measureViewportBox(false));
					_this.visualElement.scheduleUpdateLayoutProjection();
					/**
					* When dragging starts, we want to find where the cursor is relative to the bounding box
					* of the element. Every frame, we calculate a new bounding box using this relative position
					* and let the visualElement renderer figure out how to reproject the element into this bounding
					* box.
					*
					* By doing it this way, rather than applying an x/y transform directly to the element,
					* we can ensure the component always visually sticks to the cursor as we'd expect, even
					* if the DOM element itself changes layout as a result of React updates the user might
					* make based on the drag position.
					*/
					var projection = _this.visualElement.projection;
					eachAxis(function(axis) {
						if (!hasManuallySetCursorOrigin) {
							var _a = projection.target[axis], min = _a.min, max = _a.max;
							_this.cursorProgress[axis] = cursorProgress ? cursorProgress[axis] : progress(min, max, initialPoint[axis]);
						}
						/**
						* If we have external drag MotionValues, record their origin point. On pointermove
						* we'll apply the pan gesture offset directly to this value.
						*/
						var axisValue = _this.getAxisMotionValue(axis);
						if (axisValue) _this.originPoint[axis] = axisValue.get();
					});
				});
				write(function() {
					flushSync.update();
					flushSync.preRender();
					flushSync.render();
					flushSync.postRender();
				});
				read(function() {
					return _this.resolveDragConstraints();
				});
			});
		};
		var onStart = function(event, info) {
			var _a, _b, _c;
			var _d = _this.props, drag = _d.drag, dragPropagation = _d.dragPropagation;
			if (drag && !dragPropagation) {
				if (_this.openGlobalLock) _this.openGlobalLock();
				_this.openGlobalLock = getGlobalLock(drag);
				if (!_this.openGlobalLock) return;
			}
			flushLayout();
			_this.isDragging = true;
			_this.currentDirection = null;
			(_b = (_a = _this.props).onDragStart) === null || _b === void 0 || _b.call(_a, event, info);
			(_c = _this.visualElement.animationState) === null || _c === void 0 || _c.setActive(AnimationType.Drag, true);
		};
		var onMove = function(event, info) {
			var _a, _b, _c, _d;
			var _e = _this.props, dragPropagation = _e.dragPropagation, dragDirectionLock = _e.dragDirectionLock;
			if (!dragPropagation && !_this.openGlobalLock) return;
			var offset = info.offset;
			if (dragDirectionLock && _this.currentDirection === null) {
				_this.currentDirection = getCurrentDirection(offset);
				if (_this.currentDirection !== null) (_b = (_a = _this.props).onDirectionLock) === null || _b === void 0 || _b.call(_a, _this.currentDirection);
				return;
			}
			_this.updateAxis("x", info.point, offset);
			_this.updateAxis("y", info.point, offset);
			(_d = (_c = _this.props).onDrag) === null || _d === void 0 || _d.call(_c, event, info);
			lastPointerEvent = event;
		};
		var onSessionEnd = function(event, info) {
			return _this.stop(event, info);
		};
		var transformPagePoint = this.props.transformPagePoint;
		this.panSession = new PanSession(originEvent, {
			onSessionStart,
			onStart,
			onMove,
			onSessionEnd
		}, { transformPagePoint });
	};
	VisualElementDragControls.prototype.resolveDragConstraints = function() {
		var _this = this;
		var _a = this.props, dragConstraints = _a.dragConstraints, dragElastic = _a.dragElastic;
		var layout = this.visualElement.getLayoutState().layoutCorrected;
		if (dragConstraints) this.constraints = isRefObject(dragConstraints) ? this.resolveRefConstraints(layout, dragConstraints) : calcRelativeConstraints(layout, dragConstraints);
		else this.constraints = false;
		this.elastic = resolveDragElastic(dragElastic);
		/**
		* If we're outputting to external MotionValues, we want to rebase the measured constraints
		* from viewport-relative to component-relative.
		*/
		if (this.constraints && !this.hasMutatedConstraints) eachAxis(function(axis) {
			if (_this.getAxisMotionValue(axis)) _this.constraints[axis] = rebaseAxisConstraints(layout[axis], _this.constraints[axis]);
		});
	};
	VisualElementDragControls.prototype.resolveRefConstraints = function(layoutBox, constraints) {
		var _a = this.props, onMeasureDragConstraints = _a.onMeasureDragConstraints, transformPagePoint = _a.transformPagePoint;
		var constraintsElement = constraints.current;
		invariant(constraintsElement !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
		this.constraintsBox = getBoundingBox(constraintsElement, transformPagePoint);
		var measuredConstraints = calcViewportConstraints(layoutBox, this.constraintsBox);
		/**
		* If there's an onMeasureDragConstraints listener we call it and
		* if different constraints are returned, set constraints to that
		*/
		if (onMeasureDragConstraints) {
			var userConstraints = onMeasureDragConstraints(convertAxisBoxToBoundingBox(measuredConstraints));
			this.hasMutatedConstraints = !!userConstraints;
			if (userConstraints) measuredConstraints = convertBoundingBoxToAxisBox(userConstraints);
		}
		return measuredConstraints;
	};
	VisualElementDragControls.prototype.cancelDrag = function() {
		var _a, _b;
		this.visualElement.unlockProjectionTarget();
		(_a = this.cancelLayout) === null || _a === void 0 || _a.call(this);
		this.isDragging = false;
		this.panSession && this.panSession.end();
		this.panSession = null;
		if (!this.props.dragPropagation && this.openGlobalLock) {
			this.openGlobalLock();
			this.openGlobalLock = null;
		}
		(_b = this.visualElement.animationState) === null || _b === void 0 || _b.setActive(AnimationType.Drag, false);
	};
	VisualElementDragControls.prototype.stop = function(event, info) {
		var _a, _b, _c;
		(_a = this.panSession) === null || _a === void 0 || _a.end();
		this.panSession = null;
		var isDragging = this.isDragging;
		this.cancelDrag();
		if (!isDragging) return;
		var velocity = info.velocity;
		this.animateDragEnd(velocity);
		(_c = (_b = this.props).onDragEnd) === null || _c === void 0 || _c.call(_b, event, info);
	};
	VisualElementDragControls.prototype.snapToCursor = function(point) {
		var _this = this;
		return eachAxis(function(axis) {
			var drag = _this.props.drag;
			if (!shouldDrag(axis, drag, _this.currentDirection)) return;
			var axisValue = _this.getAxisMotionValue(axis);
			if (axisValue) {
				var box = _this.visualElement.getLayoutState().layout;
				var length_1 = box[axis].max - box[axis].min;
				var center = box[axis].min + length_1 / 2;
				var offset = point[axis] - center;
				_this.originPoint[axis] = point[axis];
				axisValue.set(offset);
			} else {
				_this.cursorProgress[axis] = .5;
				return true;
			}
		}).includes(true);
	};
	/**
	* Update the specified axis with the latest pointer information.
	*/
	VisualElementDragControls.prototype.updateAxis = function(axis, point, offset) {
		var drag = this.props.drag;
		if (!shouldDrag(axis, drag, this.currentDirection)) return;
		return this.getAxisMotionValue(axis) ? this.updateAxisMotionValue(axis, offset) : this.updateVisualElementAxis(axis, point);
	};
	VisualElementDragControls.prototype.updateAxisMotionValue = function(axis, offset) {
		var axisValue = this.getAxisMotionValue(axis);
		if (!offset || !axisValue) return;
		var nextValue = this.originPoint[axis] + offset[axis];
		var update = this.constraints ? applyConstraints(nextValue, this.constraints[axis], this.elastic[axis]) : nextValue;
		axisValue.set(update);
	};
	VisualElementDragControls.prototype.updateVisualElementAxis = function(axis, point) {
		var _a;
		var axisLayout = this.visualElement.getLayoutState().layout[axis];
		var axisLength = axisLayout.max - axisLayout.min;
		var axisProgress = this.cursorProgress[axis];
		var min = calcConstrainedMinPoint(point[axis], axisLength, axisProgress, (_a = this.constraints) === null || _a === void 0 ? void 0 : _a[axis], this.elastic[axis]);
		this.visualElement.setProjectionTargetAxis(axis, min, min + axisLength);
	};
	VisualElementDragControls.prototype.setProps = function(_a) {
		var _b = _a.drag, drag = _b === void 0 ? false : _b, _c = _a.dragDirectionLock, dragDirectionLock = _c === void 0 ? false : _c, _d = _a.dragPropagation, dragPropagation = _d === void 0 ? false : _d, _e = _a.dragConstraints, dragConstraints = _e === void 0 ? false : _e, _f = _a.dragElastic, dragElastic = _f === void 0 ? defaultElastic : _f, _g = _a.dragMomentum, dragMomentum = _g === void 0 ? true : _g, remainingProps = __rest(_a, [
			"drag",
			"dragDirectionLock",
			"dragPropagation",
			"dragConstraints",
			"dragElastic",
			"dragMomentum"
		]);
		this.props = Object.assign({
			drag,
			dragDirectionLock,
			dragPropagation,
			dragConstraints,
			dragElastic,
			dragMomentum
		}, remainingProps);
	};
	/**
	* Drag works differently depending on which props are provided.
	*
	* - If _dragX and _dragY are provided, we output the gesture delta directly to those motion values.
	* - If the component will perform layout animations, we output the gesture to the component's
	*      visual bounding box
	* - Otherwise, we apply the delta to the x/y motion values.
	*/
	VisualElementDragControls.prototype.getAxisMotionValue = function(axis) {
		var _a = this.props, layout = _a.layout, layoutId = _a.layoutId;
		var dragKey = "_drag" + axis.toUpperCase();
		if (this.props[dragKey]) return this.props[dragKey];
		else if (!layout && layoutId === void 0) return this.visualElement.getValue(axis, 0);
	};
	VisualElementDragControls.prototype.isLayoutDrag = function() {
		return !this.getAxisMotionValue("x");
	};
	VisualElementDragControls.prototype.isExternalDrag = function() {
		var _a = this.props, _dragX = _a._dragX, _dragY = _a._dragY;
		return _dragX || _dragY;
	};
	VisualElementDragControls.prototype.animateDragEnd = function(velocity) {
		var _this = this;
		var _a = this.props, drag = _a.drag, dragMomentum = _a.dragMomentum, dragElastic = _a.dragElastic, dragTransition = _a.dragTransition;
		/**
		* Everything beyond the drag gesture should be performed with
		* relative projection so children stay in sync with their parent element.
		*/
		var isRelative = convertToRelativeProjection(this.visualElement, this.isLayoutDrag() && !this.isExternalDrag());
		/**
		* If we had previously resolved constraints relative to the viewport,
		* we need to also convert those to a relative coordinate space for the animation
		*/
		var constraints = this.constraints || {};
		if (isRelative && Object.keys(constraints).length && this.isLayoutDrag()) {
			var projectionParent = this.visualElement.getProjectionParent();
			if (projectionParent) {
				var relativeConstraints_1 = calcRelativeOffset(projectionParent.projection.targetFinal, constraints);
				eachAxis(function(axis) {
					var _a = relativeConstraints_1[axis], min = _a.min, max = _a.max;
					constraints[axis] = {
						min: isNaN(min) ? void 0 : min,
						max: isNaN(max) ? void 0 : max
					};
				});
			}
		}
		var momentumAnimations = eachAxis(function(axis) {
			var _a;
			if (!shouldDrag(axis, drag, _this.currentDirection)) return;
			var transition = (_a = constraints === null || constraints === void 0 ? void 0 : constraints[axis]) !== null && _a !== void 0 ? _a : {};
			/**
			* Overdamp the boundary spring if `dragElastic` is disabled. There's still a frame
			* of spring animations so we should look into adding a disable spring option to `inertia`.
			* We could do something here where we affect the `bounceStiffness` and `bounceDamping`
			* using the value of `dragElastic`.
			*/
			var bounceStiffness = dragElastic ? 200 : 1e6;
			var bounceDamping = dragElastic ? 40 : 1e7;
			var inertia = Object.assign(Object.assign({
				type: "inertia",
				velocity: dragMomentum ? velocity[axis] : 0,
				bounceStiffness,
				bounceDamping,
				timeConstant: 750,
				restDelta: 1,
				restSpeed: 10
			}, dragTransition), transition);
			return _this.getAxisMotionValue(axis) ? _this.startAxisValueAnimation(axis, inertia) : _this.visualElement.startLayoutAnimation(axis, inertia, isRelative);
		});
		return Promise.all(momentumAnimations).then(function() {
			var _a, _b;
			(_b = (_a = _this.props).onDragTransitionEnd) === null || _b === void 0 || _b.call(_a);
		});
	};
	VisualElementDragControls.prototype.stopMotion = function() {
		var _this = this;
		eachAxis(function(axis) {
			var axisValue = _this.getAxisMotionValue(axis);
			axisValue ? axisValue.stop() : _this.visualElement.stopLayoutAnimation();
		});
	};
	VisualElementDragControls.prototype.startAxisValueAnimation = function(axis, transition) {
		var axisValue = this.getAxisMotionValue(axis);
		if (!axisValue) return;
		var currentValue = axisValue.get();
		axisValue.set(currentValue);
		axisValue.set(currentValue);
		return startAnimation(axis, axisValue, 0, transition);
	};
	VisualElementDragControls.prototype.scalePoint = function() {
		var _this = this;
		var _a = this.props, drag = _a.drag, dragConstraints = _a.dragConstraints;
		if (!isRefObject(dragConstraints) || !this.constraintsBox) return;
		this.stopMotion();
		var boxProgress = {
			x: 0,
			y: 0
		};
		eachAxis(function(axis) {
			boxProgress[axis] = calcOrigin$1(_this.visualElement.projection.target[axis], _this.constraintsBox[axis]);
		});
		/**
		* For each axis, calculate the current progress of the layout axis within the constraints.
		* Then, using the latest layout and constraints measurements, reposition the new layout axis
		* proportionally within the constraints.
		*/
		this.updateConstraints(function() {
			eachAxis(function(axis) {
				if (!shouldDrag(axis, drag, null)) return;
				var _a = calcPositionFromProgress(_this.visualElement.projection.target[axis], _this.constraintsBox[axis], boxProgress[axis]), min = _a.min, max = _a.max;
				_this.visualElement.setProjectionTargetAxis(axis, min, max);
			});
		});
		/**
		* If any other draggable components are queuing the same tasks synchronously
		* this will wait until they've all been scheduled before flushing.
		*/
		setTimeout(flushLayout, 1);
	};
	VisualElementDragControls.prototype.updateConstraints = function(onReady) {
		var _this = this;
		this.cancelLayout = batchLayout(function(read, write) {
			var ancestors = collectProjectingAncestors(_this.visualElement);
			write(function() {
				return ancestors.forEach(function(element) {
					return element.resetTransform();
				});
			});
			read(function() {
				return updateLayoutMeasurement(_this.visualElement);
			});
			write(function() {
				return ancestors.forEach(function(element) {
					return element.restoreTransform();
				});
			});
			read(function() {
				_this.resolveDragConstraints();
			});
			if (onReady) write(onReady);
		});
	};
	VisualElementDragControls.prototype.mount = function(visualElement) {
		var _this = this;
		/**
		* Attach a pointerdown event listener on this DOM element to initiate drag tracking.
		*/
		var stopPointerListener = addPointerEvent(visualElement.getInstance(), "pointerdown", function(event) {
			var _a = _this.props, drag = _a.drag, _b = _a.dragListener;
			drag && (_b === void 0 || _b) && _this.start(event);
		});
		/**
		* Attach a window resize listener to scale the draggable target within its defined
		* constraints as the window resizes.
		*/
		var stopResizeListener = addDomEvent(window, "resize", function() {
			_this.scalePoint();
		});
		/**
		* Ensure drag constraints are resolved correctly relative to the dragging element
		* whenever its layout changes.
		*/
		var stopLayoutUpdateListener = visualElement.onLayoutUpdate(function() {
			if (_this.isDragging) _this.resolveDragConstraints();
		});
		/**
		* If the previous component with this same layoutId was dragging at the time
		* it was unmounted, we want to continue the same gesture on this component.
		*/
		var prevDragCursor = visualElement.prevDragCursor;
		if (prevDragCursor) this.start(lastPointerEvent, { cursorProgress: prevDragCursor });
		/**
		* Return a function that will teardown the drag gesture
		*/
		return function() {
			stopPointerListener === null || stopPointerListener === void 0 || stopPointerListener();
			stopResizeListener === null || stopResizeListener === void 0 || stopResizeListener();
			stopLayoutUpdateListener === null || stopLayoutUpdateListener === void 0 || stopLayoutUpdateListener();
			_this.cancelDrag();
		};
	};
	return VisualElementDragControls;
}();
function shouldDrag(direction, drag, currentDirection) {
	return (drag === true || drag === direction) && (currentDirection === null || currentDirection === direction);
}
/**
* Based on an x/y offset determine the current drag direction. If both axis' offsets are lower
* than the provided threshold, return `null`.
*
* @param offset - The x/y offset from origin.
* @param lockThreshold - (Optional) - the minimum absolute offset before we can determine a drag direction.
*/
function getCurrentDirection(offset, lockThreshold) {
	if (lockThreshold === void 0) lockThreshold = 10;
	var direction = null;
	if (Math.abs(offset.y) > lockThreshold) direction = "y";
	else if (Math.abs(offset.x) > lockThreshold) direction = "x";
	return direction;
}
//#endregion
//#region node_modules/svelte-motion/src/gestures/drag/UseDrag.svelte
function UseDrag($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		var $$store_subs;
		let visualElement = $$props["visualElement"];
		let props = $$props["props"];
		let isCustom = $$props["isCustom"];
		const mcc = getContext(MotionConfigContext) || MotionConfigContext(isCustom);
		let dragControls = new VisualElementDragControls({ visualElement });
		let cleanup;
		const dragEffect = () => {
			if (cleanup) cleanup();
			if (groupDragControls) cleanup = groupDragControls.subscribe(dragControls);
		};
		let groupDragControls = props.dragControls;
		let transformPagePoint = get(mcc).transformPagePoint;
		dragControls.setProps({
			...props,
			transformPagePoint
		});
		onDestroy(() => {
			if (cleanup) cleanup();
		});
		$: ({dragControls: groupDragControls} = props);
		$: ({transformPagePoint} = store_get($$store_subs ??= {}, "$mcc", mcc));
		$: dragControls.setProps({
			...props,
			transformPagePoint
		});
		$: dragEffect(dragControls);
		$$renderer.push(`<!--[-->`);
		slot($$renderer, $$props, "default", {}, null);
		$$renderer.push(`<!--]-->`);
		if ($$store_subs) unsubscribe_stores($$store_subs);
		bind_props($$props, {
			visualElement,
			props,
			isCustom
		});
	});
}
//#endregion
//#region node_modules/svelte-motion/src/motion/features/drag.js
/** 
based on framer-motion@4.0.3,
Copyright (c) 2018 Framer B.V.
*/
/**
* @public
*/
var drag = {
	pan: UsePanGesture,
	drag: UseDrag
};
//#endregion
//#region node_modules/svelte-motion/src/render/dom/projection/default-scale-correctors.js
function pixelsToPercent(pixels, axis) {
	return pixels / (axis.max - axis.min) * 100;
}
/**
* We always correct borderRadius as a percentage rather than pixels to reduce paints.
* For example, if you are projecting a box that is 100px wide with a 10px borderRadius
* into a box that is 200px wide with a 20px borderRadius, that is actually a 10%
* borderRadius in both states. If we animate between the two in pixels that will trigger
* a paint each time. If we animate between the two in percentage we'll avoid a paint.
*/
function correctBorderRadius(latest, _layoutState, _a) {
	var target = _a.target;
	/**
	* If latest is a string, if it's a percentage we can return immediately as it's
	* going to be stretched appropriately. Otherwise, if it's a pixel, convert it to a number.
	*/
	if (typeof latest === "string") if (px.test(latest)) latest = parseFloat(latest);
	else return latest;
	/**
	* If latest is a number, it's a pixel value. We use the current viewportBox to calculate that
	* pixel value as a percentage of each axis
	*/
	var x = pixelsToPercent(latest, target.x);
	var y = pixelsToPercent(latest, target.y);
	return x + "% " + y + "%";
}
Object.assign(Object.assign({}, { process: correctBorderRadius }), { applyTo: [
	"borderTopLeftRadius",
	"borderTopRightRadius",
	"borderBottomLeftRadius",
	"borderBottomRightRadius"
] });
function Animate($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let visualElement = $$props["visualElement"];
		let layout = fallback($$props["layout"], void 0);
		let safeToRemove = $$props["safeToRemove"];
		axisBox();
		axisBox();
		let stopAxisAnimation = {
			x: void 0,
			y: void 0
		};
		let unsubLayoutReady;
		onDestroy(() => {
			unsubLayoutReady();
			eachAxis((axis) => stopAxisAnimation[axis]?.());
		});
		bind_props($$props, {
			visualElement,
			layout,
			safeToRemove
		});
	});
}
//#endregion
//#region node_modules/svelte-motion/src/motion/features/layout/AnimateLayoutContextProvider.svelte
function AnimateLayoutContextProvider($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		var $$store_subs;
		let visualElement = $$props["visualElement"];
		let props = $$props["props"];
		let isCustom = $$props["isCustom"];
		let layout = props.layout;
		const presence = usePresence(isCustom);
		$: ({layout} = props);
		Animate($$renderer, {
			visualElement,
			layout,
			safeToRemove: store_get($$store_subs ??= {}, "$presence", presence)[1]
		});
		if ($$store_subs) unsubscribe_stores($$store_subs);
		bind_props($$props, {
			visualElement,
			props,
			isCustom
		});
	});
}
//#endregion
//#region node_modules/svelte-motion/src/motion/features/layout/Measure.svelte
function Measure($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let visualElement = $$props["visualElement"];
		let syncLayout = $$props["syncLayout"];
		let framerSyncLayout = $$props["framerSyncLayout"];
		let update = $$props["update"];
		const scaleCorrectionContext = getContext(ScaleCorrectionContext);
		const scaleCorrectionParentContext = getContext(ScaleCorrectionParentContext);
		/**
		* If this is a child of a SyncContext, notify it that it needs to re-render. It will then
		* handle the snapshotting.
		*
		* If it is stand-alone component, add it to the batcher.
		*/
		let updated = false;
		const updater = (nc = false) => {
			if (updated) return null;
			updated = true;
			get(scaleCorrectionContext).forEach((v) => {
				v.updater?.(true);
			});
			if (isSharedLayout(syncLayout)) syncLayout.syncUpdate();
			else {
				snapshotViewportBox(visualElement, nc);
				syncLayout.add(visualElement);
			}
			return null;
		};
		if (update === void 0);
		const afterU = (nc = false) => {
			updated = false;
			get(scaleCorrectionContext).forEach((v, i) => {
				v.afterU?.(true);
			});
			if (!isSharedLayout(syncLayout)) syncLayout.flush();
			/**
			* If this axis isn't animating as a result of this render we want to reset the targetBox
			* to the measured box
			*/
		};
		scaleCorrectionParentContext.update((v) => v.concat([{
			updater,
			afterU
		}]));
		$: update !== void 0 && updater(update);
		bind_props($$props, {
			visualElement,
			syncLayout,
			framerSyncLayout,
			update
		});
	});
}
//#endregion
//#region node_modules/svelte-motion/src/motion/features/layout/MeasureContextProvider.svelte
function MeasureContextProvider($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		var $$store_subs;
		let update;
		let visualElement = $$props["visualElement"];
		let props = $$props["props"];
		let isCustom = $$props["isCustom"];
		const syncLayout = getContext(SharedLayoutContext) || SharedLayoutContext(isCustom);
		const framerSyncLayout = getContext(FramerTreeLayoutContext) || FramerTreeLayoutContext(isCustom);
		$: ({update} = props);
		Measure($$renderer, {
			syncLayout: store_get($$store_subs ??= {}, "$syncLayout", syncLayout),
			framerSyncLayout: store_get($$store_subs ??= {}, "$framerSyncLayout", framerSyncLayout),
			visualElement,
			update
		});
		if ($$store_subs) unsubscribe_stores($$store_subs);
		bind_props($$props, {
			visualElement,
			props,
			isCustom
		});
	});
}
//#endregion
//#region node_modules/svelte-motion/src/motion/features/layout/index.js
/** 
based on framer-motion@4.0.3,
Copyright (c) 2018 Framer B.V.
*/
var layoutAnimations = {
	measureLayout: MeasureContextProvider,
	layoutAnimation: AnimateLayoutContextProvider
};
//#endregion
//#region node_modules/svelte-motion/src/motion/features/AnimationState.svelte
function AnimationState($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let visualElement = $$props["visualElement"];
		let props = $$props["props"];
		let animate = props.animate;
		$: ({animate} = props);
		$: visualElement.animationState = visualElement.animationState || createAnimationState(visualElement);
		$: if (isAnimationControls(animate)) (/* @__PURE__ */ tick()).then(() => animate.subscribe(visualElement));
		bind_props($$props, {
			visualElement,
			props
		});
	});
}
//#endregion
//#region node_modules/svelte-motion/src/motion/features/Exit.svelte
function Exit($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		var $$store_subs;
		let custom;
		let props = $$props["props"];
		let visualElement = $$props["visualElement"];
		let isCustom = $$props["isCustom"];
		const presenceContext = getContext(PresenceContext) || PresenceContext(isCustom);
		const presence = usePresence(isCustom);
		const effect = (pres) => {
			const [isPresent, onExitComplete] = pres;
			const animation = visualElement.animationState?.setActive(AnimationType.Exit, !isPresent, { custom: store_get($$store_subs ??= {}, "$presenceContext", presenceContext)?.custom ?? custom });
			!isPresent && animation?.then(onExitComplete);
			return "";
		};
		$: ({custom} = props);
		$: effect(store_get($$store_subs ??= {}, "$presence", presence));
		$$renderer.push(`<!--[-->`);
		slot($$renderer, $$props, "default", {}, null);
		$$renderer.push(`<!--]-->`);
		if ($$store_subs) unsubscribe_stores($$store_subs);
		bind_props($$props, {
			props,
			visualElement,
			isCustom
		});
	});
}
//#endregion
//#region node_modules/svelte-motion/src/render/dom/motion.js
/**
* HTML & SVG components, optimised for use with gestures and animation. These can be used as
* drop-in replacements for any HTML & SVG component, all CSS & SVG properties are supported.
*
* @public
*/
var motion = /* @__PURE__ */ createMotionClass({
	animation: AnimationState,
	exit: Exit,
	...gestureAnimations,
	...drag,
	...layoutAnimations
});
//#endregion
//#region node_modules/svelte-motion/src/value/use-combine-values.js
/** 
based on framer-motion@4.0.3,
Copyright (c) 2018 Framer B.V.
*/
var useCombineMotionValues = (values, combineValues) => {
	let subscriptions = [];
	let vals = values;
	const unsubscribe = () => {
		subscriptions.forEach((unsubscribe) => unsubscribe());
	};
	const subscribe = () => {
		subscriptions = vals.map((val) => val.onChange(handler));
		updateValue();
	};
	const value = motionValue(combineValues(), () => {
		unsubscribe();
		subscribe();
		return unsubscribe;
	});
	let updateValue = () => {
		value.set(combineValues());
	};
	const handler = () => {
		sync.update(updateValue, false, true);
	};
	value.reset = (_values, _combineValues) => {
		vals = _values;
		unsubscribe();
		updateValue = () => {
			value.set(_combineValues());
		};
		subscribe();
	};
	return value;
};
//#endregion
//#region node_modules/svelte-motion/src/utils/transform.js
var isCustomValueType = function(v) {
	return typeof v === "object" && v.mix;
};
var getMixer = function(v) {
	return isCustomValueType(v) ? v.mix : void 0;
};
function transform() {
	var args = [];
	for (var _i = 0; _i < arguments.length; _i++) args[_i] = arguments[_i];
	var useImmediate = !Array.isArray(args[0]);
	var argOffset = useImmediate ? 0 : -1;
	var inputValue = args[0 + argOffset];
	var inputRange = args[1 + argOffset];
	var outputRange = args[2 + argOffset];
	var options = args[3 + argOffset];
	var interpolator = interpolate(inputRange, outputRange, Object.assign({ mixer: getMixer(outputRange[0]) }, options));
	return useImmediate ? interpolator(inputValue) : interpolator;
}
//#endregion
//#region node_modules/svelte-motion/src/value/use-transform.js
var useTransform = (input, inputRangeOrTransformer, outputRange, options) => {
	let latest = [];
	const update = (input, inputRangeOrTransformer, outputRange, options) => {
		const transformer = typeof inputRangeOrTransformer === "function" ? inputRangeOrTransformer : transform(inputRangeOrTransformer, outputRange, options);
		const values = Array.isArray(input) ? input : [input];
		const _transformer = Array.isArray(input) ? transformer : ([latest]) => transformer(latest);
		return [values, () => {
			latest.length = 0;
			const numValues = values.length;
			for (let i = 0; i < numValues; i++) latest[i] = values[i].get();
			return _transformer(latest);
		}];
	};
	const comb = useCombineMotionValues(...update(input, inputRangeOrTransformer, outputRange, options));
	comb.updateInner = comb.reset;
	comb.reset = (input, inputRangeOrTransformer, outputRange, options) => comb.updateInner(...update(input, inputRangeOrTransformer, outputRange, options));
	return comb;
};
//#endregion
//#region node_modules/svelte-motion/src/value/use-spring.js
/**
* Creates a `MotionValue` that, when `set`, will use a spring animation to animate to its new state.
*
* It can either work as a stand-alone `MotionValue` by initialising it with a value, or as a subscriber
* to another `MotionValue`.
*
* @remarks
*
* ```jsx
* const x = useSpring(0, { stiffness: 300 })
* const y = useSpring(x, { damping: 10 })
* ```
*
* @param inputValue - `MotionValue` or number. If provided a `MotionValue`, when the input `MotionValue` changes, the created `MotionValue` will spring towards that value.
* @param springConfig - Configuration options for the spring.
* @returns `MotionValue`
*
* @public
*/
var useSpring = (source, config = {}, isCustom = false) => {
	const mcc = getContext(MotionConfigContext) || MotionConfigContext(isCustom);
	let activeSpringAnimation = null;
	let value = motionValue(isMotionValue(source) ? source.get() : source);
	let cleanup;
	const update = (_source, _config) => {
		value.attach((v, set) => {
			const { isStatic } = get(mcc);
			if (isStatic) return set(v);
			if (activeSpringAnimation) activeSpringAnimation.stop();
			activeSpringAnimation = animate({
				from: value.get(),
				to: v,
				velocity: value.getVelocity(),
				..._config,
				onUpdate: set
			});
			return value.get();
		});
		cleanup?.();
		return isMotionValue(_source) ? _source.onChange((v) => value.set(parseFloat(v))) : void 0;
	};
	update(source, config);
	value.reset = update;
	return value;
};
//#endregion
//#region src/lib/components/ui/HeroParallax/ProductCard.svelte
function ProductCard($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let product = $$props["product"];
		let translate = $$props["translate"];
		motion($$renderer, {
			style: { x: translate },
			whileHover: { y: -20 },
			children: invalid_default_snippet,
			$$slots: { default: ($$renderer, { motion }) => {
				$$renderer.push(`<div class="group/product relative h-96 w-[20rem] sm:w-[30rem] flex-shrink-0 cursor-pointer"><a${attr("href", product.link)} class="block group-hover/product:shadow-2xl h-full w-full"><img${attr("src", product.thumbnail)} loading="lazy" class="absolute inset-0 h-full w-full object-cover object-center rounded-sm shadow-xl"${attr("alt", product.title)}/></a> <div class="pointer-events-none absolute inset-0 h-full w-full bg-forest-900 opacity-0 group-hover/product:opacity-60 transition-opacity duration-300 rounded-sm"></div> <h2 class="font-display absolute bottom-6 left-6 text-gold-300 text-2xl opacity-0 group-hover/product:opacity-100 transition-opacity duration-300 drop-shadow-md">${escape_html(product.title)}</h2></div>`);
			} }
		});
		bind_props($$props, {
			product,
			translate
		});
	});
}
//#endregion
//#region src/lib/components/ui/HeroParallax/HeroParallax.svelte
function HeroParallax($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let firstRowBase, secondRowBase, thirdRowBase, firstRow, secondRow, thirdRow;
		let products = $$props["products"];
		const shuffleArray = (array) => {
			const arr = [...array];
			for (let i = arr.length - 1; i > 0; i--) {
				const j = Math.floor(Math.random() * (i + 1));
				[arr[i], arr[j]] = [arr[j], arr[i]];
			}
			return arr;
		};
		const { scrollYProgress } = { scrollYProgress: motionValue(0) };
		const springConfig = {
			stiffness: 300,
			damping: 30,
			bounce: 100
		};
		const scrollX = useSpring(useTransform(scrollYProgress, [0, 1], [0, 1e3]), springConfig);
		const scrollXReverse = useSpring(useTransform(scrollYProgress, [0, 1], [0, -1e3]), springConfig);
		const rotateX = useSpring(useTransform(scrollYProgress, [0, .2], [15, 0]), springConfig);
		const opacity = useSpring(useTransform(scrollYProgress, [0, .2], [.2, 1]), springConfig);
		const rotateZ = useSpring(useTransform(scrollYProgress, [0, .2], [20, 0]), springConfig);
		const translateY = useSpring(useTransform(scrollYProgress, [0, .2], [-700, 300]), springConfig);
		const auto1 = motionValue(0);
		const auto2 = motionValue(0);
		const auto3 = motionValue(0);
		const translateX1 = useTransform([scrollX, auto1], ([s, a]) => -1500 + s + a);
		const translateX2 = useTransform([scrollXReverse, auto2], ([s, a]) => s + a);
		const translateX3 = useTransform([scrollX, auto3], ([s, a]) => -1800 + s + a);
		const translateX1Spring = useSpring(translateX1, springConfig);
		const translateX2Spring = useSpring(translateX2, springConfig);
		const translateX3Spring = useSpring(translateX3, springConfig);
		onDestroy(() => {});
		$: firstRowBase = shuffleArray(products);
		$: secondRowBase = shuffleArray(products);
		$: thirdRowBase = shuffleArray(products);
		$: firstRow = [
			...firstRowBase,
			...firstRowBase,
			...firstRowBase
		];
		$: secondRow = [
			...secondRowBase,
			...secondRowBase,
			...secondRowBase
		];
		$: thirdRow = [
			...thirdRowBase,
			...thirdRowBase,
			...thirdRowBase
		];
		$: 560 * products.length;
		$$renderer.push(`<div class="relative flex h-[220vh] flex-col self-auto overflow-hidden py-4 antialiased [perspective:1000px] [transform-style:preserve-3d] bg-stone-50"><div class="relative left-0 top-0 mx-auto w-full max-w-7xl px-4 py-8 md:py-40 z-20 pointer-events-auto"><!--[-->`);
		slot($$renderer, $$props, "default", {}, null);
		$$renderer.push(`<!--]--></div> `);
		motion($$renderer, {
			style: {
				rotateX,
				rotateZ,
				translateY,
				opacity
			},
			children: invalid_default_snippet,
			$$slots: { default: ($$renderer, { motion }) => {
				$$renderer.push(`<div class="pointer-events-none pb-10"><div class="mb-20 flex flex-row flex-nowrap whitespace-nowrap w-max space-x-20 pointer-events-auto"><!--[-->`);
				const each_array = ensure_array_like(firstRow);
				for (let i = 0, $$length = each_array.length; i < $$length; i++) {
					let product = each_array[i];
					ProductCard($$renderer, {
						product,
						translate: translateX1Spring
					});
				}
				$$renderer.push(`<!--]--></div> <div class="mb-20 flex flex-row flex-nowrap whitespace-nowrap w-max space-x-20 pointer-events-auto"><!--[-->`);
				const each_array_1 = ensure_array_like(secondRow);
				for (let i = 0, $$length = each_array_1.length; i < $$length; i++) {
					let product = each_array_1[i];
					ProductCard($$renderer, {
						product,
						translate: translateX2Spring
					});
				}
				$$renderer.push(`<!--]--></div> <div class="flex flex-row flex-nowrap whitespace-nowrap w-max space-x-20 pointer-events-auto"><!--[-->`);
				const each_array_2 = ensure_array_like(thirdRow);
				for (let i = 0, $$length = each_array_2.length; i < $$length; i++) {
					let product = each_array_2[i];
					ProductCard($$renderer, {
						product,
						translate: translateX3Spring
					});
				}
				$$renderer.push(`<!--]--></div></div>`);
			} }
		});
		$$renderer.push(`<!----></div>`);
		bind_props($$props, { products });
	});
}
//#endregion
//#region src/lib/components/Hero.svelte
function Hero($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		const webpFiles = [
			"aziz-najia-cooking.webp",
			"beef-meatballs-cardamon.webp",
			"chicken-volubilis.webp",
			"fresh-sardine-tagine.webp",
			"interior-of-ruined-garden.webp",
			"photo0jpg (1).webp",
			"photo0jpg.webp",
			"photo1jpg.webp",
			"photo2jpg (1).webp",
			"photo2jpg.webp",
			"sardine-sweet-onion-terine.webp",
			"table-in-the-bushes-photo.webp",
			"tapas-caliente-makuda.webp",
			"the-fountain-old-and.webp",
			"the-front-entrance-on.webp",
			"the-garden-at-night-photo.webp",
			"the-garden-early-evening.webp",
			"the-ruined-garden.webp",
			"vegetable-b-stella-photo.webp",
			"view-toward-the-rear.webp"
		];
		const formatTitle = (filename) => {
			let name = filename.replace(".webp", "");
			name = name.replace(/-/g, " ");
			name = name.replace(/jpg/g, "");
			name = name.replace(/\(\d+\)/g, "");
			return name.split(" ").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ").replace(/\s+/g, " ").trim();
		};
		const products = webpFiles.map((file) => ({
			title: formatTitle(file) || "Ruined Garden",
			link: `#`,
			thumbnail: `/assets/${file}`
		}));
		HeroParallax($$renderer, {
			products: [...products, ...products.slice(0, 5)],
			children: ($$renderer) => {
				$$renderer.push(`<div class="relative z-10 text-center px-4 md:px-8 max-w-4xl mx-auto my-auto mt-12 md:mt-24 pointer-events-auto"><p class="chapter-eyebrow text-forest-800/80 mb-6 tracking-[0.3em] font-sans font-bold">Welcome to</p> <h1 class="font-display font-light text-6xl md:text-8xl text-forest-900 mb-8 tracking-wider leading-tight drop-shadow-xl">The Ruined<br/>Garden</h1> <p class="text-lg md:text-xl text-stone-100 mb-12 font-medium tracking-wide max-w-2xl mx-auto drop-shadow-sm bg-forest-900/80 p-6 rounded-sm shadow-2xl border border-gold-300/30">Discover a secret oasis hidden within the ancient Medina of Fes. Where nature reclaims the ruins, and every meal is a journey through time.</p> <a href="https://www.google.com/maps/search/?api=1&amp;query=The+Ruined+Garden+Fes" target="_blank" rel="noopener noreferrer" class="group relative inline-flex items-center justify-center px-8 py-4 border-2 border-forest-900 bg-forest-900 text-gold-300 hover:text-stone-100 hover:bg-forest-800 transition-all duration-500 ease-out shadow-xl rounded-sm"><span class="font-sans font-bold text-[0.95rem] tracking-[0.15em] uppercase">Come Visit Us</span></a></div>`);
			},
			$$slots: { default: true }
		});
	});
}
//#endregion
//#region src/lib/components/CrumbleCard.svelte
function CrumbleCard($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let hasCrumbled = fallback($$props["hasCrumbled"], false);
		const rows = 8;
		const cols = 6;
		const crumblingWallImage = "/assets/crumbling-wall.webp";
		onDestroy(() => {});
		$$renderer.push(`<div class="relative block w-full outline-none"><div class="absolute -left-16 -top-12 z-0 pointer-events-none opacity-0 drop-shadow-xl saturate-150"><svg width="140" height="140" viewBox="0 0 24 24" fill="none" class="text-forest-600 sm:w-36 sm:h-36 mix-blend-multiply opacity-80"><path d="M5 22s-2-8 3-12c5-4 11-5 11-5s1 6-4 11c-5 5-10 6-10 6Z" fill="currentColor"></path><path d="M22 6c-3 0-8 2-12 6s-6 10-6 10" stroke="#0f1f18" stroke-width="0.5" stroke-linecap="round"></path><circle cx="15" cy="8" r="3" fill="#C0B283"></circle></svg></div> <div class="absolute -right-12 -bottom-14 z-0 pointer-events-none opacity-0 drop-shadow-xl saturate-150"><svg width="160" height="160" viewBox="0 0 24 24" fill="none" class="text-terracotta-700 sm:w-40 sm:h-40 mix-blend-multiply opacity-80"><path d="M19 22s2-8-3-12c-5-4-11-5-11-5s-1 6 4 11c5 5 10 6 10 6Z" fill="currentColor"></path><path d="M2 6c3 0 8 2 12 6s6 10 6 10" stroke="#823c2a" stroke-width="0.5" stroke-linecap="round"></path><circle cx="9" cy="8" r="3" fill="#C0B283"></circle></svg></div> <div class="relative z-10 crumble-content bg-transparent opacity-100 pointer-events-auto"><!--[-->`);
		slot($$renderer, $$props, "default", {}, null);
		$$renderer.push(`<!--]--></div> `);
		if (!hasCrumbled) {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<div class="absolute inset-x-0 inset-y-0 z-20 grid overflow-hidden shadow-2xl transition-transform duration-300"${attr_style(`grid-template-columns: repeat(${cols}, 1fr); grid-template-rows: repeat(${rows}, 1fr);`)}><!--[-->`);
			const each_array = ensure_array_like(Array(rows * cols));
			for (let i = 0, $$length = each_array.length; i < $$length; i++) {
				each_array[i];
				$$renderer.push(`<div class="relative w-full h-full bg-cover"${attr_style(` background-image: url(${stringify(crumblingWallImage)}); background-size: ${stringify(cols * 100)}% ${stringify(rows * 100)}%; background-position: ${stringify(i % cols * (100 / (cols - 1)))}% ${stringify(Math.floor(i / cols) * (100 / (rows - 1)))}%; border: 0.5px solid rgba(0,0,0,0.1); `)}></div>`);
			}
			$$renderer.push(`<!--]--> <div class="absolute inset-0 bg-stone-900/40 mix-blend-multiply flex flex-col items-center justify-center border-2 border-stone-500/20 m-2 pointer-events-none"></div></div>`);
		} else $$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--></div>`);
		bind_props($$props, { hasCrumbled });
	});
}
//#endregion
//#region src/lib/components/RoamingCat.svelte
function RoamingCat($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		const placements = [
			{
				trigger: "[aria-labelledby=\"chapter-ruin\"]",
				side: "right",
				top: "38%",
				rotation: -8,
				size: 90
			},
			{
				trigger: "[aria-labelledby=\"chapter-ruin\"]",
				side: "left",
				top: "72%",
				rotation: 12,
				size: 75
			},
			{
				trigger: "[aria-labelledby=\"chapter-gateway\"]",
				side: "right",
				top: "22%",
				rotation: -5,
				size: 85
			},
			{
				trigger: "[aria-labelledby=\"chapter-guardians\"]",
				side: "left",
				top: "55%",
				rotation: 10,
				size: 80
			},
			{
				trigger: "[aria-labelledby=\"chapter-feast\"]",
				side: "right",
				top: "60%",
				rotation: -12,
				size: 95
			}
		];
		let triggers = [];
		onDestroy(() => {
			triggers.forEach((t) => t.kill());
		});
		$$renderer.push(`<!--[-->`);
		const each_array = ensure_array_like(placements);
		for (let i = 0, $$length = each_array.length; i < $$length; i++) {
			let p = each_array[i];
			$$renderer.push(`<div class="fixed z-30 pointer-events-none opacity-0"${attr_style(` ${stringify(p.side === "right" ? "right: 1.5rem;" : "left: 1.5rem;")} top: ${stringify(p.top)}; width: ${stringify(p.size)}px; transform: rotate(${stringify(p.rotation)}deg); mix-blend-mode: normal; `)} aria-hidden="true"><img src="/assets/sleeping-cat.png" alt=""${attr("width", p.size)}${attr("height", p.size)} class="w-full h-auto drop-shadow-xl" style="filter: invert(1) opacity(0.55);"/></div>`);
		}
		$$renderer.push(`<!--]-->`);
	});
}
//#endregion
//#region src/routes/+page.svelte
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let isMenuOpen = false;
		let isQuestionnaireOpen = false;
		const heroImage = "/assets/the-garden-early-evening.webp";
		const feastImage = "/assets/the-garden-at-night-photo.webp";
		if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);
		onDestroy(() => {});
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer) {
			head("1uha8ag", $$renderer, ($$renderer) => {
				$$renderer.title(($$renderer) => {
					$$renderer.push(`<title>The Ruined Garden | Fes</title>`);
				});
			});
			GrowingIvy($$renderer, {});
			$$renderer.push(`<!----> <main class="site-shell bg-stone-50 text-stone-900 overflow-x-hidden selection:bg-gold-300 selection:text-forest-900">`);
			RoamingCat($$renderer, {});
			$$renderer.push(`<!----> `);
			Hero($$renderer, {});
			$$renderer.push(`<!----> `);
			ReviewMarquee($$renderer, {});
			$$renderer.push(`<!----> <section aria-labelledby="chapter-ruin" class="relative min-h-screen flex flex-col items-center justify-center text-center px-4 py-20 overflow-hidden chapter-shell"><img class="absolute inset-0 h-full w-full object-cover fixed-parallax gpu-layer"${attr("src", heroImage)} alt="" loading="eager" fetchpriority="high" decoding="async" sizes="100vw"/> <div class="absolute inset-0 bg-stone-100/80"></div> <div class="grain-overlay"></div> <div class="max-w-5xl mx-auto z-10 relative animate-fade-in animate-slide-up w-full px-4">`);
			CrumbleCard($$renderer, {
				children: ($$renderer) => {
					$$renderer.push(`<div class="story-panel"><p class="chapter-eyebrow">Chapter I: The Sanctuary Found</p> <h1 id="chapter-ruin" class="font-display text-5xl md:text-7xl lg:text-8xl text-forest-800 mb-6 leading-tight chapter-title">A Secret Map to the Soul of Fes.</h1> <div class="luxury-divider mx-auto mb-12"></div> <div data-story-block="" class="font-sans text-xl text-stone-700 leading-relaxed max-w-3xl mx-auto drop-shadow-sm font-medium text-left md:text-center space-y-4"><p class="story-sentence">Five minutes from the chaos of Talaa Seghira, time begins to slow.</p> <p class="story-sentence">Follow the hand-painted signs through the labyrinth of the Medina
              until the stone gives way to a hidden gate.</p> <p class="story-sentence">Here, a 14th-century merchant’s palace has been reclaimed by the
              earth.</p> <p class="story-sentence">We are a ruin, yes, but a living one.</p> <p class="story-sentence">Whether you find us by the light of a log fire in the winter salon
              or under the wide-brimmed shade of a summer sun hat, the garden is
              always waiting.</p></div> <div class="mt-12 pt-10 border-t border-stone-200/60 text-center"><button class="inline-flex items-center justify-center px-8 py-4 border border-forest-800/60 text-forest-800 hover:bg-forest-800 hover:text-gold-300 transition-all duration-300 font-sans text-xs tracking-[0.22em] uppercase rounded-sm">Curate Your Journey</button></div></div>`);
				},
				$$slots: { default: true }
			});
			$$renderer.push(`<!----></div></section> <section id="gateway" aria-labelledby="chapter-gateway" class="relative py-20 min-h-screen flex flex-col items-center justify-center bg-stone-50"><div class="w-full max-w-5xl mx-auto px-4 mb-12 text-center text-stone-500"></div> <div class="relative z-20 px-4 w-full"><div class="max-w-4xl mx-auto">`);
			CrumbleCard($$renderer, {
				children: ($$renderer) => {
					$$renderer.push(`<div class="chapter-card p-6 md:p-10"><p class="chapter-eyebrow text-center" id="chapter-gateway">Chapter II: The Gateway</p> <h2 class="font-display text-4xl md:text-6xl text-terracotta-800 mb-6 text-center chapter-title">Of Fire and Slow Time.</h2> <div class="luxury-divider mx-auto mb-8"></div> <div data-story-block="" class="font-sans text-stone-700 text-lg md:text-xl leading-relaxed space-y-4"><p class="story-sentence">Our kitchen breathes with the seasons.</p> <p class="story-sentence">At midday, we serve the vibrant pulse of the street, tapas and
                pastries dusted with sugar and history.</p> <p class="story-sentence">But as the shadows lengthen across the Zellige, the real magic
                begins.</p> <p class="story-sentence">This is the home of the <span class="practical-word">Seven-Hour Mechoui Lamb</span>, a dish that cannot be rushed, only coaxed into perfection.</p></div> <div class="mt-10 pt-8 border-t border-stone-200/60 text-center"><button class="inline-flex items-center justify-center px-8 py-4 border border-[#C0B283]/70 text-[#8a7150] hover:bg-[#C0B283]/10 hover:border-[#C0B283] transition-all duration-300 font-sans text-xs tracking-[0.22em] uppercase rounded-sm">View the Menu</button></div></div>`);
				},
				$$slots: { default: true }
			});
			$$renderer.push(`<!----></div></div></section> <section id="guardians" aria-labelledby="chapter-guardians" class="relative min-h-screen bg-stone-100 py-32 flex flex-col items-center justify-center chapter-shell"><div class="max-w-4xl mx-auto px-4 w-full text-center z-10 mb-12 relative">`);
			CrumbleCard($$renderer, {
				children: ($$renderer) => {
					$$renderer.push(`<div class="story-panel relative"><p class="chapter-eyebrow mb-8">Chapter III: The Guardians of the Medina</p> <h2 id="chapter-guardians" class="font-display text-5xl md:text-7xl text-terracotta-800 mb-8 chapter-title">Shadows in the Garden.</h2> <div class="luxury-divider mx-auto mb-8"></div> <div data-story-block="" class="font-sans text-stone-700 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto space-y-4"><p class="story-sentence">You may see them, the silent, amber-eyed watchers of the Medina.</p> <p class="story-sentence">The stray cats of Fes are our ancient pest-control and our
              companions.</p> <p class="story-sentence">While we feed them at the gates and keep their water bowls full,
              we ask that you let them remain wild within our walls.</p> <p class="story-sentence">Behind the scenes, our human family works with the same quiet
              grace.</p> <p class="story-sentence">At The Ruined Garden, every gratuity goes directly to the hands
              that prepared your tea and the hearts that tend the hearth.</p></div></div>`);
				},
				$$slots: { default: true }
			});
			$$renderer.push(`<!----></div></section> <section id="feast" aria-labelledby="chapter-feast" class="relative min-h-[90vh] bg-forest-900 text-stone-100 flex flex-col justify-center items-center text-center px-4 py-32 shadow-[inset_0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden"><img class="absolute inset-0 h-full w-full object-cover fixed-parallax gpu-layer opacity-30"${attr("src", feastImage)} alt="" loading="lazy" decoding="async" sizes="100vw"/> <div class="grain-overlay"></div> <div class="relative z-10 w-full max-w-3xl mx-auto">`);
			CrumbleCard($$renderer, {
				children: ($$renderer) => {
					$$renderer.push(`<div class="story-panel-dark"><p class="chapter-eyebrow text-gold-100/80 mb-7">Chapter IV: The Guided Return</p> <h2 id="chapter-feast" class="font-display text-5xl md:text-8xl text-gold-400 mb-8 glow-effect chapter-title">The Way Home.</h2> <div class="luxury-divider mx-auto mb-10"></div> <div data-story-block="" class="font-sans text-xl md:text-2xl text-stone-200 leading-relaxed mb-16 space-y-5"><p class="story-sentence">The Medina is a beautiful maze, but you need never feel lost.</p> <p class="story-sentence">For a few dirhams, our <span class="practical-word">Escort Service</span> will meet you at your riad and guide you through the starlit alleys
              to our door.</p> <p class="story-sentence">And when the feast is done, we make sure you return safely.</p> <p class="story-sentence">During the high seasons of light and bloom, our tables fill
              quickly. Secure your place in the story before the garden closes
              its gates for the night.</p></div> <button class="cta-luxury focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-300 focus-visible:ring-offset-2 focus-visible:ring-offset-forest-900">Reserve Your Table</button></div>`);
				},
				$$slots: { default: true }
			});
			$$renderer.push(`<!----></div></section> <footer class="relative bg-[#0f1f18] text-stone-500 py-16 text-center font-sans tracking-wide border-t border-gold-900/40"><p class="text-sm uppercase mb-4 text-gold-600/50 hover:text-gold-400 transition-colors cursor-pointer">Built with SvelteKit &amp; GSAP</p> <p>© 2026 The Ruined Garden. All rights reserved.</p></footer></main> `);
			MenuModal($$renderer, {
				get isOpen() {
					return isMenuOpen;
				},
				set isOpen($$value) {
					isMenuOpen = $$value;
					$$settled = false;
				}
			});
			$$renderer.push(`<!----> `);
			ExperienceQuestionnaire($$renderer, {
				get isOpen() {
					return isQuestionnaireOpen;
				},
				set isOpen($$value) {
					isQuestionnaireOpen = $$value;
					$$settled = false;
				}
			});
			$$renderer.push(`<!---->`);
		}
		do {
			$$settled = true;
			$$inner_renderer = $$renderer.copy();
			$$render_inner($$inner_renderer);
		} while (!$$settled);
		$$renderer.subsume($$inner_renderer);
	});
}
//#endregion
export { _page as default };
