import { Component } from '@angular/core';
import { ComproOroMapComponent } from "../../shared/compro-oro-map/compro-oro-map.component";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    ComproOroMapComponent
],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

}
