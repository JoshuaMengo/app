<template>
  <div>
    <div class="list_item" v-for="(item,index) in datalist" :key="index">
      <div class="item_img">
        <img :src="item.imgurl ? item.imgurl[0] :''" />
      </div>
      <div
        style="display:flex;flex-direction: row;
  align-items: center;
justify-content: space-between;"
      >
        <div>
          <div class="item_tit">{{ item.content ? item.content : '' }}</div>
          <div class="item_time">{{ item.createdAt ? item.createdAt : '' }}</div>
        </div>
        <van-icon
          name="ellipsis"
          style="margin-right:.3rem"
          size=".5rem"
          color="#999"
          @click="showDialog"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { Dialog } from 'vant' 
export default {
    
  props: {
    datalist: {
      type: Array,
      default: []
    }
  },
  components:{
      [Dialog.Component.name]: Dialog.Component,
  },
  methods: {
    showDialog() {
      Dialog.confirm({
        title: "注意",
        message: "是否确定删除"
      })
        .then(() => {
          // on confirm
        })
        .catch(() => {
          // on cancel
        });
    }
  }
};
</script>

<style scope>
.item_img {
  width: 100%;
  height: 5rem;
}
.item_img img {
  height: 100%;
  width: 100%;
  object-fit: cover;
  /* height:3rem; */
  /* overflow: hidden; */
  /* object-fit: cover; */
}
.item_tit {
  font-size: 0.3rem;
  margin: 0 0.3rem;
}
.item_time {
  font-size: 0.3rem;
  margin: 0.1rem 0.3rem 0.1rem;
  color: #ccc;
}
</style>