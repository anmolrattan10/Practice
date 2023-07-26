import { Action, createReducer, on } from '@ngrx/store';

import { initialState } from './shared.state';
import { SharedState } from './models/shared.model';
import { setErrorMessage, setLoadingSpinner } from './shared.actions';

const sharedReducer = createReducer(
  initialState,
  on(setLoadingSpinner, (state, action) => {
    return {
      ...state,
      showLoading: action.status,
    };
  }),
  on(setErrorMessage, (state, action) => {
    return {
      ...state,
      errorMessage: action.message,
    };
  })
);

export function SharedReducer(state: SharedState | undefined, action: Action) {
  return sharedReducer(state, action);
}
