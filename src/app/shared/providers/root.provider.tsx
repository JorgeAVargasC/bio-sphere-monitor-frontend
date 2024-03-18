import React from 'react'
import { NextUIProvider, ToastifyProvider } from '.'

type Props = {
  children: React.ReactNode
}

export const RootProvider: React.FC<Props> = ({ children }) => {
  return (
    <ToastifyProvider>
      <NextUIProvider>{children}</NextUIProvider>
    </ToastifyProvider>
  )
}
