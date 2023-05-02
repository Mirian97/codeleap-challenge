import { InputLabel, Stack, StandardTextFieldProps } from '@mui/material'
import { forwardRef, useId } from 'react'
import { StyledTextField } from 'theme/input'

interface TextAreaProps extends StandardTextFieldProps {
  label: string
  placeholder: string
}

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
        rows={3}
        multiline
        {...restProps}
      />
    </Stack>
  )
}

const TextArea = forwardRef(TextAreaRef)

export default TextArea
