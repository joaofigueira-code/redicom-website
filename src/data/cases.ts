import type { Lang, RouteId } from '@i18n/routes';

/**
 * Casos de sucesso.
 *
 * A lista e o conteudo vieram do site em producao: sao os projetos que a
 * Redicom ja mostra publicamente, com o setor, o titulo e o resumo que la
 * estao. O caso da Salsa Jeans esta completo porque a pagina dele tambem ja
 * existe; os restantes tem ficha aberta e ficam em 'draft' ate alguem
 * escrever o desafio, a solucao e os resultados.
 *
 * Enquanto 'draft', cada caso:
 *   - aparece com um aviso visivel de conteudo por confirmar;
 *   - fica fora do indice dos motores de busca.
 *
 * Para publicar: preencher challenge/solution/outcome, trocar status para
 * 'published' e confirmar que ha autorizacao do cliente para o nome, o
 * logotipo e os numeros.
 *
 * As imagens ainda nao existem. Cada caso tem um campo 'image'; enquanto
 * estiver vazio, as paginas mostram um espaco reservado com o nome do
 * cliente, em vez de um buraco.
 */

export type CaseResult = {
  value: string;
  label: string;
  detail?: string;
};

export type CaseCard = {
  title: string;
  body: string;
};

export type CaseProse = {
  title: string;
  paragraphs: string[];
};

export type CaseContent = {
  meta: { title: string; description: string };
  /** Nome do cliente, tal como deve aparecer. */
  client: string;
  /** Setor do cliente, como no site atual. Aparece no cartao e no cabecalho. */
  sector: string;
  /**
   * Familia usada no filtro do indice. Os setores sao dezasseis, e um filtro
   * com dezasseis botoes nao se usa; estas seis agrupam-nos.
   */
  family: string;
  /** Uma linha com o resultado principal. E o que o cartao mostra a seguir ao nome. */
  headline: string;
  /** Resumo do cartao no indice. */
  summary: string;
  /** Frase de abertura da pagina do caso. */
  lead?: string;
  challenge?: CaseProse;
  solution?: CaseProse & { cards?: CaseCard[] };
  outcome?: CaseProse;
  results?: CaseResult[];
  quote?: { text: string; author: string; role: string };
  closing?: { title: string; body: string; submit: string };
};

export type CaseStudy = {
  /** Igual nos dois idiomas: e o nome do cliente. */
  slug: string;
  status: 'draft' | 'published';
  /** Modulos da plataforma usados no projeto. Geram as ligacoes do fim. */
  modules: RouteId[];
  /** Caminho da imagem em /public. Vazio = espaco reservado. */
  image?: string;
  pt: CaseContent;
  en: CaseContent;
};

/** Fecho comum aos casos que nao tenham um proprio. */
export const defaultClosing: Record<Lang, { title: string; body: string; submit: string }> = {
  pt: {
    title: 'Tem uma operação parecida?',
    body: 'Deixe o seu contacto e falamos sobre o seu caso, não sobre este.',
    submit: 'Falar com especialista',
  },
  en: {
    title: 'Does this look like your operation?',
    body: 'Leave your details and we will talk about your case, not this one.',
    submit: 'Talk to a specialist',
  },
};

/**
 * Ficha aberta: o que o site atual ja diz sobre o projeto, e mais nada.
 * O titulo e a descricao para os motores de busca saem do que foi escrito,
 * para nao haver dois sitios a dizer a mesma coisa de maneiras diferentes.
 */
type Stub = {
  client: string;
  sector: string;
  family: string;
  headline: string;
  summary: string;
};

type StubInput = {
  slug: string;
  modules: RouteId[];
  pt: Stub;
  en: Stub;
};

