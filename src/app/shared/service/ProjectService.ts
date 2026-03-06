import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { IProject, CategorieProjet } from '../models/IProject';
import { environment } from '../../../environments/environment';

const API = `${environment.apiUrl}/api/v1`;

@Injectable({ providedIn: 'root' })
export class ProjectService {
  private http = inject(HttpClient);

  getProjets(categorie?: CategorieProjet, enVedette?: boolean) {
    let params = new HttpParams();
    if (categorie) params = params.set('categorie', categorie);
    if (enVedette) params = params.set('en_vedette', 'true');
    return this.http.get<IProject[]>(`${API}/projets/`, { params });
  }

  getProjet(id: number) {
    return this.http.get<IProject>(`${API}/projets/${id}/`);
  }
}