import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import partytown from "@astrojs/partytown";
import remarkToc from 'remark-toc';
import mdx from "@astrojs/mdx";
import compress from "astro-compress";
import remarkLinkCard from "remark-link-card";
import critters from "astro-critters";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), sitemap(), partytown(), mdx(), compress(), critters()],
  image: {
    domains: ["twemoji.maxcdn.com"],
    remotePatterns: [{
      hostname: 'cdn.jsdelivr.net/'
    }]
  },
  site: 'https://book-backpacker.com',
  markdown: {
    // Applied to .md and .mdx files
    remarkPlugins: [remarkToc, remarkLinkCard]
  }
});
