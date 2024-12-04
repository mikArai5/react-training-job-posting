import { FC, ComponentPropsWithRef, forwardRef } from 'react'
import { StyledCheckboxWrapper, StyledCheckbox } from './styled'

interface CheckboxProps extends ComponentPropsWithRef<'input'> {}

const BaseCheckbox: FC<CheckboxProps> = forwardRef((props, ref) => {
  return (
    <StyledCheckboxWrapper className="checkbox">
      <StyledCheckbox type="checkbox" {...props} ref={ref} />
    </StyledCheckboxWrapper>
  )
})

export default BaseCheckbox
