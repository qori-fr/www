export interface MenuItem {
  URL: string;
  name: string;
  weight: number;
  identifier?: string;
  parent?: string;
  children?: MenuItem[];
}

function buildMenu(items: Omit<MenuItem, 'children'>[]): MenuItem[] {
  const byId = new Map<string, MenuItem>();
  const roots: MenuItem[] = [];
  for (const item of items) {
    const node: MenuItem = { ...item, children: item.identifier ? [] : undefined };
    if (item.identifier) byId.set(item.identifier, node);
  }
  for (const item of items) {
    const node = byId.get(item.identifier!) ?? { ...item, children: undefined };
    if (!item.identifier) {
      (node as MenuItem).children = undefined;
      roots.push(node as MenuItem);
      continue;
    }
    if (item.parent) {
      const parent = byId.get(item.parent);
      if (parent && parent.children) parent.children!.push(node as MenuItem);
      else roots.push(node as MenuItem);
    } else {
      roots.push(node as MenuItem);
    }
  }
  roots.sort((a, b) => a.weight - b.weight);
  roots.forEach((r) => r.children?.sort((a, b) => a.weight - b.weight));
  return roots;
}

const esItems: Omit<MenuItem, 'children'>[] = [
  { URL: 'about', name: 'Nosotros', weight: 1 },
  { identifier: 'estudia', URL: 'pages/estudia', name: 'Estudia en Francia', weight: 2 },
  { parent: 'estudia', URL: 'pages/estudia/estudios_superiores', name: 'Estudios Superiores', weight: 1 },
  { parent: 'estudia', URL: 'pages/estudia/frances', name: 'Lengua Francesa', weight: 2 },
  { identifier: 'traduccion', URL: 'pages/traduccion', name: 'Traducción', weight: 4 },
  { parent: 'traduccion', URL: 'pages/traduccion/comercial', name: 'Comercial', weight: 1 },
  { parent: 'traduccion', URL: 'pages/traduccion/informatica', name: 'Informática', weight: 2 },
  { parent: 'traduccion', URL: 'pages/traduccion/literaria', name: 'Literaria', weight: 3 },
  { parent: 'traduccion', URL: 'pages/traduccion/relectura', name: 'Relectura', weight: 4 },
  { parent: 'traduccion', URL: 'pages/traduccion/simple', name: 'Simple', weight: 5 },
  { identifier: 'interpretacion', URL: 'pages/interpretacion', name: 'Interpretación', weight: 5 },
  { parent: 'interpretacion', URL: 'pages/interpretacion/simultanea', name: 'Simultánea', weight: 1 },
  { parent: 'interpretacion', URL: 'pages/interpretacion/consecutiva', name: 'Consecutiva', weight: 2 },
  { identifier: 'asesorias', URL: 'pages/asesorias', name: 'Asesorías', weight: 6 },
  { parent: 'asesorias', URL: 'pages/asesorias/empleo', name: 'Búsqueda de empleo en Francia', weight: 1 },
  { URL: 'blog', name: 'Blog', weight: 7 },
  { URL: 'contact', name: 'Contact', weight: 8 },
];

const frItems: Omit<MenuItem, 'children'>[] = [
  { URL: 'about', name: 'A propos', weight: 1 },
  { identifier: 'estudia', URL: 'pages/estudia', name: 'Etudes en France', weight: 2 },
  { parent: 'estudia', URL: 'pages/estudia/estudios_superiores', name: 'Etudes supérieures', weight: 1 },
  { parent: 'estudia', URL: 'pages/estudia/frances', name: 'Langue Française', weight: 2 },
  { identifier: 'traduccion', URL: 'pages/traduccion', name: 'Traduction', weight: 4 },
  { parent: 'traduccion', URL: 'pages/traduccion/comercial', name: 'Commercial', weight: 1 },
  { parent: 'traduccion', URL: 'pages/traduccion/informatica', name: 'Informatique', weight: 2 },
  { parent: 'traduccion', URL: 'pages/traduccion/literaria', name: 'Litéraire', weight: 3 },
  { parent: 'traduccion', URL: 'pages/traduccion/relectura', name: 'Relecture', weight: 4 },
  { parent: 'traduccion', URL: 'pages/traduccion/simple', name: 'Simple', weight: 5 },
  { identifier: 'interpretacion', URL: 'pages/interpretacion', name: 'Interprétation', weight: 5 },
  { parent: 'interpretacion', URL: 'pages/interpretacion/simultanea', name: 'Simultanée', weight: 1 },
  { parent: 'interpretacion', URL: 'pages/interpretacion/consecutiva', name: 'Consécutive', weight: 2 },
  { identifier: 'asesorias', URL: 'pages/asesorias', name: 'Conseils', weight: 6 },
  { parent: 'asesorias', URL: 'pages/asesorias/empleo', name: 'Recherche emploi en France', weight: 1 },
  { URL: 'blog', name: 'Blog', weight: 7 },
  { URL: 'contact', name: 'Contact', weight: 8 },
];

export const menuEs = buildMenu(esItems);
export const menuFr = buildMenu(frItems);

export function getMenu(lang: string): MenuItem[] {
  return lang === 'fr' ? menuFr : menuEs;
}
