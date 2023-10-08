import { PostsState } from "src/app/models/posts.model";

export const POSTS_STATE_NAME = 'posts';

export const postsInitialState: PostsState = {
  posts: [
    {
      id: '1',
      title: 'Sample post1',
      description: 'Sample post 1 description',
    },
    {
      id: '2',
      title: 'Sample post2',
      description: 'Sample post 2 description',
    },
  ],
};
