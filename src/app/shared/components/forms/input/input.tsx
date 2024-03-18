import { Controller, useFormContext } from 'react-hook-form'

import { IInput } from './input.model'
import { Input as NextUIInput } from '@nextui-org/react'

export const Input = ({
  name,
  isVisible = true,
  size = 'sm',
  color = 'default',
  variant = 'bordered',
  ...rest
}: IInput) => {
  const { control } = useFormContext()

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <>
          {isVisible && (
            <NextUIInput
              errorMessage={fieldState.error?.message}
              isInvalid={fieldState.invalid}
              variant={variant}
              color={color}
              size={size}
              classNames={{
                inputWrapper: ['group-data-[focus=true]:border-default-400']
              }}
              {...field}
              {...rest}
            />
          )}
        </>
      )}
    />
  )
}
