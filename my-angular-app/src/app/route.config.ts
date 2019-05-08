import { Routes } from '@angular/router';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { ContactDetailsComponent } from './components/contact-details/contact-details.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HomeComponent } from './components/home/home.component';
import { AddNewContactComponent } from './components/add-new-contact/add-new-contact.component';

export const routeConfig:Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        // http://localhost:4200/contact-list
        path: 'contact-list',
        component: ContactListComponent
    },
    {
        path: 'contact-details/:id',
        component: ContactDetailsComponent
    },
    {
        path: 'new-contact',
        component: AddNewContactComponent
    },
    {
        // must be the last Route object
        path: '**',
        component: PageNotFoundComponent
    }
];
