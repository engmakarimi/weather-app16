import { createAction, props } from '@ngrx/store';

export const authenticate = createAction(
  '[Auth/API] Authenticate',
  props<{ userName: string; password: string }>()
);

export const authenticationSuccess = createAction(
  '[Auth/API] Authentication Success',
  props<{ user: any }>()
);

export const authenticationFailure = createAction(
  '[Auth/API] Authentication Failure',
  props<any>()
);

export const authenticated = createAction('[Auth/API] Authenticated');

export const authenticatedSuccess = createAction(
  '[Auth/API] Authenticated Success',
  props<{ authenticated: boolean; user: any }>()
);

export const authenticatedFailure = createAction(
  '[Auth/API] Authenticated Failure',
  props<any>()
);

export const signOut = createAction('[Auth/API] Sign Out');
export const signOutSuccess = createAction('[Auth/API] Sign Out Success');
export const signOutFailure = createAction(
  '[Auth/API] Sign Out Failure',
  props<any>()
);
export const signUp = createAction(
  '[Auth/API] Sign Up',
  props<{ user: any }>()
);
export const signUpSuccess = createAction(
  '[Auth/API] Sign Up Success',
  props<{ user: any }>()
);
export const signUpFailure = createAction(
  '[Auth/API] Sign Up Failure',
  props<any>()
);
