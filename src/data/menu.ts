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
  { parent: 'traduccion', URL: 'pages/traduccion/juridica', name: 'Jurídica', weight: 1 },
  { parent: 'traduccion', URL: 'pages/traduccion/digital', name: 'Digital y multimedia', weight: 2 },
  { parent: 'traduccion', URL: 'pages/traduccion/publicitaria', name: 'Publicitaria y comercial', weight: 3 },
  { parent: 'traduccion', URL: 'pages/traduccion/audiovisual', name: 'Audiovisual', weight: 4 },
  { parent: 'traduccion', URL: 'pages/traduccion/cientifica', name: 'Científica y técnica', weight: 5 },
  { parent: 'traduccion', URL: 'pages/traduccion/literaria', name: 'Literaria', weight: 6 },
  { identifier: 'interpretacion', URL: 'pages/interpretacion', name: 'Interpretación', weight: 5 },
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
  { parent: 'traduccion', URL: 'pages/traduccion/juridica', name: 'Juridique', weight: 1 },
  { parent: 'traduccion', URL: 'pages/traduccion/digital', name: 'Digital et multimédia', weight: 2 },
  { parent: 'traduccion', URL: 'pages/traduccion/publicitaria', name: 'Publicitaire et commercial', weight: 3 },
  { parent: 'traduccion', URL: 'pages/traduccion/audiovisual', name: 'Audiovisuel', weight: 4 },
  { parent: 'traduccion', URL: 'pages/traduccion/cientifica', name: 'Scientifique et technique', weight: 5 },
  { parent: 'traduccion', URL: 'pages/traduccion/literaria', name: 'Littéraire', weight: 6 },
  { identifier: 'interpretacion', URL: 'pages/interpretacion', name: 'Interprétation', weight: 5 },
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
