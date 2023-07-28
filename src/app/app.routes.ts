import { provideEffects } from '@ngrx/effects';
import { Routes } from '@angular/router';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { LoginLayoutComponent } from './pages/login';
import { provideState } from '@ngrx/store';

import { WEATHER_FEATURE_KEY, WeatherEffects, WeatherFacade, weatherReducer } from './pages/weather/state';

export const routes: Routes = [
  {
    path: 'login',
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
