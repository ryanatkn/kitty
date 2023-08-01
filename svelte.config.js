import {typescript} from 'svelte-preprocess-esbuild';
import adapter from '@sveltejs/adapter-static';

// const dev = process.argv.includes('dev'); // see below

/** @type {import('@sveltejs/kit').Config} */
export default {
	preprocess: typescript(),
	compilerOptions: {immutable: true},
	vitePlugin: {inspector: true}, // docs: https://github.com/sveltejs/vite-plugin-svelte/blob/main/docs/inspector.md
	kit: {
		adapter: adapter(),
		// paths: dev ? undefined : {base: '/felt-template'}, // for GitHub pages -- delete this line for top-level domains
		files: {assets: 'src/static'},
		alias: {$routes: 'src/routes'},
	},
};
