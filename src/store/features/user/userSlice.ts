import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { removeItem, setItem } from 'utils/storage'
import { USER_INITIAL_STATE } from './constants'

const userSlice = createSlice({
  name: 'user',
  initialState: USER_INITIAL_STATE,
  reducers: {
    setName: (state, { payload }: PayloadAction<string>) => {
      setItem('user', payload)
      state.name = payload
    },
    removeName: (state) => {
      removeItem('user')
      state.name = ''
    }
  }
})

export const { setName, removeName } = userSlice.actions
export default userSlice.reducer
