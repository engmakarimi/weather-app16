import { createAction, props } from '@ngrx/store';
import { Weather } from '../type';
export const setSearchTerm = createAction(
  '[weather search ] Set Search Term',
  props<{ searchTerm: string }>()
);
export const doSearch = createAction(
    '[weather search button ] Do Search '
   
  );
export const searchFailure = createAction(
    '[weather API] search weather Failure',
    props<{ error: any }>()
  );
  export const searchSuccess = createAction(
    '[weather API] search weather successful',
    props<{ weather: Weather }>()
  );
  export const removeSearchTerm = createAction(
    '[weather Search] remove search Term and Data'
  );