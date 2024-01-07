import {
  InputLabel,
  Stack,
  StandardTextFieldProps,
  TextField,
  styled
} from '@mui/material'
import { forwardRef, useId } from 'react'

interface TextAreaProps extends StandardTextFieldProps {
  label: string
  placeholder: string
}

const StyledTextField = styled(TextField)(({ theme }) => ({
  root: {
    border: `1px solid ${theme.palette.grey[300]}`
  },

  '.MuiInputBase-root': {
    padding: theme.spacing(1, 1.4),

    '.MuiInputBase-input': {
      ...theme.typography.h5
    }
  }
}))

const TextAreaRef: React.ForwardRefRenderFunction<HTMLInputElement, TextAreaProps> = (
  { label, placeholder, ...restProps }: TextAreaProps,
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
        rows={4}
        multiline
        {...restProps}
      />
    </Stack>
  )
}

const TextArea = forwardRef(TextAreaRef)

export default TextArea
