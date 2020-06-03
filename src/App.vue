<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <postlist /> -->
    <!-- <detail /> -->
    <router-view />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import postlist from './components/postlist.vue'
// import detail from './components/detail.vue'



export default {
  name: 'App',
  components: {
    // HelloWorld,
    // postlist,
    // detail
  }
}
</script>

<style>
*{
  margin:0;
  padding:0;
}
body{
  /* background: #f1f1f1; */
  width:100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
