import { create } from 'zustand'

type ThemeValue = 'light' | 'dark'

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
  theme: 'dark',
  setTheme: (theme) => {
    set({ theme })
  }
}))
