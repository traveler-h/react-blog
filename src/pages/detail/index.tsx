import { Col, Row } from "antd";
import React from "react";

import './index.less'

const Detail = () => (
  <div className="detail">
    <Row className="comm-main" justify="center">
      <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}>
        左侧
      </Col>
      <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
        右侧
      </Col>
    </Row>
  </div>
)

export default Detail