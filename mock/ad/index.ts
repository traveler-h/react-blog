/* eslint-disable import/no-anonymous-default-export */
import Mock from 'mockjs'

// mock方法,详细的可以看官方文档
const Random = Mock.Random

export default [
    {
        url: '/getAdList',
        type: 'get',
        response: () => {
            let adList: any[] = []
            for (let i = 0; i < 4; i++) {
                let ad: any = {}
                ad.id = Random.id()
                ad.name = Random.cname()
                ad.url = Random.image('240x120', '#6c6fa1', '#ffffff', '广告位')
                adList.push(ad)
            }
            
            return {
                code: 200,
                data: {
                    adList
                }
            }
        }
    }
]