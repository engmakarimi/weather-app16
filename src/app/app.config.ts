import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideStore } from '@ngrx/store';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { metaReducers } from './state';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { AUTH_FEATURE_KEY, authReducer } from './pages/login/state/auth.reducer';
import { provideEffects } from '@ngrx/effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    provideStore({},{metaReducers,
      runtimeChecks : {
        strictStateImmutability: true,
        strictActionImmutability: true,
        strictActionSerializability: true,
        strictStateSerializability:true
    }
    }),
    provideStoreDevtools(),
    provideEffects(),
  
  ]
};
