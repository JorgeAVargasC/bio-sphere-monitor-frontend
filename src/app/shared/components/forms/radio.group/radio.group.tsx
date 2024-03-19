import { Controller, useFormContext } from 'react-hook-form'

import { IRadioGroup } from './radio.group.model'
import {
  RadioGroup as NextUIRadioGroup,
  Radio as NextUIRadio
} from '@nextui-org/react'

export const RadioGroup = ({
  name,
  isVisible = true,
  options,
  size = 'sm',
  ...rest
}: IRadioGroup) => {
  const { control } = useFormContext()

  return (
    <>
      <Controller
        control={control}
        name={name}
        render={({ field, fieldState }) => (
          <>
            {isVisible && (
              <NextUIRadioGroup
                isInvalid={fieldState.invalid}
                errorMessage={fieldState.error?.message}
                size={size}
                {...field}
                {...rest}
              >
                {options?.map((option, index) => (
                  <NextUIRadio
                    key={index}
                    value={option.value}
                  >
                    {option.label}
                  </NextUIRadio>
                ))}
              </NextUIRadioGroup>
            )}
          </>
        )}
      />
    </>
  )
}
