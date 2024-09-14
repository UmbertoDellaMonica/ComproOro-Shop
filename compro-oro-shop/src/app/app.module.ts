import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



import { ComproOroNavbarComponent } from './shared/compro-oro-navbar/compro-oro-navbar.component';
import { ComproOroFooterbarComponent } from './shared/compro-oro-footerbar/compro-oro-footerbar.component';

import { ComproOroMapComponent } from './shared/compro-oro-map/compro-oro-map.component';
import { ComproOroLogoComponent } from './shared/compro-oro-logo/compro-oro-logo.component';
import { ComproOroCallButtonComponent } from './shared/compro-oro-call-button/compro-oro-call-button.component';



@NgModule({
  declarations: [],
  imports: [
    FontAwesomeModule,
    CommonModule,

    ComproOroNavbarComponent,
    ComproOroFooterbarComponent,

    ComproOroMapComponent,
    ComproOroLogoComponent,
    ComproOroCallButtonComponent
  ]
})
export class AppModule { }
