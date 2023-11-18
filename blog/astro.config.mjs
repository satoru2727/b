import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import partytown from "@astrojs/partytown";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), sitemap(), partytown(), mdx()],
    image: {
    domains: ["twemoji.maxcdn.com"]
  },
	site: 'https://book-backpacker.com'
});
