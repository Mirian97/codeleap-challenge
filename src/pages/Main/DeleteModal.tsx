import { Button, Stack } from '@mui/material'
import Modal from 'components/Modal'
import { useAppDispatch, useAppSelector } from 'store/config/hook'
import { closeModal } from 'store/features/modal/modalSlice'
import { deletePostThunk } from 'store/features/posts/postsSlice'
import { StyledBackdrop } from 'theme/backdrop'
import { messageError, messageSuccess } from 'utils/toast'

const DeleteModal = () => {
  const dispatch = useAppDispatch()
  const currentPost = useAppSelector((state) => state.currentPost)
  const isOpenDeleteModal = useAppSelector((state) => state.modal.delete.isOpen)
  const closeDeleteModal = () => dispatch(closeModal({ modalName: 'delete' }))

  const handleDelete = async () => {
    try {
      dispatch(deletePostThunk({ id: currentPost.id }))
      closeDeleteModal()
      messageSuccess('Post was deleted')
    } catch (error) {
      messageError('Post was not deleted')
    }
  }

  return (
    <StyledBackdrop open={isOpenDeleteModal}>
      <Modal title='Are you sure you want to delete this item?' width={660}>
        <Stack direction='row' justifyContent='flex-end' gap={2} mt={5}>
          <Button variant='outlined' color='secondary' onClick={closeDeleteModal}>
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
