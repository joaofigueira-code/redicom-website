import type { SolutionSet } from './types';

/**
 * Paginas que nao sao produto mas seguem o mesmo modelo de leitura:
 * promessa -> provas -> detalhe -> conversao.
 *
 * "Porque Redicom" e "Agentic Commerce" sao os dois argumentos de
 * diferenciacao do plano de marketing, por isso ganham o mesmo cuidado
 * editorial das paginas de plataforma em vez de ficarem como paginas
 * institucionais soltas.
 *
 * Nota sobre a tabela de "Porque Redicom": a versao em producao compara a
 * Redicom com um concorrente identificado pelo nome. Aqui mantemos os mesmos
 * criterios e os mesmos numeros, mas do lado generico, ate que a comparacao
 * nominal seja validada por quem responde pela comunicacao da marca.
 */

export const standalonePagesCopy: SolutionSet = {
  why: {
    pt: {
      meta: {
        title: 'Porquê Redicom — a alternativa às plataformas genéricas',
        description:
          'Faturação certificada pela AT, 0% de taxa sobre as vendas, dados alojados na União Europeia e POS omnicanal incluído. O que distingue a Redicom Commerce Cloud.',
      },
      breadcrumb: 'Porquê Redicom',

      hero: {
        eyebrow: 'Porquê Redicom',
        title: 'Crescer devia ser uma recompensa, não uma penalização',
        lead: 'Nas plataformas generalistas, o aumento das suas vendas aumenta as suas taxas. Na Redicom não. Sem taxa sobre as vendas, com faturação certificada pela AT e com os dados dos seus clientes alojados na União Europeia.',
        primary: 'Falar com especialista',
      },

      features: [
        {
          title: 'Faturação certificada pela AT',
          body: 'O sistema de faturação está certificado pela Autoridade Tributária com o n.º 2857 e é nativo da plataforma. Cada transação cumpre a legislação fiscal portuguesa sem software de terceiros.',
        },
        {
          title: '0% de taxa sobre as vendas',
          body: 'O que fatura é seu. Não cobramos percentagem sobre o volume de vendas, por isso o custo da plataforma não sobe quando o negócio cresce.',
        },
        {
          title: 'Dados na União Europeia',
          body: 'Os dados dos seus clientes são alojados em infraestrutura na UE, em conformidade com o RGPD, sem transferências internacionais a gerir.',
        },
        {
          title: 'POS omnicanal incluído',
          body: 'O POS está certificado para faturar em Portugal e vem com a plataforma. Não é um módulo à parte nem uma aplicação de terceiros.',
        },
      ],

      sections: [
        {
          eyebrow: 'Conformidade',
          title: 'A conformidade fiscal deixa de ser um projeto técnico',
          body: 'Para operar em Portugal, a conformidade com a Autoridade Tributária não é opcional. A Redicom integra de raiz um sistema de faturação certificado pela AT, o que elimina o risco de coimas, reduz a complexidade contabilística e mantém a informação num único sistema. O POS omnicanal, igualmente certificado, liga as lojas físicas à operação online sem adaptações externas nem soluções paralelas.',
          bullets: [
            'Faturação certificada pela AT com o n.º 2857',
            'POS certificado para faturar em loja física',
            'Documentos fiscais e séries geridos na própria plataforma',
            'Sem dependência de módulos de faturação de terceiros',
          ],
        },
        {
          eyebrow: 'Custo',
          title: 'O que poupa por não pagar taxa sobre as vendas',
          body: 'Nas plataformas que cobram percentagem sobre a faturação, o custo cresce ao mesmo ritmo do negócio. Com uma taxa típica entre 0,6% e 2%, a conta acumula depressa. Os valores abaixo são o que uma operação deixa de pagar em taxas ao longo de um ano — dinheiro que fica disponível para reinvestir.',
          bullets: [
            'Faturação de 50 mil euros por mês: cerca de 6.000 euros por ano em taxas',
            'Faturação de 150 mil euros por mês: cerca de 18.000 euros por ano',
            'Faturação de 300 mil euros por mês: cerca de 36.000 euros por ano',
            'Faturação de 500 mil euros por mês: cerca de 60.000 euros por ano',
          ],
        },
        {
          eyebrow: 'Autonomia',
          title: 'Os dados e os pagamentos são seus',
          body: 'A propriedade da informação é sua, sem dependência estrutural da infraestrutura da plataforma. Escolhe e integra os métodos de pagamento que fazem sentido para o seu modelo de negócio, sem imposições nem restrições técnicas, e os pagamentos entram sem bloqueios inesperados nem retenções arbitrárias. Com APIs abertas, integra sistemas e evolui a operação sem bloqueios tecnológicos.',
          bullets: [
            'Sem fidelização e sem contratos de um a três anos',
            'Métodos de pagamento à sua escolha',
            'APIs abertas para ERP, CRM, PIM e logística',
            'Migração de saída sem penalização contratual',
          ],
        },
        {
          eyebrow: 'Acompanhamento',
          title: 'Uma equipa que conhece o seu projeto',
          body: 'A sua loja é um ativo estratégico e não devia depender de decisões automáticas. Com a Redicom tem acompanhamento próximo, regras claras e uma relação transparente: fala com quem conhece a plataforma e o seu projeto, não com um chat genérico nem com um call center.',
          bullets: [
            'Suporte técnico direto, de segunda a sexta',
            'Equipa especializada em comércio digital desde 2002',
            'Mais de 500 projetos implementados',
          ],
        },
      ],

      midForm: {
        heading: 'Quer saber quanto poupava?',
        body: 'Diga-nos o volume aproximado da operação e fazemos as contas consigo, com os números do seu caso.',
        submit: 'Pedir a análise',
      },

      comparison: {
        title: 'Critério a critério',
        lead: 'O que muda, na prática, entre uma plataforma generalista e a Redicom Commerce Cloud.',
        genericTitle: 'Plataforma genérica',
        redicomTitle: 'Redicom Commerce Cloud',
        rows: [
          {
            topic: 'Conformidade fiscal em Portugal',
            generic: 'Exige software de faturação de terceiros para cumprir os requisitos da AT.',
            redicom: 'Faturação certificada pela AT integrada na plataforma (n.º 2857).',
          },
          {
            topic: 'POS com faturação nativa',
            generic: 'Não incluído. Depende de aplicações externas por certificar.',
            redicom: 'POS omnicanal certificado para faturar em Portugal, incluído.',
          },
          {
            topic: 'Taxa sobre as vendas',
            generic: 'Entre 0,6% e 2% da faturação, consoante o plano.',
            redicom: '0%. O que fatura fica no seu negócio.',
          },
          {
            topic: 'Funcionalidades B2B',
            generic: 'Aplicações pagas ou plano superior.',
            redicom: 'Nativas e incluídas, com preços por cliente e fluxos próprios.',
          },
          {
            topic: 'Localização dos dados dos clientes',
            generic: 'Fora da União Europeia, sem garantia de alojamento na UE.',
            redicom: 'União Europeia, em conformidade com o RGPD.',
          },
          {
            topic: 'Aplicação móvel nativa',
            generic: 'Não incluída.',
            redicom: 'iOS e Android sobre a mesma plataforma e o mesmo catálogo.',
          },
          {
            topic: 'Propriedade dos dados',
            generic: 'Controlados pela plataforma, sobretudo quando usa o seu sistema de pagamentos.',
            redicom: '100% do comerciante.',
          },
          {
            topic: 'Suporte técnico',
            generic: 'Chat. Telefone e email apenas nos planos superiores.',
            redicom: 'Suporte direto de uma equipa que conhece o seu projeto.',
          },
          {
            topic: 'Contrato e saída',
            generic: 'Fidelização de um a três anos nos planos superiores.',
            redicom: 'Sem vínculo e sem penalização na migração de saída.',
          },
        ],
      },

      closing: {
        title: 'Faça as contas ao seu caso',
        body: 'Deixe o contacto e mostramos-lhe, com os números da sua operação, o que muda na conformidade, no custo e na autonomia.',
        points: [
          'Analisamos o seu contexto antes de propor qualquer solução',
          'Comparação com base nos seus volumes, não em exemplos genéricos',
          'Se não formos a melhor opção para o seu caso, dizemos-lhe',
        ],
        submit: 'Falar com especialista',
      },

      related: ['platform', 'platformPOS', 'agentic'],
    },

    en: {
      meta: {
        title: 'Why Redicom — the alternative to generic platforms',
        description:
          'Invoicing certified by the Portuguese tax authority, 0% transaction fees, data hosted in the European Union and omnichannel POS included. What sets the Redicom Commerce Cloud apart.',
      },
      breadcrumb: 'Why Redicom',

      hero: {
        eyebrow: 'Why Redicom',
        title: 'Growth should be a reward, not a penalty',
        lead: 'On generalist platforms, growing sales means growing fees. Not here. No transaction fee, invoicing certified by the Portuguese tax authority, and your customers’ data hosted in the European Union.',
        primary: 'Talk to a specialist',
      },

      features: [
        {
          title: 'Certified invoicing',
          body: 'The invoicing system is certified by the Portuguese tax authority under no. 2857 and is native to the platform. Every transaction meets Portuguese tax law without third-party software.',
        },
        {
          title: '0% transaction fee',
          body: 'What you sell is yours. We take no percentage of your revenue, so the cost of the platform does not rise as the business grows.',
        },
        {
          title: 'Data in the European Union',
          body: 'Your customers’ data is hosted on EU infrastructure, in line with the GDPR, with no international transfers to manage.',
        },
        {
          title: 'Omnichannel POS included',
          body: 'The POS is certified for invoicing in Portugal and comes with the platform. It is not a separate module or a third-party app.',
        },
      ],

      sections: [
        {
          eyebrow: 'Compliance',
          title: 'Tax compliance stops being a technical project',
          body: 'Operating in Portugal means meeting the tax authority’s requirements — there is no optional route. Redicom builds in certified invoicing from the start, which removes the risk of penalties, cuts accounting complexity and keeps the information in one system. The omnichannel POS, certified too, connects physical stores to the online operation with no external adaptations or parallel systems.',
          bullets: [
            'Invoicing certified by the Portuguese tax authority under no. 2857',
            'POS certified for invoicing in store',
            'Tax documents and series managed inside the platform',
            'No dependence on third-party invoicing modules',
          ],
        },
        {
          eyebrow: 'Cost',
          title: 'What you save by not paying a transaction fee',
          body: 'On platforms that charge a percentage of revenue, cost grows at exactly the pace of the business. At a typical rate of 0.6% to 2%, it adds up quickly. The figures below are what an operation stops paying in fees over a year — money that stays available to reinvest.',
          bullets: [
            'Revenue of 50k euros a month: around 6,000 euros a year in fees',
            'Revenue of 150k euros a month: around 18,000 euros a year',
            'Revenue of 300k euros a month: around 36,000 euros a year',
            'Revenue of 500k euros a month: around 60,000 euros a year',
          ],
        },
        {
          eyebrow: 'Autonomy',
          title: 'The data and the payments are yours',
          body: 'You own the information, with no structural dependence on the platform’s infrastructure. You choose and integrate the payment methods that suit your business model, with no impositions and no technical restrictions, and payments arrive without unexpected holds or arbitrary retentions. Open APIs let you integrate systems and evolve the operation without technical lock-in.',
          bullets: [
            'No lock-in and no one-to-three-year contracts',
            'Payment methods of your choosing',
            'Open APIs for ERP, CRM, PIM and logistics',
            'Migration out with no contractual penalty',
          ],
        },
        {
          eyebrow: 'Partnership',
          title: 'A team that knows your project',
          body: 'Your store is a strategic asset and should not depend on automated decisions. With Redicom you get close support, clear rules and a transparent relationship: you talk to people who know the platform and know your project, not a generic chat or a call centre.',
          bullets: [
            'Direct technical support, Monday to Friday',
            'A team specialised in digital commerce since 2002',
            'More than 500 projects delivered',
          ],
        },
      ],

      midForm: {
        heading: 'Want to know what you would save?',
        body: 'Tell us roughly how big the operation is and we will run the numbers with you, on your own figures.',
        submit: 'Request the analysis',
      },

      comparison: {
        title: 'Criterion by criterion',
        lead: 'What actually changes between a generalist platform and the Redicom Commerce Cloud.',
        genericTitle: 'Generic platform',
        redicomTitle: 'Redicom Commerce Cloud',
        rows: [
          {
            topic: 'Tax compliance in Portugal',
            generic: 'Requires third-party invoicing software to meet the tax authority’s rules.',
            redicom: 'Certified invoicing built into the platform (no. 2857).',
          },
          {
            topic: 'POS with native invoicing',
            generic: 'Not included. Depends on uncertified external apps.',
            redicom: 'Omnichannel POS certified for invoicing in Portugal, included.',
          },
          {
            topic: 'Transaction fee',
            generic: 'Between 0.6% and 2% of revenue, depending on the plan.',
            redicom: '0%. What you sell stays in your business.',
          },
          {
            topic: 'B2B features',
            generic: 'Paid apps or a higher tier.',
            redicom: 'Native and included, with customer pricing and its own flows.',
          },
          {
            topic: 'Where customer data lives',
            generic: 'Outside the European Union, with no guarantee of EU hosting.',
            redicom: 'European Union, in line with the GDPR.',
          },
          {
            topic: 'Native mobile app',
            generic: 'Not included.',
            redicom: 'iOS and Android on the same platform and the same catalogue.',
          },
          {
            topic: 'Data ownership',
            generic: 'Controlled by the platform, especially when using its own payment system.',
            redicom: '100% the merchant’s.',
          },
          {
            topic: 'Technical support',
            generic: 'Chat. Phone and email only on higher tiers.',
            redicom: 'Direct support from a team that knows your project.',
          },
          {
            topic: 'Contract and exit',
            generic: 'One-to-three-year lock-in on higher tiers.',
            redicom: 'No lock-in and no penalty on migrating out.',
          },
        ],
      },

      closing: {
        title: 'Run the numbers on your own case',
        body: 'Leave your details and we will show you, using your operation’s figures, what changes in compliance, cost and autonomy.',
        points: [
          'We look at your context before proposing anything',
          'A comparison built on your volumes, not on generic examples',
          'If we are not the best fit for your case, we will tell you',
        ],
        submit: 'Talk to a specialist',
      },

      related: ['platform', 'platformPOS', 'agentic'],
    },
  },

  agentic: {
    pt: {
      meta: {
        title: 'Agentic Commerce — o seu catálogo preparado para agentes de IA',
        description:
          'Os agentes de IA já recomendam, comparam e compram em nome dos consumidores. A Redicom liga o Agentic Commerce ao catálogo, ao stock, ao checkout e ao OMS da sua operação.',
      },
      breadcrumb: 'Agentic Commerce',

      hero: {
        eyebrow: 'Agentic Commerce',
        title: 'A jornada de compra já não começa na pesquisa',
        lead: 'Agentes de IA autónomos descobrem, comparam e recomendam produtos em nome dos consumidores. Mais do que estar visível, é preciso estar preparado para vender — e isso depende do que está por baixo do catálogo.',
        primary: 'Pedir demonstração',
      },

      features: [
        {
          title: 'Descoberta conversacional',
          body: 'Em vez de navegar por menus e filtros, o consumidor delega: «sapatilhas brancas de homem até 120 euros». A compra começa numa conversa, e quem responde é um agente, não a sua homepage.',
        },
        {
          title: 'Catálogo estruturado',
          body: 'Atributos detalhados, variantes precisas, políticas claras e contexto comercial. Sem isto, o agente não tem com que trabalhar e o produto fica de fora da recomendação.',
        },
        {
          title: 'Stock e preço reais',
          body: 'Disponibilidade e preço corretos em tempo real, por mercado e por canal. Uma recomendação sobre stock inexistente não é uma venda, é uma reclamação.',
        },
        {
          title: 'Conversão até ao fim',
          body: 'Checkout robusto ligado diretamente ao OMS. Quando o agente decide comprar em nome do consumidor, a encomenda entra na operação sem intervenção manual.',
        },
      ],

      sections: [
        {
          eyebrow: 'A nossa abordagem',
          title: 'Agentic Commerce não é uma camada por cima da loja',
          body: 'A maior parte das soluções trata o comércio agêntico como um feed publicado para fora, desligado da operação. O resultado é catálogo sem contexto, stock desatualizado e uma venda que ninguém consegue cumprir. Na Redicom, os seis pontos que o agente precisa de tocar vivem todos na mesma plataforma.',
          bullets: [
            'Catálogo: produto estruturado com atributos, variantes, imagens e contexto comercial',
            'Stock e preço: disponibilidade real e preços corretos em todos os canais',
            'Promoções: campanhas e regras de negócio nativas, coerentes com a recomendação',
            'Checkout: conversão segura, ligada diretamente à operação',
            'OMS: gestão de encomendas automatizada, sem intervenção humana',
            'Analytics: dados em tempo real, incluindo os canais de IA',
          ],
        },
        {
          eyebrow: 'Catálogo inteligente',
          title: 'O que um agente precisa de saber sobre cada produto',
          body: 'Para que os agentes de IA recomendem, comparem e vendam os seus produtos, a informação tem de estar perfeitamente estruturada. Preparamos o catálogo com o detalhe que a decisão automática exige — e é o mesmo detalhe que melhora a pesquisa interna, as recomendações da loja e o trabalho das equipas comerciais.',
          bullets: [
            'Atributos de produto estruturados e enriquecidos',
            'Variantes, tamanhos e grelhas completas',
            'Stock em tempo real por mercado e canal',
            'Preços e promoções sincronizados',
            'Políticas de entrega e devolução integradas',
          ],
        },
        {
          eyebrow: 'Soluções IA',
          title: 'Ferramentas que já vivem dentro da operação',
          body: 'As nossas soluções de inteligência artificial não são funcionalidades isoladas: fazem parte da mesma visão, da descoberta à conversão. O AI Studio acelera a produção visual das coleções e reduz o time-to-market. O Assistente IA responde com base no catálogo estruturado e nas regras de negócio reais, ligando a descoberta conversacional à compra.',
          link: { route: 'fashionAIStudio', label: 'Saber mais sobre o AI Studio' },
        },
        {
          eyebrow: 'Especialização',
          title: 'Fashion Retail é o melhor terreno para o comércio agêntico',
          body: 'A moda é o setor onde a complexidade real mais importa: variante, tamanho, cor, fit, stock por loja e sazonalidade. Os agentes de IA só funcionam bem quando conhecem tudo isto. É por isso que a especialização em Fashion Retail e a preparação para o Agentic Commerce são, na prática, o mesmo trabalho.',
          link: { route: 'fashion', label: 'Descobrir Fashion Retail' },
        },
      ],

      comparison: {
        title: 'Duas formas de responder aos agentes de IA',
        lead: 'A diferença não está no que se publica para fora. Está no que sustenta a venda quando o agente decide comprar.',
        genericTitle: 'Abordagem tradicional',
        redicomTitle: 'Abordagem Redicom',
        rows: [
          {
            topic: 'Onde vive a inteligência',
            generic: 'Camada externa, desligada da operação.',
            redicom: 'IA ligada ao coração da operação.',
          },
          {
            topic: 'Catálogo',
            generic: 'Publicado sem contexto comercial.',
            redicom: 'Com contexto, variantes e atributos estruturados.',
          },
          {
            topic: 'Stock e preço',
            generic: 'Integração superficial, atualizada a destempo.',
            redicom: 'Em tempo real, integrados na mesma base.',
          },
          {
            topic: 'Jornada comercial',
            generic: 'Distribuição sem controlo operacional.',
            redicom: 'Controlo total do princípio ao fim.',
          },
          {
            topic: 'Checkout e encomenda',
            generic: 'Checkout e OMS em sistemas separados.',
            redicom: 'Checkout, OMS e Analytics nativos.',
          },
          {
            topic: 'Faturação em Portugal',
            generic: 'Sem faturação certificada integrada.',
            redicom: 'Faturação e POS omnicanal certificados pela AT.',
          },
        ],
      },

      closing: {
        title: 'Prepare a operação para os agentes que já compram',
        body: 'Fale com a nossa equipa e veja o que falta ao seu catálogo, ao seu stock e ao seu checkout para estarem prontos.',
        points: [
          'Analisamos o estado atual do catálogo e dos dados de produto',
          'Mostramos o que muda na descoberta e na conversão',
          'Sem guião comercial: começamos pela sua operação',
        ],
        submit: 'Pedir demonstração',
      },

      related: ['fashion', 'platformOMS', 'why'],
    },

    en: {
      meta: {
        title: 'Agentic Commerce — your catalogue ready for AI agents',
        description:
          'AI agents already recommend, compare and buy on behalf of consumers. Redicom connects agentic commerce to your catalogue, stock, checkout and OMS.',
      },
      breadcrumb: 'Agentic Commerce',

      hero: {
        eyebrow: 'Agentic Commerce',
        title: 'The buying journey no longer starts with a search',
        lead: 'Autonomous AI agents discover, compare and recommend products on behalf of consumers. Being visible is no longer enough — you have to be ready to sell, and that depends on what sits beneath the catalogue.',
        primary: 'Request a demo',
      },

      features: [
        {
          title: 'Conversational discovery',
          body: 'Instead of browsing menus and filters, the shopper delegates: "white trainers for men under 120 euros". The purchase starts in a conversation, and what answers is an agent, not your homepage.',
        },
        {
          title: 'Structured catalogue',
          body: 'Detailed attributes, precise variants, clear policies and commercial context. Without them the agent has nothing to work with and the product drops out of the recommendation.',
        },
        {
          title: 'Real stock and price',
          body: 'Correct availability and pricing in real time, per market and per channel. A recommendation against stock you do not have is not a sale, it is a complaint.',
        },
        {
          title: 'Conversion all the way',
          body: 'A robust checkout wired straight into the OMS. When the agent decides to buy on the shopper’s behalf, the order enters the operation with no manual step.',
        },
      ],

      sections: [
        {
          eyebrow: 'Our approach',
          title: 'Agentic commerce is not a layer on top of the store',
          body: 'Most solutions treat agentic commerce as a feed published outwards, disconnected from the operation. The result is catalogue without context, stale stock and a sale nobody can fulfil. At Redicom, the six things an agent has to touch all live on the same platform.',
          bullets: [
            'Catalogue: structured products with attributes, variants, images and commercial context',
            'Stock and price: real availability and correct prices across every channel',
            'Promotions: native campaigns and business rules, consistent with the recommendation',
            'Checkout: secure conversion wired directly into the operation',
            'OMS: automated order management, with no human intervention',
            'Analytics: real-time data, AI channels included',
          ],
        },
        {
          eyebrow: 'Intelligent catalogue',
          title: 'What an agent needs to know about each product',
          body: 'For AI agents to recommend, compare and sell your products, the information has to be properly structured. We prepare the catalogue with the detail automated decisions require — and it is the same detail that improves on-site search, store recommendations and the work of your commercial teams.',
          bullets: [
            'Structured, enriched product attributes',
            'Complete variants, sizes and grids',
            'Real-time stock per market and channel',
            'Synchronised prices and promotions',
            'Integrated delivery and returns policies',
          ],
        },
        {
          eyebrow: 'AI solutions',
          title: 'Tools that already live inside the operation',
          body: 'Our AI solutions are not isolated features: they are part of the same picture, from discovery to conversion. AI Studio speeds up collection imagery and cuts time to market. The AI Assistant answers from the structured catalogue and the real business rules, connecting conversational discovery to the purchase.',
          link: { route: 'fashionAIStudio', label: 'Learn more about AI Studio' },
        },
        {
          eyebrow: 'Specialisation',
          title: 'Fashion retail is the best ground for agentic commerce',
          body: 'Fashion is where real complexity matters most: variant, size, colour, fit, stock per store and seasonality. AI agents only work well when they know all of it. Which is why specialising in fashion retail and preparing for agentic commerce are, in practice, the same work.',
          link: { route: 'fashion', label: 'Explore Fashion Retail' },
        },
      ],

      comparison: {
        title: 'Two ways to answer AI agents',
        lead: 'The difference is not in what you publish outwards. It is in what holds up the sale once the agent decides to buy.',
        genericTitle: 'Traditional approach',
        redicomTitle: 'The Redicom approach',
        rows: [
          {
            topic: 'Where the intelligence lives',
            generic: 'An external layer, disconnected from the operation.',
            redicom: 'AI wired into the heart of the operation.',
          },
          {
            topic: 'Catalogue',
            generic: 'Published without commercial context.',
            redicom: 'With context, variants and structured attributes.',
          },
          {
            topic: 'Stock and price',
            generic: 'Shallow integration, updated too late.',
            redicom: 'Real time, on the same underlying data.',
          },
          {
            topic: 'Commercial journey',
            generic: 'Distribution with no operational control.',
            redicom: 'Full control from start to finish.',
          },
          {
            topic: 'Checkout and orders',
            generic: 'Checkout and OMS in separate systems.',
            redicom: 'Native checkout, OMS and analytics.',
          },
          {
            topic: 'Invoicing in Portugal',
            generic: 'No integrated certified invoicing.',
            redicom: 'Invoicing and omnichannel POS certified by the tax authority.',
          },
        ],
      },

      closing: {
        title: 'Get the operation ready for the agents already buying',
        body: 'Talk to our team and see what your catalogue, your stock and your checkout still need in order to be ready.',
        points: [
          'We review the current state of your catalogue and product data',
          'We show what changes in discovery and in conversion',
          'No sales script: we start from your operation',
        ],
        submit: 'Request a demo',
      },

      related: ['fashion', 'platformOMS', 'why'],
    },
  },
};
