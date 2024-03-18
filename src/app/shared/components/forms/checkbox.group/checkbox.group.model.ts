import { CheckboxGroupProps } from '@nextui-org/react'

export interface ICheckboxGroup extends Omit<CheckboxGroupProps, 'children'> {
  name: string
  isVisible?: boolean
  options: {
    value: string
    label: string
  }[]
}
