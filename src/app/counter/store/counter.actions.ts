import { createAction, props } from '@ngrx/store';

export const INCREMENT_ACTION = createAction('increment');
export const DECREMENT_ACTION = createAction('decrement');
export const RESET_ACTION = createAction('reset');
export const CUSTOM_INCREMENT_ACTION = createAction(
  'custom increment',
  props<{ count: number }>()
);
