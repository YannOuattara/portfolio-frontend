export type IconeService = 'backend' | 'frontend' | 'data' | 'security' | 'devops' | 'mobile' | 'autre';

export interface IService {
  id: number;
  user?: number;
  titre: string;
  description: string;
  icone: IconeService;
  numero: number;
  technologies: string[];
  ordre: number;
  actif: boolean;
}