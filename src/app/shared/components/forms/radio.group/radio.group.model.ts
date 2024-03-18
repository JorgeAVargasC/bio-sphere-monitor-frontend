import { RadioGroupProps } from '@nextui-org/react'

export interface IRadioGroup extends Omit<RadioGroupProps, 'children'> {
  name: string
  isVisible?: boolean
  options: {
    value: string
    label: string
  }[]
}
