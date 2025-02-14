import { Component, HostListener, OnInit } from '@angular/core';
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
export class HomeComponent implements OnInit{
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

      public isMobile: boolean = false;
      public isTablet: boolean = false;
      public isDesktop: boolean = false;
    
      private resizeTimeout: any;
    
      // Inizializza la logica per determinare il tipo di dispositivo
      ngOnInit() {
        if (typeof window !== 'undefined') {
          this.updateDeviceType(window.innerWidth); // Verifica subito la larghezza alla partenza
        }
      }
    
      // Ascolta il cambiamento delle dimensioni della finestra
      @HostListener('window:resize', ['$event'])
      onResize(event: Event) {
        // Utilizza un debounce per ridurre il numero di chiamate durante il resize
        clearTimeout(this.resizeTimeout);
        this.resizeTimeout = setTimeout(() => {
          const width = (event.target as Window).innerWidth;
          this.updateDeviceType(width); // Ricalcola il tipo di dispositivo quando la finestra cambia
        }, 200); // Imposta un ritardo di 200 ms
      }
    
      // Funzione per determinare il tipo di dispositivo
      private updateDeviceType(width: number) {
        if (width <= 500) {
    
          this.isMobile = true;
          this.isTablet = false;
          this.isDesktop = false;
        
        } else if (width > 500 && width <= 1030) {
          this.isMobile = false;
          this.isTablet = true;
          this.isDesktop = false;
        
        } else {
        
          this.isMobile = false;
          this.isTablet = false;
          this.isDesktop = true;
        
        }
      }
    
    
      menuOpen: boolean = false;
      subMenuOpen: boolean = false;
    
      toggleMenu() {
        this.menuOpen = !this.menuOpen;
      }
  

  constructor(private router: Router) {}

  navigateToService(path: string) {
    this.router.navigate(['/services'], { fragment: path });
  }

  
}
