import React from 'react'
import { Row, Col, Menu } from 'antd'
import { HomeOutlined, VideoCameraOutlined, FileTextOutlined } from '@ant-design/icons'
import type { RouteObject } from "react-router-dom";
import { NavLink, Route, Routes, useRoutes } from 'react-router-dom'
import './index.less'

import Home from '../../pages/home'

const Header = () => {

    let routersList: RouteObject[] = [
        {
            path: '/',
            element: <Home />,
        }, {
            path: '/video',
            // element: <Home/>
        }, {
            path: '/life',
            // element: <Home/>
        }
    ]

    let routers = useRoutes(routersList)

    return (
        <div>
            <Row className='header' justify='center' align='middle'>
                <Col xs={24} sm={24} md={14} xl={10} className='logo'>
                    <span className='logo-name'>Alina</span>
                    <span className='logo-desc'>Describe of life</span>
                </Col>
                <Col xs={0} sm={0} md={10} xl={8} className='main-menu'>
                    <Menu className='menu' mode='horizontal'>
                        <Menu.Item key="home" className='menu-item'>
                            <NavLink replace to="/">
                                <HomeOutlined />
                                <span>首页</span>
                            </NavLink>
                        </Menu.Item>
                        <Menu.Item key="video" className='menu-item'>
                            <NavLink to="/video">
                                <VideoCameraOutlined />
                                <span>视频</span>
                            </NavLink>
                        </Menu.Item>
                        <Menu.Item key="life" className='menu-item'>
                            <NavLink to="/life">
                                <FileTextOutlined />
                                <span>生活</span>
                            </NavLink>
                        </Menu.Item>
                    </Menu>
                </Col>
            </Row>
            <div className="panel">
                <div className="panel-body">
                    {/* 注册路由 方法一 */}
                    {/* <Routes>
                        <Route path="/" element={<Home />} />
                    </Routes> */}
                    {/* 方法二 */}
                    {routers}
                </div>
            </div>
        </div>
    )
}

export default Header