import { responsive } from '@app-utils/responsive'
import styled from 'styled-components'

type SidebarProps = {
  $sidebarState: 'open' | 'close'
  $sidebarWidth: number
}

export const StyledSidebar = styled.aside<SidebarProps>`
  display: flex;
  flex-direction: column;
  position: fixed;
  z-index: 30;
  top: 0;
  transition: width 0.2s ease-in-out;
  min-height: 100dvh;
  max-height: 100dvh;
  left: ${(props) =>
    props.$sidebarState === 'open' ? 0 : `-${props.$sidebarWidth}px`};
  width: ${(props) => props.$sidebarWidth}px;
  min-width: ${(props) => props.$sidebarWidth}px;
  max-width: ${(props) => props.$sidebarWidth}px;
  transition: all 0.2s ease-in-out;
  ${responsive('--md')} {
    left: 0;
  }
`

export const StyledSidebarAccordion = styled.div`
  display: flex;
  flex-direction: column;
`

export const StyledSidebarAccordionIcon = styled.div`
  display: grid;
  place-items: center;
  width: 38px;
  min-width: 38px;
  aspect-ratio: 1;
  svg {
    height: 20px;
    max-height: 20px;
  }
`

export const StyledSidebarAccordionLabel = styled.div<SidebarProps>`
  display: flex;
  align-items: center;
  flex: 1;
  width: ${(props) =>
    props.$sidebarState === 'open'
      ? `calc(${props.$sidebarWidth} - 38px)`
      : '0'};

  opacity: ${(props) => (props.$sidebarState === 'open' ? 1 : 0)};
  transition: all 0.2s ease-in-out;
  overflow: hidden;
  white-space: nowrap;
`
