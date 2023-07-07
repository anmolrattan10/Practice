import { USER } from '../models/users.model';

export interface UsersState {
  users: USER[];
}

export const initialState: UsersState = {
  users: [
    { userId: 1, userName: 'abc', userMoney: 10 },
    { userId: 2, userName: 'def', userMoney: 20 },
  ],
};
