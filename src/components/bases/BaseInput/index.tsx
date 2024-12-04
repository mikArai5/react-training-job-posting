import { FC, ComponentPropsWithRef, forwardRef } from 'react'
import { StyledInputWrapper, StyledInputChildren, StyledInput } from './styled'

interface InputProps extends ComponentPropsWithRef<'input'> {}

const BaseInput: FC<InputProps> = forwardRef(({ children, className, ...prop }, ref) => {
  return (
    <StyledInputWrapper className={className}>
      {children && <StyledInputChildren>{children}</StyledInputChildren>}
      <StyledInput ref={ref} {...prop} />
    </StyledInputWrapper>
  )
})
export default BaseInput
