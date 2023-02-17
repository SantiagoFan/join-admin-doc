---
lang: zh-CN
title: 支付中心使用
---
# JavaPayment 支付中心使用方法
tips: payment 模块封装底层不同通道的支付调用，业务层只需要按接口实现4个函数即可完成支付对接。

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
## 二.生成数据表
pay_order 表存储了所有业务类型的支付记录信息
```sql
/*
 Join Payment 支付中心
 Source Server Type    : MySQL
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- 支付记录表
-- ----------------------------
DROP TABLE IF EXISTS `pay_order`;
CREATE TABLE `pay_order`  (
  `id` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '支付记录表',
  `title` varchar(128) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '支付项目名称',
  `is_refund` tinyint(1) NULL DEFAULT 0 COMMENT '是否为退款',
  `state` int(11) NULL DEFAULT 0 COMMENT '支付完成状态 -1撤销 0 默认 1 交易中 2支付完成',
  `business_name` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '业务类别：1.商品支付',
  `business_no` varchar(128) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '内部业务 关联订单号码',
  `pay_channel` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '支付渠道：alipay,wxpay',
  `pay_channel_no` varchar(128) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '支付渠道 返回的外部订单号',
  `amount` decimal(10, 2) NULL DEFAULT NULL COMMENT '操作金额 支付为正 退款为负',
  `real_amount` decimal(10, 2) NULL DEFAULT NULL COMMENT '实际支付金额',
  `apply_time` datetime NULL DEFAULT NULL COMMENT '下单时间',
  `complete_time` datetime NULL DEFAULT NULL COMMENT '交易完成时间',
  `original_amount` decimal(10, 2) NULL DEFAULT NULL COMMENT '原订单交易金额',
  `original_id` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '原始交易订单',
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `pay_order_order_code_uindex`(`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

SET FOREIGN_KEY_CHECKS = 1;


-- ----------------------------
-- 示例表 可以不创建
-- ----------------------------
DROP TABLE IF EXISTS `pay_example_order`;
CREATE TABLE `pay_example_order`  (
  `order_no` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '业务单号',
  `create_time` datetime NULL DEFAULT NULL COMMENT '创建时间',
  `title` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '标题',
  `state` int(11) NULL DEFAULT NULL COMMENT '支付状态',
  `pay_order_no` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '支付单流水号',
  `amount` decimal(10, 2) NULL DEFAULT NULL COMMENT '支付金额',
  PRIMARY KEY (`order_no`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '可支付业务演示' ROW_FORMAT = Dynamic;

```
