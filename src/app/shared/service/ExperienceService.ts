import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { IExperience, TypeExperience } from '../models/IExperience';
import { environment } from '../../../environments/environment';

const API = `${environment.apiUrl}/api/v1`;

@Injectable({ providedIn: 'root' })
export class ExperienceService {
  private http = inject(HttpClient);

  getExperiences(type?: TypeExperience) {
    let params = new HttpParams();
    if (type) params = params.set('type', type);
    return this.http.get<IExperience[]>(`${API}/experiences/`, { params });
  }
}