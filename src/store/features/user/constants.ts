import { getItem } from 'utils/storage'

export interface IUserInitialState {
  name: string
}

export const USER_INITIAL_STATE: IUserInitialState = {
  name: getItem('user') ?? ''
}
