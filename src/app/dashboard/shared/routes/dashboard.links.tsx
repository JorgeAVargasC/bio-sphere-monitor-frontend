import { IoLocationSharp } from 'react-icons/io5'
import { TbChartBarPopular, TbHistory } from 'react-icons/tb'

export type TypeLinks = {
  label: string
  href: string
  icon?: JSX.Element
  subRoutes?: TypeLinks[]
}

export const DASHBOARD_LINKS: TypeLinks[] = [
  {
    label: 'My Stations',
    href: '/dashboard/stations',
    icon: <IoLocationSharp className='w-full h-auto' />
  },
  {
    label: 'Record History',
    href: '/dashboard/history',
    icon: <TbHistory className='w-full h-auto' />
  },
  {
    label: 'Analytics',
    href: '/dashboard/analytics',
    icon: <TbChartBarPopular className='w-full h-auto' />
  }
]
