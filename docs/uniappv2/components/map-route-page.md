# MapRoutePage 地图行程页面组件

### 演示
![MapRoutePage](/images/components/map-route-page.png)

|属性|默认值|描述
|---|---|---|
|from|Object|路径开始位置
|to|Object|路径结束位置

```html
 <map-route-page
    ref="routePage"
    :from="from_location"
    :to="to_location" >
    此处放内容区域
    </map-route-page>
```
```js
data() {
    return {
      // 开始位置
      from_location: {
        latitude:40.80899,
        longitude:111.708392
      },
      // 目标地
      to_location: {
        latitude:40.795718,
        longitude:111.717178
      },
    };
  },

```