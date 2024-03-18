import { dashboardRoutes } from '@dashboard/shared/routes'
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom'
import { RootLayout } from '../layout/root.layout'

export const AppRoutes = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Navigate to='/dashboard' />
        },
        {
          path: '/dashboard',
          children: [dashboardRoutes]
        }
      ]
    }
  ])

  return <RouterProvider router={router} />
}
