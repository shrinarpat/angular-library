import { Post } from './../../models/posts.model';
import { createAction, props } from '@ngrx/store';

export const addPost = createAction('[posts] addPost', props<{post: Post}>());

export const updatePost = createAction('[posts] updatePost', props<{post: Post}>())

export const deletePost = createAction('[posts] deletePost', props<{id: string}>())