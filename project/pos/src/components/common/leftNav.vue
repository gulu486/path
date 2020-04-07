<template>
  <div class="left-nav">
    <ul>
      <li>
        <!-- iconfont的class固定前缀icon iconfont -->
        <i class="icon iconfont icon-goumai"></i>
        <div>收银</div>
      </li>
      <li>
        <!-- iconfont的class固定前缀icon iconfont -->
        <i class="icon iconfont icon-dianpu"></i>
        <div>店铺</div>
      </li>
      <li>
        <!-- iconfont的class固定前缀icon iconfont -->
        <i class="icon iconfont icon-shangpingouwudai"></i>
        <div>商品</div>
      </li>
      <li>
        <!-- iconfont的class固定前缀icon iconfont -->
        <i class="icon iconfont icon-huiyuan"></i>
        <div>会员</div>
      </li>
      <li>
        <!-- iconfont的class固定前缀icon iconfont -->
        <i class="icon iconfont icon-tongji"></i>
        <div>统计</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'leftNav'
}
</script>

<style>
  .left-nav{
    /* 图标颜色 */
    color: #fff;
    /* 图标大小 */
    font-size: 10px;
    /* 基本的高，100%显示 */
    height: 100%;
    /* 背景色 */
    background-color: #1D8CE0;
    /* 向左浮动 */
    float: left;
    /* 基本的宽度 */
    width: 5%;
  }
  .left-nav ul{
    padding: 0px;
    margin: 0px;
  }
  .left-nav li{
    /* 去除黑点 */
    list-style: none;
    /* 居中对齐 */
    text-align: center;
    /* 下划线 */
    border-bottom: 1px solid #20a0ff;
    padding: 10px;
  }
  .iconfont{
    /* 让图标大些 */
    font-size: 24px;
  }
</style>
