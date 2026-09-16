import { path, type Lang, type RouteId } from '@i18n/routes';

/**
 * Estrutura do menu principal e do rodape.
 *
 * Tres regras governam este ficheiro:
 *
 * 1. O primeiro nivel tem seis entradas e nao mais. Sao as seis coisas que um
 *    visitante procura: o que e (Plataforma), o que corre por cima
 *    (Servicos), a versao para o meu setor (Fashion Retail), a prova
 *    (Casos de Sucesso), quem sao (Sobre Nos) e como falo convosco
 *    (Contactos).
 *
 * 2. O menu nao e um mapa do site. Cada painel mostra o essencial; a cauda
 *    longa vive na propria pagina-mae, que ja a lista toda.
 *
 * 3. O cartao da direita e sempre a mesma coisa em todos os paineis — a
 *    pagina-mae — e diz pelo nome para onde vai ("Ver a Plataforma"), em vez
 *    de um "Saber mais" que nao se percebe a que se refere.
 */

export type NavLink = {
  route: RouteId;
  label: Record<Lang, string>;
  description?: Record<Lang, string>;
  /** Etiqueta curta ao lado do nome, para assinalar novidade. */
  badge?: Record<Lang, string>;
};

export type NavGroup = {
  id: string;
  title: Record<Lang, string>;
  links: NavLink[];
};

export type NavItem = {
  id: string;
  route: RouteId;
  label: Record<Lang, string>;
  /** Quando existe, o item abre um painel em vez de navegar diretamente. */
  groups?: NavGroup[];
  /** Ligacoes soltas no fundo do painel, fora dos grupos. */
  extras?: NavLink[];
  /** Cartao de destaque: e sempre a pagina-mae do painel. */
  featured?: {
    route: RouteId;
    title: Record<Lang, string>;
    body: Record<Lang, string>;
    cta: Record<Lang, string>;
  };
};

