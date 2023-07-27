import { provideEffects } from '@ngrx/effects';
import { Routes } from '@angular/router';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { LoginLayoutComponent } from './pages/login';
import { provideState } from '@ngrx/store';
import {
  AUTH_FEATURE_KEY,
  authReducer,
} from './pages/login/state/auth.reducer';
import { AuthEffects } from './pages/login/state/auth.effects';
import { WEATHER_FEATURE_KEY, WeatherEffects, WeatherFacade, weatherReducer } from './pages/weather/state';

export const routes: Routes = [
  {
    path: 'login',
    providers: [
      provideState({ name: AUTH_FEATURE_KEY, reducer: authReducer }),
      provideEffects(AuthEffects),
    ],
    component: LoginLayoutComponent,
  },
  { path: '', pathMatch: 'full', redirectTo: '/weather' },
  {
    path: '',
    component: MainLayoutComponent,
    //canActivateChild:[authGuard],
    children: [
      {
        
        path: 'weather',
        loadComponent: () =>
          import(
            './pages/weather/weather-layout/weather-layout.component'
          ).then((m) => m.WeatherLayoutComponent),
          providers: [
            WeatherFacade,
            provideState({ name: WEATHER_FEATURE_KEY, reducer: weatherReducer }),
            provideEffects(WeatherEffects),
          ]
      },
    ],
  },
];
