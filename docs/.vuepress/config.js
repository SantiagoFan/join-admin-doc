import { defineUserConfig } from 'vuepress'
import { defaultTheme } from 'vuepress'

export default defineUserConfig({
  lang: 'zh-CN',
  title: 'JoinAdmin',
  description: 'JoinAdmin框架说明文档',
  head: [['link', { rel: 'icon', href: '/images/logo.png' }]],
  base:'join-admin-doc',

  // 主题配置
  theme: defaultTheme({
    // 默认主题配置
    // colorModeSwitch:false, //颜色切换
    toggleColorMode: '切换颜色',
    logo: '/images/hero.png',
    // 仓库
    repo: 'https://github.com/',
    // 编辑本页面
    editLink:false,
    // 顶部菜单
    navbar: [
      {
        text: '指南',
        link: '/guide',
      },
      {
        text: '组件',
        link: '/',
      },
      {
        text: '链接',
        children: [
          {
            text: '组件',
            link: '/',
          },
          {
            text: '组件',
            link: '/',
          },
        ],
      },
    ],
    // 底部菜单
    sidebar:{
      '/guide': [
        {
          text: 'Guide',
          children: [
            '/guide/README.md', 
            '/guide/getting-started.md',
            {
              text: 'Bundlers Reference',
              collapsible: true, //折叠
              children: ['/reference/bundler/vite.md', '/reference/bundler/webpack.md'],
            },
        ],
        },
      ],
      '/reference/': [
        {
          text: 'Reference',
          children: ['/reference/cli.md', '/reference/config.md'],
        },
      ],
    }
  })
})