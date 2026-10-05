import { GalleryItem, NewsItem, OfficialSupplier, Sponsor, StatHighlight, Tournament } from '../models/content.model';

export const NEWS: NewsItem[] = [
  {
    id: 'n1',
    slug: 'angeles-fc-lidera-la-tabla',
    title: 'Ángeles FC extiende su racha y manda en la tabla general',
    excerpt: 'Con tres victorias consecutivas, el conjunto dorado se consolida como el gran candidato a levantar la Copa 5 de Mayo.',
    imageUrl: 'assets/images/news/news-lidera.jpg',
    category: 'Liga',
    date: '14 Sep 2026',
    readTime: '4 min'
  },
  {
    id: 'n2',
    slug: 'fecha-y-sede-de-la-final',
    title: 'Confirmadas fecha y sede para la gran final de la 1ra Edición',
    excerpt: 'La organización anunció que la final se disputará en el Estadio Corona Dorada con capacidad ampliada.',
    imageUrl: 'assets/images/news/news-final.jpg',
    category: 'Torneo',
    date: '10 Sep 2026',
    readTime: '3 min'
  },
  {
    id: 'n3',
    slug: 'nuevo-patrocinador-oficial',
    title: 'Grupo Tepeaca se suma como patrocinador oficial de la liga',
    excerpt: 'La marca regional refuerza su compromiso con el deporte local y el desarrollo de nuevas categorías.',
    imageUrl: 'assets/images/news/news-sponsor.jpg',
    category: 'Patrocinio',
    date: '05 Sep 2026',
    readTime: '2 min'
  },
  {
    id: 'n4',
    slug: 'figura-de-la-jornada',
    title: 'El delantero de Centauros se corona figura de la jornada 14',
    excerpt: 'Con un doblete decisivo, el atacante se convierte en la sensación ofensiva del torneo.',
    imageUrl: 'assets/images/news/news-figura.jpg',
    category: 'Jugadores',
    date: '15 Sep 2026',
    readTime: '3 min'
  }
];

export const GALLERY: GalleryItem[] = [
  { id: 'g1', imageUrl: 'assets/images/gallery/00e7a627-cbee-4c99-8294-e61c1282d28d.jpeg', caption: 'Abraham López — Ángeles Houston', captionEn: 'Abraham López — Ángeles Houston', category: 'Jugadores' },
  { id: 'g2', imageUrl: 'assets/images/gallery/5c32711b-f369-470f-ab10-7c1497bc4aeb.jpeg', caption: 'Moy Carreña — Ángeles Houston', captionEn: 'Moy Carreña — Ángeles Houston', category: 'Jugadores' },
  { id: 'g3', imageUrl: 'assets/images/gallery/9d0b8382-d28f-4964-a7d3-17391f3d2644.jpeg', caption: 'César "La Chivita" Vallejo — Ángeles Houston', captionEn: 'César "La Chivita" Vallejo — Ángeles Houston', category: 'Jugadores' },
  { id: 'g4', imageUrl: 'assets/images/gallery/a7b5caa5-c8a7-4095-8449-217584432a3f.jpeg', caption: 'Martín Navarrete — Ángeles Houston', captionEn: 'Martín Navarrete — Ángeles Houston', category: 'Jugadores' },
  { id: 'g5', imageUrl: 'assets/images/gallery/ac1fb669-fc2e-41b3-9988-76522a6e5788.jpeg', caption: 'Jorge Lampón — Ángeles Houston', captionEn: 'Jorge Lampón — Ángeles Houston', category: 'Jugadores' },
  { id: 'g6', imageUrl: 'assets/images/gallery/ebfb0e2f-0f1d-4d29-9847-ecde90e4dcf9.jpeg', caption: 'Aldair Legorreta — Ángeles Houston', captionEn: 'Aldair Legorreta — Ángeles Houston', category: 'Jugadores' }
];

export const SPONSORS: Sponsor[] = [];

