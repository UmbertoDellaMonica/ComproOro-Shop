import { Component } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-compro-oro-email',
  standalone: true,
  templateUrl: './compro-oro-email.component.html',
  styleUrls: ['./compro-oro-email.component.scss']
})
export class ComproOroEmailComponent {
  email: string = 'example@gmail.com'; // Email del cliente
  safeEmail: SafeUrl; // Variabile per memorizzare la URL sicura

  constructor(private sanitizer: DomSanitizer) {
    // Sanitizzazione della URL mailto
    this.safeEmail = this.sanitizer.bypassSecurityTrustUrl(`mailto:${this.email}`);
  }
}

