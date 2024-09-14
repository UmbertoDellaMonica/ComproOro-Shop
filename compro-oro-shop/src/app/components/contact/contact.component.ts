import { Component } from '@angular/core';
import { ComproOroMapComponent } from "../../shared/compro-oro-map/compro-oro-map.component";
import { ComproOroInfoComponent } from "./components/compro-oro-info/compro-oro-info.component";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [

    ComproOroMapComponent,
    ComproOroInfoComponent

  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

}
