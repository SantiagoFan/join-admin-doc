# 通用列表页

已经实现的功能  
· 搜索  
· 筛选  
· 排序  
· 下拉刷新  
· 上拉加载更多
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

## 列表页模板
```vue
<template>
  <view class="warp bg-white padding-bottom-xl">
    <!-- 状态栏 -->
    <cu-custom bgColor="bg-green" :isBack="true">
      <block slot="backText">返回</block>
      <block slot="content">标准列表页</block>
    </cu-custom>
    <!-- 搜索 -->
    <view class="cu-bar">
      <view class="search-form round">
        <i class="cuIcon-search"></i>
        <input :adjust-position="false" confirm-type="search" @confirm="Reload" v-model="queryParams.searchValue" type="text" placeholder="请输入后回车查询"/>
      </view>
    </view>
    <!-- 状态切换 建议写成组件 v-model 绑定queryParams的字段后触发Reload -->
    <scroll-view scroll-x class="bg-white nav " scroll-with-animation :scroll-left="scrollLeft">
      <view class="flex text-center">
        <view class="cu-item flex-sub" :class="queryParams.state==0?'text-green cur':''"  @tap="changeState(0)">全部</view>
        <view class="cu-item flex-sub" :class="queryParams.state==1?'text-green cur':''"  @tap="changeState(1)">未付款</view>
        <view class="cu-item flex-sub" :class="queryParams.state==2?'text-green cur':''"  @tap="changeState(2)">已发货</view>
        <view class="cu-item flex-sub" :class="queryParams.state==3?'text-green cur':''"  @tap="changeState(3)">已收货</view>
      </view>
		</scroll-view>
    <!-- 排序 -->
    <view class="cu-bar">
      <view class="action" @tap="ChangeSort('price')" :class="{'text-blue':queryParams.params.order =='price'}">
        <text>价格</text>
        <text v-if="queryParams.params.order =='price'" :class="queryParams.params.sort=='desc'?'cuIcon-triangledownfill':'cuIcon-triangleupfill'"></text>
      </view>
      <view class="action" @tap="ChangeSort('distant')" :class="{'text-blue':queryParams.params.order =='distant'}">
        <text>距离</text>
        <text v-if="queryParams.params.order =='distant'" :class="queryParams.params.sort=='desc'?'cuIcon-triangledownfill':'cuIcon-triangleupfill'"></text>
      </view>
      <view class="action" @tap="ChangeSort('time')" :class="{'text-blue':queryParams.params.order =='time'}">
        <text>时间</text>
        <text v-if="queryParams.params.order =='time'" :class="queryParams.params.sort=='desc'?'cuIcon-triangledownfill':'cuIcon-triangleupfill'"></text>
      </view>
		</view>

    <!-- 列表内容 -->
    <view class="padding">
      <view class="padding radius text-center shadow-blur bg-gray margin-bottom" v-for="(item,index) in list" :key="index">
        {{item.id}} {{item.name}}
      </view>
    </view>
    <!-- 暂无数据 -->
    <view v-if="total==0" class="text-xsl text-center">
      <view class="cuIcon-warn"></view>
      <view class="text-sm">暂无数据</view>
    </view>
  </view>
  
</template>
<script>
import commitList from "@/utils/commonList"
// 此处换成具体业务的api
import {getList} from "./api.js" 

export default {
  name:'List',
  mixins:[ commitList ],
  data(){
    return{
      // 查询条件
      queryParams:{
        // 业务特有字段
        state: 0
      }
    }
  },
   onLoad() {
    this.LoadData();
  },
  methods:{
    /**
     * 加载数据
     */
    LoadData(){
      uni.showLoading();
      getList(this.queryParams).then(res=>{
        this.list = res.rows
        this.total= res.total
      })
      .finally(() => {
        uni.hideLoading();
        uni.stopPullDownRefresh()
      })
    },
    changeState(state){
      this.queryParams.state = state
      this.Reload()
    }
  }
}
</script>
```

### commonList.js文件源码

```js
/**
 * 通用列表页（混合）
 */


 export default {
  data(){
    return {
      list:[],
      isLoading:false,//拉取状态
      isNodata:false,// 是否无数据
      total:0, // 总记录数
      queryParams: { //查询参数
        page: 1,
        limit:10,
        searchValue:'',
        params:{
          order:'',
          sort:'desc'
        }
      },
    }
  },
  onPullDownRefresh(){ //下拉刷新
    this.Reload();
  },
  onReachBottom(){ //触底函数
    this.LoadMore();
  },

  methods:{
    /**
     * 重新加载、查询
     */
    Reload(){
      this.isNodata = false;
      this.isLoading= false;
      this.list=[];
      this.queryParams.page = 1;
      this.LoadData();
    },
    /**
     * 加载下一页
     * @returns 
     */
    LoadMore(){
      if(this.isNodata||this.isLoading)return;//无数据或者加载中不进行加载
      this.queryParams.page += 1;
      this.LoadData();
    },
    /**
     * 切换排序
     * @param {*} field 
     */
    ChangeSort(field){
      this.queryParams.params.order = field
      this.queryParams.params.sort = this.queryParams.params.sort =='desc'?'asc':'desc'
      console.info(this.queryParams)
      this.LoadData();
    },
    /**
     * 加载数据(此方法页面覆盖)
     */
    LoadData(){
    }
  }
 }
```
