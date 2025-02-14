import { Component } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-compro-oro-button',
  standalone: true,
  templateUrl: './compro-oro-call-button.component.html',
  styleUrls: ['./compro-oro-call-button.component.scss']
})
export class ComproOroCallButtonComponent {
  phoneNumber: string = '+393333333';  // Numero di telefono
  safePhoneNumber: SafeUrl;  // Variabile per il numero sanitizzato

  constructor(private sanitizer: DomSanitizer) {
    // Sanitizzazione del numero di telefono (anche se generalmente i numeri di telefono non sono soggetti a XSS, il sanitizzatore aiuta a garantire che l'input venga trattato correttamente)
    this.safePhoneNumber = this.sanitizer.bypassSecurityTrustUrl(`tel:${this.phoneNumber}`);
  }
}
