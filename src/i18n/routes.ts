/**
 * Mapa unico de rotas do site.
 *
 * Cada pagina tem um id estavel e um slug por idioma. Tudo o que precise de
 * construir um URL — menus, rodape, hreflang, seletor de idioma, redirects —
 * passa por aqui, para que PT e EN nunca saiam do sitio um do outro.
 */

export const LANGUAGES = ['pt', 'en'] as const;
export type Lang = (typeof LANGUAGES)[number];
export const DEFAULT_LANG: Lang = 'pt';

export const LANGUAGE_NAMES: Record<Lang, string> = {
  pt: 'Português',
  en: 'English',
};

/** Codigo completo para o atributo lang e para hreflang. */
export const LANGUAGE_TAGS: Record<Lang, string> = {
  pt: 'pt-PT',
  en: 'en',
};

export const routes = {
  // --- Institucional --------------------------------------------------
  home: { pt: '', en: '' },
  about: { pt: 'sobre-nos', en: 'about-us' },
  contact: { pt: 'contactos', en: 'contact' },
  careers: { pt: 'carreiras', en: 'careers' },
  privacy: { pt: 'politica-de-privacidade', en: 'privacy-policy' },
  thanks: { pt: 'obrigado', en: 'thank-you' },

  // --- Plataforma -----------------------------------------------------
  platform: { pt: 'plataforma', en: 'platform' },
  platformB2C: { pt: 'plataforma/b2c', en: 'platform/b2c' },
  platformB2B: { pt: 'plataforma/b2b', en: 'platform/b2b' },
  platformOMS: { pt: 'plataforma/oms', en: 'platform/oms' },
  platformMarketingCloud: {
    pt: 'plataforma/marketing-cloud',
    en: 'platform/marketing-cloud',
  },
  platformPOS: { pt: 'plataforma/pos-omnicanal', en: 'platform/omnichannel-pos' },
  platformOmnichannel: {
    pt: 'plataforma/tecnologia-omnicanal',
    en: 'platform/omnichannel-technology',
  },
  platformAnalytics: { pt: 'plataforma/analytics', en: 'platform/analytics' },
  platformMobileApp: { pt: 'plataforma/mobile-app', en: 'platform/mobile-app' },

  // --- Fashion Retail -------------------------------------------------
  fashion: { pt: 'fashion-retail', en: 'fashion-retail' },
  fashionB2C: { pt: 'fashion-retail/commerce-b2c', en: 'fashion-retail/commerce-b2c' },
  fashionB2B: { pt: 'fashion-retail/wholesale-b2b', en: 'fashion-retail/wholesale-b2b' },
  fashionOmnichannel: {
    pt: 'fashion-retail/operacao-omnicanal',
    en: 'fashion-retail/omnichannel-operation',
  },
  fashionPOS: {
    pt: 'fashion-retail/pos-omnicanal',
    en: 'fashion-retail/omnichannel-pos',
  },
  fashionAIStudio: { pt: 'fashion-retail/ai-studio', en: 'fashion-retail/ai-studio' },
  fashionAIAssistant: {
    pt: 'fashion-retail/assistente-ia',
    en: 'fashion-retail/ai-assistant',
  },
  fashionMarketing: {
    pt: 'fashion-retail/marketing-e-automacao',
    en: 'fashion-retail/marketing-and-automation',
  },
  fashionAnalytics: {
    pt: 'fashion-retail/analytics-e-intelligence',
    en: 'fashion-retail/analytics-and-intelligence',
  },

  // --- Diferenciacao e tendencia --------------------------------------
  agentic: { pt: 'agentic-commerce', en: 'agentic-commerce' },
  why: { pt: 'porque-redicom', en: 'why-redicom' },

  // --- Documentacao ---------------------------------------------------
  docs: { pt: 'documentacao', en: 'documentation' },
} as const;

export type RouteId = keyof typeof routes;

/**
 * Paginas de um so segmento ja construidas.
 *
 * Vive aqui, e nao na pagina que as gera, porque o getStaticPaths do Astro
 * corre num contexto proprio: so pode contar com o que vem de importacoes.
 * A rota 'docs' esta definida acima mas fora desta lista ate a seccao de
 * documentacao existir.
 */
export const SINGLE_PAGE_IDS = [
  'platform',
  'fashion',
  'agentic',
  'why',
  'about',
  'contact',
  'careers',
  'privacy',
  'thanks',
] as const;

export type SinglePageId = (typeof SINGLE_PAGE_IDS)[number];

/**
 * Constroi o caminho absoluto de uma rota, com prefixo de idioma e barra final.
 *   path('platformB2C', 'pt') -> '/pt/plataforma/b2c/'
 *   path('home', 'en')        -> '/en/'
 */
export function path(id: RouteId, lang: Lang): string {
  const slug = routes[id][lang];
  return slug ? `/${lang}/${slug}/` : `/${lang}/`;
}

/**
 * Caminho para um artigo de documentacao, cujo slug vem da content collection.
 */
export function docsPath(slug: string, lang: Lang): string {
  return `${path('docs', lang)}${slug}/`;
}

/**
 * Dado o caminho atual, devolve o equivalente no outro idioma.
 * Usado pelo seletor de idioma e pelas tags hreflang.
 */
export function alternatePath(currentPath: string, from: Lang, to: Lang): string {
  const normalized = currentPath.replace(/\/+$/, '') + '/';
  const prefix = `/${from}/`;
  if (!normalized.startsWith(prefix)) return `/${to}/`;

  const rest = normalized.slice(prefix.length).replace(/\/$/, '');
  if (!rest) return `/${to}/`;

  for (const id of Object.keys(routes) as RouteId[]) {
    if (routes[id][from] === rest) return path(id, to);
  }

  // Documentacao: o slug do artigo mantem-se, so muda o segmento base.
  const docsPrefix = routes.docs[from] + '/';
  if (rest.startsWith(docsPrefix)) {
    return `/${to}/${routes.docs[to]}/${rest.slice(docsPrefix.length)}/`;
  }

  return `/${to}/`;
}
