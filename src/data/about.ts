export interface AboutPageData {
  success_story: {
    enable: boolean;
    title: string;
    content: string;
    bg_image: string;
    video_link?: string;
  };
  teachers: {
    enable: boolean;
    title: string;
  };
}

const aboutEs: AboutPageData = {
  success_story: {
    enable: true,
    title: 'Historias De Éxito',
    bg_image: '/images/backgrounds/success-story.jpg',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat pariatur. Excepteur sint occaecat. Ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris',
    video_link: 'https://www.youtube.com/watch?v=ResipmZmpDU',
  },
  teachers: {
    enable: true,
    title: 'Nuestros Profesores',
  },
};

const aboutFr: AboutPageData = {
  success_story: {
    enable: true,
    title: 'Histoires de succès',
    bg_image: '/images/backgrounds/success-story.jpg',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat pariatur. Excepteur sint occaecat.',
    video_link: 'https://www.youtube.com/watch?v=ResipmZmpDU',
  },
  teachers: {
    enable: true,
    title: 'Nos professeurs',
  },
};

export function getAboutData(lang: string): AboutPageData {
  return lang === 'fr' ? aboutFr : aboutEs;
}
