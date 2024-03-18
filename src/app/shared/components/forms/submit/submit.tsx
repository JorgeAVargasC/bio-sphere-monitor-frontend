import { useFormContext } from 'react-hook-form'

import { ISubmit } from './submit.model'
import { Button } from '@nextui-org/react'

export const Submit = ({
  isVisible = true,
  children,
  radius = 'sm',
  color = 'primary',
  ...rest
}: ISubmit) => {
  const {
    formState: { errors, isLoading }
  } = useFormContext()

  const isDisabled = Object.keys(errors).length > 0

  return (
    <>
      {isVisible && (
        <Button
          isDisabled={isDisabled}
          isLoading={isLoading}
          color={color}
          radius={radius}
          type='submit'
          {...rest}
        >
          {children}
        </Button>
      )}
    </>
  )
}
