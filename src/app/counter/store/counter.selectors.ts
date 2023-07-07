import { createFeatureSelector, createSelector } from '@ngrx/store';
import { COUNTER } from '../models/counter.model';

const getCounterState = createFeatureSelector<COUNTER>('counter');

export const getCounter = createSelector(getCounterState, (state) => {
  return state.counter;
});
