/* eslint-disable import/no-anonymous-default-export */
import Mock from 'mockjs'

// mock方法,详细的可以看官方文档
const Random = Mock.Random

export default [{
        url: '/upload/file',
        type: 'post',
        response: () => {
            return {
                code: 200,
                data: {
                    name: 'file',
                    url: Random.image('200x100', '#50B347', '#FFF', 'Mfile')
                }
            }
        }
    },
    {
        url: '/getList/file',
        type: 'get',
        response: () => {
            let fileList: any[] = []
            for (let i = 0; i < 5; i++) {
                let file: any = {}
                file.uid = Random.id()
                file.name = Random.ctitle(5, 7)
                file.url = Random.image('200x100', '#50B347', '#FFF', Random.title(1))
                file.date = Random.date('yyyy-MM-dd')
                file.content = Random.cparagraph(7)
                file.author = 'Alina'
                file.pageviews = Random.integer(0, 1000)
                fileList.push(file)
            }
            return {
                code: 200,
                data: {
                    fileList
                }
            }
        }
    }
]