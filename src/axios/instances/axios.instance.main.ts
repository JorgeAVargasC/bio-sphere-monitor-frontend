import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

import { configBasic, configBlob, configFormData, configURLEncoded } from '../configs'
import { axiosTokenRequestInterceptor } from '../interceptors'

type TypeEndpoint = string

const createAxiosInstance = (config: AxiosRequestConfig) => {
  const instance = axios.create(config)

  instance.interceptors.request.use(
    (request) => axiosTokenRequestInterceptor(request),
    (error) => Promise.reject(error)
  )

  instance.interceptors.response.use(
    (response) => response,
    (error) => Promise.reject(error)
  )

  return instance
}

const rget = async <T = any>(endpoint: TypeEndpoint) => {
  return await createAxiosInstance(configBasic).get<T>(endpoint)
}

const rgetBlob = async <T = any>(endpoint: TypeEndpoint) => {
  return await createAxiosInstance(configBlob).get<T>(endpoint)
}

const rpost = async <T = any, D = any>(endpoint: TypeEndpoint, data: D) => {
  return await createAxiosInstance(configBasic).post<T, AxiosResponse<T>, D>(endpoint, data)
}

const rpostBlob = async <T = any, D = any>(endpoint: TypeEndpoint, data: D) => {
  return await createAxiosInstance(configBlob).post<T, AxiosResponse<T>, D>(endpoint, data)
}

const rpostFormData = async <T = any, D = any>(endpoint: TypeEndpoint, data: D) => {
  return await createAxiosInstance(configFormData).post<T, AxiosResponse<T>, D>(endpoint, data)
}

const rputFormData = async <T = any, D = any>(endpoint: TypeEndpoint, data: D) => {
  return await createAxiosInstance(configFormData).put<T, AxiosResponse<T>, D>(endpoint, data)
}

const rpostURLEncoded = async <T = any, D = any>(endpoint: TypeEndpoint, data: D) => {
  return await createAxiosInstance(configURLEncoded).post<T, AxiosResponse<T>, D>(endpoint, data)
}

const rput = async <T = any, D = any>(endpoint: TypeEndpoint, data: D) => {
  return await createAxiosInstance(configBasic).put<T, AxiosResponse<T>, D>(endpoint, data)
}

const rdelete = async <T = any>(endpoint: TypeEndpoint) => {
  return await createAxiosInstance(configBasic).delete<T>(endpoint)
}

// interface IBodyExample {
//   id: number
// }

// interface IResponseExample {
//   text: string
//   num: number
// }

// const { data } = await rpost<IBodyExample, IResponseExample>('url', { id: 2 })
// const {num, text} = data

export {
  rdelete,
  rget,
  rgetBlob,
  rpost,
  rpostBlob,
  rput,
  rpostFormData,
  rpostURLEncoded,
  rputFormData
}
