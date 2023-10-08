import { createAction, props } from '@ngrx/store';

export const increment = createAction('[Counter component] increment');
export const decrement = createAction('[Counter component] decrement');
export const reset = createAction('[Counter component] reset');

export const customIncrement = createAction(
  '[Counter component] customIncrement',
  props<{ value: number }>()
);

export const updateAppName = createAction('[Counter component] updateAppName');
