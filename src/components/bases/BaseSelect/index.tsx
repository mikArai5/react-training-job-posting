import { FC, ComponentPropsWithRef, forwardRef } from 'react'
import { StyledSelectWrapper, StyledSelect, StyledSelectChildren } from './styled'

export interface Option {
  label: string
  value: string
}

interface SelectProps extends ComponentPropsWithRef<'select'> {
  options: Option[]
}

const BaseSelect: FC<SelectProps> = forwardRef(
  ({ children, options, placeholder, ...prop }, ref) => {
    return (
      <StyledSelectWrapper className="arrow">
        {children && <StyledSelectChildren>{children}</StyledSelectChildren>}
        <StyledSelect {...prop} required ref={ref}>
          {placeholder && <option value="">{placeholder}</option>}
          {options.map((item) => (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          ))}
        </StyledSelect>
      </StyledSelectWrapper>
    )
  }
)

export default BaseSelect
