import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://qori.fr',
  base: '/',
  output: 'static',
  build: {
    format: 'directory',
  },
  trailingSlash: 'always',
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'fr'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [sitemap()],
});
