import { Routes } from '@angular/router';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { ContactDetailsComponent } from './components/contact-details/contact-details.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

export const routeConfig:Routes = [
    {
        path: '',
        redirectTo: 'contact-list',
        pathMatch: 'full'
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
        // must be the last Route object
        path: '**',
        component: PageNotFoundComponent
    }
];
