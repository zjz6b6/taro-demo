import { useState, useEffect } from 'react'
import { View, Text, Button } from '@tarojs/components'
import Taro, { useLoad } from '@tarojs/taro'
import {LATEST_DATA_URL} from '../../utils/api'

import './index.scss'

// class LatestListDTO {
//   id_type: number;
//   client_type: number;
//   sort_type: number;
//   cursor: string;
//   limit: number;
// }
//
// class LatestListData {
//   article_id: string;
//   title: string;
// }

export default function Index() {
  useLoad(() => {
    console.log('Index Page loaded.')
  })

  // 状态
  const [ state, setState ] = useState({
    loading: true,
    thread: []
  })

  // 挂载，卸载
  useEffect(() => {
    console.log("挂载Index")

    // {"id_type":2,"client_type":2608,"sort_type":200,"cursor":"0","limit":20}
    const initParams = {
      id_type: 2,
      client_type: 2608,
      sort_type: 200,
      cursor: "0",
      limit: 20
    }
    getLatestData(initParams)

    return (
      console.log("卸载Index")
    );
  }, [])

  const gotoBlog = () => {
    Taro.navigateTo({url: '/pages/blog/blog?id=1111'})
  }

  async function getLatestData(params) {
    try {
      const res = await Taro.request({
        url: LATEST_DATA_URL,
        method: 'POST',
        data: params,
        header: {
          'Content-Type': 'application/json', // 设置请求的 header，根据后端要求可能需要修改
          // 'Authorization': 'Bearer your_token', // 如果需要，可以在这里添加授权头
        },
        mode: 'cors'
      })

      console.log(`called：${res.data}`)

      setState({
        loading: false,
        thread: res.data
      })

    } catch (error) {
      Taro.showToast({title: '载入远程数据错误'})
    }
  }

  return (
    <View className='index'>
      <Text>Hello world!</Text>
      <Button onClick={gotoBlog}>toBlog</Button>
    </View>
  )
}
