import CarrouselPage from '@dashboard/examples/carrousel'
import FormsPage from '@dashboard/examples/forms'
import PokemonsPage from '@dashboard/examples/pokemons'
import { RouteObject } from 'react-router-dom'

export const examplesRoutes: RouteObject = {
  path: '/dashboard/examples',
  children: [
    {
      index: true,
      element: <FormsPage />
    },
    {
      path: '/dashboard/examples/forms',
      element: <FormsPage />
    },
    {
      path: '/dashboard/examples/pokemons',
      element: <PokemonsPage />
    },
    {
      path: '/dashboard/examples/carrousel',
      element: <CarrouselPage />
    }
  ]
}
