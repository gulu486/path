<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper" v-for="item in hot" :key="item.id">
            <div class="button">{{ item.name }}</div>
          </div>
        </div>
      </div>
      <div class="area" v-for="(item, key) in city" :key="key">
        <div class="title border-topbottom">{{ key }}</div>
        <div class="item-list" v-for="textItem in item" :key="textItem.id">
          <div class="item border-bottom">{{ textItem.name }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'CityList',
  props: {
    hot: Array,
    city: Object
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper)
  }
}
</script>

<style lang='stylus' scoped>
  @import '~styles/varibles.styl'
  .border-topbottom
    &:before
      border-color #ccc
    &:after
      border-color #ccc
  .border-bottom
    &:before
      border-color #ccc
  .list
    overflow hidden
    position absolute
    top 1.58rem
    right 0
    bottom 0
    left 0
    .title
      line-height .54rem
      padding-left .2rem
      color #666
      font-size .26rem
      background #eee
    .button-list
      padding .1rem .6rem .1rem .1rem
      overflow hidden
      .button-wrapper
        float left
        width 33.33%
        .button
          text-align center
          margin .1rem
          padding .1rem 0
          border-radius .06rem
          border .02rem solid #ccc
    .item-list
      .item
        padding-left .2rem
        line-height .76rem
        color #666
</style>
