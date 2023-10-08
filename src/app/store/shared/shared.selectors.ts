import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SharedState } from './shared.state';

export const SHARED_STATE_NAME = 'shared';

export const sharedFeatureState =
  createFeatureSelector<SharedState>(SHARED_STATE_NAME);

export const getShowLoading = createSelector(
  sharedFeatureState,
  (state) => state.showLoading
);
