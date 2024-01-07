import { Box, Stack, styled } from '@mui/material'
import Header from 'components/Header'
import Post from 'components/Post'
import useGlobal from 'hooks/useGlobal'
import { memo, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from 'store/config/hook'
import { getPostsThunk } from 'store/features/posts/postsSlice'
import { StyledBackdrop } from 'theme/backdrop'
import { TPost } from 'types/post'
import DeleteModal from './DeleteModal'
import PostForm from './PostForm'

const StyledMainPage = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
  width: 800
}))

const Main = () => {
  const { openEditModal } = useGlobal()
  const { posts } = useAppSelector((state) => state.post)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getPostsThunk())
  }, [dispatch])

  return (
    <>
      <StyledMainPage>
        <Header />
        <Stack p={3} gap={3}>
          <PostForm type='create' />
          {posts.map((post: TPost) => (
            <Post key={post.id} post={post} />
          ))}
        </Stack>
      </StyledMainPage>
      <StyledBackdrop open={openEditModal}>
        <PostForm type='edit' />
      </StyledBackdrop>
      <DeleteModal />
    </>
  )
}

export default memo(Main)
