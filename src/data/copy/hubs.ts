import type { DeepSection, Feature } from './types';
import type { Lang, RouteId } from '@i18n/routes';

/**
 * Paginas-mae da Plataforma e do Fashion Retail.
 *
 * Nao usam o modelo das paginas de solucao porque o trabalho delas e outro:
 * em vez de aprofundar um tema, tem de dar a volta completa ao conjunto e
 * encaminhar para a pagina certa. Por isso trazem uma grelha de modulos, que
 * as paginas de solucao nao tem.
 */

export type HubCopy = {
  meta: { title: string; description: string };
  breadcrumb: string;
  hero: {
    eyebrow: string;
    title: string;
    lead: string;
    primary: string;
    secondary: string;
  };
  /** Os quatro pilares que explicam a abordagem antes da lista de modulos. */
  pillars: { eyebrow: string; title: string; lead: string; items: Feature[] };
  modules: {
    eyebrow: string;
    title: string;
    lead: string;
    items: { route: RouteId; title: string; body: string }[];
  };
  sections: DeepSection[];
  /**
   * Temas com pagina propria que nao cabem na grelha principal sem a tornar
   * ilegivel. Aparecem como lista de ligacoes, nao como cartoes.
   */
  more?: { title: string; lead?: string; routes: RouteId[] };
  midForm: { heading: string; body: string; submit: string };
  comparison?: {
    title: string;
    lead?: string;
    genericTitle: string;
    redicomTitle: string;
    rows: { topic?: string; generic: string; redicom: string }[];
  };
  closing: { title: string; body: string; points: string[]; submit: string };
};

