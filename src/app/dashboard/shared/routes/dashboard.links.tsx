import { GiHoneycomb } from 'react-icons/gi'
import { TbCarouselHorizontal, TbForms, TbHome } from 'react-icons/tb'

export type TypeLinks = {
  label: string
  href: string
  icon?: JSX.Element
  subRoutes?: TypeLinks[]
}

export const DASHBOARD_LINKS: TypeLinks[] = [
  {
    label: 'Inicio',
    href: '/dashboard',
    icon: <TbHome className='w-full h-auto' />
  },
  {
    label: 'Mis Colmenas',
    href: '/dashboard/colmenas',
    icon: <GiHoneycomb className='w-full h-auto' />
  },
  {
    label: 'Examples',
    href: '/dashboard/examples',
    icon: <TbForms className='w-full h-auto' />,
    subRoutes: [
      {
        label: 'Forms',
        href: '/dashboard/examples/forms'
      },
      {
        label: 'Carrousel',
        href: '/dashboard/examples/carrousel',
        icon: <TbCarouselHorizontal className='w-full h-auto' />
      }
    ]
  }
]

export const DASHBOARD_BREADCRUMBS: Record<
  string,
  { label: string; icon?: React.ReactNode }
> = {
  '/dashboard': {
    label: 'Inicio',
    icon: <TbHome className='w-full h-auto' />
  },
  '/dashboard/colmenas': {
    label: 'Mis Colmenas',
    icon: <GiHoneycomb className='w-full h-auto' />
  },
  '/dashboard/examples': {
    label: 'Examples',
    icon: <TbForms className='w-full h-auto' />
  },
  '/dashboard/examples/forms': {
    label: 'Forms'
  },
  '/dashboard/examples/carrousel': {
    label: 'Carrousel',
    icon: <TbCarouselHorizontal className='w-full h-auto' />
  }
}
