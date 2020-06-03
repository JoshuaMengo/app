<template>
  <div class="container">
    <van-nav-bar
      title="标题"
      left-text="返回"
      right-text
      left-arrow
      style="position:fixed;top:0;left:0;right:0;"
    />
    <div class="container_center">
      <div class="item_img">
        <img
          src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1584738427537&di=bb005d88bdc0ee294564ebc868994011&imgtype=0&src=http%3A%2F%2Ft8.baidu.com%2Fit%2Fu%3D2247852322%2C986532796%26fm%3D79%26app%3D86%26f%3DJPEG%3Fw%3D1280%26h%3D853"
        />

      </div>
      <p style="margin-bottom:.3rem;font-size:.25rem">2020年3月22日</p>
      <p>赛季个阿斯顿萨达萨达萨达赛季个阿斯顿萨达萨达萨达赛季个阿斯顿萨达萨达萨达赛季个阿斯顿萨达萨达萨达赛季个阿斯顿萨达萨达萨达赛季个阿斯顿萨达萨达萨达赛季个阿斯顿萨达萨达萨达</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "detail",
  props: {
    msg: String
  },
  data() {
    return {};
  },
  async created() {},
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  width: 100%;
  /* height:100; */
  background: white;
  /* height:100vh; */
  /* overflow: hidden; */
}

.container_center {
  width: 90%;
  padding-top: 1rem;
  margin: 0 auto;
}
.item_img {
  width: 100%;
}
.item_img img {
  width: 100%;
}
.container_center p {
  font-size: 0.3rem;
}
</style>
