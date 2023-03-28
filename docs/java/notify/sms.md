---
lang: zh-CN
title: SMS 短信验证码
---
# ISmsService 服务
短信发送范围，内部集成了 阿里云短信、腾讯云短信
## yml文件指定短信服务商
```yml
# 短信验证码使用服务商 Tencent Aliyun
sms.type: Aliyun
```

## 阿里云需要配置
```
# 阿里云
aliyun:
  accessKeyId: xxxxxx
  accessKeySecret: xxxxx
  regionId: cn-huhehaote
  sms:
    signName: xx
    templateCode: xxxxxx
```
## 腾讯云需要配置
```
# 腾讯云短信平台
tencentCloud:
  appId: xxxxx
  secretKey: xxxx
  secretId:xxxxx
  templateId: xxxx
  sign: xxxxxx
  nationCode: 86
```
