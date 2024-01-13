import { useState } from 'react'

const useGlobalContextProvider = () => {
  const [openEditModal, setOpenEditModal] = useState<boolean>(false)
  const [openDeleteModal, setOpenDeleteModal] = useState<boolean>(false)
  const toggleEditModal = () => setOpenEditModal(!openEditModal)
  const toggleDeleteModal = () => setOpenDeleteModal(!openDeleteModal)

  return {
    openEditModal,
    openDeleteModal,
    toggleEditModal,
    toggleDeleteModal
  }
}

export default useGlobalContextProvider
