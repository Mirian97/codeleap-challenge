import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { removeItem, setItem } from 'utils/storage'
import { USER_INITIAL_STATE } from './constants'

const userSlice = createSlice({
  name: 'user',
  initialState: USER_INITIAL_STATE,
  reducers: {
    setUser: (state, { payload }: PayloadAction<string>) => {
      setItem('user', payload)
      state.name = payload
    },
    removeUser: (state) => {
      removeItem('user')
      state.name = ''
    }
  }
})

export const { setUser, removeUser } = userSlice.actions
export default userSlice.reducer
