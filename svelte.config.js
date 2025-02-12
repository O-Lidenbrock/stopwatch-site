import adapter from '@sveltejs/adapter-static';

//got all these instructions from the docs https://svelte.dev/docs/kit/adapter-static

const config = {

    kit: {
        adapter: adapter({
			pages: 'docs', //directory that the pages are written to
			assets: 'docs', //where to write static assets (static/ contents + client side JS and CSS generated)
			fallback: undefined, //I think if things break it sends the user here (a 404.html or wtv page)
			precompress: false, //precompresses with brotli and gzip
			strict: true //checks if all pages were prerendered (in case some haven't been set right)
		}),
		paths: {
			base: process.env.NODE_ENV === 'production' ? '/stopwatch-site' : '' //AFAIK this sets the path it thinks it lives on to my repo name instead of the base of the website (which would be github.io)
		}

    }
};

export default config;