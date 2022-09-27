---
title: 统一素材管理
---
## 1.统一素材管理
### 1.1 增加数据库表
cms_attachment
```sql
create table cms_attachment
(
	id varchar(100) not null,
	file_name text null comment '文件名',
	group_id int null comment '所属分组',
	file_size varchar(20) null comment '文件大小',
	type varchar(11) null comment '文件类型：类型对应关系在attachment_type表中',
	url text null comment 'url',
	save_path text null comment '保存路径',
	create_by varchar(255) null comment '创建人id',
	create_time datetime null comment '创建时间',
	update_by varchar(255) null comment '更新人',
	update_time datetime null comment '更新时间',
	constraint attachment_id_uindex
		unique (id)
)
comment '附件素材表' charset=utf8;

alter table attachment
	add primary key (id);
comment '素材分组表' charset=utf8;
```
cms_attachment_group
```sql
create table cms_attachment_group
(
	id int(11) unsigned auto_increment comment '主键id'
		primary key,
	name varchar(100) null comment '组名称',
	type varchar(11) null comment '文件类型',
	create_by varchar(255) null comment '创建人id',
	create_time datetime null comment '创建时间',
	update_by varchar(255) null comment '更新人id',
	update_time datetime null comment '更新时间'
)
comment '素材分组表' charset=utf8;

```
### 1.2 需要拷贝的文件
#### join-cms 模块
|文件|模块|描述
|---|---|---|
IAttachmentService.java|CMS|素材管理接口
IAttachmentGroupService.java|CMS|素材分组接口
AttachmentServiceImpl.java|CMS|素材服务
AttachmentGroupServiceImpl.java|CMS|素材分组服务
AttachmentMapper.java|CMS|素材Mapper
AttachmentGroupMapper.java|CMS|素材分组Mapper
AttachmentMapper.xml|CMS|素材Mapper xml
AttachmentGroupMapper.xml|CMS|素材分组Mapper xml

#### ruo-admin  模块 CommonController 增加函数
|函数|文件|描述
|---|---|---|
attachmentUploadFile|CommonController|上传文件增加数据库记录
resizeImage|CommonController|url 裁图函数

### 1.3 前端ruoyi-ui拷贝文件

#### src/components/attachment 公共组件
|文件|模块|描述
|---|---|---|
AttachmentDialog.vue|src/components/attachment|弹窗选择子组件
AttachmentGroup.vue|src/components/attachment|分组子组件
AttachmentList.vue|src/components/attachment|素材列表子组件
AttachmentUpload.vue|src/components/attachment|上传子组件
ImageList.vue|src/components/attachment|用户使用组件，返回图片地址（多个图片地址使用“，”间隔）
#### src/api/cms 接口文件
|文件|文件夹|描述
|---|---|---|
attachment.js|src/api/cms|素材管理接口
attachmentGroup.js|src/api/cms|素材分组接口

#### src/views/cms/attachment 页面管理
|文件|模块|描述
|---|---|---|
list.vue|cms/attachment|素材列表
attachment_image.vue|cms/attachment/components/|图片素材列表


