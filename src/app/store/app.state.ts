import { counterReducer } from '../counter/state/counter.reducer';
import { CounterState } from '../models/counter.model';
import { PostsState } from '../models/posts.model';
import { postsReducer } from '../posts/state/posts.reducer';
import { sharedReducer } from './shared/shared.reducer';
import { SharedState } from './shared/shared.state';

export interface AppState {
  shared: SharedState;
}

export const rootReducer = {
  shared: sharedReducer,
};
