import styled from 'styled-components'

export const StyledFileListPreview = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;
  height: 35px;
  max-width: 100%;
  transition: 0.2s;

  p {
    width: 80%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: initial;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }

  &:hover {
    background: var(--neutral-6);
  }
`

export const LeftSide = styled.div`
  display: flex;
  gap: 8px;
  height: 100%;
  width: 60%;
  justify-content: start;
  align-items: center;
`

export const RightSide = styled.div`
  display: flex;
  gap: 8px;
  height: 100%;
  width: 40%;
  justify-content: end;
  align-items: center;
`
