import { AxiosResponse } from 'axios'

export type TypeService<Res, Body = void> = (body: Body) => Promise<AxiosResponse<Res>>
