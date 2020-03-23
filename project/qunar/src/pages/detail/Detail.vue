<template>
  <div>
    <detail-banner :sightName="sightName" :bannerImg="bannerImg" :gallaryImgs="gallaryImgs"></detail-banner>
    <detail-header></detail-header>
    <div class="content">
      <detail-list :list="list"></detail-list>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
export default {
  name: 'Detail',
  data () {
    return {
      list: [],
      sightName: '',
      gallaryImgs: [],
      bannerImg: ''
    }
  },
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  mounted () {
    this.getDetailInfo()
  },
  methods: {
    getDetailInfo () {
      // axios.get('/api/detail.json?id=' + this.$route.params.id)
      axios.get('/api/detail.json', {
        params: {
          id: this.$route.params.id
        }
      }).then(this.getDataSucc)
    },
    getDataSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.sightName = data.sightName
        this.list = data.categoryList
        this.gallaryImgs = data.gallaryImgs
        this.bannerImg = data.bannerImg
      }
    }
  }
}
</script>

<style lang='stylus' scoped>
  .content
    height 50rem
</style>
