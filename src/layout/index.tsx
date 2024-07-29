import React from 'react'
import { Outlet } from 'react-router-dom'
import { Button, Flex, Layout } from 'antd'
import Sider from './Sider'
import NavHeader from './NavHeader'
import { LeftCircleOutlined, LeftOutlined } from '@ant-design/icons'

const { Header, Footer, Content } = Layout


const contentStyle: React.CSSProperties = {
  padding: '32px 40px',
  backgroundColor: '#f6f6f6'
}

const layoutStyle = {
  overflow: 'hidden',
  width: '100%',
  height: '100%'
}

const AppLayout: React.FC = () => {

  return (
    <Layout style={layoutStyle}>
      <NavHeader />
      <Layout>
        <Sider />
        <Content style={contentStyle}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  )
}


export default AppLayout
