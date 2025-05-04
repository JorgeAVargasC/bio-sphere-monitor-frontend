import { useSidebarStore } from '@dashboard/shared/store'
import { Button } from '@nextui-org/react'
import { IoIosMenu } from 'react-icons/io'
import { IoEarth } from 'react-icons/io5'
import { Link } from 'react-router-dom'

export const NavbarLeft = () => {
  const toggle = useSidebarStore((state) => state.toggleSidebar)
  return (
    <div className='flex items-center gap-4'>
      <Button
        isIconOnly
        variant='bordered'
        size='sm'
        onPress={toggle}
      >
        <IoIosMenu size={22} />
      </Button>

      <Link
        to={'/dashboard'}
        className='flex md:hidden items-center gap-3'
      >
        <IoEarth
          className='fill-primary min-w-[24px]'
          size={25}
        />
        <h2 className=''>Bio Sphere!</h2>
      </Link>

      <h2 className='hidden md:block font-bold'>Dashboard</h2>
    </div>
  )
}
