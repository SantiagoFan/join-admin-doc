---
title: 配合nginx实现自动裁图

---
## 增加自定裁图
通过nginx 配置畸形url规则，实现地址重写，读取裁剪完图片地址，不存在后端java 实现裁图后存储到指定地址
### 1 前端地址替换
```html
<!--原图片-->
<img src='/uploads/1.jpg'>
<!--压缩引用图片-->
<img src='/uploads/1.jpg!size=130X130'>

```
### 2 nginx 配置转发规则
```yml
# 缩略图参数重定向  x.jpg!size=s 定位到 s_x.jpg
    location ~ .*\.(gif|jpg|jpeg|png|bmp)!size=(.+)$
    {
        expires      30d; # 缓冲时间
        rewrite ^(.+)/([a-zA-Z0-9]+\.(gif|jpg|jpeg|png|bmp))!size=(.+)$ $1/$4_$2;
    }
    # 动态调用图片裁图工具 s_x.jpg 不存在则裁图
    location ~ .*(.+)/(.+)_([a-zA-Z0-9]+\.(gif|jpg|jpeg|png|bmp))$
    {
      try_files $uri /admin/Resources/ResizeImage/?url=$uri;
    }

```