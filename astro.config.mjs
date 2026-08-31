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
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'es',
        locales: {
          es: 'es-ES',
          fr: 'fr-FR',
        },
      },
      filter: (page) => !page.includes('/404'),
      serialize(item) {
        const path = new URL(item.url).pathname;
        const frUrl =
          path === '/' || path === ''
            ? 'https://qori.fr/fr/'
            : path.startsWith('/fr/')
              ? item.url
              : `https://qori.fr/fr${path}`;
        return {
          ...item,
          lastmod: new Date().toISOString(),
          links: [...(item.links ?? []), { url: frUrl, lang: 'x-default' }],
        };
      },
    }),
  ],
});
