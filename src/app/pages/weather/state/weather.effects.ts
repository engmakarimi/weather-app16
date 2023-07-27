import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable, inject } from '@angular/core';
import { WeatherApiService } from '../services';

import { WeatherActions } from './action-types';
import { catchError, map, of, switchMap } from 'rxjs';

@Injectable()
export class WeatherEffects {
  private actions$ = inject(Actions);
  private weatherApiService = inject(WeatherApiService);

  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(WeatherActions.setSearchTerm),
      switchMap(({ searchTerm }) =>
        this.weatherApiService.getWeather(searchTerm).pipe(
          map((data:any) => {
            return WeatherActions.searchSuccess({weather:data});
          }),
          catchError((error) => {
            console.error('Error', error);
            return of(WeatherActions.searchFailure({ error}))
          })
          )
      )
    )
  );
}
