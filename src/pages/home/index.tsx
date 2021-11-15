import { Col, Row, List } from "antd";
import React, { useState } from "react";

import { getFiles } from "@api/list";

import './index.less'
import { EyeOutlined, FieldTimeOutlined, UserOutlined } from "@ant-design/icons";
import Author from "@components/Author";
import Advertisement from "@components/Advertisement";
import Footer from "@components/Footer"

const Home = (props: any) => {

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
        <div className="home">
            <Row className="comm-main" justify="center">
                <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}>
                    <List header={<div className="title">最新笔记</div>} itemLayout="vertical" dataSource={myList}
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
                                <div className="list-centent"><p>{item.content}</p></div>
                            </List.Item>
                        )}
                    ></List>
                </Col>
                <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
                    <Author />
                    <Advertisement/>
                </Col>
            </Row>
            <Footer/>
        </div>
    )
}

export default Home