import React from 'react'
import { Row, Col, Menu } from 'antd'
import { HomeOutlined, VideoCameraOutlined, FileTextOutlined } from '@ant-design/icons'
import { NavLink, Route, Routes } from 'react-router-dom'
import './index.less'

import Upload from '../../pages/upload'

const Header = () => (
    <div className='header'>
        <Row justify='center' align='middle'>
            <Col xs={24} sm={24} md={10} xl={10}>
                <span className='logo-name'>Alina</span>
                <span className='logo-desc'>Describe of life</span>
            </Col>
            <Col xs={0} sm={0} md={14} xl={8}>
                <Menu className='menu' mode='horizontal'>
                    <Menu.Item key="home" className='menu-item'>
                        <NavLink replace to="/home">
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
                {/* 注册路由 */}
                <Routes>
                    <Route path="/home" element={<Upload/>}/>
                </Routes>
            </div>
        </div>
    </div>
)

export default Header