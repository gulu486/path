<template>
  <ul class="list">
    <!-- 触摸事件touchstart touchmove touchend -->
    <!-- 阻止默认行为prevent -->
    <li class="item"
      v-for="item in letters"
      :key="item"
      :ref="item"
      @click="letterClick"
      @touchstart.prevent="startMove"
      @touchmove="moveMove"
      @touchend="endMove"
    >
      {{ item }}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'CityAlphabet',
  data () {
    return {
      // 是否触摸标识
      touchStatus: false,
      startY: 0,
      timer: null
    }
  },
  props: {
    city: Object
  },
  updated () {
    // 字母A到header的距离
    this.startY = this.$refs['A'][0].offsetTop
  },
  computed: {
    // 返回数组['A','B','C']
    letters () {
      const letters = []
      for (let i in this.city) {
        letters.push(i)
      }
      return letters
    }
  },
  methods: {
    letterClick (e) {
      // console.log(e.target.innerText)
      // e.target.innerText传递出去
      this.$emit('change', e.target.innerText)
    },
    startMove () {
      this.touchStatus = true
    },
    moveMove (e) {
      // console.log(e)
      // 函数节流,性能优化
      if (this.timer) {
        clearTimeout(this.timer)
      }
      this.timer = setTimeout(() => {
        if (this.touchStatus) {
          // 79为header高度,触摸字母到header距离
          const touchY = e.touches[0].clientY - 79
          // 触摸字母到字母A的距离,获取对应字母的index(0,1,2,3)
          const index = Math.floor((touchY - this.startY) / 20)
          // console.log(index)
          if (index >= 0 && index < this.letters.length) {
            this.$emit('change', this.letters[index])
          }
        }
      }, 8)
    },
    endMove () {
      this.touchStatus = false
    }
  }
}
</script>

<style lang='stylus' scoped>
// 引入varibles.styl
  @import '~styles/varibles.styl'
  .list
    display: flex
    // 垂直且居中
    flex-direction: column
    justify-content: center
    // 绝对定位
    position: absolute
    top: 1.58rem
    right: 0
    bottom: 0
    width: .4rem
    .item
      text-align: center
      line-height: .4rem
      color: $bgColor
</style>
