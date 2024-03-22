import { IInput, ITextArea } from '@components/forms'
import * as yup from 'yup'

export type IFormFields = {
  name: IInput
  description: ITextArea
}

export type IFormValues = {
  name: string
  description: string
}

export const defaultValues: IFormValues = {
  name: '',
  description: ''
}

export const schema = yup.object().shape({
  name: yup.string().required('El nombre de la colmena es requerido'),
  description: yup.string().notRequired()
})
