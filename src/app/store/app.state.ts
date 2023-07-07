import { COUNTER } from '../counter/models/counter.model';
import { counterReducer } from '../counter/store/counter.reducer';
import { usersReducer } from '../users/store/users.reducer';
import { UsersState } from '../users/store/users.state';

export interface AppState {
  counter: COUNTER;
  users: UsersState;
}

export const appReducer = {
  counter: counterReducer,
  users: usersReducer,
};
