import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable, inject } from '@angular/core';
import { WeatherApiService } from '../services';

import { WeatherActions } from './action-types';
import { catchError, exhaustMap, map, of, switchMap, tap } from 'rxjs';
import { WeatherFacade } from './weather.facade';
import { first } from 'rxjs/internal/operators/first';

@Injectable()
export class WeatherEffects {
  private actions$ = inject(Actions);
  private weatherApiService = inject(WeatherApiService);
  weatherFacade = inject(WeatherFacade);

  exeSearch$ = createEffect(() =>
    this.actions$.pipe(
      ofType(WeatherActions.doSearch),
      switchMap(() => {
        return this.weatherFacade.searchTerm$.pipe(first());
      }),
      exhaustMap((value) => {
        return this.weatherApiService.getWeather(value).pipe(
          map((p) => WeatherActions.searchSuccess({ weather: p })),
          catchError(({ error }) => {
            return of(WeatherActions.searchFailure(error));
          })
        );
      })
    )
  );
}