export const TROPHY_PROVIDER: OfficialSupplier = {
  id: 'trofeos-jr',
  name: 'Trofeos JR',
  role: 'Proveedor oficial de trofeos y anillos de campeón',
  roleEn: 'Official trophy & champion ring supplier',
  tagline: 'Tú lo imaginas... yo lo fabrico',
  taglineEn: 'You imagine it... I make it',
  logoUrl: 'assets/images/sponsors/trofeos-jr-logo.webp',
  heroImageUrl: 'assets/images/tournaments/trofeo-juego-inaugural.png',
  gallery: [
    { imageUrl: 'assets/images/tournaments/anillo-patrocinador-oro.png', caption: 'Anillo de patrocinador (oro) Copa 5 de Mayo Houston 2027', captionEn: 'Sponsor ring (gold) — Copa 5 de Mayo Houston 2027' },
    { imageUrl: 'assets/images/tournaments/trofeo-juego-inaugural.png', caption: 'Trofeo del Juego Inaugural 2027', captionEn: '2027 Opening Match trophy' },
    { imageUrl: 'assets/images/tournaments/anillo-patrocinador-plata.png', caption: 'Anillo de patrocinador (plata) Copa 5 de Mayo Houston 2027', captionEn: 'Sponsor ring (silver) — Copa 5 de Mayo Houston 2027' }
  ]
};

export const TOURNAMENTS: Tournament[] = [
  {
    id: 't1',
    name: 'Copa 5 de Mayo Houston 2027',
    season: '2027',
    format: '32 equipos · 8 grupos de 4 · Avanzan los 2 primeros de cada grupo · Octavos de final',
    formatEn: '32 teams · 8 groups of 4 · Top 2 of each group advance · Round of 16',
    status: 'Próximo',
    imageUrl: 'assets/images/tournaments/copa-houston.jpg',
    teams: 32,
    startDate: '01 May 2027',
    endDate: '02 May 2027',
    startDateEn: 'May 1, 2027',
    endDateEn: 'May 2, 2027',
    venue: '14211 Reeveston Rd, Houston, TX 77039, Estados Unidos',
    sorteoDate: '28 Abr 2027',
    sorteoDateEn: 'Apr 28, 2027',
    sorteoVenue: 'Por confirmar',
    registrationFee: '$4,000 USD (inscripción regular)',
    registrationFeeEn: '$4,000 USD (regular registration)',
    championPrize: [
      '$60,000 USD',
      'Trofeo oficial Trofeos JR',
      'Medallas de campeón',
      'Anillo de oro al patrón campeón'
    ],
    championPrizeEn: [
      '$60,000 USD',
      'Official Trofeos JR trophy',
      'Champion medals',
      'Gold ring for the champion team owner'
    ],
    runnerUpPrize: [
      'Trofeo oficial Trofeos JR',
      'Medallas de subcampeón',
      'Anillo de plata para el patrón subcampeón'
    ],
    runnerUpPrizeEn: [
      'Official Trofeos JR trophy',
      'Runner-up medals',
      'Silver ring for the runner-up team owner'
    ],
    individualAwards: [
      'MVP del torneo',
      'Máximo goleador',
      'Mejor portero',
      'Mejor jugador de la final'
    ],
    individualAwardsEn: [
      'Tournament MVP',
      'Top scorer',
      'Best goalkeeper',
      'Best player of the final'
    ],
    openingMatchPrize: [
      'Trofeo Juego Inaugural 2027 para el equipo ganador del partido de apertura'
    ],
    openingMatchPrizeEn: [
      '2027 Opening Match trophy for the winning team of the tournament opener'
    ]
  }
];

export const HERO_STATS: StatHighlight[] = [
  { label: 'stats.teams', value: 32 },
  { label: 'stats.groups', value: 8 },
  { label: 'stats.qualified', value: 16 },
  { label: 'stats.prize', value: 60000, prefix: '$' }
];
