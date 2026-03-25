import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://nexusquest.dev',   // update when you have your domain
  output: 'static',
  integrations: [
    sitemap(),
    tailwind({ applyBaseStyles: false }),
  ],
});
