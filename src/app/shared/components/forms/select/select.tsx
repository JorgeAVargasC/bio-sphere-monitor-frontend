import { Controller, useFormContext } from 'react-hook-form'

import { ISelect } from './select.model'
import { Select as NextUISelect, SelectItem } from '@nextui-org/react'
import { useEffect, useState } from 'react'

export const Select = ({
  name,
  isVisible = true,
  options,
  color = 'default',
  size = 'sm',
  variant = 'bordered',
  selectionMode = 'single',
  ...rest
}: ISelect) => {
  const { control } = useFormContext()

  const [initialOptions, setInitialOptions] = useState<ISelect['options']>([])

  useEffect(() => {
    options && options.length > 0 && setInitialOptions(options)
  }, [options])

  return (
    <>
      <Controller
        control={control}
        name={name}
        render={({ field, fieldState }) => (
          <>
            {isVisible && (
              <NextUISelect
                errorMessage={fieldState.error?.message}
                isInvalid={fieldState.invalid}
                color={color}
                size={size}
                variant={variant}
                selectionMode={selectionMode}
                classNames={{
                  trigger: ['data-[focus=true]:border-default-400']
                }}
                selectedKeys={
                  initialOptions.length > 0 && field.value
                    ? selectionMode !== 'multiple'
                      ? [field.value]
                      : field.value.split(',')
                    : []
                }
                {...field}
                {...rest}
              >
                {initialOptions.map((option) => (
                  <SelectItem
                    key={option.value}
                    value={option.value}
                  >
                    {option.label}
                  </SelectItem>
                ))}
              </NextUISelect>
            )}
          </>
        )}
      />
    </>
  )
}
