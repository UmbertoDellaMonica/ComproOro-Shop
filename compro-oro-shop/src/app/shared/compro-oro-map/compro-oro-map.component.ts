import { Component } from '@angular/core';
import { ComproOroNumberComponent } from "../molecules/compro-oro-number/compro-oro-number.component";
import { ComproOroEmailComponent } from "../molecules/compro-oro-email/compro-oro-email.component";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-compro-oro-map',
  standalone: true,
  imports: [FormsModule, ComproOroEmailComponent, ComproOroNumberComponent, CommonModule],
  templateUrl: './compro-oro-map.component.html',
  styleUrls: ['./compro-oro-map.component.scss']
})
export class ComproOroMapComponent {


  mapUrl: SafeUrl;

  constructor(private sanitizer: DomSanitizer) {
    // URL fisso per la mappa
    const rawUrl = 'https://maps.google.com/maps?width=100%&height=600&hl=en&q=Compro%20Oro%20Castel%20San%20Giorgio%2C%20Via%20Antonio%20Rescigno%2C%2048&ie=UTF8&t=&z=18&iwloc=B&output=embed';
    // Sanitizzazione dell'URL per sicurezza
    this.mapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(rawUrl);
  }




    feedback = {
      email: '',
      message: ''
    };
    errorMessage = '';
    showToast = false; // Variabile per mostrare il toast
  
    // Lista di parole offensive
    offensiveWords = ['zoccola', 'puttana', 'volgare3'];
  
    // Regex per la validazione dell'email
    emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
  





    // Funzione di validazione dell'email
    validateEmail(): boolean {
      if (!this.emailPattern.test(this.feedback.email)) {
        this.errorMessage = 'L\'email inserita non è valida.';
        this.showToast = true; // Mostra il toast con l'errore
        setTimeout(() => this.showToast = false, 3000); // Nasconde dopo 3 secondi
        return false; // Email non valida
      }
      return true; // Email valida
    }
  
    // Funzione di validazione del messaggio
    validateMessage(): boolean {
      // Prima di tutto, verifichiamo che l'email sia valida
      if (!this.validateEmail()) {
        return false; // Se l'email non è valida, blocchiamo la validazione del messaggio
      }
  
      const messageLower = this.feedback.message.toLowerCase();
      console.log("Message : " + messageLower);
  
      // Controllo spam
      const spamPattern = /[A-Z]{5,}|[0-9]{5,}/; // Es: 5 o più lettere maiuscole o numeri
      if (spamPattern.test(this.feedback.message)) {
        this.errorMessage = 'Il messaggio sembra essere spam. Controlla e prova di nuovo.';
        this.showToast = true; // Mostra il toast
        setTimeout(() => this.showToast = false, 3000); // Nasconde dopo 3 secondi
        return false;
      }
  
      // Controllo parole offensive
      for (let word of this.offensiveWords) {
        if (messageLower.includes(word)) {
          this.errorMessage = 'Il messaggio contiene parole offensive. Per favore, rispetta le regole di buona educazione.';
          this.showToast = true; // Mostra il toast
          setTimeout(() => this.showToast = false, 3000); // Nasconde dopo 3 secondi
          return false;
        }
      }
  
      // Se il messaggio è valido
      this.errorMessage = '';
      this.showToast = false; // Nasconde il toast
      return true;
    }
  
    // Generazione del link mailto
    get mailtoLink(): string {
      const recipient = 'example@gmail.com'; // L'indirizzo del destinatario
      const subject = 'Feedback dal sito ComproOro';
      const body = `${this.feedback.message}`;
      return `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    }
  
    // Funzione di invio feedback
    submitFeedback() {
      if (this.validateMessage()) {
        // Apre direttamente il client di posta con il messaggio e l'email pre-compilati
        window.location.href = this.mailtoLink;
      }
    }
  
}
