import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperienceService } from '../../../shared/service/ExperienceService';
import { IExperience } from '../../../shared/models/IExperience';

@Component({
  selector: 'app-resume',
  imports: [CommonModule],
  templateUrl: './resume.html',
  styleUrl: './resume.scss',
})
export class Resume implements OnInit {
  private expService = inject(ExperienceService);

  formations = signal<IExperience[]>([]);
  autresExperiences = signal<IExperience[]>([]);

  readonly skills = [
    { nom: 'Python', niveau: 88 },
    { nom: 'Django', niveau: 85 },
    { nom: 'SQL', niveau: 65 },
    { nom: 'Angular', niveau: 40 },
    { nom: 'TypeScript', niveau: 40 },
    { nom: 'HTML / CSS', niveau: 75 },
    { nom: 'Flutter', niveau: 60 },
    { nom: 'Odoo', niveau: 55 },
  ];

  ngOnInit() {
    this.expService.getExperiences('education').subscribe(data => this.formations.set(data));
    this.expService.getExperiences('professionnel').subscribe(data => this.autresExperiences.set(data));
  }
}
