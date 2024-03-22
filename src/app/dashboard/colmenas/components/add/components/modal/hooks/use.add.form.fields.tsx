import { IFormFields, IFormValues } from '../models'
import { UseFormReturn } from 'react-hook-form'

type Props = {
  methods: UseFormReturn<IFormValues, any, undefined>
}

export const useAddFormFields = ({ methods }: Props) => {
  const form: IFormFields = {
    name: {
      name: 'name',
      label: 'Nombre de la colmena'
    },
    description: {
      name: 'description',
      label: 'Descripción de la colmena'
    }
  }

  return { form }
}
