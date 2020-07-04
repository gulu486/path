<template>
  <div id="app">
    <!-- 路由的内容放进内存中,不再重新渲染，detail页面不做缓存，exclude="Detail" -->
    <keep-alive exclude="Detail">
      <!-- 路由所对应的内容 -->
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
