import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../../../shared/service/UserService';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-introduction',
  imports: [CommonModule],
  templateUrl: './introduction.html',
  styleUrl: './introduction.scss',
})
export class Introduction implements OnInit {
  userService = inject(UserService);

  ngOnInit() {
    this.userService.getProfilPrincipal().subscribe();
  }

  get profil() {
    return this.userService.profil();
  }

  readonly apiUrl = environment.apiUrl;
}
