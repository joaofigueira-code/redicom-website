import type { Lang, RouteId } from '@i18n/routes';

/**
 * Casos de sucesso.
 *
 * ATENCAO — nenhum destes casos e real.
 *
 * O site em producao nao tem area de casos de sucesso, por isso nao ha
 * conteudo de onde partir: nomes de clientes, numeros e citacoes so podem vir
 * da Redicom, e ninguem os pode inventar. O que esta aqui sao tres fichas de
 * exemplo, com status 'draft', que servem para ver o desenho das paginas e
 * para mostrar exatamente que campos e preciso preencher.
 *
 * Enquanto 'draft', cada caso:
 *   - aparece com um aviso visivel de conteudo por confirmar;
 *   - fica fora do indice dos motores de busca e fora do sitemap.
 *
 * Para publicar um caso: substituir o texto, trocar status para 'published'
 * e confirmar que existe autorizacao escrita do cliente para usar o nome, o
 * logotipo e os numeros.
 */

export type CaseResult = {
  value: string;
  label: string;
  detail?: string;
};

export type CaseContent = {
  meta: { title: string; description: string };
  /** Nome do cliente, tal como deve aparecer. */
  client: string;
  /** Setor, usado como etiqueta de filtro no indice. */
  sector: string;
  /** Uma linha com o resultado principal. E o que o cartao mostra a seguir ao nome. */
  headline: string;
  /** Resumo do cartao no indice. */
  summary: string;
  /** Quem e o cliente, em dois ou tres paragrafos. */
  context: { title: string; paragraphs: string[] };
  challenge: { title: string; body: string; bullets?: string[] };
  solution: { title: string; body: string; bullets?: string[] };
  results: CaseResult[];
  quote?: { text: string; author: string; role: string };
  closing: { title: string; body: string; submit: string };
};

