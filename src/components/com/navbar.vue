<template>
  <div>
    <van-nav-bar style="position:fixed;top:0;left:0;right:0;">
      <van-icon name="wap-nav" slot="left" size='.5rem' color="#999" @click="$emit('openMenu');" />

      <p style="color:#999;font-size:.32rem" slot="title">
          Johnson阿的日常
      </p>
      <!-- <img src="@/assets/logo.png" slot="title" /> -->
      <!-- <router-link :to="{path:'/list'}"> -->
      <van-icon name="comment-o" slot="right" size=".5rem" color="#ccc" @click="$emit('childrenGolist')" />
      <!-- </router-link> -->
    </van-nav-bar>
  </div>
</template>

<script>
export default {
    methods:{


    }
};
</script>

<style>
</style>