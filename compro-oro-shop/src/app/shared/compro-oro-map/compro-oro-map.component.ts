import { Component } from '@angular/core';
import { ComproOroNumberComponent } from "../molecules/compro-oro-number/compro-oro-number.component";
import { ComproOroEmailComponent } from "../molecules/compro-oro-email/compro-oro-email.component";
import { ComproOroFeedbackComponent } from "../molecules/compro-oro-feedback/compro-oro-feedback.component";

@Component({
  selector: 'app-compro-oro-map',
  standalone: true,
  imports: [
    ComproOroNumberComponent,
    ComproOroEmailComponent,
    ComproOroFeedbackComponent
],
  templateUrl: './compro-oro-map.component.html',
  styleUrl: './compro-oro-map.component.scss'
})
export class ComproOroMapComponent {

}
