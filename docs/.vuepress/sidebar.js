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
      children: [],
    },
    {
      text: '电商mall',
      children: [],
    },
    {
      text: '仓库管理wms',
      children: [],
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
        '/uniapp/components/image-list.md',
        '/uniapp/components/avatar.md',
        '/uniapp/components/common-list.md',
        '/uniapp/components/picture.md',
        '/uniapp/components/picker-address.md',
        '/uniapp/components/map-route-page.md'
      ],
    },
    {
      text: '公共页面',
      children: [
        '/uniapp/common/position-selector.md',
        '/uniapp/common/position-info.md',
        '/uniapp/common/compontents.md',
      ],
    },
    {
      text: '全局过滤器',
      children: [
        '/uniapp/filter/index.md',
      ],
    }
  ]
}