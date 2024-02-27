import {useReducer} from "react";

export default function ReducerDemo() {

  const reducer = (state, action) => {
    // 解构对象
    const {type, payload = 1} = action

    // ES6 ...state 是剩余参数（Rest parameters）的语法，也称为参数扩展（spread）操作符
    // JavaScript ...state 允许你将一个对象的剩余属性解构到一个新变量中，这种语法结构通常用于对象解构赋值，扩展运算符（spread operator）
    console.log({...state})

    switch (type) {
      case 'increment':
        // 解构state中的属性到新对象中，需要更新的属性，放在后面
        return {...state, count: state.count + payload}
      case 'decrement':
        return {...state, count: state.count - payload}
      case 'rename':
        return {...state, name: payload}
      default:
        throw new Error()
    }
  }

  // 结构数组
  // dispatch 派发
  const [state, dispatch] = useReducer(reducer, {count: 0, name: "Adam"})

  return (
    <div>
      reducer = {state.count}
      <br />
      reducer name = {state.name}
      <br />
      <button onClick={() => dispatch({type: 'increment', payload: 2})}>加</button>
      <button onClick={() => dispatch({type: 'decrement'})}>减</button>
      <button onClick={() => dispatch({type: 'rename', payload: 'ZJZ'})}>rename</button>
    </div>
  )
}
