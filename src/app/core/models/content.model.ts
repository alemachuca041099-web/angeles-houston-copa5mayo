export interface NewsItem {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  imageUrl: string;
  category: string;
  date: string;
  readTime: string;
}

export interface GalleryItem {
  id: string;
  imageUrl: string;
  caption: string;
  captionEn?: string;
  category: 'Acción' | 'Afición' | 'Premiación' | 'Detrás de cámaras' | 'Jugadores';
}

export interface Sponsor {
  id: string;
  name: string;
  tier: 'Oro' | 'Plata' | 'Bronce';
  logoUrl?: string;
}

export interface OfficialSupplier {
  id: string;
  name: string;
  role: string;
  roleEn?: string;
  tagline?: string;
  taglineEn?: string;
  logoUrl: string;
  heroImageUrl: string;
  gallery: { imageUrl: string; caption: string; captionEn?: string }[];
}

export interface Tournament {
  id: string;
  name: string;
  season: string;
  format: string;
  formatEn?: string;
  status: 'En curso' | 'Próximo' | 'Finalizado';
  imageUrl: string;
  teams: number;
  startDate: string;
  endDate: string;
  startDateEn?: string;
  endDateEn?: string;
  venue?: string;
  sorteoDate?: string;
  sorteoDateEn?: string;
  sorteoVenue?: string;
  registrationFee?: string;
  registrationFeeEn?: string;
  championPrize?: string[];
  championPrizeEn?: string[];
  runnerUpPrize?: string[];
  runnerUpPrizeEn?: string[];
  individualAwards?: string[];
  individualAwardsEn?: string[];
  openingMatchPrize?: string[];
  openingMatchPrizeEn?: string[];
}

export interface StatHighlight {
  label: string;
  value: number;
  prefix?: string;
  suffix?: string;
}
