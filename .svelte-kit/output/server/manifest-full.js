export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["assets/aziz-najia-cooking.webp","assets/beef-meatballs-cardamon.jpg","assets/beef-meatballs-cardamon.webp","assets/chicken-volubilis.webp","assets/crumbling-wall.webp","assets/fresh-sardine-tagine.webp","assets/interior-of-ruined-garden.webp","assets/photo0jpg (1).webp","assets/photo0jpg.webp","assets/photo1jpg.webp","assets/photo2jpg (1).webp","assets/photo2jpg.webp","assets/sardine-sweet-onion-terine.webp","assets/sleeping-cat.png","assets/table-in-the-bushes-photo.webp","assets/tapas-caliente-makuda.webp","assets/the-fountain-old-and.webp","assets/the-front-entrance-on.webp","assets/the-garden-at-night-photo.webp","assets/the-garden-early-evening.jpg","assets/the-garden-early-evening.webp","assets/the-ruined-garden.webp","assets/vegetable-b-stella-photo.webp","assets/view-toward-the-rear.webp","favicon.svg","icons.svg","images/bab-boujloud.png"]),
	mimeTypes: {".webp":"image/webp",".jpg":"image/jpeg",".png":"image/png",".svg":"image/svg+xml"},
	_: {
		client: {start:"_app/immutable/entry/start.CWW20yM4.js",app:"_app/immutable/entry/app.BHCkYlnF.js",imports:["_app/immutable/entry/start.CWW20yM4.js","_app/immutable/chunks/DRH1qeG-.js","_app/immutable/chunks/BpYku5Y5.js","_app/immutable/chunks/CxSffOKV.js","_app/immutable/entry/app.BHCkYlnF.js","_app/immutable/chunks/BpYku5Y5.js","_app/immutable/chunks/BcgnSMxp.js","_app/immutable/chunks/DXLwiZ0H.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
