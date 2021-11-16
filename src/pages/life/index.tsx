import { Col, Row } from "antd";
import React from "react";

import Author from "@components/Author";
import './index.less'
import Advertisement from "@components/Advertisement";
import Footer from "@components/Footer";

const Life = () => (
    <div className="life">
        <Row className="comm-main" justify="center">
            <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}>
                生活帖
            </Col>
            <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
                <Author />
                <Advertisement />
            </Col>
        </Row>
        <Footer/>
    </div>
)

export default Life