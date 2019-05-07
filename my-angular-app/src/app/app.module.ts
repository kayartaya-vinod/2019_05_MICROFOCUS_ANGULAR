import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CounterComponent } from './components/counter/counter.component';
import { DirectivesDemoComponent } from './components/directives-demo/directives-demo.component';
import { PipeDemoComponent } from './components/pipe-demo/pipe-demo.component';
import { FullnamePipe } from './pipes/fullname.pipe';
import { AgePipe } from './pipes/age.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    DirectivesDemoComponent,
    PipeDemoComponent,
    FullnamePipe,
    AgePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
