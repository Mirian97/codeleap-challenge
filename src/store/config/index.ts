import { configureStore } from '@reduxjs/toolkit'
import postSlice from 'store/features/posts/postsSlice'
import userSlice from 'store/features/user/userSlice'

const store = configureStore({
  reducer: {
    post: postSlice,
    user: userSlice
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
