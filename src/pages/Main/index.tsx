import { Box, Stack, styled } from '@mui/material'
import Header from 'components/Header'
import Post from 'components/Post'
import useGlobal from 'hooks/useGlobal'
import { memo } from 'react'
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
  const { posts, openEditModal } = useGlobal()
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
