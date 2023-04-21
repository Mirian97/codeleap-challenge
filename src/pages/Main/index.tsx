import { Box, Stack, styled } from '@mui/material'
import CreatePost from 'components/CreatePost'
import Header from 'components/Header'
import Post from 'components/Post'
import useGlobal from 'hooks/useGlobal'
import { memo } from 'react'
import { TPost } from 'types/post'
import DeleteModal from './DeleteModal'
import EditModal from './EditModal'

const StyledMainPage = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
  width: 800
}))

const Main = () => {
  const { posts } = useGlobal()
  return (
    <>
      <StyledMainPage>
        <Header />
        <Stack direction='column' p={3} gap={3}>
          <CreatePost />
          {posts.map(({ id, title, username, created_datetime, content }: TPost) => (
            <Post
              key={id}
              id={id}
              title={title}
              username={username}
              created_datetime={created_datetime}
              content={content}
            />
          ))}
        </Stack>
      </StyledMainPage>
      <DeleteModal />
      <EditModal />
    </>
  )
}

export default memo(Main)
