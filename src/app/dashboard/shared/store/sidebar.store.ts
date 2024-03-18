import { create } from 'zustand'

type State = {
  sidebarState: 'open' | 'close'
  sidebarWidth: number
}

type Actions = {
  toggleSidebar: () => void
}

type Store = State & Actions

export const useSidebarStore = create<Store>((set, get) => ({
  sidebarState: 'open',
  sidebarWidth: 250,
  toggleSidebar: () => {
    const { sidebarState } = get()
    set({ sidebarState: sidebarState === 'open' ? 'close' : 'open' })
    set({ sidebarWidth: sidebarState === 'open' ? 50 : 250 })
  }
}))
