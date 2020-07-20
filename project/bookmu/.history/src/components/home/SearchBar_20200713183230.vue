<template>
  <div class="search-bar">
    <div class="search-bar-wrapper">
      <div class="search">
        <van-icon name="search" color="#858C96" size="16px"></van-icon>
      </div>
      <input class="search-bar-input"/>
      <div class="clear" v-if="searchWord.length > 0" @click="onClearClick">
        <van-icon name="clear" color="#ccc" size="16px"></van-icon>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    // 搜索框是否可交互
    disabled: {
      type: Boolean,
      default: false
    },
    // 搜索框是否获得焦点
    focus: {
      type: Boolean,
      default: false
    },
    // 搜索框最大可输入字符数
    limit: {
      type: Number,
      default: 50
    },
    // 热门搜索词
    hotSearch: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      // 搜索关键字
      searchWord: ''
    }
  },
  methods: {
    // 搜索框点击事件
    onSearchBarClick () {
      this.$emit('onClick')
    },
    // 点击清空事件
    onClearClick () {
      this.searchWord = ''
      this.$emit('onClear')
    },
    // 输入监听事件
    onChange (v) {
      let value = v.mp.detail.value
      if (value.length > this.limit) {
        value = value.slice(0, this.limit)
        this.searchWord = this.searchWord.slice(0, this.limit)
      }
      this.$emit('onChange', value)
    },
    // 点击虚拟键盘搜索事件
    onConfirm (v) {
      this.$emit('onConfirm', v.mp.detail.value)
    },
    // 对输入框关键字赋值
    setValue (v) {
      this.searchWord = v
    },
    // 获取输入框的关键字
    getValue () {
      return this.searchWord
    }
  }
}
</script>

<style lang="scss" scoped>
.search-bar {
  padding: 10px 15px;
  height: 40px;

  .search-bar-wrapper {
    display: flex;
    width: 100%;
    height: 100%;
    background: #f5f7f9;
    border-radius: 20px;
    padding: 2px 15px;
    box-sizing: border-box;

    .search {
      display: flex;
      align-items: center;
      height: 100%;
    }

    .search-bar-input {
      flex: 1;
      height: 100%;
      color: #333;
      font-size: 14px;
      margin-left: 5px;
      background: transparent;
    }

    .clear {
      display: flex;
      align-items: center;
      height: 100%;

      &:active {
        opacity: 0.7;
      }
    }
  }
}
</style>
