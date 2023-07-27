import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  AUTH_FEATURE_KEY,
  AuthState,
  getAuthenticatedUser,
  getAuthenticationError,
  getSignOutError,
  isAuthenticated,
  isLoaded,
  isLoading,
} from './auth.reducer';

// Lookup the 'Auth' feature state managed by NgRx
export const selectAuthState =
  createFeatureSelector<AuthState>(AUTH_FEATURE_KEY);

export const selectAuthenticatedUser = createSelector(
  selectAuthState,
  getAuthenticatedUser
);
export const selectAuthenticationError = createSelector(
  selectAuthState,
  getAuthenticationError
);

export const selectIsAuthenticated = createSelector(
  selectAuthState,
  isAuthenticated
);

export const selectIsAuthenticationLoading = createSelector(
  selectAuthState,
  isLoading
);

export const selectIsLoaded = createSelector(selectAuthState, isLoaded);

export const selectSignOutError = createSelector(
  selectAuthState,
  getSignOutError
);