function stub(input: StubInput): CaseStudy {
  const build = (content: Stub): CaseContent => ({
    ...content,
    meta: {
      title: `${content.client}: ${content.headline}`,
      description: content.summary,
    },
  });

  return {
    slug: input.slug,
    status: 'draft',
    modules: input.modules,
    pt: build(input.pt),
    en: build(input.en),
  };
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'salsa-jeans',
    status: 'published',
    modules: ['platformB2C', 'platformMobileApp', 'platformOmnichannel'],

    pt: {
      meta: {
        title: 'Salsa Jeans: o peso do digital e a omnicanalidade',
        description:
          'Da migração para a Cloud à consolidação de uma estratégia omnicanal unificada: como a Salsa Jeans acelera a transformação digital na Redicom Commerce Cloud.',
      },
      client: 'Salsa Jeans',
      sector: 'Moda Denim',
      family: 'Moda e vestuário',
      headline: 'O peso do digital e a omnicanalidade',
      summary:
        'A migração para a Cloud da Redicom permitiu à Salsa Jeans consolidar o conceito omnicanal e reforçar a sustentabilidade do projeto.',
      lead: 'Da migração para a Cloud à consolidação de uma estratégia omnicanal unificada, a Salsa Jeans acelera a sua transformação digital com a plataforma Redicom Commerce Cloud.',

      results: [
        { value: '+30 anos', label: 'De história da marca', detail: 'Fundada em 1994' },
        { value: '+18 anos', label: 'De parceria com a Redicom' },
        { value: '+190', label: 'Lojas físicas', detail: 'Em mais de 40 países' },
        { value: '+1200', label: 'Parceiros multimarca' },
      ],

      challenge: {
        title: 'Crescer digitalmente sem perder a identidade omnicanal',
        paragraphs: [
          'A Salsa Jeans é uma marca portuguesa de referência no universo denim, reconhecida internacionalmente pelo design, pela qualidade e pela inovação no vestuário. Com mais de 30 anos de história, construiu uma presença global com mais de 190 lojas físicas em mais de 40 países e uma rede de mais de 1200 parceiros multimarca.',
          'Com um crescimento sustentado e uma ambição clara de expandir a presença digital, a marca enfrentava o desafio de evoluir a infraestrutura de e-commerce B2C sem comprometer a consistência da experiência entre o canal físico e o digital. A plataforma anterior já não respondia à velocidade nem às exigências de um mercado em transformação constante.',
          'Era preciso um parceiro tecnológico que compreendesse a profundidade do negócio e que oferecesse uma plataforma capaz de unificar a experiência de compra, com escalabilidade, atualizações contínuas e uma visão integrada do cliente.',
        ],
      },

      solution: {
        title: 'Migração para a Redicom Commerce Cloud e consolidação omnicanal',
        paragraphs: [
          'A Salsa Jeans deu um passo determinante no projeto de e-commerce B2C ao migrar para a plataforma Cloud da Redicom, passando a beneficiar de um ecossistema de unified commerce com tecnologia avançada e atualizações constantes.',
        ],
        cards: [
          {
            title: 'Evolução tecnológica',
            body: 'A migração para a plataforma Cloud deu à Salsa Jeans acesso a um ecossistema de unified commerce com tecnologia de ponta, atualizações automáticas e capacidade para suportar as necessidades atuais e futuras do negócio.',
          },
          {
            title: 'Conceito omnicanal',
            body: 'Para consolidar a omnicanalidade, a Redicom disponibilizou uma aplicação móvel totalmente integrada com a plataforma, reforçando a estratégia de investimento tecnológico e dando aos clientes um canal centralizado e personalizado.',
          },
          {
            title: 'Inovação digital',
            body: 'A marca acelera a transformação digital explorando novas tecnologias na plataforma, com uma experiência otimizada que transporta a qualidade do atendimento em loja para o meio digital de forma intuitiva.',
          },
        ],
      },

      outcome: {
        title: 'Uma parceria que impulsiona o crescimento sustentado',
        paragraphs: [
          'A colaboração de mais de 18 anos entre a Salsa Jeans e a Redicom reflete uma relação de confiança e de evolução tecnológica contínua. A migração para a Redicom Commerce Cloud representa um marco na estratégia digital da marca.',
          'Com a plataforma, a Salsa Jeans consolidou a estratégia de investimento tecnológico e passou a oferecer uma experiência omnicanal unificada. A marca reforça o posicionamento premium, ligando a excelência do atendimento em loja física a uma jornada digital fluida, personalizada e intuitiva.',
          'A aplicação móvel integrada e a adoção do ecossistema Cloud posicionam a Salsa Jeans na vanguarda do retalho de moda, preparada para responder com agilidade a um consumidor cada vez mais digital e exigente.',
        ],
      },

      closing: {
        title: 'Pronto para transformar o seu e-commerce?',
        body: 'Descubra como a Redicom Commerce Cloud pode ajudar o seu negócio a alcançar resultados semelhantes. Fale com a nossa equipa de especialistas.',
        submit: 'Falar connosco',
      },
    },

    en: {
      meta: {
        title: 'Salsa Jeans: the weight of digital and omnichannel',
        description:
          'From the move to the Cloud to a unified omnichannel strategy: how Salsa Jeans accelerates its digital transformation on the Redicom Commerce Cloud.',
      },
      client: 'Salsa Jeans',
      sector: 'Denim',
      family: 'Fashion and apparel',
      headline: 'The weight of digital and omnichannel',
      summary:
        'Moving to the Redicom Cloud let Salsa Jeans consolidate its omnichannel approach and put the project on firmer ground.',
      lead: 'From the move to the Cloud to a unified omnichannel strategy, Salsa Jeans accelerates its digital transformation on the Redicom Commerce Cloud platform.',

      results: [
        { value: '+30 years', label: 'Of brand history', detail: 'Founded in 1994' },
        { value: '+18 years', label: 'Of partnership with Redicom' },
        { value: '+190', label: 'Physical stores', detail: 'In more than 40 countries' },
        { value: '+1200', label: 'Multi-brand partners' },
      ],

      challenge: {
        title: 'Growing digitally without losing the omnichannel identity',
        paragraphs: [
          'Salsa Jeans is a leading Portuguese denim brand, recognised internationally for its design, quality and innovation in apparel. With more than 30 years of history, it has built a global presence with over 190 stores in more than 40 countries and a network of more than 1200 multi-brand partners.',
          'With steady growth and a clear ambition to expand its digital presence, the brand faced the challenge of evolving its B2C e-commerce infrastructure without losing consistency between the physical and the digital channel. The previous platform no longer kept up with the speed or the demands of a market in constant change.',
          'What it needed was a technology partner that understood the depth of the business and could offer a platform able to unify the buying experience, with scalability, continuous updates and an integrated view of the customer.',
        ],
      },

      solution: {
        title: 'Moving to the Redicom Commerce Cloud and consolidating omnichannel',
        paragraphs: [
          'Salsa Jeans took a decisive step in its B2C e-commerce project by moving to the Redicom Cloud platform, gaining a unified commerce ecosystem with advanced technology and constant updates.',
        ],
        cards: [
          {
            title: 'Technology evolution',
            body: 'Moving to the Cloud platform gave Salsa Jeans a unified commerce ecosystem with leading technology, automatic updates and the capacity to support the needs of the business today and tomorrow.',
          },
          {
            title: 'Omnichannel in practice',
            body: 'To consolidate omnichannel, Redicom delivered a mobile app fully integrated with the platform, reinforcing the technology investment and giving customers one central, personalised channel.',
          },
          {
            title: 'Digital innovation',
            body: 'The brand accelerates its digital transformation by exploring new technology on the platform, with an experience that carries the quality of in-store service into the digital channel.',
          },
        ],
      },

      outcome: {
        title: 'A partnership that drives sustained growth',
        paragraphs: [
          'More than 18 years of work between Salsa Jeans and Redicom reflect a relationship of trust and continuous technological evolution. Moving to the Redicom Commerce Cloud is a milestone in the digital strategy of the brand.',
          'With the platform, Salsa Jeans consolidated its technology investment and now offers a unified omnichannel experience. The brand reinforces its premium positioning, connecting the excellence of in-store service to a smooth, personalised and intuitive digital journey.',
          'The integrated mobile app and the Cloud ecosystem place Salsa Jeans at the front of fashion retail, ready to respond quickly to an increasingly digital and demanding customer.',
        ],
      },

      closing: {
        title: 'Ready to transform your e-commerce?',
        body: 'Find out how the Redicom Commerce Cloud can help your business reach similar results. Talk to our team of specialists.',
        submit: 'Talk to us',
      },
    },
  },

  stub({
    slug: 'lion-of-porches',
    modules: ['platformB2C', 'platformB2B', 'platformOmnichannel'],
    pt: {
      client: 'Lion of Porches',
      sector: 'Moda',
      family: 'Moda e vestuário',
      headline: 'Ecossistema de soluções',
      summary:
        'A Lion of Porches otimiza os canais online B2C e B2B e supera os desafios do negócio com a tecnologia Cloud da Redicom.',
    },
    en: {
      client: 'Lion of Porches',
      sector: 'Fashion',
      family: 'Fashion and apparel',
      headline: 'One ecosystem of solutions',
      summary:
        'Lion of Porches optimises its B2C and B2B online channels and meets the demands of the business on Redicom Cloud technology.',
    },
  }),

  stub({
    slug: 'bluebird',
    modules: ['platformB2C', 'platformOmnichannel', 'platformPOS'],
    pt: {
      client: 'BlueBird',
      sector: 'Joalharia e Relojoaria',
      family: 'Joalharia e relojoaria',
      headline: 'Potencial das soluções omnicanal',
      summary:
        'A BlueBird usufrui de várias soluções omnicanal, que potenciam as vendas e otimizam a gestão operacional do negócio.',
    },
    en: {
      client: 'BlueBird',
      sector: 'Jewellery and Watches',
      family: 'Jewellery and watches',
      headline: 'The potential of omnichannel',
      summary:
        'BlueBird runs on several omnichannel features that lift sales and streamline the day-to-day management of the business.',
    },
  }),

  stub({
    slug: 'decenio',
    modules: ['platformB2C', 'platformB2B'],
    pt: {
      client: 'Decenio',
      sector: 'Moda e Acessórios',
      family: 'Moda e vestuário',
      headline: 'Uniformização tecnológica',
      summary:
        'Os projetos Decenio B2C e B2B foram implementados na mesma plataforma, reforçando a estratégia de uniformização tecnológica da marca.',
    },
    en: {
      client: 'Decenio',
      sector: 'Fashion and Accessories',
      family: 'Fashion and apparel',
      headline: 'One technology across the board',
      summary:
        'The Decenio B2C and B2B projects were built on the same platform, reinforcing the single-technology strategy of the brand.',
    },
  }),

  stub({
    slug: 'tiffosi',
    modules: ['platformB2B', 'platformB2C'],
    pt: {
      client: 'Tiffosi',
      sector: 'Moda Denim',
      family: 'Moda e vestuário',
      headline: 'Visão completa do negócio B2B',
      summary:
        'A Tiffosi mantém uma visão completa do seu negócio com a plataforma Cloud B2B e reforça as relações com clientes profissionais.',
    },
    en: {
      client: 'Tiffosi',
      sector: 'Denim',
      family: 'Fashion and apparel',
      headline: 'A complete view of the B2B business',
      summary:
        'Tiffosi keeps a complete view of its business on the B2B Cloud platform and strengthens its relationships with trade customers.',
    },
  }),

  stub({
    slug: 'prof',
    modules: ['platformB2C', 'platformGlobal'],
    pt: {
      client: 'PROF',
      sector: 'Calçado, Acessórios e Roupa',
      family: 'Calçado',
      headline: 'Solução global e multimercado',
      summary:
        'A PROF criou uma solução multimercado que permite comercializar os seus produtos em mais de 25 mercados, no canal online.',
    },
    en: {
      client: 'PROF',
      sector: 'Footwear, Accessories and Apparel',
      family: 'Footwear',
      headline: 'A global, multi-market solution',
      summary:
        'PROF built a multi-market solution that sells its products online in more than 25 markets.',
    },
  }),

  stub({
    slug: 'lemon-jelly',
    modules: ['platformB2C', 'platformMarketplaces', 'platformGlobal'],
    pt: {
      client: 'Lemon Jelly',
      sector: 'Calçado Feminino',
      family: 'Calçado',
      headline: 'Operacionalização multicanal',
      summary:
        'A Lemon Jelly recorre a diferentes canais de venda para operacionalizar e potenciar a venda internacional dos seus produtos.',
    },
    en: {
      client: 'Lemon Jelly',
      sector: 'Women’s Footwear',
      family: 'Footwear',
      headline: 'Running several channels at once',
      summary:
        'Lemon Jelly uses several sales channels to run and grow the international sales of its products.',
    },
  }),

  stub({
    slug: 'drope',
    modules: ['platformB2C'],
    pt: {
      client: 'Drope',
      sector: 'Swimwear',
      family: 'Moda e vestuário',
      headline: 'Ficha por escrever',
      summary:
        'Projeto Drope na Redicom Commerce Cloud. O texto deste caso também não existe no site atual.',
    },
    en: {
      client: 'Drope',
      sector: 'Swimwear',
      family: 'Fashion and apparel',
      headline: 'Story to be written',
      summary:
        'The Drope project on the Redicom Commerce Cloud. There is no copy for this story on the current site either.',
    },
  }),

  stub({
    slug: 'giovanni-galli',
    modules: ['platformB2C'],
    pt: {
      client: 'Giovanni Galli',
      sector: 'Moda Masculina',
      family: 'Moda e vestuário',
      headline: 'Ficha por escrever',
      summary:
        'Projeto Giovanni Galli na Redicom Commerce Cloud. O texto deste caso também não existe no site atual.',
    },
    en: {
      client: 'Giovanni Galli',
      sector: 'Menswear',
      family: 'Fashion and apparel',
      headline: 'Story to be written',
      summary:
        'The Giovanni Galli project on the Redicom Commerce Cloud. There is no copy for this story on the current site either.',
    },
  }),

  stub({
    slug: 'marques-soares',
    modules: ['platformB2C', 'platformMobileApp', 'platformOmnichannel'],
    pt: {
      client: 'Marques Soares',
      sector: 'Department Store',
      family: 'Retalho multimarca',
      headline: 'Reforço da omnicanalidade',
      summary:
        'Apostando na plataforma Cloud e na aplicação móvel da Redicom, a Marques Soares cumpre o objetivo de reforçar a omnicanalidade do negócio.',
    },
    en: {
      client: 'Marques Soares',
      sector: 'Department Store',
      family: 'Multi-brand retail',
      headline: 'Omnichannel, reinforced',
      summary:
        'With the Cloud platform and the Redicom mobile app, Marques Soares set out to reinforce the omnichannel side of the business.',
    },
  }),

  stub({
    slug: 'brands-leaders',
    modules: ['platformB2C', 'platformB2B', 'platformOmnichannel'],
    pt: {
      client: 'Brands Leaders',
      sector: 'Calçado e Lifestyle',
      family: 'Calçado',
      headline: 'Unificação de projetos',
      summary:
        'O grupo Brands Leaders unifica na Plataforma Cloud da Redicom todos os seus projetos, entre eles a BAE e a Fuxia, e otimiza processos e operações.',
    },
    en: {
      client: 'Brands Leaders',
      sector: 'Footwear and Lifestyle',
      family: 'Footwear',
      headline: 'Every project in one place',
      summary:
        'The Brands Leaders group brings all of its projects, BAE and Fuxia among them, onto the Redicom Cloud Platform and streamlines processes and operations.',
    },
  }),

  stub({
    slug: 'laranjinha',
    modules: ['platformB2C', 'platformPOS', 'platformOmnichannel'],
    pt: {
      client: 'Laranjinha',
      sector: 'Calçado Infantil',
      family: 'Calçado',
      headline: 'Experiência omnicanal',
      summary:
        'A Laranjinha beneficia de uma experiência omnicanal entre as lojas físicas e o canal online, com uma única plataforma Cloud.',
    },
    en: {
      client: 'Laranjinha',
      sector: 'Children’s Footwear',
      family: 'Footwear',
      headline: 'An omnichannel experience',
      summary:
        'Laranjinha runs one omnichannel experience across its stores and its online channel, on a single Cloud platform.',
    },
  }),

  stub({
    slug: 'sorema-graccioza',
    modules: ['platformB2C', 'platformB2B'],
    pt: {
      client: 'Sorema e Graccioza',
      sector: 'Têxteis-lar para Banho',
      family: 'Casa e têxteis-lar',
      headline: 'Parceria de continuidade',
      summary:
        'A implementação dos projetos Sorema B2C e B2B e Graccioza B2C reforça a confiança do grupo na experiência da Redicom.',
    },
    en: {
      client: 'Sorema and Graccioza',
      sector: 'Bath Home Textiles',
      family: 'Home and home textiles',
      headline: 'A partnership that keeps going',
      summary:
        'The Sorema B2C and B2B projects, and the Graccioza B2C project, reinforce the confidence of the group in Redicom’s experience.',
    },
  }),

  stub({
    slug: 'ferrache',
    modules: ['platformB2C', 'platformB2B'],
    pt: {
      client: 'Ferrache',
      sector: 'Moda Feminina',
      family: 'Moda e vestuário',
      headline: 'Otimização dos processos de venda',
      summary:
        'A Redicom disponibiliza aos projetos B2C e B2B da Ferrache as ferramentas essenciais à otimização dos processos de venda online.',
    },
    en: {
      client: 'Ferrache',
      sector: 'Women’s Fashion',
      family: 'Fashion and apparel',
      headline: 'Sales processes, streamlined',
      summary:
        'Redicom gives the Ferrache B2C and B2B projects the tools they need to streamline online selling.',
    },
  }),

  stub({
    slug: 'natura',
    modules: ['platformB2C', 'platformOmnichannel'],
    pt: {
      client: 'Natura',
      sector: 'Moda e Acessórios',
      family: 'Moda e vestuário',
      headline: 'Omnicanalidade e automatização',
      summary:
        'Como a Natura alcançou a omnicanalidade e a automatização de processos com a Redicom.',
    },
    en: {
      client: 'Natura',
      sector: 'Fashion and Accessories',
      family: 'Fashion and apparel',
      headline: 'Omnichannel and automation',
      summary: 'How Natura reached omnichannel operation and process automation with Redicom.',
    },
  }),

  stub({
    slug: 'mascarilha',
    modules: ['platformB2C', 'platformOmnichannel'],
    pt: {
      client: 'Mascarilha',
      sector: 'Disfarces e Artigos para Festas',
      family: 'Retalho especializado',
      headline: 'Operações simplificadas',
      summary:
        'Com as soluções tecnológicas da Redicom, a Mascarilha simplifica operações e integra os diferentes canais com eficiência.',
    },
    en: {
      client: 'Mascarilha',
      sector: 'Costumes and Party Goods',
      family: 'Specialist retail',
      headline: 'Simpler operations',
      summary:
        'With Redicom technology, Mascarilha simplifies its operations and brings its channels together efficiently.',
    },
  }),

  stub({
    slug: 'agriloja',
    modules: ['platformB2C', 'platformPOS', 'platformOmnichannel'],
    pt: {
      client: 'Agriloja',
      sector: 'Agricultura, Pecuária e Vinicultura',
      family: 'Retalho especializado',
      headline: 'Canais online e offline unidos',
      summary:
        'Como a Agriloja transformou o seu negócio, unificando a experiência online e offline com uma solução omnicanal robusta.',
    },
    en: {
      client: 'Agriloja',
      sector: 'Agriculture, Livestock and Winemaking',
      family: 'Specialist retail',
      headline: 'Online and offline brought together',
      summary:
        'How Agriloja transformed its business by unifying the online and in-store experience on a solid omnichannel solution.',
    },
  }),

  stub({
    slug: 'forte-store',
    modules: ['platformB2C', 'platformOmnichannel', 'integrations'],
    pt: {
      client: 'Forte Store',
      sector: 'Moda e Acessórios',
      family: 'Retalho multimarca',
      headline: 'Integração com o ISA',
      summary:
        'A Forte Store apostou na solução ISA da Redicom, integrando mais de 50 lojas físicas na loja online e conseguindo total omnicanalidade.',
    },
    en: {
      client: 'Forte Store',
      sector: 'Fashion and Accessories',
      family: 'Multi-brand retail',
      headline: 'Integrated with ISA',
      summary:
        'Forte Store adopted the Redicom ISA solution, connecting more than 50 stores to the online store for full omnichannel operation.',
    },
  }),

  stub({
    slug: 'sportino',
    modules: ['platformB2C'],
    pt: {
      client: 'Sportino',
      sector: 'Moda Desportiva e Sneakers',
      family: 'Moda e vestuário',
      headline: 'Ficha por escrever',
      summary:
        'Projeto Sportino na Redicom Commerce Cloud. O texto deste caso também não existe no site atual.',
    },
    en: {
      client: 'Sportino',
      sector: 'Sportswear and Sneakers',
      family: 'Fashion and apparel',
      headline: 'Story to be written',
      summary:
        'The Sportino project on the Redicom Commerce Cloud. There is no copy for this story on the current site either.',
    },
  }),
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
      title: 'Casos de Sucesso: projetos na Redicom Commerce Cloud',
      description:
        'Projetos de comércio digital implementados na Redicom Commerce Cloud: moda, calçado, retalho multimarca, têxteis-lar e retalho especializado.',
    },
    breadcrumb: 'Casos de Sucesso',
    hero: {
      eyebrow: 'Casos de Sucesso',
      title: 'O que fizemos, com quem e com que resultado',
      lead: 'Transformamos desafios digitais em histórias de sucesso, com soluções de e-commerce inovadoras e personalizadas. Cada projeto começou com uma operação que tinha deixado de acompanhar o negócio.',
      primary: 'Falar connosco',
    },
    filterLabel: 'Filtrar por setor',
    allLabel: 'Todos',
    empty: 'Ainda não há casos neste setor.',
    readLabel: 'Ver caso de sucesso',
    closing: {
      title: 'O próximo caso pode ser o seu',
      body: 'Deixe o seu contacto e falamos sobre a sua operação, sem guião e sem apresentação genérica.',
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
      title: 'Success Stories: projects on the Redicom Commerce Cloud',
      description:
        'Digital commerce projects delivered on the Redicom Commerce Cloud: fashion, footwear, multi-brand retail, home textiles and specialist retail.',
    },
    breadcrumb: 'Success Stories',
    hero: {
      eyebrow: 'Success Stories',
      title: 'What we built, who with, and what changed',
      lead: 'We turn digital challenges into success stories with tailored e-commerce solutions. Every project started with an operation that had stopped keeping up with the business.',
      primary: 'Talk to us',
    },
    filterLabel: 'Filter by sector',
    allLabel: 'All',
    empty: 'No cases in this sector yet.',
    readLabel: 'Read the story',
    closing: {
      title: 'The next story could be yours',
      body: 'Leave your details and we will talk about your operation: no script and no generic pitch.',
      points: [
        'We look at your context before proposing anything',
        'You talk to people who know the platform, not a call centre',
        'If we are not the best fit for your case, we will tell you',
      ],
      submit: 'Talk to a specialist',
    },
  },
};

