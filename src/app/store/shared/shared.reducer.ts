import { createReducer, on } from '@ngrx/store';
import { sharedInitialState } from './shared.state';
import { setLoading } from './shared.actions';

export const sharedReducer = createReducer(
  sharedInitialState,
  on(setLoading, (state, action) => {
    return {
      ...state,
      showLoading: action.showLoading,
    };
  })
);
