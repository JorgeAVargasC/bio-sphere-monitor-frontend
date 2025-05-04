import DashboardLayout from '../layout'
import { Navigate, RouteObject } from 'react-router-dom'
import StationsPage from '@dashboard/stations'
import HistoryPage from '@dashboard/history'
import AnalyticsPage from '@dashboard/analytics'

export const dashboardRoutes: RouteObject = {
  path: '/dashboard',
  element: <DashboardLayout />,
  children: [
    {
      index: true,
      element: <Navigate to='/dashboard/stations' />
    },
    {
      path: '/dashboard/stations',
      element: <StationsPage />
    },
    {
      path: '/dashboard/history',
      element: <HistoryPage />
    },
    {
      path: '/dashboard/analytics',
      element: <AnalyticsPage />
    },
    {
      path: '*',
      element: <Navigate to='/dashboard/colmenas' />
    }
  ]
}
