import { Component } from '@angular/core';
import { ComproOroSeparatorComponent } from '../../shared/molecules/compro-oro-separator/compro-oro-separator.component';
import { CarouselModule } from 'primeng/carousel';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { TestimonialsComponent } from "./components/testimonials/testimonials.component";


@Component({
    selector: 'app-home',
    standalone: true,
    imports: [
        ComproOroSeparatorComponent,
        CarouselModule,
        CommonModule,
        RouterModule,
        TestimonialsComponent
    ],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss'
})
export class HomeComponent {
  // Servizi per il Cliente
  services = [
    {
      "title": "Valutazione gratuita dell'oro",
      "description": "Offriamo un servizio di valutazione gratuita dell'oro, fornendo una stima accurata e trasparente del valore dei vostri gioielli e oggetti in oro.",
      "icon": "gold-icon.svg",
      "path": 'free-evaluate'
    },
    {
      "title": "Valutazione Monete d'oro",
      "description": "Offriamo una valutazione professionale delle vostre monete d'oro, assicurandovi una stima precisa e affidabile del loro valore di mercato. Visitateci per un servizio rapido e senza impegno.",
      "icon": "sterline-coin.svg",
      "path": 'sell-gold-coin'
    },    
    {
      "title": "Riparazione Gioielli",
      "description": "Offriamo un servizio di riparazione gioielli di alta qualità per restaurare i vostri preziosi alle condizioni originali. Affidateci i vostri gioielli per un risultato impeccabile e tempestivo.",
      "icon": "necklace.svg",
      "path": 'jewelry-repair'
    }
    
  ];

  
  constructor(private router: Router) {}

  navigateToService(path: string) {
    this.router.navigate(['/services'], { fragment: path });
  }
}
