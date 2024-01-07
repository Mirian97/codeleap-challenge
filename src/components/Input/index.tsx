import { InputLabel, Stack, StandardTextFieldProps, styled } from '@mui/material'
import TextField from '@mui/material/TextField'
import { forwardRef, useId } from 'react'

interface InputProps extends StandardTextFieldProps {
  label: string
  placeholder: string
}

const StyledTextField = styled(TextField)(({ theme }) => ({
  root: {
    border: `1px solid ${theme.palette.grey[300]}`
  },

  '.MuiInputBase-root': {
    height: '32px',

    '.MuiInputBase-input': {
      ...theme.typography.h5,
      padding: theme.spacing(1, 1.4)
    }
  }
}))

const InputRef: React.ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { label, placeholder, ...restProps }: InputProps,
  ref
) => {
  const id = useId()
  return (
    <Stack gap={1}>
      <InputLabel htmlFor={id}>{label}</InputLabel>
      <StyledTextField
        ref={ref}
        id={id}
        placeholder={placeholder}
        fullWidth
        {...restProps}
      />
    </Stack>
  )
}

const Input = forwardRef(InputRef)

export default Input
