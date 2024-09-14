import { Component } from '@angular/core';
import { ComproOroCallButtonComponent } from "../compro-oro-call-button/compro-oro-call-button.component";
import { RouterOutlet, RouterLinkActive, RouterLink } from '@angular/router';

@Component({
  selector: 'compro-oro-navbar',
  standalone: true,
  imports: [

    RouterOutlet,
    RouterLinkActive,
    RouterLink,


    ComproOroCallButtonComponent
  ],
  templateUrl: './compro-oro-navbar.component.html',
  styleUrl: './compro-oro-navbar.component.scss'
})
export class ComproOroNavbarComponent {

}
