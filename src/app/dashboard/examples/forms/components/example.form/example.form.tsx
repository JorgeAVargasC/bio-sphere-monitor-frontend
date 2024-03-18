import { FormProvider } from 'react-hook-form'
import { useExampleForm } from './hooks'
import {
  Checkbox,
  CheckboxGroup,
  Input,
  RadioGroup,
  Select,
  Submit,
  TextArea
} from '@components/forms'

export const ExampleForm = () => {
  const { methods, onSubmit, form, submit } = useExampleForm()

  return (
    <div>
      <FormProvider {...methods}>
        <form
          onSubmit={onSubmit}
          className='grid gap-4'
        >
          <Input {...form.fullName} />
          <Input {...form.age} />
          <Input {...form.email} />
          <Input {...form.tel} />
          <Select {...form.gender} />
          <Select {...form.skills} />
          <TextArea {...form.description} />
          <Checkbox {...form.accept} />
          <CheckboxGroup {...form.amenities} />
          <RadioGroup {...form.plan} />
          <Submit {...submit}>Submit</Submit>
        </form>
      </FormProvider>
    </div>
  )
}
