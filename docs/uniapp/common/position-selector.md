# PositionSelector 地址选择页面
跳转到地址选择页面，选择完成后回传相关信息到前一个页面的函数
### 引入跳转代码

```html
 <navigator url="/pages/common/map/PositionSelector">地址选择</navigator>
```

## 本页面编写回调函数
```javascript
 onSelectedAddress(address){
  console.info(address)
},
```
```json
{
  "adcode":"150105",
  "province":"内蒙古自治区",
  "city":"呼和浩特市",
  "district":"赛罕区",
  "lat":40.792463,
  "lng":111.701294,
  "title":"呼和浩特市赛罕区人民政府",
  "address":"内蒙古自治区呼和浩特市赛罕区昭乌达路党政办公大楼",
  "distance":0
}
```
