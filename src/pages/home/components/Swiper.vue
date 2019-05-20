<template>
    <div class="wrapper">
        <swiper :options="swiperOption" v-if="showSwiper">
            <swiper-slide v-for="item of list" :key="item.ClassID">
                <img class="swiper-img" :src="item.CourseBanner_img" />
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        // 显示指示器
        pagination: '.swiper-pagination',
        // 支持轮播循环
        loop: true
      }
    }
  },
  computed: {
    showSwiper () {
      return this.list.length
    }
  }
}
</script>

<style lang="stylus" scoped>
// style穿透
.wrapper >>> .swiper-pagination-bullet-active {
    background: #fff !important;
}

.wrapper {
    overflow: hidden;
    width: 100%;
    height: 0;
    padding-bottom: 34.97%
    background: #eee;

    .swiper-img {
        width: 100%;
    }
}
</style>
