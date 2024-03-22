import { useColmenasStore } from '@dashboard/colmenas/store'
import { Button, Tooltip } from '@nextui-org/react'
import { HiOutlineSquares2X2 } from 'react-icons/hi2'
import { TbList } from 'react-icons/tb'

export const ViewButton = () => {
  const view = useColmenasStore((state) => state.view)
  const toggleView = useColmenasStore((state) => state.toggleView)

  return (
    <Tooltip content='Agregar Nueva Colmena'>
      <Button
        size='md'
        onPress={toggleView}
        color='primary'
        isIconOnly
      >
        {view === 'grid' ? (
          <TbList size={21} />
        ) : (
          <HiOutlineSquares2X2 size={21} />
        )}
      </Button>
    </Tooltip>
  )
}
