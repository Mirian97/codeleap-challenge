import { Button, Stack } from '@mui/material'
import Modal from 'components/Modal'
import useGlobal from 'hooks/useGlobal'
import { deletePost } from 'services/post'
import { StyledBackdrop } from 'theme/backdrop'
import { messageError, messageSuccess } from 'utils/toast'

const DeleteModal = () => {
  const { openDeleteModal, toggleDeleteModal, currentPost, handleGetPosts } = useGlobal()

  const handleDelete = async () => {
    try {
      await deletePost(currentPost)
      toggleDeleteModal()
      handleGetPosts()
      messageSuccess('Post was deleted')
    } catch (error) {
      messageError('Post was not deleted')
    }
  }

  return (
    <StyledBackdrop open={openDeleteModal}>
      <Modal title='Are you sure you want to delete this item?'>
        <Stack direction='row' justifyContent='flex-end' gap={2} mt={5}>
          <Button variant='outlined' color='secondary' onClick={toggleDeleteModal}>
            Cancel
          </Button>
          <Button variant='contained' color='error' onClick={handleDelete}>
            Delete
          </Button>
        </Stack>
      </Modal>
    </StyledBackdrop>
  )
}

export default DeleteModal
