import { StyledMain } from './content.styled'
import { useSidebarStore } from '@dashboard/shared/store'

type Props = {
  children: React.ReactNode
}

export const Content: React.FC<Props> = ({ children }) => {
  const sidebarWidth = useSidebarStore((state) => state.sidebarWidth)

  return (
    <StyledMain
      $sidebarWidth={sidebarWidth}
      className='bg-foreground-50 z-0'
    >
      <>{children}</>
    </StyledMain>
  )
}
