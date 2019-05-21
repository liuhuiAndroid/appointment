<template>
  <div>
    <home-header></home-header>
    <home-swiper :list="swiperList"></home-swiper>
    <home-course :list="orgList"></home-course>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeCourse from './components/Course'
const axios = require('axios')
const instance = axios.create({
  baseURL: 'https://api.iyueke.net/api/',
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'cnSgExPqm2lf81FXpohDPpd3UdLj9Rl+2r/dIPoPngeCoX9ycOsP3xCFg5oM7JIq'
  }
})

export default {
  name: 'Home',
  components: {
    HomeSwiper,
    HomeHeader,
    HomeCourse
  },
  data () {
    return {
      swiperList: [],
      orgList: []
    }
  },
  methods: {
    getPromotionList () {
      instance.post('Discovery/GetPromotionList').then(this.getPromotionListSucc)
    },
    getPromotionListSucc (res) {
      res = res.data
      if (res.code === '0') {
        const data = res.data
        this.swiperList = data
      }
    },
    getOrgClass () {
      // 100001
      var data = '{"param":"inhQIHwsBX6aukEW3u4+bg\u003d\u003d\n"}'
      instance({
        method: 'post',
        url: 'Discovery/GetOrgClass',
        data: data
      }).then(this.getOrgListSucc)
    },
    getOrgListSucc (res) {
      res = res.data
      if (res.code === '0') {
        const data = res.data
        this.orgList = data
      }
    }
  },
  mounted () {
    this.getPromotionList()
    this.getOrgClass()
  }
}
</script>

<style scoped>
.home {
  font-size: 50px;
}
</style>
