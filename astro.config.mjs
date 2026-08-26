// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://decoheron.com',
  base: '/',
  build: {
    assets: 'assets', // Changes output from `_astro` to `assets`
  },
});


// astro.config.mjs
import { defineConfig } from 'astro/config';
