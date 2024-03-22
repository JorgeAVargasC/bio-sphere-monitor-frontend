import { responsive } from '@app-utils/responsive'
import styled from 'styled-components'

export const StyledMain = styled.main<{ $sidebarWidth: number }>`
  padding: 70px 20px 20px 20px;
  width: 100%;
  transition: all 0.2s ease-in-out;
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
  gap: 20px;

  ${responsive('--md')} {
    padding-left: ${(props) => props.$sidebarWidth + 20}px;
  }
`
