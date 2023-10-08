import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CounterState } from "src/app/models/counter.model";
import { COUNTER_STATE_NAME } from './counter.state';

export const getCounterFeatureState =
  createFeatureSelector<CounterState>(COUNTER_STATE_NAME);

export const getCounter = createSelector(
  getCounterFeatureState,
  function (state) {
    return state.counter;
  }
);

export const getAppName = createSelector(
  getCounterFeatureState,
  (state) => state.appName
);
