import { BreadCrumbs, Content, Navbar, Sidebar } from './components'
import { Outlet } from 'react-router-dom'

const DashboardLayout: React.FC = () => {
  return (
    <div className='flex'>
      <Sidebar />
      <Navbar />
      <Content>
        <BreadCrumbs />
        <Outlet />
      </Content>
    </div>
  )
}

export default DashboardLayout
