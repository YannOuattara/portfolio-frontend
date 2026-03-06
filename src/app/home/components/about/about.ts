import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../../../shared/service/UserService';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  userService = inject(UserService);
  get profil() { return this.userService.profil(); }
  readonly apiUrl = environment.apiUrl;
}
