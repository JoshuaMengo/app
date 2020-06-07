<template>
  <div>
    <div class="list_item" v-for="(item,index) in datalist" :key="index">
      <div class="item_img">
        <van-image
          width="100%"
          height="100%"
          lazy-load
          :src="item.imgurl ? item.imgurl[0] :''"
          v-if="item.imgurl.length === 1"
        />
        <van-swipe class="my-swipe" indicator-color="white" @change="onChange" v-else>
          <van-swipe-item v-for="(imgItem,index) in item.imgurl" :autoplay="500" :key="index">
            <van-image width="100%" height="100%" lazy-load :src="imgItem" />
          </van-swipe-item>
          <template #indicator>
            <div class="custom-indicator">{{ current ? current + 1 : 1 }}/{{item.imgurl.length}}</div>
          </template>
        </van-swipe>
        <!-- <img :src="item.imgurl ? item.imgurl[0] :''" lazy-load /> -->
      </div>
      <div
        style="display:flex;
        flex-direction: row;
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
          @click="showDialog(item.id)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { getDeleteDiary, index } from "@/api/api";
import { Dialog } from "vant";
export default {
  props: {
    datalist: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      current: 0 //轮播图次数
    };
  },
  components: {
    [Dialog.Component.name]: Dialog.Component
  },
  methods: {
    del(id) {
      return new Promise(async (resolve, reject) => {
        const resa = await getDeleteDiary(id);
        resolve(resa);
      });
    },

    showDialog(id) {
      Dialog.confirm({
        title: "标题",
        message: "弹窗内容"
      }).then(async () => {
        const resa = await getDeleteDiary(id);
        this.$emit("Refresh");
        // let result = this.del(id);
        // result.then(res=>{
        //   console.log(res);
        // })
      });
    },
    onChange(index) {
      this.current = index;
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
.my-swipe {
  position: relative;
}
.custom-indicator {
  position: absolute;
  right: 0.4rem;
  top: 0.4rem;
  padding: 2px 5px;
  font-size: 0.4rem;
  color: ghostwhite;
  /* background: rgba(0, 0, 0, 0.1); */
}
</style>