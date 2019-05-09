import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CounterComponent } from './components/counter/counter.component';
import { DirectivesDemoComponent } from './components/directives-demo/directives-demo.component';
import { PipeDemoComponent } from './components/pipe-demo/pipe-demo.component';
import { FullnamePipe } from './pipes/fullname.pipe';
import { AgePipe } from './pipes/age.pipe';
import { ContactDetailsComponent } from './components/contact-details/contact-details.component';
import { ContactCardComponent } from './components/contact-card/contact-card.component';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { routeConfig } from './route.config';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { AddNewContactComponent } from './components/add-new-contact/add-new-contact.component';
import { FilterPipe } from './pipes/filter.pipe';
import { EditContactComponent } from './components/edit-contact/edit-contact.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    DirectivesDemoComponent,
    PipeDemoComponent,
    FullnamePipe,
    AgePipe,
    ContactDetailsComponent,
    ContactCardComponent,
    ContactListComponent,
    PageNotFoundComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    AddNewContactComponent,
    FilterPipe,
    EditContactComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routeConfig, { useHash: true }),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

