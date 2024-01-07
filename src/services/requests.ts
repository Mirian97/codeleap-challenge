import { AxiosResponse } from 'axios'
import axiosInstance from './api'

export const responseBody = (response: AxiosResponse) => response.data

export const requests = {
  get: (url: string) => axiosInstance.get(url).then(responseBody),
  post: (url: string, body: {}) => axiosInstance.post(url, body).then(responseBody),
  put: (url: string, body: {}) => axiosInstance.put(url, body).then(responseBody),
  patch: (url: string, body: {}) => axiosInstance.patch(url, body).then(responseBody),
  delete: (url: string) => axiosInstance.delete(url).then(responseBody)
}
