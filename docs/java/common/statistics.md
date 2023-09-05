# statistics 快捷统计
对于日常统计汇总信息，单独写Dto费时可使用 快捷统计  
此功能禁止对数据进行变更，只容许统计分析！！！！
<Badge type="danger" text="禁止对数据进行变更" vertical="bottom" />
包名称：`package com.ruoyi.common.statistics`


### Mapper 直接编写统计sql
```java{4}
@Mapper
public interface StatisticsMapper
{
    @Select("select * from app_member limit  1")
    List<JSONObject> list();
}
```

### Controller 
暴露函数
```java{15}
package com.ruoyi.common.statistics.controller;
/**
 * 统计
 */
@RestController
@RequestMapping("/statistics")
public class StatisticsController {

    @Autowired
    StatisticsMapper statisticsMapper;
    /**
     * 列表数据
     */
    @Anonymous
    @GetMapping("/gisData")
    public AjaxResult gisData()  {
        List<JSONObject> data =  statisticsMapper.gisData();
        return AjaxResult.success(data);
    }
    /**
     * 对象数据
     */
    @Anonymous
    @GetMapping("/totalData")
    public AjaxResult totalData()  {
        // 实际调用
        //JSONObject obj =  statisticsMapper.totalData();
        return AjaxResult.success(d);
    }
}
```

### 前台api 拉取数据
```
url path：'/statistics/***'
```