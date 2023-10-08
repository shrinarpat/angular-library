import { CounterState } from "src/app/models/counter.model";

export const COUNTER_STATE_NAME = 'count';

export const initialState: CounterState = {
  counter: 0,
  appName: "Tourer"
};
