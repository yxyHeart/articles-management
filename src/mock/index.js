import Mock from 'mockjs'
import { Random } from 'mockjs'
const getToken = Mock.mock('/token','post',(options)=>{
    return{
        data:{
            token:Mock.mock('@string(32)'),
            refresh_token:Mock.mock('@string(32)'),
            // "body":JSON.parse(options.body),
            // "type":options.type,
            // "url":options.url,

        },
        message:"OK"
    }
})
const getUserProfile = Mock.mock('/user/profile','get',(options)=>{
    return{
        data:{
            name:Random.name(),
            birthday:"2000-6-17",
            gender:1,
            id:Mock.mock("@string(32)"),
            mobile:Mock.mock("@integer(11"),
            photo:Random.image(),

            // "body":JSON.parse(options.body),
            // "type":options.type,
            // "url":options.url,

        },
        message:"OK"
    }
})
const getChannels = Mock.mock('/channels','get',(options)=>{
    return{
        data:{
            channels:[
                {id:0,name:"推荐"},
                {id:1,name:"不推荐"},
                {id:2,name:"js"},
                {id:3,name:"html"},
                {id:4,name:"css"},
                {id:5,name:"react"},
            ]

        },
        message:"OK"
    }
})

const results=[
    {
        id: '8218',
        comment_count: 0,
        cover: {
          images:[
          'http://geek.itheima.net/resources/images/15.jpg',
          'http://geek.itheima.net/resources/images/15.jpg',
          'http://geek.itheima.net/resources/images/15.jpg'],
          type:3
        },
        like_count: 98,
        pubdate: '2019-03-11 09:00:00',
        read_count: 99,
        status: 2,
        title: 'wkwebview离线化加载h5资源解决方案' 
    },
    {
        id: '8219',
        comment_count: 0,
        cover: {
          images:['http://geek.itheima.net/resources/images/15.jpg'],
          type:1
        },
        like_count: 98,
        pubdate: '2019-03-11 09:00:00',
        read_count: 99,
        status: 2,
        title: 'wkwebview离线化加载h5资源解决方案' 
    },
    {
        id: '8220',
        comment_count: 0,
        cover: {
          images:['http://geek.itheima.net/resources/images/15.jpg'],
          type:1
        },
        like_count: 98,
        pubdate: '2019-03-11 09:00:00',
        read_count: 99,
        status: 2,
        title: 'wkwebview离线化加载h5资源解决方案' 
    },
    {
        id: '8221',
        comment_count: 0,
        cover: {
          images:['http://geek.itheima.net/resources/images/15.jpg'],
          type:1
        },
        like_count: 98,
        pubdate: '2019-03-11 09:00:00',
        read_count: 99,
        status: 2,
        title: 'wkwebview离线化加载h5资源解决方案' 
    },
    {
        id: '8222',
        comment_count: 0,
        cover: {
          images:['http://geek.itheima.net/resources/images/15.jpg'],
          type:1
        },
        like_count: 98,
        pubdate: '2019-03-11 09:00:00',
        read_count: 99,
        status: 2,
        title: 'wkwebview离线化加载h5资源解决方案' 
    },
    {
        id: '8223',
        comment_count: 0,
        cover: {
          images:['http://geek.itheima.net/resources/images/15.jpg'],
          type:1
        },
        like_count: 98,
        pubdate: '2019-03-11 09:00:00',
        read_count: 99,
        status: 2,
        title: 'wkwebview离线化加载h5资源解决方案' 
    },
    {
        id: '8224',
        comment_count: 0,
        cover: {
          images:['http://geek.itheima.net/resources/images/15.jpg'],
          type:1
        },
        like_count: 98,
        pubdate: '2019-03-11 09:00:00',
        read_count: 99,
        status: 2,
        title: 'wkwebview离线化加载h5资源解决方案' 
    },
    {
        id: '8225',
        comment_count: 0,
        cover: {
          images:['http://geek.itheima.net/resources/images/15.jpg'],
          type:1
        },
        like_count: 98,
        pubdate: '2019-03-11 09:00:00',
        read_count: 99,
        status: 2,
        title: 'wkwebview离线化加载h5资源解决方案' 
    },
    {
        id: '8226',
        comment_count: 0,
        cover: {
          images:['http://geek.itheima.net/resources/images/15.jpg'],
          type:1
        },
        like_count: 98,
        pubdate: '2019-03-11 09:00:00',
        read_count: 99,
        status: 2,
        title: 'wkwebview离线化加载h5资源解决方案' 
    },
    {
        id: '8227',
        comment_count: 0,
        cover: {
          images:['http://geek.itheima.net/resources/images/15.jpg'],
          type:1
        },
        like_count: 98,
        pubdate: '2019-03-11 09:00:00',
        read_count: 99,
        status: 2,
        title: 'wkwebview离线化加载h5资源解决方案' 
    },
    {
        id: '8228',
        comment_count: 0,
        cover: {
          images:['http://geek.itheima.net/resources/images/15.jpg'],
          type:1
        },
        like_count: 98,
        pubdate: '2019-03-11 09:00:00',
        read_count: 99,
        status: 2,
        title: 'wkwebview离线化加载h5资源解决方案' 
    },
    {
        id: '8229',
        comment_count: 0,
        cover: {
          images:['http://geek.itheima.net/resources/images/15.jpg'],
          type:1
        },
        like_count: 98,
        pubdate: '2019-03-11 09:00:00',
        read_count: 99,
        status: 2,
        title: 'wkwebview离线化加载h5资源解决方案' 
    },

]
const deledId=[]
const getArticles = Mock.mock('/mp/articles','post',(options)=>{
    const body=JSON.parse(options.body)
    return{
        data:{
            page:body.params.page,
            per_page:body.params.per_page,
            results:results.filter(res=>{
                return deledId.indexOf(res.id)===-1
            }),
            total_count:results.filter(res=>{
                return deledId.indexOf(res.id)===-1
            }).length,

        },
        message:"OK",
        
    }
})
const delArticles = Mock.mock('/mp/articles','delete',(options)=>{
    const body=JSON.parse(options.body)
    const delId = body.id
    deledId.push(delId)
    return{
        message:"OK",
    }
})
const upLoadArticles = Mock.mock('/mp/articles?draft=false','post',(options)=>{
    const body=JSON.parse(options.body)
    results.push({
        id: Mock.mock('@integer(4)'),
        comment_count: 1,
        cover: {
          images:body.cover.images,
          type:1
        },
        like_count: 98,
        pubdate: '2019-03-11 09:00:00',
        read_count: 99,
        status: 2,
        title: body.title
    })
    return{
        message:"OK",
    }
})
const upDateArticles = Mock.mock('/mp/articles?draft=false','put',(options)=>{
    const body=JSON.parse(options.body)
    const article = results.find(item=>item.id===body.id)
    return{
        data:{
            article
        },
        message:"OK",
    }
})
const getArticlesContent = Mock.mock('/mp/articles/content','post',(options)=>{
    const body=JSON.parse(options.body)

    return{ 
        data:{
            ...results.filter(res=>res.id===body.id)[0],
            content:`我是${body.id}`
        },
        message:"OK",
    }
})
export { getToken,getUserProfile,getChannels,getArticles,delArticles,upLoadArticles,getArticlesContent,upDateArticles}