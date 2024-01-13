import { configureStore } from '@reduxjs/toolkit'
import currentPostSlice from 'store/features/currentPost/currentPostSlice'
import modalSlice from 'store/features/modal/modalSlice'
import postSlice from 'store/features/posts/postsSlice'
import userSlice from 'store/features/user/userSlice'

const store = configureStore({
  reducer: {
    post: postSlice,
    user: userSlice,
    currentPost: currentPostSlice,
    modal: modalSlice
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
