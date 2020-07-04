<template>
  <section>
    <div class="title">热销推荐</div>
    <ul>
      <!-- "'/detail/' + item.id" -->
      <!-- 1像素边框border-bottom -->
      <!-- 跳转到detail页,替换成li标签 -->
      <router-link
        tag="li"
        :to="{ name: 'Detail', params: { id:item.id}}"
        class="item border-bottom"
        v-for="item of list"
        :key="item.id"
      >
        <img class="item-img" :src="item.imgUrl" />
        <div class="item-info">
          <p class="item-title">{{ item.title }}</p>
          <p class="item-desc">{{ item.desc }}</p>
          <button class="item-button">查看详情</button>
        </div>
        <p></p>
      </router-link>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    list: Array
  }
}
</script>

<style lang='stylus' scoped>
// 引入mixins.styl
@import '~styles/mixins.styl'
.title
  line-height: 0.8rem
  background: #eee
  margin-top: 0.2rem
  // 文本缩进
  text-indent: 0.2rem
.item
  height: 1.9rem
  display: flex
  .item-img
    width: 1.7rem
    height: 0.1 0.7rem
    padding: 0.1rem
  .item-info
    flex: 1;
    // 解决不显示省略点
    min-width: 0
    padding: 0.1rem
    .item-title
      line-height: 0.54rem
      font-size: 0.32rem
      // 省略点
      ellipsis()
    .item-desc
      line-height: 0.4rem
      color: #ccc
      // 省略点
      ellipsis()
    .item-button
      line-height: 0.44rem
      margin-top: 0.16rem
      background: #ff9300
      padding: 0 0.2rem;
      border-radius: 0.06rem
      color: #fff
</style>
