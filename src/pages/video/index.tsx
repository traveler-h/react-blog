import { Col, List, Row } from "antd";
import React, { useState } from "react";
import { FieldTimeOutlined, UserOutlined, EyeOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

import Advertisement from "@components/Advertisement";
import Author from "@components/Author";
import Footer from "@components/Footer";
import { getFiles } from "@/api/file";

import './index.less'


const Video = () => {
    const [myList, setMyList] = useState<any>(undefined)

    React.useEffect(() => {
        let abortController = new AbortController();

        async function getFilesList() {
            let data = await getFiles();
            setMyList(data.data.fileList);
        }

        if (!myList) {
            getFilesList();
        }

        return () => {
            abortController.abort();
        };
    }, [myList]);

    return (
        <div className="video">
            <Row className="comm-main" justify="center">
                <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}>
                    <List header={<div className="title">视频列表</div>} itemLayout="vertical" dataSource={myList}
                        renderItem={(item: any) => (
                            <List.Item className="list-item">
                                <div className="list-title">{item.name}</div>
                                <div className="list-desc">
                                    <div>
                                        <FieldTimeOutlined />
                                        <span>{item.date}</span>
                                    </div>
                                    <div>
                                        <UserOutlined />
                                        <span>{item.author}</span>
                                    </div>
                                    <div>
                                        <EyeOutlined />
                                        <span>{item.pageviews}</span>
                                    </div>
                                </div>
                                <div className="list-centent">
                                    <video poster={item.poster} controls width={800} src={item.video} className="video-js" />
                                </div>
                            </List.Item>
                        )}
                    ></List>
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

export default Video