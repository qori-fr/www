export interface MenuItem {
  URL: string;
  name: string;
  weight: number;
  identifier?: string;
  parent?: string;
  children?: MenuItem[];
}

/** Flat menu: only main pages, no sub-menus */
function buildMenu(items: Omit<MenuItem, 'children'>[]): MenuItem[] {
  return items
    .sort((a, b) => a.weight - b.weight)
    .map((item) => ({ ...item, children: undefined }));
}

const esItems: Omit<MenuItem, 'children'>[] = [
  { URL: 'about', name: 'Nosotros', weight: 1 },
  { URL: 'pages/traduccion', name: 'Traducción', weight: 3 },
  { URL: 'pages/interpretacion', name: 'Interpretación', weight: 4 },
  { URL: 'blog', name: 'Blog', weight: 6 },
  { URL: 'contact', name: 'Contact', weight: 7 },
];

const frItems: Omit<MenuItem, 'children'>[] = [
  { URL: 'about', name: 'À propos', weight: 1 },
  { URL: 'pages/traduccion', name: 'Traduction', weight: 3 },
  { URL: 'pages/interpretacion', name: 'Interprétation', weight: 4 },
  { URL: 'blog', name: 'Blog', weight: 6 },
  { URL: 'contact', name: 'Contact', weight: 7 },
];

export const menuEs = buildMenu(esItems);
export const menuFr = buildMenu(frItems);

export function getMenu(lang: string): MenuItem[] {
  return lang === 'fr' ? menuFr : menuEs;
}
