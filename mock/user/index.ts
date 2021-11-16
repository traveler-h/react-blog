/* eslint-disable import/no-anonymous-default-export */
import Mock from 'mockjs'

// mock方法,详细的可以看官方文档
const Random = Mock.Random

export default [
    {
        url: '/getUserInfo',
        type: 'get',
        response: () => {
            let userInfo: any = {}
            userInfo.id = Random.id()
            userInfo.desc = Random.cparagraph(2)
            userInfo.qq = '2792736568'
            userInfo.wechat = 'lx2017summer'
            userInfo.github = 'https://github.com/traveler-h/react-blog'
            return {
                code: 200,
                data: {
                    ...userInfo
                }
            }
        }
    }
]