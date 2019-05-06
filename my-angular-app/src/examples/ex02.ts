import { Component, NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { Module } from 'module';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

@Component({
    selector: 'app-header',
    template: '<h1>App Header</h1><hr />'
})
class Header {}

@Component({
    selector: 'app-footer',
    template: '<p class="footer">&copy; 2019 - all rights reserved by KVinod Inc</p>'
})
class Footer {}

@Component({
    selector: 'app-body',
    template: '<p>This is an Angular example by Vinod</p><app-footer></app-footer>'
})
class Body {}

// bit.ly/MF1900506
// -------- Module 1, contains Header, Footer, and Body components
@NgModule({
    declarations: [Header, Footer, Body],
    exports: [Header, Body]
})
class Module1 {}

// ---------- AppMain componnet, intends to make use of Header, Footer, Body from
// Module1

@Component({
    selector: 'app-root',
    template: `
    <app-header></app-header>
    <app-body></app-body>
    `
})
class AppMain{}

@NgModule({
    declarations: [AppMain],
    imports: [BrowserModule, Module1],
    bootstrap: [AppMain]
})
class MainModule{}

platformBrowserDynamic().bootstrapModule(MainModule);