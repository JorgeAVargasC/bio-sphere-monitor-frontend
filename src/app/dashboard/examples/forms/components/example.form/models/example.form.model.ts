import {
  ICheckbox,
  ICheckboxGroup,
  IInput,
  IRadioGroup,
  ISelect,
  ITextArea
} from '@components/forms'
import * as yup from 'yup'

export type IFormFields = {
  fullName: IInput
  age: IInput
  email: IInput
  tel: IInput
  skills: ISelect
  gender: ISelect
  description: ITextArea
  accept: ICheckbox
  amenities: ICheckboxGroup
  plan: IRadioGroup
}

export type IFormValues = {
  fullName: string
  age: number
  email: string
  tel: string
  skills: string
  gender: string
  description: string
  accept: boolean
  amenities: string[]
  plan: string
}

export const defaultValues: IFormValues = {
  fullName: '',
  age: 0,
  email: '',
  tel: '',
  skills: '',
  gender: '',
  description: '',
  accept: false,
  amenities: [],
  plan: ''
}

export const schema = yup.object().shape({
  fullName: yup.string().required('Full name is required'),
  age: yup.number().required('Age is required').positive('Age must be a positive number'),
  email: yup.string().email('Invalid email').required('Email is required'),
  tel: yup.string().required('Tel is required'),
  skills: yup.string().required('Skills is required'),
  gender: yup.string().required(),
  description: yup.string().required('Description is required'),
  accept: yup.bool().oneOf([true], 'Accept terms is required'),
  amenities: yup.array().min(1, 'Amenities is required'),
  plan: yup.string().required('Plan is required')
})
