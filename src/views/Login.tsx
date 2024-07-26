import React, { useEffect } from 'react'
import request from '@/utils/request.ts'
import { showLoading } from '@/utils/loading'

const Login: React.FC = () => {
  useEffect(() => {
    showLoading()
  })
  return <div>Login Page</div>
}

export default Login
