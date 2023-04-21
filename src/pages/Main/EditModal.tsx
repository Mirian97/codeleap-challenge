import { yupResolver } from '@hookform/resolvers/yup'
import { Box, Button, InputLabel, Stack } from '@mui/material'
import Modal from 'components/Modal'
import useGlobal from 'hooks/useGlobal'
import { SubmitHandler, useForm } from 'react-hook-form'
import { postSchema } from 'schemas/post'
import { editPost } from 'services/post'
import { StyledBackdrop } from 'theme/backdrop'
import { StyledTextField } from 'theme/input'
import { TSubmitPost } from 'types/post'
import { messageError, messageSuccess } from 'utils/toast'

const EditModal = () => {
  const { openEditModal, toggleEditModal, handleGetPosts, username, currentPost } =
    useGlobal()
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid }
  } = useForm<TSubmitPost>({ resolver: yupResolver(postSchema) })

  const onSubmit: SubmitHandler<TSubmitPost> = async (data) => {
    if (!username) return
    const body = {
      ...data,
      username,
      created_datetime: new Date().toISOString()
    }
    try {
      await editPost(currentPost, body)
      toggleEditModal()
      handleGetPosts()
      messageSuccess('Post was edited')
      reset()
    } catch (error) {
      messageError('Post was not edited')
    }
  }
  return (
    <Box onSubmit={handleSubmit(onSubmit)} component='form'>
      <StyledBackdrop open={openEditModal}>
        <Modal title='Edit item'>
          <Stack gap={1}>
            <InputLabel htmlFor='title'>Title</InputLabel>
            <StyledTextField
              id='title'
              placeholder='Hello world'
              fullWidth
              {...register('title')}
              error={Boolean(errors.title)}
              helperText={errors.title?.message ?? ''}
            />
          </Stack>
          <Stack gap={1}>
            <InputLabel htmlFor='content'>Content</InputLabel>
            <StyledTextField
              id='content'
              placeholder='Content here'
              fullWidth
              rows={3}
              multiline
              {...register('content')}
              error={Boolean(errors.content)}
              helperText={errors.content?.message ?? ''}
            />
          </Stack>
          <Stack direction='row' justifyContent='flex-end' gap={2} mt={5}>
            <Button variant='outlined' color='secondary' onClick={toggleEditModal}>
              Cancel
            </Button>
            <Button
              variant='contained'
              color='success'
              type='submit'
              disabled={!isDirty || !isValid}
            >
              Edit
            </Button>
          </Stack>
        </Modal>
      </StyledBackdrop>
    </Box>
  )
}

export default EditModal
