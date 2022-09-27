import { defineUserConfig } from 'vuepress'
import { defaultTheme } from 'vuepress'
import nav from './navbar'
import sidebar from './sidebar'

export default defineUserConfig({
  lang: 'zh-CN',
  title: 'JoinAdmin',
  description: 'JoinAdmin框架说明文档',
  head: [['link', { rel: 'icon', href: '/images/logo.png' }]],
  base:'/join-admin-doc/',

  // 主题配置
  theme: defaultTheme({
    // 默认主题配置
    // colorModeSwitch:false, //颜色切换
    toggleColorMode: '切换颜色',
    logo: '/images/hero.png',
    // 仓库
    repo: 'https://codeup.aliyun.com/602bdcca640593207be341d8/java-team/DG_admin',
    // 编辑本页面
    editLink:false,
    // 顶部菜单
    navbar: nav,
    // 左侧菜单
    sidebar:sidebar
  })
})