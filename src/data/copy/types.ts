import type { Lang, RouteId } from '@i18n/routes';

/**
 * Forma comum das paginas de solucao (plataforma e Fashion Retail).
 *
 * A estrutura segue o percurso definido no plano de marketing: problema do
 * cliente -> conhecimento do setor -> solucao Redicom -> beneficio para o
 * negocio. Cada pagina preenche as mesmas caixas, o que mantem a leitura
 * previsivel e evita que umas fiquem muito mais fracas do que outras.
 */

export type Feature = {
  title: string;
  body: string;
};

export type DeepSection = {
  /** Etiqueta curta acima do titulo. */
  eyebrow?: string;
  title: string;
  body: string;
  bullets?: string[];
  /** Ligacao opcional para outra pagina do site. */
  link?: { route: RouteId; label: string };
};

export type SolutionCopy = {
  meta: { title: string; description: string };
  breadcrumb: string;
  hero: {
    eyebrow: string;
    title: string;
    lead: string;
    primary: string;
  };
  /** Quatro promessas concretas, logo abaixo do hero. */
  features: Feature[];
  /** Blocos longos, alternados, com o detalhe da solucao. */
  sections: DeepSection[];
  /**
   * Formulario a meio da pagina. So o definimos em paginas longas — em
   * paginas curtas o bloco final e suficiente e um segundo formulario passa
   * a ruido.
   */
  midForm?: { heading: string; body: string; submit: string };
  closing: {
    title: string;
    body: string;
    points: string[];
    submit: string;
  };
  /** Paginas relacionadas, no fundo. */
  related?: RouteId[];
};

export type SolutionSet = Partial<Record<RouteId, Record<Lang, SolutionCopy>>>;
