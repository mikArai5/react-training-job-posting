import { FC, ComponentPropsWithRef } from 'react'
import { StyledInputLabel } from './styled'

interface InputLabelProps extends ComponentPropsWithRef<'label'> {}

const BaseInputLabel: FC<InputLabelProps> = ({ children, className, ...prop }) => {
  return <StyledInputLabel {...prop}>{children}</StyledInputLabel>
}

export default BaseInputLabel
