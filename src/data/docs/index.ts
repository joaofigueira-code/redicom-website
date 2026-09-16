import manual from './manual.json';
import type { Lang } from '@i18n/routes';

/**
 * Manual de Instrucoes do backoffice.
 *
 * O conteudo vem das oito paginas de "Manual de Instrucoes" do site em
 * producao, onde vivia dentro de acordeoes. Cada acordeao passou a artigo
 * proprio, com URL proprio — 71 artigos, 163 mil caracteres.
 *
 * Guardamos o texto em JSON, ja partido em blocos, em vez de HTML solto: o
 * conteudo original tem listas e subtitulos que queremos manter, mas nao
 * queremos injetar marcacao de terceiros nas paginas.
 *
 * So existe em portugues. A versao inglesa do site em producao tem as
 * paginas do manual praticamente vazias, por isso nao ha nada para migrar —
 * a pagina em ingles remete para a portuguesa em vez de fingir que existe.
 */

export type DocBlock =
  | { t: 'p'; text: string }
  | { t: 'h3'; text: string }
  | { t: 'ul'; items: string[] };

export type DocArticle = {
  slug: string;
  title: string;
  /** Titulo do bloco a que pertencia na pagina original. */
  group: string;
  /** Capitulo do manual: Produtos, Marketing, Encomendas, … */
  chapter: string;
  blocks: DocBlock[];
};

export const docArticles = manual as DocArticle[];

/** Ordem dos capitulos, tal como no manual original. */
export const docChapters = [
  'Configurações de Mercado',
  'Produtos',
  'Conteúdos',
  'Marketing',
  'Clientes',
  'Módulos',
  'Serviços',
  'Encomendas',
] as const;

export type DocChapter = (typeof docChapters)[number];

/** Artigos de um capitulo, pela ordem em que aparecem no manual. */
export function articlesByChapter(chapter: string): DocArticle[] {
  return docArticles.filter((article) => article.chapter === chapter);
}

export function findArticle(slug: string): DocArticle | undefined {
  return docArticles.find((article) => article.slug === slug);
}

/**
 * Primeiro paragrafo do artigo, cortado. Serve de descricao em listagens e
 * na meta description, sem obrigar a escrever resumos a mao para 71 artigos.
 */
export function docSummary(article: DocArticle, max = 165): string {
  const first = article.blocks.find((block) => block.t === 'p');
  const text = first && first.t === 'p' ? first.text : article.title;
  if (text.length <= max) return text;
  return `${text.slice(0, text.lastIndexOf(' ', max))}…`;
}

/** Texto corrido do artigo, para alimentar a pesquisa do lado do cliente. */
export function docSearchText(article: DocArticle): string {
  return article.blocks
    .map((block) => (block.t === 'ul' ? block.items.join(' ') : block.text))
    .join(' ');
}

export const docsUi: Record<
  Lang,
  {
    title: string;
    description: string;
    breadcrumb: string;
    lead: string;
    searchLabel: string;
    searchPlaceholder: string;
    noResults: string;
    resultsOne: string;
    resultsMany: string;
    chapterLabel: string;
    onThisPage: string;
    backToIndex: string;
    previous: string;
    next: string;
    /** Aviso mostrado na versao inglesa. */
    languageNotice: string | null;
    helpTitle: string;
    helpBody: string;
    helpCta: string;
  }
> = {
  pt: {
    title: 'Documentação: Manual de Instruções da Redicom Commerce Cloud',
    description:
      'Manual de instruções do backoffice da Redicom Commerce Cloud: mercados, produtos, conteúdos, marketing, clientes, módulos, serviços e encomendas.',
    breadcrumb: 'Documentação',
    lead: 'O manual de instruções do backoffice da Redicom Commerce Cloud, organizado por capítulo. Pesquise pelo que precisa ou percorra o capítulo todo.',
    searchLabel: 'Pesquisar na documentação',
    searchPlaceholder: 'Escreva uma palavra: stock, devoluções, cupões…',
    noResults: 'Nenhum artigo corresponde a esta pesquisa.',
    resultsOne: '1 artigo encontrado',
    resultsMany: '{n} artigos encontrados',
    chapterLabel: 'Capítulo',
    onThisPage: 'Nesta página',
    backToIndex: 'Voltar à documentação',
    previous: 'Anterior',
    next: 'Seguinte',
    languageNotice: null,
    helpTitle: 'Não encontrou o que procurava?',
    helpBody: 'Se é cliente, o apoio ao cliente responde diretamente. Se ainda não é, deixe o contacto e falamos consigo.',
    helpCta: 'Falar connosco',
  },
  en: {
    title: 'Documentation: Redicom Commerce Cloud instruction manual',
    description:
      'The Redicom Commerce Cloud back-office instruction manual: markets, products, content, marketing, customers, modules, services and orders.',
    breadcrumb: 'Documentation',
    lead: 'The Redicom Commerce Cloud back-office instruction manual, organised by chapter. Search for what you need or read a chapter end to end.',
    searchLabel: 'Search the documentation',
    searchPlaceholder: 'Type a word: stock, returns, coupons…',
    noResults: 'No article matches this search.',
    resultsOne: '1 article found',
    resultsMany: '{n} articles found',
    chapterLabel: 'Chapter',
    onThisPage: 'On this page',
    backToIndex: 'Back to documentation',
    previous: 'Previous',
    next: 'Next',
    languageNotice:
      'The instruction manual is written in Portuguese. An English edition has not been produced yet: the articles below are the Portuguese ones.',
    helpTitle: 'Did not find what you were looking for?',
    helpBody: 'If you are a client, customer support answers directly. If you are not yet, leave your details and we will get in touch.',
    helpCta: 'Talk to us',
  },
};
