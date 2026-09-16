import { path, type Lang, type RouteId } from '@i18n/routes';

/**
 * Estrutura do menu principal e do rodape.
 *
 * As descricoes curtas aparecem no mega-menu: dao contexto antes do clique e
 * reduzem os saltos entre paginas — o menu passa a ser parte da explicacao da
 * plataforma, nao apenas uma lista de destinos.
 */

export type NavLink = {
  route: RouteId;
  label: Record<Lang, string>;
  description?: Record<Lang, string>;
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
  featured?: {
    route: RouteId;
    title: Record<Lang, string>;
    body: Record<Lang, string>;
  };
};

export const mainNav: NavItem[] = [
  {
    id: 'platform',
    route: 'platform',
    label: { pt: 'Plataforma', en: 'Platform' },
    groups: [
      {
        id: 'commerce',
        title: { pt: 'Comércio', en: 'Commerce' },
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
        id: 'operation',
        title: { pt: 'Operação', en: 'Operations' },
        links: [
          {
            route: 'platformPOS',
            label: { pt: 'POS Omnicanal', en: 'Omnichannel POS' },
            description: {
              pt: 'Liga as lojas físicas à loja online, sem integrações',
              en: 'Connects physical stores to the online store, with no integrations',
            },
          },
          {
            route: 'platformOmnichannel',
            label: { pt: 'Tecnologia Omnicanal', en: 'Omnichannel Technology' },
            description: {
              pt: 'Todos os canais numa única operação',
              en: 'Every channel in a single operation',
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
            route: 'platformMobileApp',
            label: { pt: 'Mobile App', en: 'Mobile App' },
            description: {
              pt: 'Aplicação móvel pronta a utilizar sobre a mesma plataforma',
              en: 'A ready-to-use mobile app on the same platform',
            },
          },
        ],
      },
    ],
    featured: {
      route: 'platform',
      title: {
        pt: 'Redicom Commerce Cloud',
        en: 'Redicom Commerce Cloud',
      },
      body: {
        pt: 'B2C, B2B, OMS, POS e marketing na mesma base. Veja como a plataforma encaixa na sua operação.',
        en: 'B2C, B2B, OMS, POS and marketing on one foundation. See how the platform fits your operation.',
      },
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
      title: {
        pt: 'Feita para marcas de moda',
        en: 'Built for fashion brands',
      },
      body: {
        pt: 'Sazonalidade, devoluções e matrizes complexas tratadas como regra, não como exceção.',
        en: 'Seasonality, returns and complex matrices handled as the rule, not the exception.',
      },
    },
  },

  {
    id: 'agentic',
    route: 'agentic',
    label: { pt: 'Agentic Commerce', en: 'Agentic Commerce' },
  },
  {
    id: 'why',
    route: 'why',
    label: { pt: 'Porquê Redicom', en: 'Why Redicom' },
  },
];

/**
 * Ligacoes secundarias, a direita do menu.
 *
 * A Documentacao (o Manual de Instrucoes do backoffice) ainda nao esta
 * migrada. Fica fora do menu ate existir, para que nenhum link do site leve a
 * uma pagina inexistente — a rota continua definida em routes.ts e basta
 * repor a linha quando a seccao estiver pronta.
 */
export const utilityNav: NavLink[] = [
  { route: 'about', label: { pt: 'Sobre Nós', en: 'About Us' } },
  { route: 'contact', label: { pt: 'Contactos', en: 'Contact' } },
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
      { route: 'platformPOS', label: { pt: 'POS Omnicanal', en: 'Omnichannel POS' } },
      {
        route: 'platformOmnichannel',
        label: { pt: 'Tecnologia Omnicanal', en: 'Omnichannel Technology' },
      },
      { route: 'platformAnalytics', label: { pt: 'Redicom Analytics', en: 'Redicom Analytics' } },
      { route: 'platformMobileApp', label: { pt: 'Mobile App', en: 'Mobile App' } },
    ],
  },
  {
    id: 'fashion',
    title: { pt: 'Fashion Retail', en: 'Fashion Retail' },
    links: [
      { route: 'fashion', label: { pt: 'Visão geral', en: 'Overview' } },
      { route: 'fashionB2C', label: { pt: 'Commerce B2C', en: 'B2C Commerce' } },
      { route: 'fashionB2B', label: { pt: 'Wholesale B2B', en: 'B2B Wholesale' } },
      {
        route: 'fashionOmnichannel',
        label: { pt: 'Operação Omnicanal', en: 'Omnichannel Operation' },
      },
      { route: 'fashionPOS', label: { pt: 'POS Omnicanal', en: 'Omnichannel POS' } },
      { route: 'fashionAIStudio', label: { pt: 'AI Studio', en: 'AI Studio' } },
      { route: 'fashionAIAssistant', label: { pt: 'Assistente IA', en: 'AI Assistant' } },
      {
        route: 'fashionMarketing',
        label: { pt: 'Marketing e Automação', en: 'Marketing and Automation' },
      },
      {
        route: 'fashionAnalytics',
        label: { pt: 'Analytics e Intelligence', en: 'Analytics and Intelligence' },
      },
    ],
  },
  {
    id: 'company',
    title: { pt: 'Redicom', en: 'Redicom' },
    links: [
      { route: 'why', label: { pt: 'Porquê Redicom', en: 'Why Redicom' } },
      { route: 'agentic', label: { pt: 'Agentic Commerce', en: 'Agentic Commerce' } },
      { route: 'about', label: { pt: 'Sobre Nós', en: 'About Us' } },
      { route: 'careers', label: { pt: 'Trabalhe Connosco', en: 'Careers' } },
      { route: 'contact', label: { pt: 'Contactos', en: 'Contact' } },
      { route: 'privacy', label: { pt: 'Política de Privacidade', en: 'Privacy Policy' } },
    ],
  },
];

/** Resolve uma NavLink para href + texto no idioma pedido. */
export function resolveLink(link: NavLink, lang: Lang) {
  return {
    href: path(link.route, lang),
    label: link.label[lang],
    description: link.description?.[lang],
  };
}
