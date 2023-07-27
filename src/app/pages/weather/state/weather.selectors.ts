import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  WEATHER_FEATURE_KEY,
  WeatherState,
} from './weather.reducer';

// Lookup the 'Weather' feature state managed by NgRx
export const selectWeatherState =
  createFeatureSelector<WeatherState>(WEATHER_FEATURE_KEY);

  export const selectSearchTerm = createSelector(
    selectWeatherState,
    (state: WeatherState) => state.searchTerm
  );
  
  export const selectWeatherData = createSelector(
    selectWeatherState,
    (state: WeatherState) => state.weatherData
  );

  export const selectLoaded = createSelector(
    selectWeatherState,
    (state: WeatherState) => state.loaded
  );
  export const selectLoading = createSelector(
    selectWeatherState,
    (state: WeatherState) => state.loading
  );

