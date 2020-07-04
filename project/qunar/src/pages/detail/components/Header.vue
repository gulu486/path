<template>
  <header>
    <router-link tag="div" to="/" class="header-abs" v-show="showAbs">
      <div class="iconfont header-back-icon">&#xe624;</div>
    </router-link>
    <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
      景点详情
      <router-link to='/'>
        <span class="iconfont header-fixed-back">&#xe624;</span>
      </router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      showAbs: true,
      // style对象绑定
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll () {
      const top = document.documentElement.scrollTop
      // console.log(document.documentElement.scrollTop)
      if (top > 60) {
        let opacity = top / 140
        // opacity从0到1递增
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = { opacity }
        // 显示header
        this.showAbs = false
      } else {
        this.showAbs = true
      }
    }
  },
  mounted () {
    // 全局绑定
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang='stylus' scoped>
// 引入varibles.styl
  @import '~styles/varibles.styl'
  .header-abs
    position absolute
    left .2rem
    top .2rem
    width .8rem
    height .8rem
    line-height .8rem
    // 一个圆
    border-radius .4rem
    text-align center
    background rgba(0, 0, 0, 0.8)
    .header-back-icon
      color #fff
      font-size .4rem
  .header-fixed
    z-index 2
    position fixed
    left 0
    top 0
    right 0
    overflow: hidden
    height: $headerHeight
    line-height: $headerHeight
    text-align: center
    color: #fff
    background: $bgColor
    font-size: .32rem
  .header-fixed-back
    position absolute
    top 0
    left 0
    width .64rem
    text-align center
    font-size .4rem
    color #fff
</style>
