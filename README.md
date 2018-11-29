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
7. 用浏览器打开 http://localhost:9999 即可

#### 使用说明

1. 可参看express官网 http://www.expressjs.com.cn/
2. 按照安装步骤生产空的项目
3. 在静态文件目录添加静态文件 index.html,在 main.js中发送请求获取数据；在路由 index.js 中编写请求的响应

#### 参与贡献

1. Fork 本项目
2. 新建 Feat_xxx 分支
3. 提交代码
4. 新建 Pull Request
