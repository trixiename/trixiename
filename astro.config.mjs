import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://example.github.io',
  base: '/acc_portfolio',
  output: 'static',
});
