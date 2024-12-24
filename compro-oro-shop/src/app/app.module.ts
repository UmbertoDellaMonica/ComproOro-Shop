import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CarouselModule } from 'primeng/carousel'; 
import { FormsModule } from '@angular/forms';

import { ComproOroNavbarComponent } from './shared/compro-oro-navbar/compro-oro-navbar.component';
import { ComproOroFooterbarComponent } from './shared/compro-oro-footerbar/compro-oro-footerbar.component';
import { ComproOroMapComponent } from './shared/compro-oro-map/compro-oro-map.component';
import { ComproOroLogoComponent } from './shared/molecules/compro-oro-logo/compro-oro-logo.component';
import { ComproOroCallButtonComponent } from './shared/molecules/compro-oro-call-button/compro-oro-call-button.component';
import { ComproOroNumberComponent } from './shared/molecules/compro-oro-number/compro-oro-number.component';
import { ComproOroEmailComponent } from './shared/molecules/compro-oro-email/compro-oro-email.component';
import { ComproOroInfoComponent } from './components/contact/components/compro-oro-info/compro-oro-info.component';
import { ComproOroSeparatorComponent } from './shared/molecules/compro-oro-separator/compro-oro-separator.component';
import { AppRoutingModule } from './app.routes';
import { TestimonialsComponent } from './components/home/components/testimonials/testimonials.component';
import { DeviceDetectorService } from 'ngx-device-detector';  // Importa il servizio
import { AppComponent } from './app.component';

@NgModule({
  declarations: [

  ],
  imports: [
    FontAwesomeModule,
    CommonModule,
    CarouselModule,
    FormsModule,
    ComproOroNavbarComponent,
    ComproOroFooterbarComponent,
    ComproOroMapComponent,
    ComproOroLogoComponent,
    ComproOroCallButtonComponent,
    ComproOroNumberComponent,
    ComproOroEmailComponent,
    ComproOroInfoComponent,
    ComproOroSeparatorComponent,
    TestimonialsComponent,
    AppRoutingModule,  // Aggiungi il modulo di routing
  ],
  providers: [DeviceDetectorService],  // Aggiungi il servizio qui
})
export class AppModule {}
