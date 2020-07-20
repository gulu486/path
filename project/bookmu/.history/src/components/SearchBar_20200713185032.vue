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
