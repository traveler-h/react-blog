/* eslint-disable import/no-anonymous-default-export */
import Mock from "mockjs";

const md ='# P01:课程介绍和环境搭建\n' +
'[ **M** ] arkdown + E [ **ditor** ] = **Mditor**  \n' +
'> Mditor 是一个简洁、易于集成、方便扩展、期望舒服的编写 markdown 的编辑器，仅此而已... \n\n' +
 '**这是加粗的文字**\n\n' +
'*这是倾斜的文字*`\n\n' +
'***这是斜体加粗的文字***\n\n' +
'~~这是加删除线的文字~~ \n\n'+
'\`console.log(111)\` \n\n'+
'# p02:来个Hello World 初始Vue3.0\n' +
'> aaaaaaaaa\n' +
'>> bbbbbbbbb\n' +
'>>> cccccccccc\n'+
'***\n\n\n' +
'# p03:Vue3.0基础知识讲解\n' +
'> aaaaaaaaa\n' +
'>> bbbbbbbbb\n' +
'>>> cccccccccc\n\n'+
'# p04:Vue3.0基础知识讲解\n' +
'> aaaaaaaaa\n' +
'>> bbbbbbbbb\n' +
'>>> cccccccccc\n\n'+
'#5 p05:Vue3.0基础知识讲解\n' +
'> aaaaaaaaa\n' +
'>> bbbbbbbbb\n' +
'>>> cccccccccc\n\n'+
'# p06:Vue3.0基础知识讲解\n' +
'> aaaaaaaaa\n' +
'>> bbbbbbbbb\n' +
'>>> cccccccccc\n\n'+
'# p07:Vue3.0基础知识讲解\n' +
'> aaaaaaaaa\n' +
'>> bbbbbbbbb\n' +
'>>> cccccccccc\n\n'+
'``` var a=11; ```'

// mock方法,详细的可以看官方文档
const Random = Mock.Random;

export default [
    {
        url: "/upload/file",
        type: "post",
        response: () => {
            return {
                code: 200,
                data: {
                    name: "file",
                    url: Random.image("200x100", "#50B347", "#FFF", "Mfile"),
                },
            };
        },
    },
    {
        url: "/getList/file",
        type: "get",
        response: () => {
            let fileList: any[] = [];
            for (let i = 0; i < 5; i++) {
                let file: any = {};
                file.id = Random.id();
                file.name = Random.ctitle(5, 7);
                file.url = Random.image("200x100", "#50B347", "#FFF", Random.title(1));
                file.video =
                    "http://vfx.mtime.cn/Video/2019/02/04/mp4/190204084208765161.mp4";
                file.poster = "http://static.runoob.com/images/demo/demo2.jpg";
                file.date = Random.date("yyyy-MM-dd");
                file.content = Random.cparagraph(7);
                file.author = "Alina";
                file.pageviews = Random.integer(0, 1000);
                fileList.push(file);
            }
            return {
                code: 200,
                data: {
                    fileList,
                },
            };
        },
    },
    {
        url: "/getDetail/detail",
        type: "get",
        response: () => {
            let file: any = {};
            file.id = Random.id();
            file.name = Random.ctitle(5, 7);
            file.url = Random.image("200x100", "#50B347", "#FFF", Random.title(1));
            file.date = Random.date("yyyy-MM-dd");
            file.content = Random.cparagraph(7);
            file.markdown = md;

            file.author = "Alina";
            file.pageviews = Random.integer(0, 1000);
            return {
                code: 200,
                data: {
                    file,
                },
            };
        },
    },
];
