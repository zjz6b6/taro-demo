import { View, Text, Button } from '@tarojs/components'
import Taro from '@tarojs/taro'
import './index.scss'
import api from '../../utils/api'
import { useState, useEffect } from 'react'

export default function Index() {
  Taro.useLoad(() => {
    console.log('Page loaded.')
  })

  const gotoBlog = () => {
    Taro.navigateTo({url: '/pages/blog/blog?id=1111'})
  }

  // 状态
  const [ state, setState ] = useState({
    loading: true,
    thread: []
  })

  const getLatestTopic = async () => {
    try {
      const res = await Taro.request({
        url: api.getLatestTopic()
      })

      console.log(`called：${res}`)

      setState({
        loading: false,
        thread: res.data
      })

    } catch (error) {
      Taro.showToast({title: '载入远程数据错误'})
    }
  }

  useEffect(() => {
    getLatestTopic()
    // console.log(state)
  })

  return (
    <View className='index'>
      <Text>Hello world!</Text>
      <Button onClick={gotoBlog}>toBlog</Button>
    </View>
  )
}
