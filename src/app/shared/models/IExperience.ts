export type TypeExperience = 'education' | 'professionnel' | 'projet' | 'competition' | 'certification';

export interface IExperience {
  id: number;
  user?: number;
  type: TypeExperience;
  titre: string;
  organisation: string;
  description: string | null;
  date_debut: string | null;
  date_fin: string | null;
  lieu: string | null;
  technologies: string[];
  ordre: number;
  actuel: boolean;
  periode: string;
}
