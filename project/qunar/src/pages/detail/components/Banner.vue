<template>
  <div>
    <div class="banner" @click="showgallary">
      <img class="banner-img" :src="bannerImg"/>
      <div class="banner-info">
        <div class="banner-title">{{ this.sightName }}</div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe692;</span>
          {{ this.gallaryImgs.length }}
        </div>
      </div>
    </div>
    <fade-animation>
      <common-gallary :imgs="gallaryImgs" v-show="showGallary" @close="closegallary"/>
    </fade-animation>
  </div>
</template>

<script>
// 引用公用组件Gallary
import CommonGallary from 'common/gallary/Gallary'
// 引用公用组件FadeAnimation
import FadeAnimation from 'common/fade/FadeAnimation'
export default {
  name: 'DetailBanner',
  props: {
    sightName: String,
    bannerImg: String,
    gallaryImgs: Array
  },
  data () {
    return {
      showGallary: false
    }
  },
  components: {
    // 注册CommonGallary组件
    CommonGallary,
    FadeAnimation
  },
  methods: {
    // 显示gallary组件
    showgallary () {
      this.showGallary = true
    },
    // 隐藏gallary组件
    closegallary () {
      this.showGallary = false
    }
  }
}
</script>

<style lang='stylus' scoped>
  .banner
    position: relative
    // 防止抖动
    overflow hidden
    height 0
    padding-bottom 55%
    .banner-img
      width: 100%
    .banner-info
      display: flex
      position: absolute
      left: 0
      right: 0
      bottom: 0
      line-height: .6rem
      color: #fff
      .banner-title
        flex: 1
        font-size: .32rem
        padding: 0 .2rem
        // 渐变色
        background-image: linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
      .banner-number
        padding: 0 .32rem
        margin-top: .14rem
        line-height: .32rem
        height: .4rem
        border-radius: .2rem
        background: rgba(0, 0, 0, 0.8)
        font-size: .24rem
        .banner-icon
          font-size: .24rem
</style>
