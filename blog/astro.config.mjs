import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import partytown from "@astrojs/partytown";
import remarkToc from 'remark-toc';
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), sitemap(), partytown(), mdx()],
    image: {
    domains: ["twemoji.maxcdn.com"],
	       remotePatterns: [{
      
      hostname: 'cdn.jsdelivr.net/'
  }]
    },		       
	site: 'https://book-backpacker.com',
	markdown: {
    // Applied to .md and .mdx files
    remarkPlugins: [remarkToc]}
});