export const mainNav: NavItem[] = [
  {
    id: 'platform',
    route: 'platform',
    label: { pt: 'Plataforma', en: 'Platform' },
    groups: [
      {
        id: 'platforms',
        title: { pt: 'Plataformas', en: 'Platforms' },
        links: [
          {
            route: 'platformB2C',
            label: { pt: 'Plataforma B2C', en: 'B2C Platform' },
            description: {
              pt: 'A plataforma cloud utilizada pelos grandes retalhistas nacionais',
              en: 'The cloud platform used by leading Portuguese retailers',
            },
          },
          {
            route: 'platformB2B',
            label: { pt: 'Plataforma B2B', en: 'B2B Platform' },
            description: {
              pt: 'Solução flexível para distribuidores e fabricantes',
              en: 'A flexible solution for distributors and manufacturers',
            },
          },
          {
            route: 'platformOMS',
            label: { pt: 'Plataforma OMS', en: 'OMS Platform' },
            description: {
              pt: 'Gestão de encomendas automatizada, de ponta a ponta',
              en: 'End-to-end automated order management',
            },
          },
          {
            route: 'platformMarketingCloud',
            label: { pt: 'Marketing Cloud', en: 'Marketing Cloud' },
            description: {
              pt: 'Segmentação automática e campanhas cliente a cliente',
              en: 'Automatic segmentation and customer-by-customer campaigns',
            },
          },
        ],
      },
      {
        id: 'technology',
        title: { pt: 'Tecnologia', en: 'Technology' },
        links: [
          {
            route: 'platformOmnichannel',
            label: { pt: 'Tecnologia Omnicanal', en: 'Omnichannel Technology' },
            description: {
              pt: 'Todos os canais numa única operação',
              en: 'Every channel in a single operation',
            },
          },
          {
            route: 'platformPOS',
            label: { pt: 'POS Omnicanal', en: 'Omnichannel POS' },
            description: {
              pt: 'Liga as lojas físicas à loja online, sem integrações',
              en: 'Connects physical stores to the online store, with no integrations',
            },
          },
          {
            route: 'platformMobileApp',
            label: { pt: 'Mobile App', en: 'Mobile App' },
            description: {
              pt: 'Aplicação móvel pronta a utilizar sobre a mesma plataforma',
              en: 'A ready-to-use mobile app on the same platform',
            },
          },
          {
            route: 'platformAnalytics',
            label: { pt: 'Redicom Analytics', en: 'Redicom Analytics' },
            description: {
              pt: 'A visão completa da performance do seu comércio digital',
              en: 'The complete view of your digital commerce performance',
            },
          },
          {
            route: 'agentic',
            label: { pt: 'Agentic Commerce', en: 'Agentic Commerce' },
            badge: { pt: 'Novo', en: 'New' },
            description: {
              pt: 'Preparar o catálogo para quem compra através de assistentes de IA',
              en: 'Getting the catalogue ready for people who buy through AI assistants',
            },
          },
        ],
      },
    ],
    extras: [
      { route: 'integrations', label: { pt: 'Integrações', en: 'Integrations' } },
      { route: 'docs', label: { pt: 'Documentação', en: 'Documentation' } },
    ],
    featured: {
      route: 'platform',
      title: {
        pt: 'Redicom Commerce Cloud',
        en: 'Redicom Commerce Cloud',
      },
      body: {
        pt: 'B2C, B2B, OMS, POS e marketing na mesma base. A página-mãe lista todos os temas, incluindo os que não cabem neste menu.',
        en: 'B2C, B2B, OMS, POS and marketing on one foundation. The overview page lists every topic, including the ones that do not fit in this menu.',
      },
      cta: { pt: 'Ver a Plataforma', en: 'See the Platform' },
    },
  },

  {
    id: 'services',
    route: 'services',
    label: { pt: 'Serviços', en: 'Services' },
    groups: [
      {
        id: 'cloud-services',
        title: { pt: 'Serviços Cloud', en: 'Cloud Services' },
        links: [
          {
            route: 'serviceCampaigns',
            label: { pt: 'Campanhas Automatizadas', en: 'Automated Campaigns' },
            description: {
              pt: 'Jornadas prontas a ativar, sem trabalho manual',
              en: 'Ready-made journeys, with no manual work',
            },
          },
          {
            route: 'serviceEmail',
            label: { pt: 'Email Marketing', en: 'Email Marketing' },
            description: {
              pt: 'Emails dinâmicos, sem plugins nem sincronizações',
              en: 'Dynamic emails, with no plugins and no syncing',
            },
          },
          {
            route: 'serviceSMS',
            label: { pt: 'SMS Marketing', en: 'SMS Marketing' },
            description: {
              pt: 'Login automático e retorno medido encomenda a encomenda',
              en: 'Automatic login and return measured order by order',
            },
          },
          {
            route: 'serviceDescriptions',
            label: { pt: 'Descrições AI', en: 'AI Descriptions' },
            description: {
              pt: 'Descrições de produto geradas e traduzidas automaticamente',
              en: 'Product descriptions generated and translated automatically',
            },
          },
          {
            route: 'serviceSEO',
            label: { pt: 'SEO Automático', en: 'Automated SEO' },
            description: {
              pt: 'Metadados criados e reavaliados pelo sistema, produto a produto',
              en: 'Metadata written and re-evaluated by the system, product by product',
            },
          },
        ],
      },
    ],
    featured: {
      route: 'services',
      title: { pt: 'Serviços Cloud de Marketing', en: 'Cloud Marketing Services' },
      body: {
        pt: 'Correm sobre a plataforma que já tem, sem ferramentas externas nem sincronizações.',
        en: 'They run on the platform you already have, with no external tools and no syncing.',
      },
      cta: { pt: 'Ver os Serviços', en: 'See the Services' },
    },
  },

  {
    id: 'fashion',
    route: 'fashion',
    label: { pt: 'Fashion Retail', en: 'Fashion Retail' },
    groups: [
      {
        id: 'fashion-commerce',
        title: { pt: 'Vender', en: 'Sell' },
        links: [
          {
            route: 'fashionB2C',
            label: { pt: 'Commerce B2C', en: 'B2C Commerce' },
            description: {
              pt: 'Matrizes de tamanho e cor sem limites artificiais',
              en: 'Size and colour matrices without artificial limits',
            },
          },
          {
            route: 'fashionB2B',
            label: { pt: 'Wholesale B2B', en: 'B2B Wholesale' },
            description: {
              pt: 'Pré-encomendas, pre-packs e preços por cliente',
              en: 'Pre-orders, pre-packs and customer-specific pricing',
            },
          },
          {
            route: 'fashionOmnichannel',
            label: { pt: 'Operação Omnicanal', en: 'Omnichannel Operation' },
            description: {
              pt: 'Stock, cliente e venda unificados em todos os pontos',
              en: 'Stock, customer and sales unified across every touchpoint',
            },
          },
          {
            route: 'fashionPOS',
            label: { pt: 'POS Omnicanal', en: 'Omnichannel POS' },
            description: {
              pt: 'Loja física ligada ao mesmo inventário e ao mesmo cliente',
              en: 'The store connected to the same inventory and the same customer',
            },
          },
        ],
      },
      {
        id: 'fashion-intelligence',
        title: { pt: 'Acelerar', en: 'Accelerate' },
        links: [
          {
            route: 'fashionAIStudio',
            label: { pt: 'AI Studio', en: 'AI Studio' },
            description: {
              pt: 'Produção visual de coleções à velocidade do mercado',
              en: 'Collection imagery at the speed of the market',
            },
          },
          {
            route: 'fashionAIAssistant',
            label: { pt: 'Assistente IA', en: 'AI Assistant' },
            description: {
              pt: 'Atendimento que conhece catálogo, stock e regras de negócio',
              en: 'Support that knows your catalogue, stock and business rules',
            },
          },
          {
            route: 'fashionMarketing',
            label: { pt: 'Marketing e Automação', en: 'Marketing and Automation' },
            description: {
              pt: 'Campanhas orientadas para performance no retalho de moda',
              en: 'Performance-driven campaigns for fashion retail',
            },
          },
          {
            route: 'fashionAnalytics',
            label: { pt: 'Analytics e Intelligence', en: 'Analytics and Intelligence' },
            description: {
              pt: 'Decisões de coleção e margem com dados em tempo real',
              en: 'Collection and margin decisions on real-time data',
            },
          },
        ],
      },
    ],
    featured: {
      route: 'fashion',
      title: { pt: 'Fashion Retail', en: 'Fashion Retail' },
      body: {
        pt: 'Sazonalidade, devoluções e matrizes complexas tratadas como regra, não como exceção.',
        en: 'Seasonality, returns and complex matrices handled as the rule, not the exception.',
      },
      cta: { pt: 'Ver Fashion Retail', en: 'See Fashion Retail' },
    },
  },

  {
    id: 'cases',
    route: 'cases',
    label: { pt: 'Casos de Sucesso', en: 'Success Stories' },
  },
  {
    id: 'about',
    route: 'about',
    label: { pt: 'Sobre Nós', en: 'About Us' },
  },
  {
    id: 'contact',
    route: 'contact',
    label: { pt: 'Contactos', en: 'Contact' },
  },
];

