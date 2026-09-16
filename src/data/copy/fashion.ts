import type { SolutionSet } from './types';

/**
 * Paginas de Fashion Retail.
 *
 * E a aposta de especializacao mais forte da marca e o conteudo mais recente
 * do site em producao — por isso mantemos as oito paginas dedicadas em vez de
 * as fundir: cada uma responde a uma intencao de pesquisa propria e serve o
 * trabalho de ABM descrito no plano de marketing.
 */

export const fashionCopy: SolutionSet = {
  fashionB2C: {
    pt: {
      meta: {
        title: 'Commerce B2C para marcas de moda',
        description:
          'Loja online headless para marcas de moda: visual merchandising, Sizefit nativo, lookbooks shop-by-look, pesquisa por cor e tamanho, multimercado e multi-idioma.',
      },
      breadcrumb: 'Commerce B2C',
      hero: {
        eyebrow: 'Commerce B2C',
        title: 'Uma plataforma pensada para moda',
        lead: 'A imagem da sua marca não pode ser refém de templates rígidos. A nossa solução B2C usa arquitetura headless para separar a robustez do backoffice da criatividade do front-end, com visual merchandising inteligente e Sizefit nativo.',
        primary: 'Pedir demonstração',
      },
      features: [
        {
          title: 'Visual merchandising inteligente',
          body: 'Organize grelhas de produto por tendência, best-sellers ou margem, com drag & drop e pré-visualização antes de publicar.',
        },
        {
          title: 'Sizefit nativo',
          body: 'Recomendação de tamanho integrada na plataforma, sem serviços externos e sem custo adicional.',
        },
        {
          title: 'Lookbooks e shop by look',
          body: 'Transforme conteúdo editorial em compra direta, com hotspots clicáveis e stock em tempo real.',
        },
        {
          title: 'Multimercado e multi-idioma',
          body: 'Preços, moedas, idiomas e conteúdos adaptados a cada região, sem multiplicar a complexidade operacional.',
        },
      ],
      sections: [
        {
          eyebrow: 'Experiência de marca',
          title: 'Liberdade criativa com robustez operacional',
          body: 'No retalho de moda, converter depende de imagem, ritmo, navegação e contexto. Enquanto as plataformas genéricas impõem templates padronizados que criam homogeneidade visual, a arquitetura headless dá total liberdade no front-end mantendo o back-end intacto.',
          bullets: [
            'Arquitetura headless commerce, API-first',
            'Jornadas de compra desenhadas ao pixel',
            'Lógicas de upsell e cross-sell à medida',
            'Campanhas desenhadas para o calendário de coleções',
          ],
        },
        {
          eyebrow: 'Visual merchandising',
          title: 'As equipas conhecem os produtos melhor do que o algoritmo',
          body: 'O editor visual permite organizar a listagem, definir a ordem de apresentação, destacar peças-chave e reagir em tempo real a tendências e stock. As regras automáticas fazem o trabalho de base; o ajuste manual dá a precisão.',
          bullets: [
            'Reorganização de produtos com drag & drop',
            'Regras automáticas por stock, desconto ou vendas',
            'Fixação de produtos estratégicos em posições fixas',
            'Pré-visualização em tempo real antes de publicar',
            'Agendamento de layouts por campanha ou estação',
          ],
        },
        {
          eyebrow: 'Sizefit',
          title: 'O tamanho certo à primeira',
          body: 'A escolha de tamanho é o momento mais crítico da compra de moda online. O Sizefit usa algoritmos antropométricos refinados para o biotipo europeu, estimando medidas a partir de dados demográficos e das preferências de ajuste indicadas pelo cliente.',
          bullets: [
            '100% integrado e sem custo adicional',
            'Ajustes interativos de peito, cintura e ancas',
            'Preferência de ajuste: justo, normal ou folgado',
            'Self-hosted, com privacidade total e conforme o RGPD',
            'Sem scripts externos, sem impacto nos Core Web Vitals',
          ],
        },
        {
          eyebrow: 'Conversão',
          title: 'Cada detalhe conta para a conversão',
          body: 'No comércio de moda a taxa de conversão depende de fatores próprios do setor: a qualidade da imagem, a facilidade de encontrar o tamanho certo, a inspiração visual e a confiança na marca.',
          bullets: [
            'Imagens de alta resolução com zoom e vista 360°',
            'Recomendações de tamanho personalizadas',
            'Conteúdo editorial integrado no percurso de compra',
            'Checkout otimizado para reduzir abandono',
            'Promoções e campanhas sazonais automatizadas',
          ],
        },
      ],
      midForm: {
        heading: 'Quer ver a plataforma com a sua coleção?',
        body: 'Mostramos o visual merchandising, o Sizefit e os lookbooks aplicados a um catálogo como o seu.',
        submit: 'Pedir demonstração',
      },
      closing: {
        title: 'Pronto para elevar a experiência B2C da sua marca?',
        body: 'Falamos consigo sobre como transformar a loja online numa experiência de marca diferenciadora, com a profundidade operacional que o retalho de moda exige.',
        points: [
          'Arquitetura headless sem perder robustez operacional',
          'Sizefit e lookbooks incluídos, sem plugins de terceiros',
          'Resposta em menos de um dia útil',
        ],
        submit: 'Pedir demonstração',
      },
      related: ['fashionB2B', 'fashionOmnichannel', 'fashionAIStudio'],
    },
    en: {
      meta: {
        title: 'B2C Commerce for fashion brands',
        description:
          'A headless online store for fashion brands: visual merchandising, native Sizefit, shop-by-look lookbooks, search by colour and size, multi-market and multi-language.',
      },
      breadcrumb: 'B2C Commerce',
      hero: {
        eyebrow: 'B2C Commerce',
        title: 'A platform built for fashion',
        lead: 'Your brand’s image cannot be hostage to rigid templates. Our B2C solution uses a headless architecture that separates back-office robustness from front-end creativity, with intelligent visual merchandising and native Sizefit.',
        primary: 'Request a demo',
      },
      features: [
        {
          title: 'Intelligent visual merchandising',
          body: 'Arrange product grids by trend, best-sellers or margin, with drag & drop and a live preview before publishing.',
        },
        {
          title: 'Native Sizefit',
          body: 'Size recommendation built into the platform, with no external service and no additional cost.',
        },
        {
          title: 'Lookbooks and shop by look',
          body: 'Turn editorial content into direct purchase, with clickable hotspots and real-time stock.',
        },
        {
          title: 'Multi-market and multi-language',
          body: 'Prices, currencies, languages and content adapted per region, without multiplying operational complexity.',
        },
      ],
      sections: [
        {
          eyebrow: 'Brand experience',
          title: 'Creative freedom with operational robustness',
          body: 'In fashion retail, conversion depends on imagery, rhythm, navigation and context. Where generic platforms impose standard templates that breed visual sameness, a headless architecture gives full freedom at the front-end while leaving the back-end intact.',
          bullets: [
            'Headless, API-first commerce architecture',
            'Purchase journeys designed to the pixel',
            'Bespoke upsell and cross-sell logic',
            'Campaigns designed around the collection calendar',
          ],
        },
        {
          eyebrow: 'Visual merchandising',
          title: 'Your teams know the products better than the algorithm',
          body: 'The visual editor lets you arrange the listing, set the order of presentation, feature key pieces and react in real time to trends and stock. Automatic rules do the groundwork; manual adjustment gives the precision.',
          bullets: [
            'Drag & drop product reordering',
            'Automatic rules by stock, discount or sales',
            'Pinning strategic products to fixed positions',
            'Real-time preview before publishing',
            'Scheduled layouts per campaign or season',
          ],
        },
        {
          eyebrow: 'Sizefit',
          title: 'The right size first time',
          body: 'Choosing a size is the most critical moment in buying fashion online. Sizefit uses anthropometric algorithms refined for the European body type, estimating measurements from demographic data and the fit preferences the customer gives.',
          bullets: [
            '100% integrated, at no additional cost',
            'Interactive chest, waist and hip adjustments',
            'Fit preference: slim, regular or loose',
            'Self-hosted, fully private and GDPR compliant',
            'No external scripts, no impact on Core Web Vitals',
          ],
        },
        {
          eyebrow: 'Conversion',
          title: 'Every detail counts towards conversion',
          body: 'In fashion commerce, conversion rests on factors specific to the sector: image quality, how easily the right size is found, visual inspiration, and trust in the brand.',
          bullets: [
            'High-resolution imagery with zoom and 360° view',
            'Personalised size recommendations',
            'Editorial content inside the purchase journey',
            'Checkout optimised to reduce abandonment',
            'Automated seasonal promotions and campaigns',
          ],
        },
      ],
      midForm: {
        heading: 'Want to see the platform with your own collection?',
        body: 'We show visual merchandising, Sizefit and lookbooks applied to a catalogue like yours.',
        submit: 'Request a demo',
      },
      closing: {
        title: 'Ready to raise your brand’s B2C experience?',
        body: 'Let’s talk about turning the online store into a genuinely distinctive brand experience, with the operational depth fashion retail demands.',
        points: [
          'Headless architecture without losing operational robustness',
          'Sizefit and lookbooks included, no third-party plugins',
          'A reply within one business day',
        ],
        submit: 'Request a demo',
      },
      related: ['fashionB2B', 'fashionOmnichannel', 'fashionAIStudio'],
    },
  },

  fashionB2B: {
    pt: {
      meta: {
        title: 'Wholesale B2B para marcas de moda',
        description:
          'Portal wholesale nativo para moda: showrooms digitais, matriz de encomenda tamanho/cor, pré-packs, preços e crédito por cliente e integração ERP bidirecional.',
      },
      breadcrumb: 'Wholesale B2B',
      hero: {
        eyebrow: 'Wholesale B2B',
        title: 'Um portal wholesale construído de raiz para moda',
        lead: 'O canal wholesale representa uma fatia significativa da receita de muitas marcas de moda, e as suas necessidades são radicalmente diferentes do B2C. Substituímos processos manuais por um ecossistema digital que fala a linguagem do negócio.',
        primary: 'Pedir demonstração',
      },
      features: [
        {
          title: 'Showrooms digitais',
          body: 'Catálogos interativos com imagens de alta resolução e informação técnica, no lugar de showrooms físicos dispendiosos.',
        },
        {
          title: 'Matrix ordering',
          body: 'Encomenda de múltiplas quantidades por tamanho e cor numa única grelha. Sem erros, sem duplicação, sem folhas de cálculo.',
        },
        {
          title: 'Pré-packs e curvas',
          body: 'Compra em lotes pré-definidos, com curvas de tamanhos padrão e personalização por cliente.',
        },
        {
          title: 'Preços dinâmicos',
          body: 'Tabelas por cliente, volume, região ou temporada, com gestão de crédito integrada.',
        },
      ],
      sections: [
        {
          eyebrow: 'B2B nativo',
          title: 'A diferença entre adaptar e construir de raiz',
          body: 'As plataformas genéricas oferecem funcionalidades classificadas como "B2B-lite", com limites inaceitáveis para marcas cujo negócio wholesale é central: tetos de linhas no checkout, ausência de matrix ordering, sem gestão de pré-packs e preços limitados a descontos percentuais.',
          bullets: [
            'Sem limites de linhas por encomenda',
            'Encomendas em matriz cor × tamanho',
            'Pré-packs e curvas de tamanhos',
            'Preços por cliente, volume, região e temporada',
            'Pagamento a 30, 60 ou 90 dias com gestão de crédito',
          ],
        },
        {
          eyebrow: 'Ciclo comercial',
          title: 'Janelas de encomenda e sazonalidade',
          body: 'Controle os períodos de encomenda por coleção, com pré-encomendas sazonais e datas de entrega definidas. O ciclo completo (da apresentação da coleção à expedição) fica dentro da mesma plataforma.',
        },
        {
          eyebrow: 'Integrações',
          title: 'Sincronização bidirecional com o ERP',
          body: 'Produtos, clientes, encomendas e documentos financeiros sincronizados nos dois sentidos. A entrada manual de dados desaparece e, com ela, uma boa parte dos erros da operação wholesale.',
        },
      ],
      closing: {
        title: 'Pronto para evoluir a sua operação wholesale?',
        body: 'Quando o canal B2B pesa na receita, as limitações de uma plataforma genérica traduzem-se em perda de eficiência e frustração das equipas comerciais. Falemos sobre a sua operação.',
        points: [
          'Matrix ordering e pré-packs nativos',
          'Preços e crédito por cliente, sem folhas de cálculo',
          'Resposta em menos de um dia útil',
        ],
        submit: 'Pedir demonstração',
      },
      related: ['fashionB2C', 'platformB2B', 'fashionOmnichannel'],
    },
    en: {
      meta: {
        title: 'B2B Wholesale for fashion brands',
        description:
          'A native wholesale portal for fashion: digital showrooms, size/colour order matrix, pre-packs, per-customer pricing and credit, and two-way ERP integration.',
      },
      breadcrumb: 'B2B Wholesale',
      hero: {
        eyebrow: 'B2B Wholesale',
        title: 'A wholesale portal built from the ground up for fashion',
        lead: 'The wholesale channel carries a significant share of revenue for many fashion brands, and its needs are radically different from B2C. We replace manual process with a digital ecosystem that speaks the language of the business.',
        primary: 'Request a demo',
      },
      features: [
        {
          title: 'Digital showrooms',
          body: 'Interactive catalogues with high-resolution imagery and technical detail, in place of costly physical showrooms.',
        },
        {
          title: 'Matrix ordering',
          body: 'Order multiple quantities by size and colour in a single grid. No errors, no duplication, no spreadsheets.',
        },
        {
          title: 'Pre-packs and size curves',
          body: 'Buying in predefined lots, with standard size curves and per-customer customisation.',
        },
        {
          title: 'Dynamic pricing',
          body: 'Price lists by customer, volume, region or season, with integrated credit management.',
        },
      ],
      sections: [
        {
          eyebrow: 'Native B2B',
          title: 'The difference between adapting and building from scratch',
          body: 'Generic platforms offer what amounts to "B2B-lite": line-item ceilings at checkout, no native matrix ordering, no pre-pack management and pricing limited to percentage discounts. For a brand whose wholesale business is central, those limits are not acceptable.',
          bullets: [
            'No line-item limits per order',
            'Colour × size matrix ordering',
            'Pre-packs and size curves',
            'Pricing by customer, volume, region and season',
            'Payment at 30, 60 or 90 days with credit management',
          ],
        },
        {
          eyebrow: 'Commercial cycle',
          title: 'Order windows and seasonality',
          body: 'Control order periods per collection, with seasonal pre-orders and defined delivery dates. The full cycle (from collection preview to dispatch) stays inside one platform.',
        },
        {
          eyebrow: 'Integrations',
          title: 'Two-way ERP synchronisation',
          body: 'Products, customers, orders and financial documents synchronised in both directions. Manual data entry disappears, and with it a good share of the errors in the wholesale operation.',
        },
      ],
      closing: {
        title: 'Ready to move your wholesale operation forward?',
        body: 'When the B2B channel carries real revenue, a generic platform’s limits show up as lost efficiency and frustrated sales teams. Let’s talk about your operation.',
        points: [
          'Native matrix ordering and pre-packs',
          'Per-customer pricing and credit, without spreadsheets',
          'A reply within one business day',
        ],
        submit: 'Request a demo',
      },
      related: ['fashionB2C', 'platformB2B', 'fashionOmnichannel'],
    },
  },

  fashionOmnichannel: {
    pt: {
      meta: {
        title: 'Operação omnicanal e OMS para Fashion Retail',
        description:
          'O OMS encaminha cada encomenda para o ponto com stock mais próximo, com ship-from-store, stock distribuído em tempo real e devoluções omnicanal.',
      },
      breadcrumb: 'Operação Omnicanal',
      hero: {
        eyebrow: 'Operação Omnicanal',
        title: 'Omnicanal que resolve os desafios do retalho de moda',
        lead: 'No retalho de moda, a eficiência operacional é decisiva para proteger margem, garantir serviço e suportar crescimento. Centralizamos a complexidade logística numa plataforma preparada para a exigência real do setor.',
        primary: 'Pedir demonstração',
      },
      features: [
        {
          title: 'Ship-from-store',
          body: 'Quando o armazém não tem stock, a expedição sai da loja física com disponibilidade. Menos ruturas, entregas mais rápidas.',
        },
        {
          title: 'Stock distribuído em tempo real',
          body: 'Visibilidade total do stock em armazéns, lojas e comércio online, sem barreiras entre canais.',
        },
        {
          title: 'Devoluções omnicanal',
          body: 'Portal self-service que automatiza a reintegração do artigo no stock vendável, com devoluções cruzadas entre canais.',
        },
        {
          title: 'Resposta a picos comerciais',
          body: 'Saldos, Black Friday e lançamentos de coleção: a infraestrutura escala e o OMS distribui a carga.',
        },
      ],
      sections: [
        {
          eyebrow: 'Gestão de encomendas',
          title: 'Rotas inteligentes para máxima eficiência',
          body: 'O sistema aloca automaticamente a expedição ao ponto com stock disponível mais próximo do cliente: armazém central, loja física ou parceiro logístico. Isso traduz-se em tempos de entrega mais curtos, custos de expedição otimizados e melhor utilização do stock distribuído pela rede.',
          bullets: [
            'Rotas inteligentes multi-ponto',
            'Alocação por proximidade e disponibilidade',
            'Visibilidade do ciclo de vida completo da encomenda',
            'Gestão de exceções e re-encaminhamento automático',
            'Integração com múltiplas transportadoras',
          ],
        },
        {
          eyebrow: 'Fluxo',
          title: 'Da encomenda à entrega, orquestrado de ponta a ponta',
          body: 'A encomenda entra por qualquer canal: online, loja física ou B2B. O OMS analisa stock, proximidade e custos para definir o melhor ponto de expedição, o ponto selecionado prepara a encomenda, e o cliente recebe atualizações em tempo real até à entrega.',
        },
        {
          eyebrow: 'Arquitetura',
          title: 'Omnicanalidade verdadeira, não um POS acrescentado',
          body: 'As plataformas horizontais tratam o POS como um add-on separado, criando silos de dados e operações desligadas. Aqui, POS e OMS estão integrados de raiz: stock, cliente, histórico e encomendas fluem entre canais sem workarounds nem integrações frágeis.',
          link: { route: 'fashionPOS', label: 'Ver POS Omnicanal' },
        },
      ],
      closing: {
        title: 'Pronto para unificar a sua operação?',
        body: 'Falamos consigo sobre como ligar canais, equipas e stock numa operação verdadeiramente omnicanal.',
        points: [
          'Ship-from-store e stock distribuído em tempo real',
          'POS e OMS integrados de raiz, não por add-on',
          'Resposta em menos de um dia útil',
        ],
        submit: 'Pedir demonstração',
      },
      related: ['fashionPOS', 'platformOMS', 'fashionAnalytics'],
    },
    en: {
      meta: {
        title: 'Omnichannel operation and OMS for fashion retail',
        description:
          'The OMS routes every order to the nearest point with stock, with ship-from-store, real-time distributed stock and omnichannel returns.',
      },
      breadcrumb: 'Omnichannel Operation',
      hero: {
        eyebrow: 'Omnichannel Operation',
        title: 'Omnichannel that solves fashion retail’s real problems',
        lead: 'In fashion retail, operational efficiency is what protects margin, holds service together and supports growth. We centralise the logistics complexity in a platform built for what the sector actually demands.',
        primary: 'Request a demo',
      },
      features: [
        {
          title: 'Ship-from-store',
          body: 'When the warehouse is out of stock, the shipment leaves from a store that has it. Fewer stockouts, faster delivery.',
        },
        {
          title: 'Real-time distributed stock',
          body: 'Full visibility of stock across warehouses, stores and online commerce, with no barriers between channels.',
        },
        {
          title: 'Omnichannel returns',
          body: 'A self-service portal that automates putting the item back into sellable stock, with cross-channel returns.',
        },
        {
          title: 'Built for commercial peaks',
          body: 'Sales, Black Friday and collection launches: the infrastructure scales and the OMS spreads the load.',
        },
      ],
      sections: [
        {
          eyebrow: 'Order management',
          title: 'Intelligent routing for maximum efficiency',
          body: 'The system automatically allocates fulfilment to the point with available stock closest to the customer: central warehouse, physical store or logistics partner. That means shorter delivery times, optimised shipping costs and better use of stock spread across the network.',
          bullets: [
            'Intelligent multi-point routing',
            'Allocation by proximity and availability',
            'Visibility of the full order lifecycle',
            'Exception handling and automatic re-routing',
            'Integration with multiple carriers',
          ],
        },
        {
          eyebrow: 'Flow',
          title: 'From order to delivery, orchestrated end to end',
          body: 'The order arrives through any channel: online, store or B2B. The OMS weighs stock, proximity and cost to pick the best fulfilment point, that point prepares the order, and the customer gets real-time updates through to delivery.',
        },
        {
          eyebrow: 'Architecture',
          title: 'True omnichannel, not a POS bolted on',
          body: 'Horizontal platforms treat the POS as a separate add-on, creating data silos and disconnected operations. Here, POS and OMS are integrated from the ground up: stock, customer, history and orders flow between channels with no workarounds and no fragile integrations.',
          link: { route: 'fashionPOS', label: 'See Omnichannel POS' },
        },
      ],
      closing: {
        title: 'Ready to unify your operation?',
        body: 'Let’s talk about connecting channels, teams and stock into one genuinely omnichannel operation.',
        points: [
          'Ship-from-store and real-time distributed stock',
          'POS and OMS integrated natively, not bolted on',
          'A reply within one business day',
        ],
        submit: 'Request a demo',
      },
      related: ['fashionPOS', 'platformOMS', 'fashionAnalytics'],
    },
  },

  fashionPOS: {
    pt: {
      meta: {
        title: 'POS omnicanal para lojas de moda',
        description:
          'POS certificado pela AT com histórico omnicanal do cliente, endless aisle e devoluções cruzadas, para lojas de moda ligadas ao comércio online.',
      },
      breadcrumb: 'POS Omnicanal',
      hero: {
        eyebrow: 'POS Omnicanal',
        title: 'Ligue todos os canais com um POS certificado pela AT',
        lead: 'A loja física não pode estar desligada do comércio online. Ligamos stock, clientes, histórico, vendas e operação comercial entre todos os canais, para que a equipa de loja sirva melhor e aproveite os recursos disponíveis.',
        primary: 'Pedir demonstração',
      },
      features: [
        {
          title: 'Perfil de cliente omnicanal',
          body: 'Histórico completo em todos os canais: compras, devoluções, preferências de tamanho, wishlist e fidelização.',
        },
        {
          title: 'Endless aisle',
          body: 'Venda em loja artigos disponíveis online, com envio direto para a morada do cliente.',
        },
        {
          title: 'Gestão de stock em loja',
          body: 'Stock da loja, do armazém e das outras lojas em tempo real, com transferências e contagens integradas.',
        },
        {
          title: 'Promoções e fidelização',
          body: 'As mesmas campanhas e pontos funcionam online e em loja, sem discrepâncias.',
        },
      ],
      sections: [
        {
          eyebrow: 'Experiência unificada',
          title: 'Um POS que conhece o cliente em todos os canais',
          body: 'Os lojistas acedem ao histórico omnicanal: compras online, devoluções, preferências de tamanho, wishlist e pontos. Isso permite um atendimento informado que eleva a experiência na loja física e aumenta o valor médio da venda.',
          bullets: [
            'Visão integrada do cliente entre canais',
            'Devoluções cruzadas entre loja e online',
            'Experiência consistente em todos os pontos de venda',
            'Interface desenhada para equipas de loja de moda',
          ],
        },
        {
          eyebrow: 'No dia a dia',
          title: 'Três situações que mudam com um POS integrado',
          body: 'O cliente quer um tamanho que não está em loja: a equipa consulta o stock online e encomenda no POS, com envio para a morada do cliente. Comprou online e prefere devolver na loja: a devolução é processada no POS e o artigo reintegrado no stock. E, em qualquer conversa, a equipa vê o perfil completo do cliente.',
        },
        {
          eyebrow: 'Contexto',
          title: 'A loja física voltou a ganhar peso',
          body: 'Segundo a McKinsey, as marcas de moda e luxo aumentaram significativamente o investimento em espaço de retalho físico no primeiro semestre de 2025. Num contexto em que a loja recupera relevância, um POS verdadeiramente omnicanal deixa de ser opcional.',
        },
      ],
      closing: {
        title: 'Pronto para unificar a experiência em loja e online?',
        body: 'Falamos consigo sobre como transformar as suas lojas em pontos de contacto verdadeiramente integrados com o comércio online.',
        points: [
          'Certificação da Autoridade Tributária incluída',
          'Endless aisle e devoluções cruzadas de origem',
          'Resposta em menos de um dia útil',
        ],
        submit: 'Pedir demonstração',
      },
      related: ['fashionOmnichannel', 'platformPOS', 'fashionB2C'],
    },
    en: {
      meta: {
        title: 'Omnichannel POS for fashion stores',
        description:
          'A POS certified by the Portuguese tax authority, with omnichannel customer history, endless aisle and cross-channel returns, for fashion stores connected to e-commerce.',
      },
      breadcrumb: 'Omnichannel POS',
      hero: {
        eyebrow: 'Omnichannel POS',
        title: 'Connect every channel with a certified POS',
        lead: 'The physical store cannot sit apart from online commerce. We connect stock, customers, history, sales and commercial operations across every channel, so store teams serve better and make use of what is actually available.',
        primary: 'Request a demo',
      },
      features: [
        {
          title: 'Omnichannel customer profile',
          body: 'Full history across channels: purchases, returns, size preferences, wishlist and loyalty.',
        },
        {
          title: 'Endless aisle',
          body: 'Sell items in store that are available online, shipped straight to the customer’s address.',
        },
        {
          title: 'In-store stock management',
          body: 'Store, warehouse and other stores’ stock in real time, with transfers and counts built in.',
        },
        {
          title: 'Promotions and loyalty',
          body: 'The same campaigns and points work online and in store, with no discrepancies.',
        },
      ],
      sections: [
        {
          eyebrow: 'Unified experience',
          title: 'A POS that knows the customer across every channel',
          body: 'Store staff see the omnichannel history: online purchases, returns, size preferences, wishlist and points. That makes for informed service that lifts the in-store experience and the average sale.',
          bullets: [
            'Integrated customer view across channels',
            'Cross-channel returns between store and online',
            'A consistent experience at every point of sale',
            'An interface designed for fashion store teams',
          ],
        },
        {
          eyebrow: 'Day to day',
          title: 'Three situations that change with an integrated POS',
          body: 'A customer wants a size the store does not have: the team checks online stock and orders at the POS, shipped to the customer. They bought online and would rather return in store: the return is processed at the POS and the item goes back into stock. And in any conversation, the team sees the full customer profile.',
        },
        {
          eyebrow: 'Context',
          title: 'The physical store matters again',
          body: 'According to McKinsey, fashion and luxury brands increased their investment in physical retail space significantly in the first half of 2025. With the store regaining relevance, a genuinely omnichannel POS stops being optional.',
        },
      ],
      closing: {
        title: 'Ready to unify the in-store and online experience?',
        body: 'Let’s talk about turning your stores into touchpoints genuinely integrated with online commerce.',
        points: [
          'Portuguese tax authority certification included',
          'Endless aisle and cross-channel returns from the start',
          'A reply within one business day',
        ],
        submit: 'Request a demo',
      },
      related: ['fashionOmnichannel', 'platformPOS', 'fashionB2C'],
    },
  },

  fashionAIStudio: {
    pt: {
      meta: {
        title: 'AI Studio: fotografia de produto com IA para moda',
        description:
          'O AI Studio gera imagens de catálogo com IA e adapta-as a loja, redes sociais e marketplaces, com consistência visual em escala para marcas de moda.',
      },
      breadcrumb: 'AI Studio',
      hero: {
        eyebrow: 'AI Studio',
        title: 'Fotografe a sua coleção do dia para a noite',
        lead: 'Acelere a produção de imagem e conteúdo visual para comércio online, campanha e comunicação comercial. Reduza o time-to-market das coleções com consistência estética e menos esforço manual.',
        primary: 'Pedir demonstração',
      },
      features: [
        {
          title: 'Geração de imagem para catálogo',
          body: 'Variações de fundo, iluminação e composição para diferentes canais e mercados, mantendo a identidade visual.',
        },
        {
          title: 'Adaptação multicanal',
          body: 'Uma imagem, múltiplas saídas: loja online, redes sociais, marketplaces, email marketing e catálogos impressos.',
        },
        {
          title: 'Consistência visual em escala',
          body: 'O AI Studio aprende o estilo visual da marca e aplica-o de forma consistente a centenas de produtos.',
        },
        {
          title: 'Edição e retoque assistidos',
          body: 'Remoção de fundo, ajuste de cor e composição com apoio de IA, reduzindo o tempo de pós-produção.',
        },
      ],
      sections: [
        {
          eyebrow: 'IA nativa',
          title: 'Integrada na plataforma, não acrescentada por plugin',
          body: 'Ao contrário das plataformas genéricas, que dependem de plugins de terceiros para funcionalidades de inteligência artificial, o AI Studio está nativamente integrado e foi concebido para as exigências do retalho de moda. A diferença entre IA genérica e IA nativa aparece nos resultados e na eficiência.',
          bullets: [
            'Integração direta com o catálogo de produtos',
            'Aceleração da produção visual para catálogo',
            'Apoio à comunicação comercial e campanhas',
            'Redução de custos de produção fotográfica',
          ],
        },
        {
          eyebrow: 'Impacto',
          title: 'O que muda na operação',
          body: 'Sem AI Studio: sessões fotográficas longas e dispendiosas, pós-produção manual demorada, inconsistência visual entre produtos, adaptação manual para cada canal e semanas entre produção e publicação. Com AI Studio: produção escalável, consistência garantida, adaptação automática multicanal e dias em vez de semanas.',
        },
        {
          eyebrow: 'Contexto',
          title: 'A IA passou de vantagem a requisito',
          body: 'Segundo o relatório The State of Fashion 2026 da McKinsey, mais de 35% dos executivos de moda já utilizam IA generativa em áreas como criação de imagem, copywriting e descoberta de produto. A questão deixou de ser se uma marca deve adotar IA, e passou a ser como.',
        },
      ],
      closing: {
        title: 'Pronto para acelerar a produção visual da sua marca?',
        body: 'Falamos consigo sobre como o AI Studio pode mudar a forma como a sua marca produz conteúdo visual.',
        points: [
          'IA nativa na plataforma, sem plugins de terceiros',
          'Consistência estética em catálogos extensos',
          'Resposta em menos de um dia útil',
        ],
        submit: 'Pedir demonstração',
      },
      related: ['fashionAIAssistant', 'fashionB2C', 'agentic'],
    },
    en: {
      meta: {
        title: 'AI Studio: AI product photography for fashion',
        description:
          'AI Studio generates catalogue imagery with AI and adapts it for the store, social and marketplaces, with visual consistency at scale for fashion brands.',
      },
      breadcrumb: 'AI Studio',
      hero: {
        eyebrow: 'AI Studio',
        title: 'Shoot your collection overnight',
        lead: 'Speed up the production of imagery and visual content for e-commerce, campaigns and commercial communication. Cut your collections’ time to market with aesthetic consistency and less manual effort.',
        primary: 'Request a demo',
      },
      features: [
        {
          title: 'Catalogue image generation',
          body: 'Variations of background, lighting and composition for different channels and markets, holding the brand’s visual identity.',
        },
        {
          title: 'Multi-channel adaptation',
          body: 'One image, many outputs: online store, social, marketplaces, email marketing and print catalogues.',
        },
        {
          title: 'Visual consistency at scale',
          body: 'AI Studio learns the brand’s visual style and applies it consistently across hundreds of products.',
        },
        {
          title: 'Assisted editing and retouching',
          body: 'Background removal, colour adjustment and composition with AI support, cutting post-production time.',
        },
      ],
      sections: [
        {
          eyebrow: 'Native AI',
          title: 'Built into the platform, not bolted on by plugin',
          body: 'Unlike generic platforms, which lean on third-party plugins for AI features, AI Studio is natively integrated and was designed for what fashion retail demands. The difference between generic and native AI shows up in the results and in the efficiency.',
          bullets: [
            'Direct integration with the product catalogue',
            'Faster visual production for the catalogue',
            'Support for campaigns and commercial communication',
            'Lower photographic production costs',
          ],
        },
        {
          eyebrow: 'Impact',
          title: 'What changes in the operation',
          body: 'Without AI Studio: long, expensive shoots, slow manual post-production, visual inconsistency across products, manual adaptation per channel, and weeks between production and publication. With it: scalable production, guaranteed consistency, automatic multi-channel adaptation, and days instead of weeks.',
        },
        {
          eyebrow: 'Context',
          title: 'AI has moved from advantage to requirement',
          body: 'According to McKinsey’s The State of Fashion 2026, more than 35% of fashion executives already use generative AI in areas such as image creation, copywriting and product discovery. The question is no longer whether a brand should adopt AI, but how.',
        },
      ],
      closing: {
        title: 'Ready to speed up your brand’s visual production?',
        body: 'Let’s talk about how AI Studio can change the way your brand produces visual content.',
        points: [
          'Native AI in the platform, no third-party plugins',
          'Aesthetic consistency across large catalogues',
          'A reply within one business day',
        ],
        submit: 'Request a demo',
      },
      related: ['fashionAIAssistant', 'fashionB2C', 'agentic'],
    },
  },

  fashionAIAssistant: {
    pt: {
      meta: {
        title: 'Assistente IA para comércio online, 24/7',
        description:
          'O Assistente IA responde 24/7 com dados reais da loja (stock, estado de encomendas e recomendações) e encaminha para a equipa quando é preciso.',
      },
      breadcrumb: 'Assistente IA',
      hero: {
        eyebrow: 'Assistente IA',
        title: 'Não é um bot: é um assistente que responde a tudo',
        lead: 'Um chat inteligente que enriquece a jornada de compra na sua loja online. Disponível 24 horas por dia, responde a dúvidas com informação em tempo real e alivia a carga das equipas de apoio ao cliente.',
        primary: 'Pedir demonstração',
      },
      features: [
        {
          title: 'Assistência 24/7',
          body: 'Respostas imediatas a qualquer hora, sem esperar pelo horário de funcionamento.',
        },
        {
          title: 'Stock e encomendas em tempo real',
          body: 'Informação vinda da operação, não de um guião: disponibilidade real e estado real da encomenda.',
        },
        {
          title: 'Recomendações contextuais',
          body: 'Sugestões baseadas na navegação e no comportamento do cliente, que aumentam a conversão.',
        },
        {
          title: 'Escalamento inteligente',
          body: 'Quando é preciso uma pessoa, o pedido passa para a equipa com todo o contexto da conversa.',
        },
      ],
      sections: [
        {
          eyebrow: 'IA contextual',
          title: 'Inteligência que compreende o seu negócio',
          body: 'O assistente aparece diretamente na loja online e usa dados reais da operação para dar respostas precisas. Elimina incertezas e facilita a decisão do cliente em qualquer etapa da jornada de compra, porque sabe o que está em stock e onde está a encomenda.',
          bullets: [
            'Assistência automatizada permanente',
            'Informação de stock e encomendas em tempo real',
            'Recomendações inteligentes de produto',
            'Redução da carga operacional da equipa',
          ],
        },
        {
          eyebrow: 'Controlo',
          title: 'Comportamento configurável e alinhado com a marca',
          body: 'O atendimento é automático, mas o controlo é da sua equipa. Defina as regras, o tom de voz e as instruções que orientam a comunicação, garantindo que o assistente permanece alinhado com as políticas da marca em todos os pontos de contacto.',
        },
      ],
      closing: {
        title: 'Pronto para transformar o seu atendimento?',
        body: 'Falamos consigo sobre como elevar a satisfação dos clientes sem aumentar a equipa de apoio.',
        points: [
          'Respostas com dados reais da sua operação',
          'Tom de voz e regras definidos por si',
          'Resposta em menos de um dia útil',
        ],
        submit: 'Pedir demonstração',
      },
      related: ['fashionAIStudio', 'agentic', 'fashionB2C'],
    },
    en: {
      meta: {
        title: 'AI Assistant for online commerce, 24/7',
        description:
          'The AI Assistant answers 24/7 with real store data (stock, order status and recommendations) and hands over to the team when it needs to.',
      },
      breadcrumb: 'AI Assistant',
      hero: {
        eyebrow: 'AI Assistant',
        title: 'Not a bot: an assistant that actually answers',
        lead: 'An intelligent chat that enriches the buying journey in your online store. Available around the clock, it answers with real-time information and takes load off your customer support team.',
        primary: 'Request a demo',
      },
      features: [
        {
          title: '24/7 assistance',
          body: 'Immediate answers at any hour, with no waiting for opening times.',
        },
        {
          title: 'Real-time stock and orders',
          body: 'Information from the operation, not from a script: real availability and real order status.',
        },
        {
          title: 'Contextual recommendations',
          body: 'Suggestions based on the customer’s browsing and behaviour, which lift conversion.',
        },
        {
          title: 'Intelligent escalation',
          body: 'When a person is needed, the request passes to the team with the full conversation context.',
        },
      ],
      sections: [
        {
          eyebrow: 'Contextual AI',
          title: 'Intelligence that understands your business',
          body: 'The assistant appears directly in the online store and uses real operational data to give precise answers. It removes uncertainty and helps the customer decide at any stage of the journey, because it knows what is in stock and where the order is.',
          bullets: [
            'Permanent automated assistance',
            'Real-time stock and order information',
            'Intelligent product recommendations',
            'Lower operational load on the team',
          ],
        },
        {
          eyebrow: 'Control',
          title: 'Configurable behaviour, aligned with the brand',
          body: 'The service is automatic, but the control stays with your team. Set the rules, the tone of voice and the instructions that guide the conversation, keeping the assistant aligned with brand policy at every touchpoint.',
        },
      ],
      closing: {
        title: 'Ready to change how you serve customers?',
        body: 'Let’s talk about lifting customer satisfaction without growing the support team.',
        points: [
          'Answers built on your operation’s real data',
          'Tone of voice and rules defined by you',
          'A reply within one business day',
        ],
        submit: 'Request a demo',
      },
      related: ['fashionAIStudio', 'agentic', 'fashionB2C'],
    },
  },

  fashionMarketing: {
    pt: {
      meta: {
        title: 'Marketing e automação para marcas de moda',
        description:
          'Campanhas ligadas ao calendário da coleção: segmentação por histórico de tamanhos e categorias e automação de cada etapa do ciclo de vida do cliente.',
      },
      breadcrumb: 'Marketing e Automação',
      hero: {
        eyebrow: 'Marketing e Automação',
        title: 'Campanhas ligadas ao ritmo da coleção',
        lead: 'No retalho de moda o marketing não pode funcionar em isolamento. Ligamos campanhas, comportamento do cliente, necessidades de stock e calendário comercial na mesma plataforma.',
        primary: 'Pedir demonstração',
      },
      features: [
        {
          title: 'Segmentação avançada',
          body: 'Por histórico de tamanhos, marcas preferidas, categorias sazonais, valor de vida e comportamento de navegação.',
        },
        {
          title: 'Automação de campanhas',
          body: 'Fluxos para cada etapa: boas-vindas, abandono de carrinho, pós-compra, reativação e aniversário.',
        },
        {
          title: 'Promoções sazonais',
          body: 'Regras promocionais complexas ativadas sem desenvolvimento, para saldos, mid-season ou lançamentos.',
        },
        {
          title: 'Performance em tempo real',
          body: 'Aberturas, conversão, receita gerada e retorno, com espaço para ajustar campanhas em curso.',
        },
      ],
      sections: [
        {
          eyebrow: 'Marketing Cloud',
          title: 'Marketing alinhado com a operação',
          body: 'As campanhas precisam de estar ligadas ao calendário de coleções, ao estado do stock, ao comportamento do cliente e aos objetivos comerciais de cada momento. Com marketing e operação na mesma plataforma, as campanhas são informadas por dados reais e executadas com a rapidez que o setor exige.',
          bullets: [
            'Campanhas automatizadas por segmento e comportamento',
            'Segmentação por histórico de compras, tamanhos e categorias',
            'Ativação rápida de promoções sazonais',
            'Personalização de comunicação por mercado',
          ],
        },
        {
          eyebrow: 'Calendário comercial',
          title: 'O ano de uma marca de moda tem ritmo próprio',
          body: 'Saldos de inverno e preparação da coleção Spring/Summer em janeiro e fevereiro. Lançamento SS em março e abril. Mid-season e sell-through em maio e junho. Saldos de verão e pré-encomendas B2B em julho e agosto. Lançamento Fall/Winter em setembro e outubro. Black Friday, Natal e os maiores picos do ano em novembro e dezembro.',
        },
        {
          eyebrow: 'A diferença',
          title: 'Não lançar uma campanha para um produto sem stock',
          body: 'A vantagem de ter marketing dentro da plataforma de comércio é a articulação com dados reais: ajustar promoções com base na performance em tempo real e coordenar a comunicação com a capacidade operacional de expedição. Isso só é possível quando marketing e operação partilham a mesma base de dados.',
          link: { route: 'platformMarketingCloud', label: 'Ver Marketing Cloud' },
        },
      ],
      closing: {
        title: 'Pronto para ligar o marketing ao ritmo da sua marca?',
        body: 'Falamos consigo sobre como comunicar com relevância e converter com consistência ao longo do calendário comercial.',
        points: [
          'Campanhas informadas pelo stock real',
          'Segmentos por tamanho, categoria e sazonalidade',
          'Resposta em menos de um dia útil',
        ],
        submit: 'Pedir demonstração',
      },
      related: ['platformMarketingCloud', 'fashionAnalytics', 'fashionB2C'],
    },
    en: {
      meta: {
        title: 'Marketing and automation for fashion brands',
        description:
          'Campaigns tied to the collection calendar: segmentation by size and category history, and automation of every stage of the customer lifecycle.',
      },
      breadcrumb: 'Marketing and Automation',
      hero: {
        eyebrow: 'Marketing and Automation',
        title: 'Campaigns tied to the rhythm of the collection',
        lead: 'In fashion retail, marketing cannot work in isolation. We connect campaigns, customer behaviour, stock needs and the commercial calendar on one platform.',
        primary: 'Request a demo',
      },
      features: [
        {
          title: 'Advanced segmentation',
          body: 'By size history, preferred brands, seasonal categories, lifetime value and browsing behaviour.',
        },
        {
          title: 'Campaign automation',
          body: 'Flows for every stage: welcome, abandoned basket, post-purchase, reactivation and birthday.',
        },
        {
          title: 'Seasonal promotions',
          body: 'Complex promotional rules activated without development, for sales, mid-season or launches.',
        },
        {
          title: 'Real-time performance',
          body: 'Opens, conversion, revenue and return, with room to adjust campaigns while they run.',
        },
      ],
      sections: [
        {
          eyebrow: 'Marketing Cloud',
          title: 'Marketing aligned with the operation',
          body: 'Campaigns need to be tied to the collection calendar, to stock levels, to customer behaviour and to the commercial goals of the moment. With marketing and operations on one platform, campaigns are informed by real data and run at the speed the sector demands.',
          bullets: [
            'Automated campaigns by segment and behaviour',
            'Segmentation by purchase history, sizes and categories',
            'Rapid activation of seasonal promotions',
            'Communication personalised per market',
          ],
        },
        {
          eyebrow: 'Commercial calendar',
          title: 'A fashion brand’s year has its own rhythm',
          body: 'Winter sales and Spring/Summer preparation in January and February. The SS launch in March and April. Mid-season and sell-through in May and June. Summer sales and B2B pre-orders in July and August. The Fall/Winter launch in September and October. Black Friday, Christmas and the year’s biggest peaks in November and December.',
        },
        {
          eyebrow: 'The difference',
          title: 'Not launching a campaign for a product that is out of stock',
          body: 'The advantage of marketing living inside the commerce platform is the link to real data: adjusting promotions on live performance and matching communication to what fulfilment can actually handle. That is only possible when marketing and operations share one database.',
          link: { route: 'platformMarketingCloud', label: 'See Marketing Cloud' },
        },
      ],
      closing: {
        title: 'Ready to tie marketing to your brand’s rhythm?',
        body: 'Let’s talk about communicating with relevance and converting consistently across the commercial calendar.',
        points: [
          'Campaigns informed by real stock',
          'Segments by size, category and seasonality',
          'A reply within one business day',
        ],
        submit: 'Request a demo',
      },
      related: ['platformMarketingCloud', 'fashionAnalytics', 'fashionB2C'],
    },
  },

  fashionAnalytics: {
    pt: {
      meta: {
        title: 'Analytics para Fashion Retail: sell-through e rotação de stock',
        description:
          'Sell-through, rotação de stock e performance por coleção, canal e mercado: o Redicom Analytics dá às marcas de moda KPIs sobre dados unificados.',
      },
      breadcrumb: 'Analytics e Intelligence',
      hero: {
        eyebrow: 'Analytics e Intelligence',
        title: 'Analytics com contexto de retalho de moda',
        lead: 'Mais do que dashboards estáticos, as marcas precisam de inteligência que ajude a interpretar, priorizar e agir. Juntamos contexto comercial, operação e analytics na mesma plataforma.',
        primary: 'Pedir demonstração',
      },
      features: [
        {
          title: 'Sell-through e rotação',
          body: 'Stock vendido face a stock comprado, por coleção e categoria, e velocidade de rotação por produto e localização.',
        },
        {
          title: 'Análise de devoluções',
          body: 'Devoluções por motivo, tamanho, produto e canal: o custo que mais pesa na margem do setor.',
        },
        {
          title: 'Performance por canal e mercado',
          body: 'Valor médio de encomenda e comparação entre online, loja, B2B e marketplaces.',
        },
        {
          title: 'Valor de vida do cliente',
          body: 'Segmentação RFM, análise de cohorts, padrões de compra e previsão de abandono.',
        },
      ],
      sections: [
        {
          eyebrow: 'Inteligência acionável',
          title: 'Os dados só têm valor quando geram ação',
          body: 'Não oferecemos apenas gráficos e números: oferecemos leitura contextualizada para o negócio de moda. Como todos os dados (vendas, stock, clientes, marketing, operação) vivem na mesma plataforma, a análise é integrada e a visão é completa.',
          bullets: [
            'Leitura prática da performance por canal e mercado',
            'Análise de sell-through e rotação de stock',
            'Apoio à decisão com dados em tempo real',
            'Benchmarking e contexto operacional',
          ],
        },
        {
          eyebrow: 'Capacidades',
          title: 'Mais do que dashboards',
          body: 'Painéis em tempo real personalizáveis por função, análise detalhada por produto, variante, cor e tamanho, modelos preditivos para antecipar tendências e necessidades de stock, e relatórios periódicos enviados automaticamente às equipas relevantes.',
          bullets: [
            'Dashboards personalizáveis por função',
            'Análise por produto, variante, cor e tamanho',
            'Segmentação RFM e análise de cohorts',
            'Previsão de vendas e de necessidades de stock',
            'Relatórios automatizados, sem exportações manuais',
          ],
        },
        {
          eyebrow: 'A vantagem',
          title: 'Dados unificados, sem silos',
          body: 'As plataformas genéricas impõem modelos de acesso a dados restritivos que dificultam analytics avançados e a aplicação de IA. Aqui, vendas, stock, clientes, marketing e logística vivem no mesmo sítio, sem silos, sem integrações frágeis, sem dados desatualizados.',
        },
      ],
      closing: {
        title: 'Pronto para transformar dados em decisões?',
        body: 'Falamos consigo sobre os indicadores que a sua equipa precisa de ver e sobre o que falta hoje para os ter.',
        points: [
          'KPIs próprios do retalho de moda, não métricas genéricas',
          'Dados de venda, stock e cliente na mesma base',
          'Resposta em menos de um dia útil',
        ],
        submit: 'Pedir demonstração',
      },
      related: ['platformAnalytics', 'fashionMarketing', 'fashionOmnichannel'],
    },
    en: {
      meta: {
        title: 'Analytics for fashion retail: sell-through and stock rotation',
        description:
          'Sell-through, stock rotation and performance by collection, channel and market: Redicom Analytics gives fashion brands KPIs on unified data.',
      },
      breadcrumb: 'Analytics and Intelligence',
      hero: {
        eyebrow: 'Analytics and Intelligence',
        title: 'Analytics with fashion retail context',
        lead: 'More than static dashboards, brands need intelligence that helps them interpret, prioritise and act. We bring commercial context, operations and analytics onto one platform.',
        primary: 'Request a demo',
      },
      features: [
        {
          title: 'Sell-through and rotation',
          body: 'Stock sold against stock bought, by collection and category, and rotation speed by product and location.',
        },
        {
          title: 'Returns analysis',
          body: 'Returns by reason, size, product and channel: the cost that weighs most on margin in this sector.',
        },
        {
          title: 'Performance by channel and market',
          body: 'Average order value and comparison across online, store, B2B and marketplaces.',
        },
        {
          title: 'Customer lifetime value',
          body: 'RFM segmentation, cohort analysis, purchase patterns and churn prediction.',
        },
      ],
      sections: [
        {
          eyebrow: 'Actionable intelligence',
          title: 'Data only matters when it produces action',
          body: 'We do not just offer charts and numbers: we offer a reading with fashion business context. Because all the data (sales, stock, customers, marketing, operations) lives on the same platform, the analysis is integrated and the view is complete.',
          bullets: [
            'A practical read of performance by channel and market',
            'Sell-through and stock rotation analysis',
            'Decision support on real-time data',
            'Benchmarking and operational context',
          ],
        },
        {
          eyebrow: 'Capabilities',
          title: 'More than dashboards',
          body: 'Real-time panels customisable per role, detailed analysis by product, variant, colour and size, predictive models to anticipate trends and stock needs, and periodic reports sent automatically to the relevant teams.',
          bullets: [
            'Dashboards customisable per role',
            'Analysis by product, variant, colour and size',
            'RFM segmentation and cohort analysis',
            'Sales and stock-need forecasting',
            'Automated reports, with no manual exports',
          ],
        },
        {
          eyebrow: 'The advantage',
          title: 'Unified data, no silos',
          body: 'Generic platforms impose restrictive data-access models that get in the way of advanced analytics and applied AI. Here, sales, stock, customers, marketing and logistics live in one place: no silos, no fragile integrations, no stale data.',
        },
      ],
      closing: {
        title: 'Ready to turn data into decisions?',
        body: 'Let’s talk about the indicators your team needs to see, and what is missing today to have them.',
        points: [
          'KPIs specific to fashion retail, not generic metrics',
          'Sales, stock and customer data on one base',
          'A reply within one business day',
        ],
        submit: 'Request a demo',
      },
      related: ['platformAnalytics', 'fashionMarketing', 'fashionOmnichannel'],
    },
  },
};
