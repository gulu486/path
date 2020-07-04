<template>
  <!-- ref获取dom -->
  <section class="list" ref="wrapper">
    <div>
      <div class="area">
        <!-- 1像素边框border-topbottom -->
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">{{ this.current }}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper" @click="cityClick(item.name)" v-for="item in hot" :key="item.id">
            <div class="button">{{ item.name }}</div>
          </div>
        </div>
      </div>
      <!-- ref为key,获取该区域的dom -->
      <div class="area" v-for="(item, key) in city" :key="key" :ref="key">
        <div class="title border-topbottom">{{ key }}</div>
        <div class="item-list" @click="cityClick(textItem.name)" v-for="textItem in item" :key="textItem.id">
          <div class="item border-bottom">{{ textItem.name }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// 引入better-scroll包
import BScroll from 'better-scroll'
// vuex的api
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'CityList',
  props: {
    hot: Array,
    city: Object,
    letter: String
  },
  mounted () {
    // BScroll方法,实现滚动,配置参数解决无法点击
    this.scroll = new BScroll(this.$refs.wrapper, {click: true})
  },
  computed: {
    // 展开运算符,city映射到计算属性的current
    ...mapState({
      current: 'city'
    })
  },
  watch: {
    // 监听letter改变
    letter () {
      // console.log(this.letter)
      if (this.letter) {
        // 指定区域ref,element必须为dom元素
        const element = this.$refs[this.letter][0]
        // BScroll方法,滚动到指定位置区域
        this.scroll.scrollToElement(element)
        // console.log(element)
      }
    }
  },
  methods: {
    cityClick (el) {
      // alert(el)
      // actions: this.$store.dispatch('citychange', el)
      // mutations: this.$store.commit('citychange', el)
      this.citychange(el)
      // 编程式导航,返回到首页
      this.$router.push('/')
    },
    // 映射到citychange
    ...mapMutations(['citychange'])
  }
}
</script>

<style lang='stylus' scoped>
// 引入varibles.styl
  @import '~styles/varibles.styl'
    // css3伪元素之前和之后添加样式
  .border-topbottom
    &:before
      border-color: #ccc
    &:after
      border-color: #ccc
  .border-bottom
    &:before
      border-color: #ccc
  .list
    // header部分撑开,固定,使用better-scroll滚动
    overflow: hidden
    position: absolute
    top: 1.58rem
    right: 0
    bottom: 0
    left: 0
    .title
      line-height: .54rem
      padding-left: .2rem
      color: #666
      font-size: .26rem
      background: #eee
    .button-list
      padding: .1rem .6rem .1rem .1rem
      // BFC
      overflow: hidden
      .button-wrapper
        float: left
        width: 33.33%
        .button
          text-align: center
          margin: .1rem
          padding: .1rem 0
          border-radius: .06rem
          border: .02rem solid #ccc
    .item-list
      .item
        padding-left: .2rem
        line-height: .76rem
        color: #666
</style>
