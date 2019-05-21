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
    'Authorization': 'QjugtwFMqAL2J370x9t0HIt2Vfs7A0zwcx76Cgepp0/2WkgtAbE1E4Yw2GiWxbkV'
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
      var data = '{"param":"inhQIHwsBX6aukEW3u4+bg\u003d\u003d"}'
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
