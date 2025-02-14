import { Component, OnInit, HostListener } from '@angular/core';
import { ComproOroSeparatorComponent } from "../../shared/molecules/compro-oro-separator/compro-oro-separator.component";
import { CommonModule, ViewportScroller } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ComproOroCallButtonComponent } from "../../shared/molecules/compro-oro-call-button/compro-oro-call-button.component";

@Component({
    selector: 'app-services',
    standalone: true,
    imports: [ComproOroSeparatorComponent, ComproOroCallButtonComponent, CommonModule],
    templateUrl: './services.component.html',
    styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  public isMobile: boolean = false;
  public isTablet: boolean = false;
  public isDesktop: boolean = false;

  private resizeTimeout: any;

  constructor(private route: ActivatedRoute, private viewportScroller: ViewportScroller) { }

  // Scrolling for the link that are referring to this section of code
  ngOnInit(): void {
    if (typeof window !== 'undefined') {
      this.updateDeviceType(window.innerWidth); // Verifica subito la larghezza alla partenza
    }

    this.route.fragment.subscribe((fragment: string | null) => {
      if (fragment) {
        this.viewportScroller.scrollToAnchor(fragment);
      }
    });
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
    } else if (width > 500 && width <= 1000) {
      this.isMobile = false;
      this.isTablet = true;
      this.isDesktop = false;
    } else {
      this.isMobile = false;
      this.isTablet = false;
      this.isDesktop = true;
    }
  }
}
