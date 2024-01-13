import { IconButton, Stack } from '@mui/material'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'
import { ReactComponent as DeleteIcon } from 'assets/delete-icon.svg'
import { ReactComponent as EditIcon } from 'assets/edit-icon.svg'
import useGlobal from 'hooks/useGlobal'
import { useAppDispatch, useAppSelector } from 'store/config/hook'
import { setCurrentPost } from 'store/features/currentPost/currentPostSlice'
import { TPost } from 'types/post'
import { getInterval } from 'utils/date'

const StyledPost = styled(Paper)(({ theme }) => ({
  border: `1px solid ${theme.palette.grey[200]}`,
  borderTop: 'none',
  borderRadius: '0 0 16px 16px',
  width: '100%'
}))

const StyledPostHeader = styled('header')(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  borderRadius: '16px 16px 0px 0px',
  width: '100%',
  padding: theme.spacing(3)
}))

interface PostProps {
  post: TPost
}

const Post = ({ post }: PostProps) => {
  const { toggleDeleteModal, toggleEditModal } = useGlobal()
  const loggedUser = useAppSelector((state) => state.user.name)
  const { title, content, username, created_datetime } = post
  const showEditAndDelete = username === loggedUser
  const dispatch = useAppDispatch()

  const handleOpenDeleteModal = () => {
    dispatch(setCurrentPost(post))
    toggleDeleteModal()
  }

  const handleOpenEditModal = () => {
    toggleEditModal()
    dispatch(setCurrentPost(post))
  }

  const renderPostHeading = () => (
    <StyledPostHeader>
      <Stack direction='row' justifyContent='space-between' alignItems='center'>
        <Typography variant='h3' color='white'>
          {title}
        </Typography>
        {showEditAndDelete && (
          <Stack direction='row' gap={2}>
            <IconButton onClick={handleOpenDeleteModal}>
              <DeleteIcon />
            </IconButton>
            <IconButton onClick={handleOpenEditModal}>
              <EditIcon />
            </IconButton>
          </Stack>
        )}
      </Stack>
    </StyledPostHeader>
  )

  return (
    <div>
      {renderPostHeading()}
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
}
export default Post
