import { FC, ComponentPropsWithRef, forwardRef } from 'react'
import { StyledSelectFieldWrapper, StyledSelect, StyledSelectFieldLabel } from './styled'

export interface Option {
  label: string
  value: string
}

interface SelectFieldProps extends ComponentPropsWithRef<'select'> {
  options: Option[]
  label: string
  labelId: string
}

const BaseSelectField: FC<SelectFieldProps> = forwardRef(
  ({ options, label, labelId, required, ...prop }, ref) => {
    return (
      <StyledSelectFieldWrapper className="arrow">
        <StyledSelect {...prop} id={labelId} required={required} ref={ref}>
          {options.map((item) => (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          ))}
        </StyledSelect>
        <StyledSelectFieldLabel htmlFor={labelId} required={required}>
          {label}
        </StyledSelectFieldLabel>
      </StyledSelectFieldWrapper>
    )
  }
)

export default BaseSelectField
