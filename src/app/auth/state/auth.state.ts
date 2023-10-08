import { User } from 'src/app/models/auth.model';

export const AUTH_STATE_NAME = 'auth';

export interface AuthState {
  user: User | null;
}

export const AuthInitialState: AuthState = {
  user: null,
};
