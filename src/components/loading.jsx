import {View, Image} from '@tarojs/components'
import './loading.scss'

function Loading() {
  return (
    <View className='loading'>
      <Image src={require('../resource/spiner.gif')} className='img' />
    </View>)
}

export default Loading
