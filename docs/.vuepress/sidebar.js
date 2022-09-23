export default {
  '/guide': [
    {
      text: 'Guide',
      children: [
        '/guide/README.md', 
        '/guide/getting-started.md',
        '/guide/new-project.md',
        {
          text: 'Bundlers Reference',
          collapsible: true, //折叠
          children: ['/reference/bundler/vite.md', '/reference/bundler/webpack.md'],
        },
    ],
    },
  ],
  '/java': [
    {
      text: '公共工具',
      children: [
        '/java/common/time-range.md'
      ],
    },
    {
      text: '框架',
      children: [
        '/java/framework/time-range.md'
      ],
    },
    {
      text: '系统',
      children: [
        '/java/system/jwt.md'
      ],
    },
    {
      text: '内容管理cms',
      children: ['/java/TimeRange.md'],
    },
    {
      text: '电商mall',
      children: ['/java/TimeRange.md'],
    },
    {
      text: '仓库管理wms',
      children: ['/java/TimeRange.md'],
    },
    {
      text: '支付中心payment',
      children: ['/java/TimeRange.md'],
    },
  ],
}