import { responsive } from '@app-utils/responsive'
import styled from 'styled-components'

export const NavbarStyled = styled.div<{
  $sidebarWidth: number
}>`
  display: grid;
  position: fixed;
  height: 50px;
  max-height: 50px;
  top: 0;
  transition: all 0.2s ease-in-out;
  z-index: 20;

  left: 0;
  width: 100%;

  ${responsive('--md')} {
    left: ${(props) => props.$sidebarWidth}px;
    width: calc(100% - ${(props) => props.$sidebarWidth}px);
  }
`
