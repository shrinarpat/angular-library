import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthService } from 'src/app/services/auth/auth.service';
import { loginStart, loginSuccess } from './auth.actions';
import { exhaustMap, map } from 'rxjs';
import { setLoading } from 'src/app/store/shared/shared.actions';
import { AppState } from 'src/app/store/app.state';
import { Store } from '@ngrx/store';

@Injectable({
  providedIn: 'root',
})
export class AuthEffects {
  constructor(
    private action$: Actions,
    private _authService: AuthService,
    private store: Store<AppState>
  ) {}

  login$ = createEffect(() => {
    return this.action$.pipe(
      ofType(loginStart),
      exhaustMap((action) => {
        //TODO: perform async operation
        return this._authService.login(action.email, action.password).pipe(
          map((data) => {
            console.log(data);
            this.store.dispatch(setLoading({ showLoading: false }));
            return loginSuccess({ user: data.data.user });
          })
        );
      })
    );
  });
}
