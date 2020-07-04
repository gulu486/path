<template>
  <header class="header">
    城市选择
    <!-- 路由返回到首页 -->
    <router-link to='/'>
      <span class="iconfont header-back">&#xe624;</span>
    </router-link>
  </header>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style lang='stylus' scoped>
// 引入varibles.styl
  @import '~styles/varibles.styl'
  .header
    position relative
    overflow: hidden
    height: $headerHeight
    line-height: $headerHeight
    text-align: center
    color: #fff
    background: $bgColor
    font-size: .32rem
  .header-back
    position: absolute
    top: 0
    left: 0
    width: .64rem
    text-align: center
    font-size: .4rem
    // 改变路由组件默认颜色
    color: #fff
</style>
