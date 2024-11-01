import { Component } from '@angular/core';

import { ComproOroNumberComponent } from "../../../../shared/molecules/compro-oro-number/compro-oro-number.component";
import { ComproOroEmailComponent } from "../../../../shared/molecules/compro-oro-email/compro-oro-email.component";
import { ComproOroSeparatorComponent } from "../../../../shared/molecules/compro-oro-separator/compro-oro-separator.component";

@Component({
  selector: 'app-compro-oro-info',
  standalone: true,
  imports: [
    ComproOroNumberComponent,
    ComproOroEmailComponent,
    ComproOroSeparatorComponent
],
  templateUrl: './compro-oro-info.component.html',
  styleUrl: './compro-oro-info.component.scss'
})
export class ComproOroInfoComponent {

}
