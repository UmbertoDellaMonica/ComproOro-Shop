import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { Carousel } from 'primeng/carousel';


@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent {
  @ViewChild('carousel') carousel!: Carousel;

  
  testimonials = [
    {
      name: 'Mario Rossi',
      description: 'Servizio eccellente e personale molto cordiale.',
      rating: 5, 
      icon: 'M', 
    },
    {
      name: 'Giulia Bianchi',
      description: 'Ottima esperienza, ho venduto il mio oro a un prezzo equo.',
      rating: 4,
      icon: 'F',
    },
    {
      name: 'Luca Verdi',
      description: 'Valutazione rapida e trasparente, consiglio a tutti!',
      rating: 5,
      icon: 'M',
    },
    {
      name: 'Sara Neri',
      description: 'Servizio impeccabile, tornerò sicuramente.',
      rating: 5,
      icon: 'F',
    }
  ];

  next() {
    this.carousel.next(); // Metodo del carosello per andare al prossimo elemento
  }

  // Funzione per tornare all'elemento precedente
  prev() {
    this.carousel.prev(); // Metodo del carosello per tornare all'elemento precedente
  }
}

