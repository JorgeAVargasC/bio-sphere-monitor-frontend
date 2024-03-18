import { useState } from 'react'
import {
  StyledSidebar,
  StyledSidebarAccordion,
  StyledSidebarAccordionIcon,
  StyledSidebarAccordionLabel
} from './sidebar.styled'

import { TbDots, TbForms } from 'react-icons/tb'

import { motion } from 'framer-motion'
import { Tooltip } from '@nextui-org/react'
import { Link, useLocation } from 'react-router-dom'
import { useSidebarStore } from '@dashboard/shared/store'
import { GiHoneycomb } from 'react-icons/gi'
import { FaForumbee } from 'react-icons/fa'
import { MdKeyboardArrowLeft } from 'react-icons/md'

export const Sidebar = () => {
  const sidebarState = useSidebarStore((state) => state.sidebarState)
  const sidebarWidth = useSidebarStore((state) => state.sidebarWidth)
  const toggle = useSidebarStore((state) => state.toggleSidebar)

  const [sectionsOpen, setSectionsOpen] = useState<number[]>([])
  const toggleSection = (index: number) => {
    if (sectionsOpen.includes(index)) {
      setSectionsOpen(sectionsOpen.filter((i) => i !== index))
    } else {
      setSectionsOpen([index])
    }
  }

  const { pathname } = useLocation()

  type TypeLinks = {
    label: string
    href: string
    icon?: JSX.Element
    subRoutes?: TypeLinks[]
  }

  const LINKS: TypeLinks[] = [
    {
      label: 'Colmenas',
      href: '/dashboard',
      icon: <GiHoneycomb size={25} />
    },
    {
      label: 'Examples',
      href: '/dashboard/examples',
      icon: <TbForms size={25} />,
      subRoutes: [
        {
          label: 'Forms',
          href: '/dashboard/examples/forms'
        }
        // {
        //   label: 'Pokemons',
        //   href: '/dashboard/examples/pokemons'
        // }
      ]
    }
  ]

  return (
    <>
      <div
        className={`absolute md:hidden top-0 left-0 w-full z-30
        ${sidebarState === 'open' ? 'opacity-50 bg-primary h-full' : 'opacity-0 h-0'}`}
        onClick={toggle}
      />
      <StyledSidebar
        $sidebarState={sidebarState}
        $sidebarWidth={sidebarWidth}
        className='shadow-md bg-background'
      >
        <div className='flex items-center p-3 gap-3 h-[50px]'>
          <FaForumbee
            className='fill-primary min-w-[24px]'
            size={25}
          />
          {sidebarState === 'open' && <h2 className='truncate'>Bee K!</h2>}
        </div>

        <div className='flex flex-col'>
          {LINKS.map((link, index) => (
            <StyledSidebarAccordion key={link.href}>
              <Tooltip
                content={link.label}
                placement='right'
              >
                <Link
                  to={link.href}
                  className={`flex cursor-pointer mx-1.5 mb-1 rounded-lg ${pathname === link.href ? 'bg-primary text-white duration-200 ease-in-out' : 'hover:bg-foreground-200 duration-200 ease-in-out'}`}
                  onClick={() => toggleSection(index)}
                >
                  <StyledSidebarAccordionIcon>
                    {link.icon || <TbDots />}
                  </StyledSidebarAccordionIcon>
                  <StyledSidebarAccordionLabel
                    $sidebarState={sidebarState}
                    $sidebarWidth={sidebarWidth}
                  >
                    {link.label}
                  </StyledSidebarAccordionLabel>
                  {link.subRoutes && sidebarState === 'open' && (
                    <div className='grid place-items-center mr-1'>
                      <motion.div
                        initial={{ rotate: 0 }}
                        animate={{
                          rotate: sectionsOpen.includes(index) ? -90 : 0
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        <MdKeyboardArrowLeft size={25} />
                      </motion.div>
                    </div>
                  )}
                </Link>
              </Tooltip>
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: sectionsOpen.includes(index) ? 'auto' : 0,
                  opacity: sectionsOpen.includes(index) ? 1 : 0
                }}
                transition={{ duration: 0.2 }}
                className={`flex flex-col overflow-hidden ${sidebarState === 'open' ? 'border-l border-foreground-200 ml-6' : ''} `}
              >
                {link.subRoutes &&
                  link.subRoutes.map((subLink) => (
                    <Tooltip
                      key={subLink.href}
                      content={subLink.label}
                      placement='right'
                    >
                      <Link
                        to={subLink.href}
                        className={`flex cursor-pointer mx-1.5 mb-1 rounded-lg ${pathname === subLink.href ? 'bg-primary text-white duration-200 ease-in-out' : 'hover:bg-foreground-200 duration-200 ease-in-out'}`}
                      >
                        <StyledSidebarAccordionIcon>
                          {subLink.icon || <TbDots />}
                        </StyledSidebarAccordionIcon>
                        <StyledSidebarAccordionLabel
                          $sidebarState={sidebarState}
                          $sidebarWidth={sidebarWidth}
                        >
                          {subLink.label}
                        </StyledSidebarAccordionLabel>
                      </Link>
                    </Tooltip>
                  ))}
              </motion.div>
            </StyledSidebarAccordion>
          ))}
        </div>
      </StyledSidebar>
    </>
  )
}
