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

#### stylus：富于表现力、动态的、健壮的CSS

1. 安装stylus

   ```shell
   npm install stylus --save
   npm install stylus-loader --save
   ```

2. stylus的使用

   ```
   1rem = html font-size = 50px
   scoped使样式不对其他组件产生影响
   ```

#### 轮播图

1. 安装第三方轮播插件：vue-awesome-swiper

   ```
   npm install vue-awesome-swiper@2.6.7 --save
   npm run start
   ```

2. 修改main.js

   ```
   import VueAwesomeSwiper from 'vue-awesome-swiper'
   import 'swiper/dist/css/swiper.css'
   Vue.use(VueAwesomeSwiper, /* { default global options } */)
   
   这一节主要讲Swiper.vue
   data: function() {} 在ES6可以简化成 data () {}
   width: 100% height: 31.25vw  #高度是宽度的百分之31.25
   
   样式穿透：
   .wrapper >>> .swiper-pagination-bullet-active {
       background: #fff !important;
   }
   ```



#### 使用 axios 发送 ajax 请求

1. [axios Github地址](<https://github.com/axios/axios>)

2. 安装axios

   ```shell
   npm install axios --save
   ```

3. 使用axios

   ```
   import axios from 'axios'
   借助生命周期钩子发送ajax请求
   ```

4. mock数据

   ```
   http://localhost:8080/static/mock/index.json可以访问到本地测试数据
   webpack-dev-server 工具提供 config/index.js proxyTable配置请求转发，方便开发环境模拟数据
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
   
   如果不想上线在localhost而是想在localhost/project
   需要修改config/index.js中build部分的内容，修改assetsPublicPath: '/project'
   ```

4. 后续学习指南

   ```
   多看vue官方文档、vue-router文档、vuex文档、vue服务器端渲染、awesome-vue插件、vue源码
   ```
   
   [vue官方文档](<https://cn.vuejs.org/>)
   
   [awesome-vue插件](<https://github.com/vuejs/awesome-vue>)
   
   [Vue2.5实战微信读书](https://coding.imooc.com/class/chapter/285.html)

