import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable, inject } from '@angular/core';
import { WeatherApiService } from '../services';

import { WeatherActions } from './action-types';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { WeatherFacade } from './weather.facade';
import { first } from 'rxjs/internal/operators/first';

@Injectable()
export class WeatherEffects {
  private actions$ = inject(Actions);
  private weatherApiService = inject(WeatherApiService);
  weatherFacade=inject(WeatherFacade);

  search$ = createEffect(() =>
    this.actions$.pipe(
      ofType(WeatherActions.doSearch),
      switchMap(() => {
        return this.weatherFacade.searchTerm$.pipe(first());
      }),
      switchMap(( searchTerm ) =>
        this.weatherApiService.getWeather(searchTerm).pipe(
          tap((data:any) => {
            return WeatherActions.searchSuccess({weather:data});
          }),
          catchError((error) => {
            console.error('Error', error);
            return of(WeatherActions.searchFailure( error))
          })
          )
      )
    )
  );
}
