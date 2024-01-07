import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getPosts as getPostsApi } from 'services/post'
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
        console.log(action.payload)
        state.status = 'idle'
        state.posts = action.payload.results
      })
      .addCase(getPostsThunk.rejected, (state, action) => {
        state.status = 'error'
        state.error = action.payload as string
      })
  }
})

export default postSlice.reducer
