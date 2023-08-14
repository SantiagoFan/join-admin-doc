# CmmonList Vue3 通用列表页

已经实现的功能  
· 搜索  
· 筛选  
· 排序  
· 下拉刷新  
· 上拉加载更多  
· 全选



### 列表页模板
```js
<template>

  <view>
    <view v-for="(item,index) in list" :key="index">
        <checkbox style="transform: scale(0.7)" @tap="item.$checked= !item.$checked" :value="item.$checked" :checked="item.$checked"/>
        数据内容
    </view>
  </view>


  <view>
    <checkbox :checked="isAllChecked" @tap="CheckedAll"/> 全选
  </view>

</template>
<script setup>
import {onMounted} from "vue";
import commonList from "@/common/commonList"; // 引入列表页组件
// 导出需要的数据或者函数
const { list, LoadData,Reload, queryParams,CheckedAll,isAllChecked} = commonList({
  query: getList //你的拉去列表页接口
})

onMounted(()=>{
  Reload() //加载数据
})

<script>
```
### 全部导出对象

|属性|默类型|描述
|---|---|---|
list |数据 | 加载的列表数据
checkedList |数据 | 已选择的列表
isLoading |数据 | 是否正在加载
total |数据 | 全部记录数
queryParams |数据 | 查询参数
isAllChecked |计算字段 | 是否已全选（item.$checked == true）
isNoData |计算字段 | 是否无数据
-- 函数
LoadData |函数 | 加载初始数据
Reload |函数 | 重新加载
LoadMore |函数 | 加载更多
ChangeSort( field ) |函数 | 切换排序加载数据
CheckedAll |函数 | 全选/全不选

### 下拉刷新（按需修改，非必须）
在 pages.json 内修改相关列表页的 enablePullDownRefresh 参数
```json{6}
{
  "pages": [
    {
      "path": "你的页面地址",
      "style": {
        "enablePullDownRefresh": true // 增加此行 当前页面启用下拉刷新
      }
    }
  ]   
}
```