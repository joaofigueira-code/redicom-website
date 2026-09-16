import type { SolutionSet } from './types';

/**
 * Subpaginas da Marketing Cloud.
 *
 * Correspondem as subpaginas de Marketing Cloud do site anterior. Ficam com
 * pagina propria porque sao os termos que as pessoas procuram — "email
 * marketing", "sms marketing", "segmentacao" — e porque cada uma tem um
 * argumento tecnico proprio que se perdia diluido numa pagina so.
 *
 * Nota sobre a tabela de comparacao da Marketing Cloud: o site em producao
 * compara com uma ferramenta de automacao identificada pelo nome. Mantivemos
 * os criterios, do lado generico, ate a comparacao nominal ser validada.
 */

export const platformMarketingCopy: SolutionSet = {
  platformConversion: {
    pt: {
      meta: {
        title: 'Ferramentas de Conversão: aumentar vendas sobre os dados da loja',
        description:
          'Personalização cliente a cliente, ferramentas de retenção, ordenação inteligente de produtos, fidelização e relatórios de campanha.',
      },
      breadcrumb: 'Ferramentas de Conversão',
      hero: {
        eyebrow: 'Marketing Cloud',
        title: 'Aumente vendas e conversões sem sair da plataforma',
        lead: 'As ferramentas de conversão trabalham sobre os dados reais da loja (catálogo, stock, histórico de compra) em vez de sobre uma exportação feita ontem.',
        primary: 'Falar com especialista',
      },
      features: [
        {
          title: 'Ferramentas de retenção',
          body: 'Campanhas de recuperação de clientes, agendamento de SMS personalizadas e campanhas de email automatizadas.',
        },
        {
          title: 'Campanhas one-to-one',
          body: 'Ações personalizadas por segmento, ativadas num clique, que chegam ao cliente certo no momento certo.',
        },
        {
          title: 'Ordenação inteligente',
          body: 'Ordenação de produto em tempo real por stock, vendas, promoções ou temperatura local.',
        },
        {
          title: 'Análise e relatórios',
          body: 'Medição detalhada de cada ação de marketing, com integração opcional com ferramentas externas.',
        },
      ],
      sections: [
        {
          eyebrow: 'Personalização',
          title: 'Chegar ao cliente certo com o conteúdo certo',
          body: 'A plataforma traz diferentes tipos de ação prontos a ativar, criados a partir da observação de operações reais ao longo de anos. A equipa não perde tempo a desenhar fluxos: escolhe o que faz sentido e liga.',
          bullets: [
            'Recomendações e promoções em produtos de interesse',
            'Recuperação de carrinhos, encomendas ou clientes',
            'Vouchers, e-gifts ou vales',
            'Descontos de aniversário ou de primeira compra',
          ],
        },
        {
          eyebrow: 'Fidelização',
          title: 'Um programa de pontos ligado à venda real',
          body: 'O programa de fidelização acumula pontos por cada compra não devolvida, com resgate online e acumulação dupla ou tripla em campanhas específicas. Como vive na mesma plataforma que a venda, não há reconciliação a fazer.',
          bullets: [
            'Acumulação de pontos por compra não devolvida',
            'Pontos resgatados online',
            'Acumulação dupla ou tripla em campanhas específicas',
          ],
        },
        {
          eyebrow: 'Medição',
          title: 'Testar, analisar e otimizar',
          body: 'As ferramentas de análise medem e monitorizam ao detalhe cada ação de marketing, para manter uma rotina de avaliação constante. Quem já usa outras ferramentas pode integrá-las, incluindo o Google Analytics.',
          link: { route: 'platformAnalytics', label: 'Ver o Redicom Analytics' },
        },
      ],
      closing: {
        title: 'Quer subir a taxa de conversão?',
        body: 'Deixe o contacto e vemos que ações fazem sentido para o seu catálogo e para a sua base de clientes.',
        points: [
          'Ações prontas a ativar, sem desenhar fluxos',
          'Tudo sobre os mesmos dados da loja',
          'Medição ao lado da venda e da margem',
        ],
        submit: 'Falar com especialista',
      },
      related: ['platformMarketingCloud', 'serviceCampaigns', 'platformPersonalization'],
    },

    en: {
      meta: {
        title: 'Conversion Tools: growing sales on your own store data',
        description:
          'Customer-by-customer personalisation, retention tools, smart product sorting, loyalty and campaign reporting.',
      },
      breadcrumb: 'Conversion Tools',
      hero: {
        eyebrow: 'Marketing Cloud',
        title: 'Grow sales and conversion without leaving the platform',
        lead: 'The conversion tools work on the store’s real data (catalogue, stock, purchase history) rather than on an export made yesterday.',
        primary: 'Talk to a specialist',
      },
      features: [
        {
          title: 'Retention tools',
          body: 'Customer recovery campaigns, scheduled personalised SMS and automated email campaigns.',
        },
        {
          title: 'One-to-one campaigns',
          body: 'Segment-based personalised actions, switched on in one click, reaching the right customer at the right time.',
        },
        {
          title: 'Smart sorting',
          body: 'Real-time product sorting by stock, sales, promotions or local temperature.',
        },
        {
          title: 'Analysis and reporting',
          body: 'Detailed measurement of every marketing action, with optional integration with external tools.',
        },
      ],
      sections: [
        {
          eyebrow: 'Personalisation',
          title: 'Reaching the right customer with the right content',
          body: 'The platform ships different action types ready to switch on, built from years of observing real operations. The team does not spend time designing flows: they pick what makes sense and turn it on.',
          bullets: [
            'Recommendations and promotions on products of interest',
            'Basket, order or customer recovery',
            'Vouchers, e-gifts or credit notes',
            'Birthday or first-purchase discounts',
          ],
        },
        {
          eyebrow: 'Loyalty',
          title: 'A points programme tied to the real sale',
          body: 'The loyalty programme earns points on every non-returned purchase, redeemed online, with double or triple earning on specific campaigns. Because it lives on the same platform as the sale, there is nothing to reconcile.',
          bullets: [
            'Points earned on non-returned purchases',
            'Points redeemed online',
            'Double or triple earning on specific campaigns',
          ],
        },
        {
          eyebrow: 'Measurement',
          title: 'Test, analyse and optimise',
          body: 'The analysis tools measure and monitor every marketing action in detail, to keep a constant routine of review. Teams already using other tools can integrate them, Google Analytics included.',
          link: { route: 'platformAnalytics', label: 'See Redicom Analytics' },
        },
      ],
      closing: {
        title: 'Want to lift your conversion rate?',
        body: 'Leave your details and we will look at which actions suit your catalogue and your customer base.',
        points: [
          'Actions ready to switch on, with no flows to design',
          'All of it on the same store data',
          'Measurement right next to sales and margin',
        ],
        submit: 'Talk to a specialist',
      },
      related: ['platformMarketingCloud', 'serviceCampaigns', 'platformPersonalization'],
    },
  },

  serviceCampaigns: {
    pt: {
      meta: {
        title: 'Campanhas Automatizadas: jornadas prontas, sem trabalho manual',
        description:
          'Jornadas otimizadas ao longo de anos, recomendações com machine learning, promoções baseadas em intenção e campanhas por email, SMS e on-site.',
      },
      breadcrumb: 'Campanhas Automatizadas',
      hero: {
        eyebrow: 'Marketing Cloud',
        title: 'Jornadas personalizadas, prontas a ativar',
        lead: 'Não é preciso aprender a construir jornadas baseadas em comportamento. A plataforma disponibiliza jornadas já otimizadas ao longo de vários anos, com a observação de mais de uma centena de lojas online.',
        primary: 'Falar com especialista',
      },
      features: [
        {
          title: 'Inteligência artificial',
          body: 'Arquiteturas de machine learning que se adaptam em tempo real ao comportamento do cliente e às mudanças de contexto.',
        },
        {
          title: 'Recomendações personalizadas',
          body: 'O sistema determina o perfil de compra de cada indivíduo desde a primeira visita, o que torna as sugestões mais assertivas.',
        },
        {
          title: 'Hiper personalização',
          body: 'Um motor que monitoriza a jornada completa, mapeando necessidades, preferências e evolução dos hábitos de consumo.',
        },
        {
          title: 'Ativação imediata',
          body: 'Sem fluxos para desenhar: um conjunto de campanhas que se ativa e desativa com um clique.',
        },
      ],
      sections: [
        {
          eyebrow: 'Captação',
          title: 'Clientes que trazem clientes',
          body: 'A estratégia member get member aproveita o que já acontece naturalmente: quem está satisfeito recomenda. A plataforma formaliza esse comportamento com uma recompensa associada, o que aumenta vendas e fidelização ao mesmo tempo.',
        },
        {
          eyebrow: 'Intenção',
          title: 'Promoções que respondem à intenção de compra',
          body: 'Substituir a promoção igual para todos por promoções ajustadas à intenção de cada cliente dá o incentivo certo no momento em que ele está mesmo a decidir. É onde a personalização se nota na receita.',
          bullets: [
            'Aumento da taxa de cliques',
            'Aumento das conversões',
            'Aumento das vendas',
            'Aumento da receita total por visita',
          ],
        },
        {
          eyebrow: 'Canais',
          title: 'Email, SMS e on-site na mesma campanha',
          body: 'Cada comunicação leva um link individual que abre a conta e o carrinho do cliente já com sessão iniciada, para que a jornada continue onde estava. As campanhas disponíveis vão da captação de novos clientes à recuperação de carrinhos, passando por descontos de aniversário e upsell no site.',
          link: { route: 'serviceEmail', label: 'Ver o Email Marketing' },
        },
      ],
      midForm: {
        heading: 'Quer ver as campanhas a funcionar?',
        body: 'Diga-nos que tipo de loja tem e mostramos quais das campanhas fazem sentido ativar primeiro.',
        submit: 'Pedir demonstração',
      },
      closing: {
        title: 'Ative as primeiras campanhas',
        body: 'Deixe o contacto e vemos consigo por onde começar, com base no seu catálogo e na sua base de clientes.',
        points: [
          'Campanhas prontas, sem trabalho de construção',
          'Recomendações a partir do comportamento real',
          'Medição do retorno ao lado da venda',
        ],
        submit: 'Falar com especialista',
      },
      related: ['platformMarketingCloud', 'serviceEmail', 'serviceSMS'],
    },

    en: {
      meta: {
        title: 'Automated Campaigns: ready-made journeys, no manual work',
        description:
          'Journeys optimised over years, machine-learning recommendations, intent-based promotions and campaigns across email, SMS and on-site.',
      },
      breadcrumb: 'Automated Campaigns',
      hero: {
        eyebrow: 'Marketing Cloud',
        title: 'Personalised journeys, ready to switch on',
        lead: 'There is no need to learn how to build behaviour-based journeys. The platform ships journeys already optimised over several years, from observing more than a hundred online stores.',
        primary: 'Talk to a specialist',
      },
      features: [
        {
          title: 'Artificial intelligence',
          body: 'Machine-learning architectures that adapt in real time to customer behaviour and to changing context.',
        },
        {
          title: 'Personalised recommendations',
          body: 'The system works out each individual’s buying profile from the first visit, which makes suggestions far more accurate.',
        },
        {
          title: 'Hyper-personalisation',
          body: 'An engine that follows the whole journey, mapping needs, preferences and how buying habits change.',
        },
        {
          title: 'Immediate activation',
          body: 'No flows to design: a set of campaigns you switch on and off with one click.',
        },
      ],
      sections: [
        {
          eyebrow: 'Acquisition',
          title: 'Customers who bring customers',
          body: 'A member-get-member approach builds on what already happens naturally: satisfied customers recommend. The platform formalises that behaviour with a reward attached, which lifts sales and loyalty at the same time.',
        },
        {
          eyebrow: 'Intent',
          title: 'Promotions that answer buying intent',
          body: 'Replacing the same promotion for everyone with promotions matched to each customer’s intent gives the right nudge at the moment they are actually deciding. That is where personalisation shows up in revenue.',
          bullets: [
            'Higher click-through rate',
            'More conversions',
            'More sales',
            'Higher total revenue per visit',
          ],
        },
        {
          eyebrow: 'Channels',
          title: 'Email, SMS and on-site in one campaign',
          body: 'Every message carries an individual link that opens the customer’s account and basket already signed in, so the journey picks up where it left off. Available campaigns range from new customer acquisition to basket recovery, birthday discounts and on-site upsell.',
          link: { route: 'serviceEmail', label: 'See Email Marketing' },
        },
      ],
      midForm: {
        heading: 'Want to see the campaigns running?',
        body: 'Tell us what kind of store you run and we will show which campaigns are worth switching on first.',
        submit: 'Request a demo',
      },
      closing: {
        title: 'Switch on the first campaigns',
        body: 'Leave your details and we will work out where to start, based on your catalogue and your customer base.',
        points: [
          'Ready-made campaigns, with no build work',
          'Recommendations from real behaviour',
          'Return measured right next to the sale',
        ],
        submit: 'Talk to a specialist',
      },
      related: ['platformMarketingCloud', 'serviceEmail', 'serviceSMS'],
    },
  },

  platformSegmentation: {
    pt: {
      meta: {
        title: 'Segmentação: perfis de cliente criados a partir do comportamento',
        description:
          'Segmentação automática assistida por IA, perfis com interesses e comportamento, ordenação inteligente de produtos e relatórios de campanha.',
      },
      breadcrumb: 'Segmentação',
      hero: {
        eyebrow: 'Marketing Cloud',
        title: 'Segmentação a partir do que os clientes fazem',
        lead: 'Personalize campanhas e condições de venda com base em segmentos automáticos, construídos sobre o comportamento real: não sobre listas que alguém atualiza à mão de vez em quando.',
        primary: 'Falar com especialista',
      },
      features: [
        {
          title: 'Segmentação automática',
          body: 'Os segmentos formam-se sozinhos a partir da atividade na loja e mantêm-se atuais sem intervenção.',
        },
        {
          title: 'Perfis com profundidade',
          body: 'Perfis completos com os interesses e o comportamento de cada cliente, e não apenas dados de registo.',
        },
        {
          title: 'Ordenação inteligente',
          body: 'Ordenação automática de listagens por stock, etiquetas, número de vendas ou elegibilidade para promoção.',
        },
        {
          title: 'Análise e relatórios',
          body: 'Medição detalhada das ações de marketing, com integração opcional com ferramentas externas.',
        },
      ],
      sections: [
        {
          eyebrow: 'Perfis',
          title: 'Perceber antes de comunicar',
          body: 'O sistema de segmentação permite perceber com detalhe os interesses dos utilizadores e usar depois esses dados para os atrair e reter, através de ações relevantes criadas automaticamente. A segmentação deixa de ser um trabalho e passa a ser um resultado.',
        },
        {
          eyebrow: 'Catálogo',
          title: 'A listagem também se adapta ao segmento',
          body: 'As regras de ordenação de produto aplicam-se em tempo real e mudam conforme o contexto: disponibilidade de stock, etiquetas, vendas ou elegibilidade para promoção. O cliente vê primeiro o que faz sentido para ele e para a operação.',
        },
      ],
      closing: {
        title: 'Quer segmentos que se mantêm sozinhos?',
        body: 'Deixe o contacto e mostramos como ficam os segmentos com os dados da sua operação.',
        points: [
          'Segmentos construídos sobre comportamento real',
          'Sem listas para manter à mão',
          'Ligados diretamente às campanhas',
        ],
        submit: 'Falar com especialista',
      },
      related: ['platformMarketingCloud', 'serviceCampaigns', 'platformConversion'],
    },

    en: {
      meta: {
        title: 'Segmentation: customer profiles built from behaviour',
        description:
          'AI-assisted automatic segmentation, profiles with interests and behaviour, smart product sorting and campaign reporting.',
      },
      breadcrumb: 'Segmentation',
      hero: {
        eyebrow: 'Marketing Cloud',
        title: 'Segmentation built from what customers actually do',
        lead: 'Personalise campaigns and selling terms using automatic segments built on real behaviour: not on lists someone updates by hand every once in a while.',
        primary: 'Talk to a specialist',
      },
      features: [
        {
          title: 'Automatic segmentation',
          body: 'Segments form themselves from activity in the store and stay current with no intervention.',
        },
        {
          title: 'Profiles with depth',
          body: 'Complete profiles built from each customer’s interests and behaviour, not just their registration data.',
        },
        {
          title: 'Smart sorting',
          body: 'Automatic listing order by stock, tags, sales volume or promotion eligibility.',
        },
        {
          title: 'Analysis and reporting',
          body: 'Detailed measurement of marketing actions, with optional integration with external tools.',
        },
      ],
      sections: [
        {
          eyebrow: 'Profiles',
          title: 'Understand before you communicate',
          body: 'The segmentation system builds a detailed picture of what users are interested in, then uses that to attract and retain them through relevant actions created automatically. Segmentation stops being work and becomes an output.',
        },
        {
          eyebrow: 'Catalogue',
          title: 'The listing adapts to the segment too',
          body: 'Product sorting rules apply in real time and shift with context: stock availability, tags, sales or promotion eligibility. The customer sees first what makes sense for them and for the operation.',
        },
      ],
      closing: {
        title: 'Want segments that maintain themselves?',
        body: 'Leave your details and we will show what the segments look like on your own data.',
        points: [
          'Segments built on real behaviour',
          'No lists to maintain by hand',
          'Wired straight into the campaigns',
        ],
        submit: 'Talk to a specialist',
      },
      related: ['platformMarketingCloud', 'serviceCampaigns', 'platformConversion'],
    },
  },

  serviceSMS: {
    pt: {
      meta: {
        title: 'SMS Marketing: login automático, envio segmentado e ROI medido',
        description:
          'Campanhas por SMS com link de login automático, importação de contactos, rastreamento de cliques e retorno do investimento medido encomenda a encomenda.',
      },
      breadcrumb: 'SMS Marketing',
      hero: {
        eyebrow: 'Marketing Cloud',
        title: 'SMS com taxas de abertura que os outros canais não têm',
        lead: 'O SMS mantém taxas de entrega, abertura e atenção superiores às dos restantes meios eletrónicos. O que faltava era medir o que ele produz, e é isso que esta ferramenta resolve.',
        primary: 'Falar com especialista',
      },
      features: [
        {
          title: 'Login automático',
          body: 'Cada mensagem leva um link individual curto que abre o site com a sessão do cliente já iniciada.',
        },
        {
          title: 'Rastreamento de dados',
          body: 'Saber exatamente que clientes ou números clicaram, com exportação para Excel e reutilização em campanhas futuras.',
        },
        {
          title: 'Retorno do investimento',
          body: 'A lista de encomendas geradas por cada campanha, com número de encomenda, cliente e artigos comprados.',
        },
        {
          title: 'Envio segmentado',
          body: 'Filtrar um conjunto de clientes e enviar mensagens personalizadas, com controlo sobre o público.',
        },
      ],
      sections: [
        {
          eyebrow: 'Fricção',
          title: 'Ninguém desiste no ecrã de login',
          body: 'Já toda a gente clicou numa mensagem, teve de fazer login e acabou por desistir. Com o link individual curto, o cliente entra no site já autenticado e continua a jornada onde a mensagem a deixou.',
        },
        {
          eyebrow: 'Contactos',
          title: 'A sua lista, cruzada com a base da loja',
          body: 'Pode carregar a lista de contactos para a plataforma e deixar que ela cruze com os clientes existentes. Isso dá flexibilidade total na gestão dos destinatários, sem manter duas bases desalinhadas.',
        },
        {
          eyebrow: 'Medição',
          title: 'Retorno medido com precisão, não estimado',
          body: 'Para cada campanha é possível obter a lista completa das encomendas que resultaram dela: com número, detalhes do cliente e artigos comprados. Cada campanha leva também os seus parâmetros de rastreamento, tanto na plataforma como no Google Analytics.',
        },
      ],
      closing: {
        title: 'Quer experimentar o canal SMS?',
        body: 'Deixe o contacto e vemos consigo que campanhas por SMS fazem sentido para a sua base.',
        points: [
          'Login automático, sem fricção na entrada',
          'Retorno medido encomenda a encomenda',
          'Envio segmentado a partir dos dados da loja',
        ],
        submit: 'Falar com especialista',
      },
      related: ['serviceEmail', 'serviceCampaigns', 'platformMarketingCloud'],
    },

    en: {
      meta: {
        title: 'SMS Marketing: automatic login, segmented sending and measured ROI',
        description:
          'SMS campaigns with automatic login links, contact import, click tracking and return on investment measured order by order.',
      },
      breadcrumb: 'SMS Marketing',
      hero: {
        eyebrow: 'Marketing Cloud',
        title: 'SMS open rates that other channels do not reach',
        lead: 'SMS keeps delivery, open and attention rates above other electronic channels. What was missing was measuring what it produces, and that is what this tool fixes.',
        primary: 'Talk to a specialist',
      },
      features: [
        {
          title: 'Automatic login',
          body: 'Every message carries a short individual link that opens the site with the customer already signed in.',
        },
        {
          title: 'Click tracking',
          body: 'Know exactly which customers or numbers clicked, with export to Excel and reuse in later campaigns.',
        },
        {
          title: 'Return on investment',
          body: 'The list of orders each campaign generated, with order number, customer details and items purchased.',
        },
        {
          title: 'Segmented sending',
          body: 'Filter a set of customers and send personalised messages, with real control over the audience.',
        },
      ],
      sections: [
        {
          eyebrow: 'Friction',
          title: 'Nobody gives up at the login screen',
          body: 'Everyone has clicked a message, been asked to sign in and given up. With the short individual link, the customer lands on the site already authenticated and picks the journey up where the message left it.',
        },
        {
          eyebrow: 'Contacts',
          title: 'Your list, matched against the store database',
          body: 'You can upload your contact list to the platform and let it match against existing customers. That gives full flexibility over recipients, without keeping two databases out of step.',
        },
        {
          eyebrow: 'Measurement',
          title: 'Return measured precisely, not estimated',
          body: 'For each campaign you can pull the full list of orders it produced: with number, customer details and items purchased. Every campaign also carries its own tracking parameters, both on the platform and in Google Analytics.',
        },
      ],
      closing: {
        title: 'Want to try the SMS channel?',
        body: 'Leave your details and we will look at which SMS campaigns suit your customer base.',
        points: [
          'Automatic login, with no friction on arrival',
          'Return measured order by order',
          'Segmented sending from your own store data',
        ],
        submit: 'Talk to a specialist',
      },
      related: ['serviceEmail', 'serviceCampaigns', 'platformMarketingCloud'],
    },
  },

  serviceEmail: {
    pt: {
      meta: {
        title: 'Email Marketing: blocos responsivos, login automático e análise de vendas',
        description:
          'Emails dinâmicos com blocos responsivos e seletivos, envio através da Amazon SES, gestão granular de consentimentos e vendas medidas por campanha.',
      },
      breadcrumb: 'Email Marketing',
      hero: {
        eyebrow: 'Marketing Cloud',
        title: 'Email marketing sem integrações e sem sincronizações',
        lead: 'Está pronto a utilizar, sem plugins. Ao contrário das plataformas externas, não é preciso sincronizar contactos, clientes ou encomendas, nem colocar trackers no site.',
        primary: 'Falar com especialista',
      },
      features: [
        {
          title: 'Emails dinâmicos',
          body: 'Blocos responsivos e seletivos: no mesmo template, blocos construídos especificamente para desktop e para mobile.',
        },
        {
          title: 'Login automático',
          body: 'Cada email leva um link individual que abre a Área de Cliente com sessão já iniciada.',
        },
        {
          title: 'Análise de vendas',
          body: 'Taxas de entrega, abertura, cliques e vendas de cada campanha, monitorizadas em tempo real.',
        },
        {
          title: 'Infraestrutura Amazon SES',
          body: 'Envio através de um serviço que trata mil milhões de emails por ano, com autenticação segura e reputação de remetente.',
        },
      ],
      sections: [
        {
          eyebrow: 'Construção',
          title: 'Blocos que se adaptam ao dispositivo e ao público',
          body: 'Cada bloco adicionado no editor adapta-se a desktop e a mobile, e os blocos podem ser segmentados para dirigir conteúdos diferentes a públicos diferentes dentro do mesmo envio. É o que torna um email verdadeiramente personalizado em vez de personalizado no nome.',
        },
        {
          eyebrow: 'Entregabilidade',
          title: 'Envio em massa, em minutos',
          body: 'A ferramenta envia através da Amazon SES, o que significa envio em massa em minutos, remetente com autenticação segura e opções elegíveis para requisitos de conformidade exigentes, incluindo certificação ISO e RGPD.',
        },
        {
          eyebrow: 'Consentimentos',
          title: 'O cliente escolhe o que quer receber, ao detalhe',
          body: 'Ao clicar no link do rodapé, o cliente entra na sua Área de Cliente. Ao contrário das plataformas em que só se pode aceitar ou recusar tudo, aqui as preferências de comunicação escolhem-se ao detalhe: o que é melhor para o cliente e melhor para as métricas.',
        },
        {
          eyebrow: 'Campanhas mistas',
          title: 'Quem não abre o email recebe SMS',
          body: 'Um email não lido é uma oportunidade perdida. Quem não abrir pode receber um SMS de reforço, e é essa combinação que costuma fazer a diferença no retorno da campanha.',
          link: { route: 'serviceSMS', label: 'Ver o SMS Marketing' },
        },
      ],
      midForm: {
        heading: 'Quer sair da sua ferramenta de email atual?',
        body: 'Diga-nos o que usa hoje e mostramos o que muda quando o email vive na mesma plataforma que a loja.',
        submit: 'Falar com especialista',
      },
      closing: {
        title: 'Email sobre os dados reais da loja',
        body: 'Deixe o contacto e vemos consigo como fica a operação de email sem sincronizações.',
        points: [
          'Sem plugins e sem sincronizar contactos',
          'Vendas por campanha medidas com precisão',
          'Consentimentos geridos ao detalhe',
        ],
        submit: 'Falar com especialista',
      },
      related: ['serviceSMS', 'serviceCampaigns', 'platformMarketingCloud'],
    },

    en: {
      meta: {
        title: 'Email Marketing: responsive blocks, automatic login and sales analysis',
        description:
          'Dynamic emails with responsive, targetable blocks, delivery through Amazon SES, granular consent management and sales measured per campaign.',
      },
      breadcrumb: 'Email Marketing',
      hero: {
        eyebrow: 'Marketing Cloud',
        title: 'Email marketing with no integrations and no syncing',
        lead: 'It is ready to use, with no plugins. Unlike external platforms, there are no contacts, customers or orders to synchronise, and no trackers to add to the site.',
        primary: 'Talk to a specialist',
      },
      features: [
        {
          title: 'Dynamic emails',
          body: 'Responsive, targetable blocks: in one template, blocks built specifically for desktop and for mobile.',
        },
        {
          title: 'Automatic login',
          body: 'Every email carries an individual link that opens the customer account already signed in.',
        },
        {
          title: 'Sales analysis',
          body: 'Delivery, open, click and sales rates for each campaign, monitored in real time.',
        },
        {
          title: 'Amazon SES infrastructure',
          body: 'Delivery through a service that handles a billion emails a year, with secure authentication and sender reputation.',
        },
      ],
      sections: [
        {
          eyebrow: 'Building',
          title: 'Blocks that adapt to device and audience',
          body: 'Every block added in the editor adapts to desktop and mobile, and blocks can be targeted so different audiences see different content within the same send. That is what makes an email genuinely personalised rather than personalised by name.',
        },
        {
          eyebrow: 'Deliverability',
          title: 'Bulk sending, in minutes',
          body: 'The tool sends through Amazon SES, which means bulk delivery in minutes, a sender with secure authentication and options eligible for demanding compliance requirements, ISO certification and GDPR included.',
        },
        {
          eyebrow: 'Consent',
          title: 'The customer chooses what to receive, in detail',
          body: 'Clicking the footer link takes the customer into their account. Unlike platforms where the only choice is all or nothing, communication preferences can be set granularly: better for the customer and better for the metrics.',
        },
        {
          eyebrow: 'Mixed campaigns',
          title: 'Whoever does not open the email gets an SMS',
          body: 'An unopened email is a missed opportunity. Anyone who does not open can receive a follow-up SMS, and that combination is usually what moves the campaign’s return.',
          link: { route: 'serviceSMS', label: 'See SMS Marketing' },
        },
      ],
      midForm: {
        heading: 'Thinking of leaving your current email tool?',
        body: 'Tell us what you use today and we will show what changes when email lives on the same platform as the store.',
        submit: 'Talk to a specialist',
      },
      closing: {
        title: 'Email on the store’s real data',
        body: 'Leave your details and we will look at what the email operation becomes without syncing.',
        points: [
          'No plugins and no contact synchronisation',
          'Sales per campaign measured precisely',
          'Consent managed in detail',
        ],
        submit: 'Talk to a specialist',
      },
      related: ['serviceSMS', 'serviceCampaigns', 'platformMarketingCloud'],
    },
  },
};
