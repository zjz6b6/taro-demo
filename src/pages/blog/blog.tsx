/**
 * useLoad
 * useLaunch
 * useDidShow
 * useDidHide
 * useState   状态
 * useEffect  副作用，变化的时候，触发做的事情
 * useContext
 * useReducer
 * useCallback
 * useMemo
 * useRef
 * useImperativeHandle
 * useLayoutEffect
 * useDebugValue
 * useResponder
 * useDeferredValue
 * useTransition
 *
 * https://github.com/HeyiMaster
 *
 * Taro 路由
 * 路由跳转：navigateTo（三端）、redirectTo（不支持返回）、switchTab（小程序）、navigateBack（返回上级页面）、relaunch、getCurrentPages（获取当前页面所有信息，不支持H5）
 *
 * useCallback 与 useMemo 区别：
 * - 用途：useCallback 主要用于优化函数，而 useMemo 主要用于优化计算。
 * - 返回值：useCallback 返回一个函数，useMemo 返回一个值。
 * - 依赖项变化：两者都只有在依赖项变化时才会更新，但是 useCallback 更新的是函数，useMemo 更新的是值。
 *
 * 开发流程：
 * - 定义store（状态）
 * - 定义对应service，处理store
 * - 定义page，使用store渲染等
 */
import {View, Text, Button} from '@tarojs/components'
import { useRouter } from "@tarojs/taro"
import { useEffect, useState  } from "react";
import ReducerDemo from "../../components/ReducerDemo";
import ContextDemo from "../../components/ContextDemo";

export default function Blog() {

  const { params } =  useRouter()

  // state
  const [ count, setCount ] = useState(0)
  const [ disable, setDisable] = useState(true)

  useEffect(() => {
    // 组件挂载
    console.log(`函数组件挂载：路由参数：${params.id}`)

    const handleClick = () => {
      console.log(1)
    }
    document.addEventListener('click', handleClick)

    return () => {
      // 组件卸载
      console.log("函数组件卸载")
      document.removeEventListener('click', handleClick)
    }

  }, [])  // [] 表示只运行一次

  useEffect(() => {
    if (count % 2 === 0) {
      console.log(`我是偶数：${count}`)
    }
  }, [count]) // 指定 副作用 关注的状态等主体（不指定，其他状态变动，也会触发这个钩子执行）

  return (
    <View>
      <Text>Blog Page {count}</Text>
      <Button onClick={() => setCount(count + 1)}>点我</Button>
      <Button onClick={() => setDisable(!disable)}>{disable? '禁用' : '启用'}</Button>

      <ReducerDemo />

      <ContextDemo />
    </View>
  )
}
