import type { SolutionSet } from './types';
import type { HubCopy } from './hubs';
import type { Lang } from '@i18n/routes';

/**
 * Servicos Cloud.
 *
 * Seccao propria, como no site atual. Sao servicos que correm por cima da
 * plataforma — alguem ja tem a loja a funcionar e liga um servico — e nao
 * modulos que se escolhem ao comprar a plataforma. Estavam escondidos dentro
 * do menu "Plataforma", que era a razao pela qual o menu nao se percebia.
 *
 * Conteudo recuperado das paginas /pt/produtos_869.html a produtos_875.html,
 * que nao constavam do sitemap e por isso tinham escapado a primeira recolha.
 */

export const servicesHubCopy: Record<Lang, HubCopy> = {
  pt: {
    meta: {
      title: 'Serviços Cloud de Marketing',
      description:
        'Campanhas, email, SMS, descrições de produto e SEO geridos dentro da própria plataforma. Sem ferramentas externas, sem sincronizações, sem duplicar dados.',
    },
    breadcrumb: 'Serviços',

    hero: {
      eyebrow: 'Serviços Cloud',
      title: 'A tecnologia que faz crescer o negócio',
      lead: 'Os serviços Cloud da Redicom centralizam a gestão de marketing da loja online numa única plataforma: a mesma onde já estão o catálogo, o stock e o cliente.',
      primary: 'Falar com especialista',
      secondary: 'Ver a plataforma',
    },

    pillars: {
      eyebrow: 'O que muda',
      title: 'Quatro coisas que deixam de dar trabalho',
      lead: 'Não são ferramentas novas para aprender. São funções que passam a estar no backoffice que a equipa já usa todos os dias.',
      items: [
        {
          title: 'Marketing integrado e automatizado',
          body: 'Campanhas, newsletters, notificações e ações de marketing num único backoffice. As tarefas repetidas passam a correr sozinhas.',
        },
        {
          title: 'Dados unificados e centralizados',
          body: 'Clientes, campanhas e vendas sincronizados em tempo real, no mesmo ecossistema. Sem integrações externas a manter.',
        },
        {
          title: 'Personalização em tempo real',
          body: 'O sistema adapta recomendações e campanhas ao comportamento de cada cliente, à medida que ele acontece.',
        },
        {
          title: 'Visão global do negócio',
          body: 'Performance de marketing e de vendas lado a lado, sobre os mesmos números. As decisões passam a ter uma só fonte.',
        },
      ],
    },

    modules: {
      eyebrow: 'Serviços',
      title: 'Cinco serviços, activáveis um a um',
      lead: 'Cada um resolve um problema concreto e pode ser ligado sozinho. Não é preciso adoptar o conjunto.',
      items: [
        {
          route: 'serviceCampaigns',
          title: 'Campanhas Automatizadas',
          body: 'Jornadas construídas a partir do comportamento real do cliente, prontas a activar sem trabalho manual de criação.',
        },
        {
          route: 'serviceEmail',
          title: 'Email Marketing',
          body: 'Emails dinâmicos com blocos responsivos e selectivos, enviados através da Amazon SES.',
        },
        {
          route: 'serviceSMS',
          title: 'SMS Marketing',
          body: 'Mensagens com login automático incorporado e retorno medido encomenda a encomenda.',
        },
        {
          route: 'serviceDescriptions',
          title: 'Descrições AI',
          body: 'Descrições de produto escritas pelo sistema a partir dos atributos e das imagens, em todos os idiomas activos.',
        },
        {
          route: 'serviceSEO',
          title: 'SEO Automático',
          body: 'Metadados gerados produto a produto e reavaliados com periodicidade dinâmica.',
        },
      ],
    },

    sections: [
      {
        eyebrow: 'Inteligência artificial',
        title: 'A IA está em todas as áreas, não numa funcionalidade à parte',
        body: 'Do envio de campanhas e emails à criação automática de descrições e de SEO, a inteligência artificial atravessa o marketing digital da Redicom Commerce Cloud. É isso que permite escalar a operação, automatizar processos e gerar conteúdos que acompanham o comportamento dos clientes em vez de ficarem parados no tempo.',
      },
      {
        eyebrow: 'Informação centralizada',
        title: 'Um ecossistema, não uma plataforma com acessórios',
        body: 'Com os dados centralizados e actualizados em tempo real, os resultados são monitorizados, as campanhas optimizadas e as decisões tomadas sobre informação que não precisa de ser reconciliada entre sistemas.',
      },
      {
        eyebrow: 'Comunicação',
        title: 'Personalizada e automatizada, sem intervenção constante',
        body: 'A personalização deixou de ser opcional. Os serviços Cloud permitem segmentar em tempo real, personalizar conteúdos e enviar comunicações adaptadas ao perfil e ao comportamento de cada cliente, sem que alguém tenha de estar sempre a preparar o envio seguinte.',
      },
      {
        eyebrow: 'Operação',
        title: 'Marketing e loja no mesmo fluxo',
        body: 'Não é preciso gerir várias ferramentas em simultâneo. Os serviços de marketing integram-se directamente com a loja online e com o backoffice, o que significa campanhas, envios e segmentações geridos de forma centralizada: um só fluxo, em vez de exportações entre sistemas.',
      },
    ],

    midForm: {
      heading: 'Quer perceber quais fazem sentido para si?',
      body: 'Diga-nos onde está a operação hoje. Dizemos-lhe quais destes serviços mudam alguma coisa no seu caso, e quais não mudam.',
      submit: 'Falar com especialista',
    },

    closing: {
      title: 'Preparado para crescer?',
      body: 'Temos uma equipa dedicada para perceber o que já tem a funcionar e o que vale a pena ligar a seguir.',
      points: [
        'Activação serviço a serviço, sem contratar o conjunto',
        'Sem ferramentas externas nem sincronizações a manter',
        'Retorno medido dentro da própria plataforma',
      ],
      submit: 'Pedir proposta',
    },
  },

  en: {
    meta: {
      title: 'Cloud Marketing Services',
      description:
        'Campaigns, email, SMS, product descriptions and SEO managed inside the platform itself. No external tools, no syncing, no duplicated data.',
    },
    breadcrumb: 'Services',

    hero: {
      eyebrow: 'Cloud Services',
      title: 'The technology that grows the business',
      lead: "Redicom's Cloud services centralise your online store's marketing in a single platform: the same one that already holds the catalogue, the stock and the customer.",
      primary: 'Talk to a specialist',
      secondary: 'See the platform',
    },

    pillars: {
      eyebrow: 'What changes',
      title: 'Four things that stop being work',
      lead: 'These are not new tools to learn. They are functions that appear in the back office your team already uses every day.',
      items: [
        {
          title: 'Integrated and automated marketing',
          body: 'Campaigns, newsletters, notifications and marketing actions in a single back office. The repeated tasks start running on their own.',
        },
        {
          title: 'Unified and centralised data',
          body: 'Customers, campaigns and sales synchronised in real time, in the same ecosystem. No external integrations to maintain.',
        },
        {
          title: 'Real-time personalisation',
          body: 'The system adapts recommendations and campaigns to each customer’s behaviour as it happens.',
        },
        {
          title: 'A global view of the business',
          body: 'Marketing and sales performance side by side, on the same figures. Decisions get a single source.',
        },
      ],
    },

    modules: {
      eyebrow: 'Services',
      title: 'Five services, switched on one at a time',
      lead: 'Each one solves a concrete problem and can be enabled on its own. Adopting the whole set is not a requirement.',
      items: [
        {
          route: 'serviceCampaigns',
          title: 'Automated Campaigns',
          body: 'Journeys built from real customer behaviour, ready to switch on with no manual authoring work.',
        },
        {
          route: 'serviceEmail',
          title: 'Email Marketing',
          body: 'Dynamic emails with responsive, selective blocks, sent through Amazon SES.',
        },
        {
          route: 'serviceSMS',
          title: 'SMS Marketing',
          body: 'Messages with automatic login built in, and return measured order by order.',
        },
        {
          route: 'serviceDescriptions',
          title: 'AI Descriptions',
          body: 'Product descriptions written by the system from attributes and images, in every active language.',
        },
        {
          route: 'serviceSEO',
          title: 'Automated SEO',
          body: 'Metadata generated product by product and re-evaluated on a dynamic schedule.',
        },
      ],
    },

    sections: [
      {
        eyebrow: 'Artificial intelligence',
        title: 'AI runs through every area, not as a separate feature',
        body: 'From sending campaigns and emails to writing descriptions and SEO metadata, artificial intelligence runs across digital marketing in Redicom Commerce Cloud. That is what makes it possible to scale the operation, automate processes and generate content that follows customer behaviour instead of standing still.',
      },
      {
        eyebrow: 'Centralised information',
        title: 'An ecosystem, not a platform with add-ons',
        body: 'With data centralised and updated in real time, results are monitored, campaigns optimised and decisions taken on information that does not need to be reconciled between systems.',
      },
      {
        eyebrow: 'Communication',
        title: 'Personalised and automated, without constant intervention',
        body: 'Personalisation is no longer optional. The Cloud services segment in real time, personalise content and send communications matched to each customer’s profile and behaviour, without someone always preparing the next send.',
      },
      {
        eyebrow: 'Operations',
        title: 'Marketing and store in the same flow',
        body: 'There is no need to run several tools at once. The marketing services integrate directly with the online store and the back office, which means campaigns, sends and segments managed centrally: one flow, instead of exports between systems.',
      },
    ],

    midForm: {
      heading: 'Want to know which ones make sense for you?',
      body: 'Tell us where the operation stands today. We will tell you which of these services change something in your case, and which do not.',
      submit: 'Talk to a specialist',
    },

    closing: {
      title: 'Ready to grow?',
      body: 'We have a dedicated team to understand what already works for you and what is worth switching on next.',
      points: [
        'Enabled service by service, without buying the set',
        'No external tools and no syncing to maintain',
        'Return measured inside the platform itself',
      ],
      submit: 'Request a proposal',
    },
  },
};

