import type { SolutionSet } from './types';

/**
 * Paginas da camada de operacao da plataforma: POS, omnicanal, analytics e
 * aplicacao movel. Ficam separadas do ficheiro platform.ts apenas por
 * dimensao — pertencem a mesma seccao e usam o mesmo modelo.
 */

export const platformOperationsCopy: SolutionSet = {
  platformPOS: {
    pt: {
      meta: {
        title: 'POS Omnicanal — ligue as lojas físicas à loja online',
        description:
          'Sistema POS totalmente omnicanal, certificado pela AT, que liga lojas físicas à loja online sem integrações e pronto a utilizar com a Redicom Commerce Cloud.',
      },
      breadcrumb: 'POS Omnicanal',
      hero: {
        eyebrow: 'POS Omnicanal',
        title: 'A loja física e a loja online na mesma operação',
        lead: 'O nosso POS distingue-se pela omnicanalidade. Liga as lojas físicas à loja online de forma simples, sem qualquer tipo de integrações, e pronto a utilizar em conjunto com a Redicom Commerce Cloud.',
        primary: 'Pedir proposta',
      },
      features: [
        {
          title: 'Sem integrações a manter',
          body: 'O POS faz parte da plataforma. Não há uma camada de ligação entre sistemas para configurar e vigiar.',
        },
        {
          title: 'Faturação certificada pela AT',
          body: 'Emissão de documentos conforme os requisitos legais portugueses, incluída na plataforma.',
        },
        {
          title: 'Stock partilhado entre lojas',
          body: 'Consulta do stock de qualquer depósito ou loja, com alocação ao ponto mais adequado.',
        },
        {
          title: 'Campanhas iguais em todos os canais',
          body: 'As promoções da loja online aplicam-se na loja física, sem discrepâncias entre canais.',
        },
      ],
      sections: [
        {
          eyebrow: 'Equipa de loja',
          title: 'Uma ferramenta de apoio, não apenas um terminal',
          body: 'Os colaboradores em loja consultam informação de produtos, stocks e campanhas e executam operações completas a partir da mesma aplicação, sem sair para outro sistema.',
          bullets: [
            'Encomendar em nome do cliente',
            'Receber, separar e enviar encomendas',
            'Registar novos clientes',
            'Iniciar processos de devolução ou troca',
          ],
        },
        {
          eyebrow: 'Fluxos',
          title: 'O cliente escolhe como e onde compra',
          body: 'Ligar a loja online às lojas físicas abre modalidades de compra que de outra forma se perdem — e cada uma delas recupera vendas que ficariam por fazer.',
          bullets: [
            'Compra na loja online com stock das lojas físicas',
            'Compra na loja física com stock online ou de outras lojas',
            'Diferentes opções de entrega, troca ou devolução',
          ],
          link: { route: 'platformOmnichannel', label: 'Ver tecnologia omnicanal' },
        },
      ],
      closing: {
        title: 'As suas lojas veem o stock todo?',
        body: 'Falamos consigo sobre como ligar a operação física ao comércio online sem acrescentar uma camada de integração.',
        points: [
          'POS e faturação certificados para Portugal',
          'Sem integrações entre loja física e loja online',
          'Resposta em menos de um dia útil',
        ],
        submit: 'Falar com especialista',
      },
      related: ['platformOmnichannel', 'platformOMS', 'fashionPOS'],
    },
    en: {
      meta: {
        title: 'Omnichannel POS — connect physical stores to the online store',
        description:
          'A fully omnichannel POS, certified by the Portuguese tax authority, connecting physical stores to the online store with no integrations, ready to use with the Redicom Commerce Cloud.',
      },
      breadcrumb: 'Omnichannel POS',
      hero: {
        eyebrow: 'Omnichannel POS',
        title: 'The store and the online store in one operation',
        lead: 'What sets our POS apart is that it is genuinely omnichannel. It connects physical stores to the online store simply, with no integrations of any kind, ready to use alongside the Redicom Commerce Cloud.',
        primary: 'Request a proposal',
      },
      features: [
        {
          title: 'No integrations to maintain',
          body: 'The POS is part of the platform. There is no connecting layer between systems to configure and watch over.',
        },
        {
          title: 'Certified invoicing',
          body: 'Document issuing that meets Portuguese legal requirements, included in the platform.',
        },
        {
          title: 'Stock shared across stores',
          body: 'Look up stock in any warehouse or store, with allocation to the most suitable point.',
        },
        {
          title: 'The same campaigns everywhere',
          body: 'Online store promotions apply in the physical store, with no discrepancies between channels.',
        },
      ],
      sections: [
        {
          eyebrow: 'Store teams',
          title: 'A support tool, not just a terminal',
          body: 'Store staff look up product, stock and campaign information and carry out complete operations from the same application, without switching to another system.',
          bullets: [
            'Ordering on the customer’s behalf',
            'Receiving, picking and shipping orders',
            'Registering new customers',
            'Starting returns or exchanges',
          ],
        },
        {
          eyebrow: 'Flows',
          title: 'The customer chooses how and where they buy',
          body: 'Connecting the online store to physical stores opens up purchase options that would otherwise be lost — and each one recovers sales that would not have happened.',
          bullets: [
            'Buy online using stock held in physical stores',
            'Buy in store using online stock or another store’s',
            'Different delivery, exchange and return options',
          ],
          link: { route: 'platformOmnichannel', label: 'See omnichannel technology' },
        },
      ],
      closing: {
        title: 'Can your stores see all the stock?',
        body: 'Let’s talk about connecting the physical operation to online commerce without adding an integration layer.',
        points: [
          'POS and invoicing certified for Portugal',
          'No integrations between store and online store',
          'A reply within one business day',
        ],
        submit: 'Talk to a specialist',
      },
      related: ['platformOmnichannel', 'platformOMS', 'fashionPOS'],
    },
  },

  platformOmnichannel: {
    pt: {
      meta: {
        title: 'Tecnologia omnicanal — todos os canais numa única operação',
        description:
          'Stock partilhado entre lojas, campanhas omnicanal, aplicação de apoio às lojas físicas e diferentes fluxos de compra entre a loja online e a loja física.',
      },
      breadcrumb: 'Tecnologia Omnicanal',
      hero: {
        eyebrow: 'Tecnologia Omnicanal',
        title: 'Uma experiência de compra perfeita em todos os canais',
        lead: 'Responda às preferências dos seus clientes ligando a loja online às lojas físicas. O stock, as campanhas e o cliente são os mesmos — é a operação que se junta, não os sistemas.',
        primary: 'Pedir proposta',
      },
      features: [
        {
          title: 'Aplicação para lojas físicas',
          body: 'Acesso a produtos, stock e campanhas no ponto de venda, com operações completas a partir da loja.',
        },
        {
          title: 'Stock partilhado entre lojas',
          body: 'Todo o stock da empresa disponível, otimizando a entrega conforme a disponibilidade em cada ponto.',
        },
        {
          title: 'Campanhas e promoções omnicanal',
          body: 'As mesmas condições comerciais online e em loja, sem duplicar configuração.',
        },
        {
          title: 'Diferentes fluxos de compra',
          body: 'Várias modalidades de compra, entrega, troca e devolução, à escolha do cliente.',
        },
      ],
      sections: [
        {
          eyebrow: 'Fluxos de compra',
          title: 'Deixe o cliente escolher o percurso',
          body: 'Os fluxos omnicanal garantem modalidades de compra diferentes e permitem que seja o cliente a decidir como e onde quer comprar — sem que isso obrigue a equipa a gerir dois negócios paralelos.',
          bullets: [
            'Compra na loja online com stock das lojas físicas',
            'Compra na loja física com stock online ou de outras lojas',
            'Diferentes opções de entrega, troca ou devolução',
          ],
        },
        {
          eyebrow: 'Stock',
          title: 'Entregar a partir do sítio certo',
          body: 'A aplicação disponibiliza todo o stock da empresa e otimiza a entrega conforme a disponibilidade na loja de levantamento, no armazém central ou em qualquer outra loja ou armazém. As mesmas campanhas e promoções online aplicam-se nas lojas físicas.',
          bullets: [
            'Consulta de stock de diferentes depósitos e lojas',
            'Acesso aos produtos e stock da loja online',
            'Acesso às mesmas campanhas e promoções',
          ],
        },
      ],
      closing: {
        title: 'Quantas vendas se perdem entre canais?',
        body: 'Falamos consigo sobre os fluxos omnicanal que fazem sentido para a sua rede de lojas.',
        points: [
          'Stock de toda a rede visível em qualquer ponto',
          'Campanhas configuradas uma vez, aplicadas em todo o lado',
          'Resposta em menos de um dia útil',
        ],
        submit: 'Falar com especialista',
      },
      related: ['platformPOS', 'platformOMS', 'fashionOmnichannel'],
    },
    en: {
      meta: {
        title: 'Omnichannel technology — every channel in one operation',
        description:
          'Stock shared across stores, omnichannel campaigns, a support app for physical stores, and different purchase flows between the online store and the shop floor.',
      },
      breadcrumb: 'Omnichannel Technology',
      hero: {
        eyebrow: 'Omnichannel Technology',
        title: 'A seamless shopping experience across every channel',
        lead: 'Meet your customers’ preferences by connecting the online store to physical stores. Stock, campaigns and customer are the same — it is the operation that comes together, not the systems.',
        primary: 'Request a proposal',
      },
      features: [
        {
          title: 'An app for physical stores',
          body: 'Access to products, stock and campaigns at the point of sale, with complete operations from the shop floor.',
        },
        {
          title: 'Stock shared across stores',
          body: 'All of the company’s stock available, optimising delivery against availability at each point.',
        },
        {
          title: 'Omnichannel campaigns',
          body: 'The same commercial terms online and in store, without duplicating configuration.',
        },
        {
          title: 'Different purchase flows',
          body: 'Several ways to buy, receive, exchange and return, chosen by the customer.',
        },
      ],
      sections: [
        {
          eyebrow: 'Purchase flows',
          title: 'Let the customer choose the route',
          body: 'Omnichannel flows open up different ways to buy and let the customer decide how and where — without forcing the team to run two parallel businesses.',
          bullets: [
            'Buy online using stock held in physical stores',
            'Buy in store using online stock or another store’s',
            'Different delivery, exchange and return options',
          ],
        },
        {
          eyebrow: 'Stock',
          title: 'Ship from the right place',
          body: 'The app exposes all of the company’s stock and optimises delivery against availability at the collection store, the central warehouse or any other store or warehouse. The same online campaigns and promotions apply in physical stores.',
          bullets: [
            'Stock lookup across warehouses and stores',
            'Access to the online store’s products and stock',
            'Access to the same campaigns and promotions',
          ],
        },
      ],
      closing: {
        title: 'How many sales are lost between channels?',
        body: 'Let’s talk about the omnichannel flows that make sense for your store network.',
        points: [
          'Network-wide stock visible from any point',
          'Campaigns configured once, applied everywhere',
          'A reply within one business day',
        ],
        submit: 'Talk to a specialist',
      },
      related: ['platformPOS', 'platformOMS', 'fashionOmnichannel'],
    },
  },

  platformAnalytics: {
    pt: {
      meta: {
        title: 'Redicom Analytics — análise integrada na operação',
        description:
          'Vendas, margem, stock, campanhas e comportamento analisados sobre a mesma base de dados da operação, sem exportações, ferramentas externas ou custos adicionais.',
      },
      breadcrumb: 'Redicom Analytics',
      hero: {
        eyebrow: 'Redicom Analytics',
        title: '100% integrado e orientado à operação',
        lead: 'Analise o desempenho real do negócio diretamente na plataforma, com dados completos de vendas, margem, stock, campanhas e comportamento. Toda a análise assenta na mesma base de dados da operação.',
        primary: 'Pedir proposta',
      },
      features: [
        {
          title: 'Dados 100% integrados',
          body: 'Encomendas, stock, produtos, promoções e performance comercial vêm diretamente da operação.',
        },
        {
          title: 'Análise sem exportações',
          body: 'Sem integrações nem ferramentas externas, o que reduz a complexidade técnica e o tempo até à resposta.',
        },
        {
          title: 'Insights em tempo real',
          body: 'Os dados atualizam-se continuamente, permitindo reagir depressa a alterações de performance.',
        },
        {
          title: 'Sem custos adicionais',
          body: 'Incluído na plataforma, sem faturas de BigQuery, cloud externa ou módulos analíticos de terceiros.',
        },
      ],
      sections: [
        {
          eyebrow: 'Decisão',
          title: 'Uma leitura que cruza venda, stock e promoção',
          body: 'A análise cruza vendas, preços, stock, promoções e campanhas, o que permite compreender o impacto de cada variável no desempenho global. Os indicadores são calculados sobre dados reais, garantindo consistência e alinhamento entre equipas.',
          bullets: [
            'Visão completa da operação, não apenas do tráfego',
            'Identificação de quebras e de oportunidades',
            'Decisões com contexto operacional',
            'Capacidade de análise que acompanha o crescimento',
          ],
        },
        {
          eyebrow: 'Comparação',
          title: 'Complementar à medição digital, não substituto',
          body: 'Uma ferramenta de medição digital é muito forte a explicar tráfego e aquisição. O Redicom Analytics é forte onde essas ferramentas são indiretas: stock e preço reais, promoções e contexto comercial, preços por segmento e decisão operacional — sem sampling, sem thresholds e sem exportar para outro sítio para ir ao fundo de uma pergunta.',
        },
      ],
      comparison: {
        title: 'Critério a critério',
        lead: 'Uma ferramenta de medição digital e o Redicom Analytics respondem a perguntas diferentes. Vale a pena ver quais.',
        genericTitle: 'Ferramenta de medição digital',
        redicomTitle: 'Redicom Analytics',
        rows: [
          {
            topic: 'Integração com a plataforma',
            generic: 'Externa à plataforma de comércio.',
            redicom: 'Nativa e total.',
          },
          {
            topic: 'Foco principal',
            generic: 'Medição digital: eventos, tráfego e aquisição.',
            redicom: 'Negócio, operação e performance comercial.',
          },
          {
            topic: 'Base analítica',
            generic: 'Modelo orientado a eventos.',
            redicom: 'Dados reais da operação.',
          },
          {
            topic: 'Leitura de stock e preço reais',
            generic: 'Não de forma nativa operacional.',
            redicom: 'Sim, nativamente.',
          },
          {
            topic: 'Promoções e contexto comercial',
            generic: 'Dependem de implementação e modelação.',
            redicom: 'Integrados na análise.',
          },
          {
            topic: 'Preços por segmento',
            generic: 'Não como capacidade nativa.',
            redicom: 'Sim.',
          },
          {
            topic: 'Custo de infraestrutura analítica',
            generic: 'Pode exigir cloud analítica ou módulos pagos.',
            redicom: 'Incluído na plataforma.',
          },
        ],
      },
      closing: {
        title: 'Quanto tempo demora hoje a responder a "porquê"?',
        body: 'Falamos consigo sobre os indicadores que a sua equipa precisa de ver e sobre o que está a impedir que os veja.',
        points: [
          'Análise sobre os dados reais da operação',
          'Sem custos de cloud analítica à parte',
          'Resposta em menos de um dia útil',
        ],
        submit: 'Falar com especialista',
      },
      related: ['platformMarketingCloud', 'fashionAnalytics', 'platformOMS'],
    },
    en: {
      meta: {
        title: 'Redicom Analytics — analysis built into the operation',
        description:
          'Sales, margin, stock, campaigns and behaviour analysed on the operation’s own database, with no exports, no external tools and no additional cost.',
      },
      breadcrumb: 'Redicom Analytics',
      hero: {
        eyebrow: 'Redicom Analytics',
        title: '100% integrated and built around the operation',
        lead: 'Analyse real business performance directly in the platform, with full data on sales, margin, stock, campaigns and behaviour. Every analysis rests on the operation’s own database.',
        primary: 'Request a proposal',
      },
      features: [
        {
          title: '100% integrated data',
          body: 'Orders, stock, products, promotions and commercial performance come straight from the operation.',
        },
        {
          title: 'Analysis without exports',
          body: 'No integrations and no external tools, which cuts technical complexity and time to an answer.',
        },
        {
          title: 'Real-time insight',
          body: 'Data updates continuously, so you can react quickly when performance shifts.',
        },
        {
          title: 'No additional cost',
          body: 'Included in the platform, with no BigQuery, external cloud or third-party analytics bills.',
        },
      ],
      sections: [
        {
          eyebrow: 'Decisions',
          title: 'A reading that crosses sales, stock and promotion',
          body: 'The analysis crosses sales, prices, stock, promotions and campaigns, so you can see what each variable does to overall performance. Indicators are calculated on real data, which keeps teams consistent and aligned.',
          bullets: [
            'A complete view of the operation, not just traffic',
            'Drops and opportunities identified',
            'Decisions with operational context',
            'Analytical capacity that keeps up with growth',
          ],
        },
        {
          eyebrow: 'Comparison',
          title: 'Complementary to digital measurement, not a replacement',
          body: 'A digital measurement tool is very strong at explaining traffic and acquisition. Redicom Analytics is strong where those tools are indirect: real stock and price, promotions and commercial context, segment pricing and operational decisions — with no sampling, no thresholds and no export to somewhere else to get to the bottom of a question.',
        },
      ],
      comparison: {
        title: 'Criterion by criterion',
        lead: 'A digital measurement tool and Redicom Analytics answer different questions. It is worth seeing which.',
        genericTitle: 'Digital measurement tool',
        redicomTitle: 'Redicom Analytics',
        rows: [
          {
            topic: 'Platform integration',
            generic: 'External to the commerce platform.',
            redicom: 'Native and complete.',
          },
          {
            topic: 'Main focus',
            generic: 'Digital measurement: events, traffic and acquisition.',
            redicom: 'Business, operations and commercial performance.',
          },
          {
            topic: 'Analytical base',
            generic: 'An event-driven model.',
            redicom: 'The operation’s real data.',
          },
          {
            topic: 'Real stock and price readings',
            generic: 'Not natively, at an operational level.',
            redicom: 'Yes, natively.',
          },
          {
            topic: 'Promotions and commercial context',
            generic: 'Dependent on implementation and modelling.',
            redicom: 'Built into the analysis.',
          },
          {
            topic: 'Segment-specific prices',
            generic: 'Not as a native capability.',
            redicom: 'Yes.',
          },
          {
            topic: 'Analytics infrastructure cost',
            generic: 'May require an analytics cloud or paid modules.',
            redicom: 'Included in the platform.',
          },
        ],
      },
      closing: {
        title: 'How long does it take you to answer "why" today?',
        body: 'Let’s talk about the indicators your team needs to see, and what is stopping them seeing it.',
        points: [
          'Analysis on the operation’s real data',
          'No separate analytics cloud bill',
          'A reply within one business day',
        ],
        submit: 'Talk to a specialist',
      },
      related: ['platformMarketingCloud', 'fashionAnalytics', 'platformOMS'],
    },
  },

  platformMobileApp: {
    pt: {
      meta: {
        title: 'Mobile App — a sua loja na app, sobre a mesma plataforma',
        description:
          'Aplicação móvel pronta a utilizar, assente no mesmo catálogo, stock e cliente da Redicom Commerce Cloud, com campanhas e fluxos omnicanal partilhados.',
      },
      breadcrumb: 'Mobile App',
      hero: {
        eyebrow: 'Mobile App',
        title: 'Uma aplicação móvel pronta a utilizar',
        lead: 'A app assenta na mesma plataforma que a loja online: o mesmo catálogo, o mesmo stock, o mesmo cliente e as mesmas campanhas. Não é um projeto paralelo com um back-office próprio para manter.',
        primary: 'Pedir proposta',
      },
      features: [
        {
          title: 'Mesmo catálogo e mesmo stock',
          body: 'O que muda na plataforma muda na app. Não há sincronizações a correr nem catálogos a divergir.',
        },
        {
          title: 'Campanhas partilhadas',
          body: 'As promoções e segmentos do Marketing Cloud aplicam-se também na aplicação.',
        },
        {
          title: 'Fluxos omnicanal',
          body: 'Levantamento em loja, devoluções e stock das lojas físicas disponíveis também no telemóvel.',
        },
        {
          title: 'Pronta a utilizar',
          body: 'Sem um ciclo de desenvolvimento próprio para colocar a marca no telemóvel dos clientes.',
        },
      ],
      sections: [
        {
          eyebrow: 'Arquitetura',
          title: 'Um canal a mais, não um sistema a mais',
          body: 'Cada canal que exige o seu próprio back-office acrescenta trabalho de manutenção que cresce com o tempo. A aplicação móvel corre sobre a Redicom Commerce Cloud, pelo que a equipa continua a trabalhar num único sítio.',
          link: { route: 'platform', label: 'Ver a plataforma' },
        },
      ],
      closing: {
        title: 'Faz sentido uma app para o seu negócio?',
        body: 'Falamos consigo com franqueza sobre quando uma aplicação móvel acrescenta valor e quando é só mais um canal a manter.',
        points: [
          'A app partilha a plataforma da loja online',
          'Sem um segundo back-office para manter',
          'Resposta em menos de um dia útil',
        ],
        submit: 'Falar com especialista',
      },
      related: ['platformB2C', 'platformOmnichannel', 'platformMarketingCloud'],
    },
    en: {
      meta: {
        title: 'Mobile App — your store in an app, on the same platform',
        description:
          'A ready-to-use mobile app running on the same catalogue, stock and customer as the Redicom Commerce Cloud, with shared campaigns and omnichannel flows.',
      },
      breadcrumb: 'Mobile App',
      hero: {
        eyebrow: 'Mobile App',
        title: 'A mobile app that is ready to use',
        lead: 'The app runs on the same platform as the online store: the same catalogue, the same stock, the same customer and the same campaigns. It is not a parallel project with its own back office to maintain.',
        primary: 'Request a proposal',
      },
      features: [
        {
          title: 'Same catalogue, same stock',
          body: 'What changes on the platform changes in the app. No syncing jobs, no catalogues drifting apart.',
        },
        {
          title: 'Shared campaigns',
          body: 'Marketing Cloud promotions and segments apply in the app as well.',
        },
        {
          title: 'Omnichannel flows',
          body: 'Click and collect, returns and physical store stock are available on the phone too.',
        },
        {
          title: 'Ready to use',
          body: 'No development cycle of its own to put the brand in your customers’ pockets.',
        },
      ],
      sections: [
        {
          eyebrow: 'Architecture',
          title: 'One more channel, not one more system',
          body: 'Every channel that demands its own back office adds maintenance that only grows with time. The mobile app runs on the Redicom Commerce Cloud, so the team keeps working in one place.',
          link: { route: 'platform', label: 'See the platform' },
        },
      ],
      closing: {
        title: 'Does an app make sense for your business?',
        body: 'We will be straight with you about when a mobile app adds value and when it is just another channel to maintain.',
        points: [
          'The app shares the online store’s platform',
          'No second back office to maintain',
          'A reply within one business day',
        ],
        submit: 'Talk to a specialist',
      },
      related: ['platformB2C', 'platformOmnichannel', 'platformMarketingCloud'],
    },
  },
};
