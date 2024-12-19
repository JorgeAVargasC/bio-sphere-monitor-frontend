import FormsPage from '@dashboard/examples/forms'
import { RouteObject } from 'react-router-dom'

export const examplesRoutes: RouteObject = {
  path: '/dashboard/examples',
  children: [
    {
      index: true,
      element: <FormsPage />
    },
    {
      path: '/dashboard/examples/forms',
      element: <FormsPage />
    }
  ]
}
