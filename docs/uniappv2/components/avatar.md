# Avatar 头像选择组件

### 演示
![nginx](/images/components/avatar.png)

### 参数
|属性|默认值|描述
|---|---|---|
|v-model|''| 头像上传后的url 地址
|editable|true|是否可编辑
|sizeType|['original', 'compressed']|原图还是压缩图，默认二者都有
|sourceType|['camera','album'] |从相册选择 或者相机

```vue
<Avatar v-model="user.avatar"/>
```