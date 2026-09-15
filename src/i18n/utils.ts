import { ui, type UIKey } from './ui';
import { DEFAULT_LANG, LANGUAGES, type Lang } from './routes';

/** Le o idioma a partir do primeiro segmento do URL (/pt/... ou /en/...). */
export function getLangFromUrl(url: URL): Lang {
  const [, segment] = url.pathname.split('/');
  return (LANGUAGES as readonly string[]).includes(segment)
    ? (segment as Lang)
    : DEFAULT_LANG;
}

/**
 * Devolve a funcao de traducao para um idioma.
 * Aceita substituicoes simples: t('form.consent', { privacy: '/pt/…/' })
 */
export function useTranslations(lang: Lang) {
  return function t(key: UIKey, vars?: Record<string, string>): string {
    const dict = ui[lang] as Record<string, string>;
    let value = dict[key] ?? (ui[DEFAULT_LANG] as Record<string, string>)[key] ?? key;
    if (vars) {
      for (const [name, replacement] of Object.entries(vars)) {
        value = value.replaceAll(`{${name}}`, replacement);
      }
    }
    return value;
  };
}

/** Formata uma data no formato longo do idioma. */
export function formatDate(date: Date, lang: Lang): string {
  return new Intl.DateTimeFormat(lang === 'pt' ? 'pt-PT' : 'en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(date);
}

/** Formata numeros grandes de forma legivel (contadores de prova social). */
export function formatNumber(value: number, lang: Lang): string {
  return new Intl.NumberFormat(lang === 'pt' ? 'pt-PT' : 'en-GB').format(value);
}
