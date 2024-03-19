import { FormProvider } from 'react-hook-form'
import { usePredioForm } from './hooks'

// import { Input, Select } from '@components/forms'
// import { Add } from '..'

type Props = {
  viewMode?: boolean
}

export const Filter: React.FC<Props> = ({ viewMode = false }) => {
  const {
    methods
    // form
  } = usePredioForm()

  return (
    <FormProvider {...methods}>
      <form
        className={`grid grid-cols-1 ${!viewMode ? 'md:grid-cols-3' : ''} gap-3`}
      >
        {/* <Input {...form.search} />
        {!viewMode && (
          <>
            <Select {...form.municipio} />
            <Add />
          </>
        )} */}
      </form>
    </FormProvider>
  )
}
