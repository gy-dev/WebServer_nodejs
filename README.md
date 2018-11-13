# WebServer_nodejs

#### 项目介绍
使用nodejs搭建Web服务器Demo，实现页面显示及前端获取后端数据

#### 软件架构
软件架构说明


#### 安装教程

1. 安装nodejs
2. npm install express-generator -g //全局安装express生成器
3. express --view=ejs demo //创建了一个名称为 demo 的 Express 应用。此应用将在当前目录下的 demo 目录中创建，并且设置为使用 ejs 模板引擎
4. cd demo
   npm install      //安装依赖包
5. set DEBUG=demo:* & npm start  //windows 下的启动命令
6. DEBUG=demo:* npm start      //MacOS 或 Linux 下的启动命令

#### 使用说明

1. 可参看express官网 http://www.expressjs.com.cn/
2. 按照安装步骤生产空的项目
3. 在静态文件目录添加静态文件 index.html,在 main.js中发送请求获取数据；在路由 index.js 中编写请求的响应

#### 参与贡献

1. Fork 本项目
2. 新建 Feat_xxx 分支
3. 提交代码
4. 新建 Pull Request


#### 码云特技

1. 使用 Readme\_XXX.md 来支持不同的语言，例如 Readme\_en.md, Readme\_zh.md
2. 码云官方博客 [blog.gitee.com](https://blog.gitee.com)
3. 你可以 [https://gitee.com/explore](https://gitee.com/explore) 这个地址来了解码云上的优秀开源项目
4. [GVP](https://gitee.com/gvp) 全称是码云最有价值开源项目，是码云综合评定出的优秀开源项目
5. 码云官方提供的使用手册 [https://gitee.com/help](https://gitee.com/help)
6. 码云封面人物是一档用来展示码云会员风采的栏目 [https://gitee.com/gitee-stars/](https://gitee.com/gitee-stars/)