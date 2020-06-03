<template>
  <div class="container">
    <van-popup v-model="show" position="left" :style="{ height: '100%' ,width:'80%'}" >
      <Popup />
    </van-popup>
    <Navbar @childrenGolist="golist" @openMenu="openMenu" />
    <div class="list_container">
      <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
        <!-- <div class="list_item" @click="godetail" v-for="(item,index) in datalist" :key="index">
          <div class="item_img">
            <img :src="item.imgurl ? item.imgurl[0] :''" />
          </div>
          <div class="item_tit">{{ item.content ? item.content : '' }}</div>
          <div class="item_time">{{ item.createdAt ? item.createdAt : '' }}</div>
        </div>-->
        <InsImg :datalist="datalist" />
      </van-pull-refresh>
    </div>
    <tagbar />
  </div>
</template>

<script>
// import { Toast } from 'vant';
import { index } from "@/api/api";
import InsImg from "@/components/ins_img";
import tagbar from "@/components/com/tagbar";
import Navbar from "@/components/com/navbar";
import Popup from "@/components/com/popup";


export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  components: {
    tagbar, //顶部导航
    InsImg,
    Navbar,
    Popup
  },
  data() {
    return {
      count: 0,
      isLoading: false,
      datalist: [],
      show: false
    };
  },
  async created() {
    const _this = this;
    const res = await index();
    if (res.code === 0) {
      _this.datalist = res.data.rows.map(el => {
        el.imgurl = JSON.parse(el.imgurl);
        return el;
      });
      _this.datalist = _this.datalist.reverse();
    }
    console.log(_this.datalist, res, "111111");
  },
  methods: {
    openMenu() {
      console.log("~~~~~~~");
      this.show = true;
    },
    golist() {
      this.$router.push("/list");
    },
    godetail() {
      this.$router.push("/detail");
    },
    onRefresh() {
      setTimeout(() => {
        this.$toast("刷新成功");
        this.isLoading = false;
        this.count++;
      }, 1000);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  width: 100%;
  /* height:100; */
}
.list_container {
  /* width: 100%; */
  width: auto;
  padding: 1rem 0 1.5rem;
}
.list_item {
  /* margin-bottom: 0.5rem; */
  background: #fff;
  /* border-bottom: 1px solid #ddd; */
  /* box-shadow: #ccc 3px 3px 5px; */
}
</style>
