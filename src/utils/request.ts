import axios, { AxiosError, request } from 'axios'
import { hideLoading, showLoading } from '@/utils/loading'
import { message } from 'antd'
import { Simulate } from 'react-dom/test-utils'
import error = Simulate.error

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
      config.headers.Authorization = 'Token::' + token
    }
    return {
      ...config
    }
  },
  (error: AxiosError) => {
    return Promise.reject(error)
  }
)

// 响应拦截
instance.interceptors.response.use(response => {
  const data = response.data
  hideLoading()
  if (data.code === 50001) {
    message.error(data.msg)
    localStorage.removeItem('token')
    location.href = '/login'
  } else if (data.code != 0) {
    message.error(data.msg)
    return Promise.reject(data)
  }
  return data.data
}, error => {
  hideLoading()
  message.error(error.message)
  return Promise.reject(error.message)
})

export default {
  get<T>(url: string, params?: object): Promise<T> {
    return axios.get(url, { params })
  },
  post<T>(url: string, params?: object): Promise<T> {
    return axios.post(url, params)
  }
}
