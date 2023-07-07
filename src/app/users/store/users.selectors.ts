import { createFeatureSelector, createSelector } from '@ngrx/store';

import { UsersState } from './users.state';

const getUserState = createFeatureSelector<UsersState>('users');

export const getUsers = createSelector(getUserState, (state) => {
  return state.users;
});

export const getUserById = createSelector(
  getUserState,
  (state: any, props: any) => {
    return state.users.find((user: any) => user.userId === props.userId);
  }
);
