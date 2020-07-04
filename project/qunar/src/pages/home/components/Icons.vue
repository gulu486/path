<template>
  <section class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page, index) of pages" :key="index">
        <div class="icon" v-for="item of page" :key="item.id">
          <div class="icon-img">
            <img class="icon-img-content" :src="item.imgUrl"/>
          </div>
          <p class="icon-desc">{{ item.desc }}</p>
        </div>
      </swiper-slide>
    </swiper>
  </section>
</template>

<script>
export default {
  name: 'HomeIcons',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        // 轮播图不自动滚动
        autoplay: false
      }
    }
  },
  computed: {
    pages () {
      const pages = []
      // 对list遍历
      this.list.forEach((item, index) => {
        // 向下取整，page等于0或1,判断，push值
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      // 返回二维数组
      return pages
    }
  }
}
</script>

<style lang='stylus' scoped>
  // 引入varibles.styl和mixins.styl
  @import '~styles/varibles.styl'
  @import '~styles/mixins.styl'
  .icons >>> .swiper-container
    // 穿透，高度撑开
    height: 0
    padding-bottom: 50%
  .icons
    // div标签为width：100%
    margin-top: .1rem
    .icon
      position: relative
      float: left
      // w:h=1：1
      height: 0
      width:25%
      padding-bottom: 25%
      .icon-img
        position: absolute
        top: 0
        left: 0
        right: 0
        // BFC
        box-sizing: border-box
        bottom: .44rem
        padding: .1rem
        .icon-img-content
          height: 100%
          // 图片居中
          display: block
          margin: 0 auto
      .icon-desc
        position: absolute
        left: 0
        right: 0
        bottom: 0
        height: .44rem
        line-height: .44rem
        color: $darkTextColor
        text-align: center
        // 字符过长设置为省略点
        ellipsis()
</style>
