---
lang: zh-CN
title: 支付记录表
---
# 支付记录表
pay_order
```java
    /** 支付记录表 */
    private String id;

    /** 支付项目名称 */
    @Excel(name = "支付项目")
    private String title;

    /** 是否为退款 */
    @Excel(name = "是否为退款")
    private Boolean isRefund;

    /** 支付完成状态 -1撤销 0 默认 1 交易中 2支付完成 */
    @Excel(name = "完成状态")
    private OrderStateEnum state;

    /** 业务类别：1.商品支付 */
    @Excel(name = "业务类别")
    private String businessName;

    /** 内部业务 关联订单号码 */
    @Excel(name = "内部业务")
    private String businessNo;

    /** 支付渠道：alipay,wxpay */
    @Excel(name = "支付渠道")
    private String payChannel;

    /** 客户端交易类型：wx_js,... */
    @Excel(name = "交易类型")
    private String clientType;

    /** 支付渠道 返回的外部订单号 */
    @Excel(name = "支付渠道单号")
    private String payChannelNo;

    /** 操作金额 支付为正 退款为负 */
    @Excel(name = "操作金额")
    private BigDecimal amount;

    /** 实际支付金额 */
    @Excel(name = "实际支付金额")
    private BigDecimal realAmount;

    /** 下单时间 */
    @JsonFormat(pattern = "yyyy-MM-dd")
    @Excel(name = "下单时间", width = 30, dateFormat = "yyyy-MM-dd")
    private Date applyTime;

    /** 交易完成时间 */
    @JsonFormat(pattern = "yyyy-MM-dd")
    @Excel(name = "交易完成时间", width = 30, dateFormat = "yyyy-MM-dd")
    private Date completeTime;

    /** 原订单交易金额 */
    @Excel(name = "原订单交易金额")
    private BigDecimal originalAmount;

    /** 原始交易订单 */
    @Excel(name = "原始交易订单")
    private String originalId;
```