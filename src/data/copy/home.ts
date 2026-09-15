import type { Lang } from '@i18n/routes';

/**
 * Texto da pagina inicial.
 *
 * Mantemos PT e EN lado a lado no mesmo ficheiro de proposito: quando uma
 * mensagem muda, e imediatamente visivel que a outra lingua tambem tem de
 * mudar. O EN e uma adaptacao, nao uma traducao literal.
 */

export type HomeCopy = {
  meta: { title: string; description: string };
  hero: {
    eyebrow: string;
    title: string;
    lead: string;
    primary: string;
    secondary: string;
  };
  proof: { value: string; label: string; detail?: string }[];
  problem: {
    eyebrow: string;
    title: string;
    lead: string;
    items: { title: string; body: string }[];
  };
  platform: {
    eyebrow: string;
    title: string;
    lead: string;
    modules: { route: string; title: string; body: string }[];
    cta: string;
  };
  midForm: { heading: string; body: string; submit: string };
  difference: {
    eyebrow: string;
    title: string;
    lead: string;
    genericTitle: string;
    redicomTitle: string;
    rows: { topic: string; generic: string; redicom: string }[];
    cta: string;
  };
  fashion: { eyebrow: string; title: string; body: string; points: string[]; cta: string };
  agentic: { eyebrow: string; title: string; body: string; points: string[]; cta: string };
  closing: { title: string; body: string; points: string[]; submit: string };
};

