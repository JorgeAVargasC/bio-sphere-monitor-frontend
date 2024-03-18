import React from 'react'
import { ToastContainer } from 'react-toastify'

type Props = {
  children: React.ReactNode
}

export const ToastifyProvider: React.FC<Props> = ({ children }) => {
  return (
    <>
      <ToastContainer />
      {children}
    </>
  )
}
