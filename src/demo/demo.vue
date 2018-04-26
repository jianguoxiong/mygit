<template>
      <div id="demo">
            <p>11111</p>
            <router-view></router-view>
            <footerNav></footerNav>
      </div>
</template>
<script>
import footerNav from '@/tabbar/tabbar.vue'
export default {
  el: '#app',
  components: {
    footerNav
  }
}
</script>

<style>
a{
  text-decoration: none;
}
li,ul{
  list-style: none;
  margin:0;
  padding:0;
}
.none{
  display: none;
}
body{
  background: #fbfbfb;
  padding-bottom: 2.5rem;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background:#fbfbfb;
  text-align: center;
  color: #2c3e50;
  font-size:0.7rem;
}
/************自定义插件***************/
.mian .ivu-tabs-tab{
   height:1.5rem;
   line-height: 1.2rem;
}
/**************************************/
</style>
