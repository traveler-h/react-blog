import { Col, Row } from "antd";
import React from "react";

import Advertisement from "@components/Advertisement";
import Author from "@components/Author";
import Footer from "@components/Footer";
import './index.less'

const Video = () => (
    <div className="video">
        <Row className="comm-main" justify="center">
            <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}>
                视频列表
            </Col>
            <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
                <Author />
                <Advertisement />
            </Col>
        </Row>
        <Footer/>
    </div>
)

export default Video