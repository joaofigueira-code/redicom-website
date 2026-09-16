import type { Lang } from '@i18n/routes';

/**
 * Politica de Privacidade.
 *
 * IMPORTANTE — este texto nao foi escrito para este site. E a transcricao da
 * politica publicada em www.redicom.pt, com data de 16/11/2021, e tem tres
 * limitacoes que devem ser resolvidas antes do lancamento:
 *
 *   1. So existe em ingles, incluindo na versao portuguesa do site;
 *   2. e uma politica de SaaS (Redicom Commerce Cloud, relacao com merchants
 *      e end-users) e nao cobre a recolha de leads no site institucional, que
 *      e precisamente o que o novo site passa a fazer;
 *   3. nao identifica encarregado de protecao de dados nem prazos concretos
 *      de conservacao.
 *
 * Mantemos o texto tal como esta publicado — nao inventamos texto juridico —
 * e sinalizamos a lacuna a quem responde pelo tema. Assim que houver versao
 * revista, substitui-se este ficheiro.
 */

export type LegalSection = {
  heading: string;
  paragraphs?: string[];
  list?: string[];
};

export const privacyMeta: Record<Lang, { title: string; description: string; breadcrumb: string }> =
  {
    pt: {
      title: 'Política de Privacidade',
      description:
        'Como a Redicom recolhe, trata e protege dados pessoais, enquanto responsável pelo tratamento e enquanto subcontratante dos seus clientes.',
      breadcrumb: 'Política de Privacidade',
    },
    en: {
      title: 'Privacy Policy',
      description:
        'How Redicom collects, processes and protects personal data, both as a controller and as a processor on behalf of its customers.',
      breadcrumb: 'Privacy Policy',
    },
  };

/** Aviso mostrado acima do texto, porque a politica so existe em ingles. */
export const privacyNotice: Record<Lang, string | null> = {
  pt: 'A política de privacidade da Redicom está publicada em inglês. Para qualquer questão sobre o tratamento dos seus dados pessoais, escreva para info@redicom.pt e respondemos em português.',
  en: null,
};

export const privacyEffectiveDate = '16/11/2021';
export const privacyPlace = 'Santo Tirso';
export const privacyTitle = 'Redicom Commerce Privacy Policy';

export const privacyIntro: string[] = [
  'Moreira e Costa, Lda. is a legal entity established in Portugal with commercial name and hereinafter referred to as (Redicom) that takes the protection of personal data very seriously. We treat personal data confidentially and always in accordance with the statutory data protection regulations.',
  'This Privacy Policy (the Privacy Policy) describes our practices in connection with information that we collect through our business i.e. websites operated by us from which this Privacy Policy is accessed, through email messages or other communication that we send that link to this Privacy Policy, or through products and services, subscribe to, or license from us, including software, applications and any other on-line services provided by us or related to Redicom.',
  'This Privacy Policy describes how Redicom processes Personal Data in its capacity as a controller (i.e. Redicom decides what Personal Data is collected and what it is used for) or as a processor (i.e. Redicom only processes the data as per the controller’s instructions), as the case may be. It also describes choices regarding use, access and correction of Personal Data.',
];

