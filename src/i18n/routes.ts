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

  // Subpaginas do site anterior, cada uma com pagina propria: eram temas com
  // intencao de pesquisa autonoma e conteudo suficiente para se sustentarem.
  platformMarketplaces: { pt: 'plataforma/marketplaces', en: 'platform/marketplaces' },
  platformGlobal: { pt: 'plataforma/comercio-global', en: 'platform/global-commerce' },
  platformPersonalization: {
    pt: 'plataforma/marketing-personalizado',
    en: 'platform/personalised-marketing',
  },
  platformB2BTools: { pt: 'plataforma/ferramentas-b2b', en: 'platform/b2b-tools' },
  platformB2BMarketing: { pt: 'plataforma/marketing-b2b', en: 'platform/b2b-marketing' },
  platformCustomerCare: { pt: 'plataforma/apoio-ao-cliente', en: 'platform/customer-care' },
  platformInvoicing: {
    pt: 'plataforma/faturacao-integrada',
    en: 'platform/integrated-invoicing',
  },
  platformConversion: {
    pt: 'plataforma/ferramentas-de-conversao',
    en: 'platform/conversion-tools',
  },
  platformSegmentation: { pt: 'plataforma/segmentacao', en: 'platform/segmentation' },
  platformSearch: { pt: 'plataforma/pesquisa-inteligente', en: 'platform/smart-search' },

  // --- Servicos Cloud -------------------------------------------------
  // Seccao propria, como no site atual: sao servicos que correm sobre a
  // plataforma, nao modulos da plataforma. Ficarem dentro de "Plataforma"
  // era a principal confusao do menu anterior.
  services: { pt: 'servicos', en: 'services' },
  serviceCampaigns: {
    pt: 'servicos/campanhas-automatizadas',
    en: 'services/automated-campaigns',
  },
  serviceEmail: { pt: 'servicos/email-marketing', en: 'services/email-marketing' },
  serviceSMS: { pt: 'servicos/sms-marketing', en: 'services/sms-marketing' },
  serviceDescriptions: { pt: 'servicos/descricoes-ai', en: 'services/ai-descriptions' },
  serviceSEO: { pt: 'servicos/seo-automatico', en: 'services/automated-seo' },

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
  integrations: { pt: 'integracoes', en: 'integrations' },

  // Estas duas deixaram de ser paginas: sao seccoes do Sobre Nos. Ficam no
  // mapa porque continuam a ser referidas por nome em todo o lado — o path()
  // resolve-as para a ancora certa (ver ANCHORED abaixo).
  why: { pt: 'porque-redicom', en: 'why-redicom' },
  audience: { pt: 'para-quem-e-a-redicom', en: 'who-redicom-is-for' },

  // --- Prova ----------------------------------------------------------
  cases: { pt: 'casos-de-sucesso', en: 'success-stories' },

  // --- Documentacao ---------------------------------------------------
  docs: { pt: 'documentacao', en: 'documentation' },
} as const;

export type RouteId = keyof typeof routes;

/**
 * Rotas que nao geram pagina propria: resolvem para uma ancora dentro de
 * outra pagina.
 *
 * "Porquê Redicom" e "Para quem é a Redicom" respondem a mesma pergunta do
 * visitante — quem sao voces, isto serve-me, porque havia de ser convosco — e
 * como paginas soltas dividiam o argumento em tres. Passaram a ser as duas
 * seccoes centrais do Sobre Nos. Manter aqui o id significa que nenhuma
 * ligacao existente parte: o path() encaminha-as para a seccao certa.
 */
export const ANCHORED: Partial<Record<RouteId, { target: RouteId; hash: string }>> = {
  why: { target: 'about', hash: 'porque-redicom' },
  audience: { target: 'about', hash: 'para-quem' },
};

/**
 * Paginas de um so segmento ja construidas.
 *
 * Vive aqui, e nao na pagina que as gera, porque o getStaticPaths do Astro
 * corre num contexto proprio: so pode contar com o que vem de importacoes.
 */
export const SINGLE_PAGE_IDS = [
  'platform',
  'services',
  'fashion',
  'agentic',
  'integrations',
  'cases',
  'docs',
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
  const anchored = ANCHORED[id];
  if (anchored) return `${path(anchored.target, lang)}#${anchored.hash}`;

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
 * Caminho para um caso de sucesso.
 *
 * O slug e o mesmo nos dois idiomas — e o nome do cliente — por isso so muda
 * o segmento da seccao: /pt/casos-de-sucesso/<slug>/ e
 * /en/success-stories/<slug>/.
 */
export function casePath(slug: string, lang: Lang): string {
  return `${path('cases', lang)}${slug}/`;
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

  // Casos de sucesso: existem nos dois idiomas com o mesmo slug, por isso so
  // muda o segmento da seccao.
  const casesPrefix = routes.cases[from] + '/';
  if (rest.startsWith(casesPrefix)) {
    return `/${to}/${routes.cases[to]}/${rest.slice(casesPrefix.length)}/`;
  }

  // Documentacao: os artigos do manual so existem em portugues. O equivalente
  // no outro idioma e o indice da documentacao, nao um artigo que nao existe.
  if (rest.startsWith(routes.docs[from] + '/')) {
    return path('docs', to);
  }

  return `/${to}/`;
}
