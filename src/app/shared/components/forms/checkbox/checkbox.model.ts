import { CheckboxProps } from '@nextui-org/react'

export interface ICheckbox extends CheckboxProps {
  name: string
  label: string
  isVisible?: boolean
}
