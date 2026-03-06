import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IContact, IContactResponse } from '../models/IContact';
import { environment } from '../../../environments/environment';

const API = `${environment.apiUrl}/api/v1`;

@Injectable({ providedIn: 'root' })
export class ContactService {
  private http = inject(HttpClient);

  envoyerMessage(contact: IContact) {
    return this.http.post<IContactResponse>(`${API}/contacts/create/`, contact);
  }
}