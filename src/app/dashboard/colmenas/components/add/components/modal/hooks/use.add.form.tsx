import { Resolver, useForm } from 'react-hook-form'
import { IFormValues, schema, defaultValues } from '../models'
import { yupResolver } from '@hookform/resolvers/yup'

import { useAddFormFields } from './use.add.form.fields'
import { useAddFormSubmit } from './use.add.form.submit'

export const useAddForm = () => {
  const methods = useForm<IFormValues>({
    defaultValues,
    criteriaMode: 'all',
    shouldFocusError: true,
    progressive: true,
    resolver: yupResolver(schema) as Resolver<IFormValues>
  })

  const onSubmit = methods.handleSubmit((data) => {
    console.log(data)
  })

  const { form } = useAddFormFields({ methods })
  const { submit } = useAddFormSubmit({ methods })

  return {
    methods,
    onSubmit,
    form,
    submit
  }
}