export type CaseStudy = {
  /** Igual nos dois idiomas: e o nome do cliente. */
  slug: string;
  status: 'draft' | 'published';
  /** Modulos da plataforma usados no projeto. Geram as ligacoes do fim. */
  modules: RouteId[];
  pt: CaseContent;
  en: CaseContent;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: 'exemplo-marca-de-moda',
    status: 'draft',
    modules: ['fashionB2C', 'fashionB2B', 'fashionPOS'],

    pt: {
      meta: {
        title: 'Caso de sucesso — marca de moda',
        description:
          'Exemplo de caso de sucesso de uma marca de moda na Redicom Commerce Cloud. Conteúdo por confirmar.',
      },
      client: 'Marca de moda nacional',
      sector: 'Fashion Retail',
      headline: 'B2C, wholesale e lojas físicas na mesma plataforma',
      summary:
        'Uma marca com coleções sazonais, rede própria de lojas e uma operação de wholesale que vivia em folhas de cálculo.',

      context: {
        title: 'O cliente',
        paragraphs: [
          'Descreva aqui quem é o cliente: setor, dimensão, mercados onde opera, número de lojas e canais de venda. Duas ou três frases chegam.',
          'Indique há quanto tempo trabalha com a Redicom e o que existia antes — plataforma anterior, processos manuais, sistemas paralelos.',
        ],
      },

      challenge: {
        title: 'O desafio',
        body: 'Descreva o problema pelas palavras do cliente, não pelas nossas. O que é que não estava a funcionar e que custo tinha isso na operação?',
        bullets: [
          'Primeiro sintoma concreto (ex.: limite de variantes por produto)',
          'Segundo sintoma concreto (ex.: stock da loja desalinhado do site)',
          'Terceiro sintoma concreto (ex.: encomendas de wholesale em Excel)',
        ],
      },

      solution: {
        title: 'O que fizemos',
        body: 'Descreva o que foi implementado e por que ordem. Se houve migração de dados, integração com ERP ou arranque faseado, diga-o — é isso que dá credibilidade ao caso.',
        bullets: [
          'Módulo ou funcionalidade implementada',
          'Integração feita e com que sistema',
          'Prazo de implementação, se for um argumento',
        ],
      },

      results: [
        { value: '+00%', label: 'Crescimento em vendas online', detail: 'valor a confirmar' },
        { value: '00h', label: 'Horas poupadas por semana', detail: 'valor a confirmar' },
        { value: '00', label: 'Lojas ligadas à plataforma', detail: 'valor a confirmar' },
      ],

      quote: {
        text: 'Citação do cliente, com autorização escrita para a publicar. Uma frase que diga o que mudou, não uma frase de agradecimento.',
        author: 'Nome do interlocutor',
        role: 'Cargo, Empresa',
      },

      closing: {
        title: 'Tem uma operação parecida?',
        body: 'Deixe o seu contacto e falamos sobre o seu caso, não sobre este.',
        submit: 'Falar com especialista',
      },
    },

    en: {
      meta: {
        title: 'Success story — fashion brand',
        description:
          'Example success story of a fashion brand on the Redicom Commerce Cloud. Content to be confirmed.',
      },
      client: 'Portuguese fashion brand',
      sector: 'Fashion Retail',
      headline: 'B2C, wholesale and physical stores on one platform',
      summary:
        'A brand with seasonal collections, its own store network and a wholesale operation that lived in spreadsheets.',

      context: {
        title: 'The client',
        paragraphs: [
          'Describe the client here: sector, size, markets, number of stores and sales channels. Two or three sentences is enough.',
          'Say how long they have worked with Redicom and what was in place before — previous platform, manual processes, parallel systems.',
        ],
      },

      challenge: {
        title: 'The challenge',
        body: 'Describe the problem in the client’s words, not ours. What was not working, and what did it cost the operation?',
        bullets: [
          'First concrete symptom (e.g. variant limits per product)',
          'Second concrete symptom (e.g. store stock out of step with the site)',
          'Third concrete symptom (e.g. wholesale orders in Excel)',
        ],
      },

      solution: {
        title: 'What we did',
        body: 'Describe what was implemented and in what order. If there was data migration, ERP integration or a phased go-live, say so — that is what makes the story credible.',
        bullets: [
          'Module or feature implemented',
          'Integration built, and with which system',
          'Implementation timeline, if it is part of the argument',
        ],
      },

      results: [
        { value: '+00%', label: 'Growth in online sales', detail: 'figure to be confirmed' },
        { value: '00h', label: 'Hours saved per week', detail: 'figure to be confirmed' },
        { value: '00', label: 'Stores connected to the platform', detail: 'figure to be confirmed' },
      ],

      quote: {
        text: 'A client quote, with written permission to publish it. One sentence about what changed, not a thank-you note.',
        author: 'Contact name',
        role: 'Role, Company',
      },

      closing: {
        title: 'Does this look like your operation?',
        body: 'Leave your details and we will talk about your case, not this one.',
        submit: 'Talk to a specialist',
      },
    },
  },

  {
    slug: 'exemplo-distribuidor-b2b',
    status: 'draft',
    modules: ['platformB2B', 'platformOMS', 'integrations'],

    pt: {
      meta: {
        title: 'Caso de sucesso — distribuidor B2B',
        description:
          'Exemplo de caso de sucesso de um distribuidor na Redicom Commerce Cloud. Conteúdo por confirmar.',
      },
      client: 'Distribuidor B2B',
      sector: 'Distribuição',
      headline: 'Encomendas de revendedores sem telefone nem email',
      summary:
        'Um distribuidor com milhares de referências, preços por cliente e uma equipa comercial a receber encomendas por telefone.',

      context: {
        title: 'O cliente',
        paragraphs: [
          'Descreva aqui quem é o cliente: setor, dimensão, número de revendedores e mercados.',
          'Indique o que existia antes: catálogo em PDF, encomendas por email, ERP sem ligação ao exterior.',
        ],
      },

      challenge: {
        title: 'O desafio',
        body: 'Descreva o custo real do processo manual: tempo da equipa comercial, erros de encomenda, atrasos na confirmação.',
        bullets: [
          'Primeiro sintoma concreto',
          'Segundo sintoma concreto',
          'Terceiro sintoma concreto',
        ],
      },

      solution: {
        title: 'O que fizemos',
        body: 'Descreva o portal B2B implementado, as condições comerciais por cliente e a integração com o ERP.',
        bullets: [
          'Portal B2B com preços e condições por cliente',
          'Integração com o ERP para stock, preços e encomendas',
          'Automatização do processamento no OMS',
        ],
      },

      results: [
        { value: '00%', label: 'Encomendas feitas em autonomia', detail: 'valor a confirmar' },
        { value: '00h', label: 'Horas devolvidas à equipa comercial', detail: 'valor a confirmar' },
        { value: '00', label: 'Revendedores ativos no portal', detail: 'valor a confirmar' },
      ],

      closing: {
        title: 'Tem uma operação parecida?',
        body: 'Deixe o seu contacto e falamos sobre o seu caso, não sobre este.',
        submit: 'Falar com especialista',
      },
    },

    en: {
      meta: {
        title: 'Success story — B2B distributor',
        description:
          'Example success story of a distributor on the Redicom Commerce Cloud. Content to be confirmed.',
      },
      client: 'B2B distributor',
      sector: 'Distribution',
      headline: 'Reseller orders without a phone call or an email',
      summary:
        'A distributor with thousands of references, customer-specific pricing and a sales team taking orders over the phone.',

      context: {
        title: 'The client',
        paragraphs: [
          'Describe the client here: sector, size, number of resellers and markets.',
          'Say what was in place before: a PDF catalogue, orders by email, an ERP with no outside connection.',
        ],
      },

      challenge: {
        title: 'The challenge',
        body: 'Describe the real cost of the manual process: sales team time, order errors, delays in confirmation.',
        bullets: ['First concrete symptom', 'Second concrete symptom', 'Third concrete symptom'],
      },

      solution: {
        title: 'What we did',
        body: 'Describe the B2B portal that was implemented, the customer-specific commercial terms and the ERP integration.',
        bullets: [
          'B2B portal with pricing and terms per customer',
          'ERP integration for stock, prices and orders',
          'Automated processing in the OMS',
        ],
      },

      results: [
        { value: '00%', label: 'Orders placed self-service', detail: 'figure to be confirmed' },
        { value: '00h', label: 'Hours given back to the sales team', detail: 'figure to be confirmed' },
        { value: '00', label: 'Active resellers on the portal', detail: 'figure to be confirmed' },
      ],

      closing: {
        title: 'Does this look like your operation?',
        body: 'Leave your details and we will talk about your case, not this one.',
        submit: 'Talk to a specialist',
      },
    },
  },

  {
    slug: 'exemplo-retalhista-multicanal',
    status: 'draft',
    modules: ['platformB2C', 'platformPOS', 'platformOmnichannel'],

    pt: {
      meta: {
        title: 'Caso de sucesso — retalhista multicanal',
        description:
          'Exemplo de caso de sucesso de um retalhista na Redicom Commerce Cloud. Conteúdo por confirmar.',
      },
      client: 'Retalhista multicanal',
      sector: 'Retalho',
      headline: 'Loja física e loja online com o mesmo stock',
      summary:
        'Uma rede de lojas onde o site e o POS eram sistemas diferentes, com stock a divergir todos os dias.',

      context: {
        title: 'O cliente',
        paragraphs: [
          'Descreva aqui quem é o cliente: número de lojas, mercados, volume aproximado.',
          'Indique o que existia antes: POS de terceiros, integração noturna, faturação num sistema à parte.',
        ],
      },

      challenge: {
        title: 'O desafio',
        body: 'Descreva o impacto da divergência de stock: vendas perdidas, encomendas canceladas, tempo perdido em reconciliação.',
        bullets: [
          'Primeiro sintoma concreto',
          'Segundo sintoma concreto',
          'Terceiro sintoma concreto',
        ],
      },

      solution: {
        title: 'O que fizemos',
        body: 'Descreva a substituição do POS, a unificação do stock e a faturação certificada integrada.',
        bullets: [
          'POS omnicanal certificado pela AT',
          'Stock unificado entre lojas, armazém e e-commerce',
          'Devoluções cruzadas entre canais',
        ],
      },

      results: [
        { value: '00%', label: 'Redução de ruturas de stock', detail: 'valor a confirmar' },
        { value: '00', label: 'Lojas migradas', detail: 'valor a confirmar' },
        { value: '00%', label: 'Devoluções feitas em loja', detail: 'valor a confirmar' },
      ],

      closing: {
        title: 'Tem uma operação parecida?',
        body: 'Deixe o seu contacto e falamos sobre o seu caso, não sobre este.',
        submit: 'Falar com especialista',
      },
    },

    en: {
      meta: {
        title: 'Success story — multichannel retailer',
        description:
          'Example success story of a retailer on the Redicom Commerce Cloud. Content to be confirmed.',
      },
      client: 'Multichannel retailer',
      sector: 'Retail',
      headline: 'The store and the website on the same stock',
      summary:
        'A store network where the site and the POS were different systems, with stock drifting apart every day.',

      context: {
        title: 'The client',
        paragraphs: [
          'Describe the client here: number of stores, markets, approximate volume.',
          'Say what was in place before: a third-party POS, an overnight integration, invoicing in a separate system.',
        ],
      },

      challenge: {
        title: 'The challenge',
        body: 'Describe the impact of stock drift: lost sales, cancelled orders, time spent reconciling.',
        bullets: ['First concrete symptom', 'Second concrete symptom', 'Third concrete symptom'],
      },

      solution: {
        title: 'What we did',
        body: 'Describe the POS replacement, the unification of stock and the integrated certified invoicing.',
        bullets: [
          'Omnichannel POS certified by the tax authority',
          'Unified stock across stores, warehouse and e-commerce',
          'Cross-channel returns',
        ],
      },

      results: [
        { value: '00%', label: 'Reduction in stockouts', detail: 'figure to be confirmed' },
        { value: '00', label: 'Stores migrated', detail: 'figure to be confirmed' },
        { value: '00%', label: 'Returns handled in store', detail: 'figure to be confirmed' },
      ],

      closing: {
        title: 'Does this look like your operation?',
        body: 'Leave your details and we will talk about your case, not this one.',
        submit: 'Talk to a specialist',
      },
    },
  },
];

