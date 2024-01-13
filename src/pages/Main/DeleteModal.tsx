import { Button, Stack } from '@mui/material'
import Modal from 'components/Modal'
import useGlobal from 'hooks/useGlobal'
import { useAppDispatch, useAppSelector } from 'store/config/hook'
import { deletePostThunk } from 'store/features/posts/postsSlice'
import { StyledBackdrop } from 'theme/backdrop'
import { messageError, messageSuccess } from 'utils/toast'

const DeleteModal = () => {
  const { openDeleteModal, toggleDeleteModal } = useGlobal()
  const currentPost = useAppSelector((state) => state.currentPost)
  const dispatch = useAppDispatch()

  const handleDelete = async () => {
    try {
      dispatch(deletePostThunk({ id: currentPost.id }))
      toggleDeleteModal()
      messageSuccess('Post was deleted')
    } catch (error) {
      messageError('Post was not deleted')
    }
  }

  return (
    <StyledBackdrop open={openDeleteModal}>
      <Modal title='Are you sure you want to delete this item?' width={660}>
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
