import { Component, NgModule } from "@angular/core";

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
    template: '<p>This is an Angular example by Vinod</p>'
})
class Body {}

// bit.ly/MF1900506
// -------- Module 1, contains Header, Footer, and Body components
@NgModule({
    declarations: [Header, Footer, Body],
})
class Module1 {}

// ---------- AppMain componnet, intends to make use of Header, Footer, Body from
// Module1