export const privacySections: LegalSection[] = [
  {
    heading: 'Definitions',
    list: [
      'Redicom Commerce Cloud refers to Redicom cloud-based Software provided as a service to Merchants.',
      'Customers refers to Redicom Customers that are Merchants/retailers that use our Software named Redicom Commerce Cloud to power their online shops Businesses.',
      'End-users refers to the Merchants’ own customers, collected and used by the Merchants, who are solely responsible for compliance with the applicable data protection law. In addition, such information may be subject to our Merchants’ own privacy policies.',
      'Consent of the data subject means any freely given, specific, informed and unambiguous indication of the data subject’s wishes by which he or she, by a statement or by a clear affirmative action, signifies agreement to the processing of personal data relating to him or her.',
      'Data controller means the natural or legal person, public authority, agency or other body which, alone or jointly with others, determines the purposes and means of the processing of personal data; where the purposes and means of such processing are determined by Union or Member State law, the controller or the specific criteria for its nomination may be provided for by Union or Member State law.',
      'Data processor means a natural or legal person, public authority, agency or other body which processes personal data on behalf of the controller.',
      'Processing means any operation or set of operations which is performed on personal data or on sets of personal data, whether or not by automated means, such as collection, recording, organisation, structuring, storage, adaptation or alteration, retrieval, consultation, use, disclosure by transmission, dissemination or otherwise making available, alignment or combination, restriction, erasure or destruction.',
      'Data protection laws means, for the purposes of this document, the collective description of the GDPR and any other relevant data protection laws that the Company complies with.',
      'GDPR stands for General Data Protection Regulation (EU) (2016/679).',
      'Personal data means any information, collected by our corporate website, relating to an identified or identifiable natural person, that is one who can be identified, directly or indirectly, in particular by reference to an identifier such as a name, an identification number, location data, an online identifier or to one or more factors specific to the physical, physiological, genetic, mental, economic, cultural or social identity of that natural person.',
      'End-user Information means any information, including personal data, collected by the Merchants’ (our Customers) online shop, powered by Redicom Commerce Cloud.',
    ],
  },
  {
    heading: 'Personal Data and information we collect',
    paragraphs: [
      'When using our corporate services, visiting our website or Social Media Pages, Redicom may collect Customer Information, which may include Personal Data.',
      'What Personal Data do we collect and process for our own purposes as a controller?',
    ],
    list: [
      'Contact information such as name, e-mail address, mailing address, phone number, company name and job title;',
      'Feedback information, such as name and e-mail address when we provide feedback or customer support from within the Service(s).',
    ],
  },
  {
    heading: 'Purposes of Customer Information',
    paragraphs: [
      'We may collect Personal Data in a variety of ways. Such information may be collected through provided Services, e.g., when signing up to a newsletter, when responding to a survey, on form submissions on our corporate website, ticket submission on our support platform or when leaving comments. For the purposes of GDPR, Redicom shall be the controller for this information that has been submitted to us.',
      'We use Customer Information for legitimate business purposes, including the following: (i) provide requested Service(s); (ii) send automated communication from Service(s); (iii) send requested information about Service(s); (iv) respond to customer service requests, inquiries, questions and concerns; (v) administer accounts; (vi) send periodic emails with important notices or information about Services (updates, bug fixing, etc.); (vii) send promotional and marketing communications; (viii) facilitate billing and payment transactions for the use of our Service(s).',
      'For further information concerning the legal basis on which we collect and use Customer Information, please contact us using the contact details provided below.',
    ],
  },
  {
    heading: 'Cookies and other information',
    paragraphs: [
      'Cookies allow us to collect information such as browser type, time spent on the Services, pages visited, language preferences, and other anonymous traffic data. We may use cookies that allow us to personalize our Services, such as remembering a user’s information, provide customized content and information, and track entries and submissions. We may also use cookies to compile aggregate data about site traffic and site interaction so that we can offer better site experiences and tools in the future, for security purposes, to facilitate navigation, to display information more effectively, to monitor and analyse the effectiveness of Services and to personalize experience. Third-party cookies may be used for performance and functionality purposes.',
      'The following types of cookies are used in our corporate website:',
    ],
    list: [
      'Essential website cookies: these cookies are strictly necessary to provide the services available through our website and to use some of its features;',
      'Performance and Functionality Cookies: these cookies enhance performance on our website;',
      'Analytics and Customization Cookies: these cookies collect information that is used either in aggregate form to help us understand how our website is being used or how effective marketing campaigns are, or even to help us customize our website.',
    ],
  },
  {
    heading: 'Analytics',
    paragraphs: [
      'For more information on what is collected through the use of cookies, most browsers allow you to automatically decline cookies or to be given the choice of declining or accepting a particular cookie (or cookies) from a particular website.',
      'We use Google Analytics, which uses cookies and similar technologies to collect and analyse information about website traffic. Google operates independently from us and has its own privacy policy, which we strongly suggest you review. Learn more about Google’s practices at www.google.com/policies/privacy.',
    ],
  },
  {
    heading: 'Processing Customer Information',
    paragraphs: [
      'We handle certain information as a service provider on behalf of our customer, which may include Personal Data relating to end-users. We only process end-user information as provided in the Terms of Service, Privacy Policy and per Customer instructions. For the purposes of the GDPR we are the processor and not the controller of the end-user information.',
      'Redicom does not own, control or direct the use of any of the end-user information stored or processed by Customers. Only Customers or end-users are entitled to access, retrieve and direct the use of such Customer Information. Redicom is largely unaware of what Personal Data is actually being stored or made available by end-users to the Service and does not directly access such information except as necessary to provide Services (including to respond to support requests, provide development works, maintenance, updates, etc.), as otherwise authorized by Customers or as required by law. Redicom is not responsible for the content of the Personal Data collected from end-users or other information stored on its servers (or its subcontractors’ servers) at the discretion of the Customers, nor is Redicom responsible for the manner in which the Customer collects, handles, discloses, distributes or otherwise processes such information.',
      'Customers are the controllers of the end-users’ Personal Data, meaning that they control the manner in which such information is collected and used, as well as the determination of the purposes and means of the processing of such information, and are responsible for compliance with the applicable data protection law. In addition, such information may be subject to their own privacy policies. As the controller, it is the Customer’s responsibility to inform the end-users about the processing and, where required, obtain the necessary consent or authorization for the use of any Personal Data that is collected.',
      'As the processor on behalf of our Customers, we follow our Customers’ instructions with respect to the functionality of our Service(s). In doing so, we implemented reasonable technical and organizational measures against unauthorized processing of such information and against loss, destruction of, or damage to, Customer Information.',
      'Merchants expressly authorize us, as service providers, to process the Personal Data in our systems to (i) provide, improve, enhance, support and operate the Service(s) and its availability; (ii) develop new products and services; (iii) prevent risk and fraud; (iv) process payments.',
      'If an end-user seeks access to, or wishes to correct, update, modify or delete Personal Data which is part of the Customer Information and processed by us as data processor on behalf of our Customer, they should direct their query to our Customer, i.e. the controller.',
    ],
  },
  {
    heading: 'Access, choices and other rights',
    paragraphs: [
      'In the case of EEA resident individuals, they have the following data protection rights regarding Personal Data collected and processed by Redicom as data controller:',
    ],
    list: [
      'To review, access, correct, update, restrict or request deletion of Personal Data that has been previously provided, or to request an electronic copy of Personal Data for the purpose of transmitting it to another company (to the extent this right to data portability is provided by applicable law), at any time by contacting us.',
      'The right to opt out of marketing communications we send, at any time, by clicking on the manage subscription or opt-out link in the marketing e-mails we send, or by contacting us.',
      'If we have collected and processed Personal Data with consent, then consent can be withdrawn at any time. Withdrawing consent will not affect the lawfulness of any processing we conducted prior to withdrawal, nor will it affect processing of Personal Data conducted in reliance on lawful processing grounds other than consent.',
      'The right to complain, which can be exercised by contacting the local data protection authority.',
    ],
  },
  {
    heading: 'Other communications',
    paragraphs: [
      'Our contact details are provided below in this Privacy Policy. We will respond to requests consistent with applicable law. We will try to comply with requests as soon as reasonably practicable.',
      'We will send emails and/or announcements with administrative information related to the Service(s) on occasions when it is necessary to do so to our customers using our Services and Software. For instance, if our Service(s) are temporarily suspended for maintenance, we might send an e-mail. Generally, these communications may not be opted out of because they are not promotional in nature.',
    ],
  },
  {
    heading: 'Personal Data retention and deletion',
    paragraphs: [
      'We will retain Personal Data for as long as needed or permitted in light of the purpose(s) for which it was obtained. The criteria used to determine our retention periods include: (i) the length of time we have an ongoing relationship and provide the Services to our Customer; (ii) when we have a legal obligation to which we are subject; or (iii) as advisable in light of our legal position (such as in regard to applicable statutes of limitations, litigation or regulatory investigations).',
    ],
  },
  {
    heading: 'Personal Data protection',
    paragraphs: [
      'We maintain the confidentiality of any personal data and protect it against unauthorised access. As a consequence, we take great care and use the very latest security standards in order to ensure maximum protection for personal data.',
    ],
  },
  {
    heading: 'Personal Data breach',
    paragraphs: [
      'In line with the GDPR we have a duty to report a data breach to the regulator as soon as we are aware of it. The regulator in Portugal, where the head office of Redicom is based, is the Portuguese data protection authority (CNPD), at www.cnpd.pt.',
    ],
  },
  {
    heading: 'Personal Data disclosure',
    paragraphs: ['Personal Data is stored and processed only in facilities located in Portugal.'],
  },
  {
    heading: 'Changes to our Privacy Policy',
    paragraphs: [
      'We may change this Privacy Policy at any time. The date at the top of this Privacy Policy indicates when it was last revised. Any changes will become effective when we post the revised Privacy Policy on the Services.',
    ],
  },
  {
    heading: 'Contact us',
    paragraphs: [
      'Redicom welcomes questions or comments regarding our Privacy Policy. Please submit any questions or concerns about our privacy policy to info@redicom.pt.',
    ],
  },
];
