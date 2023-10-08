import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/models/auth.model';

export const LOGIN_START = '[auth page] loginStart';
export const LOGIN_SUCCESS = '[auth page] loginSuccess';
export const LOGIN_FAIL = '[auth page] loginFail';

export const loginStart = createAction(
  LOGIN_START,
  props<{ email: string; password: string }>()
);

export const loginSuccess = createAction(
  LOGIN_SUCCESS,
  props<{ user: User }>()
);
