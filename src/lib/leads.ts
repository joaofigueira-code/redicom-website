/**
 * Camada de envio de leads.
 *
 * Isolada de proposito: a Redicom vai encaminhar as submissoes para o backend
 * que ja serve o formulario de contactos atual, mas o endpoint e o contrato de
 * campos ainda tem de vir da equipa tecnica. Ate la, so este ficheiro precisa
 * de mudar — nenhum componente de pagina sabe para onde o pedido vai.
 *
 * Configuracao (variaveis de ambiente do projeto de deploy):
 *   PUBLIC_LEAD_ENDPOINT  URL que recebe o POST
 *   PUBLIC_LEAD_FORMAT    'json' (predefinicao) ou 'form' para
 *                         application/x-www-form-urlencoded
 */

export type LeadPayload = {
  /** Nome proprio de quem contacta. Obrigatorio. */
  name: string;
  /** Email corporativo. Obrigatorio. */
  email: string;
  /** Mensagem livre. Opcional — nunca bloqueia o envio. */
  message?: string;
  /** Assunto/interesse, definido pela pagina onde o formulario vive. */
  topic?: string;
  /** Contexto recolhido automaticamente, para qualificar a lead. */
  context: LeadContext;
};

export type LeadContext = {
  pageUrl: string;
  pageTitle: string;
  language: string;
  referrer: string;
  utm: Record<string, string>;
};

/**
 * Dominios de email pessoais. Nao sao rejeitados por serem "invalidos" — sao
 * rejeitados porque uma lead B2B sem dominio da empresa nao e qualificavel, e
 * porque pedir o email corporativo a entrada poupa um passo ao comercial.
 */
const PERSONAL_EMAIL_DOMAINS = new Set([
  'gmail.com',
  'googlemail.com',
  'hotmail.com',
  'hotmail.co.uk',
  'outlook.com',
  'outlook.pt',
  'live.com',
  'live.com.pt',
  'msn.com',
  'yahoo.com',
  'yahoo.co.uk',
  'yahoo.es',
  'icloud.com',
  'me.com',
  'aol.com',
  'proton.me',
  'protonmail.com',
  'sapo.pt',
  'mail.pt',
  'clix.pt',
  'iol.pt',
  'netcabo.pt',
  'gmx.com',
  'zoho.com',
  'yandex.com',
]);

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export type ValidationCode = 'name' | 'email' | 'emailPersonal';

/**
 * Validacao simples, so da forma do endereco. A newsletter usa esta e nao a
 * validateLead: quem subscreve uma newsletter pode muito bem usar o email
 * pessoal, e recusa-lo era perder o subscritor por uma regra que so faz
 * sentido numa lead comercial.
 */
export function isEmail(email: string): boolean {
  return EMAIL_PATTERN.test(email.trim());
}

/**
 * Marca de "ja subscreveu", guardada no browser de quem subscreveu.
 *
 * Nao existe forma de identificar a maquina a partir de uma pagina web: o
 * endereco MAC nunca esteve acessivel ao browser, e nao ha equivalente. O
 * que se pode fazer e o que se faz aqui — uma marca no localStorage, que
 * desaparece se a pessoa limpar os dados do site ou mudar de browser.
 */
export const NEWSLETTER_KEY = 'redicom:newsletter';

/** Ja subscreveu (ou ja dispensou) neste browser? */
export function hasNewsletterMark(): boolean {
  try {
    return localStorage.getItem(NEWSLETTER_KEY) !== null;
  } catch {
    return false;
  }
}

export function setNewsletterMark(): void {
  try {
    localStorage.setItem(NEWSLETTER_KEY, String(Date.now()));
  } catch {
    /* bloqueado: a janela volta a aparecer, nao ha mal maior */
  }
}

/** Valida os campos obrigatorios. Devolve null quando esta tudo bem. */
export function validateLead(name: string, email: string): ValidationCode | null {
  if (name.trim().length < 2) return 'name';

  const value = email.trim().toLowerCase();
  if (!EMAIL_PATTERN.test(value)) return 'email';

  const domain = value.split('@')[1] ?? '';
  if (PERSONAL_EMAIL_DOMAINS.has(domain)) return 'emailPersonal';

  return null;
}

