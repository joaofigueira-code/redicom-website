/**
 * Dados factuais da empresa — fonte unica para rodape, pagina de contactos,
 * dados estruturados (schema.org) e qualquer sitio que precise deles.
 * Valores recolhidos do site em producao em 2026-09-15.
 */

export const site = {
  name: 'Redicom',
  legalName: 'Redicom — Moreira e Costa, Lda.',
  product: 'Redicom Commerce Cloud',
  url: 'https://www.redicom.pt',
  foundingYear: 2002,
  projectsDelivered: 500,

  email: {
    general: 'info@redicom.pt',
    support: 'apoio.cliente@redicom.pt',
  },

  support: {
    phone: '+351252850731',
    phoneDisplay: '(+351) 252 850 731',
  },

  /**
   * Redes sociais. O rodape so desenha as que tem endereco: o Reddit ainda
   * esta por criar e um icone que nao leva a lado nenhum e pior do que icone
   * nenhum — assim que a conta existir, basta preencher aqui o endereco e o
   * icone aparece sozinho.
   */
  social: {
    linkedin: 'https://www.linkedin.com/company/redicom',
    instagram: 'https://www.instagram.com/redicomcommerce/',
    facebook: 'https://www.facebook.com/redicomecommerce/',
    reddit: null as string | null,
  },

  offices: [
    {
      id: 'porto',
      city: 'Santo Tirso',
      region: 'Porto',
      street: 'Rua Comendador António Maria Lopes, n.º 13',
      postalCode: '4780-424',
      country: 'PT',
      phone: '+351252850729',
      phoneDisplay: '252 850 729',
      fax: '252 850 742',
      mapUrl:
        'https://www.google.com/maps/search/?api=1&query=Rua+Comendador+Ant%C3%B3nio+Maria+Lopes+13+4780-424+Santo+Tirso',
    },
    {
      id: 'lisboa',
      city: 'Lisboa',
      region: 'Lisboa',
      street: 'Rua Pedro e Inês, n.º 3 — Piso 1, E1, Parque das Nações',
      postalCode: '1990-074',
      country: 'PT',
      phone: '+351217937044',
      phoneDisplay: '217 937 044',
      fax: null,
      mapUrl:
        'https://www.google.com/maps/search/?api=1&query=Rua+Pedro+e+In%C3%AAs+3+1990-074+Lisboa',
    },
  ],
} as const;

export type Office = (typeof site.offices)[number];

/** Ano corrente, para o aviso de copyright do rodape. */
export const currentYear = new Date().getFullYear();
