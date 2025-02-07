import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.Cd8IT4_o.js","_app/immutable/chunks/DxxeemtE.js","_app/immutable/chunks/7XQ4I-1F.js"];
export const stylesheets = [];
export const fonts = [];
