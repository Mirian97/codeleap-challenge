import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { ITypeModal, MODAL_INITIAL_STATE } from './constants'

export const modalSlice = createSlice({
  name: 'modalSlice',
  initialState: MODAL_INITIAL_STATE,
  reducers: {
    openModal: (state, action: PayloadAction<ITypeModal>) => {
      const { modalName } = action.payload
      state[modalName] = {
        isOpen: true
      }
    },
    closeModal: (state, action: PayloadAction<ITypeModal>) => {
      const { modalName } = action.payload
      state[modalName] = {
        isOpen: false
      }
    }
  }
})

export const { openModal, closeModal } = modalSlice.actions
export default modalSlice.reducer
