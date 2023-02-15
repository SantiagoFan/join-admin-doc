# CommonFilter 全局过滤器

### 1.hiddenPhone
隐藏手机号中间4位信息 `138****0654`
```vue
{{user.phone| hiddenPhone }}
```

### 1.hiddenIdCard
隐藏身份证中间9位信息 `152626*********116`
```vue
{{user.idcard | hiddenIdCard }}
```