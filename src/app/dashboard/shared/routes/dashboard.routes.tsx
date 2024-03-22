import DashboardLayout from '../layout'
import { RouteObject } from 'react-router-dom'
import { examplesRoutes } from '@dashboard/examples/shared/routes'
import ColmenasPage from '@dashboard/colmenas'
import HomePage from '@dashboard/home'

export const dashboardRoutes: RouteObject = {
  path: '/dashboard',
  element: <DashboardLayout />,
  children: [
    {
      index: true,
      element: <HomePage />
    },
    {
      path: '/dashboard/colmenas',
      element: <ColmenasPage />
    },
    {
      path: '/dashboard/examples',
      children: [examplesRoutes]
    }
  ]
}
