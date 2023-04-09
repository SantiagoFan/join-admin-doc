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

### 1.moneyFormat
保留小数点，默认两位小数点，可传入第二个参数自定义精度位数 `120.00`
```vue
{{order.money | moneyFormat }}
```

### 1.beforTimeDesc
过去时间的摘要描述 如 ：`1天前` `3分钟前`
```vue
{{order.time | beforTimeDesc }}
```