import request from '@/utils/request'

export default {
  login (params) {
    return request.post('/api/login', params)
  }
}
