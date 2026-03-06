export type CategorieProjet = 'fullstack' | 'backend' | 'frontend' | 'data' | 'odoo' | 'mobile' | 'autre';
export type StatutProjet = 'en_cours' | 'termine' | 'archive';

export interface IProject {
  id: number;
  user?: number;
  titre: string;
  description_courte: string;
  description_longue: string | null;
  categorie: CategorieProjet;
  statut: StatutProjet;
  technologies: string[];
  image: string | null;
  url_github: string | null;
  url_live: string | null;
  url_demo: string | null;
  en_vedette: boolean;
  ordre: number;
  date_debut: string | null;
  date_fin: string | null;
  icone_categorie: string;
  periode_affichage: string;
}
