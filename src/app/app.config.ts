import { APP_INITIALIZER, ApplicationConfig, ErrorHandler } from '@angular/core';
import { Router, provideRouter } from '@angular/router';
import { provideStore } from '@ngrx/store';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { metaReducers } from './state';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideEffects } from '@ngrx/effects';
import * as Sentry from "@sentry/angular-ivy";
import { provideAnimations } from '@angular/platform-browser/animations';


export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    provideStore({}, { metaReducers,
        // runtimeChecks: {
        //     strictStateImmutability: true,
        //     strictActionImmutability: true,
        //     strictActionSerializability: true,
        //     strictStateSerializability: true
        // }
    }),
    provideStoreDevtools(),
    provideEffects(),
    {
        provide: ErrorHandler,
        useValue: Sentry.createErrorHandler({
            showDialog: true,
        }),
    }, {
        provide: Sentry.TraceService,
        deps: [Router],
    },
    {
        provide: APP_INITIALIZER,
        useFactory: () => () => { },
        deps: [Sentry.TraceService],
        multi: true,
    },
    provideAnimations()
]
};
