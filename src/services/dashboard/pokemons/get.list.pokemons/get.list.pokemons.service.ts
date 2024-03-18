import { TypeService, rget } from '@axios/instances'
import { IGetListPokemonsRes } from './get.list.pokemons.res.model'
import { IGetListPokemonsReq } from './get.list.pokemons.req.model'

type S = TypeService<IGetListPokemonsRes[], IGetListPokemonsReq>

export const getListPokemons: S = ({ limit, offset }) =>
  rget(`/pokemon?limit=${limit}&offset=${offset}`)
