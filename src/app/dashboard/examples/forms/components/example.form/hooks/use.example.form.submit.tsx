import { ISubmit } from '@components/forms'
import { useEffect, useState } from 'react'
import { UseFormReturn } from 'react-hook-form'
import { IFormValues } from '../models'

type Props = {
  methods: UseFormReturn<IFormValues, any, undefined>
}

export const useExampleFormSubmit = ({ methods }: Props) => {
  const [submit, setSubmit] = useState<ISubmit>({
    isVisible: true,
    isLoading: false
  })

  const {
    formState: { isLoading }
  } = methods

  useEffect(() => {
    setSubmit((prev) => ({
      ...prev,
      isLoading
    }))
  }, [isLoading])

  return {
    submit
  }
}
