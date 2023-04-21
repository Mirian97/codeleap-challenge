import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded'
import { AppBar, IconButton, Stack, Typography, styled } from '@mui/material'
import useGlobal from 'hooks/useGlobal'
import { useNavigate } from 'react-router-dom'
import { messageSuccess } from 'utils/toast'

const StyledHeader = styled(AppBar)(({ theme }) => ({
  border: `1px solid ${theme.palette.grey[200]}`,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: theme.spacing(3.4, 4.6),
  width: '100%',
  position: 'sticky',
  top: 0,
  zIndex: 1
}))

const StyledRoundedIcon = styled(LogoutRoundedIcon)({
  color: 'white',
  fontSize: 24
})

const Header = () => {
  const { removeUsername } = useGlobal()
  const navigate = useNavigate()

  const logout = () => {
    messageSuccess('You will be logged out')
    setTimeout(() => {
      removeUsername()
      navigate('/')
    }, 2500)
  }

  return (
    <StyledHeader>
      <Typography variant='h3' color='white'>
        CodeLeap Network
      </Typography>
      <Stack direction='row' alignItems='center'>
        <Typography variant='h4' color='white'>
          Logout
        </Typography>
        <IconButton onClick={logout}>
          <StyledRoundedIcon />
        </IconButton>
      </Stack>
    </StyledHeader>
  )
}

export default Header
