<template>
  <div id="app">
    <!-- iconfont的class固定前缀icon iconfont -->
    <!-- <i class="icon iconfont icon-dianpu"></i> -->
    <left-nav></left-nav>
    <router-view/>
  </div>
</template>

<script>
import leftNav from '@/components/common/leftNav'
export default {
  name: 'App',
  components: {
    leftNav
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
