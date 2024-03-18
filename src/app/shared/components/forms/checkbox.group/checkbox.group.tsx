import { Controller, useFormContext } from 'react-hook-form'

import { ICheckboxGroup } from './checkbox.group.model'
import {
  CheckboxGroup as NextUICheckboxGroup,
  Checkbox as NextUICheckboxItem
} from '@nextui-org/react'

export const CheckboxGroup = ({
  name,
  isVisible = true,
  options,
  size = 'sm',
  ...rest
}: ICheckboxGroup) => {
  const { control } = useFormContext()

  return (
    <>
      <Controller
        control={control}
        name={name}
        render={({ field, fieldState }) => (
          <>
            {isVisible && (
              <NextUICheckboxGroup
                isInvalid={fieldState.invalid}
                errorMessage={fieldState.error?.message}
                size={size}
                {...field}
                {...rest}
              >
                {options?.map((option, index) => (
                  <NextUICheckboxItem
                    key={index}
                    value={option.value}
                  >
                    {option.label}
                  </NextUICheckboxItem>
                ))}
              </NextUICheckboxGroup>
            )}
          </>
        )}
      />
    </>
  )
}
