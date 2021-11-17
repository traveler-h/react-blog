import React from 'react'
import { Row, Col, Menu } from 'antd'
import { HomeOutlined, VideoCameraOutlined, FileTextOutlined } from '@ant-design/icons'
import { NavLink } from 'react-router-dom'
import './index.less'

// import type { RouteObject } from "react-router-dom";
// import { Route, Routes, useRoutes } from 'react-router-dom'
// let routersList: RouteObject[] = [
    //     {
    //         path: '/',
    //         element: <Home />,
    //     }, {
    //         path: '/video',
    //         element: <Video/>
    //     }, {
    //         path: '/life',
    //         element: <Life/>
    //     }, {
    //         path: '/detail/:id',
    //         element: <Detail/>
    //     }
    // ]

    // let routers = useRoutes(routersList)
    // {routers}
const Header = () => {

    

    return (
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
    )
}

export default Header