import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  User,
  nextui
} from '@nextui-org/react'
import { THEMES, useThemeStore } from '@store/theme'
import { useEffect } from 'react'
import { TbMoon, TbSun } from 'react-icons/tb'

export const NavbarRight = () => {
  const theme = useThemeStore((state) => state.theme)
  const setTheme = useThemeStore((state) => state.setTheme)

  useEffect(() => {
    nextui({
      themes: {
        dark: {
          colors: {
            primary: '#00ff'
          }
        }
      }
    })
  }, [])

  return (
    <div className='flex items-center gap-4'>
      <Dropdown placement='bottom-start'>
        <DropdownTrigger>
          <User
            as='button'
            avatarProps={{
              isBordered: true,
              src: 'https://media.licdn.com/dms/image/D4E35AQF5-qT9SRqDDA/profile-framedphoto-shrink_800_800/0/1705793221342?e=1711346400&v=beta&t=MyXmTG8IZ0JQZi7eP8r1Hpea86Ejcyz9koHnpHojkFw',
              size: 'sm'
            }}
            className='transition-transform'
            description='@lauramamian'
            name='Laura Mamián'
          />
        </DropdownTrigger>
        <DropdownMenu
          aria-label='User Actions'
          variant='flat'
        >
          <DropdownItem
            key='profile'
            className='h-14 gap-2'
          >
            <p className='font-bold'>Signed in as</p>
            <p className='font-bold'>@lauramamian</p>
          </DropdownItem>
          <DropdownItem key='settings'>My Settings</DropdownItem>
          <DropdownItem key='team_settings'>Team Settings</DropdownItem>
          <DropdownItem key='analytics'>Analytics</DropdownItem>
          <DropdownItem key='system'>System</DropdownItem>
          <DropdownItem key='configurations'>Configurations</DropdownItem>
          <DropdownItem key='help_and_feedback'>Help & Feedback</DropdownItem>
          <DropdownItem
            key='logout'
            color='danger'
          >
            Log Out
          </DropdownItem>
          <DropdownItem>
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
