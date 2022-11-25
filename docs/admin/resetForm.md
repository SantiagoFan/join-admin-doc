# resetForm 重置查询条件


### 重置表单是如何实现查询条件的重置的？

```html
<el-button icon="el-icon-refresh" size="mini" @click="resetQuery">重置</el-button>
```
点击按钮调用 resetQuery

```javascript{3}
/** 重置按钮操作 */
    resetQuery() {
      this.resetForm("queryForm");
    },
```
`resetForm` 并不是本vue文件中定义的函数，而是在`main.js` 文件中全局挂载函数，在任何一个页面都可以直接调用
```javascript
import { resetForm} from "@/utils/ruoyi";
// 全局方法挂载
Vue.prototype.resetForm = resetForm
```
resetForm 函数具体实现在 `"@/utils/ruoyi.js"`内

```javascript{4}
// 表单重置
export function resetForm(refName) {
  if (this.$refs[refName]) {
    this.$refs[refName].resetFields();
  }
}
```
`resetFields` 是 el-form 函数的
[具体查看](https://element.eleme.cn/#/zh-CN/component/form)  
作用：对整个表单进行重置，将所有字段值重置为初始值并移除校验结果

### 那resetFields是如何定位字段的呢？

```html{2,3}
<el-form :model="queryParams" ref="queryForm" >
    <el-form-item label="备注" prop="inRemark">
        <el-input v-model="queryParams.inRemark" />
    </el-form-item>
</el-form>
```

resetForm函数是通过form元素的  `ref="queryForm"` 定位form 元素，然后对model的绑定的queryParams的属性进行重置，然后通过 el-form-item 的`prop="inRemark"` 值定位属性进行重置的。


::: danger 提醒
resetForm 只会重置 在el-form-item绑定的prop属性。
:::