/** Aviso mostrado nos casos ainda por escrever. */
export const caseDraftNotice: Record<Lang, string> = {
  pt: 'Ficha por completar. O setor, o título e o resumo vêm do site atual; o desafio, a solução e os resultados ainda têm de ser escritos e autorizados pelo cliente.',
  en: 'Incomplete record. The sector, title and summary come from the current site; the challenge, the solution and the results still have to be written and approved by the client.',
};

/** O que falta preencher, listado na propria pagina do caso. */
export const caseMissingCopy: Record<Lang, { title: string; body: string; fields: string[] }> = {
  pt: {
    title: 'O que falta escrever',
    body: 'Esta página já tem a estrutura final. Falta-lhe o conteúdo, que só a Redicom pode dar:',
    fields: [
      'Quem é o cliente: dimensão, mercados, canais e há quanto tempo trabalha com a Redicom',
      'O desafio, pelas palavras do cliente, e o que custava à operação',
      'O que foi implementado, por que ordem, e com que sistemas se integrou',
      'Resultados com números, e autorização escrita para os publicar',
      'Uma citação do cliente, se houver, com nome e cargo',
      'Imagens do projeto (loja, site, aplicação) com direitos de utilização',
    ],
  },
  en: {
    title: 'What is still missing',
    body: 'This page already has its final structure. What it lacks is the content, which only Redicom can provide:',
    fields: [
      'Who the client is: size, markets, channels and how long they have worked with Redicom',
      'The challenge in the words of the client, and what it cost the operation',
      'What was implemented, in what order, and which systems it integrates with',
      'Results with figures, and written permission to publish them',
      'A client quote, if there is one, with name and role',
      'Project imagery (store, site, app) with usage rights',
    ],
  },
};
