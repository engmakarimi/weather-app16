import { inject, Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { WeatherActions } from './action-types';

import * as WeatherSelectors from './weather.selectors';

@Injectable()
export class WeatherFacade {
  private readonly store = inject(Store);

  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(WeatherSelectors.selectLoaded));
  loading$ = this.store.pipe(select(WeatherSelectors.selectLoading));
  weatherData$ = this.store.pipe(select(WeatherSelectors.selectWeatherData));
  searchTerm$ = this.store.pipe(select(WeatherSelectors.selectSearchTerm));

  
  search(searchTerm:string){
    this.store.dispatch(WeatherActions.setSearchTerm({searchTerm}))
  }

  resetSearch() {
    this.store.dispatch(WeatherActions.removeSearchTerm());
  }
  
}
