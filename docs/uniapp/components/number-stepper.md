# NumberStepper 步进器

组件实现了增减按钮、可输入的数值框、以及可配置的属性（如最小值、最大值等），支持数值变化事件的触发。


组件名称
addOrSub

Props

|  属性 | 类型 | 默认值 | 描述 |
| :-------: | :--: | :----: | :--: |
| isMax | Boolean | false | 是否有上限设置 |
| isMin | Boolean | false | 是否有下限设置 |
| index | String | 0 | 唯一值，如果一个页面有多个数量增减组件时，起到唯一的作用 |
| value | Number | 0 | 数值 |
| min | Number | -Infinity | 最小值 |
| max | Number | Infinity | 最大值 |
| step | Number | 1 | 步长 |
| disabled | Boolean | false | 是否禁用 |
| inputEdit | Boolean | false | 是否可编辑 |


示例
```vue
<template>
  <NumberStepper
    :isMax="true"
    :isMin="true"
    :index="index"
    :value="value"
    :min="1"
    :max="10"
    :step="1"
    :disabled="false"
    :inputEdit="true"
    @eventChange="handleChange"
  />
</template>

<script>
import NumberStepper from '@/components/NumberStepper';

export default {
  components: {
    NumberStepper
  },
  data() {
    return {
      index: '1',
      value: 3
    }
  },
  methods: {
    handleChange(data) {
      console.log(data.number, data.index);
    }
  }
}
</script>
```

