module.exports = {
  base: '/blog/',
  head: [],
  title: "Ertsul's Blog",
  description: "Ertsul's Blog",
  plugins: ['@vuepress/plugin-medium-zoom'],
  themeConfig: {
    search: true,
    searchMaxSuggestions: 10,
    lastUpdated: 'Last Updated',
    nav: [
      {
        text: 'Tags',
        items: [
          { text: 'Vue 源码', link: '/vue-source-code/Vue 源码阅读1 引入vue模块/' },
          { text: 'Vue', link: '/vue/svg sprite/' },
          { text: 'JS', link: '/js/EC AO VO Scope Chain/' },
          { text: 'Flutter', link: '/flutter/flutter 知识点记录/' },
          { text: 'Web Safe', link: '/web-safe/web-safe/' },
          { text: 'Webpack', link: '/webpack/webpack学习笔记/' },
          { text: '小程序', link: '/minapp/小程序工程化/' },
          {
            text: '可视化搭建平台',
            link: '/low-code-platform/可视化搭建平台（一）- 流程/'
          },
          { text: 'CSS', link: '/css/3D立体骰子/' },
          { text: 'Git', link: '/git/git/' },
          { text: '算法', link: '/algorithm/广度优先搜索 BFS 和深度优先搜索 DFS/' },
          { text: '其他', link: '/others/v8 引擎及其 GC 机制/' }
        ]
      },
      { text: 'Home', link: '/' },
      { text: 'Github', link: 'https://github.com/Ertsul/' }
    ],
    sidebar: {
      '/git/': [
        ['git', 'git 操作'],
        ['git-1', 'git 操作（补充）']
      ],
      '/flutter/': [
        ['flutter 知识点记录', 'flutter 知识点记录'],
        ['flutter 字母联动列表', 'flutter 字母联动列表']
      ],
      '/vue/': [
        ['svg sprite', 'svg sprite'],
        ['vue-cli3项目创建+配置+自动部署', 'vue-cli3项目创建+配置+自动部署']
      ],
      '/vue-source-code/': [
        ['Vue 源码阅读1 引入vue模块', 'Vue 源码阅读1 引入vue模块'],
        ['Vue 源码阅读2 实例化Vue', 'Vue 源码阅读2 实例化Vue'],
        ['Vue 源码阅读3 挂载Vue实例', 'Vue 源码阅读3 挂载Vue实例'],
        ['Vue 双向数据绑定', 'Vue 双向数据绑定'],
      ],
      '/css/': [
        ['3D立体骰子', '3D立体骰子'],
        ['px em rem总结', 'px em rem总结']
      ],
      '/js/': [
        ['EC AO VO Scope Chain', 'EC+AO(VO)+Scope Chain'],
        ['DOM事件', 'DOM事件'],
        ['js的存储和拷贝', 'js的存储和拷贝'],
        ['js的原型和继承', 'js的原型和继承'],
        ['防抖和节流', '防抖和节流'],
        ['call apply bind', 'call apply bind'],
        ['new运算符', 'new运算符'],
        ['Generator 函数', 'Generator 函数'],
        ['实现一个 Promise', '实现一个 Promise'],
        ['Ajax和跨域总结', 'Ajax和跨域总结'],
        ['js_es6小知识大杂烩', 'js/es6小知识大杂烩']
      ],
      '/web-safe/': [['web-safe', 'web-safe']],
      '/webpack/': [
        ['webpack学习笔记', 'webpack学习笔记'],
        ['搭建组件库', ['搭建组件库']]
      ],
      '/minapp/': [
        ['小程序工程化', '小程序工程化'],
        ['小程序文件生成脚本', '小程序文件生成脚本']
      ],
      '/low-code-platform/': [
        ['可视化搭建平台（一）- 流程', '可视化搭建平台（一）- 流程'],
        ['可视化搭建平台（二）- 实现', '可视化搭建平台（二）- 实现'],
        ['可视化搭建平台（三）- 打包', '可视化搭建平台（三）- 打包'],
        ['可视化搭建平台（四）- 优化', '可视化搭建平台（四）- 优化']
      ],
      '/others/': [
        ['v8 引擎及其 GC 机制', 'v8 引擎及其 GC 机制'],
        ['websocket', 'websocket'],
        ['用户认证小总结', ['用户认证小总结']]
      ],
      '/algorithm/': [
        ['广度优先搜索 BFS 和深度优先搜索 DFS', '广度优先搜索 BFS 和深度优先搜索 DFS'],
      ]
    }
  }
}
