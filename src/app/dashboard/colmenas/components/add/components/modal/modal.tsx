import {
  Button,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Modal as ModalNextUI,
  ModalProps
} from '@nextui-org/react'
import { FormProvider } from 'react-hook-form'
import { useAddForm } from './hooks'
import { Input, Select, Submit } from '@components/forms'

interface Props extends Omit<ModalProps, 'children'> {}

export const Modal: React.FC<Props> = ({ isOpen, onOpenChange }) => {
  const { form, methods, onSubmit, submit } = useAddForm()

  return (
    <ModalNextUI
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      size='3xl'
      scrollBehavior='inside'
      placement='top-center'
    >
      <FormProvider {...methods}>
        <form onSubmit={onSubmit}>
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader>
                  <h3>Agregar Referencia Catastral</h3>
                </ModalHeader>
                <ModalBody>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                    <Input {...form.zona} />
                    <Input {...form.sector} />
                    <Input {...form.comuna} />
                    <Input {...form.barrio} />
                    <Input {...form.manzana} />
                    <Input {...form.terreno} />
                    <Select {...form.predio} />
                    <Input {...form.torre} />
                    <Input {...form.piso} />
                    <Input {...form.unidad} />
                  </div>
                </ModalBody>

                <ModalFooter>
                  <Button
                    color='danger'
                    variant='light'
                    className='min-h-[52px]'
                    onPress={onClose}
                  >
                    Cerrar
                  </Button>
                  <Submit {...submit}>Agregar</Submit>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </form>
      </FormProvider>
    </ModalNextUI>
  )
}
