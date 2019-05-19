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





#### 项目的联调，测试与发布上线

1. 项目前后端联调

   ```js
   修改config/index.js中proxyTable,配置服务器ip地址
   ```

2. 真机测试

   真机会拒绝访问，8080端口无法被外界访问。

   原因是：webpack dev server默认不支持通过ip形式访问

   ```
   修改package.json中scripts dev 增加：--host 0.0.0.0
   npm run start 重启服务器，手机可以通过ip地址访问
   ```

   解决Android手机浏览器兼容问题,白屏：

   ```
   npm install babel-polyfill --save
   main.js 引入 import 'babel-polyfill' 
   ```

3. 打包上线

   ```
   npm run build
   等待提示：Build complete. 会生成dist目录，这就是最终上线代码。
   ```

4. 



######10-3 Vue项目的联调测试上线 - 

```


如果不想上线在localhost而是想在localhost/project
需要修改config目录下的index.js中build部分的内容，修改assetsPublicPath: '/project'
```



######10-5 Vue项目的联调测试上线 - 课程总结与后续学习指南

```
多看vue官方文档、vue-router文档、vuex文档、vue服务器端渲染、awesome-vue插件、vue源码
完结撒花。。。
```