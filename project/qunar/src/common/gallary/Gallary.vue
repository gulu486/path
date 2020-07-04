<template>
<!-- 公用画廊组件 -->
  <section class="container" @click="closegallary">
    <div class="wrapper">
      <swiper :options="swiperOptions">
        <swiper-slide v-for="(item, index) in imgs" :key="index">
          <img class="gallary-img" :src="item">
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
  </section>
</template>

<script>
export default {
  name: 'CommonGallary',
  props: {
    imgs: Array,
    default () {
      return ['']
    }
  },
  data () {
    return {
      swiperOptions: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        // 解决swiper重新渲染，无法滚动，自我刷新
        observeParents: true,
        observer: true
      }
    }
  },
  methods: {
    // 向父组件传方法
    closegallary () {
      this.$emit('close')
    }
  }
}
</script>

<style lang='stylus' scoped>
// 样式穿透，设置overflow
  .container >>> .swiper-container
    overflow inherit
  .container
    // 垂直居中
    display: flex
    flex-direction: column
    justify-content: center
    z-index: 99
    // 固定位置
    position: fixed
    left: 0
    right: 0
    top: 0
    bottom: 0
    background: #000
    .wrapper
      width: 100%
      height: 0
      padding-bottom: 100%
      .gallary-img
        width 100%
      .swiper-pagination
        color: #fff
        bottom: -1rem
</style>
