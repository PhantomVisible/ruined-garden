
// this file is generated — do not edit it


declare module "svelte/elements" {
	export interface HTMLAttributes<T> {
		'data-sveltekit-keepfocus'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-noscroll'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-preload-code'?:
			| true
			| ''
			| 'eager'
			| 'viewport'
			| 'hover'
			| 'tap'
			| 'off'
			| undefined
			| null;
		'data-sveltekit-preload-data'?: true | '' | 'hover' | 'tap' | 'off' | undefined | null;
		'data-sveltekit-reload'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-replacestate'?: true | '' | 'off' | undefined | null;
	}
}

export {};


declare module "$app/types" {
	type MatcherParam<M> = M extends (param : string) => param is (infer U extends string) ? U : string;

	export interface AppTypes {
		RouteId(): "/";
		RouteParams(): {
			
		};
		LayoutParams(): {
			"/": Record<string, never>
		};
		Pathname(): "/";
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/assets/aziz-najia-cooking.webp" | "/assets/beef-meatballs-cardamon.jpg" | "/assets/beef-meatballs-cardamon.webp" | "/assets/chicken-volubilis.webp" | "/assets/crumbling-wall.webp" | "/assets/fresh-sardine-tagine.webp" | "/assets/interior-of-ruined-garden.webp" | "/assets/photo0jpg (1).webp" | "/assets/photo0jpg.webp" | "/assets/photo1jpg.webp" | "/assets/photo2jpg (1).webp" | "/assets/photo2jpg.webp" | "/assets/sardine-sweet-onion-terine.webp" | "/assets/sleeping-cat.png" | "/assets/table-in-the-bushes-photo.webp" | "/assets/tapas-caliente-makuda.webp" | "/assets/the-fountain-old-and.webp" | "/assets/the-front-entrance-on.webp" | "/assets/the-garden-at-night-photo.webp" | "/assets/the-garden-early-evening.jpg" | "/assets/the-garden-early-evening.webp" | "/assets/the-ruined-garden.webp" | "/assets/vegetable-b-stella-photo.webp" | "/assets/view-toward-the-rear.webp" | "/favicon.svg" | "/icons.svg" | "/images/bab-boujloud.png" | string & {};
	}
}