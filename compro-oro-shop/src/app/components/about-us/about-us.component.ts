import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-about-us',
    standalone: true,
    imports: [
        RouterLink,
        RouterLinkActive,
        CommonModule
    ],
    templateUrl: './about-us.component.html',
    styleUrl: './about-us.component.scss'
})
export class AboutUsComponent implements OnInit {

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

}
