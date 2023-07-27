import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  catchError,
  debounceTime,
  filter,
  map,
  of,
  switchMap,
  tap,
} from 'rxjs';
import * as AuthActions from './auth.actions';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthApiService } from '../services';

@Injectable()
export class AuthEffects {
  private actions$ = inject(Actions);
  private authService = inject(AuthApiService);
  private activatedRoute = inject(ActivatedRoute);
  private router = inject(Router);

  authenticate$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.authenticate),
      // switchMap(({ userName, password }) =>
      //   this.authService.authenticate(userName, password).pipe(
      //     map((user) => AuthActions.authenticationSuccess({ user })),
      //     catchError((error) =>
      //       of(AuthActions.authenticationFailure({ error }))
      //     )
      //   )
      // )
    )
  );

  authenticated$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.authenticated),
      // switchMap(() =>
      //   this.authService.authenticated().pipe(
      //     filter((user) => !!user),
      //     map((user) =>
      //       AuthActions.authenticatedSuccess({
      //         authenticated: user !== null,
      //         user: user,
      //       })
      //     ),
      //     catchError((error) => of(AuthActions.authenticatedFailure({ error })))
      //   )
      // )
    )
  );

  authenticatedFailure$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.authenticatedFailure),
        switchMap(() =>
          this.activatedRoute.fragment.pipe(
            filter((fragment) => !!fragment),
            tap(() => this.router.navigate([]))
          )
        )
      ),
    {
      dispatch: false,
    }
  );

  signOut$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.signOut),
      // switchMap(() =>
      //   this.authService.signout().pipe(
      //     map((value) =>{  
      //       console.log('signOutSuccess')
      //       return AuthActions.signOutSuccess()}),
      //     catchError((error) => of(AuthActions.signOutFailure({ error })))
      //   )
      // )
    )
  );

  signOutSuccess$=createEffect(() =>
  this.actions$.pipe(
    ofType(AuthActions.signOutSuccess),
    switchMap(() =>  { 
     return this.router.navigate(['auth','login'])}
    )),
    {
      dispatch: false,
    }
    )
}
