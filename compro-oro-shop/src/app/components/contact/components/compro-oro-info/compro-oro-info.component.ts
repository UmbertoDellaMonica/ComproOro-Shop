import { Component } from '@angular/core';

import { ComproOroNumberComponent } from "../../../../shared/molecules/compro-oro-number/compro-oro-number.component";
import { ComproOroEmailComponent } from "../../../../shared/molecules/compro-oro-email/compro-oro-email.component";

@Component({
    selector: 'app-compro-oro-info',
    imports: [
        ComproOroNumberComponent,
        ComproOroEmailComponent,
    ],
    standalone: true,
    templateUrl: './compro-oro-info.component.html',
    styleUrl: './compro-oro-info.component.scss'
})
export class ComproOroInfoComponent {

}
