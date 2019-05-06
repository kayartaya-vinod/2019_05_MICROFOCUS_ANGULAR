import { Component, NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// STEP #1: CREATE A NEW COMPONENT
// A component is a TS class, with @Component decorator

@Component({
    selector: 'app-credit',
    template: '<p>Developed by Vinod</p>'
})
class CreditComponent {
}



@Component({
    selector: "app-root",
    template: `<h1>{{message}}</h1>
    <hr />
    <app-credit></app-credit>
    <button (click)="sayHello()" >Greet</button>`
})
class HelloWorldComponent {
    message: string;

    constructor() {
        // generally member initialization is not done here; but
        // done in ngOnInit() initialization code. The constructor is
        // purely used for dependency injection only.
        this.message = 'Hello, World!';
    }

    sayHello():void {
        alert('Hey, how are you?');
    }
}

// STEP #2: Add the component to an NgModule
@NgModule({
    declarations: [
        // All components, pipes and directives are listed here
        HelloWorldComponent, CreditComponent
    ],
    providers: [
        // All injectables (usually called as services) are listed here
    ],
    imports: [
        // All modules that this NgModule depends on are listed here
        BrowserModule, // <--- provides browser features like DOM manipulation
    ],
    bootstrap: [
        HelloWorldComponent, // <-- list of all components to be searched in index.html
    ]
})
class Xyz {
}

// STEP #3: trigger angular
platformBrowserDynamic().bootstrapModule(Xyz);
