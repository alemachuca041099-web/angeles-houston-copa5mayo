export interface MatchPoster {
  id: string;
  imageUrl: string;
  competition: string;
  jornada: string;
  homeTeam: string;
  awayTeam: string;
  date: string;
  time: string;
  venue: string;
  featured?: boolean;
}

export interface ResultPoster {
  id: string;
  imageUrl: string;
  competition: string;
  jornada: string;
  homeTeam: string;
  awayTeam: string;
  homeScore: number;
  awayScore: number;
  date: string;
}
