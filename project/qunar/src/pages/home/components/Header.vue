<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont back-icon">&#xe632;</span>
      选择景点/游玩
    </div>
    <router-link to="/city">
      <div class="header-right">
        {{ this.city }}
        <span class="iconfont arrow-icon">&#xe64a;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader',
  props: {
    city: String
  }
}
</script>

<style lang='stylus' scoped>
  @import '~styles/varibles.styl'
  .header
    display: flex
    line-height: $headerHeight
    background: $bgColor
    color: #fff
    .header-left
      float: left
      width: .64rem
      .back-icon
        text-align: center
        font-size: .4rem
    .header-input
      flex: 1
      background: #fff
      color: #ccc
      border-radius: .1rem
      margin-top: .12rem
      margin-left: .2rem
      padding-left: .2rem
      height: .64rem
      line-height: .64rem
    .header-right
      float: right
      width: 1.24rem
      text-align: center
      color: #fff
      .arrow-icon
        margin-left: -.04rem
        font-size: .24rem
</style>