/** Texto da pagina que lista todos os casos. */
export const casesIndexCopy: Record<
  Lang,
  {
    meta: { title: string; description: string };
    breadcrumb: string;
    hero: { eyebrow: string; title: string; lead: string; primary: string };
    filterLabel: string;
    allLabel: string;
    empty: string;
    readLabel: string;
    closing: { title: string; body: string; points: string[]; submit: string };
  }
> = {
  pt: {
    meta: {
      title: 'Casos de Sucesso — projetos na Redicom Commerce Cloud',
      description:
        'Projetos de comércio digital implementados na Redicom Commerce Cloud: retalho multicanal, distribuição B2B e marcas de moda.',
    },
    breadcrumb: 'Casos de Sucesso',
    hero: {
      eyebrow: 'Casos de Sucesso',
      title: 'O que fizemos, com quem e com que resultado',
      lead: 'Cada projeto começou com uma operação que tinha deixado de acompanhar o negócio. Aqui ficam os que podemos contar, com os números que os clientes autorizaram publicar.',
      primary: 'Falar com especialista',
    },
    filterLabel: 'Filtrar por setor',
    allLabel: 'Todos',
    empty: 'Ainda não há casos publicados neste setor.',
    readLabel: 'Ler o caso',
    closing: {
      title: 'O próximo caso pode ser o seu',
      body: 'Deixe o seu contacto e falamos sobre a sua operação — sem guião e sem apresentação genérica.',
      points: [
        'Analisamos o seu contexto antes de propor qualquer solução',
        'Falamos com quem conhece a plataforma, não com um call center',
        'Se não formos a melhor opção para o seu caso, dizemos-lhe',
      ],
      submit: 'Falar com especialista',
    },
  },

  en: {
    meta: {
      title: 'Success Stories — projects on the Redicom Commerce Cloud',
      description:
        'Digital commerce projects delivered on the Redicom Commerce Cloud: multichannel retail, B2B distribution and fashion brands.',
    },
    breadcrumb: 'Success Stories',
    hero: {
      eyebrow: 'Success Stories',
      title: 'What we built, who with, and what changed',
      lead: 'Every project started with an operation that had stopped keeping up with the business. These are the ones we can talk about, with the figures our clients agreed to publish.',
      primary: 'Talk to a specialist',
    },
    filterLabel: 'Filter by sector',
    allLabel: 'All',
    empty: 'No published cases in this sector yet.',
    readLabel: 'Read the story',
    closing: {
      title: 'The next story could be yours',
      body: 'Leave your details and we will talk about your operation — no script and no generic pitch.',
      points: [
        'We look at your context before proposing anything',
        'You talk to people who know the platform, not a call centre',
        'If we are not the best fit for your case, we will tell you',
      ],
      submit: 'Talk to a specialist',
    },
  },
};

/** Aviso mostrado nos casos ainda por confirmar. */
export const caseDraftNotice: Record<Lang, string> = {
  pt: 'Exemplo de estrutura. O conteúdo deste caso ainda não foi confirmado pela Redicom nem autorizado pelo cliente.',
  en: 'Structure example. The content of this case has not yet been confirmed by Redicom or approved by the client.',
};