/**
 * Os dois servicos que ainda nao tinham pagina no site novo. As outras tres
 * (campanhas, email e SMS) ja existiam e apenas mudaram de casa.
 */
export const servicesCopy: SolutionSet = {
  serviceDescriptions: {
    pt: {
      meta: {
        title: 'Descrições AI: descrições de produto geradas automaticamente',
        description:
          'O sistema lê os atributos e as imagens do produto e escreve a descrição, em todos os idiomas activos do projecto, orientada para pesquisa.',
      },
      breadcrumb: 'Descrições AI',

      hero: {
        eyebrow: 'Serviços Cloud',
        title: 'Descreva os seus produtos em segundos',
        lead: 'Este serviço cria descrições optimizadas e adaptadas a todos os idiomas activos no seu projecto, automaticamente e em segundos.',
        primary: 'Pedir demonstração',
      },

      features: [
        {
          title: 'Inteligência artificial',
          body: 'O sistema observa o produto, lê os atributos e analisa as imagens antes de escrever.',
        },
        {
          title: '100% automático',
          body: 'Identifica os produtos sem descrição e trata deles sem ninguém ter de os assinalar.',
        },
        {
          title: 'Descrições personalizáveis',
          body: 'Número de palavras, tom da comunicação e texto final, tudo editável no backoffice.',
        },
        {
          title: 'Activação imediata',
          body: 'Não há integração a montar: o serviço liga-se dentro da plataforma que já tem.',
        },
      ],

      sections: [
        {
          eyebrow: 'Como funciona',
          title: 'A descrição sai do produto, não de um modelo genérico',
          body: 'O sistema de IA da Redicom observa o produto, lê os seus atributos, analisa imagens e transforma essa informação em descrições detalhadas e orientadas para SEO, com palavras-chave relevantes e adaptadas ao comportamento de pesquisa dos consumidores.',
        },
        {
          eyebrow: 'Automatização',
          title: 'Catálogos grandes deixam de ter buracos',
          body: 'Com a automatização das Descrições AI activa, o sistema identifica produtos sem descrição e gera textos completos, contínuos e em vários idiomas, com base em atributos e imagens. As descrições criadas pelo ChatGPT-4o são naturais, ajustadas ao contexto e com elevada precisão.',
        },
        {
          eyebrow: 'Controlo',
          title: 'Optimização e personalização',
          body: 'Cada descrição pode ser personalizada em detalhe: ajuste o número de palavras, defina o tom da comunicação e edite o texto directamente no backoffice, alinhando-o à estratégia comercial e de marketing do negócio.',
        },
      ],

      closing: {
        title: 'Quer ver o serviço a correr sobre o seu catálogo?',
        body: 'Mostramos-lhe o resultado com produtos reais seus, antes de haver qualquer decisão.',
        points: [
          'Todos os idiomas activos do projecto',
          'Texto editável, sem ficar preso ao que a IA escreveu',
          'Sem integração externa a manter',
        ],
        submit: 'Pedir demonstração',
      },

      related: ['serviceSEO', 'platformSearch', 'services'],
    },

    en: {
      meta: {
        title: 'AI Descriptions: product descriptions generated automatically',
        description:
          'The system reads the product’s attributes and images and writes the description, in every active language of the project, oriented towards search.',
      },
      breadcrumb: 'AI Descriptions',

      hero: {
        eyebrow: 'Cloud Services',
        title: 'Describe your products in seconds',
        lead: 'This service creates optimised descriptions adapted to every active language in your project, automatically and in seconds.',
        primary: 'Request a demo',
      },

      features: [
        {
          title: 'Artificial intelligence',
          body: 'The system observes the product, reads its attributes and analyses the images before writing.',
        },
        {
          title: '100% automatic',
          body: 'It finds the products with no description and handles them without anyone flagging them.',
        },
        {
          title: 'Customisable descriptions',
          body: 'Word count, tone of communication and the final text, all editable in the back office.',
        },
        {
          title: 'Immediate activation',
          body: 'There is no integration to build: the service switches on inside the platform you already have.',
        },
      ],

      sections: [
        {
          eyebrow: 'How it works',
          title: 'The description comes from the product, not from a generic template',
          body: 'Redicom’s AI system observes the product, reads its attributes, analyses images and turns that information into detailed, SEO-oriented descriptions, with relevant keywords tailored to how consumers actually search.',
        },
        {
          eyebrow: 'Automation',
          title: 'Large catalogues stop having gaps',
          body: 'With AI Descriptions automation enabled, the system identifies products without descriptions and generates complete, continuous, multilingual text based on attributes and images. The descriptions created by ChatGPT-4o are natural, contextually appropriate and highly accurate.',
        },
        {
          eyebrow: 'Control',
          title: 'Optimisation and personalisation',
          body: 'Each description can be customised in detail: adjust the word count, define the tone of the communication and edit the text directly in the back office, aligning it with the commercial and marketing strategy of the business.',
        },
      ],

      closing: {
        title: 'Want to see the service running on your own catalogue?',
        body: 'We show you the result on real products of yours, before any decision is on the table.',
        points: [
          'Every active language in the project',
          'Editable text, never locked to what the AI wrote',
          'No external integration to maintain',
        ],
        submit: 'Request a demo',
      },

      related: ['serviceSEO', 'platformSearch', 'services'],
    },
  },

  serviceSEO: {
    pt: {
      meta: {
        title: 'SEO Automático: metadados criados e reavaliados pelo sistema',
        description:
          'Optimização automática da classificação da loja online nos motores de pesquisa: metadados gerados produto a produto e reavaliados com periodicidade dinâmica.',
      },
      breadcrumb: 'SEO Automático',

      hero: {
        eyebrow: 'Serviços Cloud',
        title: 'Maximize a visibilidade do seu negócio',
        lead: 'Com o SEO Automático da Redicom, a classificação da loja online nos motores de pesquisa é optimizada de forma automática, sem esforço adicional da equipa.',
        primary: 'Pedir demonstração',
      },

      features: [
        {
          title: 'Observação do produto',
          body: 'As imagens e os conteúdos são lidos e interpretados pelo sistema de IA.',
        },
        {
          title: 'Pesquisa complementar',
          body: 'É feita uma pesquisa na internet para obter informação adicional sobre o produto.',
        },
        {
          title: 'Metadados gerados',
          body: 'São criados os metadados de SEO com o melhor potencial de pesquisa.',
        },
        {
          title: 'Reavaliação contínua',
          body: 'Os metadados são revistos com periodicidade dinâmica, não uma vez e nunca mais.',
        },
      ],

      sections: [
        {
          eyebrow: 'Inteligência artificial',
          title: 'O trabalho que ninguém tem tempo de fazer produto a produto',
          body: 'A inteligência artificial substitui o trabalho humano de observar o produto, verificar os atributos, comparar com outros sites e ver as imagens, para criar um parágrafo rico em palavras-chave pesquisáveis. Funciona de forma automatizada sem perder objectividade, mantendo as descrições de SEO actualizadas em tempo real.',
        },
        {
          eyebrow: 'Tags',
          title: 'As palavras-chave deixam de ser uma decisão manual',
          body: 'O serviço cria automaticamente as tags de todos os produtos da loja online, directamente através da plataforma. A indexação nos motores de pesquisa passa a acompanhar o catálogo em vez de ficar sempre atrasada em relação a ele.',
        },
        {
          eyebrow: 'Resultado',
          title: 'Tráfego orgânico e cliques',
          body: 'Quando um negócio aparece nos primeiros lugares dos resultados orgânicos, tem dez vezes mais probabilidade de ser clicado, com um aumento da taxa de cliques superior a 30%. São os números publicados pela Redicom para este serviço e vale a pena confirmá-los com a equipa antes de os usar em campanha.',
        },
      ],

      closing: {
        title: 'Quer saber o que muda no seu catálogo?',
        body: 'Olhamos para o estado actual do SEO da sua loja e dizemos-lhe onde é que este serviço faz diferença.',
        points: [
          'Metadados produto a produto, sem trabalho manual',
          'Reavaliação automática ao longo do tempo',
          'Dentro da plataforma, sem ferramenta externa',
        ],
        submit: 'Pedir demonstração',
      },

      related: ['serviceDescriptions', 'platformSearch', 'services'],
    },

    en: {
      meta: {
        title: 'Automated SEO: metadata written and re-evaluated by the system',
        description:
          'Automatic optimisation of your online store’s search ranking: metadata generated product by product and re-evaluated on a dynamic schedule.',
      },
      breadcrumb: 'Automated SEO',

      hero: {
        eyebrow: 'Cloud Services',
        title: 'Maximise your business’s visibility',
        lead: 'With Redicom’s Automated SEO, your online store’s search engine ranking is optimised automatically, with no additional effort from the team.',
        primary: 'Request a demo',
      },

      features: [
        {
          title: 'Product observation',
          body: 'Images and content are read and interpreted by the AI system.',
        },
        {
          title: 'Supporting research',
          body: 'An internet search is carried out to gather additional information about the product.',
        },
        {
          title: 'Metadata generated',
          body: 'SEO metadata with the best search potential is written.',
        },
        {
          title: 'Continuous re-evaluation',
          body: 'Metadata is reviewed on a dynamic schedule, not once and never again.',
        },
      ],

      sections: [
        {
          eyebrow: 'Artificial intelligence',
          title: 'The work nobody has time to do product by product',
          body: 'Artificial intelligence takes over the human work of observing the product, checking attributes, comparing it with other sites and viewing images, to create a paragraph rich in searchable keywords. It runs automatically without losing objectivity, keeping SEO descriptions up to date in real time.',
        },
        {
          eyebrow: 'Tags',
          title: 'Keywords stop being a manual decision',
          body: 'The service automatically creates the tags for every product in the online store, directly through the platform. Search engine indexing starts keeping pace with the catalogue instead of always trailing behind it.',
        },
        {
          eyebrow: 'Outcome',
          title: 'Organic traffic and clicks',
          body: 'When a business appears in the top organic results it is ten times more likely to be clicked, with a click-through rate increase of more than 30%. These are the figures Redicom publishes for this service and they are worth confirming with the team before using them in a campaign.',
        },
      ],

      closing: {
        title: 'Want to know what changes for your catalogue?',
        body: 'We look at the current state of your store’s SEO and tell you where this service makes a difference.',
        points: [
          'Metadata product by product, with no manual work',
          'Automatic re-evaluation over time',
          'Inside the platform, with no external tool',
        ],
        submit: 'Request a demo',
      },

      related: ['serviceDescriptions', 'platformSearch', 'services'],
    },
  },
};
