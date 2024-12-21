import { Component } from '@angular/core';
import { ComproOroNumberComponent } from "../molecules/compro-oro-number/compro-oro-number.component";
import { ComproOroEmailComponent } from "../molecules/compro-oro-email/compro-oro-email.component";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-compro-oro-map',
  standalone: true,
  imports: [
    ComproOroNumberComponent,
    ComproOroEmailComponent,
    CommonModule,
    FormsModule
    
],
  templateUrl: './compro-oro-map.component.html',
  styleUrl: './compro-oro-map.component.scss'
})
export class ComproOroMapComponent {

  feedback = {
    email: '',
    message: ''
  };
  errorMessage = '';

  // Lista di parole offensive (esempio, aggiungi altre parole se necessario)
  offensiveWords = ['volgare1', 'volgare2', 'volgare3']; // Esempio di parole, sostituisci con quelle vere

  validateMessage(): boolean {
    // Controlla se il messaggio contiene parole offensive
    const messageLower = this.feedback.message.toLowerCase();
    for (let word of this.offensiveWords) {
      if (messageLower.includes(word)) {
        this.errorMessage = 'Il messaggio contiene parole offensive. Per favore, rispetta le regole di buona educazione.';
        return false;
      }
    }

    // Verifica se il messaggio contiene caratteri tipici dello spam, come molte lettere maiuscole, numeri casuali, etc.
    const spamPattern = /[A-Z]{5,}|[0-9]{5,}/; // Es: 5 o più lettere maiuscole o numeri
    if (spamPattern.test(this.feedback.message)) {
      this.errorMessage = 'Il messaggio sembra essere spam. Controlla e prova di nuovo.';
      return false;
    }

    // Se il messaggio è valido
    this.errorMessage = '';
    return true;
  }

  submitFeedback() {
    if (this.validateMessage()) {
      // Invia il feedback (ad esempio, tramite email o microservizio)
      console.log('Feedback inviato:', this.feedback);
      alert('Feedback inviato con successo!');
    } else {
      alert(this.errorMessage);
    }
  }

}
