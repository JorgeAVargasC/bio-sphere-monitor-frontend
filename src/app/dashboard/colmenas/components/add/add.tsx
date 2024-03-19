import { Button, Tooltip, useDisclosure } from '@nextui-org/react'

import { Modal } from './components'
import { TbPlus } from 'react-icons/tb'

export const Add = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()

  return (
    <>
      <Tooltip content='Agregar Referencia Catastral'>
        <Button
          size='sm'
          onPress={onOpen}
          color='primary'
          className='bg-amb-blue-1 min-h-[52px]'
          startContent={<TbPlus />}
        >
          Agregar
        </Button>
      </Tooltip>

      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}        
      />
    </>
  )
}
