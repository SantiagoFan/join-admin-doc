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
        '/java/common/time-range.md',
        '/java/common/statistics'
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
        '/java/payment/custom.md',
        '/java/payment/pay_order.md'
      ],
    },
    {
      text: '通知模块notify',
      children: [
        '/java/notify/sms.md'
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
  '/uniappv2':[
    {
      text: '公共组件',
      children: [    
        '/uniappv2/components/image-list.md',
        '/uniappv2/components/avatar.md',
        '/uniappv2/components/common-list.md',
        '/uniappv2/components/picture.md',
        '/uniappv2/components/picker-address.md',
        '/uniappv2/components/map-route-page.md',
        '/uniappv2/components/number-stepper.md',
        '/uniappv2/components/date-range-picker.md',
        '/uniappv2/components/du-form.md'
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
  ],
  '/uniapp':[
    {
      text: '公共组件',
      children: [    
        '/uniapp/common/common-list.md',
        '/uniapp/components/dropdown.md',
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