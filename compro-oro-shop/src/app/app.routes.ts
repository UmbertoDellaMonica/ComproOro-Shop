import { Routes } from '@angular/router';

import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { ServicesComponent } from './components/services/services.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

export const routes: Routes = [


    { path: '', redirectTo: '/home', pathMatch: 'full' },
    
    { path: 'home', component: HomeComponent },
    
    { path: 'about-us', component: AboutUsComponent },
    
    { path: 'services', component: ServicesComponent },
    
    { path: 'contact', component: ContactComponent },

    { path: '**', component: PageNotFoundComponent } // Wildcard route for a 404 page


  ];
