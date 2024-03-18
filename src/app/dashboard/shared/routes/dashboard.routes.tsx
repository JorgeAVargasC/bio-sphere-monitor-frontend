import DashboardLayout from '../layout'
import { RouteObject } from 'react-router-dom'
import { examplesRoutes } from '@dashboard/examples/shared/routes'
import ColmenasPage from '@dashboard/colmenas'

export const dashboardRoutes: RouteObject = {
  path: '/dashboard',
  element: <DashboardLayout />,
  children: [
    {
      index: true,
      element: <ColmenasPage />
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
