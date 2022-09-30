---
title: 新项目检查单
---
# 新项目检查单

## java 后端

1.修改数据链接  

ruoyi-admin/src/resources/application-druid

```yml
spring:
  datasource:
    druid:
      master:
        url: jdbc:mysql://实际数据库地址:3306/数据库名称?useUnicode=......
        username: 数据库账号
        password: 数据库密码
```

 修改项目名称   放置Redis键冲突

## 增加新业务模块

根目录pom.xml 增加依赖  
ruo-admin 内pom.xml 增加依赖  

## admin-ui 后台ui

1.服务器接口地址  

.env.production

```yaml
# 实际服务名称
VUE_APP_TITLE = XXXX后台管理系统
# 接口服务地址
VUE_APP_BASE_API = 'http://实际域名地址-api.com'
```

## uni-app 小程序端

1./src/config.js 修改实际后端地址

```js
// 前后端合并部署（nginx 反向代理）
let basepath = 'https://实际域名.com/prod-api'
// 前后端单独部署
let basepath = 'https://实际域名接口-api.com'
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
