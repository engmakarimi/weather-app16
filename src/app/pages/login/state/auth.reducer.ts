import { Action, createReducer, on } from '@ngrx/store';

import * as AuthActions from './auth.actions';

export const AUTH_FEATURE_KEY = 'auth';

export interface AuthState {
  authenticated: boolean;

  // error message
  error?: string;

  // true if we have attempted existing auth session
  loaded: boolean;

  // true when loading
  loading: boolean;

  // the authenticated user
  user?: any;
}

export interface AuthPartialState {
  readonly [AUTH_FEATURE_KEY]: AuthState;
}

// export const authAdapter: EntityAdapter<AuthEntity> =
//   createEntityAdapter<AuthEntity>();

export const initialAuthState: AuthState = {
  loaded: false,
  authenticated: false,
  loading: false,
};

const reducer = createReducer(
  initialAuthState,
  on(AuthActions.authenticate, (state) =>
    Object.assign({}, state, {
      loading: true,
    })
  ),
  on(AuthActions.authenticatedFailure, (state, { error }) =>
    Object.assign({}, state, {
      authenticated: false,
      error: error.message,
      loaded: true,
      loading: false,
    })
  ),
  on(AuthActions.authenticatedSuccess, (state, { authenticated, user }) =>
    Object.assign({}, state, {
      authenticated: authenticated,
      loaded: true,
      user: user,
      loading: false,
    })
  ),
  on(AuthActions.authenticationSuccess, (state, { user }) =>
    Object.assign({}, state, {
      authenticated: true,
      loaded: true,
      loading: false,
      user: user,
    })
  ),
  on(AuthActions.authenticationFailure, (state, { error }) =>
    Object.assign({}, state, {
      authenticated: false,
      error: error.message,
      loading: false,
      loaded: true,
    })
  ),
  on(AuthActions.authenticatedSuccess, (state, { authenticated, user }) =>
    Object.assign({}, state, {
      authenticated: authenticated,
      loaded: true,
      user: user,
    })
  ),
  on(AuthActions.signOutFailure, (state, { error }) =>
    Object.assign({}, state, {
      authenticated: true,
      error: error.message,
      user: undefined,
    })
  ),
  on(AuthActions.signOutSuccess, (state) =>
    Object.assign({}, state, {
      authenticated: false,
      error: undefined,
      user: undefined,
    })
  )
);

export function authReducer(state: AuthState | undefined, action: Action) {
  return reducer(state, action);
}

/**
 * Returns true if the user is authenticated.
 * @function isAuthenticated
 * @param {State} state
 * @returns {boolean}
 */
export const isAuthenticated = (state: AuthState) => state.authenticated;

/**
 * Returns true if the authenticated has loaded.
 * @function isAuthenticatedLoaded
 * @param {State} state
 * @returns {boolean}
 */
export const isAuthenticatedLoaded = (state: AuthState) => state.loaded;

/**
 * Return the users state
 * @function getAuthenticatedUser
 * @param {State} state
 * @returns {User}
 */
export const getAuthenticatedUser = (state: AuthState) => state.user;

/**
 * Returns the authentication error.
 * @function getAuthenticationError
 * @param {State} state
 * @returns {Error}
 */
export const getAuthenticationError = (state: AuthState) => state.error;

/**
 * Returns true if request is in progress.
 * @function isLoading
 * @param {State} state
 * @returns {boolean}
 */
export const isLoading = (state: AuthState) => state.loading;
export const isLoaded = (state: AuthState) => state.loaded;

/**
 * Returns the sign out error.
 * @function getSignOutError
 * @param {State} state
 * @returns {Error}
 */
export const getSignOutError = (state: AuthState) => state.error;

/**
 * Returns the sign up error.
 * @function getSignUpError
 * @param {State} state
 * @returns {Error}
 */
export const getSignUpError = (state: AuthState) => state.error;
