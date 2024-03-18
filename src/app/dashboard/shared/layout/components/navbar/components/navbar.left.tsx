import { useSidebarStore } from '@dashboard/shared/store'
import { Button } from '@nextui-org/react'
import { IoIosMenu } from 'react-icons/io'

export const NavbarLeft = () => {
  const toggle = useSidebarStore((state) => state.toggleSidebar)
  return (
    <div className='flex items-center gap-4'>
      <Button
        isIconOnly
        variant='bordered'
        size='sm'
        onClick={toggle}
      >
        <IoIosMenu size={22} />
      </Button>

      <h2 className='font-bold'>Dashboard App</h2>
    </div>
  )
}
