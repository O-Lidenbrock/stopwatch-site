

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/about/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.c7tJJLoJ.js","_app/immutable/chunks/DxxeemtE.js","_app/immutable/chunks/7XQ4I-1F.js","_app/immutable/chunks/BQyUZdjK.js"];
export const stylesheets = ["_app/immutable/assets/3.jbIdEbHm.css"];
export const fonts = [];
