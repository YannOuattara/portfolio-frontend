import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { IUser, IUserDetail } from '../models/IUser';
import { environment } from '../../../environments/environment';

const API = `${environment.apiUrl}/api/v1`;

@Injectable({ providedIn: 'root' })
export class UserService {
  private http = inject(HttpClient);

  profil = signal<IUserDetail | null>(null);

  getUtilisateurs() {
    return this.http.get<IUser[]>(`${API}/users/`);
  }

  getProfilPrincipal() {
    return this.http.get<IUserDetail>(`${API}/users/profil/`).pipe(
      tap(data => this.profil.set(data))
    );
  }

  getUtilisateurComplet(id: number) {
    return this.http.get<IUserDetail>(`${API}/users/${id}/complet/`).pipe(
      tap(data => this.profil.set(data))
    );
  }
}