<template>
  <section>
    <detail-banner :sightName="sightName" :bannerImg="bannerImg" :gallaryImgs="gallaryImgs"/>
    <detail-header/>
    <div class="content">
      <detail-list :list="list"/>
    </div>
  </section>
</template>

<script>
// 引入axios
import axios from 'axios'
// 引入Banner组件
import DetailBanner from './components/Banner'
// 引用Header组件
import DetailHeader from './components/Header'
// 引入List组件
import DetailList from './components/List'
export default {
  name: 'Detail',
  // props: ['id'],
  data () {
    return {
      list: [],
      sightName: '',
      gallaryImgs: [],
      bannerImg: ''
    }
  },
  components: {
    // 注册DetailBanner组件
    DetailBanner,
    // 注册DetailHeader组件
    DetailHeader,
    // 注册DetailList组件
    DetailList
  },
  mounted () {
    // axios.get('/api/detail.json?id=' + this.$route.params.id)
    axios.get('/api/detail.json', {
      params: {
        id: this.$route.params.id
      }
    }).then(res => {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.sightName = data.sightName
        this.list = data.categoryList
        this.gallaryImgs = data.gallaryImgs
        this.bannerImg = data.bannerImg
      }
    })
      .catch(error => {
        console.log(error)
      })
  }
}
</script>

<style lang='stylus' scoped>
  .content
    // 撑开页面.可以滚动
    height: 12rem
</style>
