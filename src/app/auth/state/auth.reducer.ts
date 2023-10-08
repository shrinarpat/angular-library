import { createReducer, on } from '@ngrx/store';
import { AuthInitialState, AuthState } from './auth.state';
import { loginStart, loginSuccess } from './auth.actions';

export const AuthReducer = createReducer(
  AuthInitialState,
  on(loginStart, (state, action) => {
    console.log(action);
    return { ...state };
  }),
  on(loginSuccess, (state, action) => {
    return {
      ...state,
      user: action.user,
    };
  })
);
