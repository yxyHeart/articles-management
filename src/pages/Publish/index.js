import {
    Card,
    Breadcrumb,
    Form,
    Button,
    Radio,
    Input,
    Upload,
    Space,
    Select,
    message
  } from 'antd'
  import { PlusOutlined } from '@ant-design/icons'
  import { Link, useSearchParams,useNavigate } from 'react-router-dom'
  import './index.scss'
  import ReactQuill from 'react-quill'
  import 'react-quill/dist/quill.snow.css'
import { useStore } from '@/store';
import { observer } from 'mobx-react-lite';
import { useState,useRef,useEffect } from 'react'
import { http } from '@/utils'
import '@/mock/index'

  const { Option } = Select
  
  const Publish = () => {
    const navigate = useNavigate()

    const cacheImageList = useRef([])
    const {channelStore} = useStore()
    const [fileList,setFileList] = useState([])
    const onUploadChange=({fileList})=>{
        // console.log(fileList)
        const formatList = fileList.map(file=>{
          if(file.response){
            return {
              url:file.response.data.url
            }
          }
          return file
        })
        setFileList(formatList)
        cacheImageList.current = formatList
    }
    const [imgCount,setImgCount] = useState(1)
    const radioChange= (e)=>{
        const rawValue = e.target.value
        setImgCount(e.target.value)
        if(rawValue===1){
            const img=cacheImageList.current? cacheImageList.current[0]:[]
            setFileList([img])
        }else if(rawValue===3){
            setFileList(cacheImageList.current)
        }
    }
    const onFinish= async(v)=>{
        // console.log(v)
        const {channel_id,content,title,type}=v
        const params = {
            channel_id,
            content,
            title,
            type,
            cover:{
                type:type,
                images:fileList.map(item=>item.url)
            }
        }
        // console.log(params)
        if(id){
          await http.put('/mp/articles?draft=false',params)
        }else{
          await http.post('/mp/articles?draft=false',params)
        }

        navigate('/article')
        message.success(`${id?'更新':'发布'}成功！`)
    }
    const [params] = useSearchParams()
    const id = params.get('id')
    const form = useRef(null)
    useEffect(()=>{
        const loadDetail = async()=>{
          const res = await http.post('/mp/articles/content',{id:id})
          const data = res.data
          console.log('dev',data)
          form.current.setFieldsValue({...data,type:data.cover.type})
          const formatImgList = data.cover.images.map(url=>({url})) //箭头函数返回对象要加小括号
          setFileList(formatImgList)
          cacheImageList.current =formatImgList 
        }
        if(id){
            loadDetail()
        }
    },[id])
    return (
      <div className="publish">
        <Card
          title={
            <Breadcrumb separator=">">
              <Breadcrumb.Item>
                <Link to="/home">首页</Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item>{id?'编辑':'发布'}文章</Breadcrumb.Item>
            </Breadcrumb>
          }
        >
          <Form ref={form}
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ type: 1, content:'this is a content'}}
            onFinish={onFinish}
          >
            <Form.Item
              label="标题"
              name="title"
              rules={[{ required: true, message: '请输入文章标题' }]}
            >
              <Input placeholder="请输入文章标题" style={{ width: 400 }} />
            </Form.Item>

            <Form.Item
              label="频道"
              name="channel_id"
              rules={[{ required: true, message: '请选择文章频道' }]}
            >
              <Select placeholder="请选择文章频道" style={{ width: 400 }}>
                {channelStore.channelList.map(channel=>
                    <Option key={channel.id} value={channel.id}>{channel.name}</Option>
                )}

              </Select>
            </Form.Item>
  
            <Form.Item label="封面">
              <Form.Item name="type">
                <Radio.Group onChange={radioChange}>
                  <Radio value={1}>单图</Radio>
                  <Radio value={3}>三图</Radio>
                  <Radio value={0}>无图</Radio>
                </Radio.Group>
              </Form.Item>
              {imgCount>0&&              
                <Upload
                    name="image"
                    listType="picture-card"
                    className="avatar-uploader"
                    showUploadList
                    action="http://geek.itheima.net/v1_0/upload"
                    fileList={fileList}
                    onChange={onUploadChange}
                    multiple={imgCount>1}
                    maxCount={imgCount}
                    >
                    <div style={{ marginTop: 8 }}>
                        <PlusOutlined />
                    </div>
                </Upload>}

            </Form.Item>

            <Form.Item
              label="内容"
              name="content"
              rules={[{ required: true, message: '请输入文章内容' }]}
            >
                <ReactQuill
                    className="publish-quill"
                    theme="snow"
                    placeholder="请输入文章内容"
                />
            </Form.Item>
  
            <Form.Item wrapperCol={{ offset: 4 }}>
              <Space>
                <Button size="large" type="primary" htmlType="submit">
                  {id?'更新':'发布'}文章
                </Button>
              </Space>
            </Form.Item>
          </Form>
        </Card>
      </div>
    )
  }
  
  export default observer(Publish)