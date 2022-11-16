---
title: Springboot项目部署流程（Nginx + 宝塔）
---

# Springboot 项目部署流程
## 一.部署前准备

### 1.域名准备
在域名服务商网站增加两个域名（可以使用二级域名），并解析到服务器所属IP地址上。一个作为Java接口服务的域名，一个作为管理端后台的域名  
例如：
|  域名   | 用途  |
|  ----  | ----  |
|demo.usei.cn |接口服务域名 |
|demo-admin.usei.cn |管理后台域名 |

### 2.上传数据库文件
1. 宝塔内选择 数据库-> 添加数据库
![nginx](/images/java-database.png) 
2. 创建成功后,在列表内选择导入、上传本地sql文件后，执行导入，也可以从其他数据库备份文件中导入。
3. 修改本地java 代码，数据库连接账户密码为刚才创建的账号和密码。

### 3.编译后端jar包
在IDE内选择Maven工具窗体，选择`package`命令，执行成功后，在项目下 `项目文件夹\ruoyi-admin\target` 下生成`ruoyi-admin.jar` jar 包
### 4.编译前端dist包
在前端项目目录下(`项目文件夹\ruoyi-ui`) 下运行命令 `npm run build:prod`生成部署文件夹dist,右键dist文件夹（不用进入文件夹）选择`添加到压缩文件`，生成压缩包 `dist.rar`

## 二.项目目录
1. 登录宝塔后，选择文件 -> 定位到/www/wwwroot目录下 -> 新建目录 demo.usei.cn（使用域名作为整个项目的文件夹）
2. 项目文件夹内新建`api`目录存放jar包，和生成的日志文件
3. 上传之前准备的`ruoyi-admin.jar`包到api目录
4. 上传之前准备的`dist.rar`包到项目目录，并点击菜单解压生成dist文件夹
```
/www/wwwroot
├─ demo.uesi.cn
│  ├─ api
│  │  └─ ruoyi-admin.jar
│  └─ dist
│     ├─ index.html
│     └─ .....
```


## 三.创建nginx项目
1. 宝塔内选择 网站-> java 项目 -> 添加java项目
2. 项目jar包路径选择刚才上传的jar包
3. 项目名称起和本项目相关名称
4. 端口使用默认随机的端口即可
5. 勾选开机启动  
6. 配置接口服务的域名  
7. 点击添加即可
8. 检查java目录下项目是否正确运行
![nginx](/images/java-nginx.png)  

tips: 如果涉及到自动裁图 需要在添加完项目后，点击设置、配置文件 设置自动裁图配置信息（详见）

## 四.vue管理后台部署
1. 宝塔内选择 网站-> php 项目 -> 添加php项目
2. 绑定之前准备的后端管理后台网址
3. 选择项目文件夹的dist 目录
4. php 版本选择纯静态

![nginx](/images/vue-dist.png) 
5.添加成功后配置vue访问路径的支持，防止刷新404，选择列表中本项目，点击设置-> 配置文件 在 `location ~ .*\.(js|css)?$` 前添加
```
location / {
    index  index.html index.htm;
    try_files $uri $uri/ /index.html;
}
```