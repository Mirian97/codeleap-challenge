/* eslint-disable react-hooks/exhaustive-deps */
import { yupResolver } from '@hookform/resolvers/yup'
import { Box, Button, Stack, styled } from '@mui/material'
import Input from 'components/Input'
import Modal from 'components/Modal'
import { memo } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { TUsernameSchema, usernameSchema } from 'schemas/username'
import { useAppDispatch } from 'store/config/hook'
import { setName } from 'store/features/user/userSlice'
import { messageSuccess } from 'utils/toast'

const StyledSignUpPage = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',
  width: '100%'
})

const SignUp = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const navigateToMainPage = () => navigate('/main')
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid }
  } = useForm<TUsernameSchema>({
    resolver: yupResolver(usernameSchema)
  })

  const onSubmit: SubmitHandler<TUsernameSchema> = ({ username }) => {
    messageSuccess('User successfully logged in!')
    setTimeout(() => {
      dispatch(setName(username))
      navigateToMainPage()
    }, 2500)
  }

  return (
    <StyledSignUpPage>
      <Modal title='Welcome to CodeLeap network!' width={500}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            label='Please enter your username'
            placeholder='John doe'
            {...register('username')}
            error={Boolean(errors.username)}
            helperText={errors.username?.message ?? ''}
          />
          <Stack direction='row' justifyContent='flex-end' mt={2}>
            <Button variant='contained' type='submit' disabled={!isDirty || !isValid}>
              ENTER
            </Button>
          </Stack>
        </form>
      </Modal>
    </StyledSignUpPage>
  )
}

export default memo(SignUp)
