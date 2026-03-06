import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { ContactService } from '../../../shared/service/ContactService';
import { UserService } from '../../../shared/service/UserService';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  private fb = inject(FormBuilder);
  private contactService = inject(ContactService);
  userService = inject(UserService);

  form = this.fb.group({
    nom: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    sujet: ['', [Validators.required, Validators.minLength(3)]],
    message: ['', [Validators.required, Validators.minLength(10)]],
  });

  envoi = signal<'idle' | 'loading' | 'success' | 'error'>('idle');
  erreurMsg = signal('');

  get profil() { return this.userService.profil(); }

  soumettre() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.envoi.set('loading');
    this.contactService.envoyerMessage(this.form.value as any).subscribe({
      next: () => {
        this.envoi.set('success');
        this.form.reset();
      },
      error: () => {
        this.envoi.set('error');
        this.erreurMsg.set("Une erreur s'est produite. Veuillez réessayer.");
      },
    });
  }
}
