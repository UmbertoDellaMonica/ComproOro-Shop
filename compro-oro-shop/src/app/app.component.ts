import { Component } from '@angular/core';
import { RouterOutlet, RouterLinkActive, RouterLink } from '@angular/router';
import { ComproOroFooterbarComponent } from './shared/compro-oro-footerbar/compro-oro-footerbar.component';
import { ComproOroNavbarComponent } from './shared/compro-oro-navbar/compro-oro-navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [

    RouterOutlet,
    RouterLinkActive,
    RouterLink,

    ComproOroNavbarComponent,
    ComproOroFooterbarComponent,
    
  
  
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'compro-oro-shop';
}
