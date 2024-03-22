import { Resolver, useForm } from 'react-hook-form'
import { IFormValues, schema } from '../models'
import { yupResolver } from '@hookform/resolvers/yup'

// import { usePredioFormFields } from './use.predio.form.fields'
import { usePredioFormSubmit } from './use.predio.form.submit'
import { useSearchParams } from 'react-router-dom'

export const usePredioForm = () => {
  const [searchParams] = useSearchParams()

  const defaultValues = {
    search: searchParams.get('search') || '',
    municipio: searchParams.get('municipio') || ''
  }

  const methods = useForm<IFormValues>({
    defaultValues,
    criteriaMode: 'all',
    shouldFocusError: true,
    progressive: true,
    resolver: yupResolver(schema) as Resolver<IFormValues>
  })

  // const { form } = usePredioFormFields({ methods })
  usePredioFormSubmit({ methods })

  return {
    methods
    // form
  }
}
