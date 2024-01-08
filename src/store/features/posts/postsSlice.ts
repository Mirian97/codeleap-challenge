import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { createPost, deletePost, editPost, getPosts as getPostsApi } from 'services/post'
import { TPost, TPostWithoutId } from 'types/post'
import { POSTS_INITIAL_STATE } from './constants'

export const getPostsThunk = createAsyncThunk(
  'posts/getPosts',
  async (_, { rejectWithValue }) => {
    try {
      return await getPostsApi()
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)

export const createPostThunk = createAsyncThunk(
  'posts/createPost',
  async (payload: Omit<TPost, 'id'>, { rejectWithValue, dispatch }) => {
    try {
      await createPost(payload)
      return dispatch(getPostsThunk())
    } catch (error) {
      rejectWithValue(error)
    }
  }
)

export const editPostThunk = createAsyncThunk(
  'posts/editPost',
  async (
    payload: {
      id: number
      body: TPostWithoutId
    },
    { rejectWithValue, dispatch }
  ) => {
    try {
      await editPost(payload)
      return dispatch(getPostsThunk())
    } catch (error) {
      rejectWithValue(error)
    }
  }
)

export const deletePostThunk = createAsyncThunk(
  'posts/deletPost',
  async (payload: { id: number }, { rejectWithValue, dispatch }) => {
    try {
      await deletePost(payload)
      return dispatch(getPostsThunk())
    } catch (error) {
      rejectWithValue(error)
    }
  }
)

export const postSlice = createSlice({
  name: 'posts',
  initialState: POSTS_INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPostsThunk.pending, (state) => {
        state.status = 'isLoading'
      })
      .addCase(getPostsThunk.fulfilled, (state, action) => {
        state.status = 'idle'
        state.posts = action.payload.results
      })
      .addCase(getPostsThunk.rejected, (state, action) => {
        state.status = 'error'
        //TODO: handle better with this error
        state.error = action.payload as string
      })
      .addCase(createPostThunk.pending, (state) => {
        state.status = 'isLoading'
      })
      .addCase(createPostThunk.fulfilled, (state) => {
        state.status = 'idle'
      })
      .addCase(createPostThunk.rejected, (state, action) => {
        state.status = 'error'
        state.error = action.payload as string
      })
      .addCase(editPostThunk.pending, (state) => {
        state.status = 'isLoading'
      })
      .addCase(editPostThunk.fulfilled, (state) => {
        state.status = 'idle'
      })
      .addCase(editPostThunk.rejected, (state, action) => {
        state.status = 'error'
        state.error = action.payload as string
      })
      .addCase(deletePostThunk.pending, (state) => {
        state.status = 'isLoading'
      })
      .addCase(deletePostThunk.fulfilled, (state) => {
        state.status = 'idle'
      })
      .addCase(deletePostThunk.rejected, (state, action) => {
        state.status = 'error'
        state.error = action.payload as string
      })
  }
})

export default postSlice.reducer
