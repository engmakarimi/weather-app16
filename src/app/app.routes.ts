import { Routes } from '@angular/router';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { LoginLayoutComponent } from './pages/login';

export const routes: Routes = [
    {
      path: 'login',
      component: LoginLayoutComponent,
    },
    { path: '', pathMatch: 'full', redirectTo: '/weather' },
    {
      path: '',
      component:MainLayoutComponent,
      //canActivateChild:[authGuard],
      children: [
        {
          path: 'weather',
          loadComponent: () =>
            import(
              './pages/weather/weather-layout/weather-layout.component'
            ).then((m) => m.WeatherLayoutComponent),
        },
      
      ],
    },
   
  ];