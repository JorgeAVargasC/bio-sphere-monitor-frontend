import { IInput, ISelect } from '@components/forms'
import * as yup from 'yup'

export type IFormFields = {
  zona: IInput
  sector: IInput
  comuna: IInput
  barrio: IInput
  manzana: IInput
  terreno: IInput
  predio: ISelect
  torre: IInput
  piso: IInput
  unidad: IInput
}

export type IFormValues = {
  zona: string
  sector: string
  comuna: string
  barrio: string
  manzana: string
  terreno: string
  predio: string
  torre: string
  piso: string
  unidad: string
}

export const defaultValues: IFormValues = {
  zona: '',
  sector: '',
  comuna: '',
  barrio: '',
  manzana: '',
  terreno: '',
  predio: '',
  torre: '',
  piso: '',
  unidad: ''
}

export const schema = yup.object().shape({
  zona: yup.string().required('Zona es requerida'),
  sector: yup.string().required('Sector es requerido'),
  comuna: yup.string().required('Comuna es requerida'),
  barrio: yup.string().required('Barrio es requerido'),
  manzana: yup.string().required('Manzana es requerida'),
  terreno: yup.string().required('Terreno es requerido'),
  predio: yup.string().required('Predio es requerido'),
  torre: yup.string().required('Torre es requerida'),
  piso: yup.string().required('Piso es requerido'),
  unidad: yup.string().required('Unidad es requerida')
})
