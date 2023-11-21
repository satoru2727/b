import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import partytown from "@astrojs/partytown";
import remarkToc from "remark-toc";
import mdx from "@astrojs/mdx";
import remarkLinkCard from "remark-link-card";
import critters from "astro-critters";
import compress from "astro-compress";
// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    sitemap(),
    partytown(),
    mdx(),
    compress(Exclude: [
				"global.css"]),
    critters(),
  ],
  image: {
    domains: ["twemoji.maxcdn.com"],
    remotePatterns: [
      {
        hostname: "cdn.jsdelivr.net/",
      },
    ],
  },
  site: "https://book-backpacker.com",
  markdown: {
    // Applied to .md and .mdx files
    remarkPlugins: [remarkToc, remarkLinkCard],
    shikiConfig: {
      // Shikiの組み込みテーマから選択（または独自のテーマを追加）
      // https://github.com/shikijs/shiki/blob/main/docs/themes.md
      theme: "github-dark-dimmed",
      // カスタム言語の追加
      // 注：Shikiには.astroを含む無数の言語が内蔵されています。
      // https://github.com/shikijs/shiki/blob/main/docs/languages.md
      langs: [],
      // 水平スクロールを防ぐために文字の折り返しを有効にする
      wrap: true,
    },
  },
  prefetch: true,
});
