import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Post, PostsState } from 'src/app/models/posts.model';
import { POSTS_STATE_NAME } from './posts.state';

export const getPostsState = createFeatureSelector<PostsState>(POSTS_STATE_NAME);

export const getPosts = createSelector(getPostsState, (state) => state.posts);

export const getPostById = function (id: string | null) {
  return createSelector(getPostsState, (state: PostsState) => {
    const post = state.posts.find((post: Post) => post.id === id);
    return post ? post : null;
  });
};
