import { Layout, Menu, Popconfirm } from 'antd'
import { Link, Outlet, useLocation,useNavigate } from 'react-router-dom'
import {
  HomeOutlined,
  DiffOutlined,
  EditOutlined,
  LogoutOutlined
} from '@ant-design/icons'
import './index.scss'
import { useStore } from '@/store'
import { useEffect } from 'react'
import { observer } from 'mobx-react-lite'
const { Header, Sider } = Layout

const GeekLayout = () => {
  const location = useLocation()
  // console.log(location)
  const { userStore,loginStore,channelStore} = useStore()
  const menuItems = [
    {
      icon:<HomeOutlined />,
      key:"/",
      label:<Link to='/'>数据概览</Link>
    },
    {
      icon:<DiffOutlined />,
      key:"/article",
      label:<Link to='/article'>内容管理</Link>
    },
    {
      icon:<EditOutlined />,
      key:'/publish',
      label:<Link to='/publish'>发布文章</Link>
    },
  ]
  useEffect(()=>{
    userStore.getUserInfo()
    channelStore.loadChannelList()
  },[userStore,channelStore])
  const navigate = useNavigate()
  const onConfirm = () =>{
    loginStore.loginOut()
    navigate('/login')
  }
  return (
    <Layout>
      <Header className="header">
        <div className="logo" />
        <div className="user-info">
          <span className="user-name">{userStore.userInfo.name}</span>
          <span className="user-logout">
            <Popconfirm 
              onConfirm={onConfirm}
              title="是否确认退出？" okText="退出" cancelText="取消">
              <LogoutOutlined /> 退出
            </Popconfirm>
          </span>
        </div>
      </Header>
      <Layout>
        <Sider width={200} className="site-layout-background">
          <Menu
            mode="inline"
            theme="dark"
            selectedKeys={[location.pathname]}
            style={{ height: '100%', borderRight: 0 }}
            items={menuItems}
          >
          </Menu>
        </Sider>
        <Layout className="layout-content" style={{ padding: 20 }}>
          <Outlet />
        </Layout>
      </Layout>
    </Layout>
  )
}

export default observer(GeekLayout)