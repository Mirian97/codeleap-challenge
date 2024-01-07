import { configureStore } from '@reduxjs/toolkit'
import postsSlice from 'store/features/posts/postsSlice'

const store = configureStore({
  reducer: {
    post: postsSlice
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
