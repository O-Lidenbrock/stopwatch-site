export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "stopwatch-site/_app",
	assets: new Set([".nojekyll","favicon.png","icons/pause-icon.svg","icons/play-icon.svg","icons/restart_icon.svg","icons/settings-icon.svg","icons/timer-icon.svg"]),
	mimeTypes: {".png":"image/png",".svg":"image/svg+xml"},
	_: {
		client: {"start":"_app/immutable/entry/start.Dm7og7eP.js","app":"_app/immutable/entry/app.CmV_bEoa.js","imports":["_app/immutable/entry/start.Dm7og7eP.js","_app/immutable/chunks/DTWr3YbD.js","_app/immutable/chunks/7XQ4I-1F.js","_app/immutable/chunks/2hpZ2oDL.js","_app/immutable/entry/app.CmV_bEoa.js","_app/immutable/chunks/7XQ4I-1F.js","_app/immutable/chunks/BiiydcW9.js","_app/immutable/chunks/DxxeemtE.js","_app/immutable/chunks/DUkhKkEx.js","_app/immutable/chunks/2hpZ2oDL.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/howdy",
				pattern: /^\/howdy\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
