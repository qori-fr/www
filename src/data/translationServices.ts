export interface TranslationServiceItem {
  path: string;
  titleEs: string;
  titleFr: string;
  descriptionEs: string;
  descriptionFr: string;
  icon: string;
}

export const translationServices: TranslationServiceItem[] = [
  {
    path: 'juridica',
    titleEs: 'Jurídica y Legal',
    titleFr: 'Juridique et légal',
    descriptionEs:
      'Traducciones de documentos jurídico-administrativos (no juradas), como acuerdos, contratos, licencias y reglamentos.',
    descriptionFr:
      'Traductions de documents juridico-administratifs (non assermentées), conventions, contrats, licences et règlements.',
    icon: 'ti-book',
  },
  {
    path: 'digital',
    titleEs: 'Digital y Multimedia',
    titleFr: 'Digital et multimédia',
    descriptionEs:
      'Traducción de medios digitales como páginas web, blogs, e-commerce, videojuegos, apps y contenidos interactivos.',
    descriptionFr:
      'Traduction de contenus numériques : sites web, blogs, e-commerce, jeux vidéo, applications et supports interactifs.',
    icon: 'ti-desktop',
  },
  {
    path: 'publicitaria',
    titleEs: 'Publicitaria y Comercial',
    titleFr: 'Publicitaire et commercial',
    descriptionEs:
      'Traducción de textos publicitarios: folletos, materiales promocionales, campañas y contenidos para agencias o empresas.',
    descriptionFr:
      'Traduction de textes publicitaires : brochures, supports promotionnels, campagnes et contenus pour agences ou entreprises.',
    icon: 'ti-email',
  },
  {
    path: 'audiovisual',
    titleEs: 'Audiovisual',
    titleFr: 'Audiovisuel',
    descriptionEs:
      'Adaptación para doblaje, subtitulación de películas, documentales, vídeos corporativos y contenidos multimedia.',
    descriptionFr:
      'Adaptation pour doublage, sous-titrage de films, documentaires, vidéos corporatives et contenus multimédias.',
    icon: 'ti-video-camera',
  },
  {
    path: 'cientifica',
    titleEs: 'Científica y técnica',
    titleFr: 'Scientifique et technique',
    descriptionEs:
      'Traducción especializada de documentación técnica y comercial para empresas y profesionales.',
    descriptionFr:
      'Traduction spécialisée de documentation technique et commerciale pour entreprises et professionnels.',
    icon: 'ti-settings',
  },
  {
    path: 'literaria',
    titleEs: 'Literaria',
    titleFr: 'Littéraire',
    descriptionEs:
      'Traducción de obras literarias: novelas, cuentos, poesía, cómics y ensayos preservando el estilo del autor.',
    descriptionFr:
      'Traduction d’œuvres littéraires : romans, nouvelles, poésie, bandes dessinées et essais en préservant le style de l’auteur.',
    icon: 'ti-pencil-alt',
  },
];
