---
lang: zh-CN
title: 支付中心使用
---
# JavaPayment 支付中心使用方法
## 一.引用包 join-payment
主要pom中引入
```xml
    <dependencyManagement>
      <dependencies>
      ...
        <!--支付中心-->
        <dependency>
            <groupId>com.ruoyi</groupId>
            <artifactId>join-payment</artifactId>
            <version>${ruoyi.version}</version>
        </dependency>
        ...
      </dependencies>
    </dependencyManagement>

    <modules>
      ...
      <module>join-payment</module>
      ...
    </modules>
```
admin pom 项目中引入
```xml
<!--支付中心-->
<dependency>
    <groupId>com.join</groupId>
    <artifactId>join-payment</artifactId>
</dependency>
```



## 二. 配置yml支付参数
```yml
# 微信支付配置
wx:
  pay:
    appId: xxxx #微信公众号或者小程序等的appid
    mchId: xxxx #微信支付商户号
    mchKey: xxxx #微信支付商户密钥
    #    subAppId: #服务商模式下的子商户公众账号ID
    #    subMchId: #服务商模式下的子商户号
    keyPath: xxxx # p12证书的位置，可以指定绝对路径，也可以指定类路径（以classpath:开头）
```


## 二.实体类实现接口
实体类 实现IPayableOrder 接口
```java
public class MyOrder implements IPayableOrder {
    @Override
    public String getBusinessNo() {
      ...
    }

    @Override
    public BigDecimal getPayAmount() {
      ...
    }
}
```

## 二.服务实现接口
服务Service实现IPayableOrderService
```java{2}
MyOrdersServiceImpl implements 
IPayableOrderService,
IMyOrdersService
{
  // 支付服务
  @Autowired
  private IPaymentService paymentService;
  /**
  * 获得业务名称
  * @return 业务别名
  */
  String getBussinesName(){ return "充值订单" };
  /**
     * 发起支付
     * @param order 支付业务单
     * @param param 支持参数
     * @return 支付结果
     */
    PayResult payOrder(IPayableOrder order, PayParam param){
      return paymentService.payOrder(order,param);
    };
     /**
     * 支付成功后回调
     * @param payOrder 支付记录
     */
    void paySuccess(PayOrder payOrder){
      // 通过业务单号查询订单
        MyOrder order = selectOrderByNo(payOrder.getBusinessNo());
        // 更新状态
        updateOrder(order);
    };

    /**
     * 退款成功后回调
     * @param refundOrder 退款记录
     */
    void refundSuccess(PayOrder refundOrder) {
     ...
    };
}
```

## 三. 调用发起支付
Controller 中调用服务
```java


```
