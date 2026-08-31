import { defineConfig } from 'astro/config';
import { unified } from '@astrojs/markdown-remark';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// https://astro.build/config
export default defineConfig({
  base: '/',
  outDir: './docs',
  build: {
    assets: 'assets',
  },
  markdown: {
    processor: unified({
      remarkPlugins: [remarkMath],
      rehypePlugins: [rehypeKatex],
      remarkRehype: {
        footnoteLabel: 'Footnotes',
      },
    }),
  },
});
