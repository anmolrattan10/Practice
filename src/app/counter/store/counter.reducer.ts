import { Action, createReducer, on } from '@ngrx/store';

import {
  CUSTOM_INCREMENT_ACTION,
  DECREMENT_ACTION,
  INCREMENT_ACTION,
  RESET_ACTION,
} from './counter.actions';
import { initialState } from './counter.state';
import { COUNTER } from '../models/counter.model';

const _counterReducer = createReducer(
  initialState,
  on(INCREMENT_ACTION, (state) => {
    return {
      ...state,
      counter: state.counter + 1,
    };
  }),
  on(DECREMENT_ACTION, (state) => {
    return {
      ...state,
      counter: state.counter - 1,
    };
  }),
  on(RESET_ACTION, (state) => {
    return {
      ...state,
      counter: 0,
    };
  }),
  on(CUSTOM_INCREMENT_ACTION, (state, action) => {
    console.log(action);
    return {
      ...state,
      counter: state.counter + action.count,
    };
  })
);

export function counterReducer(state: COUNTER | undefined, action: Action) {
  return _counterReducer(state, action);
}
