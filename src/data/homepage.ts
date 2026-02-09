export interface SliderItem {
  title: string;
  subtitle?: string;
  content: string;
  animation_in: string;
  animation_out: string;
  button: { enable: boolean; label: string; link: string };
  bg_image?: string;
}

export interface FeatureItem {
  name: string;
  icon: string;
  content: string;
}

export interface HomepageData {
  slider: {
    enable: boolean;
    bg_image: string;
    slider_item: SliderItem[];
  };
  banner_feature: {
    enable: boolean;
    image: string;
    feature_item: FeatureItem[];
  };
  about: {
    enable: boolean;
    title: string;
    image: string;
    content: string;
    button: { enable: boolean; label: string; link: string };
  };
  course: { enable: boolean; title: string };
  cta: {
    enable: boolean;
    subtitle: string;
    title: string;
    button: { enable: boolean; label: string; link: string };
  };
  success_story: { enable: boolean };
  event: { enable: boolean; title: string };
  blog: { enable: boolean; title: string };
}

const heroSlide = {
  title: 'TRADUCTORA FRANCÉS – ESPAÑOL / INTÉRPRETE JURADA FRANCÉS – ESPAÑOL',
  content:
    'Je traduis des documents tels que contrats, accords, licences, documents scientifiques, littéraires, publicités, entre autres.',
  animation_in: 'left',
  animation_out: 'right',
  button: { enable: false, label: 'Consulter gratuitement', link: 'https://calendly.com/qori' },
  bg_image: '/images/banner/banner-1.jpg',
};

const homepageEs: HomepageData = {
  slider: {
    enable: true,
    bg_image: '/images/banner/banner-1.jpg',
    slider_item: [heroSlide],
  },
  banner_feature: {
    enable: false,
    image: '/images/blog/primeraspracticas.jpg',
    feature_item: [
      {
        name: 'Traducción',
        icon: 'ti-blackboard',
        content:
          'Realizamos traducciones en todos los idiomas. Nuestros traductores son nativos quienes garantizan calidad y eficiencia en la traducción.',
      },
      {
        name: 'Interpretación',
        icon: 'ti-agenda',
        content:
          'Nuestros intérpretes son nativos, formados en diferentes disciplinas que se encargan de realizar una interpretación consecutiva o simultánea para todo tipo de actividad, en todos los idiomas.',
      }
    ],
  },
  about: {
    enable: true,
    title: 'Acerca de QORI',
    image: '/images/about/about-us.jpg',
    content:
      "<b>Ana MEDINA</b>, fundadora y traductora-intérprete principal de <b>QORI.FR</b>, te acompaña en traducción e interpretación entre el mundo hispanohablante y el francófono. Traductora e intérprete judicial, intérprete nombrada por la Cour d'Appel d'Angers: rigor, confidencialidad y sensibilidad cultural al servicio de tus proyectos transfronterizos.",
    button: { enable: true, label: 'Descubre Más', link: 'about' },
  },
  course: { enable: false, title: 'Talleres Virtuales' },
  cta: {
    enable: false,
    subtitle: 'Quieres estudiar en Francia',
    title: 'CONSULTORÍA GRATUITA',
    button: { enable: true, label: 'Reservar Cita', link: 'https://calendly.com/qori' },
  },
  success_story: { enable: false },
  event: { enable: false, title: 'Proximos Eventos' },
  blog: { enable: true, title: 'Últimas Noticias' },
};


const heroSlideFr = {
  title: 'TRADUCTEUR FRANÇAIS – ESPAGNOL / INTERPRÈTE ASSERMENTÉE FRANÇAIS – ESPAGNOL',
  content: 'Traduzco documentos como contratos, acuerdos, licencias, documentos cientificos, literarios, publicidades, entre otros.',
  animation_in: 'left',
  animation_out: 'right',
  button: { enable: false, label: 'Consulter gratuitement', link: 'https://calendly.com/qori' },
  bg_image: '/images/banner/banner-1.jpg',
};

const homepageFr: HomepageData = {
  slider: {
    enable: true,
    bg_image: '/images/banner/banner-1.jpg',
    slider_item: [heroSlideFr],
  },
  banner_feature: {
    enable: false,
    image: '/images/blog/primeraspracticas.jpg',
    feature_item: [
      {
        name: 'Traduction',
        icon: 'ti-blackboard',
        content:
          'Nous réalisons des traductions dans toutes les langues. Nos traducteurs sont natifs et garantissent qualité et efficacité dans la traduction.',
      },
      {
        name: 'Interprétation',
        icon: 'ti-agenda',
        content:
          'Nos interprètes sont natifs, formés dans différentes disciplines et assurent une interprétation consécutive ou simultanée pour tout type d\'activité, dans toutes les langues.',
      }
    ],
  },
  about: {
    enable: true,
    title: 'À propos de nous',
    image: '/images/about/about-us.jpg',
    content:
      "<b>Ana MEDINA</b>, fondatrice et traductrice-interprète principale de <b>QORI.FR</b>, vous accompagne en traduction et interprétation entre le monde hispanophone et francophone. Traductrice et interprète judiciaire, interprète nommée par la Cour d'appel d'Angers : rigueur, confidentialité et sensibilité culturelle au service de vos projets transfrontaliers.",
    button: { enable: true, label: 'En savoir plus', link: 'about' },
  },
  course: { enable: false, title: 'Notre cours' },
  cta: {
    enable: false,
    subtitle: "Cliquez pour vous joindre à l'atelier avancé",
    title: "Apprentissage en réseautique avancée",
    button: { enable: true, label: 'Réserver un rendez-vous en ligne', link: 'https://calendly.com/qori' },
  },
  success_story: { enable: false },
  event: { enable: false, title: "Événements à venir" },
  blog: { enable: true, title: "DERNIÈRES NOUVELLES" },
};

export function getHomepage(lang: string): HomepageData {
  return lang === 'fr' ? homepageFr : homepageEs;
}
