import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  User
} from '@nextui-org/react'
import { useThemeStore } from '@store/theme'
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
              src: 'https://avatar.vercel.sh/9',
              size: 'sm'
            }}
            className='transition-transform'
            description='@john.doe'
            name='John Doe'
          />
        </DropdownTrigger>
        <DropdownMenu
          aria-label='User Actions'
          variant='flat'
        >
          <DropdownItem key='system'>System</DropdownItem>
          <DropdownItem key='configurations'>Settings</DropdownItem>
          <DropdownItem key='help_and_feedback'>Help & Feedback</DropdownItem>
          <DropdownItem
            key='logout'
            color='danger'
          >
            Log Out
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
        <Button
          aria-label='Toggle theme'
          isIconOnly
          variant='bordered'
          size='sm'
          onPress={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        >
          {theme === 'light' ? <TbSun size={20} /> : <TbMoon size={20} />}
        </Button>
      </div>
    </div>
  )
}
