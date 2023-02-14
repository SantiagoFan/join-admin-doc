export default {
  '/guide': [
    {
      text: '指南',
      children: [
        '/guide/README.md', 
        '/guide/getting-started.md',
        '/guide/new-project.md',
        '/guide/project-step.md',
        '/guide/project-deployment.md'
        // {
        //   text: 'Bundlers Reference',
        //   collapsible: true, //折叠
        //   children: ['/reference/bundler/vite.md', '/reference/bundler/webpack.md'],
        // },
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
        '/java/framework/resources.md',
        '/java/framework/resize-image.md'
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
      children: [
        '/java/payment/index.md',
        '/java/payment/pay_order.md'
      ],
    },
  ],
  '/admin': [
    {
      text: '公共工具',
      children: [
        '/admin/resetForm.md'
      ],
    },
  ],
  '/uniapp':[
    {
      text: '公共组件',
      children: [
        '/uniapp/common/position-selector.md',
        '/uniapp/common/image-list.md',
        '/uniapp/common/common-list.md',
        '/uniapp/common/view.md',
        '/uniapp/common/compontents.md',
      ],
    }
  ]
}