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

#### iconfont的使用

1. [iconfont-阿里巴巴矢量图标库](http://www.iconfont.cn/)

2. iconfont官网选择图标添加至购物车，再添加至项目，下载至本地

3. 挑选iconfont.eot、iconfont.svg、iconfont.ttf、iconfont.woff 放到项目/assets/styles/iconfont目录中，iconfont.css 放入项目/assets/styles中,修改iconfont.css中字体文件路径

4. main.js

   ```js
   // 引入iconfont
   import 'styles/iconfont.css'
   ```

5. 使用iconfont

   ```html
   <!-- 16进制代码需要在官网查看 -->
   <span class="iconfont">&#xe624;</> 
   ```

#### 通用代码

1. 通用变量封装

   1. 新建/assets/styles/varibles.styl

      ```
      $bgColor = #00bcd4
      $darkTextColor = #333
      $headerHeight = .86rem
      ```

   2. 使用通用变量

      ```javascript
      // @代表src目录
      // CSS中引入其他的CSS @前需要加~
      @import '~@/assets/styles/varibles.styl'
      
      // 可以给styles目录起一个别名
      // 在/build/webpack.base.conf.js中resolve起别名，具体见下面代码
      // 修改webpack配置项，需要重启服务npm run start才能生效
      @import '~styles/varibles.styl'
      ```

      ```js
      module.exports = {
        resolve: {
          extensions: ['.js', '.vue', '.json'],
          // 别名
          alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@': resolve('src'),
            'styles': resolve('src/assets/styles'),
            'common': resolve('src/common'),
          }
        },
      }
      ```

#### 轮播图

1. [vue-awesome-swiper](<https://github.com/surmon-china/vue-awesome-swiper>)

2. 安装第三方轮播插件：vue-awesome-swiper

   ```
   npm install vue-awesome-swiper@2.6.7 --save
   npm run start
   ```

3. 修改main.js

   ```
   import VueAwesomeSwiper from 'vue-awesome-swiper'
   import 'swiper/dist/css/swiper.css'
   Vue.use(VueAwesomeSwiper, /* { default global options } */)
   ```

4. 使用vue-awesome-swiper

   ```
   <swiper :options="swiperOption" v-if="showSwiper">
       <swiper-slide v-for="item of list" :key="item.id">
       	<img class="swiper-img" :src="item.imgUrl" />
       </swiper-slide>
       <div class="swiper-pagination"  slot="pagination"></div>
   </swiper>
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

#### 附录：插件

1. Vue.js devtools

