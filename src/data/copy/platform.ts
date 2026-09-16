import type { SolutionSet } from './types';

/**
 * Paginas da Redicom Commerce Cloud.
 *
 * O conteudo vem das paginas em producao (setembro de 2026), reescrito para o
 * tom de voz do Manual de Marca: primeira pessoa do plural, beneficio para o
 * negocio antes da funcionalidade, e afirmacoes especificas em vez de
 * "tecnologia inovadora para o futuro".
 *
 * As subpaginas antigas (Marketplaces, Comercio Global, Integracoes,
 * Segmentacao, Campanhas, Email, SMS, ...) foram absorvidas como seccoes das
 * paginas principais: eram finas de mais para competir sozinhas em pesquisa e
 * obrigavam a saltos constantes durante a leitura.
 */

export const platformCopy: SolutionSet = {
  platformB2C: {
    pt: {
      meta: {
        title: 'Plataforma B2C: comércio online multimercado e omnicanal',
        description:
          'A plataforma cloud utilizada pelos grandes retalhistas nacionais: arquitetura headless, editor drag & drop, marketplaces, comércio global e gestão de encomendas automatizada.',
      },
      breadcrumb: 'Plataforma B2C',
      hero: {
        eyebrow: 'Plataforma B2C',
        title: 'Uma experiência de compra verdadeiramente omnicanal',
        lead: 'Plataforma cloud multimercado e omnicanal, utilizada pela maioria dos grandes retalhistas nacionais. O catálogo, o stock e o cliente são os mesmos em todos os canais: não há integrações a manter entre eles.',
        primary: 'Pedir proposta',
      },
      features: [
        {
          title: 'Editor de páginas drag & drop',
          body: 'Editor de conteúdos flexível, com templates que permitem criar páginas ricas e responsivas sem depender de desenvolvimento.',
        },
        {
          title: 'Gestão de encomendas automatizada',
          body: 'A solução OMS otimiza todo o processo logístico e liberta a equipa para o que exige decisão humana.',
        },
        {
          title: 'Experiência de compra omnicanal',
          body: 'Vários fluxos de compra entre loja online e loja física, para que seja o cliente a escolher como e onde compra.',
        },
        {
          title: 'Ferramentas de personalização',
          body: 'Segmentação automática que permite criar campanhas e condições de venda personalizadas, cliente a cliente.',
        },
      ],
      sections: [
        {
          eyebrow: 'Arquitetura',
          title: 'Headless commerce, sem reescrever a operação',
          body: 'O front-end está desligado das funcionalidades de comércio do back-end. Isso significa que pode redesenhar a montra, testar uma nova experiência ou manter várias versões em simultâneo sem tocar nas regras de negócio, no catálogo ou no processo de encomenda.',
          bullets: [
            'Evolução do front-end independente do back-office',
            'Várias frentes de loja sobre a mesma operação',
            'Atualizações da plataforma sem parar a loja',
          ],
        },
        {
          eyebrow: 'Autonomia',
          title: 'Criação de páginas sem esperar por desenvolvimento',
          body: 'Defina de forma simples como o conteúdo e os catálogos de produto são apresentados. O editor drag & drop dá à equipa de marketing autonomia real sobre a montra: campanhas, landing pages e destaques de coleção deixam de depender de um ciclo de desenvolvimento.',
        },
        {
          eyebrow: 'Canais',
          title: 'Ligue a loja online às suas lojas físicas',
          body: 'Responda às preferências dos seus clientes com fluxos omnicanal que atravessam o digital e o físico: comprar online e levantar na loja, devolver na loja o que comprou online, ou vender a partir do stock da loja quando o armazém já não tem.',
          link: { route: 'platformOmnichannel', label: 'Ver tecnologia omnicanal' },
        },
        {
          eyebrow: 'Alcance',
          title: 'Marketplaces e comércio global',
          body: 'Ligue a loja aos principais marketplaces e expanda para novos canais e mercados. Cada mercado tem as suas regras de negócio (lista de preços, stock disponível, métodos de pagamento, transportadoras, moeda e impostos) configuradas sem duplicar o catálogo.',
          bullets: [
            'Regras de negócio por mercado, não por país',
            'Preços, moeda e impostos configurados centralmente',
            'Stock alocado por depósito, com regras próprias',
          ],
        },
        {
          eyebrow: 'Ecossistema',
          title: 'Integrações com os sistemas que já usa',
          body: 'A plataforma integra com os principais fornecedores de ERP, sistemas de pagamento, transportadoras e serviços de catálogo. O objetivo não é somar ligações, é manter um fluxo de informação atualizado sem intervenção manual.',
        },
      ],
      midForm: {
        heading: 'Quer ver a plataforma aplicada ao seu catálogo?',
        body: 'Mostramos a plataforma com o seu tipo de operação em mente: não uma demonstração genérica.',
        submit: 'Pedir demonstração',
      },
      closing: {
        title: 'Preparado para crescer?',
        body: 'Temos uma equipa técnica dedicada ao comércio digital, com mais de 500 projetos implementados. Diga-nos onde está a operação e falamos consigo.',
        points: [
          'Equipa especializada em comércio digital desde 2002',
          'Faturação e POS certificados para operar em Portugal',
          'Resposta em menos de um dia útil',
        ],
        submit: 'Falar com especialista',
      },
      related: ['platformOMS', 'platformMarketingCloud', 'platformOmnichannel'],
    },
    en: {
      meta: {
        title: 'B2C Platform: multi-market, omnichannel online commerce',
        description:
          'The cloud platform used by leading Portuguese retailers: headless architecture, drag & drop editor, marketplaces, global commerce and automated order management.',
      },
      breadcrumb: 'B2C Platform',
      hero: {
        eyebrow: 'B2C Platform',
        title: 'A genuinely omnichannel shopping experience',
        lead: 'A multi-market, omnichannel cloud platform used by most of the leading Portuguese retailers. Catalogue, stock and customer are the same across every channel: there are no integrations to maintain between them.',
        primary: 'Request a proposal',
      },
      features: [
        {
          title: 'Drag & drop page editor',
          body: 'A flexible content editor with templates, so rich, responsive pages no longer depend on a development cycle.',
        },
        {
          title: 'Automated order management',
          body: 'The OMS streamlines the whole logistics process and frees the team for the decisions that actually need a person.',
        },
        {
          title: 'Omnichannel shopping experience',
          body: 'Multiple purchase flows between the online store and physical stores, so the customer chooses how and where they buy.',
        },
        {
          title: 'Personalisation tools',
          body: 'Automatic segmentation that drives campaigns and selling conditions personalised customer by customer.',
        },
      ],
      sections: [
        {
          eyebrow: 'Architecture',
          title: 'Headless commerce, without rewriting the operation',
          body: 'The front-end is decoupled from the back-end commerce functionality. You can redesign the storefront, test a new experience or run several versions at once without touching business rules, catalogue or the ordering process.',
          bullets: [
            'Front-end evolves independently of the back office',
            'Several storefronts over the same operation',
            'Platform updates without taking the store down',
          ],
        },
        {
          eyebrow: 'Autonomy',
          title: 'Build pages without waiting for development',
          body: 'Decide how content and product catalogues are presented. The drag & drop editor gives the marketing team real autonomy over the storefront: campaigns, landing pages and collection features stop depending on a development cycle.',
        },
        {
          eyebrow: 'Channels',
          title: 'Connect the online store to your physical stores',
          body: 'Meet your customers where they are, with omnichannel flows that cross digital and physical: buy online and collect in store, return in store what was bought online, or sell from store stock when the warehouse has run out.',
          link: { route: 'platformOmnichannel', label: 'See omnichannel technology' },
        },
        {
          eyebrow: 'Reach',
          title: 'Marketplaces and global commerce',
          body: 'Connect the store to the major marketplaces and expand into new channels and markets. Each market carries its own business rules (price list, available stock, payment methods, carriers, currency and taxes) configured without duplicating the catalogue.',
          bullets: [
            'Business rules per market, not per country',
            'Prices, currency and taxes configured centrally',
            'Stock allocated per warehouse, with its own rules',
          ],
        },
        {
          eyebrow: 'Ecosystem',
          title: 'Integrations with the systems you already run',
          body: 'The platform integrates with the main ERP vendors, payment systems, carriers and catalogue services. The point is not to add connections, it is to keep information flowing without manual work.',
        },
      ],
      midForm: {
        heading: 'Want to see the platform against your own catalogue?',
        body: 'We walk through the platform with your type of operation in mind: not a generic demo.',
        submit: 'Request a demo',
      },
      closing: {
        title: 'Ready to grow?',
        body: 'We have a technical team dedicated to digital commerce, with more than 500 projects delivered. Tell us where the operation stands and we will take it from there.',
        points: [
          'A team specialised in digital commerce since 2002',
          'Invoicing and POS certified for operating in Portugal',
          'A reply within one business day',
        ],
        submit: 'Talk to a specialist',
      },
      related: ['platformOMS', 'platformMarketingCloud', 'platformOmnichannel'],
    },
  },

  platformB2B: {
    pt: {
      meta: {
        title: 'Plataforma B2B: portal de negócios para distribuidores e fabricantes',
        description:
          'Portal B2B com catálogos e tabelas de preços por cliente, gestão de agentes, encomendas em grelha e pre-packs, e integração com o seu ERP.',
      },
      breadcrumb: 'Plataforma B2B',
      hero: {
        eyebrow: 'Plataforma B2B',
        title: 'O seu negócio disponível 24 horas por dia',
        lead: 'Um portal desenhado de raiz para vendas em grande volume, disponível para distribuidores e fabricantes de qualquer dimensão. Não é o B2C com desconto: é uma operação comercial com regras próprias.',
        primary: 'Pedir proposta',
      },
      features: [
        {
          title: 'Desenhado para B2B',
          body: 'Catálogos e tabelas de preços personalizados por cliente, com condições comerciais que refletem a relação real.',
        },
        {
          title: 'Gestão de clientes e agentes',
          body: 'Acompanhe clientes e vendedores com ferramentas que dão visibilidade sobre a performance de cada agente.',
        },
        {
          title: 'Pronta a integrar',
          body: 'Liga as regras de negócio do seu ERP às regras da plataforma, com integração aos principais fornecedores.',
        },
        {
          title: 'Marketing personalizado',
          body: 'Campanhas definidas com base no comportamento dos parceiros de negócio, ativadas com um clique.',
        },
      ],
      sections: [
        {
          eyebrow: 'Encomendas',
          title: 'Ferramentas construídas para quem compra em volume',
          body: 'Colocar uma encomenda B2B não é encher um carrinho. A plataforma dá aos seus clientes e agentes as ferramentas que o processo comercial exige, incluindo importação e exportação em CSV e Excel para gerir ordens de encomenda extensas.',
          bullets: [
            'Colocação de encomendas e orçamentos',
            'Encomendas de pré-venda e pré-encomenda',
            'Venda em grelha e por pre-packs',
            'Importação e exportação CSV/Excel',
          ],
        },
        {
          eyebrow: 'Rede comercial',
          title: 'Acesso a vendedores e agentes',
          body: 'O portal dá aos seus parceiros de negócio uma visão completa da evolução individual e do mercado, para que consigam otimizar resultados sem depender de relatórios enviados manualmente.',
          bullets: [
            'Gráficos de evolução por agente e por cliente',
            'Listagem e histórico de encomendas',
            'Monitorização de campanhas ativas',
          ],
        },
        {
          eyebrow: 'Integrações',
          title: 'Ligado aos sistemas que sustentam o negócio',
          body: 'O portal integra com os sistemas externos que já usa, mantendo um fluxo de informação sempre atualizado entre a plataforma e a gestão.',
          bullets: [
            'Software de gestão (ERP)',
            'Sistemas de pagamento e de envio',
            'Serviços de catálogo como TecDoc ou IceCat',
          ],
        },
        {
          eyebrow: 'Comercial',
          title: 'Campanhas e descontos que acompanham a relação',
          body: 'Crie uma rotina de envolvimento com os seus clientes profissionais, com a flexibilidade para desenhar ofertas simples ou estruturas de desconto complexas conforme a necessidade do negócio.',
          bullets: [
            'Descontos por volume e rappel',
            'Preços personalizados por cliente',
            'Oferta de brindes e vouchers',
          ],
        },
      ],
      midForm: {
        heading: 'Quer ver o portal com a sua estrutura de preços?',
        body: 'Diga-nos como está organizada a sua rede comercial e preparamos uma demonstração com esse contexto.',
        submit: 'Pedir demonstração',
      },
      closing: {
        title: 'Preparado para crescer?',
        body: 'Trabalhamos com distribuidores e fabricantes que precisam de um canal digital à altura da operação comercial. Fale connosco.',
        points: [
          'Catálogos e preços por cliente, sem duplicar produtos',
          'Integração com os principais ERP do mercado',
          'Resposta em menos de um dia útil',
        ],
        submit: 'Falar com especialista',
      },
      related: ['platformB2C', 'platformOMS', 'fashionB2B'],
    },
    en: {
      meta: {
        title: 'B2B Platform: a business portal for distributors and manufacturers',
        description:
          'A B2B portal with per-customer catalogues and price lists, agent management, grid ordering and pre-packs, and integration with your ERP.',
      },
      breadcrumb: 'B2B Platform',
      hero: {
        eyebrow: 'B2B Platform',
        title: 'Your business open 24 hours a day',
        lead: 'A portal designed from the ground up for high-volume selling, for distributors and manufacturers of any size. It is not B2C with a discount: it is a commercial operation with rules of its own.',
        primary: 'Request a proposal',
      },
      features: [
        {
          title: 'Designed for B2B',
          body: 'Catalogues and price lists personalised per customer, with commercial terms that reflect the real relationship.',
        },
        {
          title: 'Customer and agent management',
          body: 'Follow customers and sales reps with tools that give visibility over each agent’s performance.',
        },
        {
          title: 'Ready to integrate',
          body: 'Connects your ERP’s business rules to the platform’s, with integrations to the main vendors.',
        },
        {
          title: 'Personalised marketing',
          body: 'Campaigns built on your business partners’ behaviour, switched on with a single click.',
        },
      ],
      sections: [
        {
          eyebrow: 'Ordering',
          title: 'Tools built for people who buy in volume',
          body: 'Placing a B2B order is not filling a basket. The platform gives your customers and agents the tools the commercial process actually needs, including CSV and Excel import and export for managing long order sheets.',
          bullets: [
            'Order placement and quotations',
            'Pre-sale and pre-order flows',
            'Grid ordering and pre-packs',
            'CSV/Excel import and export',
          ],
        },
        {
          eyebrow: 'Sales network',
          title: 'Access for sales reps and agents',
          body: 'The portal gives your business partners a complete view of their own progress and of the market, so they can optimise results without waiting for a report to be emailed to them.',
          bullets: [
            'Progress charts per agent and per customer',
            'Order listing and history',
            'Monitoring of active campaigns',
          ],
        },
        {
          eyebrow: 'Integrations',
          title: 'Connected to the systems that run the business',
          body: 'The portal integrates with the external systems you already use, keeping information flowing between the platform and your management software.',
          bullets: [
            'Management software (ERP)',
            'Payment and shipping systems',
            'Catalogue services such as TecDoc or IceCat',
          ],
        },
        {
          eyebrow: 'Commercial',
          title: 'Campaigns and discounts that follow the relationship',
          body: 'Build a rhythm of engagement with your professional customers, with the flexibility to design simple offers or complex discount structures as the business requires.',
          bullets: [
            'Volume and rebate discounts',
            'Customer-specific pricing',
            'Free gifts and vouchers',
          ],
        },
      ],
      midForm: {
        heading: 'Want to see the portal with your own pricing structure?',
        body: 'Tell us how your sales network is organised and we will prepare a demo with that context.',
        submit: 'Request a demo',
      },
      closing: {
        title: 'Ready to grow?',
        body: 'We work with distributors and manufacturers who need a digital channel that matches their commercial operation. Talk to us.',
        points: [
          'Per-customer catalogues and prices, without duplicating products',
          'Integration with the main ERPs on the market',
          'A reply within one business day',
        ],
        submit: 'Talk to a specialist',
      },
      related: ['platformB2C', 'platformOMS', 'fashionB2B'],
    },
  },

  platformOMS: {
    pt: {
      meta: {
        title: 'Plataforma OMS: gestão de encomendas automatizada',
        description:
          'Automatize todo o processo logístico: alocação de stock em tempo real, faturação integrada certificada pela AT, reembolsos e ferramentas de apoio ao cliente.',
      },
      breadcrumb: 'Plataforma OMS',
      hero: {
        eyebrow: 'Plataforma OMS',
        title: 'Reduza o esforço na gestão de encomendas',
        lead: 'Associe todos os canais de venda numa única plataforma que operacionaliza o processo sem necessidade de intervenção humana. O trabalho manual que crescia com o volume deixa de crescer.',
        primary: 'Pedir proposta',
      },
      features: [
        {
          title: 'Venda para o mundo inteiro',
          body: 'Funcionalidades multimercado que permitem vender globalmente com regras de negócio distintas por mercado.',
        },
        {
          title: 'Integração com lojas e POS',
          body: 'Alocação e realocação de stock em tempo real entre armazéns e lojas físicas.',
        },
        {
          title: 'Faturação integrada e automatizada',
          body: 'Criação e impressão de documentos logísticos de forma totalmente integrada e automatizada.',
        },
        {
          title: 'Reembolsos automatizados',
          body: 'Devoluções e trocas com fluxos definidos, incluindo períodos especiais para épocas como a Black Friday.',
        },
      ],
      sections: [
        {
          eyebrow: 'Automação',
          title: 'Processo logístico automatizado de ponta a ponta',
          body: 'O OMS associa todos os canais de venda numa única plataforma. Da entrada da encomenda à expedição, o processo corre sozinho: a equipa intervém nas exceções, não na rotina.',
          bullets: [
            'Regras de alocação de stock por depósito',
            'Encomendas de todos os canais no mesmo fluxo',
            'Documentos logísticos gerados automaticamente',
          ],
        },
        {
          eyebrow: 'Apoio ao cliente',
          title: 'Uma visão 360º de cada cliente e de cada encomenda',
          body: 'A equipa de apoio ao cliente vê o ciclo de vida completo da encomenda e o histórico do cliente no mesmo sítio. Responder deixa de exigir abrir três sistemas.',
        },
        {
          eyebrow: 'Faturação',
          title: 'Sistema de faturação integrado e certificado',
          body: 'Integre a plataforma com o seu sistema de faturação ou utilize o nosso, certificado pela Autoridade Tributária. As faturas podem ainda ser usadas como suporte de marketing, incluindo informação de campanhas.',
          bullets: [
            'Certificação pela AT incluída na plataforma',
            'Entidades de faturação configuráveis por mercado',
            'Documentos com informação de campanha',
          ],
        },
        {
          eyebrow: 'Omnicanal',
          title: 'A mesma encomenda, qualquer que seja o canal',
          body: 'Ligue a loja online às lojas físicas e escolha os fluxos omnicanal que fazem sentido para o seu negócio, com o stock a refletir a realidade em qualquer ponto de venda.',
          link: { route: 'platformOmnichannel', label: 'Ver tecnologia omnicanal' },
        },
      ],
      closing: {
        title: 'Quanto tempo perde a operação em tarefas manuais?',
        body: 'Fale connosco sobre o volume e a complexidade da sua operação. Mostramos onde o OMS tira trabalho de cima da equipa.',
        points: [
          'Gestão de encomendas sem intervenção humana na rotina',
          'Faturação certificada incluída, sem módulos de terceiros',
          'Resposta em menos de um dia útil',
        ],
        submit: 'Falar com especialista',
      },
      related: ['platformB2C', 'platformPOS', 'platformOmnichannel'],
    },
    en: {
      meta: {
        title: 'OMS Platform: automated order management',
        description:
          'Automate the whole logistics process: real-time stock allocation, integrated invoicing certified by the Portuguese tax authority, refunds and customer care tools.',
      },
      breadcrumb: 'OMS Platform',
      hero: {
        eyebrow: 'OMS Platform',
        title: 'Take the effort out of order management',
        lead: 'Bring every sales channel into one platform that runs the process without human intervention. The manual work that used to grow with volume stops growing.',
        primary: 'Request a proposal',
      },
      features: [
        {
          title: 'Sell to the whole world',
          body: 'Multi-market capability that lets you sell globally with distinct business rules per market.',
        },
        {
          title: 'Store and POS integration',
          body: 'Real-time stock allocation and reallocation across warehouses and physical stores.',
        },
        {
          title: 'Integrated, automated invoicing',
          body: 'Logistics documents created and printed in a fully integrated, automated flow.',
        },
        {
          title: 'Automated refunds',
          body: 'Returns and exchanges with defined flows, including extended windows for periods such as Black Friday.',
        },
      ],
      sections: [
        {
          eyebrow: 'Automation',
          title: 'An end-to-end automated logistics process',
          body: 'The OMS brings every sales channel into one platform. From order capture to dispatch the process runs itself: the team handles exceptions, not routine.',
          bullets: [
            'Stock allocation rules per warehouse',
            'Orders from every channel in the same flow',
            'Logistics documents generated automatically',
          ],
        },
        {
          eyebrow: 'Customer care',
          title: 'A 360º view of every customer and every order',
          body: 'Your support team sees the full order lifecycle and the customer history in one place. Answering a question no longer means opening three systems.',
        },
        {
          eyebrow: 'Invoicing',
          title: 'Integrated, certified invoicing',
          body: 'Connect the platform to your invoicing system, or use ours, certified by the Portuguese tax authority. Invoices can also carry campaign information and work as a marketing surface.',
          bullets: [
            'Tax authority certification included in the platform',
            'Invoicing entities configurable per market',
            'Documents carrying campaign information',
          ],
        },
        {
          eyebrow: 'Omnichannel',
          title: 'The same order, whichever channel it came from',
          body: 'Connect the online store to physical stores and choose the omnichannel flows that suit your business, with stock reflecting reality at every point of sale.',
          link: { route: 'platformOmnichannel', label: 'See omnichannel technology' },
        },
      ],
      closing: {
        title: 'How much time does your operation lose to manual work?',
        body: 'Talk to us about the volume and complexity of your operation. We will show you where the OMS takes work off the team.',
        points: [
          'Order management with no human intervention in the routine',
          'Certified invoicing included, no third-party modules',
          'A reply within one business day',
        ],
        submit: 'Talk to a specialist',
      },
      related: ['platformB2C', 'platformPOS', 'platformOmnichannel'],
    },
  },

  platformMarketingCloud: {
    pt: {
      meta: {
        title: 'Marketing Cloud: campanhas automatizadas e segmentação com IA',
        description:
          'Segmentação automática, campanhas personalizadas cliente a cliente, email e SMS marketing e ferramentas de conversão integradas na plataforma de comércio.',
      },
      breadcrumb: 'Marketing Cloud',
      hero: {
        eyebrow: 'Marketing Cloud',
        title: 'Personalização em cada interação',
        lead: 'Ferramentas de marketing automatizadas que assentam nos mesmos dados da operação. Quem compra, o que comprou e o que tem em stock estão no mesmo sítio: a campanha não precisa de exportações para saber a quem falar.',
        primary: 'Pedir proposta',
      },
      features: [
        {
          title: 'Ferramentas de conversão',
          body: 'Analise e otimize campanhas com ferramentas totalmente automatizadas, ligadas ao comportamento real de compra.',
        },
        {
          title: 'Experiências personalizadas',
          body: 'Perfis completos de cliente que permitem personalizar cada interação, da montra ao email.',
        },
        {
          title: 'Segmentação automática',
          body: 'Segmentos gerados automaticamente, que servem tanto campanhas como condições de venda.',
        },
        {
          title: 'Maior alcance das campanhas',
          body: 'SMS marketing, campanhas de email e ferramentas de remarketing totalmente integradas.',
        },
      ],
      sections: [
        {
          eyebrow: 'Resultados',
          title: 'Campanhas automatizadas que aumentam as vendas até 30%',
          body: 'As campanhas automatizadas oferecem experiências de compra personalizadas e aumentam vendas, receita total por visita, conversões e taxa de cliques. A diferença está na facilidade de criar jornadas e na ligação direta ao catálogo e ao stock.',
          bullets: [
            'Jornadas criadas sem depender de desenvolvimento',
            'Captação de novos clientes integrada na loja',
            'Recomendações personalizadas por perfil',
          ],
        },
        {
          eyebrow: 'Inteligência',
          title: 'Segmentação potenciada por machine learning',
          body: 'Personalize campanhas e condições de venda com base em segmentos automáticos. Os perfis de cliente incluem interesses e comportamento, construídos com arquiteturas recentes de machine learning, e mantêm-se atualizados sem trabalho manual.',
        },
        {
          eyebrow: 'Canais',
          title: 'Email e SMS no mesmo sistema da loja',
          body: 'O SMS marketing apresenta taxas de entrega, abertura e envolvimento superiores a outros meios eletrónicos. Combinado com email marketing e remarketing, cobre desde o carrinho abandonado até à reativação de clientes inativos.',
          bullets: [
            'Email marketing com segmentos da própria plataforma',
            'SMS marketing para comunicações de alta urgência',
            'Remarketing ligado ao comportamento na loja',
          ],
        },
      ],
      comparison: {
        title: 'Automação nativa ou ferramenta externa',
        lead: 'As plataformas de automação externas são boas ferramentas. A diferença está no que acontece entre a loja e a campanha.',
        genericTitle: 'Ferramenta externa',
        redicomTitle: 'Marketing Cloud',
        rows: [
          {
            topic: 'Integração com a plataforma',
            generic: 'Externa, por integração, aplicação ou API.',
            redicom: 'Nativa e total.',
          },
          {
            topic: 'Dependência de conectores',
            generic: 'Sim.',
            redicom: 'Não.',
          },
          {
            topic: 'Segmentação',
            generic: 'Em tempo real, mas sobre os dados que foram sincronizados.',
            redicom: 'Diretamente sobre os dados vivos da loja.',
          },
          {
            topic: 'Preços por segmento',
            generic: 'Possível, se os dados estiverem modelados e sincronizados.',
            redicom: 'Sim, nativamente.',
          },
          {
            topic: 'Promoções segmentadas',
            generic: 'Possível, mas depende da estrutura de dados e da integração.',
            redicom: 'Sim, nativamente.',
          },
          {
            topic: 'Consistência entre loja e campanhas',
            generic: 'Depende da qualidade e da profundidade da integração.',
            redicom: 'Muito elevada.',
          },
          {
            topic: 'Custo',
            generic: 'Subscrição à parte, que cresce com a base de contactos.',
            redicom: 'Incluído na plataforma.',
          },
        ],
      },
      closing: {
        title: 'As suas campanhas sabem o que está em stock?',
        body: 'Falamos consigo sobre como está a comunicar hoje e onde a automação pode acrescentar receita sem acrescentar equipa.',
        points: [
          'Marketing assente nos dados reais da operação',
          'Segmentos que servem campanhas e condições de venda',
          'Resposta em menos de um dia útil',
        ],
        submit: 'Falar com especialista',
      },
      related: ['platformB2C', 'platformAnalytics', 'fashionMarketing'],
    },
    en: {
      meta: {
        title: 'Marketing Cloud: automated campaigns and AI segmentation',
        description:
          'Automatic segmentation, campaigns personalised customer by customer, email and SMS marketing, and conversion tools built into the commerce platform.',
      },
      breadcrumb: 'Marketing Cloud',
      hero: {
        eyebrow: 'Marketing Cloud',
        title: 'Personalisation in every interaction',
        lead: 'Automated marketing tools sitting on the same data as the operation. Who buys, what they bought and what is in stock all live in one place: a campaign needs no export to know who to talk to.',
        primary: 'Request a proposal',
      },
      features: [
        {
          title: 'Conversion tools',
          body: 'Analyse and optimise campaigns with fully automated tools, tied to real purchase behaviour.',
        },
        {
          title: 'Personalised experiences',
          body: 'Complete customer profiles that let you personalise every interaction, from storefront to email.',
        },
        {
          title: 'Automatic segmentation',
          body: 'Segments generated automatically, serving both campaigns and selling conditions.',
        },
        {
          title: 'Wider campaign reach',
          body: 'SMS marketing, email campaigns and remarketing tools, fully integrated.',
        },
      ],
      sections: [
        {
          eyebrow: 'Results',
          title: 'Automated campaigns that lift sales by up to 30%',
          body: 'Automated campaigns deliver personalised shopping experiences and lift sales, total revenue per visit, conversions and click-through rate. The difference is how easily journeys are built, and the direct link to catalogue and stock.',
          bullets: [
            'Journeys built without a development cycle',
            'New customer capture built into the store',
            'Recommendations personalised per profile',
          ],
        },
        {
          eyebrow: 'Intelligence',
          title: 'Segmentation powered by machine learning',
          body: 'Personalise campaigns and selling conditions on automatically generated segments. Customer profiles carry interests and behaviour, built with modern machine learning architectures, and stay current without manual work.',
        },
        {
          eyebrow: 'Channels',
          title: 'Email and SMS inside the same system as the store',
          body: 'SMS marketing shows higher delivery, open and engagement rates than other electronic channels. Combined with email marketing and remarketing, it covers everything from an abandoned basket to reactivating dormant customers.',
          bullets: [
            'Email marketing on the platform’s own segments',
            'SMS marketing for high-urgency messages',
            'Remarketing tied to behaviour in the store',
          ],
        },
      ],
      comparison: {
        title: 'Native automation or an external tool',
        lead: 'External automation platforms are good tools. The difference is in what happens between the store and the campaign.',
        genericTitle: 'External tool',
        redicomTitle: 'Marketing Cloud',
        rows: [
          {
            topic: 'Platform integration',
            generic: 'External, through an integration, app or API.',
            redicom: 'Native and complete.',
          },
          {
            topic: 'Dependence on connectors',
            generic: 'Yes.',
            redicom: 'No.',
          },
          {
            topic: 'Segmentation',
            generic: 'Real time, but over the data that was synchronised.',
            redicom: 'Directly over the store’s live data.',
          },
          {
            topic: 'Segment-specific prices',
            generic: 'Possible, if the data is modelled and synchronised.',
            redicom: 'Yes, natively.',
          },
          {
            topic: 'Segmented promotions',
            generic: 'Possible, but dependent on data structure and integration.',
            redicom: 'Yes, natively.',
          },
          {
            topic: 'Store and campaign consistency',
            generic: 'Depends on the quality and depth of the integration.',
            redicom: 'Very high.',
          },
          {
            topic: 'Cost',
            generic: 'A separate subscription that grows with the contact base.',
            redicom: 'Included in the platform.',
          },
        ],
      },
      closing: {
        title: 'Do your campaigns know what is in stock?',
        body: 'We will talk through how you communicate today and where automation can add revenue without adding headcount.',
        points: [
          'Marketing built on the operation’s real data',
          'Segments that serve campaigns and selling conditions alike',
          'A reply within one business day',
        ],
        submit: 'Talk to a specialist',
      },
      related: ['platformB2C', 'platformAnalytics', 'fashionMarketing'],
    },
  },
};
