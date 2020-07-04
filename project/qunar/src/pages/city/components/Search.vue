<template>
  <section>
    <div class="search">
      <input v-model="keyword" class="search-input" type="text" placeholder="输入城市名或拼音"/>
    </div>
    <!-- ref获取dom元素 -->
    <div class="search-content" ref="search" v-show="keyword">
      <ul>
        <!-- 下划线边框border-bottom -->
        <li class="search-item border-bottom" @click="cityClick(item.name)" v-for="item of list" :key="item.id">{{ item.name }}</li>
        <li class="search-item border-bottom" v-show="hasData">没有找到匹配数据</li>
      </ul>
    </div>
  </section>
</template>

<script>
// 引入better-scroll包
import BScroll from 'better-scroll'
// vuex的api
import { mapMutations } from 'vuex'
export default {
  name: 'CitySearch',
  props: {
    city: Object
  },
  data () {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  methods: {
    cityClick (el) {
      // alert(el)
      // actions: this.$store.dispatch('citychange', el)
      // mutation: this.$store.commit('citychange', el)
      this.citychange(el)
      // 返回到首页
      this.$router.push('/')
    },
    // 映射到citychange
    ...mapMutations(['citychange'])
  },
  computed: {
    // 没有匹配项判断
    hasData () {
      return !this.list.length
    }
  },
  watch: {
    // 监听双向绑定keyword的变化
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      // keyword为空时,list清空返回
      if (!this.keyword) {
        this.list = []
        return
      }
      // 函数节流,100毫秒后执行
      this.timer = setTimeout(() => {
        const result = []
        // 对city对象进行遍历,获取key值
        for (let i in this.city) {
          // 对数组进行遍历
          this.city[i].forEach(el => {
            // indexOf字符串检索
            if (el.spell.indexOf(this.keyword) > -1 || el.name.indexOf(this.keyword) > -1) {
              // el是对象
              result.push(el)
            }
          })
        }
        this.list = result
      }, 100)
    }
  },
  mounted () {
    // 滚动行为
    this.scroll = new BScroll(this.$refs.search, {click: true})
  }
}
</script>

<style lang='stylus' scoped>
// 引入varibles.styl
  @import '~styles/varibles.styl'
  .search
    height: .72rem
    background: $bgColor
    padding: 0 .1rem
    .search-input
      box-sizing: border-box
      width: 100%
      height: .62rem
      line-height: .62rem
      padding: 0 .1rem
      text-align: center
      color: #666
      border-radius: .06rem
  .search-content
    z-index: 1
    // 绝对定位+固定
    overflow: hidden
    position: absolute
    top: 1.58rem
    left: 0
    right: 0
    bottom: 0
    background: #eee
    .search-item
      line-height: .62rem
      padding-left: .2rem
      color: #666
      background: #fff
</style>
