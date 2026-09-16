import type { Lang } from '@i18n/routes';

/**
 * Paginas institucionais.
 *
 * Nao vendem a plataforma — respondem a "quem sao voces", "onde estao" e
 * "posso trabalhar convosco". Por isso sao mais curtas e mais diretas do que
 * as paginas de produto, e o formulario aparece uma so vez.
 *
 * Os numeros animados que o site em producao mostra na pagina Sobre Nos
 * (total de vendas, numero de encomendas, paises abrangidos) nao foram
 * transcritos: os valores sao carregados por script e nao ficaram acessiveis.
 * Ficam de fora ate serem confirmados, em vez de irem para o ar inventados.
 */

export type AboutCopy = {
  meta: { title: string; description: string };
  breadcrumb: string;
  hero: { eyebrow: string; title: string; lead: string; primary: string };
  story: { title: string; paragraphs: string[] };
  marks: { value: string; label: string; detail?: string }[];
  values: { eyebrow: string; title: string; lead: string; items: { title: string; body: string }[] };
  offices: { eyebrow: string; title: string; lead: string };
  careers: { title: string; body: string; cta: string };
  closing: { title: string; body: string; points: string[]; submit: string };
};

export type ContactCopy = {
  meta: { title: string; description: string };
  breadcrumb: string;
  hero: { eyebrow: string; title: string; lead: string };
  form: { heading: string; body: string; submit: string };
  support: { title: string; body: string; hoursLabel: string; hours: string };
  offices: { title: string };
  commercial: { title: string; body: string };
};

export type CareersCopy = {
  meta: { title: string; description: string };
  breadcrumb: string;
  hero: { eyebrow: string; title: string; lead: string; primary: string };
  intro: { title: string; paragraphs: string[] };
  work: { eyebrow: string; title: string; lead: string; items: { title: string; body: string }[] };
  apply: { title: string; body: string; steps: string[]; note: string; cta: string };
};

export type ThanksCopy = {
  meta: { title: string; description: string };
  title: string;
  lead: string;
  next: { title: string; items: string[] };
  backLabel: string;
  exploreLabel: string;
};

