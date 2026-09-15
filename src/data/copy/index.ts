import type { SolutionSet } from './types';
import { platformCopy } from './platform';
import { platformOperationsCopy } from './platform-operations';
import { fashionCopy } from './fashion';
import type { Lang, RouteId } from '@i18n/routes';

/** Registo unico de todas as paginas de solucao. */
export const solutions: SolutionSet = {
  ...platformCopy,
  ...platformOperationsCopy,
  ...fashionCopy,
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
    agentic: 'Agentic Commerce',
    why: 'Porquê Redicom',
    about: 'Sobre Nós',
    contact: 'Contactos',
    docs: 'Documentação',
  },
  en: {
    platform: 'Redicom Commerce Cloud',
    fashion: 'Fashion Retail',
    agentic: 'Agentic Commerce',
    why: 'Why Redicom',
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
