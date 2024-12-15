import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';


@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule, CarouselModule],
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent {


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
}

