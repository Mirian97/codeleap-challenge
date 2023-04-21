import { Stack } from '@mui/material'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'
import { TPost } from 'types/post'
import { getInterval } from 'utils/date'
import PostHeader from './PostHeader'

const StyledPost = styled(Paper)(({ theme }) => ({
  border: `1px solid ${theme.palette.grey[200]}`,
  borderTop: 'none',
  borderRadius: '0 0 16px 16px',
  width: '100%'
}))

const Post = ({ title, username, created_datetime, content, id }: TPost) => (
  <div>
    <PostHeader title={title} username={username} id={id} />
    <StyledPost elevation={0}>
      <Stack p={3} gap={2}>
        <Stack direction='row' justifyContent='space-between'>
          <Typography variant='body1' fontWeight={700} color='grey.100'>
            @{username}
          </Typography>
          <Typography variant='body1' color='grey.100'>
            {getInterval(created_datetime)}
          </Typography>
        </Stack>
        <Typography variant='body1'>{content}</Typography>
      </Stack>
    </StyledPost>
  </div>
)

export default Post
