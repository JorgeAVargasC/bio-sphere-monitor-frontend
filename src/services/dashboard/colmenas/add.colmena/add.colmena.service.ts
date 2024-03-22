import { TypeService } from '@axios/instances'
import { IAddColmenasReq } from './add.colmena.req.model'
import { AxiosResponse } from 'axios'

type S = TypeService<void, IAddColmenasReq>

// export const getColmenas: S = ({ limit, page }) =>
// rget(`/colmenas?limit=${limit}&page=${page}`)

export const addColmenaService: S = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve({} as AxiosResponse<void>)
    }, 1000)
  })
