<template>
  <div class="search-bar">
    <div class="search-bar-wrapper">
      <van-icon class="search" name="search"></van-icon>
      <input class="search-bar-input"/>
      <van-icon class="clear" name="clear"></van-icon>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  .search-bar{
    padding: 20px;
    height: 40px;
    .search-bar-wrapper{
      display: flex;
      .search-bar-input{
        flex:1
      }
    }
  }
</style>