<template>
  <div>
    <router-view />
    <van-tabbar route>
      <van-tabbar-item replace to="/" icon="home-o"></van-tabbar-item>
      <van-tabbar-item replace to="/detail" icon="search"></van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0
    };
  }
};
</script>

<style>
</style>