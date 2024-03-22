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
import { Input, Submit, TextArea } from '@components/forms'

interface Props extends Omit<ModalProps, 'children'> {}

export const Modal: React.FC<Props> = ({ isOpen, onOpenChange }) => {
  const { form, methods, onSubmit, submit } = useAddForm()

  return (
    <ModalNextUI
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      size='md'
      scrollBehavior='inside'
    >
      <FormProvider {...methods}>
        <form onSubmit={onSubmit}>
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader>
                  <h3>Agregar Nueva Colmena</h3>
                </ModalHeader>
                <ModalBody>
                  <div className='grid grid-cols-1 gap-3'>
                    <Input {...form.name} />
                    <TextArea {...form.description} />
                  </div>
                </ModalBody>

                <ModalFooter>
                  <Button
                    color='danger'
                    variant='light'
                    radius='sm'
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
