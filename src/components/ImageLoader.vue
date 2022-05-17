<template>
  <div class="image-loader-container">
    <img v-if="!everyThing" class="placeholder" :src="placeholder" alt="" />
    <img
      @load="handleLoade"
      :style="{ opacity: originOpacity, transition: `${duration}ms`}"
      :src="src"
      alt=""
    />
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      default: 500,
    },
  },
  data() {
    return {
      originLoaded: false,
      everyThing:false
    };
  },
  computed: {
    originOpacity() {
      return this.originLoaded ? 1 : 0;
    },
  },
  methods: {
    handleLoade() {
      this.originLoaded = true;
      this.$emit("load")
      setTimeout(()=>{
          this.everyThing = true;
      }, this.duration)
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/style/mixin.less";
.image-loader-container {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  img {
    object-fit: cover;
    .self-fill();
  }
  .placeholder {
    filter: blur(2vw);
  }
}
</style>