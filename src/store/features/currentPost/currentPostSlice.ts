import { createSlice } from '@reduxjs/toolkit'
import { CURRENT_POST_INITIAL_STATE } from './constants'

export const currentPostSlice = createSlice({
  name: 'currentPost',
  initialState: CURRENT_POST_INITIAL_STATE,
  reducers: {}
})

export default currentPostSlice.reducer
