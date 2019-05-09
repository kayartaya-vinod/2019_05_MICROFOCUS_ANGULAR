import { Routes } from '@angular/router';
import { HomeComponent } from './components/nested-routes-demo/home/home.component';
import { JavaComponent } from './components/nested-routes-demo/java/java.component';
import { JavaeeComponent } from './components/nested-routes-demo/java/javaee/javaee.component';
import { SpringComponent } from './components/nested-routes-demo/java/spring/spring.component';
import { CoreJavaComponent } from './components/nested-routes-demo/java/core-java/core-java.component';
import { AngularComponent } from './components/nested-routes-demo/angular/angular.component';
import { AngularjsComponent } from './components/nested-routes-demo/angular/angularjs/angularjs.component';
import { Angular7Component } from './components/nested-routes-demo/angular/angular7/angular7.component';
import { NodeComponent } from './components/nested-routes-demo/node/node.component';
import { DynamicFormsComponent } from './components/dynamic-forms/dynamic-forms.component';
import { Angular1AppComponent } from './components/angular1-app/angular1-app.component';

export const routes: Routes = [
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
        path: 'java',
        component: JavaComponent,
        children: [
            {
                path: 'core-java',
                component: CoreJavaComponent
            },
            {
                path: 'javaee',
                component: JavaeeComponent 
            },
            {
                path: 'spring',
                component: SpringComponent
            }
        ]
    },
    {
        path: 'angular',
        component: AngularComponent,
        children: [
            {
                path: 'angularjs',
                component: AngularjsComponent
            },
            {
                path: 'angular7',
                component: Angular7Component
            }
        ]
    },
    {
        path: 'nodejs',
        component: NodeComponent
    },
    {
        path: 'dynamic-forms-demo',
        component: DynamicFormsComponent
    },
    {
        path: 'angular1-app',
        component: Angular1AppComponent
    }
]