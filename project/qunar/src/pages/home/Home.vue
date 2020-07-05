<template>
  <div>
    <home-header/>
    <home-swiper :list=swiperList />
    <home-icons :list=iconList />
    <home-recommend :list=recommendList />
    <home-weekend :list=weekendList />
  </div>
</template>

<script>
// 引用Header组件
// import HomeHeader from './components/Header'
// 引用Swiper组件
import HomeSwiper from './components/Swiper'
// 引用Icons组件
import HomeIcons from './components/Icons'
// 引用Recommend组件
import HomeRecommend from './components/Recommend'
// 引用Weekend组件
import HomeWeekend from './components/Weekend'
// 引入axios
import axios from 'axios'
// vuex的api
import { mapState } from 'vuex'
export default {
  name: 'Home',
  components: {
    // 注册HomeHeader组件,项目比较大的时候（>1mb），使用异步组件
    HomeHeader: () => import('./components/Header'),
    // 注册HomeSwiper组件
    HomeSwiper,
    // 注册HomeIcons组件
    HomeIcons,
    // 注册HomeRecommend组件
    HomeRecommend,
    // 注册HomeWeekend组件
    HomeWeekend
  },
  // 一个组件的 data 选项必须是一个函数，因此每个实例可以维护一份被返回对象的独立的拷贝
  data () {
    return {
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: [],
      lastCity: ''
    }
  },
  computed: {
    ...mapState(['city'])
  },
  methods: {
    getMsgInfo () {
      axios.get('/api/index.json?city=' + this.city)
        .then(res => {
          res = res.data
          if (res.ret && res.data) {
            const data = res.data
            this.swiperList = data.swiperList
            this.iconList = data.iconList
            this.recommendList = data.recommendList
            this.weekendList = data.weekendList
          }
        })
        .catch(error => {
          console.log(error)
        })
    }
  },
  // 挂载，整个首页只发送一次ajax请求
  mounted () {
    this.lastCity = this.city
    this.getMsgInfo()
  },
  // 页面重新显示的时候执行
  activated () {
    if (this.lastCity !== this.city) {
      this.lastCity = this.city
      this.getMsgInfo()
    }
  }
}
</script>
