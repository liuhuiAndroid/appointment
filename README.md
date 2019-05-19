#### 环境配置

1. 安装node.js

   ```
   node -v # 查看node是否安装成功
   npm -v # 查看包管理工具npm是否安装成功
   ```

2. 全局安装vue-cli

   vue官网安装有命令行工具（CLI）构建工程travel，如下：

   ```shell
   npm install --global vue-cli
   #创建一个基于webpack模板的新项目
   vue init webpack appointment
   cd appointment
   npm install
   npm run dev
   ```

3. 上传代码

   ```shell
   git status
   git add .
   git commit -m 'project initialized'
   git push
   ```
   
4. 项目代码初始化

   1. 修改viewport这个meta标签，符合移动端

      ```html
      <meta name="viewport"
          content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no">
      ```

   2. 引入reset.css 重置页面样式表，使手机样式统一

      ```js
      import './assets/styles/reset.css'
      ```

   3. 引入border.css 解决1px边框问题

      ```js
      import './assets/styles/border.css'
      ```

   4. 引入fastClick库 解决某些机型click事件300毫秒延迟问题

      ```
      npm install fastclick --save
      import fastClick from 'fastclick'
      fastClick.attach(document.body)
      ```