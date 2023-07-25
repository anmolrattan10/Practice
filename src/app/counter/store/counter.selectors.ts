import { createFeatureSelector, createSelector } from '@ngrx/store';

import { COUNTER } from '../models/counter.model';

export const COUNTER_STATE_NAME = 'counter';

const getCounterState = createFeatureSelector<COUNTER>(COUNTER_STATE_NAME);

export const getCounter = createSelector(getCounterState, (state) => {
  return state.counter;
});
