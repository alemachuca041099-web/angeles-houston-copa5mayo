export interface Team {
  id: string;
  name: string;
  shortName: string;
  initials: string;
  city: string;
  founded: number;
  colorPrimary: string;
  colorSecondary: string;
  stadium: string;
  coach: string;
  crestUrl: string;
}

export interface StandingRow {
  teamId: string;
  played: number;
  won: number;
  drawn: number;
  lost: number;
  goalsFor: number;
  goalsAgainst: number;
  points: number;
  form: ('G' | 'E' | 'P')[];
}
