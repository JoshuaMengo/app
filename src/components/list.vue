<template>
  <div class="container">
    <van-nav-bar
      title="标题"
      style="position:fixed;top:0;left:0;right:0;"
      @click-left="$router.go(-1)"
    >
      <van-icon
        name="arrow-left"
        slot="left"
        size=".5rem"
        color="#ccc"
      />
      <van-button
        type="info"
        size="small"
        style="border-radius:5px;"
        class="postBtn"
        @click="postAddlist"
        slot="right"
        :disabled="this.listdata.content + '' === ''"
      >
        发表
      </van-button>
    </van-nav-bar>
    <div class="container_center">
      <van-field
        v-model="listdata.content"
        type="textarea"
        rows="4"
        :border="false"
        placeholder="请输入用户名"
      />
      <van-uploader
        v-model="imgdatalst"
        accept="image/*"
        :after-read="afterRead"
        multiple 
      />
    </div>
  </div>
</template>
<script>
import { postaddlist } from "@/api/api"; //postuploader
export default {
  name: "list",
  props: {
    msg: String
  },
  data() {
    return {
      listdata: {
        content: "",
        imgurl: []
      },
      imgdatalst: []
    };
  },
  async created() {
    
  },
  methods: {
    afterRead(file) {
      const fromdata = new FormData();
      fromdata.append("file", file.file);
      this.$axios({
        method: "POST",
        url: "/upload",
        data: fromdata
      })
        .then(res => {
          if (res.code === 200) {
            this.listdata.imgurl.push(res.data.imgUrl);
            console.log("-----------------", this.listdata);
          }
          console.log("111211", this.listdata);
        })
        .catch(err => {
          console.log(err, "11111");
        });

      //  const res = await postuploader(fromdata)
      //将原图片显示为选择的图片
      //  this.$http.post({url:'/upload',data:datfromdataa})
    },

    async postAddlist() {
      this.listdata.imgurl = JSON.stringify(this.listdata.imgurl);
      try {
        const res = await postaddlist(this.listdata);
        if (res.code === 0) {
          this.$router.push("/");
        }
      } catch (error) {

      }
    }
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  width: 100%;
  /* height:100; */
  background: white;
  height: 100vh;
}
.container_center {
  /* margin-top: 0.8rem; */
  padding: 0.8rem 0.3rem;
}
.postBtn{
  border-radius: 5px !important;
  /* color:#999 !important; */
}
</style>
