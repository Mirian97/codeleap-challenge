import { TPost } from 'types/post'

interface IPostsInitialState {
  posts: Array<TPost>
  status: 'isLoading' | 'idle' | 'error'
  error: string
}

export const POSTS_INITIAL_STATE: IPostsInitialState = {
  posts: [],
  status: 'error',
  error: ''
}
