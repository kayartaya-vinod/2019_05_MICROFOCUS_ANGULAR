import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/nested-routes-demo/home/home.component';
import { JavaComponent } from './components/nested-routes-demo/java/java.component';
import { CoreJavaComponent } from './components/nested-routes-demo/java/core-java/core-java.component';
import { JavaeeComponent } from './components/nested-routes-demo/java/javaee/javaee.component';
import { SpringComponent } from './components/nested-routes-demo/java/spring/spring.component';
import { AngularComponent } from './components/nested-routes-demo/angular/angular.component';
import { AngularjsComponent } from './components/nested-routes-demo/angular/angularjs/angularjs.component';
import { Angular7Component } from './components/nested-routes-demo/angular/angular7/angular7.component';
import { NodeComponent } from './components/nested-routes-demo/node/node.component';
import { routes } from './route.config';


// npm i bootstrap jquery popper.js

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    JavaComponent,
    CoreJavaComponent,
    JavaeeComponent,
    SpringComponent,
    AngularComponent,
    AngularjsComponent,
    Angular7Component,
    NodeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
