export const siteConfig = {
  title: 'Qori',
  description: 'Qori est une société proposant des services à vos besoins',
  baseURL: 'https://qori.fr/',
  author: 'Ana Medina',
  copyright:
    'Qori - Copyright © 2020 [Licence Creative Commons by-nc-sa](http://creativecommons.org/licenses/by-nc-sa/4.0/)',
  email: 'contact@qori.fr',
  googleAnalyticsId: 'UA-59880117-2',
  home: 'Qori',
  logo: '/images/logo-w-sm.gif',
  phone: '+33 (0) 7 80 97 35 25',
  primaryColor: '#cf1931',
  navColor: '#102f5e',
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
      { link: '/plugins/bootstrap/bootstrap.min.css' },
      { link: '/plugins/slick/slick.css' },
      { link: '/plugins/animate/animate.css' },
      { link: '/plugins/venobox/venobox.css' },
      { link: '/plugins/themify-icons/themify-icons.css' },
    ],
    js: [
      { link: '/plugins/jQuery/jquery.min.js' },
      { link: '/plugins/bootstrap/bootstrap.min.js' },
      { link: '/plugins/slick/slick.min.js' },
      { link: '/plugins/venobox/venobox.min.js' },
      { link: '/plugins/filterizr/jquery.filterizr.min.js' },
      { link: '/plugins/google-map/gmap.js' },
    ],
  },
} as const;

export type SiteConfig = typeof siteConfig;
