import { useSidebarStore } from '@dashboard/shared/store'
import { Button } from '@nextui-org/react'
import { FaForumbee } from 'react-icons/fa'
import { IoIosMenu } from 'react-icons/io'
import { Link } from 'react-router-dom'
import { BreadCrumbs } from '../../breadcrumbs/breadcrumbs'

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

      <Link
        to={'/dashboard'}
        className='flex md:hidden items-center gap-3'
      >
        <FaForumbee
          className='fill-primary min-w-[24px]'
          size={25}
        />
        <h2 className=''>Bee K!</h2>
      </Link>

      <h2 className='hidden md:block font-bold'>Dashboard App</h2>
      <div className='hidden md:block'>
        <BreadCrumbs />
      </div>
    </div>
  )
}
