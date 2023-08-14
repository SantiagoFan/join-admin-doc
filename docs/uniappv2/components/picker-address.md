# PickerAdress 地址选择组件

|属性|默认值|描述
|---|---|---|
|value|''|地址结果（多个图片,逗号隔开）
|limit|1|最多上传数量
|itemWidth|25|子项宽度百分百
|itemHeight|25|子项高度百分百
|sizeType|['original', 'compressed']|原图还是压缩图，默认二者都有
|sourceType|['camera','album'] |从相册选择 或者相机

```vue
<ImageList v-model="img1" :limit="2"/>
<ImageList :itemWidth="50" :itemHeight="25" :limit="2"/>
<ImageList :itemWidth="100" :itemHeight="50" :limit="1"/>
```