export type PlateformeSociale = 'github' | 'linkedin' | 'twitter' | 'instagram' | 'youtube' | 'autre';

export interface ISocial {
  id: number;
  user?: number;
  plateforme: PlateformeSociale;
  url: string;
  icone: string | null;
  ordre: number;
  actif: boolean;
}