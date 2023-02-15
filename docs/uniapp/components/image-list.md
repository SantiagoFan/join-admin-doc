# ImageList 多图片上传组件

### 演示
![nginx](/images/components/ImageList.jpg) 
### 参数
|属性|类型|默认值|描述
|---|---|---|---|
|value|string|''|地址结果（多个图片,逗号隔开）
|limit|number|1|最多上传数量
|itemWidth|number|25|子项宽度百分百
|itemHeight|number|25|子项高度百分百
|sizeType|array|['original', 'compressed']|原图还是压缩图，默认二者都有
|sourceType|array|['camera','album'] |从相册选择 或者相机

```vue
<ImageList v-model="img1" :limit="2"/>
<ImageList :itemWidth="50" :itemHeight="25" :limit="2"/>
<ImageList :itemWidth="100" :itemHeight="50" :limit="1"/>
```