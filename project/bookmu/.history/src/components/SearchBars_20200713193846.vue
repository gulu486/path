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
    padding: 10px 15px;
    height: 40px;
    .search-bar-wrapper{
      display: flex;
      align-items: center;
      background: #F5F7F9;
      border-radius: 20px;
      padding:12px 17px;
      .search-bar-input{
        flex:1;
        margin-left:8px;
        font-family: PingFangSC-Regular;
        font-size: 30px;
        color: #ADB4BE;
        letter-spacing: 0;
      }
      .search{
        display: flex;
        align-items: center;
      }
      .clear{
        display: flex;
        align-items: center;
      }
    }
  }
</style>