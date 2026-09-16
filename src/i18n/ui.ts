import type { Lang } from './routes';

/**
 * Dicionario da "moldura" do site: navegacao, botoes, formularios, rodape.
 * O conteudo editorial de cada pagina vive nas content collections, nao aqui.
 *
 * Tom de voz (Manual de Marca, p. 10): primeira pessoa do plural, linguagem
 * profissional B2B, tratamento por "a sua empresa / a sua operacao / o seu
 * negocio", mensagens especificas em vez de genericas.
 */
export const ui = {
  pt: {
    'site.name': 'Redicom',
    'site.tagline': 'Para negócios que exigem mais do comércio digital',

    // --- Navegacao ---------------------------------------------------
    'nav.platform': 'Plataforma',
    'nav.fashion': 'Fashion Retail',
    'nav.agentic': 'Agentic Commerce',
    'nav.why': 'Porquê Redicom',
    'nav.docs': 'Documentação',
    'nav.about': 'Sobre Nós',
    'nav.contact': 'Contactos',
    'nav.overview': 'Visão geral',
    'nav.open': 'Abrir menu',
    'nav.close': 'Fechar menu',
    'nav.back': 'Voltar',
    'nav.main': 'Navegação principal',
    'nav.breadcrumb': 'Percurso',
    'nav.onThisPage': 'Nesta página',
    'nav.skip': 'Saltar para o conteúdo principal',

    // --- Accoes ------------------------------------------------------
    'cta.proposal': 'Pedir proposta',
    'cta.demo': 'Pedir demonstração',
    'cta.specialist': 'Falar com especialista',
    'cta.more': 'Saber mais',
    'cta.explore': 'Explorar plataforma',
    'cta.contact': 'Entrar em contacto',
    'cta.submit': 'Enviar',
    'cta.sending': 'A enviar…',

    // --- Formulario --------------------------------------------------
    'form.name': 'Nome',
    'form.email': 'Email',
    'form.message': 'Mensagem',
    'form.messageOptional': 'Mensagem (opcional)',
    'form.company': 'Empresa',
    'form.phone': 'Telefone',
    'form.required': 'Obrigatório',
    'form.optional': 'Opcional',
    'form.consent':
      'Ao enviar, aceita a nossa <a href="{privacy}">Política de Privacidade</a>.',
    'form.errorName': 'Indique o seu nome.',
    'form.errorEmail': 'Indique um email válido.',
    'form.errorEmailPersonal':
      'Utilize o email da sua empresa para podermos preparar melhor a conversa.',
    'form.errorGeneric':
      'Não foi possível enviar. Tente novamente ou escreva para {email}.',
    'form.success': 'Obrigado. A nossa equipa entra em contacto consigo.',
    'form.successDetail':
      'Recebemos o seu pedido e respondemos normalmente no prazo de um dia útil.',
    'form.replyTime': 'Resposta em menos de 1 dia útil',
    'form.noSpam': 'Sem spam. Falamos consigo, não com uma lista.',

    // --- Rodape ------------------------------------------------------
    'footer.company': 'Redicom',
    'footer.platform': 'Plataforma',
    'footer.sectors': 'Especialização',
    'footer.resources': 'Recursos',
    'footer.offices': 'Escritórios',
    'footer.support': 'Apoio ao cliente',
    'footer.supportHours': 'Segunda a sexta, das 9h às 18h',
    'footer.landline': 'Chamada para a rede fixa nacional',
    'footer.social': 'Siga-nos',
    'footer.rights': 'Todos os direitos reservados.',
    'footer.viewMap': 'Ver no mapa',
    'footer.complaints': 'Livro de Reclamações',
    'footer.complaintsNote': 'Livro de Reclamações eletrónico',

    // --- Newsletter ---------------------------------------------------
    'news.title': 'Newsletter',
    'news.body':
      'Novidades do mercado, novos serviços da plataforma e o que a Redicom Commerce Cloud passa a fazer. Sem calendário fixo: escrevemos quando há alguma coisa para contar.',
    'news.cta': 'Subscrever',
    'news.placeholder': 'O seu email',
    'news.label': 'Email para a newsletter',
    'news.success': 'Subscrição registada. Obrigado.',
    'news.error': 'Não foi possível registar a subscrição. Tente novamente.',
    'news.popupTitle': 'Fique a par do que muda',
    'news.popupBody':
      'Novidades do comércio digital, novos serviços da Redicom Commerce Cloud e as vantagens que a plataforma vai ganhando. Só enviamos quando há alguma coisa que valha a pena ler. Pode cancelar em qualquer altura.',
    'news.dismiss': 'Agora não',
    'news.close': 'Fechar',

    // --- Consentimento -------------------------------------------------
    'consent.label': 'Aviso de privacidade',
    'consent.body':
      'Este site guarda no seu equipamento apenas o que precisa para funcionar. Com a sua autorização, guarda também a campanha que o trouxe até aqui, para sabermos o que funciona. Sem publicidade e sem partilha com terceiros.',
    'consent.more': 'Saber mais',
    'consent.accept': 'Aceitar',
    'consent.deny': 'Recusar',

    // --- Voltar ao topo -----------------------------------------------
    'common.toTop': 'Voltar ao topo',

    // --- Diversos ----------------------------------------------------
    'common.language': 'Idioma',
    'common.readingTime': 'min de leitura',
    'common.updated': 'Atualizado em',
    'common.search': 'Pesquisar na documentação',
    'common.searchResults': 'resultados',
    'common.noResults': 'Sem resultados para esta pesquisa.',
    'common.relatedPages': 'Continuar a explorar',
    'common.notFound': 'Página não encontrada',
    'common.notFoundBody':
      'O endereço que procura já não existe ou mudou de sítio. Comece pela página inicial ou fale connosco.',
    'common.backHome': 'Voltar à página inicial',
  },

  en: {
    'site.name': 'Redicom',
    'site.tagline': 'For businesses that demand more from digital commerce',

    // --- Navigation --------------------------------------------------
    'nav.platform': 'Platform',
    'nav.fashion': 'Fashion Retail',
    'nav.agentic': 'Agentic Commerce',
    'nav.why': 'Why Redicom',
    'nav.docs': 'Documentation',
    'nav.about': 'About Us',
    'nav.contact': 'Contact',
    'nav.overview': 'Overview',
    'nav.open': 'Open menu',
    'nav.close': 'Close menu',
    'nav.back': 'Back',
    'nav.main': 'Main navigation',
    'nav.breadcrumb': 'Breadcrumb',
    'nav.onThisPage': 'On this page',
    'nav.skip': 'Skip to main content',

    // --- Actions -----------------------------------------------------
    'cta.proposal': 'Request a proposal',
    'cta.demo': 'Request a demo',
    'cta.specialist': 'Talk to a specialist',
    'cta.more': 'Learn more',
    'cta.explore': 'Explore the platform',
    'cta.contact': 'Get in touch',
    'cta.submit': 'Send',
    'cta.sending': 'Sending…',

    // --- Form --------------------------------------------------------
    'form.name': 'Name',
    'form.email': 'Email',
    'form.message': 'Message',
    'form.messageOptional': 'Message (optional)',
    'form.company': 'Company',
    'form.phone': 'Phone',
    'form.required': 'Required',
    'form.optional': 'Optional',
    'form.consent':
      'By sending this you accept our <a href="{privacy}">Privacy Policy</a>.',
    'form.errorName': 'Please enter your name.',
    'form.errorEmail': 'Please enter a valid email address.',
    'form.errorEmailPersonal':
      'Please use your company email so we can prepare the conversation properly.',
    'form.errorGeneric': 'We could not send this. Try again or write to {email}.',
    'form.success': 'Thank you. Our team will be in touch.',
    'form.successDetail':
      'We have your request and usually reply within one business day.',
    'form.replyTime': 'Reply within 1 business day',
    'form.noSpam': 'No spam. You get a person, not a mailing list.',

    // --- Footer ------------------------------------------------------
    'footer.company': 'Redicom',
    'footer.platform': 'Platform',
    'footer.sectors': 'Specialisation',
    'footer.resources': 'Resources',
    'footer.offices': 'Offices',
    'footer.support': 'Customer support',
    'footer.supportHours': 'Monday to Friday, 9am to 6pm',
    'footer.landline': 'National landline call',
    'footer.social': 'Follow us',
    'footer.rights': 'All rights reserved.',
    'footer.viewMap': 'View on map',
    'footer.complaints': 'Complaints Book',
    'footer.complaintsNote': 'Portuguese electronic complaints book',

    // --- Newsletter ---------------------------------------------------
    'news.title': 'Newsletter',
    'news.body':
      'Market news, new services on the platform and what the Redicom Commerce Cloud can do next. No fixed schedule: we write when there is something to say.',
    'news.cta': 'Subscribe',
    'news.placeholder': 'Your email',
    'news.label': 'Email for the newsletter',
    'news.success': 'You are subscribed. Thank you.',
    'news.error': 'We could not register the subscription. Please try again.',
    'news.popupTitle': 'Keep up with what changes',
    'news.popupBody':
      'Digital commerce news, new Redicom Commerce Cloud services and the advantages the platform keeps adding. We only send when there is something worth reading. You can unsubscribe at any time.',
    'news.dismiss': 'Not now',
    'news.close': 'Close',

    // --- Consent -------------------------------------------------------
    'consent.label': 'Privacy notice',
    'consent.body':
      'This site only stores on your device what it needs to work. With your permission, it also stores the campaign that brought you here, so we know what works. No advertising and nothing shared with third parties.',
    'consent.more': 'Learn more',
    'consent.accept': 'Accept',
    'consent.deny': 'Decline',

    // --- Back to top ---------------------------------------------------
    'common.toTop': 'Back to top',

    // --- Misc --------------------------------------------------------
    'common.language': 'Language',
    'common.readingTime': 'min read',
    'common.updated': 'Updated',
    'common.search': 'Search the documentation',
    'common.searchResults': 'results',
    'common.noResults': 'No results for this search.',
    'common.relatedPages': 'Keep exploring',
    'common.notFound': 'Page not found',
    'common.notFoundBody':
      'The address you are looking for no longer exists or has moved. Start from the home page or talk to us.',
    'common.backHome': 'Back to home',
  },
} as const satisfies Record<Lang, Record<string, string>>;

export type UIKey = keyof (typeof ui)['pt'];
