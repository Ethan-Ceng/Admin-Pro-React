import React from 'react'
import { Button, Result } from 'antd'
import { useNavigate } from 'react-router-dom'

const NotFound: React.FC = () => {
const navigate = useNavigate()
  const handleClick = () => {
    navigate('/')
  }
  return <Result status={404} title="404" subTitle="Sorry! Page not found!" extra={
    <Button type='primary' onClick={handleClick}>Back Home</Button>
  }/>
}

export default NotFound
