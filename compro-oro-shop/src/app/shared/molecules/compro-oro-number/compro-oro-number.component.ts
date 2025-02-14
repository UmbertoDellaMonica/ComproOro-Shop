import { Component } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';


@Component({
    selector: 'app-compro-oro-number',
    imports: [],
    standalone: true,
    templateUrl: './compro-oro-number.component.html',
    styleUrl: './compro-oro-number.component.scss'
})
export class ComproOroNumberComponent {



    phoneNumber: string = '+3333333333';
    safePhoneNumber: SafeUrl;
  
    constructor(private sanitizer: DomSanitizer) {
      // Sanitize the phone number link
      this.safePhoneNumber = this.sanitizer.bypassSecurityTrustUrl('tel:' + this.phoneNumber);
    }


}
