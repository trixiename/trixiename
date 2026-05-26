import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://justrhey.github.io',
  base: '/acc_portfolio',
  output: 'static',
});
