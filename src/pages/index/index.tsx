import {useState, useEffect} from 'react'
import {View, Text, Button} from '@tarojs/components'
import Taro, {useLoad} from '@tarojs/taro'
import {LATEST_DATA_URL} from '../../utils/api'
// import VirtualList from '@tarojs/components-advanced/dist/components/virtual-list';
// import { AtList, AtListItem } from 'taro-ui';

import './index.scss'

interface RecommendALLDTO {
  id_type: number;
  client_type: number;
  sort_type: number;
  cursor: string;
  limit: number;
}

interface RecommendALLData {
  article_id: string;
  title: string;
}

interface State {
  loading: boolean,
  recommendAll: RecommendALLData[]
}

export default function Index() {
  useLoad(() => {
    console.log('Index Page loaded.')
  })

  // 状态
  const [state, setState] = useState<State>({
    loading: true,
    recommendAll: []
  })

  // 挂载，卸载
  useEffect(() => {
    console.log("挂载Index")

    // {"id_type":2,"client_type":2608,"sort_type":200,"cursor":"0","limit":20}
    const initParams: RecommendALLDTO = {
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

  async function getLatestData(params: RecommendALLDTO) {
    try {
      const res = await Taro.request({
        url: LATEST_DATA_URL,
        method: 'POST',
        data: params,
        header: {
          'Content-Type': 'application/json', // 设置请求的 header，根据后端要求可能需要修改
          // 'Authorization': 'Bearer your_token', // 如果需要，可以在这里添加授权头
        }
      })

      const mapRsData: RecommendALLData[] = res.data.data?.map(item => {
        return {
          article_id: item.item_info?.article_id,
          title: item.item_info?.article_info?.title
        }
      })

      console.log(`${mapRsData.length}`)

      setState({
        loading: false,
        recommendAll: mapRsData
      })

    } catch (error) {
      Taro.showToast({title: '载入远程数据错误'})
    }
  }

  return (
    <View className='index'>
      <Text>Hello world!</Text>
      <Button onClick={gotoBlog}>toBlog</Button>
      <Text>推荐列表1</Text>
      <View>
        {
          state.recommendAll.map((item, index) => (
            <View key={index} className='list-item'>
              <Text onClick={() => console.log(item.article_id)}>{item.title}</Text>
            </View>
          ))
        }
      </View>
    </View>
  )
}
