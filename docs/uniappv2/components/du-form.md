# du-form 表单验证组件
移动使用类似 el-form的验证方式

### du-form 参数
|属性|类型|描述
|---|---|---|
|data|Object| 验证的form 数据
|rules|Object|验证规则

### du-form-form 参数
|属性|类型|描述
|---|---|---|
|prop|String| 验证字段
|label|String|标题
|required | bool| 是否必填

```vue
<du-form ref="formRef" :data="formData" :rules="relues">
  <du-form-item label="名称" prop="name">
    <input v-model="detailTemp.name">
  </du-form-item>
</du-form>
<script setup>
// $refs['formRef']对象
const formRef = ref(null)
// 提交订单信息
const formData = ref({
  name:"",
  phone:"",
  idCard:""
})
const relues = reactive({
  name:[
    { required: true, message: '名称必须填写', trigger: 'blur' },
 phone:[
    { required: true, message: '电话号码必须填写' },
    { pattern: /^1[3|4|5|6|7|8|9][0-9]\d{8}$/, message: '手机号格式不正确' },
  ],
  ]
})
function submit(){
  formRef.value.validate((res)=>{
    if(res){
      // 通过验证
    }
  })
}

</script>
```