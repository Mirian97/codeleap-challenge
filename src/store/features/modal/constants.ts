export type TModalName = 'edit' | 'delete'

export interface ITypeModal {
  modalName: TModalName
}

export interface IModalState {
  isOpen: boolean
}

export type IModalsState = {
  [key in TModalName]: IModalState
}

export const MODAL_INITIAL_STATE: IModalsState = {
  edit: { isOpen: false },
  delete: { isOpen: false }
}
