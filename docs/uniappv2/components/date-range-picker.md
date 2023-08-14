# DataRangPicker 时间区间选择器

## 页面使用

```vue
<template>
	<view>
       <view @click="onShowDatePicker('rangetime')">
          <view class="padding-sm">
             <text>开始时间：</text>
             <text>{{ rangetime[0] }}</text>
           </view>
           <view class="padding-sm">
             <text>至</text>
           </view>
           <view class="padding-sm">
             <text>完工时间：</text>
             <text>{{ rangetime[1] }}</text>
           </view>
         </view>
         <DataRangPicker :show="showPicker" :type="type" :value="value" :show-tips="true" :begin-text="'开始'"
                                  :end-text="'完工'" :show-seconds="true" @confirm="onSelected" @cancel="onSelected"/>
     </view>
</template>
<script>
    // 引入组件
    import DataRangPicker from "@/pages-dg/components/DatePicker/date-rang-picker";
    import dayjs from "dayjs";
    export default {
        // 组件注册到当前页面
        components: {MxDatepicker},
        data(){
            return {
                /*//////////////////////时间日期选择器///////////////////////////////*/
                showPicker: false,
                // 时间格式化
            	rangetime: [dayjs().format('YYYY/MM/DD HH:mm:ss'), dayjs().add(7, 'day').format('YYYY/MM/DD HH:mm:ss')],
            	type: 'rangetime',
            	value: '',
            	/*///////////////////////////////////////////////////////////////////*/
            }
        },
        methods:{
            //  打开时间选择器
        	onShowDatePicker(type) {//显示
                this.type = type;
                this.showPicker = true;
                this.value = this[type];
        	},
            //选择
            onSelected(e) {
                this.showPicker = false;
                if (e) {
                    this[this.type] = e.value;
                    this.formData.startTime = e.value[0];
                    this.formData.endTime = e.value[1];
                }
        	}
        }
    }
</script>
```

