import { Component } from '@angular/core';
import { RouterOutlet, RouterLinkActive, RouterLink } from '@angular/router';
import { ComproOroFooterbarComponent } from './shared/compro-oro-footerbar/compro-oro-footerbar.component';
import { ComproOroNavbarComponent } from './shared/compro-oro-navbar/compro-oro-navbar.component';
import { DeviceDetectorService } from 'ngx-device-detector';



@Component({
    selector: 'app-root',
    standalone:true,
    imports:[ComproOroFooterbarComponent,ComproOroNavbarComponent,RouterOutlet,RouterLinkActive,RouterLink],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'compro-oro-shop';
}
