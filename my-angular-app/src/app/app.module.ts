import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CounterComponent } from './components/counter/counter.component';
import { DirectivesDemoComponent } from './components/directives-demo/directives-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    DirectivesDemoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
