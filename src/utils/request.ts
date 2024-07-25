import axios, { AxiosError } from 'axios'
import { showLoading } from '@/utils/loading'

const instance = axios.create({
  baseUrl: '/api',
  timeout: 8000,
  timeoutErrorMessage: 'Network Timeout.',
  withCredentials: true
})

// 请求拦截器
instance.interceptors.request.use(
  config => {
    showLoading()
    const token = localstorage.getItem('token')
    if (token) {
      config.headers.Authorization = 'Token::'+ token
    }
    return {
      ...config
    }
  },
  (error: AxiosError) => {
    return Promise.reject(error)
  }
)


export default {
  get(url: string, params: any) {
    return axios.get(url, { params })
  },
  post(url: string, params: any) {
    return axios.post(url, params)
  }
}
