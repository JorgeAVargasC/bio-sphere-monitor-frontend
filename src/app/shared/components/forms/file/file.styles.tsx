import styled from 'styled-components'

import { IFile } from '..'

export const StyledFile = styled.div`
  display: grid;
`

export const StyledFileListPreviewContainer = styled.div`
  display: grid;
  max-height: 230px;
  overflow-y: auto;
  padding-right: 5px;
`

export const StyledFileInput = styled.div<{
  styleType: IFile['styleType']
}>`
  label {
    display: grid;
    padding: 15px;
    place-items: center;
    border: 2px dotted var(--amb-blue-1);
    border-radius: 5px;
    cursor: pointer;
    text-align: center;
    min-height: ${({ styleType }) => {
      if (styleType === 'small') {
        return '50px'
      } else if (styleType === 'medium') {
        return '100px'
      } else if (styleType === 'large') {
        return '150px'
      } else {
        return 'auto' // Valor por defecto si styleType no coincide con ninguno de los esperados
      }
    }};

    color: var(--amb-blue-1);
  }
`
