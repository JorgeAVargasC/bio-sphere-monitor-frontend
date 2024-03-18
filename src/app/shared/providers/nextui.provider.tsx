import { NextUIProvider as Provider } from '@nextui-org/react'
import { useThemeStore } from '@store/theme'
import { useNavigate } from 'react-router-dom'

type Props = {
  children: React.ReactNode
}

export const NextUIProvider: React.FC<Props> = ({ children }) => {
  const navigate = useNavigate()
  const theme = useThemeStore((state) => state.theme)
  return (
    <Provider navigate={navigate}>
      <div
        className={`${theme} bg-background text-foreground-600 min-h-screen`}
      >
        {children}
      </div>
    </Provider>
  )
}
