import { createReducer, on } from '@ngrx/store';
import { postsInitialState } from './posts.state';
import { PostsState } from 'src/app/models/posts.model';
import { addPost, deletePost, updatePost } from './posts.action';

export const postsReducer = createReducer(
  postsInitialState,
  on(addPost, (state, action) => {
    const id = (state.posts.length + 1).toString();
    const post = { ...action.post, id: id };
    return {
      ...state,
      posts: [...state.posts, post],
    };
  }),
  on(updatePost, (state, action) => {
    const updatedPosts = state.posts.map((post) => {
      return post.id === action.post.id ? action.post : post;
    });

    return {
      ...state,
      posts: updatedPosts,
    };
  }),
  on(deletePost, (state, action) => {
    const updatedPosts = state.posts.filter((post) => post.id !== action.id);
    return {
      ...state,
      posts: updatedPosts
    }
  })
);

// export const postsReducer = function (state: PostsState, action: any) {
//   return _postsReducer(state, action);
// };
