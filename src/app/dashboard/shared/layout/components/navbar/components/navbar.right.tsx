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
            primary: '#00ff',
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
              src: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
              size: 'sm'
            }}
            className='transition-transform'
            description='@tonyreichert'
            name='Tony Reichert'
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
            <p className='font-bold'>@tonyreichert</p>
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
        </DropdownMenu>
      </Dropdown>
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
  )
}
