import { createFeatureSelector, createSelector } from '@ngrx/store';

import { UsersState } from './users.state';

const getUserState = createFeatureSelector<UsersState>('users');

export const getUsers = createSelector(getUserState, (state) => {
  return state.users;
});

export const getUserById = (userId: number) =>
  createSelector(getUserState, (state) => {
    let editedUser = state.users.find((user) => {
      return user.userId == userId;
    });
    return editedUser;
  });
