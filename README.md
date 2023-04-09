# 贡献文档
## 下载当前仓库
```
git clone git@gitee.com:san_fan/join-admin-doc.git
```
## 安装依赖
```
yarn install
```

##  运行并开发
```
yarn docs:dev
yarn dev
```

## 编写教程
###  在docs 目录编写md 文档
### 在 `/docs/.vuepress/sidebar.js` 编写菜单连接
加入到相关的子菜单中
```
{
      text: 'xxxx',
      children: [
        '......',
        '此处写md的路径即可'
      ],
    },
```
文章标题可在相关的md 文件头部定义


##  编译
```
yarn build
```

## 部署
```
# 编译项目
yarn build
git add .
git commit -m '增加了XX组件的说明文档'
git push
```
在当前文档的gitee仓库选择
服务 -> giee pages -> 更新