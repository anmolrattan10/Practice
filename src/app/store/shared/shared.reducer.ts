import { Action, createReducer, on } from '@ngrx/store';

import { initialState } from './shared.state';
import { setErrorMessage, setLoadingSpinner } from './shared.actions';
import { SharedState } from './models/shared.model';

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
