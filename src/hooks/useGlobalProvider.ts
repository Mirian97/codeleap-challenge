/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLocalStorage } from 'react-use'
import { getPosts } from 'services/post'
import { TPost } from 'types/post'
import { messageError } from 'utils/toast'

const useGlobalContextProvider = () => {
  const navigate = useNavigate()
  const [username, setUsername, removeUsername] = useLocalStorage<string>('user')
  const [openEditModal, setOpenEditModal] = useState<boolean>(false)
  const [openDeleteModal, setOpenDeleteModal] = useState<boolean>(false)
  const [posts, setPosts] = useState<TPost[]>([])
  const [currentPost, setCurrentPost] = useState<number>(0)
  const toggleEditModal = () => setOpenEditModal(!openEditModal)
  const toggleDeleteModal = () => setOpenDeleteModal(!openDeleteModal)

  const handleGetPosts = async () => {
    try {
      const { results } = await getPosts()
      setPosts(results)
    } catch (error) {
      messageError('Unable to load posts')
    }
  }

  useEffect(() => {
    if (username) {
      navigate('/main')
      handleGetPosts()
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
    setCurrentPost,
    handleGetPosts
  }
}

export default useGlobalContextProvider
