import { InputLabel, Stack, StandardTextFieldProps } from '@mui/material'
import { forwardRef, useId } from 'react'
import { StyledTextField } from 'theme/input'

interface InputProps extends StandardTextFieldProps {
  label: string
  placeholder: string
}

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
