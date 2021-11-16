import { Col, Row } from "antd";
import React, { useState } from "react";
import { useParams } from 'react-router-dom';

import { getDetail } from '@api/file'
import Advertisement from "@components/Advertisement";
import Author from "@components/Author";
import Footer from "@components/Footer";
import './index.less'
import { EyeOutlined, FieldTimeOutlined, UserOutlined } from "@ant-design/icons";

const Detail = (props: any) => {
    console.log(props);
    const { id: articeId } = useParams();
    // console.log(articeId);

    const [detail, setDetail] = useState<any>({})

    React.useEffect(() => {
        async function getArticle() {
            const { data: { file: data } } = await getDetail()
            setDetail(data)
        }

        if (!detail.id) {
            getArticle()
        }
    }, [detail])

    return (
        <div className="detail">
            <Row className="comm-main" justify="center">
                <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}>
                    <div className="detail-con">
                        <div className="con-title">{detail.name}</div>
                        <div className="con-desc">
                            <div>
                                <FieldTimeOutlined />
                                <span>{detail.date}</span>
                            </div>
                            <div>
                                <UserOutlined />
                                <span>{detail.author}</span>
                            </div>
                            <div>
                                <EyeOutlined />
                                <span>{detail.pageviews}</span>
                            </div>
                        </div>
                        <p className="con-content">
                            {detail.content}
                        </p>
                        <p className="con-content">
                            {detail.content}
                        </p>
                        <p className="con-content">
                            {detail.content}
                        </p>
                        <p className="con-content">
                            {detail.content}
                        </p>
                    </div>
                </Col>
                <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
                    <Author />
                    <Advertisement />
                </Col>
            </Row>
            <Footer />
        </div>
    )
}

export default Detail