export const aboutCopy: Record<Lang, AboutCopy> = {
  pt: {
    meta: {
      title: 'Sobre Nós — comércio digital desde 2002',
      description:
        'A Redicom desenvolve soluções de comércio digital desde 2002. Mais de 500 projetos implementados, equipa especializada e escritórios em Santo Tirso e Lisboa.',
    },
    breadcrumb: 'Sobre Nós',

    hero: {
      eyebrow: 'Sobre Nós',
      title: 'Somos mais do que um fornecedor de tecnologia',
      lead: 'Desenvolvemos soluções de comércio digital desde 2002. Ao longo de mais de duas décadas, consolidámos uma plataforma própria e uma equipa que conhece o negócio dos clientes, não apenas o código.',
      primary: 'Falar connosco',
    },

    story: {
      title: 'Como chegámos aqui',
      paragraphs: [
        'A Redicom foi fundada em 2002 com o objetivo de desenvolver soluções para o comércio online, numa altura em que quase ninguém em Portugal chamava a isso um setor. Desde então implementámos um vasto conjunto de projetos que sustentam o nosso crescimento e provam a nossa capacidade de inovação continuada.',
        'O investimento constante em investigação consolidou a Redicom Commerce Cloud e um conjunto de soluções complementares que, juntas, já permitiram o crescimento nacional e internacional de várias empresas.',
        'Somos mais do que um fornecedor de tecnologia. Na Redicom, os clientes encontram soluções especializadas para o seu tipo de negócio e um nível de serviço que não delegamos: quem responde conhece a plataforma e conhece o projeto.',
      ],
    },

    marks: [
      { value: '2002', label: 'Desde', detail: 'Mais de duas décadas dedicadas ao comércio digital' },
      { value: '+500', label: 'Projetos implementados', detail: 'Com as nossas soluções de commerce' },
      { value: '2', label: 'Escritórios', detail: 'Santo Tirso e Lisboa' },
    ],

    values: {
      eyebrow: 'Como trabalhamos',
      title: 'O que nos define no dia a dia',
      lead: 'Não são valores de parede. São as três coisas que os clientes nos dizem que fazemos de forma diferente.',
      items: [
        {
          title: 'Especialização a sério',
          body: 'Não servimos qualquer negócio da mesma maneira. Conhecemos as operações onde a complexidade é real — retalho de moda, distribuição, multicanal — e construímos para essa complexidade.',
        },
        {
          title: 'Equipa próxima',
          body: 'A equipa é especializada e multidisciplinar, e o cliente fala com ela diretamente. Não há camada de call center entre quem tem o problema e quem o resolve.',
        },
        {
          title: 'Transparência no custo',
          body: 'Sem taxa sobre as vendas e sem surpresas no fim do mês. O crescimento do cliente é dele, não uma variável da nossa fatura.',
        },
      ],
    },

    offices: {
      eyebrow: 'Onde estamos',
      title: 'Dois escritórios, uma equipa',
      lead: 'A sede fica em Santo Tirso, no Porto, e temos escritório em Lisboa, no Parque das Nações.',
    },

    careers: {
      title: 'Junte-se à nossa equipa',
      body: 'Estamos constantemente à procura de pessoas com talento e vontade de construir. Se quer fazer parte da equipa, conte-nos mais sobre a sua experiência.',
      cta: 'Ver Trabalhe Connosco',
    },

    closing: {
      title: 'Quer conhecer-nos melhor?',
      body: 'Deixe o seu contacto. Começamos por perceber o seu contexto antes de falar de tecnologia.',
      points: [
        'Falamos com quem conhece a plataforma',
        'Analisamos o seu contexto antes de propor qualquer solução',
        'Se não formos a melhor opção para o seu caso, dizemos-lhe',
      ],
      submit: 'Falar connosco',
    },
  },

  en: {
    meta: {
      title: 'About Us — digital commerce since 2002',
      description:
        'Redicom has been building digital commerce solutions since 2002. More than 500 projects delivered, a specialised team and offices in Santo Tirso and Lisbon.',
    },
    breadcrumb: 'About Us',

    hero: {
      eyebrow: 'About Us',
      title: 'We are more than a technology vendor',
      lead: 'We have been building digital commerce solutions since 2002. Over more than two decades we have consolidated our own platform and a team that understands our clients’ business, not just the code.',
      primary: 'Talk to us',
    },

    story: {
      title: 'How we got here',
      paragraphs: [
        'Redicom was founded in 2002 to build solutions for online commerce, at a time when almost nobody in Portugal called that an industry. Since then we have delivered a wide range of projects that sustain our growth and prove our capacity for continued innovation.',
        'Constant investment in research consolidated the Redicom Commerce Cloud and a set of complementary solutions which, together, have supported the domestic and international growth of a number of companies.',
        'We are more than a technology vendor. At Redicom, clients find solutions specialised for their kind of business and a level of service we do not delegate: whoever answers knows the platform and knows the project.',
      ],
    },

    marks: [
      { value: '2002', label: 'Building since', detail: 'More than two decades in digital commerce' },
      { value: '500+', label: 'Projects delivered', detail: 'Running on our commerce solutions' },
      { value: '2', label: 'Offices', detail: 'Santo Tirso and Lisbon' },
    ],

    values: {
      eyebrow: 'How we work',
      title: 'What defines us day to day',
      lead: 'Not values on a wall. The three things clients tell us we do differently.',
      items: [
        {
          title: 'Real specialisation',
          body: 'We do not serve every business the same way. We know the operations where complexity is real — fashion retail, distribution, multichannel — and we build for that complexity.',
        },
        {
          title: 'A team close by',
          body: 'The team is specialised and multidisciplinary, and clients talk to it directly. There is no call centre layer between the person with the problem and the person who solves it.',
        },
        {
          title: 'Transparent cost',
          body: 'No transaction fee and no surprises at the end of the month. Our clients’ growth is theirs, not a variable in our invoice.',
        },
      ],
    },

    offices: {
      eyebrow: 'Where we are',
      title: 'Two offices, one team',
      lead: 'Our head office is in Santo Tirso, near Porto, and we have an office in Lisbon, at Parque das Nações.',
    },

    careers: {
      title: 'Join our team',
      body: 'We are always looking for talented people who want to build. If you would like to join the team, tell us about your experience.',
      cta: 'See Careers',
    },

    closing: {
      title: 'Want to get to know us?',
      body: 'Leave your details. We start by understanding your context before talking about technology.',
      points: [
        'You talk to people who know the platform',
        'We look at your context before proposing anything',
        'If we are not the best fit for your case, we will tell you',
      ],
      submit: 'Talk to us',
    },
  },
};

