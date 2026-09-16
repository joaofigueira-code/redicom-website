// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

/**
 * Configuracao do site Redicom.
 *
 * O prefixo de idioma e sempre explicito (/pt/ e /en/) para manter a
 * estrutura de URLs do site atual e simplificar os redirecionamentos.
 */
const site = 'https://www.redicom.pt';

export default defineConfig({
  site,
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
      // Fora do sitemap: a pagina de agradecimento (nao e um destino de
      // pesquisa) e a raiz do dominio (so encaminha para /pt/).
      filter: (page) => !page.includes('/obrigado/') && page !== `${site}/`,
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
