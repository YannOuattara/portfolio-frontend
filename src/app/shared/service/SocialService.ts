import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ISocial } from '../models/ISocial';
import { environment } from '../../../environments/environment';

const API = `${environment.apiUrl}/api/v1`;

@Injectable({ providedIn: 'root' })
export class SocialService {
  private http = inject(HttpClient);

  getReseaux() {
    return this.http.get<ISocial[]>(`${API}/reseaux-sociaux/`);
  }
}