import { createAction, props } from '@ngrx/store';

import { USER } from '../models/users.model';

export const ADD_USER_ACTION = '[users page] add user';
export const SEND_MONEY_ACTION = '[users page] send money';
export const GET_MONEY_ACTION = '[users page] get money';
export const EDIT_USER_ACTION = '[users page] edit user';
export const DELETE_USER_ACTION = '[users page] delete user';

export const addUser = createAction(ADD_USER_ACTION, props<{ user: USER }>());

export const sendMoney = createAction(
  SEND_MONEY_ACTION,
  props<{ user: USER }>()
);

export const getMoney = createAction(GET_MONEY_ACTION, props<{ user: USER }>());

export const editUser = createAction(EDIT_USER_ACTION, props<{ user: USER }>());

export const deleteUser = createAction(
  DELETE_USER_ACTION,
  props<{ userId: number | undefined }>()
);
