import { SelectProps } from '@nextui-org/react'
export interface ISelect extends Omit<SelectProps, 'children' | 'items'> {
  name: string
  isVisible?: boolean
  options: {
    value: string
    label: string
  }[]
}
