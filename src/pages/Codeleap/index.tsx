import { Box } from '@mui/material'
import { styled } from '@mui/material/styles'
import { ReactComponent as Logo } from 'assets/logo.svg'
import { motion } from 'framer-motion'
import { memo, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const StyledCodeleapPage = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  width: '100vw',

  [theme.breakpoints.down('sm')]: {
    '.codeleap': {
      width: 300
    }
  }
}))

const Codeleap = () => {
  const navigate = useNavigate()

  useEffect(() => {
    setTimeout(() => {
      navigate('/sign-up')
    }, 2500)
  }, [navigate])

  return (
    <StyledCodeleapPage>
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1, delay: 0.1 }}
      >
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Logo className='codeleap' />
        </motion.h1>
      </motion.div>
    </StyledCodeleapPage>
  )
}

export default memo(Codeleap)
