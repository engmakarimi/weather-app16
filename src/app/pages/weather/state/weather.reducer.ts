import { Action, createReducer, on } from '@ngrx/store';

import { Weather } from '../type';
import { WeatherActions } from './action-types';

export const Weather_FEATURE_KEY = 'weather';

export interface WeatherState {
  searchTerm: string;
  weatherData: Weather | null;
  loaded: boolean;
  error?: string | null; // last known error (if any)
  loading?: boolean;
}

export const initialWeatherState: WeatherState =
 {
    // set initial required properties
    searchTerm: '',
    weatherData:null,
    loaded: true,
  };

const reducer = createReducer(
  initialWeatherState,
  on(WeatherActions.setSearchTerm, (state, {searchTerm}) => {
    return {
     ...state,
     searchTerm,
     weatherData: null,
     loading: true,
      loaded: false
    }
  }),
  on(WeatherActions.removeSearchTerm, (state) => {
    return {
     ...state,
     searchTer:'',
     weatherData: null,
     loading: false,
     loaded: true,
     error:null
    }
  }),
  on(WeatherActions.searchSuccess, (state, {weather}) =>
   {
    return {
      ...state,
      weatherData: weather,
      loading: false,
      loaded: true
    };
   }
  ),
  on(WeatherActions.searchFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
    loaded: false,
  }))
);

export function weatherReducer(
  state: WeatherState | undefined,
  action: Action
) {
  return reducer(state, action);
}
