<template>
  <div>
    <van-nav-bar style="position:fixed;top:0;left:0;right:0;">
      <van-icon
        :name="this.leftIcon"
        slot="left"
        size=".5rem"
        color="#999"
        @click="$emit('clickleft');"
      />
      <p
        v-if="this.title !== 'none'"
        style="color:#999;font-size:.32rem"
        slot="title"
      >
        {{this.title}}
      </p>
      <van-icon
        :name="this.rightIcon"
        slot="right"
        size=".5rem"
        color="#ccc"
        @click="$emit('clickRight')"
      />
    </van-nav-bar>
  </div>
</template>

<script>
export default {
  props: {
    rightIcon: {
      type: String,
      default: "none"
    },
    leftIcon: {
      type: String,
      default: "none"
    },
    title: {
      type: String,
      default: "none"
    }
  },
  methods: {}
};
</script>
