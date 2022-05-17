<template>
  <div class="app">
    <LayoutVue>
      <template #left>
        <div class="aside">
          <SiteAsideVue />
        </div>
      </template>
      <template>
        <div class="main" ref="container">
          <RouterView />
        </div>
      </template>
    </LayoutVue>
    <ToTop />
  </div>
</template>
<script>
import SiteAsideVue from "./components/SiteAside.vue";
import LayoutVue from "./components/Layout.vue";
import ToTop from "./components/ToTop.vue";
export default {
  name: "App",
  components: {
    SiteAsideVue,
    LayoutVue,
    ToTop,
  },

  data() {
    return {
      total: 300,
      current: 1,
    };
  },
  methods: {
    handlePageChange(newPage) {
      this.current = newPage;
    },
  },
};
</script>

<style lang="less" scoped>
@import url("~@/style/mixin.less");
.app {
  width: 300px;
  height: 100%;
  // background-color: rgb(32, 32, 32);
  position: relative;
  .aside{
    height:100%;
  }
  .self-fill(fixed);
  .main {
    width: 100%;
    height: 100%;
  }
}
</style>
