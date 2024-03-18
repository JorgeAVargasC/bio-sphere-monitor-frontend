import { NavbarStyled } from './navbar.styled'
import { NavbarLeft, NavbarRight } from './components'
import { useSidebarStore } from '@dashboard/shared/store'

export const Navbar = () => {
  const sidebarWidth = useSidebarStore((state) => state.sidebarWidth)

  return (
    <NavbarStyled
      $sidebarWidth={sidebarWidth}
      className='shadow-sm bg-background bg-opacity-70 backdrop-blur-sm'
    >
      <div className='flex justify-between px-5'>
        <NavbarLeft />
        <NavbarRight />
      </div>
    </NavbarStyled>
  )
}
