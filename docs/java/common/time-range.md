# TimeRange 时间区间工具类

包名称：`package com.ruoyi.common.utils.TimeRangeUtils`

#### Map<String, String> getRange(String type)
以当前时间为基准根据type计算时间区间  
#### Map<String, String> getRange(String type, LocalDateTime now)
以传入时间now为基准根据type计算时间区间

|type参数|含义|
|---|---|
day|当日
week|本周
month|本月
quarter|本季度
year|本年

```java
// 调用工具类返回时间区间
Map<String, String> timeMap = TimeRangeUtils.getRange(type);
// timeRang 里面包含 startTime、endTime
// 通过查询参数查询数据
CustomerSummary summary = Service.getStateSummary(timeMap);
```
getRange响应结果：返回时间区间

```json
{
  "starTime":"2022-09-01 00::00:00",
  "endTime":"2022-09-01 23:59:59"
}
```


### mapper.xml 
mapp.xml中 可使用 startTime、endTime 参数拼接sql
```sql
<!--查询部门 客户状态统计-->
    <select id="selectCustomerSummary" resultMap="CustomerSummaryResult">
        select count(1) count
                from lxj_customer
                where create_time between #{startTime} and #{endTime}) ,
    </select>
```