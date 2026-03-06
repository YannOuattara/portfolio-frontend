import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IService } from '../models/IService';
import { environment } from '../../../environments/environment';

const API = `${environment.apiUrl}/api/v1`;

@Injectable({ providedIn: 'root' })
export class OfferService {
  private http = inject(HttpClient);

  getServices() {
    return this.http.get<IService[]>(`${API}/services/`);
  }
}