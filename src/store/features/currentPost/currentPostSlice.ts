import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { TPost } from 'types/post'
import { CURRENT_POST_INITIAL_STATE } from './constants'

export const currentPostSlice = createSlice({
  name: 'currentPost',
  initialState: CURRENT_POST_INITIAL_STATE as TPost,
  reducers: {
    setCurrentPost: (_, { payload }: PayloadAction<TPost>) => {
      return payload
    }
  }
})

export const { setCurrentPost } = currentPostSlice.actions
export default currentPostSlice.reducer
