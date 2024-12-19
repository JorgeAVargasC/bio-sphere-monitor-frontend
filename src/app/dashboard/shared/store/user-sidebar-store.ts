import { create } from 'zustand'

type State = {
  sidebarState: 'open' | 'close'
  sidebarWidth: number
}

type Actions = {
  toggleSidebar: () => void
  setSidebarState: (state: State['sidebarState']) => void
}

type Store = State & Actions

export const useSidebarStore = create<Store>((set, get) => ({
  sidebarState: window.innerWidth > 768 ? 'open' : 'close',
  sidebarWidth: window.innerWidth > 768 ? 250 : 50,
  toggleSidebar: () => {
    const { sidebarState } = get()
    set({ sidebarState: sidebarState === 'open' ? 'close' : 'open' })
    set({ sidebarWidth: sidebarState === 'open' ? 50 : 250 })
  },
  setSidebarState: (sidebarState) => {
    set({ sidebarState })
    set({ sidebarWidth: sidebarState === 'open' ? 250 : 50 })
  }
}))
