import { ISubmit } from '@components/forms'
import { useEffect, useState } from 'react'
import { UseFormReturn } from 'react-hook-form'
import { IFormValues } from '../models'
import { useSearchParams } from 'react-router-dom'

type Props = {
  methods: UseFormReturn<IFormValues, any, undefined>
}

export const usePredioFormSubmit = ({ methods }: Props) => {
  const [searchParams, setSearchParams] = useSearchParams()
  const params = new URLSearchParams(searchParams)

  const [submit, setSubmit] = useState<ISubmit>({
    isVisible: true,
    isLoading: false,
    size: 'lg'
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

  const onSubmit = methods.handleSubmit((data) => {
    const keys = Object.keys(data) as Array<keyof IFormValues>

    keys.forEach((key) => {
      data[key] ? params.set(key, data[key]) : params.delete(key)
    })

    setSearchParams(`${params.toString()}`)
  })

  const { search, municipio } = methods.watch()

  useEffect(() => {
    ;(search || municipio) && onSubmit()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search, municipio])

  return {
    submit,
    onSubmit
  }
}
