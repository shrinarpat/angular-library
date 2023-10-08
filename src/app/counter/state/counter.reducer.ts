import { createReducer, on } from '@ngrx/store';
import {
  increment,
  decrement,
  reset,
  customIncrement,
  updateAppName,
} from './counter.action';
import { initialState } from './counter.state';
import { CounterState } from 'src/app/models/counter.model';

export const counterReducer = createReducer(
  initialState,
  on(increment, function (state: CounterState, action) {
    return {
      ...state,
      counter: state.counter + 1,
    };
  }),
  on(decrement, function (state: CounterState, action) {
    return {
      ...state,
      counter: state.counter - 1,
    };
  }),
  on(reset, function (state: CounterState, action) {
    return {
      ...state,
      counter: 0,
    };
  }),
  on(customIncrement, function (state: CounterState, action) {
    return {
      ...state,
      counter: state.counter + action.value,
    };
  }),
  on(updateAppName, (state) => {
    return { ...state, appName: 'Modified Tourer' };
  })
);
