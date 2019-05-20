<template>
  <div>
    <div class="home">hello world</div>
    <home-swiper :list="swiperList"></home-swiper>
  </div>
</template>

<script>
import HomeSwiper from './components/Swiper'
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
    HomeSwiper
  },
  data () {
    return {
      swiperList: []
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
    }
  },
  mounted () {
    this.getPromotionList()
  }
}
</script>

<style scoped>
.home {
  font-size: 50px;
}
</style>
