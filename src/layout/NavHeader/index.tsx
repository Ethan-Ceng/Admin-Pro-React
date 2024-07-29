import React from 'react'
import { Avatar, Layout } from 'antd'
import { DownOutlined } from '@ant-design/icons'
import type { MenuProps } from 'antd'
import { Dropdown, message, Space } from 'antd'
import styles from './index.module.less'
import LogoImg from '@/assets/images/HSBC-logo.png'


const onClick: MenuProps['onClick'] = ({ key }) => {
  message.info(`Click on item ${key}`)
}

const items: MenuProps['items'] = [
  {
    label: 'User Center',
    key: '1'
  },
  {
    label: 'Setting',
    key: '2'
  },
  {
    label: 'Log out',
    key: '3'
  }
]


const NavHeader = () => {
  return (
    <Layout.Header theme='light' className={styles.navHeader}>
      <div className={styles.logo}>
        <img className={styles.logoImg} src={LogoImg} alt='hsbc' />
        <span className={styles.title}>Pluto</span>
      </div>

      <div className={styles.flexItem}></div>

      <div className={styles.rightNav}>
        <Dropdown menu={{ items, onClick }}>
          <div className={styles.avatar} onClick={(e) => e.preventDefault()}>
            <Space>
              <Avatar src={<img src={LogoImg} alt="avatar" />} />
              Ethan
            </Space>
          </div>
        </Dropdown>
      </div>
    </Layout.Header>
  )
}

export default NavHeader
