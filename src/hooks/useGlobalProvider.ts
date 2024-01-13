/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from 'react'
import { TPost } from 'types/post'

const defaultPost = {
  id: 0,
  username: '',
  created_datetime: '',
  title: '',
  content: ''
}

const useGlobalContextProvider = () => {
  const [openEditModal, setOpenEditModal] = useState<boolean>(false)
  const [openDeleteModal, setOpenDeleteModal] = useState<boolean>(false)
  const [currentPost, setCurrentPost] = useState<TPost>(defaultPost)
  const toggleEditModal = () => setOpenEditModal(!openEditModal)
  const toggleDeleteModal = () => setOpenDeleteModal(!openDeleteModal)

  return {
    openEditModal,
    openDeleteModal,
    toggleEditModal,
    toggleDeleteModal,
    currentPost,
    setCurrentPost
  }
}

export default useGlobalContextProvider
