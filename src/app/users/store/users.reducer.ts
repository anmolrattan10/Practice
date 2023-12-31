import { Action, createReducer, on } from '@ngrx/store';

import {
  addUser,
  deleteUser,
  editUser,
  getMoney,
  sendMoney,
} from './users.actions';
import { UsersState, initialState } from './users.state';

const _usersReducer = createReducer(
  initialState,
  on(addUser, (state, action) => {
    let user = { ...action.user };
    user.userId = state.users.length + 1;
    return {
      ...state,
      users: [...state.users, user],
    };
  }),
  on(sendMoney, (state, action) => {
    let updatedUser = state.users.map((user) => {
      return action.user.userId === user.userId
        ? (user = {
            userId: user.userId,
            userName: user.userName,
            userMoney: user.userMoney + 5,
          })
        : user;
    });
    return {
      ...state,
      users: updatedUser,
    };
  }),
  on(getMoney, (state, action) => {
    const updatedUser = state.users.map((user) => {
      return action.user.userId === user.userId
        ? (user = {
            userId: user.userId,
            userName: user.userName,
            userMoney: user.userMoney - 10,
          })
        : user;
    });
    return {
      ...state,
      users: updatedUser,
    };
  }),

  on(editUser, (state, action) => {
    const updatedUser = state.users.map((user) => {
      return action.user.userId === user.userId ? action.user : user;
    });

    return {
      ...state,
      users: updatedUser,
    };
  }),
  on(deleteUser, (state, { userId }) => {
    const updatedUser = state.users.filter((user) => {
      return user.userId !== userId;
    });

    return {
      ...state,
      users: updatedUser,
    };
  })
);

export function usersReducer(state: UsersState | undefined, action: Action) {
  return _usersReducer(state, action);
}
