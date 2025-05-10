// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	// 🔽 GitHub Pages に合わせて修正
	site: 'https://orihachi.github.io/my-blog/',

	integrations: [mdx(), sitemap()],
});
