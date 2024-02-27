import React, {useContext, useState} from 'react'

// 上下文
const themeContext = React.createContext("#813232")

const Child1 = () => {

  // 获取上下文值
  const bgColor = useContext(themeContext)

  const style = {
    backgroundColor: bgColor
  }

  return <div style={style}>你好1</div>
}

const Child2 = () => {

  // 处理
  function handleValue(bgColor:string) {

    const style = {
      backgroundColor: bgColor
    }

    return <div style={style}>你好2</div>
  }

  return (
    // 消费
    <themeContext.Consumer>
      {
        value => handleValue(value)
      }
    </themeContext.Consumer>
  )

}

const Parent = () => {
  return <div>
    <Child1 />
    <Child2 />
  </div>
}


export default function ContextDemo() {

  const [bgColor, setBgColor] = useState("#813232")

  return (
    <>
      <input type='color' onChange={(ev) => {
        setBgColor(ev.target.value)
        console.log(ev.target.value)
      }} />
      <themeContext.Provider value={bgColor}>
        <Parent />
      </themeContext.Provider>
    </>
  )

}
