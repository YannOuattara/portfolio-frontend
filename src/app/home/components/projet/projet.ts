import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectService } from '../../../shared/service/ProjectService';
import { IProject, CategorieProjet } from '../../../shared/models/IProject';
import { environment } from '../../../../environments/environment';

type Filtre = { label: string; value: CategorieProjet | 'all' };

@Component({
  selector: 'app-projet',
  imports: [CommonModule],
  templateUrl: './projet.html',
  styleUrl: './projet.scss',
})
export class Projet implements OnInit {
  private projectService = inject(ProjectService);

  projets = signal<IProject[]>([]);
  filtreActif = signal<CategorieProjet | 'all'>('all');

  readonly filtres: Filtre[] = [
    { label: 'Tous', value: 'all' },
    { label: 'Full Stack', value: 'fullstack' },
    { label: 'Backend', value: 'backend' },
    { label: 'Odoo', value: 'odoo' },
  ];

  ngOnInit() {
    this.chargerProjets();
  }

  chargerProjets(categorie?: CategorieProjet) {
    this.projectService.getProjets(categorie).subscribe(data => this.projets.set(data));
  }

  filtrer(filtre: Filtre) {
    this.filtreActif.set(filtre.value);
    this.chargerProjets(filtre.value === 'all' ? undefined : filtre.value);
  }

  get profilImg() { return environment.apiUrl; }
}
