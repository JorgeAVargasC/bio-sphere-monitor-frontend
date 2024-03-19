import { IInput, ISelect } from '@components/forms'
import * as yup from 'yup'

export type IFormFields = {
  search: IInput
  municipio: ISelect
}

export type IFormValues = {
  search: string
  municipio: string
}

export const schema = yup.object().shape({
  search: yup.string().notRequired(),
  municipio: yup.string().notRequired()
})
