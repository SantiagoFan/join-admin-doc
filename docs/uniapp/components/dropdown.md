# Dropdown 下拉选择组件

### 演示
#### 1.表格布局
![dropdown](/images/components/dropdown.png)
#### 2.列表布局
![dropdown](/images/components/dropdown2.png)


```vue
 <du-dropdown-group>
      <du-dropdown title="业务" v-model="queryParams.businessType" layout="grid" :options="businessTypeList"></du-dropdown>
      <du-dropdown title="状态" v-model="queryParams.status" :options="statusList"></du-dropdown>
    </du-dropdown-group>
```

### dropdown-group 参数
|属性|默认值|描述
|---|---|---|
|height|100| 高度（upx）
|close|函数|关闭全部展开窗体
|change|事件| 下拉菜单值改变触发


### dropdown 参数
|属性|默认值|描述
|---|---|---|
|v-model|''| 绑定值
|options|array| 候选列表 `[{label:'选项1',value:1}]`
|title|''|显示标题
|layout|list |可选项布局，可选 `layout`,`grid`
|activeClass|'primary' | 激活项颜色（dock-ui 颜色列表）
|titleClass|'' | 标题颜色
|change| 事件 | 值改变后触发

### dropdown slot
|属性|默认值|描述
|---|---|---|
|foot|''| 底部拓展
