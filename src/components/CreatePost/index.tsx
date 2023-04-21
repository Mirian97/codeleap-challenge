import { yupResolver } from '@hookform/resolvers/yup'
import { Box, Button, InputLabel, Stack, Typography } from '@mui/material'
import Paper from '@mui/material/Paper'
import { styled } from '@mui/material/styles'
import useGlobal from 'hooks/useGlobal'
import { SubmitHandler, useForm } from 'react-hook-form'
import { postSchema } from 'schemas/post'
import { createPost } from 'services/post'
import { StyledTextField } from 'theme/input'
import { TSubmitPost } from 'types/post'
import { messageError, messageSuccess } from 'utils/toast'

const StyledCreatePost = styled(Paper)(({ theme }) => ({
  border: `1px solid ${theme.palette.grey[200]}`,
  borderRadius: 16,
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(3),
  padding: theme.spacing(3),
  width: '100%'
}))

const CreatePost = () => {
  const { username, handleGetPosts } = useGlobal()
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors, isValid, isDirty }
  } = useForm<TSubmitPost>({ resolver: yupResolver(postSchema) })

  const onSubmit: SubmitHandler<TSubmitPost> = async (data) => {
    if (!username) return
    const body = {
      ...data,
      username,
      created_datetime: new Date().toISOString()
    }
    try {
      await createPost(body)
      handleGetPosts()
      messageSuccess('Post was created')
      reset()
    } catch (error) {
      messageError('Post was not created')
    }
  }

  return (
    <Box onSubmit={handleSubmit(onSubmit)} component='form'>
      <StyledCreatePost elevation={0}>
        <Typography variant='h3'>What's on your mind?</Typography>
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
        <Stack direction='row' justifyContent='flex-end'>
          <Button variant='contained' type='submit' disabled={!isDirty || !isValid}>
            Create
          </Button>
        </Stack>
      </StyledCreatePost>
    </Box>
  )
}

export default CreatePost
