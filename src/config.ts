export const siteConfig = {
  title: 'Qori',
  description: 'Qori est une société proposant des services à vos besoins',
  baseURL: 'https://qori.fr/',
  author: 'Ana Medina',
  copyright:
    'Qori - Copyright © 2020-2026 [Licence Creative Commons by-nc-sa](http://creativecommons.org/licenses/by-nc-sa/4.0/)',
  email: 'contact@qori.fr',
  googleAnalyticsId: 'UA-59880117-2',
  home: 'Qori',
  logo: '/images/logo-w-sm.gif',
  phone: '+33 (0) 6 52 29 78 89',
  primaryColor: '#ffbc3b',
  navColor: '#ffbc3b',
  navLight: false,
  topHeader: true,
  contact: {
    enable: true,
    formAction: 'https://calendly.com/qori',
  },
  preloader: {
    enable: true,
    preloader: '/images/logo-sm.gif',
  },
  social: [
    { title: 'facebook', link: 'https://www.facebook.com/qori.france', icon: 'ti-facebook' },
    { title: 'messenger', link: 'http://m.me/qori.france', icon: 'ti-comments' },
  ],
  plugins: {
    css: [
      { link: 'https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css' },
      { link: '/plugins/animate/animate.css' },
      { link: '/plugins/venobox/venobox.css' },
      { link: '/plugins/themify-icons/themify-icons.css' },
    ],
    js: [
      { link: 'https://code.jquery.com/jquery-3.6.0.min.js' },
      { link: 'https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js' },
      { link: '/plugins/venobox/venobox.min.js' },
      { link: '/plugins/filterizr/jquery.filterizr.min.js' },
      { link: '/plugins/google-map/gmap.js' },
    ],
  },
} as const;

export type SiteConfig = typeof siteConfig;
