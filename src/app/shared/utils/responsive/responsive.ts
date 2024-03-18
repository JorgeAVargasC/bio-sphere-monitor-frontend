import { css } from 'styled-components'

type TypeBreakpoints = '--sm' | '--md' | '--lg' | '--xl' | '--2xl'
const BREAKPOINTS : Record<TypeBreakpoints, string> = {
  '--sm': '640px',
  '--md': '768px',
  '--lg': '1024px',
  '--xl': '1280px',
  '--2xl': '1536px'
}

export const responsive = (size: TypeBreakpoints = '--md') => {
  return (css`@media (min-width: ${BREAKPOINTS[size]})`)
}