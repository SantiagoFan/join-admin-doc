---
lang: zh-CN
title: 自己的订单实现支付
---
# JavaPayment 自己的订单实现支付
join.payment模块下的`paymentExample`文件夹写了实现示例，可参考实现自己的订单

## 一.实体类实现接口
实体类 实现IPayableOrder 接口
```java
public class MyOrder implements IPayableOrder {
    @Override
    public String getBusinessNo() {
      ...
    }

    @Override
    public String getBusinessName() {
      ...
    }
}
```

## 二.服务实现接口
服务Service 的接口继承IPayableOrderService

IPayableOrderService 包含四个主要方法

1. 发起支付 PayResult payOrder(IPayableOrder order, PayParam param)
2. 支付成功回调 void paySuccess(PayOrder payOrder)
3. 发起退款 
4. 退款成功回调 void refundSuccess(PayOrder refundOrder)


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
