/**
 * Base URL for a locale (no trailing slash for path building).
 * Default locale (es) is at root; others are prefixed (e.g. /fr).
 */
export function localeBase(lang: string): string {
  return lang === 'es' ? '' : `/${lang}`;
}

/** Base URL with trailing slash for links (e.g. / or /fr/). */
export function localeBaseWithSlash(lang: string): string {
  return lang === 'es' ? '/' : `/${lang}/`;
}

/** Build path for a locale (e.g. about -> /about/ or /fr/about/). */
export function localePath(lang: string, segment: string): string {
  const base = localeBase(lang);
  const path = segment.startsWith('/') ? segment : `/${segment}`;
  return `${base}${path}${path.endsWith('/') ? '' : '/'}`;
}

/**
 * Given current pathname and current lang, return the path for the other locale.
 */
export function otherLocalePath(currentPath: string, lang: string): string {
  const otherLang = lang === 'es' ? 'fr' : 'es';
  if (lang === 'es') {
    return `/${otherLang}${currentPath.startsWith('/') ? currentPath : '/' + currentPath}`;
  }
  return currentPath.replace(/^\/fr\/?/, '/') || '/';
}
