import { useState } from 'react'
import { RouterProvider } from 'react-router-dom'
import { ConfigProvider, App as AntdApp } from 'antd'
import router from '@/router/index'

function App() {
  return <ConfigProvider
    theme={{
      dark: false,
      token: {
        // Seed Token，影响范围大
        borderRadius: 2
        // 派生变量，影响范围小
      }
    }}
  >
    <AntdApp>
      <RouterProvider router={router} />
    </AntdApp>
  </ConfigProvider>
}

export default App
