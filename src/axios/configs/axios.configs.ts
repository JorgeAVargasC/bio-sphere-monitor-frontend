import { AxiosRequestConfig } from 'axios'

// const API_BASE_URL: string = import.meta.env.VITE_API_URL as string
const API_BASE_URL = 'https://pokeapi.co/api/v2/'

const configBasic: AxiosRequestConfig = {
  baseURL: API_BASE_URL,
  timeout: 9000000, // 15 minutes
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  }
}

const configFormData: AxiosRequestConfig = {
  ...configBasic,
  headers: {
    ...configBasic.headers,
    'Content-Type': 'multipart/form-data'
  }
}

const configBlob: AxiosRequestConfig = {
  ...configBasic,
  responseType: 'blob'
}

const configURLEncoded: AxiosRequestConfig = {
  ...configBasic,
  headers: {
    ...configBasic.headers,
    'Content-Type': 'application/x-www-form-urlencoded'
  }
}

export { configBasic, configFormData, configBlob, configURLEncoded }
