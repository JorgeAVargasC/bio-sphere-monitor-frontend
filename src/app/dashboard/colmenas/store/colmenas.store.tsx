import { create } from 'zustand'

type State = {
  view: 'list' | 'grid'
}

type Actions = {
  setView: (view: State['view']) => void
  toggleView: () => void
}

type Store = State & Actions

export const useColmenasStore = create<Store>((set, get) => ({
  view: 'grid',
  setView: (view) => set({ view }),
  toggleView: () => set({ view: get().view === 'grid' ? 'list' : 'grid' })
}))
