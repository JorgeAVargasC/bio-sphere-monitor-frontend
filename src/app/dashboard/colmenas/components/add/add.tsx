import { Button, Tooltip, useDisclosure } from '@nextui-org/react'

import { Modal } from './components'
import { TbPlus } from 'react-icons/tb'

export const Add = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()

  return (
    <>
      <Tooltip content='Agregar Nueva Colmena'>
        <Button
          size='md'
          onPress={onOpen}
          color='primary'
          isIconOnly
        >
          <TbPlus size={18} />
        </Button>
      </Tooltip>

      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      />
    </>
  )
}
