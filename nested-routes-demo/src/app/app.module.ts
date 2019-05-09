import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { UpgradeModule } from '@angular/upgrade/static';


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
import { DynamicFormsComponent } from './components/dynamic-forms/dynamic-forms.component';
import { Angular1AppComponent } from './components/angular1-app/angular1-app.component';


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
    NodeComponent,
    DynamicFormsComponent,
    Angular1AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    UpgradeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
