import { otherLocalePath } from './utils/locale';

export const ORIGIN = 'https://qori.fr';

export const seoDefaults = {
  es: {
    title: 'Traductora jurada francés-español',
    description:
      'Traducción e interpretación jurada francés–español en Francia. Ana Medina — Qori. Documentos oficiales y audiencias.',
  },
  fr: {
    title: 'Traductrice assermentée français-espagnol',
    description:
      'Traduction et interprétation assermentées français–espagnol en France. Ana Medina — Qori. Actes officiels et audiences.',
  },
} as const;

export const defaultOgImage = '/images/banner/banner-1.jpg';

export function absoluteUrl(path: string): string {
  const p = path.startsWith('/') ? path : `/${path}`;
  const withSlash = p.endsWith('/') ? p : `${p}/`;
  return new URL(withSlash, ORIGIN).href;
}

export const pageSeo = {
  about: {
    es: {
      description:
        'Ana Medina, traductora e intérprete jurada francés–español. Qori — Cour d’appel d’Angers, documentos oficiales y audiencias.',
    },
    fr: {
      description:
        'Ana Medina, traductrice et interprète jurée français–espagnol. Qori — Cour d’appel d’Angers, actes officiels et audiences.',
    },
  },
  contact: {
    es: {
      description:
        'Contacta con Qori — traducción e interpretación jurada francés–español. Email, teléfono, Dourdan (91).',
    },
    fr: {
      description:
        'Contactez Qori — traduction et interprétation assermentées français–espagnol. Email, téléphone, Dourdan (91).',
    },
  },
  blog: {
    es: {
      description:
        'Artículos sobre traducción e interpretación jurada francés–español. Qori — Ana Medina.',
    },
    fr: {
      description:
        'Articles sur la traduction et l’interprétation assermentées français–espagnol. Qori — Ana Medina.',
    },
  },
} as const;

export function hreflangUrls(pathname: string, lang: string): {
  canonical: string;
  other: string;
  otherLang: string;
  xDefault: string;
} {
  const canonical = absoluteUrl(pathname);
  const otherLang = lang === 'fr' ? 'es' : 'fr';
  let otherPath = otherLocalePath(pathname, lang);
  if (!otherPath.startsWith('/')) otherPath = `/${otherPath}`;
  if (!otherPath.endsWith('/')) otherPath += '/';
  const other = absoluteUrl(otherPath);
  const xDefault = lang === 'fr' ? canonical : other;
  return { canonical, other, otherLang, xDefault };
}

export function professionalServiceJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Qori',
    url: ORIGIN,
    email: 'contact@qori.fr',
    telephone: '+33-6-52-29-78-89',
    founder: { '@type': 'Person', name: 'Ana Medina' },
    areaServed: { '@type': 'Country', name: 'France' },
    availableLanguage: ['fr', 'es'],
    knowsAbout: [
      'traduction assermentée',
      'traducción jurada',
      'interprétation',
      'français-espagnol',
    ],
    image: absoluteUrl(defaultOgImage),
  };
}
