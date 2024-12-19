import { create } from 'zustand'
import Cookies from 'js-cookie'

type ThemeValue = 'light' | 'dark'
9
type Theme = {
  value: ThemeValue
  label: string
}

export const THEMES: Theme[] = [
  {
    value: 'light',
    label: 'Light'
  },
  {
    value: 'dark',
    label: 'Dark'
  }
]

type State = {
  theme: ThemeValue
}

type Actions = {
  setTheme: (theme: ThemeValue) => void
}

type Store = State & Actions

export const useThemeStore = create<Store>((set) => ({
  theme: (Cookies.get('theme') as ThemeValue) || 'light',
  setTheme: (theme) => {
    set({ theme })
    Cookies.set('theme', theme)
  }
}))
