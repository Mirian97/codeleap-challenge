import { IconButton, Stack } from '@mui/material'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'
import { ReactComponent as DeleteIcon } from 'assets/delete-icon.svg'
import { ReactComponent as EditIcon } from 'assets/edit-icon.svg'
import useGlobal from 'hooks/useGlobal'
import { TPost } from 'types/post'

const StyledPostHeader = styled('header')(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  borderRadius: '16px 16px 0px 0px',
  width: '100%',
  padding: theme.spacing(3)
}))

type KPostHeader = 'title' | 'username' | 'id'

const PostHeader = ({ title, username, id }: Pick<TPost, KPostHeader>) => {
  const {
    toggleDeleteModal,
    toggleEditModal,
    username: loggedUser,
    setCurrentPost
  } = useGlobal()
  const showEditAndDelete = username === loggedUser

  const handleOpenDeleteModal = () => {
    setCurrentPost(id)
    toggleDeleteModal()
  }

  const handleOpenEditModal = () => {
    toggleEditModal()
    setCurrentPost(id)
  }

  return (
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
}

export default PostHeader
