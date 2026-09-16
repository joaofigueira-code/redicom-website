import type { SolutionSet } from './types';

/**
 * Subpaginas de comercio da Redicom Commerce Cloud.
 *
 * Correspondem as subpaginas de Plataforma B2C e Plataforma B2B do site
 * anterior. Cada uma tem intencao de pesquisa propria — quem procura
 * "marketplaces" nao procura "plataforma b2c" — e conteudo que chega para se
 * sustentar, por isso ficam com pagina individual e ponto de contacto proprio.
 */

export const platformCommerceCopy: SolutionSet = {
  platformMarketplaces: {
    pt: {
      meta: {
        title: 'Marketplaces — vender em novos canais sem duplicar a operação',
        description:
          'Ligue a loja online aos principais marketplaces com stock e preço em tempo real, encomendas centralizadas e devoluções sob controlo.',
      },
      breadcrumb: 'Marketplaces',
      hero: {
        eyebrow: 'Marketplaces',
        title: 'Venda em marketplaces sem duplicar a operação',
        lead: 'Ligue a sua loja online aos principais marketplaces e expanda o negócio para novos canais e mercados — com o mesmo catálogo, o mesmo stock e o mesmo processo de encomenda.',
        primary: 'Falar com especialista',
      },
      features: [
        {
          title: 'Stock atualizado',
          body: 'Disponibilidade partilhada entre canais e atualizada em tempo real. Evita o pior problema deste canal: vender o que já não existe.',
        },
        {
          title: 'Informação de produto atualizada',
          body: 'O catálogo publicado em cada marketplace vem da mesma base. Corrigir uma ficha corrige-a em todo o lado.',
        },
        {
          title: 'Tracking das encomendas',
          body: 'O estado de cada encomenda acompanha-se no mesmo sítio, venha ela do site ou de qualquer marketplace.',
        },
        {
          title: 'Devoluções sob controlo',
          body: 'Devoluções e reembolsos seguem o mesmo fluxo das restantes encomendas, sem processo paralelo para gerir.',
        },
      ],
      sections: [
        {
          eyebrow: 'Integração',
          title: 'Regras próprias para cada parceiro',
          body: 'Integrar com um marketplace não pode significar aceitar as regras dele em toda a operação. A plataforma permite definir, por parceiro, que catálogo é publicado, que métodos de envio se aplicam e que regras comerciais valem — e controlar tudo isso a partir do mesmo backoffice.',
          bullets: [
            'Fluxo de informação constante com a plataforma',
            'Catálogo de produtos definido por marketplace',
            'Métodos de envio e regras comerciais por parceiro',
          ],
        },
        {
          eyebrow: 'Encomendas',
          title: 'Uma visão global de todos os canais',
          body: 'As encomendas de todos os marketplaces entram no mesmo OMS que as do site e seguem o mesmo processo. É isso que permite manter uma visão única do estado das encomendas, dos clientes e do stock, e integrar com sistemas externos como o ERP sem multiplicar ligações.',
          bullets: [
            'Atualização de stock e preço em tempo real',
            'Acompanhamento do estado das encomendas',
            'Gestão de stock partilhado entre canais',
            'Controlo de devoluções e reembolsos',
          ],
          link: { route: 'platformOMS', label: 'Ver a Plataforma OMS' },
        },
      ],
      closing: {
        title: 'Quer abrir o canal de marketplaces?',
        body: 'Deixe o contacto e vemos consigo que marketplaces fazem sentido para o seu catálogo e o que é preciso preparar.',
        points: [
          'Analisamos o seu catálogo antes de propor canais',
          'Dizemos-lhe o que é integração padrão e o que exige trabalho',
          'Sem taxa sobre as vendas que fizer nestes canais',
        ],
        submit: 'Falar com especialista',
      },
      related: ['platformOmnichannel', 'integrations', 'platformB2C'],
    },

    en: {
      meta: {
        title: 'Marketplaces — sell on new channels without duplicating the operation',
        description:
          'Connect your online store to leading marketplaces with real-time stock and pricing, centralised orders and returns under control.',
      },
      breadcrumb: 'Marketplaces',
      hero: {
        eyebrow: 'Marketplaces',
        title: 'Sell on marketplaces without duplicating the operation',
        lead: 'Connect your online store to the leading marketplaces and expand into new channels and markets — on the same catalogue, the same stock and the same order process.',
        primary: 'Talk to a specialist',
      },
      features: [
        {
          title: 'Stock kept current',
          body: 'Availability shared across channels and updated in real time. It avoids this channel’s worst problem: selling what is no longer there.',
        },
        {
          title: 'Product information kept current',
          body: 'The catalogue published to each marketplace comes from the same source. Fixing one record fixes it everywhere.',
        },
        {
          title: 'Order tracking',
          body: 'Every order is tracked in one place, whether it came from the site or from any marketplace.',
        },
        {
          title: 'Returns under control',
          body: 'Returns and refunds follow the same flow as every other order, with no parallel process to manage.',
        },
      ],
      sections: [
        {
          eyebrow: 'Integration',
          title: 'Your own rules for each partner',
          body: 'Integrating with a marketplace cannot mean accepting its rules across your whole operation. The platform lets you define, per partner, which catalogue is published, which shipping methods apply and which commercial rules hold — and control all of it from the same back office.',
          bullets: [
            'A constant flow of information with the platform',
            'Product catalogue defined per marketplace',
            'Shipping methods and commercial rules per partner',
          ],
        },
        {
          eyebrow: 'Orders',
          title: 'One view across every channel',
          body: 'Orders from every marketplace land in the same OMS as the ones from the site and follow the same process. That is what keeps a single view of order status, customers and stock, and lets you integrate external systems such as the ERP without multiplying connections.',
          bullets: [
            'Real-time stock and price updates',
            'Order status tracking',
            'Shared stock management across channels',
            'Returns and refunds control',
          ],
          link: { route: 'platformOMS', label: 'See the OMS Platform' },
        },
      ],
      closing: {
        title: 'Thinking of opening the marketplace channel?',
        body: 'Leave your details and we will look at which marketplaces suit your catalogue and what needs preparing.',
        points: [
          'We review your catalogue before proposing channels',
          'We tell you what is a standard integration and what needs building',
          'No transaction fee on what you sell through these channels',
        ],
        submit: 'Talk to a specialist',
      },
      related: ['platformOmnichannel', 'integrations', 'platformB2C'],
    },
  },

  platformGlobal: {
    pt: {
      meta: {
        title: 'Comércio Global — vender em vários mercados a partir de um só sítio',
        description:
          'Multi-idioma, multi-moeda e regras por mercado: catálogos, stocks, preços, impostos e transportadoras locais geridos numa única plataforma.',
      },
      breadcrumb: 'Comércio Global',
      hero: {
        eyebrow: 'Comércio Global',
        title: 'O seu negócio além-fronteiras',
        lead: 'Vender noutro país não devia exigir outra plataforma. A Redicom Commerce Cloud permite operar vários mercados a partir de um único sítio, respeitando as regras legais de cada um.',
        primary: 'Falar com especialista',
      },
      features: [
        {
          title: 'Multi-idioma',
          body: 'Todo o conteúdo — texto, imagens e vídeos — diferenciado por mercado, com URLs semânticos que acompanham os recursos de SEO.',
        },
        {
          title: 'Multi-moeda',
          body: 'Preços, campanhas e documentos na moeda de cada mercado, sem conversões feitas à mão.',
        },
        {
          title: 'Multi-operação',
          body: 'Regras de negócio próprias por mercado: catálogo, stock, preço, promoções, envio e devoluções.',
        },
        {
          title: 'Fuso horário',
          body: 'Campanhas, prazos e horários adaptados ao fuso de cada mercado, para que uma promoção comece quando deve.',
        },
      ],
      sections: [
        {
          eyebrow: 'Alcance',
          title: 'Disponível todos os dias, em qualquer mercado',
          body: 'A plataforma incorpora as ferramentas multimercado que permitem vender globalmente de forma rápida e automatizada, respeitando as regras legais de cada país e oferecendo a cada cliente local uma experiência de compra segura e reconhecível.',
          bullets: [
            'Métodos de pagamento diferenciados por mercado',
            'Ligação às transportadoras locais',
            'Stocks, preços e campanhas definidos por mercado',
            'Tabela de impostos local e documentação internacional',
          ],
        },
        {
          eyebrow: 'Conteúdo',
          title: 'O conteúdo certo para cada mercado',
          body: 'Traduzir não é o mesmo que adaptar. Além de traduzir todo o conteúdo para qualquer idioma, a plataforma permite diferenciar textos, imagens e vídeos por mercado — e os URLs semânticos acompanham essa diferenciação, o que faz diferença na pesquisa local.',
          bullets: [
            'Conteúdo diferenciado por mercado',
            'URLs semânticos por idioma',
            'Recursos de SEO aplicados a cada versão',
          ],
        },
      ],
      closing: {
        title: 'Vai abrir um novo mercado?',
        body: 'Deixe o contacto e vemos consigo o que é preciso — fiscalidade, logística, pagamentos e conteúdo.',
        points: [
          'Analisamos os mercados-alvo antes de falar de tecnologia',
          'Sem plataforma nova por cada país',
          'Regras legais de cada mercado tratadas na plataforma',
        ],
        submit: 'Falar com especialista',
      },
      related: ['platformB2C', 'platformOmnichannel', 'platformMarketplaces'],
    },

    en: {
      meta: {
        title: 'Global Commerce — selling in several markets from one place',
        description:
          'Multi-language, multi-currency and per-market rules: catalogues, stock, prices, taxes and local carriers managed on one platform.',
      },
      breadcrumb: 'Global Commerce',
      hero: {
        eyebrow: 'Global Commerce',
        title: 'Your business beyond borders',
        lead: 'Selling in another country should not require another platform. The Redicom Commerce Cloud runs several markets from one place, respecting the legal rules of each.',
        primary: 'Talk to a specialist',
      },
      features: [
        {
          title: 'Multi-language',
          body: 'All content — text, images and video — differentiated per market, with semantic URLs that carry the SEO work with them.',
        },
        {
          title: 'Multi-currency',
          body: 'Prices, campaigns and documents in each market’s currency, with no conversions done by hand.',
        },
        {
          title: 'Multi-operation',
          body: 'Business rules of their own per market: catalogue, stock, price, promotions, shipping and returns.',
        },
        {
          title: 'Time zones',
          body: 'Campaigns, deadlines and opening hours adapted to each market’s time zone, so a promotion starts when it should.',
        },
      ],
      sections: [
        {
          eyebrow: 'Reach',
          title: 'Available every day, in any market',
          body: 'The platform includes the multi-market tools that let you sell globally quickly and automatically, respecting each country’s legal rules and giving every local customer a shopping experience that is safe and recognisable.',
          bullets: [
            'Payment methods differentiated per market',
            'Connection to local carriers',
            'Stock, prices and campaigns defined per market',
            'Local tax tables and international documentation',
          ],
        },
        {
          eyebrow: 'Content',
          title: 'The right content for each market',
          body: 'Translating is not the same as adapting. Beyond translating all content into any language, the platform differentiates text, images and video per market — and the semantic URLs follow that differentiation, which matters for local search.',
          bullets: [
            'Content differentiated per market',
            'Semantic URLs per language',
            'SEO features applied to each version',
          ],
        },
      ],
      closing: {
        title: 'Opening a new market?',
        body: 'Leave your details and we will work through what it takes — tax, logistics, payments and content.',
        points: [
          'We look at the target markets before talking about technology',
          'No new platform per country',
          'Each market’s legal rules handled inside the platform',
        ],
        submit: 'Talk to a specialist',
      },
      related: ['platformB2C', 'platformOmnichannel', 'platformMarketplaces'],
    },
  },

  platformPersonalization: {
    pt: {
      meta: {
        title: 'Marketing Personalizado — campanhas, recomendações e fidelização',
        description:
          'Campanhas omnicanal, recomendações de produto em tempo real, programa de fidelização por pontos e ordenação automática de produtos.',
      },
      breadcrumb: 'Marketing Personalizado',
      hero: {
        eyebrow: 'Marketing Personalizado',
        title: 'Experiências de compra personalizadas em cada interação',
        lead: 'Personalização a sério não é mostrar o nome do cliente no email. É saber o que ele comprou, o que procurou e o que tem em stock — e agir sobre isso no momento certo.',
        primary: 'Falar com especialista',
      },
      features: [
        {
          title: 'Campanhas e promoções omnicanal',
          body: 'Vouchers, e-gifts e vales, descontos de aniversário ou de primeira compra, recuperação de carrinhos, encomendas e clientes — ativados num clique.',
        },
        {
          title: 'Recomendações personalizadas',
          body: 'Recomendações geradas em tempo real a partir do perfil de cada cliente, no site e por email.',
        },
        {
          title: 'Programa de fidelização',
          body: 'Acumulação de pontos por compra não devolvida, resgate online e acumulação dupla ou tripla em campanhas específicas.',
        },
        {
          title: 'Ordenação automática',
          body: 'Regras de ordenação de listagens por stock, vendas, promoções ou até temperatura local, aplicadas em tempo real.',
        },
      ],
      sections: [
        {
          eyebrow: 'Campanhas',
          title: 'Uma rotina de envolvimento, não um envio isolado',
          body: 'Ações personalizadas por segmento permitem chegar aos clientes com relevância e com alcance. A plataforma traz diferentes tipos de ação prontos a ativar, em vez de obrigar a equipa a desenhar fluxos de raiz.',
          bullets: [
            'Vouchers, e-gifts ou vales',
            'Descontos de aniversário ou de primeira compra',
            'Recuperação de carrinhos, encomendas ou clientes',
            'Recomendações e promoções em produtos de interesse',
          ],
        },
        {
          eyebrow: 'Recomendações',
          title: 'Reconhecer o cliente e agir em tempo real',
          body: 'O mecanismo de recomendação reconhece cada cliente, evidencia as suas preferências com base nos perfis traçados e gera recomendações em tempo real — tanto no site como nas comunicações que saem para ele.',
          bullets: ['Recomendações por email', 'Recomendações em tempo real no site'],
          link: { route: 'platformCampaigns', label: 'Ver as Campanhas Automatizadas' },
        },
      ],
      closing: {
        title: 'Quer ativar a personalização?',
        body: 'Deixe o contacto e mostramos que ações fazem sentido para o seu catálogo e para a sua base de clientes.',
        points: [
          'Analisamos a base de clientes antes de propor campanhas',
          'Ações prontas a ativar, sem desenhar fluxos de raiz',
          'Tudo sobre os mesmos dados da loja',
        ],
        submit: 'Falar com especialista',
      },
      related: ['platformMarketingCloud', 'platformSegmentation', 'platformConversion'],
    },

    en: {
      meta: {
        title: 'Personalised Marketing — campaigns, recommendations and loyalty',
        description:
          'Omnichannel campaigns, real-time product recommendations, a points-based loyalty programme and automatic product sorting.',
      },
      breadcrumb: 'Personalised Marketing',
      hero: {
        eyebrow: 'Personalised Marketing',
        title: 'Personalised buying experiences at every interaction',
        lead: 'Real personalisation is not showing the customer’s name in an email. It is knowing what they bought, what they searched for and what is in stock — and acting on it at the right moment.',
        primary: 'Talk to a specialist',
      },
      features: [
        {
          title: 'Omnichannel campaigns and promotions',
          body: 'Vouchers, e-gifts and credit notes, birthday or first-purchase discounts, basket, order and customer recovery — activated in one click.',
        },
        {
          title: 'Personalised recommendations',
          body: 'Recommendations generated in real time from each customer’s profile, on the site and by email.',
        },
        {
          title: 'Loyalty programme',
          body: 'Points earned on every non-returned purchase, redeemed online, with double or triple earning on specific campaigns.',
        },
        {
          title: 'Automatic sorting',
          body: 'Listing rules driven by stock, sales, promotions or even local temperature, applied in real time.',
        },
      ],
      sections: [
        {
          eyebrow: 'Campaigns',
          title: 'A routine of engagement, not a one-off send',
          body: 'Segment-based actions let you reach customers with relevance and with reach. The platform ships different action types ready to switch on, instead of asking the team to design flows from scratch.',
          bullets: [
            'Vouchers, e-gifts or credit notes',
            'Birthday or first-purchase discounts',
            'Basket, order or customer recovery',
            'Recommendations and promotions on products of interest',
          ],
        },
        {
          eyebrow: 'Recommendations',
          title: 'Recognise the customer and act in real time',
          body: 'The recommendation engine recognises each customer, surfaces their preferences based on the profiles built for them, and generates recommendations in real time — both on the site and in the communications that go out.',
          bullets: ['Recommendations by email', 'Real-time recommendations on the site'],
          link: { route: 'platformCampaigns', label: 'See Automated Campaigns' },
        },
      ],
      closing: {
        title: 'Ready to switch personalisation on?',
        body: 'Leave your details and we will show which actions suit your catalogue and your customer base.',
        points: [
          'We look at the customer base before proposing campaigns',
          'Actions ready to switch on, with no flows to design',
          'All of it on the same store data',
        ],
        submit: 'Talk to a specialist',
      },
      related: ['platformMarketingCloud', 'platformSegmentation', 'platformConversion'],
    },
  },

  platformB2BTools: {
    pt: {
      meta: {
        title: 'Ferramentas de Negócio B2B — pré-venda, grelha, packs e rappel',
        description:
          'Encomendas em grelha e pack, pré-venda, rappel, importação e exportação em CSV e acesso próprio para vendedores e agentes.',
      },
      breadcrumb: 'Ferramentas de Negócio',
      hero: {
        eyebrow: 'Plataforma B2B',
        title: 'Plataforma otimizada para comércio B2B',
        lead: 'Uma plataforma pensada à medida do negócio grossista, para distribuidores e fabricantes de qualquer dimensão. O que no B2C é exceção, aqui é o funcionamento normal.',
        primary: 'Falar com especialista',
      },
      features: [
        {
          title: 'Pré-venda',
          body: 'Encomendas de coleção ou de campanha colocadas antes de existir stock, com prazos e condições próprias.',
        },
        {
          title: 'Venda em grelha e pack',
          body: 'Encomenda em matriz por tamanho e cor, e gestão de packs fechados, sem obrigar a somar linha a linha.',
        },
        {
          title: 'Rappel',
          body: 'Descontos por volume acumulado, calculados sobre as regras comerciais que definir para cada cliente.',
        },
        {
          title: 'Acesso a vendedores',
          body: 'Vendedores e agentes com acesso próprio ao portal, à sua carteira e à evolução dos seus resultados.',
        },
      ],
      sections: [
        {
          eyebrow: 'Encomendas',
          title: 'Desenhado para o modo como o B2B encomenda',
          body: 'O portal traz o conjunto de ferramentas que um cliente profissional espera — incluindo importação e exportação em CSV ou Excel, porque uma boa parte das encomendas B2B continua a nascer numa folha de cálculo e não vale a pena fingir o contrário.',
          bullets: [
            'Colocação de encomendas',
            'Orçamentos e propostas',
            'Encomendas de pré-venda',
            'Venda em grelha e packs',
            'Importação e exportação em CSV ou Excel',
          ],
        },
        {
          eyebrow: 'Faturação e armazém',
          title: 'Ligado ao ERP, ao envio e ao pagamento',
          body: 'Pode integrar com o seu sistema de faturação para gerar faturas e notas de envio, ou usar o sistema de faturação interno da plataforma. A gestão de armazém liga-se ao ERP, aos sistemas de envio e aos de pagamento.',
          bullets: [
            'Faturação interna ou integração com sistema externo',
            'Notas de envio e documentação de expedição',
            'Gestão de armazém integrada com o ERP',
          ],
          link: { route: 'integrations', label: 'Ver as Integrações' },
        },
        {
          eyebrow: 'Equipa comercial',
          title: 'Vendedores e agentes com visão própria',
          body: 'O portal dá aos parceiros comerciais uma visão completa da sua evolução individual e do mercado, para que possam otimizar resultados sem depender de relatórios pedidos à sede.',
          bullets: [
            'Gráfico de evolução',
            'Listagem de encomendas',
            'Monitorização de campanhas',
          ],
        },
      ],
      closing: {
        title: 'O seu wholesale ainda vive em Excel?',
        body: 'Deixe o contacto e mostramos como fica o processo quando o cliente encomenda sozinho.',
        points: [
          'Analisamos o seu processo de encomenda atual',
          'Preços e condições por cliente tratados como regra',
          'Integração com o ERP desde o primeiro dia',
        ],
        submit: 'Falar com especialista',
      },
      related: ['platformB2B', 'platformB2BMarketing', 'fashionB2B'],
    },

    en: {
      meta: {
        title: 'B2B Business Tools — pre-season, matrix ordering, packs and rebates',
        description:
          'Matrix and pack ordering, pre-season selling, volume rebates, CSV import and export, and dedicated access for sales reps and agents.',
      },
      breadcrumb: 'Business Tools',
      hero: {
        eyebrow: 'B2B Platform',
        title: 'A platform tuned for B2B commerce',
        lead: 'A platform built around the wholesale business, for distributors and manufacturers of any size. What is an edge case in B2C is normal operation here.',
        primary: 'Talk to a specialist',
      },
      features: [
        {
          title: 'Pre-season selling',
          body: 'Collection or campaign orders placed before stock exists, with their own deadlines and terms.',
        },
        {
          title: 'Matrix and pack ordering',
          body: 'Ordering by size and colour matrix, and management of closed packs, without adding up line by line.',
        },
        {
          title: 'Volume rebates',
          body: 'Discounts on accumulated volume, calculated against the commercial rules you set per customer.',
        },
        {
          title: 'Sales rep access',
          body: 'Reps and agents with their own portal access, their own account list and their own performance view.',
        },
      ],
      sections: [
        {
          eyebrow: 'Ordering',
          title: 'Designed for how B2B actually orders',
          body: 'The portal brings the tools a professional customer expects — including CSV and Excel import and export, because a good share of B2B orders still starts life in a spreadsheet and there is no point pretending otherwise.',
          bullets: [
            'Order placement',
            'Quotes and proposals',
            'Pre-season orders',
            'Matrix and pack ordering',
            'CSV and Excel import and export',
          ],
        },
        {
          eyebrow: 'Invoicing and warehouse',
          title: 'Connected to the ERP, to shipping and to payment',
          body: 'You can integrate your invoicing system to produce invoices and delivery notes, or use the platform’s own. Warehouse management connects to the ERP, to shipping systems and to payments.',
          bullets: [
            'Internal invoicing or integration with an external system',
            'Delivery notes and shipping documentation',
            'Warehouse management integrated with the ERP',
          ],
          link: { route: 'integrations', label: 'See Integrations' },
        },
        {
          eyebrow: 'Sales team',
          title: 'Reps and agents with a view of their own',
          body: 'The portal gives commercial partners a full view of their own performance and of the market, so they can improve results without asking head office for a report.',
          bullets: ['Performance charts', 'Order listings', 'Campaign monitoring'],
        },
      ],
      closing: {
        title: 'Does your wholesale still live in Excel?',
        body: 'Leave your details and we will show you what the process looks like when customers order on their own.',
        points: [
          'We review your current ordering process',
          'Customer-specific prices and terms handled as the rule',
          'ERP integration from day one',
        ],
        submit: 'Talk to a specialist',
      },
      related: ['platformB2B', 'platformB2BMarketing', 'fashionB2B'],
    },
  },

  platformB2BMarketing: {
    pt: {
      meta: {
        title: 'Marketing B2B — campanhas, descontos por volume e carrinhos múltiplos',
        description:
          'Campanhas e descontos personalizados por cliente profissional, preços por cliente, múltiplos carrinhos persistentes e perfis criados por IA.',
      },
      breadcrumb: 'Funcionalidades de Marketing',
      hero: {
        eyebrow: 'Plataforma B2B',
        title: 'Campanhas adaptadas às regras do seu negócio',
        lead: 'O marketing B2B não é o B2C com outro logótipo. Envolve volumes, condições negociadas, campanhas de pré-estação e clientes que compram em vários carrinhos ao mesmo tempo.',
        primary: 'Falar com especialista',
      },
      features: [
        {
          title: 'Campanhas e descontos',
          body: 'Ofertas simples ou complexas, criadas com autonomia pela sua equipa, sem depender de desenvolvimento.',
        },
        {
          title: 'Desconto por volume',
          body: 'Descontos por volume e rappel, aplicados segundo as condições acordadas com cada cliente.',
        },
        {
          title: 'Múltiplos carrinhos',
          body: 'Carrinhos divididos automaticamente conforme as regras de cada campanha, para encomendas separadas.',
        },
        {
          title: 'Carrinhos persistentes',
          body: 'O carrinho fica onde estava. Quando o cliente volta ao portal, retoma a encomenda sem recomeçar.',
        },
      ],
      sections: [
        {
          eyebrow: 'Campanhas',
          title: 'Envolvimento com clientes profissionais',
          body: 'A equipa tem flexibilidade e autonomia para desenhar campanhas conforme as necessidades do negócio, com ofertas que vão do desconto simples a regras compostas de volume e condição de pagamento.',
          bullets: [
            'Descontos por volume e rappel',
            'Preços personalizados por cliente',
            'Oferta de brindes',
            'Vouchers',
          ],
        },
        {
          eyebrow: 'Segmentação',
          title: 'Perfis criados a partir do comportamento real',
          body: 'O sistema de segmentação constrói perfis completos com os interesses e o comportamento de cada cliente. Esses dados alimentam depois ações relevantes, criadas de forma automática, em vez de listas estáticas que envelhecem.',
          link: { route: 'platformSegmentation', label: 'Ver a Segmentação' },
        },
        {
          eyebrow: 'Carrinhos',
          title: 'Várias campanhas, vários carrinhos, uma sessão',
          body: 'Pode criar campanhas com requisitos de compra diferentes — valores mínimos, quantidades mínimas, regras de pagamento, datas de entrega. Os carrinhos dividem-se automaticamente segundo essas regras, permitindo ao cliente colocar encomendas separadas sem confusão.',
          bullets: [
            'Campanhas de pré-estação',
            'Campanhas com valor ou quantidade mínima',
            'Promoções limitadas por stock',
          ],
        },
      ],
      closing: {
        title: 'Quer campanhas à medida do canal B2B?',
        body: 'Deixe o contacto e vemos que regras comerciais precisa de refletir no portal.',
        points: [
          'Condições por cliente tratadas como regra, não como exceção',
          'Campanhas criadas pela sua equipa, sem desenvolvimento',
          'Carrinhos que respeitam as regras de cada campanha',
        ],
        submit: 'Falar com especialista',
      },
      related: ['platformB2B', 'platformB2BTools', 'platformMarketingCloud'],
    },

    en: {
      meta: {
        title: 'B2B Marketing — campaigns, volume discounts and multiple baskets',
        description:
          'Campaigns and discounts tailored to professional customers, customer-specific pricing, multiple persistent baskets and AI-built profiles.',
      },
      breadcrumb: 'Marketing Features',
      hero: {
        eyebrow: 'B2B Platform',
        title: 'Campaigns shaped by your business rules',
        lead: 'B2B marketing is not B2C with a different logo. It involves volumes, negotiated terms, pre-season campaigns and customers buying through several baskets at once.',
        primary: 'Talk to a specialist',
      },
      features: [
        {
          title: 'Campaigns and discounts',
          body: 'Simple or complex offers, built independently by your team, with no development in the loop.',
        },
        {
          title: 'Volume discounts',
          body: 'Volume discounts and rebates, applied according to the terms agreed with each customer.',
        },
        {
          title: 'Multiple baskets',
          body: 'Baskets split automatically according to each campaign’s rules, so orders stay separate.',
        },
        {
          title: 'Persistent baskets',
          body: 'The basket stays where it was. When the customer returns to the portal, they pick the order back up.',
        },
      ],
      sections: [
        {
          eyebrow: 'Campaigns',
          title: 'Engagement with professional customers',
          body: 'The team has the freedom to design campaigns around what the business needs, with offers ranging from a simple discount to compound rules of volume and payment terms.',
          bullets: [
            'Volume discounts and rebates',
            'Customer-specific pricing',
            'Free-gift offers',
            'Vouchers',
          ],
        },
        {
          eyebrow: 'Segmentation',
          title: 'Profiles built from real behaviour',
          body: 'The segmentation system builds complete profiles from each customer’s interests and behaviour. That data then feeds relevant actions, created automatically, rather than static lists that go stale.',
          link: { route: 'platformSegmentation', label: 'See Segmentation' },
        },
        {
          eyebrow: 'Baskets',
          title: 'Several campaigns, several baskets, one session',
          body: 'You can build campaigns with different purchase requirements — minimum values, minimum quantities, payment rules, delivery dates. Baskets split automatically along those rules, letting the customer place separate orders without confusion.',
          bullets: [
            'Pre-season campaigns',
            'Campaigns with a minimum value or quantity',
            'Stock-limited promotions',
          ],
        },
      ],
      closing: {
        title: 'Want campaigns built for the B2B channel?',
        body: 'Leave your details and we will look at which commercial rules need to show up in the portal.',
        points: [
          'Customer terms handled as the rule, not the exception',
          'Campaigns built by your team, without development',
          'Baskets that respect each campaign’s rules',
        ],
        submit: 'Talk to a specialist',
      },
      related: ['platformB2B', 'platformB2BTools', 'platformMarketingCloud'],
    },
  },
};