export const homeCopy: Record<Lang, HomeCopy> = {
  pt: {
    meta: {
      title: 'Redicom Commerce Cloud — plataforma de comércio digital',
      description:
        'A Redicom desenvolve a Redicom Commerce Cloud desde 2002: B2C, B2B, OMS, POS omnicanal e marketing numa só plataforma. Mais de 500 projetos implementados.',
    },

    hero: {
      eyebrow: 'Redicom Commerce Cloud',
      title: 'Para negócios que exigem mais do comércio digital',
      lead: 'Integração, eficiência e controlo para escalar com confiança. Desenvolvemos a Redicom Commerce Cloud desde 2002 para operações onde as plataformas genéricas deixam de chegar.',
      primary: 'Falar com especialista',
      secondary: 'Conhecer a plataforma',
    },

    proof: [
      { value: '2002', label: 'Desde', detail: 'Mais de duas décadas dedicadas ao comércio digital' },
      { value: '+500', label: 'Projetos implementados', detail: 'Com as nossas soluções de commerce' },
      { value: 'B2C · B2B · OMS', label: 'Numa só plataforma', detail: 'Sem integrações entre módulos' },
      { value: 'PT', label: 'Faturação certificada', detail: 'POS e faturação certificados pela AT' },
    ],

    problem: {
      eyebrow: 'Onde criamos mais valor',
      title: 'Quando a solução atual deixa de acompanhar a operação',
      lead: 'A maioria das empresas não nos procura porque quer mudar de plataforma. Procura-nos porque a operação cresceu e a plataforma não cresceu com ela.',
      items: [
        {
          title: 'Integração',
          body: 'Sistemas, ERP e logística têm de funcionar como uma só operação. Quando cada ligação é um projeto à parte, o custo de manutenção passa a competir com o custo de crescer.',
        },
        {
          title: 'Eficiência',
          body: 'A operação exige mais controlo, menos fricção e custos previsíveis. Processos manuais que funcionavam com dezenas de encomendas por dia deixam de funcionar com centenas.',
        },
        {
          title: 'Escalabilidade',
          body: 'O crescimento não pode comprometer performance, autonomia ou estabilidade. Abrir um mercado, um canal ou uma loja não deveria exigir um novo ciclo de desenvolvimento.',
        },
      ],
    },

    platform: {
      eyebrow: 'A plataforma',
      title: 'Uma base única para todo o comércio digital',
      lead: 'B2C, B2B, gestão de encomendas, loja física e marketing partilham o mesmo catálogo, o mesmo stock e o mesmo cliente. Não são módulos integrados — são a mesma plataforma.',
      modules: [
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
      cta: 'Explorar a plataforma',
    },

    midForm: {
      heading: 'Quer perceber como encaixa na sua operação?',
      body: 'Diga-nos quem é e onde está a operação hoje. Preparamos uma conversa com base no seu contexto, não uma apresentação genérica.',
      submit: 'Falar com especialista',
    },

    difference: {
      eyebrow: 'Porquê Redicom',
      title: 'A alternativa às plataformas genéricas',
      lead: 'As plataformas generalistas são construídas para servir qualquer negócio. Quando a operação tem complexidade real, "qualquer negócio" começa a custar caro.',
      genericTitle: 'Plataforma genérica',
      redicomTitle: 'Abordagem Redicom',
      rows: [
        {
          topic: 'Profundidade funcional',
          generic:
            'Funcionalidades amplas mas superficiais, que obrigam a extensões e desenvolvimentos à medida para cobrir a operação real.',
          redicom:
            'Profundidade operacional nativa: matrizes complexas, pré-encomendas, pre-packs e regras de negócio tratadas como regra, não como exceção.',
        },
        {
          topic: 'Ligação entre canais',
          generic:
            'Loja online, loja física e B2B como sistemas separados, ligados por integrações que é preciso manter.',
          redicom:
            'Um único catálogo, stock e cliente partilhados entre B2C, B2B e loja física, sem camada de integração no meio.',
        },
        {
          topic: 'Conformidade em Portugal',
          generic:
            'Faturação e POS dependentes de módulos de terceiros para cumprir os requisitos legais portugueses.',
          redicom:
            'Faturação integrada e POS omnicanal certificados pela AT, incluídos na plataforma.',
        },
        {
          topic: 'Custo e previsibilidade',
          generic:
            'Custos que crescem com o volume e dependência de vários fornecedores para manter a operação de pé.',
          redicom:
            'Controlo sobre dados e custos, com uma equipa técnica especializada que conhece o seu projeto.',
        },
      ],
      cta: 'Ver a comparação completa',
    },

    fashion: {
      eyebrow: 'Especialização',
      title: 'Feita para marcas de moda',
      body: 'O retalho de moda tem uma complexidade que as plataformas generalistas tratam como caso excecional: matrizes de tamanho e cor infinitas, sazonalidade agressiva, devoluções complexas e uma operação B2B que não é uma variação do B2C.',
      points: [
        'Matrizes de cor, tamanho, material e fit sem limites artificiais',
        'Wholesale B2B nativo, com pré-encomendas, pre-packs e preços por cliente',
        'AI Studio para produção visual de coleções à velocidade do mercado',
      ],
      cta: 'Ver Fashion Retail',
    },

    agentic: {
      eyebrow: 'Agentic Commerce',
      title: 'Preparado para os agentes de IA que já compram',
      body: 'A descoberta de produto mudou. Agentes de IA recomendam, comparam e compram em nome dos consumidores — e só conseguem fazê-lo quando o catálogo, o stock e o preço estão corretos e estruturados.',
      points: [
        'Catálogo estruturado com atributos, variantes e contexto comercial',
        'Stock e preço em tempo real por mercado e por canal',
        'Checkout e OMS nativos, para que a recomendação se converta em venda',
      ],
      cta: 'Ver Agentic Commerce',
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
        'Redicom has been building the Redicom Commerce Cloud since 2002: B2C, B2B, OMS, omnichannel POS and marketing on one platform. Over 500 projects delivered.',
    },

    hero: {
      eyebrow: 'Redicom Commerce Cloud',
      title: 'For businesses that demand more from digital commerce',
      lead: 'Integration, efficiency and control, so you can scale with confidence. We have been building the Redicom Commerce Cloud since 2002, for operations where generic platforms stop being enough.',
      primary: 'Talk to a specialist',
      secondary: 'Explore the platform',
    },

    proof: [
      { value: '2002', label: 'Building since', detail: 'More than two decades in digital commerce' },
      { value: '500+', label: 'Projects delivered', detail: 'Running on our commerce solutions' },
      { value: 'B2C · B2B · OMS', label: 'On one platform', detail: 'No integrations between modules' },
      { value: 'PT', label: 'Certified invoicing', detail: 'POS and invoicing certified by the Portuguese tax authority' },
    ],

    problem: {
      eyebrow: 'Where we add the most value',
      title: 'When your current platform stops keeping up with the operation',
      lead: 'Most companies do not come to us because they want to change platform. They come to us because the operation grew and the platform did not grow with it.',
      items: [
        {
          title: 'Integration',
          body: 'Systems, ERP and logistics have to work as a single operation. When every connection is its own project, maintenance starts competing with growth for budget.',
        },
        {
          title: 'Efficiency',
          body: 'The operation needs more control, less friction and predictable costs. Manual steps that worked at dozens of orders a day stop working at hundreds.',
        },
        {
          title: 'Scalability',
          body: 'Growth cannot come at the cost of performance, autonomy or stability. Opening a market, a channel or a store should not require a new development cycle.',
        },
      ],
    },

    platform: {
      eyebrow: 'The platform',
      title: 'One foundation for the whole of digital commerce',
      lead: 'B2C, B2B, order management, the physical store and marketing share the same catalogue, the same stock and the same customer. They are not integrated modules — they are the same platform.',
      modules: [
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
      cta: 'Explore the platform',
    },

    midForm: {
      heading: 'Want to see how this fits your operation?',
      body: 'Tell us who you are and where the operation stands today. We prepare a conversation around your context, not a generic pitch.',
      submit: 'Talk to a specialist',
    },

    difference: {
      eyebrow: 'Why Redicom',
      title: 'The alternative to generic platforms',
      lead: 'Generalist platforms are built to serve any business. Once an operation has real complexity, "any business" starts to get expensive.',
      genericTitle: 'Generic platform',
      redicomTitle: 'The Redicom approach',
      rows: [
        {
          topic: 'Functional depth',
          generic:
            'Broad but shallow features, pushing you towards extensions and custom development to cover the real operation.',
          redicom:
            'Native operational depth: complex matrices, pre-orders, pre-packs and business rules handled as the rule, not the exception.',
        },
        {
          topic: 'Connection between channels',
          generic:
            'Online store, physical store and B2B as separate systems, joined by integrations someone has to maintain.',
          redicom:
            'A single catalogue, stock and customer shared across B2C, B2B and the store, with no integration layer in between.',
        },
        {
          topic: 'Compliance in Portugal',
          generic:
            'Invoicing and POS depending on third-party modules to meet Portuguese legal requirements.',
          redicom:
            'Integrated invoicing and omnichannel POS certified by the Portuguese tax authority, included in the platform.',
        },
        {
          topic: 'Cost and predictability',
          generic:
            'Costs that grow with volume, and dependence on several vendors to keep the operation running.',
          redicom:
            'Control over your data and your costs, with a specialised technical team that knows your project.',
        },
      ],
      cta: 'See the full comparison',
    },

    fashion: {
      eyebrow: 'Specialisation',
      title: 'Built for fashion brands',
      body: 'Fashion retail carries a complexity that generalist platforms treat as an edge case: endless size and colour matrices, aggressive seasonality, complex returns and a B2B operation that is not a variation of B2C.',
      points: [
        'Colour, size, material and fit matrices without artificial limits',
        'Native B2B wholesale, with pre-orders, pre-packs and customer pricing',
        'AI Studio for collection imagery at the speed of the market',
      ],
      cta: 'See Fashion Retail',
    },

    agentic: {
      eyebrow: 'Agentic Commerce',
      title: 'Ready for the AI agents that already buy',
      body: 'Product discovery has changed. AI agents recommend, compare and buy on behalf of consumers — and they can only do it when catalogue, stock and price are correct and structured.',
      points: [
        'A structured catalogue with attributes, variants and commercial context',
        'Real-time stock and price, per market and per channel',
        'Native checkout and OMS, so the recommendation turns into a sale',
      ],
      cta: 'See Agentic Commerce',
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
};
