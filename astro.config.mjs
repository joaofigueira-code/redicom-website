// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

/**
 * Configuracao do site Redicom.
 *
 * O prefixo de idioma e sempre explicito (/pt/ e /en/) para manter a
 * estrutura de URLs do site atual e simplificar os redirecionamentos.
 */
export default defineConfig({
  site: 'https://www.redicom.pt',
  trailingSlash: 'always',

  i18n: {
    defaultLocale: 'pt',
    locales: ['pt', 'en'],
    routing: {
      prefixDefaultLocale: true,
    },
  },

  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'pt',
        locales: { pt: 'pt-PT', en: 'en' },
      },
      filter: (page) => !page.includes('/obrigado/'),
    }),
  ],

  build: {
    inlineStylesheets: 'auto',
  },

  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'hover',
  },
});
