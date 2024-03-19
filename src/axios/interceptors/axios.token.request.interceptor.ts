import { InternalAxiosRequestConfig } from 'axios'
import Cookies from 'js-cookie'

export const axiosTokenRequestInterceptor = async (
  requestConfig: InternalAxiosRequestConfig
) => {
  const token = Cookies.get('token')
  if (token) {
    requestConfig.headers.Authorization = `Bearer ${token}`
  }
  return requestConfig
}
