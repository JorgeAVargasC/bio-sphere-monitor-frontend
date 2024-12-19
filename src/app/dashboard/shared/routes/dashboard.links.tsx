import { GiHoneycomb } from 'react-icons/gi'
import { TbChartHistogram } from 'react-icons/tb'

export type TypeLinks = {
  label: string
  href: string
  icon?: JSX.Element
  subRoutes?: TypeLinks[]
}

export const DASHBOARD_LINKS: TypeLinks[] = [
  {
    label: 'Mis Colmenas',
    href: '/dashboard/beehives',
    icon: <GiHoneycomb className='w-full h-auto' />
  },
  {
    label: 'Historial',
    href: '/dashboard/history',
    icon: <TbChartHistogram className='w-full h-auto' />
  }
]
