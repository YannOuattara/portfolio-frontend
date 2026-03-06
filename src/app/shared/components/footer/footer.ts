import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../../service/UserService';

@Component({
  selector: 'app-footer',
  imports: [CommonModule],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  private userService = inject(UserService);

  get github() {
    return this.userService.profil()?.social_networks?.find(r => r.plateforme === 'github')?.url ?? 'https://github.com/YannOuattara';
  }

  get linkedin() {
    return this.userService.profil()?.social_networks?.find(r => r.plateforme === 'linkedin')?.url ?? 'https://www.linkedin.com/in/yann-c%C3%A9dric-emmanuel-ouattara-5b0249392/';
  }
}
