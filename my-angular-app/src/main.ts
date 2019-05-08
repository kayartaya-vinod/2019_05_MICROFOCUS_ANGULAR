import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { AngularWaitBarrier } from 'blocking-proxy/built/lib/angular_wait_barrier';

if (environment.production) {
  enableProdMode();
}

// instruct angular (platformBrowserDynamic) to bootstrap one of our modules,
// which in turn has a bootstrap component (AppComponent).
// This is because, a component can not be bootstrapped directly, since it is 
// always part of a module.
platformBrowserDynamic().bootstrapModule(AppModule);

