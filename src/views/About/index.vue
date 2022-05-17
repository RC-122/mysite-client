<template>
  <div class="about-container" v-loading="loading || !srcLoaded">
    <iframe
      v-if="data"
      class="iframe-container"
      :src="data"
      frameborder="0"
      @load="srcLoaded = true"
    ></iframe>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data(){
    return{
      srcLoaded:false
    }
  },
  computed: mapState("about", ["data", "loading"]),
  created() {
    this.$store.dispatch("about/fetchAbout");
  },
};
</script>

<style lang="less" scoped>
.about-container {
  width: 100%;
  height: 100%;
  position: relative;
  .iframe-container {
    width: 100%;
    height: 100%;
  }
}
</style>