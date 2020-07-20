<template>
  <div class="search-bar">
    <div class="search-bar-wrapper">
      <div class="search">
        <van-icon name="search" color="#858C96" size="16px"></van-icon>
      </div>
      <input class="search-bar-input"/>
      <div class="clear">
        <van-icon name="clear" color="#ccc" size="16px"></van-icon>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.search-bar {
  // 边距
  padding: 10px 15px;
  // 高度
  height: 40px;

  .search-bar-wrapper {
    // flex布局
    display: flex;
    width: 100%;
    height: 100%;
    // 背景色
    background: #f5f7f9;
    // 圆角
    border-radius: 20px;
    padding: 2px 15px;
    box-sizing: border-box;

    .search {
      display: flex;
      align-items: center;
      height: 100%;
    }

    .search-bar-input {
      // 长度
      flex: 1;
      height: 100%;
      color: #333;
      font-size: 14px;
      // 边距
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
