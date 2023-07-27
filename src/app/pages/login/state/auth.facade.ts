import { inject, Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';

import * as AuthActions from './auth.actions';
import * as AuthSelectors from './auth.selectors';


@Injectable()
export class AuthFacade {
  private readonly store = inject(Store);


  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */

  isAuthLoaded$ = this.store.pipe(select(AuthSelectors.selectIsLoaded));

  isAuthenticationLoading$ = this.store.pipe(
    select(AuthSelectors.selectIsAuthenticationLoading)
  );

  isAuthenticated$ = this.store.pipe(
    select(AuthSelectors.selectIsAuthenticated)
  );

  authenticatedFailure$ = this.store.pipe(
    select(AuthSelectors.selectIsAuthenticated)
  );
  authenticatedUser$=this.store.pipe(
    select(AuthSelectors.selectAuthenticatedUser)
  )

  // authenticatedSuccess$ = this.store.pipe(select(AuthSelectors.authenticated));
  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  // init() {
  //   this.store.dispatch(AuthActions.initAuth());
  // }

  // authenticate(){
  //   this.store.dispatch(AuthActions.authenticate)
  // }

  authenticate(data: never) {
    this.store.dispatch(AuthActions.authenticate(data));
  }

  signOut() {
    this.store.dispatch(AuthActions.signOut());
  }

  authenticated() {
    this.store.dispatch(AuthActions.authenticated());
  }

  
}
