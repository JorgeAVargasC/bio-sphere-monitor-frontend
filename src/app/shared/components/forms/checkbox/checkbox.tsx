import { Controller, useFormContext } from 'react-hook-form'

import { ICheckbox } from './checkbox.model'
import { Checkbox as NextUICheckbox } from '@nextui-org/react'

export const Checkbox = ({
  name,
  label,
  isVisible = true,
  size = 'sm',
  ...rest
}: ICheckbox) => {
  const { control } = useFormContext()

  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState }) => (
          <>
            {isVisible && (
              <div className='flex flex-col gap-2'>
                <NextUICheckbox
                  isInvalid={fieldState.invalid}
                  size={size}
                  {...field}
                  {...rest}
                >
                  {label}
                </NextUICheckbox>
                {fieldState.error?.message && (
                  <small className='text-danger-500'>
                    {fieldState.error?.message}
                  </small>
                )}
              </div>
            )}
          </>
        )}
      />
    </>
  )
}