export const contactCopy: Record<Lang, ContactCopy> = {
  pt: {
    meta: {
      title: 'Contactos — falar com a Redicom',
      description:
        'Escritórios em Santo Tirso e Lisboa, apoio ao cliente de segunda a sexta das 9h às 18h. Deixe o contacto e respondemos em menos de um dia útil.',
    },
    breadcrumb: 'Contactos',

    hero: {
      eyebrow: 'Contactos',
      title: 'Vamos falar',
      lead: 'Dois campos e respondemos em menos de um dia útil. Se preferir, tem abaixo os contactos diretos dos dois escritórios e do apoio ao cliente.',
    },

    form: {
      heading: 'Deixe o seu contacto',
      body: 'Diga-nos quem é e, se quiser, o que procura. Preparamos a conversa com base no seu contexto.',
      submit: 'Enviar',
    },

    support: {
      title: 'Já é cliente?',
      body: 'O apoio ao cliente responde diretamente, sem passar por formulário.',
      hoursLabel: 'Horário',
      hours: 'De segunda a sexta-feira, das 9h00 às 18h00. Encerrado aos sábados, domingos e feriados.',
    },

    offices: {
      title: 'Escritórios',
    },

    commercial: {
      title: 'Questões comerciais',
      body: 'Para propostas, parcerias e pedidos de informação sobre a plataforma.',
    },
  },

  en: {
    meta: {
      title: 'Contact — talk to Redicom',
      description:
        'Offices in Santo Tirso and Lisbon, customer support Monday to Friday from 9am to 6pm. Leave your details and we reply within one working day.',
    },
    breadcrumb: 'Contact',

    hero: {
      eyebrow: 'Contact',
      title: 'Let us talk',
      lead: 'Two fields and we reply within one working day. If you prefer, direct details for both offices and for customer support are below.',
    },

    form: {
      heading: 'Leave your details',
      body: 'Tell us who you are and, if you like, what you are looking for. We prepare the conversation around your context.',
      submit: 'Send',
    },

    support: {
      title: 'Already a client?',
      body: 'Customer support answers directly, with no form in between.',
      hoursLabel: 'Opening hours',
      hours: 'Monday to Friday, 9am to 6pm. Closed on Saturdays, Sundays and public holidays.',
    },

    offices: {
      title: 'Offices',
    },

    commercial: {
      title: 'Commercial enquiries',
      body: 'For proposals, partnerships and information about the platform.',
    },
  },
};

