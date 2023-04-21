import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'

interface IModal {
  title: string
  children: React.ReactNode
  width?: number
}

const StyledModal = styled(Paper)<Pick<IModal, 'width'>>(({ theme, width }) => ({
  border: `1px solid ${theme.palette.grey[50]}`,
  borderRadius: 16,
  padding: theme.spacing(3),
  width: width ?? 660
}))

const Modal = ({ title, children, width }: IModal) => {
  return (
    <StyledModal elevation={0} width={width}>
      <Typography variant='h3' mb={3}>
        {title}
      </Typography>
      {children}
    </StyledModal>
  )
}

export default Modal
