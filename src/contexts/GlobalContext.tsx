import { Dispatch, SetStateAction, createContext } from 'react'
import { TPost } from 'types/post'
import useGlobalProvider from '../hooks/useGlobalProvider'

interface IGlobalContextData {
  openEditModal: boolean
  openDeleteModal: boolean
  toggleEditModal: () => void
  toggleDeleteModal: () => void
  currentPost: TPost
  setCurrentPost: Dispatch<SetStateAction<TPost>>
}

const GlobalContext = createContext<IGlobalContextData>({} as IGlobalContextData)

type Props = {
  children: JSX.Element
}

export const GlobalProvider = (props: Props) => {
  const globalProvider = useGlobalProvider()
  return (
    <GlobalContext.Provider value={globalProvider}>
      {props.children}
    </GlobalContext.Provider>
  )
}

export default GlobalContext
