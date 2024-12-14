import { Component } from '@angular/core';

@Component({
  selector: 'app-compro-oro-footerbar',
  standalone: true,
  imports: [],
  templateUrl: './compro-oro-footerbar.component.html',
  styleUrl: './compro-oro-footerbar.component.scss'
})
export class ComproOroFooterbarComponent {

  // Current Year - get from the typescript method
  currentYear: number = new Date().getFullYear();


}
