import { RootProvider } from '@providers/index'
import { Outlet } from 'react-router-dom'

export const RootLayout = () => {
  return (
    <RootProvider>
      <Outlet />
    </RootProvider>
  )
}
