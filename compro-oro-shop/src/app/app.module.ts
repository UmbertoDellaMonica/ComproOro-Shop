import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



import { ComproOroNavbarComponent } from './shared/compro-oro-navbar/compro-oro-navbar.component';
import { ComproOroFooterbarComponent } from './shared/compro-oro-footerbar/compro-oro-footerbar.component';

import { ComproOroMapComponent } from './shared/compro-oro-map/compro-oro-map.component';
import { ComproOroLogoComponent } from './shared/molecules/compro-oro-logo/compro-oro-logo.component';
import { ComproOroCallButtonComponent } from './shared/molecules/compro-oro-call-button/compro-oro-call-button.component';



import { ComproOroNumberComponent } from './shared/molecules/compro-oro-number/compro-oro-number.component';
import { ComproOroEmailComponent } from './shared/molecules/compro-oro-email/compro-oro-email.component';
import { ComproOroInfoComponent } from './components/contact/components/compro-oro-info/compro-oro-info.component';
import { ComproOroFeedbackComponent } from './shared/molecules/compro-oro-feedback/compro-oro-feedback.component';
import { ComproOroSeparatorComponent } from './shared/molecules/compro-oro-separator/compro-oro-separator.component';
import { AppRoutingModule } from './app.routes';



@NgModule({
  declarations: [],
  imports: [
    FontAwesomeModule,
    CommonModule,

    ComproOroNavbarComponent,
    ComproOroFooterbarComponent,
    ComproOroInfoComponent,
    

    ComproOroMapComponent,
    ComproOroCallButtonComponent,
    ComproOroNumberComponent,
    ComproOroLogoComponent,
    ComproOroEmailComponent,
    ComproOroFeedbackComponent,
    ComproOroSeparatorComponent,

    AppRoutingModule,  // Aggiungi qui l'importazione del modulo di routing
  ]
})
export class AppModule { }
