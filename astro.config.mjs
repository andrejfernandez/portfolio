import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
	// ...
	integrations: [tailwind(), svelte()],
	site: 'https://andrejfernandez.github.io',
	base: '/portfolio'
});
