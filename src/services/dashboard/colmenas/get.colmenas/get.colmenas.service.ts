import { TypeService } from '@axios/instances'
import { IGetColmenasRes } from './get.colmenas.res.model'
import { IGetColmenasReq } from './get.colmenas.req.model'
import { colmenasData } from './colmenas.data'
import { AxiosResponse } from 'axios'

type S = TypeService<IGetColmenasRes, IGetColmenasReq>

// export const getColmenas: S = ({ limit, page }) =>
// rget(`/colmenas?limit=${limit}&page=${page}`)

export const getColmenasService: S = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve({ data: colmenasData } as AxiosResponse<IGetColmenasRes>)
    }, 1000)
  })
