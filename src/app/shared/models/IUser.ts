import { IProject } from './IProject';
import { IExperience } from './IExperience';
import { IService } from './IService';
import { ISocial } from './ISocial';
import { ILocation } from './ILocation';

export interface IUser {
  id: number;
  username: string;
  email: string;
  first_name: string;
  last_name: string;
  nom_complet: string;
  titre: string;
  telephone: string;
  disponible: boolean;
  photo_de_profile: string | null;
}

export interface IUserDetail extends IUser {
  sous_titre: string;
  description: string;
  lien_cv: string | null;
  annees_experience: number;
  nombre_projets: number;
  projects: IProject[];
  experiences: IExperience[];
  services: IService[];
  social_networks: ISocial[];
  locations: ILocation[];
}