/**
 * Consentimento para armazenamento nao essencial.
 *
 * A Lei 41/2004, artigo 5.o, so admite guardar informacao no equipamento do
 * utilizador sem consentimento quando isso e estritamente necessario para
 * prestar o servico pedido. O unico caso nao essencial deste site sao os
 * parametros de campanha (utm_*), guardados para atribuicao de marketing:
 * ficam bloqueados ate haver um "sim" explicito.
 *
 * A marca da newsletter nao entra aqui: guarda a resposta que a propria
 * pessoa deu a janela, e sem ela a janela voltava a aparecer sempre.
 */
export const CONSENT_KEY = 'redicom:consent';

export type ConsentValue = 'granted' | 'denied';

export function readConsent(): ConsentValue | null {
  try {
    const value = localStorage.getItem(CONSENT_KEY);
    return value === 'granted' || value === 'denied' ? value : null;
  } catch {
    return null;
  }
}

export function setConsent(value: ConsentValue): void {
  try {
    localStorage.setItem(CONSENT_KEY, value);
  } catch {
    /* bloqueado: a barra volta a aparecer, e nada nao essencial e guardado */
  }

  if (value === 'denied') {
    try {
      sessionStorage.removeItem(UTM_STORAGE_KEY);
    } catch {
      /* nada a fazer */
    }
  }
}

/** Parametros de campanha, guardados na primeira visita da sessao. */
const UTM_KEYS = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_content',
  'utm_term',
  'gclid',
  'li_fat_id',
] as const;

const UTM_STORAGE_KEY = 'redicom:utm';

export function captureUtm(): Record<string, string> {
  if (typeof window === 'undefined') return {};
  if (readConsent() !== 'granted') return {};

  const stored = readStoredUtm();
  const params = new URLSearchParams(window.location.search);
  const incoming: Record<string, string> = {};

  for (const key of UTM_KEYS) {
    const value = params.get(key);
    if (value) incoming[key] = value;
  }

  // A primeira atribuicao ganha: se a sessao ja tinha campanha, nao a perdemos
  // por causa de uma navegacao interna sem parametros.
  const merged = Object.keys(stored).length > 0 ? stored : incoming;

  if (Object.keys(incoming).length > 0 && Object.keys(stored).length === 0) {
    try {
      sessionStorage.setItem(UTM_STORAGE_KEY, JSON.stringify(incoming));
    } catch {
      /* sessionStorage pode estar bloqueado — seguimos sem persistir */
    }
  }

  return merged;
}

function readStoredUtm(): Record<string, string> {
  try {
    const raw = sessionStorage.getItem(UTM_STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Record<string, string>) : {};
  } catch {
    return {};
  }
}

export function collectContext(language: string): LeadContext {
  return {
    pageUrl: window.location.href,
    pageTitle: document.title,
    language,
    referrer: document.referrer || '',
    utm: captureUtm(),
  };
}

/**
 * Envia a lead. Lanca em caso de falha, para que o componente mostre o erro
 * e ofereca o email direto como alternativa.
 */
export async function submitLead(payload: LeadPayload): Promise<void> {
  const endpoint = import.meta.env.PUBLIC_LEAD_ENDPOINT;

  if (!endpoint) {
    // Em desenvolvimento, sem endpoint configurado, registamos o payload para
    // que se possa validar a forma dos dados antes da integracao real.
    if (import.meta.env.DEV) {
      console.info('[leads] PUBLIC_LEAD_ENDPOINT nao definido. Payload:', payload);
      return;
    }
    throw new Error('Lead endpoint is not configured');
  }

  const format = import.meta.env.PUBLIC_LEAD_FORMAT ?? 'json';

  const flat: Record<string, string> = {
    name: payload.name.trim(),
    email: payload.email.trim(),
    message: payload.message?.trim() ?? '',
    topic: payload.topic ?? '',
    page_url: payload.context.pageUrl,
    page_title: payload.context.pageTitle,
    language: payload.context.language,
    referrer: payload.context.referrer,
    ...payload.context.utm,
  };

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type':
        format === 'form'
          ? 'application/x-www-form-urlencoded;charset=UTF-8'
          : 'application/json',
      Accept: 'application/json',
    },
    body:
      format === 'form'
        ? new URLSearchParams(flat).toString()
        : JSON.stringify(flat),
  });

  if (!response.ok) {
    throw new Error(`Lead submission failed with status ${response.status}`);
  }
}
