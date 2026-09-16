import type { SolutionSet } from './types';

/**
 * Subpaginas de operacao e de tecnologia.
 *
 * Apoio ao cliente e faturacao vinham das subpaginas do OMS; a pesquisa vinha
 * da seccao "Tecnologia". Sao temas que uma equipa avalia isoladamente quando
 * escolhe plataforma, por isso ficam com pagina propria.
 *
 * Nota sobre a comparacao da pesquisa: o site em producao compara com uma
 * ferramenta externa identificada pelo nome. Mantivemos os criterios e os
 * factos, do lado generico, ate a comparacao nominal ser validada.
 */

export const platformSupportCopy: SolutionSet = {
  platformCustomerCare: {
    pt: {
      meta: {
        title: 'Ferramentas de Customer Care — visão 360º do cliente e da encomenda',
        description:
          'Histórico completo do cliente, encomenda feita pelo apoio, vales de compensação, registo de incidências e devoluções com estorno automático.',
      },
      breadcrumb: 'Apoio ao Cliente',
      hero: {
        eyebrow: 'Plataforma OMS',
        title: 'Quem atende vê a encomenda inteira',
        lead: 'A maior parte das más experiências de apoio ao cliente começa na mesma frase: «não consigo ver isso daqui». Aqui, quem atende tem o histórico completo e pode agir sobre ele.',
        primary: 'Falar com especialista',
      },
      features: [
        {
          title: 'Histórico de encomendas',
          body: 'Acesso a todo o histórico do cliente e às incidências associadas a cada encomenda, num único ecrã.',
        },
        {
          title: 'Encomendar pelo cliente',
          body: 'A equipa de apoio pode colocar a encomenda em nome do cliente, com as mesmas regras e condições.',
        },
        {
          title: 'Vales de compensação',
          body: 'Emissão de vales e inserção de códigos de desconto no momento, sem escalar para outra equipa.',
        },
        {
          title: 'Registo de incidências',
          body: 'Cada ocorrência fica registada na encomenda, para que a conversa seguinte não comece do zero.',
        },
      ],
      sections: [
        {
          eyebrow: 'Cliente',
          title: 'Uma visão 360º, não três separadores',
          body: 'Consultar o histórico, alterar a morada de entrega, registar uma incidência ou aplicar um desconto são coisas que acontecem na mesma conversa. Fazem-se todas no mesmo sítio.',
          bullets: [
            'Encomendar pelo cliente',
            'Alterar morada de entrega',
            'Acesso ao histórico do cliente',
            'Registo de incidências',
            'Inserir códigos de desconto',
          ],
        },
        {
          eyebrow: 'Encomendas',
          title: 'O ciclo de vida completo, automatizado',
          body: 'O OMS foi desenhado para gerir grandes volumes de encomendas e automatizar o processo logístico, o que liberta a equipa para o que exige mesmo uma pessoa. É o que permite escalar para novos canais e mercados sem acrescentar proporcionalmente mais gente.',
          bullets: [
            'Centralização das encomendas',
            'Fluxo de encomendas automatizado',
            'Monitorização de pagamentos',
            'Gestão e atualização de stock',
          ],
          link: { route: 'platformOMS', label: 'Ver a Plataforma OMS' },
        },
        {
          eyebrow: 'Devoluções',
          title: 'Devoluções e trocas sem fricção',
          body: 'O fluxo completo é automatizado: registo da devolução ou troca, receção e validação dos artigos, estorno automático e criação da nota de crédito. E funciona entre canais — uma encomenda online pode ser devolvida em loja física.',
          bullets: [
            'Tracking da devolução ou troca',
            'Criação de notas de crédito',
            'Estornos automáticos',
            'Fluxo omnicanal, com devolução em loja física',
          ],
        },
      ],
      closing: {
        title: 'A sua equipa de apoio vê tudo?',
        body: 'Deixe o contacto e mostramos como fica o atendimento quando a informação está num sítio só.',
        points: [
          'Histórico completo acessível a quem atende',
          'Devoluções e estornos automatizados',
          'Fluxo omnicanal entre loja e e-commerce',
        ],
        submit: 'Falar com especialista',
      },
      related: ['platformOMS', 'platformPOS', 'platformInvoicing'],
    },

    en: {
      meta: {
        title: 'Customer Care Tools — a 360º view of the customer and the order',
        description:
          'Full customer history, orders placed on the customer’s behalf, compensation vouchers, incident logging and returns with automatic refunds.',
      },
      breadcrumb: 'Customer Care',
      hero: {
        eyebrow: 'OMS Platform',
        title: 'Whoever answers can see the whole order',
        lead: 'Most bad support experiences start with the same sentence: "I cannot see that from here." Here, whoever answers has the full history and can act on it.',
        primary: 'Talk to a specialist',
      },
      features: [
        {
          title: 'Order history',
          body: 'Access to the customer’s full history and to the incidents attached to each order, on one screen.',
        },
        {
          title: 'Order on the customer’s behalf',
          body: 'The support team can place the order for the customer, under the same rules and terms.',
        },
        {
          title: 'Compensation vouchers',
          body: 'Issue vouchers and apply discount codes on the spot, without escalating to another team.',
        },
        {
          title: 'Incident logging',
          body: 'Every incident is recorded against the order, so the next conversation does not start from scratch.',
        },
      ],
      sections: [
        {
          eyebrow: 'Customer',
          title: 'A 360º view, not three tabs',
          body: 'Checking history, changing a delivery address, logging an incident or applying a discount all happen in the same conversation. They all happen in the same place.',
          bullets: [
            'Order on the customer’s behalf',
            'Change the delivery address',
            'Access the customer history',
            'Log incidents',
            'Apply discount codes',
          ],
        },
        {
          eyebrow: 'Orders',
          title: 'The full lifecycle, automated',
          body: 'The OMS was designed to handle high order volumes and automate the logistics process, which frees the team for what genuinely needs a person. That is what lets you scale into new channels and markets without adding people in proportion.',
          bullets: [
            'Centralised orders',
            'Automated order flow',
            'Payment monitoring',
            'Stock management and updates',
          ],
          link: { route: 'platformOMS', label: 'See the OMS Platform' },
        },
        {
          eyebrow: 'Returns',
          title: 'Returns and exchanges without friction',
          body: 'The whole flow is automated: logging the return or exchange, receiving and validating the items, refunding automatically and issuing the credit note. And it works across channels — an online order can be returned in a physical store.',
          bullets: [
            'Return and exchange tracking',
            'Credit note creation',
            'Automatic refunds',
            'Omnichannel flow, with in-store returns',
          ],
        },
      ],
      closing: {
        title: 'Can your support team see everything?',
        body: 'Leave your details and we will show what support looks like when the information sits in one place.',
        points: [
          'Full history available to whoever answers',
          'Returns and refunds automated',
          'Omnichannel flow between store and e-commerce',
        ],
        submit: 'Talk to a specialist',
      },
      related: ['platformOMS', 'platformPOS', 'platformInvoicing'],
    },
  },

  platformInvoicing: {
    pt: {
      meta: {
        title: 'Faturação Integrada — certificada pela AT e dentro da plataforma',
        description:
          'Faturação certificada pela Autoridade Tributária, importação de faturas de sistema externo, personalização de documentos e impressão automática.',
      },
      breadcrumb: 'Faturação Integrada',
      hero: {
        eyebrow: 'Plataforma OMS',
        title: 'Faturar sem sair da plataforma',
        lead: 'Use o sistema de faturação integrado, certificado pela Autoridade Tributária, ou integre o seu. Em qualquer dos casos, a fatura sai do mesmo sítio onde a encomenda foi processada.',
        primary: 'Falar com especialista',
      },
      features: [
        {
          title: 'Módulos de faturação',
          body: 'Sistema de faturação integrado e certificado pela AT, pronto a emitir documentos conformes com a legislação portuguesa.',
        },
        {
          title: 'Integração externa',
          body: 'Se já tem um sistema de faturação, integra-se: as faturas podem ser criadas fora e importadas para a plataforma.',
        },
        {
          title: 'Cartas de porte',
          body: 'Documentação de expedição emitida e impressa automaticamente, em conjunto com o resto do processo logístico.',
        },
        {
          title: 'Devoluções',
          body: 'Notas de crédito e etiquetas de devolução tratadas no mesmo fluxo da encomenda original.',
        },
      ],
      sections: [
        {
          eyebrow: 'Documentos',
          title: 'A fatura também comunica',
          body: 'Os documentos podem ser personalizados e usados na estratégia de marketing, incluindo informação de campanhas. É um ponto de contacto que quase toda a gente ignora e que chega sempre ao cliente.',
          bullets: [
            'Criação de faturas na plataforma',
            'Importação de faturas de sistema externo',
            'Personalização dos documentos',
          ],
        },
        {
          eyebrow: 'Logística',
          title: 'Impressão automática, sem paragens',
          body: 'A impressão automatizada de documentos simplifica e acelera o processo logístico: faturas, cartas de porte e etiquetas de devolução saem sem ninguém ter de as pedir uma a uma.',
          bullets: ['Faturas', 'Cartas de porte', 'Etiquetas de devolução'],
          link: { route: 'platformPOS', label: 'Ver o POS Omnicanal' },
        },
      ],
      closing: {
        title: 'A faturação está fora da sua plataforma?',
        body: 'Deixe o contacto e vemos consigo o que muda com faturação certificada integrada.',
        points: [
          'Certificação da Autoridade Tributária incluída',
          'Integração com o seu sistema atual, se preferir',
          'Documentos de expedição no mesmo fluxo',
        ],
        submit: 'Falar com especialista',
      },
      related: ['platformOMS', 'platformPOS', 'integrations'],
    },

    en: {
      meta: {
        title: 'Integrated Invoicing — certified and inside the platform',
        description:
          'Invoicing certified by the Portuguese tax authority, import of invoices from external systems, document customisation and automatic printing.',
      },
      breadcrumb: 'Integrated Invoicing',
      hero: {
        eyebrow: 'OMS Platform',
        title: 'Invoice without leaving the platform',
        lead: 'Use the built-in invoicing system, certified by the Portuguese tax authority, or integrate your own. Either way, the invoice comes from the same place the order was processed.',
        primary: 'Talk to a specialist',
      },
      features: [
        {
          title: 'Invoicing modules',
          body: 'An integrated, certified invoicing system, ready to issue documents that comply with Portuguese law.',
        },
        {
          title: 'External integration',
          body: 'If you already have an invoicing system, it integrates: invoices can be created outside and imported into the platform.',
        },
        {
          title: 'Waybills',
          body: 'Shipping documentation issued and printed automatically, alongside the rest of the logistics process.',
        },
        {
          title: 'Returns',
          body: 'Credit notes and return labels handled in the same flow as the original order.',
        },
      ],
      sections: [
        {
          eyebrow: 'Documents',
          title: 'The invoice communicates too',
          body: 'Documents can be customised and used as part of the marketing strategy, campaign information included. It is a touchpoint almost everyone ignores, and one that always reaches the customer.',
          bullets: [
            'Invoice creation inside the platform',
            'Import of invoices from an external system',
            'Document customisation',
          ],
        },
        {
          eyebrow: 'Logistics',
          title: 'Automatic printing, no stoppages',
          body: 'Automated document printing simplifies and speeds up the logistics process: invoices, waybills and return labels come out without anyone requesting them one at a time.',
          bullets: ['Invoices', 'Waybills', 'Return labels'],
          link: { route: 'platformPOS', label: 'See the Omnichannel POS' },
        },
      ],
      closing: {
        title: 'Is invoicing outside your platform?',
        body: 'Leave your details and we will look at what changes with integrated certified invoicing.',
        points: [
          'Tax authority certification included',
          'Integration with your current system, if you prefer',
          'Shipping documents in the same flow',
        ],
        submit: 'Talk to a specialist',
      },
      related: ['platformOMS', 'platformPOS', 'integrations'],
    },
  },

  platformSearch: {
    pt: {
      meta: {
        title: 'Pesquisa Inteligente — nativa, em tempo real e sem feeds',
        description:
          'Pesquisa integrada na plataforma, com stock e preços em tempo real, preços e promoções por segmento, e sem feeds externos nem custos adicionais.',
      },
      breadcrumb: 'Pesquisa Inteligente',
      hero: {
        eyebrow: 'Tecnologia',
        title: 'A pesquisa que encontra tudo, em tempo real',
        lead: 'A pesquisa funciona de forma nativa na plataforma, sem depender de feeds externos, sincronizações ou processos intermédios. Qualquer alteração fica refletida de imediato.',
        primary: 'Falar com especialista',
      },
      features: [
        {
          title: 'Resultados sempre relevantes',
          body: 'A pesquisa interpreta o contexto do catálogo e responde à intenção do utilizador. Mesmo com termos imprecisos, os produtos certos aparecem organizados.',
        },
        {
          title: 'Velocidade de resposta',
          body: 'Resultados em milissegundos, com performance consistente mesmo em catálogos com milhares de produtos.',
        },
        {
          title: 'Aprendizagem contínua',
          body: 'O sistema analisa cliques, navegação e histórico de compras e torna os resultados progressivamente mais relevantes.',
        },
        {
          title: 'Filtros avançados',
          body: 'Refinamento por categoria, tamanho, cor ou preço, para encontrar depressa dentro de catálogos complexos.',
        },
      ],
      sections: [
        {
          eyebrow: 'Tempo real',
          title: 'O cliente vê o preço certo e o stock real',
          body: 'Quando a pesquisa depende de um ficheiro exportado, o cliente vê o catálogo de ontem. Aqui não há esse intervalo: qualquer alteração de preço, stock ou promoção fica refletida na pesquisa de imediato.',
          bullets: [
            'Preços por segmento, canal ou mercado apresentados automaticamente',
            'Regras promocionais aplicadas de forma dinâmica ao utilizador',
            'Consistência total entre o backoffice e o que o cliente vê',
          ],
        },
        {
          eyebrow: 'Operação',
          title: 'Menos uma peça para manter',
          body: 'Toda a lógica da pesquisa é gerida dentro do ecossistema da plataforma. Não há feed para gerir, nem indexação para monitorizar, nem mais uma subscrição para renovar — e isso nota-se sobretudo em operações com alterações frequentes.',
          bullets: [
            'Sem ficheiros ou feeds a sincronizar',
            'Sem indexação para monitorizar',
            'Incluída na plataforma, sem custo adicional',
          ],
        },
      ],
      comparison: {
        title: 'Pesquisa nativa ou ferramenta externa',
        lead: 'As ferramentas externas de pesquisa funcionam bem. A diferença aparece quando o catálogo, o stock ou os preços mudam várias vezes por dia.',
        genericTitle: 'Ferramenta externa',
        redicomTitle: 'Pesquisa Redicom',
        rows: [
          {
            topic: 'Integração com a plataforma',
            generic: 'Externa, baseada em feed ou script.',
            redicom: 'Nativa e total.',
          },
          {
            topic: 'Atualização de stock',
            generic: 'Dependente do feed e da reindexação.',
            redicom: 'Em tempo real.',
          },
          {
            topic: 'Atualização de preços',
            generic: 'Dependente do processamento do feed.',
            redicom: 'Em tempo real.',
          },
          {
            topic: 'Preços por segmento',
            generic: 'Limitado ao conteúdo do feed.',
            redicom: 'Sim, nativamente.',
          },
          {
            topic: 'Promoções segmentadas',
            generic: 'Limitado ao timing e ao conteúdo do feed.',
            redicom: 'Sim, nativamente.',
          },
          {
            topic: 'Consistência entre loja e pesquisa',
            generic: 'Pode haver atraso entre o backoffice e a pesquisa.',
            redicom: 'Muito elevada.',
          },
          {
            topic: 'Frequência de atualização',
            generic: 'Diária por defeito, com processamento manual possível.',
            redicom: 'Imediata e transacional.',
          },
          {
            topic: 'Complexidade técnica',
            generic: 'Exige gestão de feed, indexação e monitorização.',
            redicom: 'Reduzida.',
          },
          {
            topic: 'Custo',
            generic: 'Solução externa, normalmente paga à parte.',
            redicom: 'Incluída na plataforma.',
          },
        ],
      },
      closing: {
        title: 'A sua pesquisa mostra o catálogo de ontem?',
        body: 'Deixe o contacto e mostramos a diferença com o seu próprio catálogo.',
        points: [
          'Sem feeds, sem indexação, sem subscrição à parte',
          'Preços e promoções por segmento, nativamente',
          'Resultados em milissegundos',
        ],
        submit: 'Falar com especialista',
      },
      related: ['platformB2C', 'platformAnalytics', 'agentic'],
    },

    en: {
      meta: {
        title: 'Smart Search — native, real-time and feed-free',
        description:
          'Search built into the platform, with real-time stock and pricing, segment-specific prices and promotions, no external feeds and no extra cost.',
      },
      breadcrumb: 'Smart Search',
      hero: {
        eyebrow: 'Technology',
        title: 'Search that finds everything, in real time',
        lead: 'Search runs natively on the platform, with no dependence on external feeds, synchronisation or intermediate processes. Any change is reflected immediately.',
        primary: 'Talk to a specialist',
      },
      features: [
        {
          title: 'Consistently relevant results',
          body: 'Search reads the catalogue’s context and answers user intent. Even with imprecise terms, the right products come back organised.',
        },
        {
          title: 'Response speed',
          body: 'Results in milliseconds, with consistent performance even on catalogues of thousands of products.',
        },
        {
          title: 'Continuous learning',
          body: 'The system analyses clicks, navigation and purchase history, making results progressively more relevant.',
        },
        {
          title: 'Advanced filters',
          body: 'Refinement by category, size, colour or price, to find things quickly inside complex catalogues.',
        },
      ],
      sections: [
        {
          eyebrow: 'Real time',
          title: 'The customer sees the right price and the real stock',
          body: 'When search depends on an exported file, the customer sees yesterday’s catalogue. There is no such gap here: any change of price, stock or promotion shows up in search immediately.',
          bullets: [
            'Prices by segment, channel or market presented automatically',
            'Promotional rules applied dynamically per user',
            'Full consistency between the back office and what the customer sees',
          ],
        },
        {
          eyebrow: 'Operations',
          title: 'One less piece to maintain',
          body: 'All the search logic is managed inside the platform. There is no feed to manage, no indexing to monitor and no extra subscription to renew — and that shows most in operations that change several times a day.',
          bullets: [
            'No files or feeds to synchronise',
            'No indexing to monitor',
            'Included in the platform, at no extra cost',
          ],
        },
      ],
      comparison: {
        title: 'Native search or an external tool',
        lead: 'External search tools work well. The difference shows when catalogue, stock or prices change several times a day.',
        genericTitle: 'External tool',
        redicomTitle: 'Redicom Search',
        rows: [
          {
            topic: 'Platform integration',
            generic: 'External, based on a feed or script.',
            redicom: 'Native and complete.',
          },
          {
            topic: 'Stock updates',
            generic: 'Dependent on the feed and on reindexing.',
            redicom: 'Real time.',
          },
          {
            topic: 'Price updates',
            generic: 'Dependent on feed processing.',
            redicom: 'Real time.',
          },
          {
            topic: 'Segment-specific prices',
            generic: 'Limited to what the feed carries.',
            redicom: 'Yes, natively.',
          },
          {
            topic: 'Segmented promotions',
            generic: 'Limited by feed timing and content.',
            redicom: 'Yes, natively.',
          },
          {
            topic: 'Store and search consistency',
            generic: 'There can be a lag between back office and search.',
            redicom: 'Very high.',
          },
          {
            topic: 'Update frequency',
            generic: 'Daily by default, with possible manual processing.',
            redicom: 'Immediate and transactional.',
          },
          {
            topic: 'Technical complexity',
            generic: 'Requires feed management, indexing and monitoring.',
            redicom: 'Low.',
          },
          {
            topic: 'Cost',
            generic: 'An external solution, usually paid separately.',
            redicom: 'Included in the platform.',
          },
        ],
      },
      closing: {
        title: 'Does your search show yesterday’s catalogue?',
        body: 'Leave your details and we will show the difference on your own catalogue.',
        points: [
          'No feeds, no indexing, no separate subscription',
          'Segment-specific prices and promotions, natively',
          'Results in milliseconds',
        ],
        submit: 'Talk to a specialist',
      },
      related: ['platformB2C', 'platformAnalytics', 'agentic'],
    },
  },
};
