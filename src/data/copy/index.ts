import type { SolutionSet } from './types';
import { platformCopy } from './platform';
import { platformOperationsCopy } from './platform-operations';
import { platformCommerceCopy } from './platform-commerce';
import { platformMarketingCopy } from './platform-marketing';
import { platformSupportCopy } from './platform-support';
import { fashionCopy } from './fashion';
import { standalonePagesCopy } from './pages';
import type { Lang, RouteId } from '@i18n/routes';

/**
 * Registo unico de todas as paginas que usam o modelo de solucao.
 *
 * Inclui as de dois segmentos (plataforma/… e fashion-retail/…) e as de um
 * segmento que seguem a mesma estrutura de leitura (porque-redicom e
 * agentic-commerce). Quem gera os URLs filtra pelo numero de segmentos do
 * slug, por isso as duas familias podem viver no mesmo sitio.
 */
export const solutions: SolutionSet = {
  ...platformCopy,
  ...platformOperationsCopy,
  ...platformCommerceCopy,
  ...platformMarketingCopy,
  ...platformSupportCopy,
  ...fashionCopy,
  ...standalonePagesCopy,
};

export const solutionIds = Object.keys(solutions) as RouteId[];

/**
 * Nomes das paginas que nao usam o modelo de solucao mas podem ser referidas
 * nos blocos de "continuar a explorar".
 */
const extraLabels: Record<Lang, Partial<Record<RouteId, string>>> = {
  pt: {
    platform: 'Redicom Commerce Cloud',
    fashion: 'Fashion Retail',
    cases: 'Casos de Sucesso',
    about: 'Sobre Nós',
    contact: 'Contactos',
    docs: 'Documentação',
  },
  en: {
    platform: 'Redicom Commerce Cloud',
    fashion: 'Fashion Retail',
    cases: 'Success Stories',
    about: 'About Us',
    contact: 'Contact',
    docs: 'Documentation',
  },
};

/**
 * Etiqueta curta de cada pagina, por idioma. Serve os cartoes de "continuar a
 * explorar" sem obrigar cada pagina a repetir os nomes das vizinhas.
 */
export function solutionLabels(lang: Lang): Partial<Record<RouteId, string>> {
  const labels: Partial<Record<RouteId, string>> = { ...extraLabels[lang] };
  for (const id of solutionIds) {
    labels[id] = solutions[id]![lang].breadcrumb;
  }
  return labels;
}
