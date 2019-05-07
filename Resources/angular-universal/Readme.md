* In angular.json, the entry for "main" must be "src/main.ts"


Run the command:

```
ng g universal --clientProject my-angular-app
```

Output of the above command would look something like:

```
CREATE src/main.server.ts (220 bytes)
CREATE src/app/app.server.module.ts (318 bytes)
CREATE src/tsconfig.server.json (219 bytes)
UPDATE package.json (1572 bytes)
UPDATE angular.json (4661 bytes)
UPDATE src/main.ts (396 bytes)
UPDATE src/app/app.module.ts (1518 bytes)
```


Changes to `package.json`:

```json
  "dependencies": {
    ....
    "@nguniversal/express-engine": "^7.1.1",
    ....
  },
```

Changes to `angular.json`:

```json
    "my-angular-app": {
      ...
      "architect": {
        "build": {
        	...
        },
        "serve": {
        	...
        },
        "extract-i18n": {
        	...
        },
        "test": {
        	...
        },
        "lint": {
        	...
        },
        "server": {
          "builder": "@angular-devkit/build-angular:server",
          "options": {
            "outputPath": "dist/my-angular-app-server",
            "main": "src/main.server.ts",
            "tsConfig": "src/tsconfig.server.json"
          },
          "configurations": {
            "production": {
              "fileReplacements": [
                {
                  "replace": "src/environments/environment.ts",
                  "with": "src/environments/environment.prod.ts"
                }
              ],
              "sourceMap": false,
              "optimization": {
                "scripts": false,
                "styles": true
              }
            }
          }
        }
      }
    },
```


Changes to `src/main.ts`:

```js

document.addEventListener('DOMContentLoaded', () => {
  platformBrowserDynamic().bootstrapModule(AppModule);
});

```

Changes to `src/app/app.module.ts`:

```js
@NgModule({
  declarations: [
    ...
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    ...
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```




## New files created

1. src/main.server.ts

```
import { enableProdMode } from '@angular/core';

import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

export { AppServerModule } from './app/app.server.module';
```


2. src/app/app.server.module.ts

```
import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
```


3. src/tsconfig.server.json

```
{
  "extends": "./tsconfig.app.json",
  "compilerOptions": {
    "outDir": "../out-tsc/app-server",
    "baseUrl": "."
  },
  "angularCompilerOptions": {
    "entryModule": "app/app.server.module#AppServerModule"
  }
}
```


