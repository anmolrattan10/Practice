import { Action, createReducer, on } from '@ngrx/store';

import { AuthState, initialState } from './auth.state';
import { loginSuccess, logout, signupSuccess } from './auth.actions';

const authReducer = createReducer(
  initialState,
  on(loginSuccess, (state, action) => {
    return {
      ...state,
      user: action.user,
    };
  }),
  on(signupSuccess, (state, action) => {
    return {
      ...state,
      user: action.user,
    };
  }),
  on(logout, (state) => {
    return {
      ...state,
      user: null,
    };
  })
);

export function AuthReducer(state: AuthState | undefined, action: Action) {
  return authReducer(state, action);
}
