import { SharedReducer } from './shared/shared.reducer';
import { SharedState } from './shared/models/shared.model';
import { SHARED_STATE_NAME } from './shared/shared.selector';
import { AUTH_STATE_NAME } from '../auth/store/auth.selectors';
import { AuthState } from '../auth/store/auth.state';
import { AuthReducer } from '../auth/store/auth.reducer';

export interface AppState {
  [SHARED_STATE_NAME]: SharedState;
  [AUTH_STATE_NAME]: AuthState;
}

export const appReducer = {
  [SHARED_STATE_NAME]: SharedReducer,
  [AUTH_STATE_NAME]: AuthReducer,
};
