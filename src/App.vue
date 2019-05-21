<template>
  <div id="app">
    <router-view/>
    <van-tabbar v-model="active">
        <van-tabbar-item >
          <span>首页</span>
          <img
            slot="icon"
            slot-scope="props"
            :src="props.active ? find.active : find.normal"
          >
        </van-tabbar-item>
        <van-tabbar-item >
          <span>课表</span>
          <img
            slot="icon"
            slot-scope="props"
            :src="props.active ? clazz.active : clazz.normal"
          >
        </van-tabbar-item>
        <van-tabbar-item >
          <span>学习</span>
          <img
            slot="icon"
            slot-scope="props"
            :src="props.active ? study.active : study.normal"
          >
        </van-tabbar-item>
        <van-tabbar-item >
          <span>我的</span>
          <img
            slot="icon"
            slot-scope="props"
            :src="props.active ? user.active : user.normal"
          >
        </van-tabbar-item>
      </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      active: 0,
      find: {
        normal: 'static/iyueke_tab_find_icon_normal.png',
        active: 'static/iyueke_tab_find_icon_active.png'
      },
      clazz: {
        normal: 'static/iyueke_tab_class_icon_normal.png',
        active: 'static/iyueke_tab_class_icon_active.png'
      },
      study: {
        normal: 'static/iyueke_tab_student_normal.png',
        active: 'static/iyueke_tab_student_active.png'
      },
      user: {
        normal: 'static/iyueke_tab_mine_normal.png',
        active: 'static/iyueke_tab_mine_active.png'
      }
    }
  }
}
</script>

<style>
</style>
