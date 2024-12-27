import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  User
} from '@nextui-org/react'
import { THEMES, useThemeStore } from '@store/theme'
import { TbMoon, TbSun } from 'react-icons/tb'

export const NavbarRight = () => {
  const theme = useThemeStore((state) => state.theme)
  const setTheme = useThemeStore((state) => state.setTheme)

  return (
    <div className='flex items-center gap-4'>
      <Dropdown placement='bottom-start'>
        <DropdownTrigger>
          <User
            as='button'
            avatarProps={{
              isBordered: true,
              src: 'https://avatar.vercel.sh/jane',
              size: 'sm'
            }}
            className='transition-transform'
            description='@jane.doe'
            name='Jane Doe'
          />
        </DropdownTrigger>
        <DropdownMenu
          aria-label='User Actions'
          variant='flat'
        >
          <DropdownItem key='system'>Sistema</DropdownItem>
          <DropdownItem key='configurations'>Configuraciones</DropdownItem>
          <DropdownItem key='help_and_feedback'>
            Ayuda y Retroalimentación
          </DropdownItem>
          <DropdownItem
            key='logout'
            color='danger'
          >
            Cerrar Sesión
          </DropdownItem>
          <DropdownItem key='theme'>
            <Button
              aria-label='Toggle theme'
              variant='bordered'
              size='sm'
              fullWidth
              onPress={() => setTheme(theme === 'light' ? 'dark' : 'light')}
              startContent={
                theme === 'light' ? <TbSun size={20} /> : <TbMoon size={20} />
              }
            >
              {theme === 'light' ? 'Light' : 'Dark'}
            </Button>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
      <div className='hidden md:block'>
        <Dropdown>
          <DropdownTrigger>
            <Button
              aria-label='Toggle theme'
              isIconOnly
              variant='bordered'
              size='sm'
            >
              {theme === 'light' ? <TbSun size={20} /> : <TbMoon size={20} />}
            </Button>
          </DropdownTrigger>
          <DropdownMenu aria-label='Static Themes'>
            {THEMES.map((item) => (
              <DropdownItem
                key={item.value}
                onPress={() => setTheme(item.value)}
              >
                {item.label}
              </DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>
      </div>
    </div>
  )
}
