<template>
  <div class="empty-container">
    <IconVue type="empty" />
    <p>{{ text }}</p>
  </div>
</template>

<script>
import IconVue from "./Icon.vue";
export default {
  components: {
    IconVue,
  },
  props: {
    text: {
      type: String,
      default: "无数据",
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/style/mixin.less";
@import "~@/style/var.less";
.empty-container {
  .self-center();
    color:@gray;
    text-align:center;
}
.iconfont-container{
    font-size:72px;
}
</style>