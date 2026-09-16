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
      // Fora do sitemap: as paginas de agradecimento e de erro (nao sao
      // destinos de pesquisa) e a raiz do dominio (so encaminha para /pt/).
      filter: (page) =>
        page !== `${site}/` &&
        !page.includes('/obrigado/') &&
        !page.includes('/thank-you/') &&
        !page.includes('/404'),
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
