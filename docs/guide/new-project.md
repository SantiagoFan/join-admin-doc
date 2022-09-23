---
title: 新项目检查单
---
# 新项目检查单

## java 修改内容



## admin-ui 修改内容




## uni-app 修改内容

1./src/config.js 修改实际后端地址
```js
// 前后端合并部署（nginx 反向代理）
let basepath = 'https://xxx.com/prod-api'
// 前后端单独部署
let basepath = 'https://xxx-api.com'
```

2./src/config.js 修改隐私政策页面地址（如果需要）
```js
module.exports = {
  appInfo: {
    // 政策协议
    agreements: [{
        title: "隐私政策",
        url: "https://实际域名/profile/protocol.html"
      },
      {
        title: "用户服务协议",
        url: "https://实际域名/profile/protocol.html"
      }
    ]
  }
}
```