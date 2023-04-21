import { styled } from '@mui/material'
import TextField from '@mui/material/TextField'

export const StyledTextField = styled(TextField)(({ theme }) => ({
  root: {
    ...theme.typography.h1,
    border: `1px solid ${theme.palette.grey[300]}`
  },

  '.MuiInputBase-input': {
    padding: theme.spacing(1, 1.4),

    '.MuiOutlinedInput-root': {
      maxHeight: 32
    }
  },
  '.css-932k0j-MuiInputBase-root-MuiOutlinedInput-root': {
    padding: 0
  }
}))
