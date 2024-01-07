/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLocalStorage } from 'react-use'
import { TPost } from 'types/post'

const defaultPost = {
  id: 0,
  username: '',
  created_datetime: '',
  title: '',
  content: ''
}

const useGlobalContextProvider = () => {
  const navigate = useNavigate()
  const [username, setUsername, removeUsername] = useLocalStorage<string>('user')
  const [openEditModal, setOpenEditModal] = useState<boolean>(false)
  const [openDeleteModal, setOpenDeleteModal] = useState<boolean>(false)
  const [posts, setPosts] = useState<TPost[]>([])
  const [currentPost, setCurrentPost] = useState<TPost>(defaultPost)
  const toggleEditModal = () => setOpenEditModal(!openEditModal)
  const toggleDeleteModal = () => setOpenDeleteModal(!openDeleteModal)

  useEffect(() => {
    if (username) {
      navigate('/main')
    }
  }, [username])

  return {
    username,
    setUsername,
    removeUsername,
    openEditModal,
    openDeleteModal,
    toggleEditModal,
    toggleDeleteModal,
    posts,
    setPosts,
    currentPost,
    setCurrentPost
  }
}

export default useGlobalContextProvider
