import { DASHBOARD_LINKS } from '@dashboard/shared/routes'
import { Card, CardHeader } from '@nextui-org/react'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <div className='grid grid-cols-[repeat(auto-fill,minmax(150px,1fr))] gap-4'>
      {DASHBOARD_LINKS.slice(1).map((link) => (
        <Link
          to={link.href}
          key={link.href}
        >
          <Card isHoverable>
            <CardHeader className='gap-2'>
              <div className='h-5 w-5'>{link.icon}</div>
              <h6>{link.label}</h6>
            </CardHeader>
          </Card>
        </Link>
      ))}
    </div>
  )
}

export default HomePage
