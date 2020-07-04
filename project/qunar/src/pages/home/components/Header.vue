<template>
  <header class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont back-icon">&#xe632;</span>
      选择景点/游玩
    </div>
    <!-- 路由跳转到city -->
    <router-link to="/city">
      <div class="header-right">
        {{ this.city }}
        <!-- {{ this.$store.state.city }} -->
        <!-- {{ this.doubleCity }} -->
        <span class="iconfont arrow-icon">&#xe64a;</span>
      </div>
    </router-link>
  </header>
</template>

<script>
// vuex的api
// import { mapState } from 'vuex'
import { mapState, mapGetters } from 'vuex'
export default {
  name: 'HomeHeader',
  computed: {
    // 展开运算符,state数据映射到computed中
    ...mapState(['city']),
    // vuex的getter,计算属性类似
    ...mapGetters(['doubleCity'])
  }
}
</script>

<style lang='stylus' scoped>
// npm安装stylus，stylus-loader
// 1rem = html font-size = 50px，二倍屏
//引入varibles.styl
//在css中引入文件需src = ~@
  @import '~styles/varibles.styl'
  .header
    display: flex
    //。86rem
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
      // 自动撑开
      flex: 1
      background: #fff
      color: #ccc
      border-radius: .1rem
      margin-top: .12rem
      margin-left: .2rem
      padding-left: .2rem
      // 居中
      height: .64rem
      line-height: .64rem
    .header-right
      float: right
      // 自适应宽度
      min-width: 1.04rem
      padding: 0 .1rem
      text-align: center
      // 改变router-link默认颜色(a标签)
      color: #fff
      .arrow-icon
        margin-left: -.04rem
        font-size: .24rem
</style>
