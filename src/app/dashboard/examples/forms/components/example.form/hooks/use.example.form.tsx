import { Resolver, useForm } from 'react-hook-form'
import { IFormValues, defaultValues, schema } from '../models/example.form.model'
import { yupResolver } from '@hookform/resolvers/yup'
import { useExampleFormFields } from './use.example.form.fields'
import { useExampleFormSubmit } from './use.example.form.submit'

export const useExampleForm = () => {
  const methods = useForm<IFormValues>({
    defaultValues,
    criteriaMode: 'all',
    progressive: true,
    resolver: yupResolver(schema) as Resolver<IFormValues>
  })

  const onSubmit = methods.handleSubmit((data) => {
    console.log(data)
  })

  const { form } = useExampleFormFields({ methods })
  const { submit } = useExampleFormSubmit({ methods })

  return {
    methods,
    onSubmit,
    form,
    submit
  }
}
