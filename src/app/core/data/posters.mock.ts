import { MatchPoster, ResultPoster } from '../models/poster.model';

export const UPCOMING_MATCHES: MatchPoster[] = [
  {
    id: 'j15-afc-lob',
    imageUrl: 'assets/images/posters/poster-afc-lob.jpg',
    competition: 'Copa 5 de Mayo',
    jornada: 'Jornada 15',
    homeTeam: 'Ángeles FC',
    awayTeam: 'Lobos de Tepeaca',
    date: '20 SEP',
    time: '17:00',
    venue: 'Estadio Corona Dorada',
    featured: true
  },
  {
    id: 'j15-apr-hal',
    imageUrl: 'assets/images/posters/poster-apr-hal.jpg',
    competition: 'Copa 5 de Mayo',
    jornada: 'Jornada 15',
    homeTeam: 'Atlético Real',
    awayTeam: 'Halcones',
    date: '20 SEP',
    time: '19:00',
    venue: 'Complejo Cinco de Mayo'
  },
  {
    id: 'j15-cth-agc',
    imageUrl: 'assets/images/posters/poster-cth-agc.jpg',
    competition: 'Copa 5 de Mayo',
    jornada: 'Jornada 15',
    homeTeam: 'Centauros',
    awayTeam: 'Águilas',
    date: '21 SEP',
    time: '12:00',
    venue: 'Coliseo del Valle'
  },
  {
    id: 'j15-gua-tor',
    imageUrl: 'assets/images/posters/poster-gua-tor.jpg',
    competition: 'Copa 5 de Mayo',
    jornada: 'Jornada 15',
    homeTeam: 'Guerreros',
    awayTeam: 'Toros',
    date: '21 SEP',
    time: '16:30',
    venue: 'Arena Guerrera'
  }
];

export const RESULTS: ResultPoster[] = [
  {
    id: 'j14-afc-agc',
    imageUrl: 'assets/images/posters/result-afc-agc.jpg',
    competition: 'Copa 5 de Mayo',
    jornada: 'Jornada 14',
    homeTeam: 'Ángeles FC',
    awayTeam: 'Águilas',
    homeScore: 4,
    awayScore: 1,
    date: '13 SEP'
  },
  {
    id: 'j14-apr-lob',
    imageUrl: 'assets/images/posters/result-apr-lob.jpg',
    competition: 'Copa 5 de Mayo',
    jornada: 'Jornada 14',
    homeTeam: 'Atlético Real',
    awayTeam: 'Lobos',
    homeScore: 2,
    awayScore: 2,
    date: '13 SEP'
  },
  {
    id: 'j14-cth-tor',
    imageUrl: 'assets/images/posters/result-cth-tor.jpg',
    competition: 'Copa 5 de Mayo',
    jornada: 'Jornada 14',
    homeTeam: 'Centauros',
    awayTeam: 'Toros',
    homeScore: 3,
    awayScore: 0,
    date: '14 SEP'
  },
  {
    id: 'j14-hal-gua',
    imageUrl: 'assets/images/posters/result-hal-gua.jpg',
    competition: 'Copa 5 de Mayo',
    jornada: 'Jornada 14',
    homeTeam: 'Halcones',
    awayTeam: 'Guerreros',
    homeScore: 2,
    awayScore: 1,
    date: '14 SEP'
  }
];
