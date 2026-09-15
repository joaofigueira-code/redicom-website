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

/** Valida os campos obrigatorios. Devolve null quando esta tudo bem. */
export function validateLead(name: string, email: string): ValidationCode | null {
  if (name.trim().length < 2) return 'name';

  const value = email.trim().toLowerCase();
  if (!EMAIL_PATTERN.test(value)) return 'email';

  const domain = value.split('@')[1] ?? '';
  if (PERSONAL_EMAIL_DOMAINS.has(domain)) return 'emailPersonal';

  return null;
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
