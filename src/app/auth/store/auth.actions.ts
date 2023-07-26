import { createAction, props } from '@ngrx/store';

import { User } from '../models/user.model';

export const LOGIN_START = '[auth page] login start';
export const LOGIN_SUCCESS = '[auth page] login success';
export const LOGIN_FAIL = '[auth page] login fail';

export const SIGNUP_START = '[sugnup page] signup start';
export const SIGNUP_SUCCESS = '[sugnup page] signup success';

export const AUTO_LOGIN = '[auth page] auto login';
export const LOGOUT_ACTION = '[auth page] logout';

export const loginStart = createAction(
  LOGIN_START,
  props<{ email: string; password: string }>()
);

export const loginSuccess = createAction(
  LOGIN_SUCCESS,
  props<{ user: User | null; redirect: boolean }>()
);

export const signupStart = createAction(
  SIGNUP_START,
  props<{ email: string; password: string }>()
);

export const signupSuccess = createAction(
  SIGNUP_SUCCESS,
  props<{ user: User; redirect: boolean }>()
);

export const autoLogin = createAction(AUTO_LOGIN);

export const logout = createAction(LOGOUT_ACTION);