/**
 * Ligacoes que nao merecem lugar no menu principal mas tem de existir no
 * telemovel, onde o rodape fica longe.
 */
export const utilityNav: NavLink[] = [
  { route: 'docs', label: { pt: 'Documentação', en: 'Documentation' } },
  { route: 'careers', label: { pt: 'Trabalhe Connosco', en: 'Careers' } },
];

export const footerNav: NavGroup[] = [
  {
    id: 'platform',
    title: { pt: 'Plataforma', en: 'Platform' },
    links: [
      { route: 'platform', label: { pt: 'Visão geral', en: 'Overview' } },
      { route: 'platformB2C', label: { pt: 'Plataforma B2C', en: 'B2C Platform' } },
      { route: 'platformB2B', label: { pt: 'Plataforma B2B', en: 'B2B Platform' } },
      { route: 'platformOMS', label: { pt: 'Plataforma OMS', en: 'OMS Platform' } },
      {
        route: 'platformMarketingCloud',
        label: { pt: 'Marketing Cloud', en: 'Marketing Cloud' },
      },
      { route: 'integrations', label: { pt: 'Integrações', en: 'Integrations' } },
    ],
  },
  {
    id: 'services',
    title: { pt: 'Serviços', en: 'Services' },
    links: [
      { route: 'services', label: { pt: 'Visão geral', en: 'Overview' } },
      {
        route: 'serviceCampaigns',
        label: { pt: 'Campanhas Automatizadas', en: 'Automated Campaigns' },
      },
      { route: 'serviceEmail', label: { pt: 'Email Marketing', en: 'Email Marketing' } },
      { route: 'serviceSMS', label: { pt: 'SMS Marketing', en: 'SMS Marketing' } },
      { route: 'serviceDescriptions', label: { pt: 'Descrições AI', en: 'AI Descriptions' } },
      { route: 'serviceSEO', label: { pt: 'SEO Automático', en: 'Automated SEO' } },
    ],
  },
  {
    id: 'fashion',
    title: { pt: 'Fashion Retail', en: 'Fashion Retail' },
    links: [
      { route: 'fashion', label: { pt: 'Visão geral', en: 'Overview' } },
      { route: 'fashionB2C', label: { pt: 'Commerce B2C', en: 'B2C Commerce' } },
      { route: 'fashionB2B', label: { pt: 'Wholesale B2B', en: 'B2B Wholesale' } },
      { route: 'fashionAIStudio', label: { pt: 'AI Studio', en: 'AI Studio' } },
      { route: 'fashionAIAssistant', label: { pt: 'Assistente IA', en: 'AI Assistant' } },
    ],
  },
  {
    id: 'company',
    title: { pt: 'Redicom', en: 'Redicom' },
    links: [
      { route: 'about', label: { pt: 'Sobre Nós', en: 'About Us' } },
      { route: 'cases', label: { pt: 'Casos de Sucesso', en: 'Success Stories' } },
      { route: 'agentic', label: { pt: 'Agentic Commerce', en: 'Agentic Commerce' } },
      { route: 'docs', label: { pt: 'Documentação', en: 'Documentation' } },
      { route: 'careers', label: { pt: 'Trabalhe Connosco', en: 'Careers' } },
      { route: 'contact', label: { pt: 'Contactos', en: 'Contact' } },
    ],
  },
];

/** Resolve uma NavLink para href + texto no idioma pedido. */
export function resolveLink(link: NavLink, lang: Lang) {
  return {
    href: path(link.route, lang),
    label: link.label[lang],
    description: link.description?.[lang],
    badge: link.badge?.[lang],
  };
}
