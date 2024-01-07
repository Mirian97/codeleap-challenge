import { createSlice } from '@reduxjs/toolkit'

export const postsSlice = createSlice({
  name: 'post',
  initialState: {},
  reducers: {
    getPosts: (state, action) => {},
    addPost: (state, action) => {},
    editPost: (state, action) => {},
    deletePost: (state, action) => {}
  }
})

//here where I create action creators
export const { getPosts, addPost, editPost, deletePost } = postsSlice.actions

export default postsSlice.reducer
