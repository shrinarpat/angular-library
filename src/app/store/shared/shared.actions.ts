import { createAction, props } from '@ngrx/store';

export const SET_LOADING = 'setLoading';

export const setLoading = createAction(SET_LOADING, props<{ showLoading: boolean }>());
