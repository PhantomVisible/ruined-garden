export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["assets/aziz-najia-cooking.jpg","assets/aziz-najia-cooking.webp","assets/beef-meatballs-cardamon.jpg","assets/beef-meatballs-cardamon.webp","assets/chicken-volubilis.jpg","assets/chicken-volubilis.webp","assets/fresh-sardine-tagine.jpg","assets/fresh-sardine-tagine.webp","assets/interior-of-ruined-garden.jpg","assets/interior-of-ruined-garden.webp","assets/photo0jpg (1).jpg","assets/photo0jpg (1).webp","assets/photo0jpg.jpg","assets/photo0jpg.webp","assets/photo1jpg.jpg","assets/photo1jpg.webp","assets/photo2jpg (1).jpg","assets/photo2jpg (1).webp","assets/photo2jpg.jpg","assets/photo2jpg.webp","assets/sardine-sweet-onion-terine.jpg","assets/sardine-sweet-onion-terine.webp","assets/table-in-the-bushes-photo.jpg","assets/table-in-the-bushes-photo.webp","assets/tapas-caliente-makuda.jpg","assets/tapas-caliente-makuda.webp","assets/the-fountain-old-and.jpg","assets/the-fountain-old-and.webp","assets/the-front-entrance-on.jpg","assets/the-front-entrance-on.webp","assets/the-garden-at-night-photo.jpg","assets/the-garden-at-night-photo.webp","assets/the-garden-early-evening.jpg","assets/the-garden-early-evening.webp","assets/the-ruined-garden.jpg","assets/the-ruined-garden.webp","assets/vegetable-b-stella-photo.jpg","assets/vegetable-b-stella-photo.webp","assets/view-toward-the-rear.jpg","assets/view-toward-the-rear.webp","favicon.svg","icons.svg"]),
	mimeTypes: {".jpg":"image/jpeg",".webp":"image/webp",".svg":"image/svg+xml"},
	_: {
		client: {start:"_app/immutable/entry/start.BVn_0zYL.js",app:"_app/immutable/entry/app.BEzXBwZx.js",imports:["_app/immutable/entry/start.BVn_0zYL.js","_app/immutable/chunks/BHsZpx3r.js","_app/immutable/chunks/DE1BKoXS.js","_app/immutable/entry/app.BEzXBwZx.js","_app/immutable/chunks/DE1BKoXS.js","_app/immutable/chunks/Dj6f-nJM.js","_app/immutable/chunks/DEDqjojZ.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
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