export const hubCopy: Record<'platform' | 'fashion', Record<Lang, HubCopy>> = {
  platform: {
    pt: {
      meta: {
        title: 'Redicom Commerce Cloud — a plataforma de comércio digital',
        description:
          'B2C, B2B, OMS, POS omnicanal, marketing e analytics sobre o mesmo catálogo, o mesmo stock e o mesmo cliente. Conheça a Redicom Commerce Cloud.',
      },
      breadcrumb: 'Plataforma',

      hero: {
        eyebrow: 'Redicom Commerce Cloud',
        title: 'Uma base única para todo o comércio digital',
        lead: 'Não são módulos integrados. São a mesma plataforma: B2C, B2B, gestão de encomendas, loja física e marketing partilham o catálogo, o stock e o cliente. Desenvolvemo-la desde 2002, para operações onde as plataformas genéricas deixam de chegar.',
        primary: 'Falar com especialista',
        secondary: 'Ver o que nos distingue',
      },

      pillars: {
        eyebrow: 'A abordagem',
        title: 'Porque é que uma base única muda a operação',
        lead: 'A diferença entre uma plataforma e um conjunto de sistemas ligados aparece no dia a dia: no tempo que se perde a conciliar dados, no custo de manter integrações e na rapidez com que se abre um canal novo.',
        items: [
          {
            title: 'Um catálogo, não vários',
            body: 'O produto é criado uma vez e serve a loja online, o portal B2B, a loja física e os marketplaces. Não há versões do mesmo artigo a divergir entre sistemas.',
          },
          {
            title: 'Stock em tempo real',
            body: 'A disponibilidade é a mesma em todos os canais, no momento. Armazém, loja e e-commerce vêem o mesmo número, sem janelas de sincronização.',
          },
          {
            title: 'Um cliente, um histórico',
            body: 'A compra em loja, a encomenda online e o contacto com o apoio ao cliente ficam no mesmo registo. É o que torna possível fidelizar e devolver entre canais.',
          },
          {
            title: 'Sem camada de integração',
            body: 'Aquilo que noutras plataformas é um projeto de integração — e depois uma manutenção permanente — aqui já está ligado de origem.',
          },
        ],
      },

      modules: {
        eyebrow: 'A plataforma',
        title: 'O que está incluído',
        lead: 'Cada área tem profundidade própria e todas assentam na mesma base. Escolha por onde quer começar.',
        items: [
          {
            route: 'platformB2C',
            title: 'Plataforma B2C',
            body: 'A plataforma cloud utilizada pelos grandes retalhistas nacionais, com arquitetura headless e comércio multimercado.',
          },
          {
            route: 'platformB2B',
            title: 'Plataforma B2B',
            body: 'Solução flexível para distribuidores e fabricantes, com preços por cliente, condições comerciais e fluxos de encomenda próprios.',
          },
          {
            route: 'platformOMS',
            title: 'Plataforma OMS',
            body: 'Gestão de encomendas automatizada que associa todos os canais de venda e opera o processo sem intervenção humana.',
          },
          {
            route: 'platformMarketingCloud',
            title: 'Marketing Cloud',
            body: 'Segmentação automática e campanhas personalizadas cliente a cliente, com email, SMS e ferramentas de conversão.',
          },
          {
            route: 'platformPOS',
            title: 'POS Omnicanal',
            body: 'Liga as lojas físicas à loja online sem integrações, com faturação certificada para operar em Portugal.',
          },
          {
            route: 'platformOmnichannel',
            title: 'Tecnologia Omnicanal',
            body: 'Stock, cliente, preço e encomenda unificados em todos os canais, incluindo marketplaces e comércio global.',
          },
          {
            route: 'platformAnalytics',
            title: 'Redicom Analytics',
            body: 'A visão completa da performance do comércio digital, com dados em tempo real sobre venda, margem e comportamento.',
          },
          {
            route: 'platformMobileApp',
            title: 'Mobile App',
            body: 'Aplicação móvel pronta a utilizar, assente na mesma plataforma e no mesmo catálogo.',
          },
        ],
      },

      sections: [
        {
          eyebrow: 'Arquitetura',
          title: 'Headless quando precisa de ser, pronta a usar quando não precisa',
          body: 'A plataforma separa a robustez do backoffice da liberdade do front-end. Quem quer controlar ao detalhe a experiência de compra usa a arquitetura headless e as APIs abertas. Quem precisa de estar no ar depressa usa a camada pronta a utilizar. A escolha é sua e não obriga a mudar de plataforma mais tarde.',
          bullets: [
            'APIs abertas, sem limites artificiais de chamadas',
            'Integração profunda com ERP, PIM, CRM, transportadoras e marketplaces',
            'Multimercado: idioma, moeda, preço e regras fiscais por mercado',
            'Evolução contínua da plataforma, sem projetos de migração',
          ],
        },
        {
          eyebrow: 'Operação',
          title: 'Da encomenda à entrega, sem passos manuais',
          body: 'O OMS decide de onde sai cada encomenda, agrupa, divide e encaminha conforme as regras que definir. A faturação é emitida na própria plataforma, certificada pela Autoridade Tributária. A loja física entra na mesma operação através do POS omnicanal, com devoluções cruzadas entre canais e expedição a partir da loja.',
          bullets: [
            'Rotas inteligentes de encomenda entre armazéns e lojas',
            'Ship-from-store e devoluções cruzadas entre canais',
            'Faturação integrada certificada pela AT',
            'Apoio ao cliente com a visão completa da encomenda',
          ],
          link: { route: 'platformOMS', label: 'Ver a Plataforma OMS' },
        },
        {
          eyebrow: 'Crescimento',
          title: 'Marketing e dados na mesma plataforma que vende',
          body: 'A segmentação usa o comportamento real de compra, não uma exportação de ontem. As campanhas, os emails, os SMS e as ferramentas de conversão trabalham sobre os mesmos dados do catálogo e do cliente, e o resultado aparece no Analytics ao lado da venda e da margem. É o que permite decidir sem reconciliar relatórios de três sistemas diferentes.',
          bullets: [
            'Segmentação automática por comportamento e histórico',
            'Campanhas, email, SMS e ferramentas de conversão nativas',
            'Analytics em tempo real sobre venda, margem e comportamento',
            'Descrições de produto e SEO assistidos por IA',
          ],
          link: { route: 'platformMarketingCloud', label: 'Ver a Marketing Cloud' },
        },
      ],

      more: {
        title: 'Mais na plataforma',
        lead: 'Temas com página própria, para quem já sabe o que anda à procura.',
        routes: [
          'platformMarketplaces',
          'platformGlobal',
          'platformSearch',
          'integrations',
          'platformCustomerCare',
          'platformInvoicing',
          'platformB2BTools',
          'platformB2BMarketing',
          'platformConversion',
          'platformCampaigns',
          'platformSegmentation',
          'platformEmail',
          'platformSMS',
          'platformPersonalization',
        ],
      },

      midForm: {
        heading: 'Quer perceber como encaixa na sua operação?',
        body: 'Diga-nos quem é e onde está a operação hoje. Preparamos uma conversa com base no seu contexto, não uma apresentação genérica.',
        submit: 'Falar com especialista',
      },

      closing: {
        title: 'Vamos olhar para a sua operação',
        body: 'Deixe o seu contacto e falamos consigo. Sem guião comercial: começamos por perceber onde está a operação e onde quer chegar.',
        points: [
          'Falamos com quem conhece a plataforma, não com um call center',
          'Analisamos o seu contexto antes de propor qualquer solução',
          'Se não formos a melhor opção para o seu caso, dizemos-lhe',
        ],
        submit: 'Falar com especialista',
      },
    },

    en: {
      meta: {
        title: 'Redicom Commerce Cloud — the digital commerce platform',
        description:
          'B2C, B2B, OMS, omnichannel POS, marketing and analytics on the same catalogue, the same stock and the same customer. Explore the Redicom Commerce Cloud.',
      },
      breadcrumb: 'Platform',

      hero: {
        eyebrow: 'Redicom Commerce Cloud',
        title: 'One foundation for the whole of digital commerce',
        lead: 'These are not integrated modules. They are the same platform: B2C, B2B, order management, the physical store and marketing share the catalogue, the stock and the customer. We have been building it since 2002, for operations where generic platforms stop being enough.',
        primary: 'Talk to a specialist',
        secondary: 'See what sets us apart',
      },

      pillars: {
        eyebrow: 'The approach',
        title: 'Why one foundation changes the operation',
        lead: 'The difference between a platform and a set of connected systems shows up daily: in the time lost reconciling data, in the cost of maintaining integrations, and in how fast you can open a new channel.',
        items: [
          {
            title: 'One catalogue, not several',
            body: 'A product is created once and serves the online store, the B2B portal, the physical store and marketplaces. No versions of the same item drifting apart across systems.',
          },
          {
            title: 'Stock in real time',
            body: 'Availability is the same across every channel, right now. Warehouse, store and e-commerce see the same number, with no sync window in between.',
          },
          {
            title: 'One customer, one history',
            body: 'The in-store purchase, the online order and the support conversation sit on the same record. That is what makes cross-channel loyalty and returns possible.',
          },
          {
            title: 'No integration layer',
            body: 'What is an integration project elsewhere — and then permanent maintenance — is already connected here from the start.',
          },
        ],
      },

      modules: {
        eyebrow: 'The platform',
        title: 'What is included',
        lead: 'Each area has real depth of its own, and all of them sit on the same foundation. Pick where you want to start.',
        items: [
          {
            route: 'platformB2C',
            title: 'B2C Platform',
            body: 'The cloud platform used by leading Portuguese retailers, with headless architecture and multi-market commerce.',
          },
          {
            route: 'platformB2B',
            title: 'B2B Platform',
            body: 'A flexible solution for distributors and manufacturers, with customer-specific pricing, commercial terms and its own ordering flows.',
          },
          {
            route: 'platformOMS',
            title: 'OMS Platform',
            body: 'Automated order management that brings every sales channel together and runs the process without human intervention.',
          },
          {
            route: 'platformMarketingCloud',
            title: 'Marketing Cloud',
            body: 'Automatic segmentation and campaigns personalised customer by customer, with email, SMS and conversion tools.',
          },
          {
            route: 'platformPOS',
            title: 'Omnichannel POS',
            body: 'Connects physical stores to the online store with no integrations, with certified invoicing for operating in Portugal.',
          },
          {
            route: 'platformOmnichannel',
            title: 'Omnichannel Technology',
            body: 'Stock, customer, price and orders unified across every channel, including marketplaces and global commerce.',
          },
          {
            route: 'platformAnalytics',
            title: 'Redicom Analytics',
            body: 'The complete view of digital commerce performance, with real-time data on sales, margin and behaviour.',
          },
          {
            route: 'platformMobileApp',
            title: 'Mobile App',
            body: 'A ready-to-use mobile app, built on the same platform and the same catalogue.',
          },
        ],
      },

      sections: [
        {
          eyebrow: 'Architecture',
          title: 'Headless when it needs to be, ready to use when it does not',
          body: 'The platform separates the robustness of the back office from the freedom of the front end. Teams that want to control the buying experience in detail use the headless architecture and the open APIs. Teams that need to be live quickly use the ready-made layer. The choice is yours, and it does not force a platform change later.',
          bullets: [
            'Open APIs, with no artificial call limits',
            'Deep integration with ERP, PIM, CRM, carriers and marketplaces',
            'Multi-market: language, currency, pricing and tax rules per market',
            'Continuous platform evolution, with no migration projects',
          ],
        },
        {
          eyebrow: 'Operations',
          title: 'From order to delivery, with no manual steps',
          body: 'The OMS decides where each order ships from, then groups, splits and routes it according to the rules you set. Invoicing is issued inside the platform, certified by the Portuguese tax authority. The physical store joins the same operation through the omnichannel POS, with cross-channel returns and shipping from store.',
          bullets: [
            'Smart order routing across warehouses and stores',
            'Ship-from-store and cross-channel returns',
            'Integrated invoicing certified by the tax authority',
            'Customer support with the full view of every order',
          ],
          link: { route: 'platformOMS', label: 'See the OMS Platform' },
        },
        {
          eyebrow: 'Growth',
          title: 'Marketing and data on the same platform that sells',
          body: 'Segmentation uses real purchase behaviour, not yesterday’s export. Campaigns, email, SMS and conversion tools work on the same catalogue and customer data, and the outcome shows up in Analytics next to sales and margin. That is what lets you decide without reconciling reports from three different systems.',
          bullets: [
            'Automatic segmentation by behaviour and history',
            'Native campaigns, email, SMS and conversion tools',
            'Real-time analytics on sales, margin and behaviour',
            'AI-assisted product descriptions and SEO',
          ],
          link: { route: 'platformMarketingCloud', label: 'See the Marketing Cloud' },
        },
      ],

      more: {
        title: 'More on the platform',
        lead: 'Topics with a page of their own, for anyone who already knows what they are looking for.',
        routes: [
          'platformMarketplaces',
          'platformGlobal',
          'platformSearch',
          'integrations',
          'platformCustomerCare',
          'platformInvoicing',
          'platformB2BTools',
          'platformB2BMarketing',
          'platformConversion',
          'platformCampaigns',
          'platformSegmentation',
          'platformEmail',
          'platformSMS',
          'platformPersonalization',
        ],
      },

      midForm: {
        heading: 'Want to see how this fits your operation?',
        body: 'Tell us who you are and where the operation stands today. We prepare a conversation around your context, not a generic pitch.',
        submit: 'Talk to a specialist',
      },

      closing: {
        title: 'Let us look at your operation',
        body: 'Leave your details and we will get in touch. No sales script: we start by understanding where the operation is and where you want it to go.',
        points: [
          'You talk to people who know the platform, not a call centre',
          'We look at your context before proposing anything',
          'If we are not the best fit for your case, we will tell you',
        ],
        submit: 'Talk to a specialist',
      },
    },
  },

  fashion: {
    pt: {
      meta: {
        title: 'Fashion Retail — a plataforma de e-commerce para marcas de moda',
        description:
          'Matrizes de tamanho e cor sem limites, wholesale B2B nativo, POS omnicanal e IA aplicada à moda. A Redicom Commerce Cloud para marcas de Fashion & Lifestyle.',
      },
      breadcrumb: 'Fashion Retail',

      hero: {
        eyebrow: 'Fashion Retail',
        title: 'A plataforma pensada para marcas de moda',
        lead: 'Ultrapasse os limites das plataformas genéricas. Profundidade operacional, flexibilidade B2C e rigor B2B para marcas de Fashion & Lifestyle que precisam de escalar sem constrangimentos técnicos.',
        primary: 'Pedir demonstração',
        secondary: 'Ver as soluções',
      },

      pillars: {
        eyebrow: 'Uma plataforma, quatro pilares',
        title: 'Muito mais do que e-commerce para retalho de moda',
        lead: 'Catálogo, conteúdo, campanhas, stock, lojas físicas, operação e performance numa visão integrada — porque numa marca de moda estas coisas nunca funcionaram separadas.',
        items: [
          {
            title: 'Experiência de marca',
            body: 'Jornadas de compra alinhadas com a identidade da marca, com liberdade total sobre catálogo, conteúdo, navegação e apresentação comercial.',
          },
          {
            title: 'Operação omnicanal',
            body: 'Lojas físicas, e-commerce, stock, encomendas e expedição numa operação fluida, com visibilidade total e capacidade de resposta.',
          },
          {
            title: 'IA aplicada ao dia a dia',
            body: 'Produção visual, apoio à equipa, criação de conteúdo e execução operacional com ferramentas desenhadas para o contexto do retalho de moda.',
          },
          {
            title: 'Inteligência para crescer',
            body: 'Dados transformados em ação: analytics, benchmarking, contexto operacional e apoio à decisão orientado à performance.',
          },
        ],
      },

      modules: {
        eyebrow: 'As soluções',
        title: 'Oito áreas, uma só plataforma',
        lead: 'Cada uma responde a uma parte concreta da operação de uma marca de moda.',
        items: [
          {
            route: 'fashionB2C',
            title: 'Commerce B2C',
            body: 'Arquitetura headless para criar jornadas de compra à medida da marca, com visual merchandising, sizefit, lookbooks e pesquisa otimizada para catálogos de moda.',
          },
          {
            route: 'fashionB2B',
            title: 'Wholesale B2B',
            body: 'Showrooms digitais, matriz de encomenda por tamanho e cor, pre-packs, tabelas de preço por cliente e condições de pagamento flexíveis.',
          },
          {
            route: 'fashionOmnichannel',
            title: 'Operação Omnicanal',
            body: 'OMS avançado com rotas inteligentes, ship-from-store, stock distribuído em tempo real e resposta a picos comerciais.',
          },
          {
            route: 'fashionPOS',
            title: 'POS Omnicanal',
            body: 'Visão integrada do cliente, endless aisle, devoluções cruzadas entre canais e faturação certificada pela AT.',
          },
          {
            route: 'fashionAIStudio',
            title: 'AI Studio',
            body: 'Estúdio fotográfico virtual nativo da plataforma: acelera a produção visual das coleções com consistência estética e menos custo de produção.',
          },
          {
            route: 'fashionAIAssistant',
            title: 'Assistente IA',
            body: 'Atendimento que conhece o catálogo estruturado, o stock e as regras de negócio, e responde em tempo real.',
          },
          {
            route: 'fashionMarketing',
            title: 'Marketing e Automação',
            body: 'Campanhas ao ritmo da coleção, com segmentação por histórico, tamanhos e categorias, ligadas ao calendário comercial.',
          },
          {
            route: 'fashionAnalytics',
            title: 'Analytics e Intelligence',
            body: 'Visão completa do negócio em tempo real, para decisões de coleção, margem e sell-through.',
          },
        ],
      },

      comparison: {
        title: 'Especialização contra massificação',
        lead: 'As plataformas generalistas são construídas para servir qualquer tipo de negócio. O retalho de moda tem uma complexidade própria — e é aí que a diferença aparece.',
        genericTitle: 'O desafio nas plataformas generalistas',
        redicomTitle: 'A solução especializada Redicom',
        rows: [
          {
            topic: 'Catálogo e variantes',
            generic:
              'Restrições severas no número de variantes por produto, obrigando a workarounds e à duplicação de artigos que cria dívida técnica.',
            redicom:
              'Arquitetura desenhada para catálogos densos, com combinações de cor, tamanho, material e fit sem limites artificiais e sem perder performance.',
          },
          {
            topic: 'Wholesale',
            generic:
              'Funcionalidades B2B adaptadas de fluxos B2C, incapazes de lidar com pré-encomendas, pre-packs e preços dinâmicos por cliente.',
            redicom:
              'Portal B2B nativo com showrooms digitais, encomendas em matriz, tabelas de preço por nível e integração profunda com o ERP.',
          },
          {
            topic: 'Checkout e jornada',
            generic:
              'Jornada de pagamento rígida, sem espaço para refletir o posicionamento da marca ou criar lógicas promocionais complexas.',
            redicom:
              'Liberdade total no front-end para desenhar jornadas ao detalhe, com lógicas de upsell à medida.',
          },
          {
            topic: 'Loja física e canais',
            generic:
              'POS e loja online como entidades separadas, o que dificulta a gestão de stock e a experiência do cliente.',
            redicom:
              'POS omnicanal e OMS integrados de raiz. O stock flui em tempo real entre armazéns, lojas e e-commerce.',
          },
          {
            topic: 'Inteligência artificial',
            generic:
              'Disponível apenas através de aplicações de terceiros, sem contexto sobre o negócio de moda.',
            redicom:
              'AI Studio e Assistente IA totalmente integrados e desenhados para o contexto do retalho de moda.',
          },
          {
            topic: 'Integrações',
            generic:
              'Limites de chamadas API que impedem a sincronização em tempo real com ERPs, CRMs e sistemas logísticos.',
            redicom:
              'Conectividade profunda com ERPs, PIMs, transportadoras e marketplaces, sem restrições artificiais de volume.',
          },
        ],
      },

      sections: [
        {
          eyebrow: 'Commerce B2C',
          title: 'A imagem da marca não pode ser refém de templates',
          body: 'No retalho de moda, converter depende de imagem, ritmo, navegação e contexto. A arquitetura headless separa a robustez do backoffice da criatividade do front-end e devolve o controlo da experiência digital a quem é dono da marca.',
          bullets: [
            'Visual merchandising com drag & drop',
            'Sizefit, que melhora a experiência e reduz devoluções',
            'Lookbooks e shop by look integrados',
            'Pesquisa inteligente otimizada para catálogos de moda',
          ],
          link: { route: 'fashionB2C', label: 'Explorar Commerce B2C' },
        },
        {
          eyebrow: 'Wholesale B2B',
          title: 'O wholesale deixa de viver em folhas de cálculo',
          body: 'Enquanto as plataformas genéricas adaptam soluções B2C para B2B, a Redicom disponibiliza um verdadeiro portal wholesale construído de raiz para a complexidade do retalho de moda: pré-venda, curvas de tamanhos, crédito por cliente e sazonalidade tratada como regra.',
          bullets: [
            'Showrooms digitais e linesheets',
            'Matriz de encomenda por tamanho e cor',
            'Gestão de pre-packs e curvas de tamanhos',
            'Tabelas de preço e crédito por cliente',
            'Condições de pagamento flexíveis a 30, 60 e 90 dias',
          ],
          link: { route: 'fashionB2B', label: 'Explorar Wholesale B2B' },
        },
        {
          eyebrow: 'Inteligência artificial',
          title: 'Fotografe a coleção do dia para a noite',
          body: 'O AI Studio acelera a produção de imagem e de conteúdo visual para catálogo, campanhas e comunicação comercial. Ao contrário das plataformas que dependem de plugins de terceiros, este estúdio fotográfico virtual é nativo da plataforma e foi concebido para as exigências do retalho de moda.',
          bullets: [
            'Aceleração da produção visual para catálogo',
            'Consistência de imagem em escala',
            'Apoio à comunicação comercial e às campanhas',
            'Redução de custos de produção fotográfica',
          ],
          link: { route: 'fashionAIStudio', label: 'Explorar o AI Studio' },
        },
      ],

      midForm: {
        heading: 'A sua marca tem esta complexidade?',
        body: 'Diga-nos em que ponto está a operação — coleções, canais, wholesale — e preparamos uma demonstração com o seu contexto.',
        submit: 'Pedir demonstração',
      },

      closing: {
        title: 'Uma plataforma que conhece o seu setor',
        body: 'Somos o motor tecnológico de marcas de moda exigentes. Deixe o contacto e mostramos-lhe como a operação encaixa.',
        points: [
          'Demonstração com o contexto real da sua marca',
          'Falamos com quem conhece a plataforma e o setor',
          'Se não formos a melhor opção para o seu caso, dizemos-lhe',
        ],
        submit: 'Pedir demonstração',
      },
    },

    en: {
      meta: {
        title: 'Fashion Retail — the e-commerce platform for fashion brands',
        description:
          'Size and colour matrices without limits, native B2B wholesale, omnichannel POS and AI built for fashion. The Redicom Commerce Cloud for Fashion & Lifestyle brands.',
      },
      breadcrumb: 'Fashion Retail',

      hero: {
        eyebrow: 'Fashion Retail',
        title: 'The platform built for fashion brands',
        lead: 'Move past the limits of generic platforms. Operational depth, B2C flexibility and B2B rigour for Fashion & Lifestyle brands that need to scale without technical constraints.',
        primary: 'Request a demo',
        secondary: 'See the solutions',
      },

      pillars: {
        eyebrow: 'One platform, four pillars',
        title: 'Far more than e-commerce for fashion retail',
        lead: 'Catalogue, content, campaigns, stock, stores, operations and performance in one integrated view — because in a fashion brand these things were never separate to begin with.',
        items: [
          {
            title: 'Brand experience',
            body: 'Buying journeys aligned with the brand, with full freedom over catalogue, content, navigation and commercial presentation.',
          },
          {
            title: 'Omnichannel operations',
            body: 'Stores, e-commerce, stock, orders and fulfilment in one fluid operation, with full visibility and room to react.',
          },
          {
            title: 'AI in the daily work',
            body: 'Visual production, team support, content creation and operational execution with tools designed for fashion retail.',
          },
          {
            title: 'Intelligence to grow',
            body: 'Data turned into action: analytics, benchmarking, operational context and performance-driven decision support.',
          },
        ],
      },

      modules: {
        eyebrow: 'The solutions',
        title: 'Eight areas, one platform',
        lead: 'Each one answers a concrete part of how a fashion brand actually runs.',
        items: [
          {
            route: 'fashionB2C',
            title: 'B2C Commerce',
            body: 'Headless architecture for buying journeys shaped around the brand, with visual merchandising, sizefit, lookbooks and search tuned for fashion catalogues.',
          },
          {
            route: 'fashionB2B',
            title: 'B2B Wholesale',
            body: 'Digital showrooms, size-and-colour order matrices, pre-packs, customer price lists and flexible payment terms.',
          },
          {
            route: 'fashionOmnichannel',
            title: 'Omnichannel Operation',
            body: 'Advanced OMS with smart routing, ship-from-store, real-time distributed stock and headroom for commercial peaks.',
          },
          {
            route: 'fashionPOS',
            title: 'Omnichannel POS',
            body: 'An integrated customer view, endless aisle, cross-channel returns and certified invoicing.',
          },
          {
            route: 'fashionAIStudio',
            title: 'AI Studio',
            body: 'A virtual photo studio native to the platform: speeds up collection imagery with consistent aesthetics and lower production cost.',
          },
          {
            route: 'fashionAIAssistant',
            title: 'AI Assistant',
            body: 'Support that knows the structured catalogue, the stock and the business rules, answering in real time.',
          },
          {
            route: 'fashionMarketing',
            title: 'Marketing and Automation',
            body: 'Campaigns at the pace of the collection, segmented by history, sizes and categories, tied to the commercial calendar.',
          },
          {
            route: 'fashionAnalytics',
            title: 'Analytics and Intelligence',
            body: 'The complete view of the business in real time, for collection, margin and sell-through decisions.',
          },
        ],
      },

      comparison: {
        title: 'Specialisation against mass-market',
        lead: 'Generalist platforms are built to serve any kind of business. Fashion retail has a complexity of its own — and that is where the difference shows.',
        genericTitle: 'The challenge on generalist platforms',
        redicomTitle: 'The specialised Redicom solution',
        rows: [
          {
            topic: 'Catalogue and variants',
            generic:
              'Severe limits on variants per product, forcing workarounds and duplicated items that build technical debt.',
            redicom:
              'Architecture designed for dense catalogues, with colour, size, material and fit combinations free of artificial limits and without losing performance.',
          },
          {
            topic: 'Wholesale',
            generic:
              'B2B features adapted from B2C flows, unable to handle pre-orders, pre-packs and dynamic customer pricing.',
            redicom:
              'A native B2B portal with digital showrooms, matrix ordering, tiered price lists and deep ERP integration.',
          },
          {
            topic: 'Checkout and journey',
            generic:
              'A rigid payment journey, with no room to reflect the brand’s positioning or build complex promotional logic.',
            redicom:
              'Full front-end freedom to design journeys in detail, with upsell logic built to measure.',
          },
          {
            topic: 'Stores and channels',
            generic:
              'POS and online store as separate entities, which complicates stock management and the customer experience.',
            redicom:
              'Omnichannel POS and OMS integrated from the start. Stock flows in real time between warehouses, stores and e-commerce.',
          },
          {
            topic: 'Artificial intelligence',
            generic:
              'Available only through third-party apps, with no context about the fashion business.',
            redicom:
              'AI Studio and AI Assistant fully integrated and designed for the fashion retail context.',
          },
          {
            topic: 'Integrations',
            generic:
              'API call limits that prevent real-time synchronisation with ERPs, CRMs and logistics systems.',
            redicom:
              'Deep connectivity with ERPs, PIMs, carriers and marketplaces, with no artificial volume restrictions.',
          },
        ],
      },

      sections: [
        {
          eyebrow: 'B2C Commerce',
          title: 'The brand cannot be held hostage by templates',
          body: 'In fashion retail, converting depends on imagery, pace, navigation and context. The headless architecture separates the robustness of the back office from the creativity of the front end, and hands control of the digital experience back to whoever owns the brand.',
          bullets: [
            'Drag-and-drop visual merchandising',
            'Sizefit, which improves the experience and cuts returns',
            'Integrated lookbooks and shop by look',
            'Smart search tuned for fashion catalogues',
          ],
          link: { route: 'fashionB2C', label: 'Explore B2C Commerce' },
        },
        {
          eyebrow: 'B2B Wholesale',
          title: 'Wholesale stops living in spreadsheets',
          body: 'While generic platforms adapt B2C solutions for B2B, Redicom provides a genuine wholesale portal built from the ground up for the complexity of fashion retail: pre-season selling, size curves, customer credit and seasonality handled as the rule.',
          bullets: [
            'Digital showrooms and linesheets',
            'Size-and-colour order matrices',
            'Pre-pack and size curve management',
            'Customer price lists and credit',
            'Flexible payment terms at 30, 60 and 90 days',
          ],
          link: { route: 'fashionB2B', label: 'Explore B2B Wholesale' },
        },
        {
          eyebrow: 'Artificial intelligence',
          title: 'Shoot the collection overnight',
          body: 'AI Studio speeds up image and visual content production for catalogue, campaigns and commercial communication. Unlike platforms that depend on third-party plugins, this virtual photo studio is native to the platform and was designed for the demands of fashion retail.',
          bullets: [
            'Faster visual production for the catalogue',
            'Consistent imagery at scale',
            'Support for commercial communication and campaigns',
            'Lower photography production costs',
          ],
          link: { route: 'fashionAIStudio', label: 'Explore AI Studio' },
        },
      ],

      midForm: {
        heading: 'Does your brand carry this complexity?',
        body: 'Tell us where the operation stands — collections, channels, wholesale — and we will prepare a demo around your context.',
        submit: 'Request a demo',
      },

      closing: {
        title: 'A platform that knows your sector',
        body: 'We are the technology behind demanding fashion brands. Leave your details and we will show you how the operation fits.',
        points: [
          'A demo with your brand’s real context',
          'You talk to people who know the platform and the sector',
          'If we are not the best fit for your case, we will tell you',
        ],
        submit: 'Request a demo',
      },
    },
  },
};
