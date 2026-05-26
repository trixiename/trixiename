import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://trixiename.github.io',
  base: '/trixiename',
  output: 'static',
});
