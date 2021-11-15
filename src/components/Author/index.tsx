import React, { useState } from "react";
import { Avatar, Divider } from "antd";
import { AntDesignOutlined, GithubOutlined, QqOutlined, WechatOutlined } from "@ant-design/icons";

import { getUserInfo } from '@api/user'
import './index.less';

const Author = (props: any) => {
    const [userInfo, setUserInfo] = useState<any>({})

    React.useEffect(() => {
        const abortController = new AbortController()

        async function getUser() {
            let data = await getUserInfo()
            setUserInfo(data.data)
        }
        if (!userInfo.id) {
            getUser()
        }

        return () => {
            abortController.abort();
        };

    }, [userInfo])
    return (
        <div className="author-div">
            <Avatar className="author-avatar" size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }} icon={<AntDesignOutlined />} />
            <div className="author-desc">{userInfo.desc}</div>
            <Divider className="author-contact-title" orientation="center">社交账号</Divider>
            <div className="author-contact">
                <div title={userInfo.qq} className="contact-icon">< QqOutlined /></div>
                <div title={userInfo.wechat} className="contact-icon">< WechatOutlined /></div>
                <div title={userInfo.github} className="contact-icon">< GithubOutlined /></div>
            </div>
        </div>
    )
}

export default Author