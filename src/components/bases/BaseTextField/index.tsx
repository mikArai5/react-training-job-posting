import { FC, ComponentPropsWithRef, forwardRef } from 'react'
import {
  StyledTextFieldWrapper,
  StyledTextFieldInputWrapper,
  StyledTextFieldInput,
  StyledTextFieldLabel,
  StyledErrorMessage,
} from './styled'

interface TextFieldProps extends ComponentPropsWithRef<'input'> {
  label: string
  labelId: string
  isError?: boolean
  errorMessage?: string
}

const BaseTextField: FC<TextFieldProps> = forwardRef(
  ({ label, labelId, required, isError, errorMessage, ...prop }, ref) => {
    return (
      <StyledTextFieldWrapper>
        <StyledTextFieldInputWrapper>
          <StyledTextFieldInput
            id={labelId}
            {...prop}
            required={required}
            placeholder=" "
            isError={isError}
            ref={ref}
          />
          <StyledTextFieldLabel htmlFor={labelId} required={required} isError={isError}>
            {label}
          </StyledTextFieldLabel>
        </StyledTextFieldInputWrapper>
        {errorMessage && <StyledErrorMessage>{errorMessage}</StyledErrorMessage>}
      </StyledTextFieldWrapper>
    )
  }
)

export default BaseTextField
