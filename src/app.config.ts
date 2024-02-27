export default defineAppConfig({
  // Taro 路由
  // 路由跳转：navigateTo（三端）、redirectTo（不支持返回）、switchTab（小程序）、navigateBack（返回上级页面）、relaunch、getCurrentPages（获取当前页面所有信息，不支持H5）
  pages: [
    'pages/index/index',
    'pages/blog/blog'
  ],
  tabBar: {
    list: [{
      'iconPath': 'resource/latest.png',
      'selectedIconPath': 'resource/lastest_on.png',
      pagePath: 'pages/index/index',
      text: '最新'
    }, {
      'iconPath': 'resource/hotest.png',
      'selectedIconPath': 'resource/hotest_on.png',
      pagePath: 'pages/hot/hot',
      text: '热门'
    }, {
      'iconPath': 'resource/node.png',
      'selectedIconPath': 'resource/node_on.png',
      pagePath: 'pages/nodes/nodes',
      text: '节点'
    }],
    'color': '#000',
    'selectedColor': '#56abe4',
    'backgroundColor': '#fff',
    'borderStyle': 'white'
  },
  // 小程序样式
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
})
