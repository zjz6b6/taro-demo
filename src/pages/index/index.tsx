import { View, Text, Button } from '@tarojs/components'
import Taro from '@tarojs/taro'
import './index.scss'

export default function Index() {

  Taro.useLoad(() => {
    console.log('Page loaded.')
  })

  const gotoBlog = () => {
    Taro.navigateTo({url: '/pages/blog/blog'})
  }

  return (
    <View className='index'>
      <Text>Hello world!</Text>
      <Button onClick={gotoBlog}>toBlog</Button>
    </View>
  )
}
