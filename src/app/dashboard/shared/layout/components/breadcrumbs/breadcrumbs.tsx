import { useLocation } from 'react-router-dom'

import {
  Breadcrumbs as BreadCrumbsNextUi,
  BreadcrumbItem
} from '@nextui-org/react'
import { useEffect, useState } from 'react'

import { DASHBOARD_BREADCRUMBS } from '@dashboard/shared/routes'

export const BreadCrumbs = () => {
  const { pathname } = useLocation()
  const [pathnames, setPathnames] = useState<string[]>([])

  useEffect(() => {
    console.log('pathname', pathname)
    console.log('pathnames', pathnames)
    setPathnames(pathname.split('/').filter((x) => x))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  return (
    <BreadCrumbsNextUi>
      {pathnames.map((_, index) => {
        const to =
          `/${pathnames.slice(0, index + 1).join('/')}` as keyof typeof DASHBOARD_BREADCRUMBS
        return (
          <BreadcrumbItem
            href={to}
            key={to}
            startContent={
              <>
                {DASHBOARD_BREADCRUMBS[to].icon && (
                  <div className='w-4 h-4'>
                    {DASHBOARD_BREADCRUMBS[to].icon}
                  </div>
                )}
              </>
            }
          >
            {DASHBOARD_BREADCRUMBS[to].label}
          </BreadcrumbItem>
        )
      })}
    </BreadCrumbsNextUi>
  )
}