export const careersCopy: Record<Lang, CareersCopy> = {
  pt: {
    meta: {
      title: 'Trabalhe Connosco — carreiras na Redicom',
      description:
        'Estamos em crescimento e à procura de pessoas com talento para desenvolver comércio digital. Envie uma candidatura espontânea para a equipa da Redicom.',
    },
    breadcrumb: 'Trabalhe Connosco',

    hero: {
      eyebrow: 'Carreiras',
      title: 'Faça parte da nossa equipa',
      lead: 'Estamos em constante crescimento e à procura de pessoas apaixonadas, talentosas e criativas. Se considera que tem o perfil certo, queremos conhecê-lo.',
      primary: 'Enviar candidatura',
    },

    intro: {
      title: 'O que fazemos aqui',
      paragraphs: [
        'A Redicom desenvolve uma plataforma de comércio digital utilizada por grandes retalhistas nacionais. Isso significa problemas reais de escala, integrações com sistemas de terceiros, operações omnicanal e decisões técnicas que se vêem em produção no dia seguinte.',
        'A equipa é especializada e multidisciplinar: desenvolvimento, operação, projeto e apoio ao cliente trabalham próximos, porque é assim que se resolve um problema de um cliente sem passar por três intermediários.',
      ],
    },

    work: {
      eyebrow: 'Áreas',
      title: 'Onde costumamos precisar de reforço',
      lead: 'Mesmo sem uma vaga aberta publicada, estas são as áreas onde uma boa candidatura espontânea raramente fica sem resposta.',
      items: [
        {
          title: 'Desenvolvimento',
          body: 'Back-end, front-end e integrações sobre a Redicom Commerce Cloud, com operações de volume real e exigência de performance.',
        },
        {
          title: 'Projeto e implementação',
          body: 'Acompanhamento de implementações de ponta a ponta: levantamento, configuração, migração de dados e arranque.',
        },
        {
          title: 'Apoio ao cliente',
          body: 'Resposta técnica direta a quem opera a plataforma todos os dias, com conhecimento real do produto.',
        },
      ],
    },

    apply: {
      title: 'Candidatura espontânea',
      body: 'Não temos um portal de recrutamento: preferimos ler as candidaturas. Envie-nos um email com o essencial e a equipa responde.',
      steps: [
        'Envie o seu currículo em PDF',
        'Diga em que área se encaixa melhor e a partir de quando está disponível',
        'Se tiver trabalho público — repositórios, projetos, portefólio — inclua os links',
      ],
      note: 'As candidaturas são tratadas pela equipa da Redicom e os seus dados são usados apenas para o processo de recrutamento.',
      cta: 'Enviar candidatura por email',
    },
  },

  en: {
    meta: {
      title: 'Careers at Redicom',
      description:
        'We are growing and looking for talented people to build digital commerce. Send a speculative application to the Redicom team.',
    },
    breadcrumb: 'Careers',

    hero: {
      eyebrow: 'Careers',
      title: 'Join our team',
      lead: 'We are growing constantly and looking for passionate, talented and creative people. If you think you are a good fit, we would like to meet you.',
      primary: 'Send an application',
    },

    intro: {
      title: 'What we do here',
      paragraphs: [
        'Redicom builds a digital commerce platform used by leading Portuguese retailers. That means real problems of scale, integrations with third-party systems, omnichannel operations and technical decisions you see in production the next day.',
        'The team is specialised and multidisciplinary: development, operations, delivery and support work closely together, because that is how a client problem gets solved without passing through three intermediaries.',
      ],
    },

    work: {
      eyebrow: 'Areas',
      title: 'Where we usually need reinforcement',
      lead: 'Even with no published opening, these are the areas where a good speculative application rarely goes unanswered.',
      items: [
        {
          title: 'Development',
          body: 'Back end, front end and integrations on the Redicom Commerce Cloud, with real-volume operations and genuine performance demands.',
        },
        {
          title: 'Delivery and implementation',
          body: 'End-to-end implementations: discovery, configuration, data migration and go-live.',
        },
        {
          title: 'Customer support',
          body: 'Direct technical answers for the people who operate the platform every day, with real product knowledge.',
        },
      ],
    },

    apply: {
      title: 'Speculative application',
      body: 'We do not run a recruitment portal: we would rather read the applications. Send us an email with the essentials and the team will reply.',
      steps: [
        'Send your CV as a PDF',
        'Tell us which area fits you best and when you are available',
        'If you have public work — repositories, projects, a portfolio — include the links',
      ],
      note: 'Applications are handled by the Redicom team and your details are used only for the recruitment process.',
      cta: 'Apply by email',
    },
  },
};

export const thanksCopy: Record<Lang, ThanksCopy> = {
  pt: {
    meta: {
      title: 'Obrigado pelo seu contacto',
      description: 'Recebemos o seu contacto e respondemos em menos de um dia útil.',
    },
    title: 'Recebemos o seu contacto',
    lead: 'Obrigado. A mensagem chegou à equipa e respondemos em menos de um dia útil.',
    next: {
      title: 'O que acontece a seguir',
      items: [
        'Alguém da equipa lê o seu contexto antes de responder',
        'Marcamos uma conversa curta para perceber a operação',
        'Só depois disso falamos de solução, prazos e investimento',
      ],
    },
    backLabel: 'Voltar à página inicial',
    exploreLabel: 'Conhecer a plataforma',
  },

  en: {
    meta: {
      title: 'Thank you for getting in touch',
      description: 'We have your details and will reply within one working day.',
    },
    title: 'We have your details',
    lead: 'Thank you. Your message reached the team and we reply within one working day.',
    next: {
      title: 'What happens next',
      items: [
        'Someone on the team reads your context before replying',
        'We arrange a short conversation to understand the operation',
        'Only then do we talk about solution, timings and investment',
      ],
    },
    backLabel: 'Back to the home page',
    exploreLabel: 'Explore the platform',
  },
};
