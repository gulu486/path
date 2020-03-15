<template>
  <ul class="list">
    <li class="item"
      v-for="item in letters"
      :key="item"
      :ref="item"
      @click="letterClick"
      @touchstart="startMove"
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
      touchStatus: false,
      startY: 0,
      timer: null
    }
  },
  props: {
    city: Object
  },
  updated () {
    this.startY = this.$refs['A'][0].offsetTop
  },
  computed: {
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
      this.$emit('change', e.target.innerText)
    },
    startMove () {
      this.touchStatus = true
    },
    moveMove (e) {
      // console.log(e)
      if (this.timer) {
        clearTimeout(this.timer)
      }
      this.timer = setTimeout(() => {
        if (this.touchStatus) {
          const touchY = e.touches[0].clientY - 79
          const index = Math.floor((touchY - this.startY) / 20)
          // console.log(index)
          if (index >= 0 && index < this.letters.length) {
            this.$emit('change', this.letters[index])
          }
        }
      }, 16)
    },
    endMove () {
      this.touchStatus = false
    }
  }
}
</script>

<style lang='stylus' scoped>
  @import '~styles/varibles.styl'
  .list
    display flex
    flex-direction column
    justify-content center
    position absolute
    top 1.58rem
    right 0
    bottom 0
    width .4rem
    .item
      text-align center
      line-height .4rem
      color $bgColor
</style>
