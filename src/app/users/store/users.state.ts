import { USER } from '../models/users.model';

export interface UsersState {
  users: USER[];
}

export const initialState: UsersState = {
  users: [],
};
